// ===== CIVILIZATION VISUAL THEMES =====
// Applies per-civilization color palettes via a data attribute on <body>.
// CSS in styles.css defines variable overrides for each body[data-civ="..."] selector.

function applyTheme(civId) {
    if (civId) {
        document.body.setAttribute('data-civ', civId);
    } else {
        document.body.removeAttribute('data-civ');
    }
}

function clearTheme() {
    document.body.removeAttribute('data-civ');
}
