// ===== INTERNATIONALIZATION TESTS =====
// Translation drift is silent: a key added to en.js and forgotten elsewhere
// shows English inside a French screen, and nothing throws. These tests turn
// every kind of drift into a failure.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LOCALES = ['en', 'es', 'fr', 'de', 'pt-BR'];
const REFERENCE = 'en';

// Flattens a catalog into { 'dotted.path': value } for every leaf, walking
// arrays by index so a translation that drops a list entry is caught too.
function flatten(node, prefix, out) {
    out = out || {};
    prefix = prefix || '';

    if (node === null || typeof node !== 'object') {
        out[prefix] = node;
        return out;
    }

    if (Array.isArray(node)) {
        node.forEach((item, i) => flatten(item, `${prefix}[${i}]`, out));
        return out;
    }

    Object.keys(node).forEach(key => {
        flatten(node[key], prefix ? `${prefix}.${key}` : key, out);
    });
    return out;
}

function placeholders(value) {
    if (typeof value !== 'string') return [];
    return (value.match(/\{(\w+)\}/g) || []).sort();
}

const flat = {};
LOCALES.forEach(tag => { flat[tag] = flatten(I18N_CATALOGS[tag]); });

describe('i18n: catalogs', () => {
    it('registers every advertised language', () => {
        LOCALES.forEach(tag => {
            assertTrue(!!I18N_CATALOGS[tag], `no catalog registered for ${tag}`);
        });
    });

    it('offers exactly the languages the settings dialog lists', () => {
        const offered = LANGUAGE_OPTIONS.map(option => option.value).sort();
        assertEqual(offered.join(','), LOCALES.slice().sort().join(','));
    });
});

describe('i18n: key parity with English', () => {
    const referenceKeys = Object.keys(flat[REFERENCE]).sort();

    LOCALES.filter(tag => tag !== REFERENCE).forEach(tag => {
        it(`${tag} defines every English key`, () => {
            const missing = referenceKeys.filter(key => !(key in flat[tag]));
            assertEqual(missing.length, 0,
                `${tag} is missing ${missing.length} key(s): ${missing.slice(0, 5).join(', ')}`);
        });

        it(`${tag} defines no key English lacks`, () => {
            const extra = Object.keys(flat[tag]).filter(key => !(key in flat[REFERENCE]));
            assertEqual(extra.length, 0,
                `${tag} has ${extra.length} stray key(s): ${extra.slice(0, 5).join(', ')}`);
        });
    });
});

describe('i18n: values', () => {
    LOCALES.forEach(tag => {
        it(`${tag} has no empty string`, () => {
            const empty = Object.keys(flat[tag]).filter(key => flat[tag][key] === '');
            assertEqual(empty.length, 0,
                `${tag} has empty value(s) at: ${empty.slice(0, 5).join(', ')}`);
        });

        it(`${tag} holds only strings and the documented nulls`, () => {
            const wrong = Object.keys(flat[tag]).filter(key => {
                const value = flat[tag][key];
                return typeof value !== 'string' && value !== null;
            });
            assertEqual(wrong.length, 0,
                `${tag} has non-string value(s) at: ${wrong.slice(0, 5).join(', ')}`);
        });
    });

    LOCALES.filter(tag => tag !== REFERENCE).forEach(tag => {
        it(`${tag} keeps every {placeholder} English uses`, () => {
            const broken = [];
            Object.keys(flat[REFERENCE]).forEach(key => {
                const expected = placeholders(flat[REFERENCE][key]).join(',');
                const actual   = placeholders(flat[tag][key]).join(',');
                if (expected !== actual) broken.push(`${key} (en: ${expected || 'none'}, ${tag}: ${actual || 'none'})`);
            });
            assertEqual(broken.length, 0,
                `${broken.length} placeholder mismatch(es): ${broken.slice(0, 3).join('; ')}`);
        });

        it(`${tag} marks the same entries null as English does`, () => {
            const broken = Object.keys(flat[REFERENCE]).filter(key =>
                (flat[REFERENCE][key] === null) !== (flat[tag][key] === null));
            assertEqual(broken.length, 0,
                `${tag} null mismatch at: ${broken.slice(0, 5).join(', ')}`);
        });
    });
});

