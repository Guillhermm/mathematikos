// ===== INTERNATIONALIZATION =====
// Every authored string in the game lives in js/locales/<tag>.js. Code holds
// identifiers, numbers and runtime state; never sentences.
//
// Two ways to reach a string:
//
//   t('ui.menu.thematic')              a single string, with {placeholder} params
//   applyCatalog()                     binds the bulk content (stories, codex,
//                                      timeline, civilization metadata) onto the
//                                      globals the rest of the game already reads
//
// The second exists because the story and codex trees are documents, not labels.
// Threading a t() call through every property would say the same thing in more
// places, so the catalog hands those over whole and the call sites stay as they
// were.

const I18N_CATALOGS = {};
const I18N_FALLBACK = 'en';

// Walks a dotted path. Returns undefined for any miss, at any depth, so a
// malformed key behaves the same as an absent one.
function i18nLookup(catalog, key) {
    if (!catalog) return undefined;
    let node = catalog;
    for (const part of String(key).split('.')) {
        if (node === null || typeof node !== 'object') return undefined;
        node = node[part];
    }
    return node;
}

// Substitutes {name} from params. An unmatched placeholder is left in place:
// seeing "{num1}" on screen names the bug, where an empty string would hide it.
function i18nInterpolate(template, params) {
    if (!params) return template;
    return template.replace(/\{(\w+)\}/g, (match, name) =>
        Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match
    );
}

// Returns the active catalog, falling back to English for a key a translation
// has not reached yet. A key missing everywhere returns itself, which is ugly on
// screen on purpose and is what tests/i18n.test.js exists to prevent.
function t(key, params) {
    let value = i18nLookup(I18N_CATALOGS[getLanguage()], key);
    if (value === undefined) value = i18nLookup(I18N_CATALOGS[I18N_FALLBACK], key);
    if (value === undefined) return key;
    return typeof value === 'string' ? i18nInterpolate(value, params) : value;
}

// Same resolution, for the arrays and objects the catalog holds verbatim.
function tData(key) {
    const value = i18nLookup(I18N_CATALOGS[getLanguage()], key);
    return value === undefined ? i18nLookup(I18N_CATALOGS[I18N_FALLBACK], key) : value;
}

// Picks one entry at random from a catalog list, then interpolates it. The word
// problems use this: each civilization offers several framings of the same sum.
function tPick(key, params) {
    const list = tData(key);
    if (!Array.isArray(list) || list.length === 0) return key;
    return i18nInterpolate(list[rand(0, list.length - 1)], params);
}

// Binds catalog content onto the globals declared in state.js, codex.js and
// about.js. Called once at startup and again whenever the language changes.
function applyCatalog() {
    stories          = tData('stories') || {};
    CODEX            = tData('codex') || {};
    TIMELINE_ENTRIES = tData('about.timeline') || [];

    // Civilizations carry runtime state (unlocked) alongside their text, so the
    // text is merged in rather than replacing the record.
    const civText = tData('civ') || {};
    Object.keys(civilizations).forEach(civId => {
        const text = civText[civId];
        if (!text) return;
        civilizations[civId].name         = text.name;
        civilizations[civId].description  = text.description;
        civilizations[civId].numberSystem = text.numberSystem;
    });
}

// ── Static markup ────────────────────────────────────────────────────────────
// index.html carries the key on the element: data-i18n for its text, and one
// attribute-specific variant per attribute that holds a user-visible string.

const I18N_ATTRIBUTE_BINDINGS = [
    { dataset: 'i18nTitle',       attribute: 'title'            },
    { dataset: 'i18nLabel',       attribute: 'aria-label'       },
    { dataset: 'i18nPlaceholder', attribute: 'placeholder'      },
    { dataset: 'i18nSlot',        attribute: 'data-placeholder' }
];

function applyStaticTranslations(root) {
    const scope = root || document;

    scope.querySelectorAll('[data-i18n]').forEach(node => {
        // textContent, not innerHTML: authored copy never becomes markup.
        node.textContent = t(node.dataset.i18n);
    });

    I18N_ATTRIBUTE_BINDINGS.forEach(({ dataset, attribute }) => {
        scope.querySelectorAll(`[data-${dataset.replace(/[A-Z]/g, c => '-' + c.toLowerCase())}]`)
            .forEach(node => node.setAttribute(attribute, t(node.dataset[dataset])));
    });

    if (scope === document) {
        document.title = t('ui.document.title');
        const description = document.querySelector('meta[name="description"]');
        if (description) description.setAttribute('content', t('ui.document.description'));
    }
}

function initI18n() {
    applyCatalog();
    applyStaticTranslations();
}
