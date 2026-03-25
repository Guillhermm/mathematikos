// ===== HINDU-ARABIC NUMERAL TESTS =====

describe('numberToHinduArabic', () => {
    it('converts 0 → ٠',         () => assertEqual(numberToHinduArabic(0),    '٠'));
    it('converts 1 → ١',         () => assertEqual(numberToHinduArabic(1),    '١'));
    it('converts 9 → ٩',         () => assertEqual(numberToHinduArabic(9),    '٩'));
    it('converts 10 → ١٠',       () => assertEqual(numberToHinduArabic(10),   '١٠'));
    it('converts 42 → ٤٢',       () => assertEqual(numberToHinduArabic(42),   '٤٢'));
    it('converts 100 → ١٠٠',     () => assertEqual(numberToHinduArabic(100),  '١٠٠'));
    it('converts 999 → ٩٩٩',     () => assertEqual(numberToHinduArabic(999),  '٩٩٩'));
    it('converts 1000 → ١٠٠٠',   () => assertEqual(numberToHinduArabic(1000), '١٠٠٠'));
    it('converts 9999 → ٩٩٩٩',   () => assertEqual(numberToHinduArabic(9999), '٩٩٩٩'));
    it('returns Invalid for -1',  () => assertEqual(numberToHinduArabic(-1),   'Invalid'));
    it('returns Invalid for 10000', () => assertEqual(numberToHinduArabic(10000), 'Invalid'));
    it('returns Invalid for non-integer', () => assertEqual(numberToHinduArabic(1.5), 'Invalid'));
});

describe('hinduArabicToNumber', () => {
    it('parses ٠ → 0',        () => assertEqual(hinduArabicToNumber('٠'),    0));
    it('parses ١ → 1',        () => assertEqual(hinduArabicToNumber('١'),    1));
    it('parses ٩ → 9',        () => assertEqual(hinduArabicToNumber('٩'),    9));
    it('parses ١٠ → 10',      () => assertEqual(hinduArabicToNumber('١٠'),   10));
    it('parses ٤٢ → 42',      () => assertEqual(hinduArabicToNumber('٤٢'),   42));
    it('parses ١٠٠ → 100',    () => assertEqual(hinduArabicToNumber('١٠٠'),  100));
    it('parses ٩٩٩٩ → 9999',  () => assertEqual(hinduArabicToNumber('٩٩٩٩'), 9999));
    it('returns NaN for empty', () => assertTrue(isNaN(hinduArabicToNumber(''))));
    it('returns NaN for invalid chars', () => assertTrue(isNaN(hinduArabicToNumber('abc'))));
});

describe('Hindu-Arabic round-trip', () => {
    [0, 1, 9, 10, 11, 42, 99, 100, 500, 999, 1000, 1234, 9999].forEach(n => {
        it(`round-trips ${n}`, () => assertEqual(hinduArabicToNumber(numberToHinduArabic(n)), n));
    });
});

describe('generateHinduArabicProblem', () => {
    it('produces a valid answer for difficulty 1', () => {
        const p = generateHinduArabicProblem(1);
        assertTrue(p.answer > 0, 'answer > 0');
        assertEqual(hinduArabicToNumber(p.hinduArabicAnswer), p.answer);
    });

    it('answer matches operation', () => {
        for (let i = 0; i < 50; i++) {
            const p = generateHinduArabicProblem(3);
            const expected = p.operation === '+' ? p.num1 + p.num2 : p.num1 - p.num2;
            assertEqual(p.answer, expected);
        }
    });

    it('subtraction never produces zero or negative', () => {
        for (let i = 0; i < 100; i++) {
            const p = generateHinduArabicProblem(2);
            if (p.operation === '-') {
                assertTrue(p.answer > 0, `Expected answer > 0, got ${p.answer}`);
            }
        }
    });

    it('hinduArabicAnswer round-trips correctly (50 runs)', () => {
        for (let i = 0; i < 50; i++) {
            const p = generateHinduArabicProblem(3);
            assertEqual(hinduArabicToNumber(p.hinduArabicAnswer), p.answer);
        }
    });
});