describe('i18n: lookup', () => {
    it('interpolates named parameters', () => {
        assertEqual(t('ui.game.counter', { current: 2, total: 5 }), 'Challenge 2/5');
    });

    it('leaves an unsupplied placeholder visible rather than blank', () => {
        assertTrue(t('ui.game.counter', { current: 2 }).includes('{total}'),
            'a missing parameter should stay visible');
    });

    it('returns the key itself when it exists in no catalog', () => {
        assertEqual(t('ui.no.such.key'), 'ui.no.such.key');
    });

    it('falls back to English for a key a translation lacks', () => {
        I18N_CATALOGS.__probe = { ui: {} };
        const previous = I18N_CATALOGS.en.ui.__probeOnly;
        I18N_CATALOGS.en.ui.__probeOnly = 'from English';
        assertEqual(t('ui.__probeOnly'), 'from English');
        I18N_CATALOGS.en.ui.__probeOnly = previous;
        delete I18N_CATALOGS.en.ui.__probeOnly;
        delete I18N_CATALOGS.__probe;
    });

    it('reads a list whole with tData', () => {
        const intro = tData('stories.thematic.intro');
        assertTrue(Array.isArray(intro) && intro.length === 3, 'expected three intro slides');
    });

    it('picks and interpolates a word problem with tPick', () => {
        const text = tPick('challenge.roman.contexts.plus', { num1: 7, num2: 3 });
        assertTrue(!text.includes('{num'), `placeholders survived: ${text}`);
        assertTrue(text.includes('7') || text.includes('3'), `no operand in: ${text}`);
    });
});

describe('i18n: binding onto game globals', () => {
    it('gives every civilization a name, description and number system', () => {
        Object.keys(civilizations).forEach(civId => {
            const civ = civilizations[civId];
            assertTrue(!!civ.name, `${civId} has no name`);
            assertTrue(!!civ.description, `${civId} has no description`);
            assertTrue(!!civ.numberSystem, `${civId} has no number system`);
        });
    });

    it('gives every civilization a difficulty that resolves to a label', () => {
        Object.keys(civilizations).forEach(civId => {
            const key = `ui.difficulty.${civilizations[civId].difficulty}`;
            assertTrue(t(key) !== key, `${civId} difficulty ${key} has no label`);
            assertTrue(!!DIFFICULTY_CLASS[civilizations[civId].difficulty],
                `${civId} difficulty has no CSS class`);
        });
    });

    it('binds the story, codex and timeline trees', () => {
        assertTrue(!!stories.thematic && !!stories.temporal && !!stories.practice,
            'stories did not bind');
        assertEqual(Object.keys(CODEX).length, Object.keys(civilizations).length);
        assertTrue(TIMELINE_ENTRIES.length > 0, 'timeline did not bind');
    });

    it('covers every civilization in every story mode', () => {
        ['thematic', 'temporal', 'practice'].forEach(mode => {
            Object.keys(civilizations).forEach(civId => {
                assertTrue(!!stories[mode][civId], `${mode} has no story for ${civId}`);
            });
        });
    });

    it('covers every civilization in the word problems and guides', () => {
        Object.keys(civilizations).forEach(civId => {
            ['plus', 'minus'].forEach(operation => {
                const list = tData(`challenge.${civId}.contexts.${operation}`);
                assertTrue(Array.isArray(list) && list.length > 0,
                    `${civId} has no ${operation} contexts`);
            });
            assertTrue(t(`challenge.${civId}.hint`) !== `challenge.${civId}.hint`,
                `${civId} has no hint`);
            assertTrue(t(`guide.${civId}.title`) !== `guide.${civId}.title`,
                `${civId} has no guide title`);
        });
    });
});

