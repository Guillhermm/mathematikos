// ===== NUMERAL SYSTEM SVG SYMBOLS =====
// Self-contained SVG representations of symbols that may not render reliably
// via font fallback (Egyptian hieroglyphs, Babylonian cuneiform, Greek archaic letters).
// All SVGs use currentColor so they inherit color from their CSS context.

const NUMERAL_SVGS = {

    // ── Egyptian Hieroglyphic Numerals ────────────────────────────────────────
    egyptian: {

        // 1: Vertical staff / stroke
        1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 120" aria-hidden="true">
          <rect x="15" y="4" width="10" height="112" rx="5" fill="currentColor"/>
        </svg>`,

        // 10: Heel bone / cattle hobble (inverted U arch)
        10: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 85" aria-hidden="true">
          <path d="M10 80 L10 48 Q10 8 45 8 Q80 8 80 48 L80 80"
                stroke="currentColor" stroke-width="11" fill="none"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,

        // 100: Coil of rope (concentric rings suggesting a spiral)
        100: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="43" stroke="currentColor" stroke-width="9" fill="none"/>
          <circle cx="50" cy="50" r="24" stroke="currentColor" stroke-width="9" fill="none"/>
          <circle cx="50" cy="50" r="7" fill="currentColor"/>
        </svg>`,

        // 1000: Lotus flower (stem + two curved arms + oval bud)
        1000: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 140" aria-hidden="true">
          <line x1="50" y1="24" x2="50" y2="132"
                stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
          <path d="M50 96 Q22 80 12 102 Q6 122 28 124"
                stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M50 96 Q78 80 88 102 Q94 122 72 124"
                stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round"/>
          <ellipse cx="50" cy="15" rx="13" ry="17" fill="currentColor"/>
        </svg>`,

        // 10 000: Bent finger (vertical line curving at the top)
        10000: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 130" aria-hidden="true">
          <path d="M30 124 L30 62 Q28 22 58 8"
                stroke="currentColor" stroke-width="12" fill="none" stroke-linecap="round"/>
        </svg>`,

        // 100 000: Tadpole / frog (oval head + sweeping tail)
        100000: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 80" aria-hidden="true">
          <ellipse cx="28" cy="40" rx="22" ry="30" fill="currentColor"/>
          <path d="M50 40 Q88 26 118 48"
                stroke="currentColor" stroke-width="11" fill="none" stroke-linecap="round"/>
        </svg>`,
    },

    // ── Babylonian Cuneiform Numerals ─────────────────────────────────────────
    babylonian: {

        // 1: Vertical wedge (wide head at top, tapering body)
        1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 150" aria-hidden="true">
          <path d="M8 6 L62 6 L62 46 Q35 54 8 46 Z" fill="currentColor"/>
          <polygon points="22,44 48,44 35,144" fill="currentColor"/>
        </svg>`,

        // 10: Winkelhaken / horizontal chevron (angle bracket shape, pointing right)
        10: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 72" aria-hidden="true">
          <path d="M12 8 L86 36 L12 64"
                stroke="currentColor" stroke-width="15" fill="none"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,

        // 0: Empty position marker (circle with center dot)
        0: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" aria-hidden="true">
          <circle cx="35" cy="35" r="28" stroke="currentColor" stroke-width="8" fill="none"/>
          <circle cx="35" cy="35" r="8" fill="currentColor"/>
        </svg>`,
    },

    // ── Greek Archaic Numeral Letters ─────────────────────────────────────────
    // Only the three archaic letters that don't render reliably need SVGs.
    // All other Greek letters (α–ω) are standard Unicode and rendered via font.
    greek: {

        // ϛ (stigma = 6): S-curve with larger top loop
        'ϛ': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 110" aria-hidden="true">
          <path d="M58 20 Q58 7 40 7 Q14 7 14 26 Q14 46 40 46
                   Q64 46 64 66 Q64 90 38 90 Q16 90 14 76"
                stroke="currentColor" stroke-width="9" fill="none" stroke-linecap="round"/>
        </svg>`,

        // ϙ (koppa = 90): Circle with a descending vertical tail (Q shape)
        'ϙ': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 110" aria-hidden="true">
          <circle cx="40" cy="38" r="30" stroke="currentColor" stroke-width="9" fill="none"/>
          <line x1="40" y1="68" x2="40" y2="106"
                stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
        </svg>`,

        // ϡ (sampi = 900): Curved crossbar + two diverging downward stems (anchor-like)
        'ϡ': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 110" aria-hidden="true">
          <path d="M6 40 Q50 8 94 40"
                stroke="currentColor" stroke-width="9" fill="none" stroke-linecap="round"/>
          <line x1="23" y1="20" x2="10" y2="105"
                stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
          <line x1="77" y1="20" x2="90" y2="105"
                stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
        </svg>`,
    },

    // ── Maya Vigesimal Symbols ─────────────────────────────────────────────────
    mayan: {
        '●': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="16" fill="currentColor"/></svg>`,
        '━': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 28" aria-hidden="true"><rect x="4" y="6" width="72" height="16" rx="4" fill="currentColor"/></svg>`,
        '○': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 44" aria-hidden="true"><ellipse cx="40" cy="22" rx="34" ry="15" stroke="currentColor" stroke-width="5" fill="none"/><ellipse cx="40" cy="22" rx="18" ry="7" stroke="currentColor" stroke-width="3" fill="none"/></svg>`
    },
};

