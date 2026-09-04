// ===== SETTINGS TESTS =====

describe('theme resolution', () => {
    it('honors an explicit dark choice whatever the system says', () => {
        assertEqual(resolveDarkMode('dark', false), true);
        assertEqual(resolveDarkMode('dark', true), true);
    });

    it('honors an explicit light choice whatever the system says', () => {
        assertEqual(resolveDarkMode('light', true), false);
        assertEqual(resolveDarkMode('light', false), false);
    });

    it('follows the system when set to system', () => {
        assertEqual(resolveDarkMode('system', true), true);
        assertEqual(resolveDarkMode('system', false), false);
    });

    // A stored value from an older build, or a hand-edited one, must not
    // leave the page in an undefined state.
    it('treats an unknown preference as system', () => {
        assertEqual(resolveDarkMode('sepia', true), true);
        assertEqual(resolveDarkMode('sepia', false), false);
        assertEqual(resolveDarkMode(undefined, true), true);
    });
});

describe('settings validation', () => {
    it('accepts every offered theme', () => {
        THEME_OPTIONS.forEach(option => assertTrue(isValidTheme(option.value), option.value));
    });

    it('accepts every offered language', () => {
        LANGUAGE_OPTIONS.forEach(option => assertTrue(isValidLanguage(option.value), option.value));
    });

    it('rejects anything else', () => {
        ['', 'klingon', 'EN', 'pt', null, undefined, '__proto__'].forEach(value => {
            assertEqual(isValidLanguage(value), false, `accepted ${JSON.stringify(value)}`);
            assertEqual(isValidTheme(value), false, `accepted ${JSON.stringify(value)}`);
        });
    });
});

describe('language catalog', () => {
    it('offers the five requested languages', () => {
        assertEqual(LANGUAGE_OPTIONS.map(o => o.value).join(','), 'en,es,fr,de,pt-BR');
    });

    it('defaults to English', () => {
        assertEqual(DEFAULT_LANGUAGE, 'en');
        assertTrue(isValidLanguage(DEFAULT_LANGUAGE));
    });

    it('defaults theme to system', () => {
        assertEqual(DEFAULT_THEME, 'system');
        assertTrue(isValidTheme(DEFAULT_THEME));
    });

    // Each entry names itself in its own language, since a reader picking a
    // language may not be able to read the current interface.
    it('names every language in its own language', () => {
        LANGUAGE_OPTIONS.forEach(option => {
            assertTrue(!!option.endonym && option.endonym.length > 0, `${option.value} has no endonym`);
        });
    });

    it('uses valid BCP 47 tags, so document.lang is meaningful', () => {
        LANGUAGE_OPTIONS.forEach(option => {
            assertTrue(/^[a-z]{2}(-[A-Z]{2})?$/.test(option.value), `${option.value} is not a BCP 47 tag`);
        });
    });

    it('lists no duplicates', () => {
        const values = LANGUAGE_OPTIONS.map(o => o.value);
        assertEqual(new Set(values).size, values.length);
    });
});

describe('endonym spelling', () => {
    // Written without diacritics these are misspellings of the language names,
    // which is the one thing a language picker must get right.
    const EXPECTED = {
        en: 'English',
        es: 'Español',
        fr: 'Français',
        de: 'Deutsch',
        'pt-BR': 'Português (Brasil)'
    };
    Object.entries(EXPECTED).forEach(([code, endonym]) => {
        it(`names ${code} as "${endonym}"`, () => {
            const option = LANGUAGE_OPTIONS.find(o => o.value === code);
            assertTrue(!!option, `${code} missing`);
            assertEqual(option.endonym, endonym);
        });
    });
});