// ── Drift between code and catalog ───────────────────────────────────────────
// The checks above prove the catalogs agree with each other. These prove the
// code and the markup only ask for keys that exist.

const SOURCE_FILES = [];
(function collect(dir) {
    fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true }).forEach(entry => {
        const rel = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name !== 'locales') collect(rel);
        } else if (entry.name.endsWith('.js')) {
            SOURCE_FILES.push(rel);
        }
    });
})('js');

describe('i18n: no key is asked for that does not exist', () => {
    it('every literal t() key in the sources is defined in English', () => {
        const missing = [];
        SOURCE_FILES.forEach(file => {
            const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
            // Literal keys only. Template keys built from a civilization id are
            // covered by the per-civilization checks above.
            const pattern = /\bt(?:Data|Pick)?\(\s*'([a-zA-Z][\w.[\]-]*)'/g;
            let match;
            while ((match = pattern.exec(source)) !== null) {
                if (!(match[1] in flat[REFERENCE])
                    && i18nLookup(I18N_CATALOGS[REFERENCE], match[1]) === undefined) {
                    missing.push(`${file}: ${match[1]}`);
                }
            }
        });
        assertEqual(missing.length, 0,
            `${missing.length} undefined key(s): ${missing.slice(0, 5).join(', ')}`);
    });

    it('every data-i18n key in index.html is defined in English', () => {
        const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
        const missing = [];
        const pattern = /data-i18n(?:-title|-label|-placeholder|-slot)?="([^"]+)"/g;
        let match;
        while ((match = pattern.exec(html)) !== null) {
            if (!(match[1] in flat[REFERENCE])) missing.push(match[1]);
        }
        assertTrue(missing.length === 0,
            `undefined key(s) in index.html: ${missing.slice(0, 5).join(', ')}`);
    });

    // Screens built at runtime carry the same attributes inside template
    // literals, where the t() scan above cannot see them.
    it('every data-i18n key written from JavaScript is defined in English', () => {
        const missing = [];
        SOURCE_FILES.forEach(file => {
            const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
            const pattern = /data-i18n(?:-title|-label|-placeholder|-slot)?="([^"${]+)"/g;
            let match;
            while ((match = pattern.exec(source)) !== null) {
                if (!(match[1] in flat[REFERENCE])) missing.push(`${file}: ${match[1]}`);
            }
        });
        assertEqual(missing.length, 0,
            `${missing.length} undefined key(s): ${missing.slice(0, 5).join(', ')}`);
    });

    it('finds no untranslated user-facing string left in index.html', () => {
        const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
        // Text sitting directly inside an element that carries no translation
        // key. Symbols and digits are not copy, so they are allowed through.
        // data-i18n-skip marks copy that stays as written in every language:
        // the game's own name, and glyphs such as the close cross.
        const leftovers = [];
        const pattern = /<(button|h1|h2|h3|h4|p|span|summary)(?![^>]*data-i18n)[^>]*>([^<>{]+)</g;
        let match;
        while ((match = pattern.exec(html)) !== null) {
            const text = match[2].replace(/&\w+;/g, '').trim();
            if (/[A-Za-z]{3,}/.test(text)) leftovers.push(`<${match[1]}>${text}`);
        }
        assertEqual(leftovers.length, 0,
            `untranslated copy: ${leftovers.slice(0, 5).join(' | ')}`);
    });

    it('keeps every locale file listed in the service worker precache', () => {
        const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
        assertTrue(sw.includes("'./js/i18n.js'"), 'sw.js does not precache the i18n runtime');
        LOCALES.forEach(tag => {
            assertTrue(sw.includes(`'./js/locales/${tag}.js'`),
                `sw.js does not precache ${tag}`);
        });
    });

    it('loads every locale file from index.html', () => {
        const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
        LOCALES.forEach(tag => {
            assertTrue(html.includes(`js/locales/${tag}.js`),
                `index.html does not load ${tag}`);
        });
    });
});
