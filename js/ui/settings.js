// ===== SETTINGS =====
// Appearance and language, stored in localStorage and applied to the document
// root. The dark rules in styles.css hang off html[data-dark] rather than a
// prefers-color-scheme media query, because CSS gives no way to override the
// media query from the page; this module owns that attribute.

const THEME_KEY = 'mathematikos_theme';
const LANGUAGE_KEY = 'mathematikos_language';

// Labels are catalog keys: the appearance names translate, the language names
// below deliberately do not.
const THEME_OPTIONS = [
    { value: 'system', labelKey: 'ui.settings.system' },
    { value: 'light',  labelKey: 'ui.settings.light' },
    { value: 'dark',   labelKey: 'ui.settings.dark' }
];

// Endonyms: a language list is one of the few places a reader may not be able
// to read the surrounding interface, so each is named in its own language.
const LANGUAGE_OPTIONS = [
    { value: 'en',    endonym: 'English' },
    { value: 'es',    endonym: 'Español' },
    { value: 'fr',    endonym: 'Français' },
    { value: 'de',    endonym: 'Deutsch' },
    { value: 'pt-BR', endonym: 'Português (Brasil)' }
];

const DEFAULT_THEME = 'system';
const DEFAULT_LANGUAGE = 'en';

function isValidTheme(value) {
    return THEME_OPTIONS.some(option => option.value === value);
}

function isValidLanguage(value) {
    return LANGUAGE_OPTIONS.some(option => option.value === value);
}

function getThemePreference() {
    const stored = getStorage(THEME_KEY);
    return isValidTheme(stored) ? stored : DEFAULT_THEME;
}

function setThemePreference(value) {
    if (!isValidTheme(value)) return;
    setStorage(THEME_KEY, value);
    applyThemePreference();
}

function getLanguage() {
    const stored = getStorage(LANGUAGE_KEY);
    return isValidLanguage(stored) ? stored : DEFAULT_LANGUAGE;
}

function setLanguage(value) {
    if (!isValidLanguage(value)) return;
    setStorage(LANGUAGE_KEY, value);
    applyLanguage();
}

// Switching language rebinds the catalog and repaints every string currently on
// screen. Settings open from the main menu, whose markup is static, so
// retranslating the document covers everything the player can see.
function changeLanguage(value) {
    if (value === getLanguage()) return;
    setLanguage(value);
    applyCatalog();
    applyStaticTranslations();
}

// Resolves 'system' against the OS setting. Everything else is literal.
function resolveDarkMode(preference, prefersDark) {
    if (preference === 'dark') return true;
    if (preference === 'light') return false;
    return !!prefersDark;
}

function applyThemePreference() {
    const prefersDark = typeof window.matchMedia === 'function'
        && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = resolveDarkMode(getThemePreference(), prefersDark);
    const root = document.documentElement;
    if (isDark) {
        root.setAttribute('data-dark', '');
    } else {
        root.removeAttribute('data-dark');
    }
    // Keeps form controls and scrollbars in step with the page.
    root.style.colorScheme = isDark ? 'dark' : 'light';
}

function applyLanguage() {
    // Screen readers, hyphenation and date formatting all key off this.
    document.documentElement.lang = getLanguage();
}

// ── Settings dialog ──────────────────────────────────────────────────────────

function settingsGroupMarkup(name, title, options, current) {
    const items = options.map(option => `
        <li>
            <button type="button" class="settings-option${option.value === current ? ' active' : ''}"
                    role="radio" aria-checked="${option.value === current}"
                    data-setting="${name}" data-value="${option.value}">
                <span class="settings-option-label"></span>
                ${icon('check', 'settings-check')}
            </button>
        </li>`).join('');
    return `
        <section class="settings-group">
            <h4 class="settings-group-title">${title}</h4>
            <ul class="settings-options" role="radiogroup" aria-label="${title}">${items}</ul>
        </section>`;
}

function renderSettings() {
    const content = document.getElementById('settings-content');
    if (!content) return;

    content.innerHTML =
        settingsGroupMarkup('theme', t('ui.settings.appearance'), THEME_OPTIONS, getThemePreference())
        + settingsGroupMarkup('language', t('ui.settings.language'), LANGUAGE_OPTIONS, getLanguage())
        + '<p class="settings-note"></p>';

    // Labels go in as text, like every other authored string in the game. A
    // language is named in its own language, so its endonym is used as written.
    const labels = content.querySelectorAll('.settings-option-label');
    const all = THEME_OPTIONS.concat(LANGUAGE_OPTIONS);
    labels.forEach((node, i) => {
        const option = all[i];
        if (option) node.textContent = option.endonym || t(option.labelKey);
    });

    const note = content.querySelector('.settings-note');
    if (note) note.textContent = t('ui.settings.note');
}

function openSettings() {
    renderSettings();
    const modal = document.getElementById('settings-modal');
    if (modal) modal.classList.add('show');
}

function closeSettings() {
    const modal = document.getElementById('settings-modal');
    if (modal) modal.classList.remove('show');
}

function handleSettingsClick(event) {
    const button = event.target.closest('.settings-option');
    if (!button) return;
    const { setting, value } = button.dataset;
    if (setting === 'theme') setThemePreference(value);
    if (setting === 'language') changeLanguage(value);
    renderSettings();
}

function initSettings() {
    applyThemePreference();
    applyLanguage();

    const content = document.getElementById('settings-content');
    if (content) content.addEventListener('click', handleSettingsClick);

    // Follow the OS while the preference is 'system'.
    if (typeof window.matchMedia === 'function') {
        const query = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = () => {
            if (getThemePreference() === 'system') applyThemePreference();
        };
        if (typeof query.addEventListener === 'function') {
            query.addEventListener('change', onChange);
        } else if (typeof query.addListener === 'function') {
            query.addListener(onChange);
        }
    }
}