// ── Helper: single character → SVG string or raw Unicode ─────────────────────

// Map Egyptian Unicode chars to their numeric value for SVG lookup.
const _EGYPTIAN_CHAR_TO_VALUE = {
    '𓁏': 1000000, '𓆏': 100000, '𓂭': 10000,
    '𓆼': 1000, '𓍢': 100, '𓎆': 10, '𓏺': 1
};

/**
 * Returns the SVG markup for a single numeral character, or the raw character
 * as a fallback if no SVG is defined (e.g. standard Greek letters, CJK chars).
 * @param {string} civ - civilization id
 * @param {string} char - single Unicode character
 * @returns {string} SVG markup or raw char
 */
function getSymbolSvg(civ, char) {
    if (civ === 'egyptian') {
        const value = _EGYPTIAN_CHAR_TO_VALUE[char];
        if (value && NUMERAL_SVGS.egyptian[value]) return NUMERAL_SVGS.egyptian[value];
    } else if (civ === 'babylonian') {
        if (char === '⊙') return NUMERAL_SVGS.babylonian[0];
        if (char === '𒌋') return NUMERAL_SVGS.babylonian[10];
        if (char === '𒐕') return NUMERAL_SVGS.babylonian[1];
    } else if (civ === 'greek') {
        if (NUMERAL_SVGS.greek[char]) return NUMERAL_SVGS.greek[char];
    } else if (civ === 'mayan') {
        if (NUMERAL_SVGS.mayan[char]) return NUMERAL_SVGS.mayan[char];
    }
    return null; // no SVG available — caller falls back to Unicode
}

// ── Numeral string → displayable HTML ────────────────────────────────────────

/**
 * Converts a string of Egyptian hieroglyphs to HTML with inline SVGs.
 */
function egyptianToSVGHtml(unicodeStr) {
    return [...unicodeStr].map(char => {
        const svg = getSymbolSvg('egyptian', char);
        return svg
            ? `<span class="numeral-svg">${svg}</span>`
            : char;
    }).join('');
}

/**
 * Converts a Babylonian positional numeral string to HTML with inline SVGs.
 * Positional groups are separated by spaces in the source string.
 */
function babylonianToSVGHtml(unicodeStr) {
    return unicodeStr.trim().split(/\s+/).map(group => {
        const groupHtml = [...group].map(char => {
            const svg = getSymbolSvg('babylonian', char);
            return svg ? `<span class="numeral-svg">${svg}</span>` : char;
        }).join('');
        return `<span class="babylonian-group">${groupHtml}</span>`;
    }).join('<span class="babylonian-sep"> </span>');
}

/**
 * Converts a Greek alphabetic numeral string to HTML.
 * Standard Greek letters render via font; archaic letters get SVGs.
 */
function greekToSVGHtml(unicodeStr) {
    return [...unicodeStr].map(char => {
        const svg = getSymbolSvg('greek', char);
        return svg
            ? `<span class="numeral-svg">${svg}</span>`
            : `<span class="greek-char">${char}</span>`;
    }).join('');
}

/**
 * Wraps Chinese numeral characters in spans with the CJK font-stack class.
 */
function chineseToHtml(unicodeStr) {
    return [...unicodeStr].map(char =>
        `<span class="chinese-numeral">${char}</span>`
    ).join('');
}

/**
 * Returns HTML for a symbol pad button's icon area.
 * Uses SVG where available, falls back to the Unicode character.
 * @param {string} civ
 * @param {string} char - the Unicode symbol
 * @returns {string} HTML string for the button icon
 */
function symbolButtonHtml(civ, char) {
    const svg = getSymbolSvg(civ, char);
    if (svg) return `<span class="numeral-svg">${svg}</span>`;
    if (civ === 'chinese') return `<span class="chinese-numeral">${char}</span>`;
    if (civ === 'greek')   return `<span class="greek-char">${char}</span>`;
    return char;
}
