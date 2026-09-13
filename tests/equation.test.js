const fs = require('fs');
const path = require('path');

// ===== EQUATION LAYOUT TESTS =====
// The answer slot lives inside the equation, so every civilization has to emit
// the same shape: two operands and an operator, and no trailing "= ?".

const CIV_GENERATORS = {
    roman:          () => generateRomanProblem(2),
    egyptian:       () => generateEgyptianProblem(2),
    greek:          () => generateGreekProblem(2),
    babylonian:     () => generateBabylonianProblem(2),
    chinese:        () => generateChineseProblem(2),
    mayan:          () => generateMayanProblem(2),
    'hindu-arabic': () => generateHinduArabicProblem(2)
};

const CIV_SOURCE = {};
Object.keys(CIV_GENERATORS).forEach(civ => {
    CIV_SOURCE[civ] = fs.readFileSync(path.resolve(__dirname, '..', `js/civilizations/${civ}.js`), 'utf8');
});

describe('equation markup', () => {
    Object.keys(CIV_SOURCE).forEach(civ => {
        it(`${civ} emits two operands`, () => {
            const hits = (CIV_SOURCE[civ].match(/class="operand"/g) || []).length;
            assertEqual(hits, 2, `${civ} emits ${hits} operands`);
        });

        it(`${civ} emits one operator`, () => {
            const hits = (CIV_SOURCE[civ].match(/class="problem-operator"/g) || []).length;
            assertEqual(hits, 1, `${civ} emits ${hits} operators`);
        });

        // The equals and the answer slot are shipped once in index.html and must
        // survive re-render, so no civilization may draw its own.
        it(`${civ} draws no equals sign or placeholder of its own`, () => {
            const src = CIV_SOURCE[civ];
            assertTrue(!/problem-unknown/.test(src), `${civ} still renders a "?" placeholder`);
            assertTrue(!/=\s*<span/.test(src), `${civ} still renders its own equals sign`);
        });
    });

    it('every generator still produces a solvable problem', () => {
        Object.entries(CIV_GENERATORS).forEach(([civ, gen]) => {
            const p = gen();
            assertTrue(Number.isInteger(p.answer), `${civ} answer is not an integer`);
            assertTrue(p.answer > 0, `${civ} answer is not positive`);
            assertTrue(p.operation === '+' || p.operation === '-', `${civ} operation is ${p.operation}`);
        });
    });
});

describe('equation shell', () => {
    const HTML = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf8');

    it('ships the equals sign and answer slot inside the equation', () => {
        const block = /<div class="problem-display"[\s\S]*?<\/div>\s*<\/div>/.exec(HTML);
        assertTrue(block !== null, 'problem-display block not found');
        assertTrue(/problem-equals/.test(block[0]), 'equals sign is outside the equation');
        assertTrue(/id="built-answer"/.test(block[0]), 'answer slot is outside the equation');
    });

    it('no longer ships a separate answer label or builder', () => {
        assertTrue(!/answer-label/.test(HTML), 'the answer label survives');
        assertTrue(!/id="answer-builder"/.test(HTML), 'the answer builder wrapper survives');
    });

    it('gives the slot a default placeholder to fill from', () => {
        // The attribute itself is written at runtime from the active language,
        // so the contract the markup has to keep is the binding, not the text.
        assertTrue(/data-i18n-slot="[^"]+"/.test(HTML), 'no placeholder binding on the slot');
    });
});

describe('equation styles', () => {
    const CSS = fs.readFileSync(path.resolve(__dirname, '..', 'styles.css'), 'utf8');

    // display: contents is what dissolves the civilization wrappers so operands,
    // operator, equals and slot wrap as a single line.
    it('dissolves the numeral wrappers into the equation flow', () => {
        assertTrue(/\.problem,\s*\n\.problem-numerals\s*\{[^}]*display:\s*contents/.test(CSS),
            'problem wrappers are not display: contents');
    });

    it('never re-boxes the wrapper further down the file', () => {
        assertTrue(!/\.problem\s*\{[^}]*display:\s*inline-block/.test(CSS),
            '.problem is re-boxed, which puts the operands back on their own row');
        assertTrue(!/\.problem-numerals\s*\{[^}]*flex-direction:\s*column/.test(CSS),
            '.problem-numerals stacks in a column again');
    });

    it('gives each operand its own ground so wrapped numbers stay separate', () => {
        assertTrue(/\.operand\s*\{[^}]*background:/.test(CSS), '.operand has no background');
    });

    it('reads the slot placeholder from the attribute', () => {
        assertTrue(/content:\s*attr\(data-placeholder\)/.test(CSS),
            'the placeholder is hardcoded rather than per challenge');
    });
});
