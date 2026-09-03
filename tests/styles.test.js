// ===== STYLE CONTRACT TESTS =====
// The JS emits class names and CSS variables; styles.css has to define them.
// A stylesheet edit that drops a block is invisible to every other test here,
// which is exactly how the icon rules were once deleted without a failure.

const fs = require('fs');
const path = require('path');

const CSS = fs.readFileSync(path.resolve(__dirname, '..', 'styles.css'), 'utf8');

// Classes the JS renders that would be unstyled if their rule went missing.
const REQUIRED_CLASSES = [
    'icon', 'icon-menu', 'icon-heading', 'icon-locked',
    'scene-sprite-holder',
    'briefing', 'briefing-viewport', 'briefing-track', 'briefing-slide',
    'briefing-art-svg', 'briefing-speech', 'briefing-name', 'briefing-quote',
    'briefing-text', 'briefing-nav', 'briefing-arrow', 'briefing-dot',
    'oracle-disc', 'oracle-rim', 'oracle-wedge', 'oracle-hub', 'oracle-pin',
    'result-scene', 'result-scene-art', 'result-oracle-halo',
    'civ-card-art', 'daily-civ-art',
    'story-title', 'dossier', 'dossier-row', 'dossier-label', 'dossier-value'
];

describe('style contract', () => {
    REQUIRED_CLASSES.forEach(cls => {
        it(`defines a rule for .${cls}`, () => {
            const pattern = new RegExp('\\.' + cls.replace(/-/g, '\\-') + '(?![\\w-])');
            assertTrue(pattern.test(CSS), `.${cls} has no rule in styles.css`);
        });
    });

    it('defines every custom property the artwork reads', () => {
        const sources = ['js/ui/scenes.js', 'js/ui/icons.js', 'js/ui/briefing.js']
            .map(f => fs.readFileSync(path.resolve(__dirname, '..', f), 'utf8'))
            .join('\n');
        const used = new Set();
        const re = /var\((--[a-z0-9-]+)\)/g;
        let m;
        while ((m = re.exec(sources)) !== null) used.add(m[1]);

        const undefined_ = [...used].filter(name => !CSS.includes(name + ':'));
        assertEqual(undefined_.join(', '), '', `undefined in styles.css: ${undefined_.join(', ')}`);
    });

    it('gives both speakers their identity colors', () => {
        ['--hypatia-line', '--hypatia-quote', '--hypatia-tint',
         '--oracle-line', '--oracle-quote', '--oracle-tint'].forEach(token => {
            assertTrue(CSS.includes(token + ':'), `${token} is not defined`);
        });
    });

    // Surfaces that carry artwork must take their background from a token.
    // A light literal in these would need a dark override placed after it in
    // the file, which is the fragile arrangement that once left the
    // civilization cards cream on a dark page.
    const TOKEN_BACKED_SURFACES = ['civilization-card', 'briefing', 'oracle-collected-box', 'civ-locked-overlay'];

    TOKEN_BACKED_SURFACES.forEach(cls => {
        it(`paints .${cls} from a variable`, () => {
            const rule = new RegExp('\\.' + cls + '\\s*\\{([^}]*)\\}');
            const match = rule.exec(CSS);
            assertTrue(match !== null, `.${cls} has no rule`);
            const body = match[1];
            assertTrue(
                !/background(?:-color)?:\s*#/.test(body),
                `.${cls} sets a literal background instead of a token`
            );
        });
    });
});
