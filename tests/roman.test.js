// ===== ROMAN NUMERAL TESTS =====

describe('numberToRoman', () => {
    it('converts 1 → I',         () => assertEqual(numberToRoman(1),    'I'));
    it('converts 4 → IV',        () => assertEqual(numberToRoman(4),    'IV'));
    it('converts 9 → IX',        () => assertEqual(numberToRoman(9),    'IX'));
    it('converts 14 → XIV',      () => assertEqual(numberToRoman(14),   'XIV'));
    it('converts 40 → XL',       () => assertEqual(numberToRoman(40),   'XL'));
    it('converts 44 → XLIV',     () => assertEqual(numberToRoman(44),   'XLIV'));
    it('converts 50 → L',        () => assertEqual(numberToRoman(50),   'L'));
    it('converts 90 → XC',       () => assertEqual(numberToRoman(90),   'XC'));
    it('converts 100 → C',       () => assertEqual(numberToRoman(100),  'C'));
    it('converts 400 → CD',      () => assertEqual(numberToRoman(400),  'CD'));
    it('converts 500 → D',       () => assertEqual(numberToRoman(500),  'D'));
    it('converts 900 → CM',      () => assertEqual(numberToRoman(900),  'CM'));
    it('converts 1000 → M',      () => assertEqual(numberToRoman(1000), 'M'));
    it('converts 1994 → MCMXCIV',() => assertEqual(numberToRoman(1994),'MCMXCIV'));
    it('converts 3999 → MMMCMXCIX', () => assertEqual(numberToRoman(3999), 'MMMCMXCIX'));
    it('returns Invalid for 0',  () => assertEqual(numberToRoman(0),    'Invalid'));
    it('returns Invalid for -1', () => assertEqual(numberToRoman(-1),   'Invalid'));
    it('returns Invalid for 4000',() => assertEqual(numberToRoman(4000),'Invalid'));
    it('returns Invalid for non-integer', () => assertEqual(numberToRoman(1.5), 'Invalid'));
});

describe('romanToNumber', () => {
    it('parses I → 1',           () => assertEqual(romanToNumber('I'),       1));
    it('parses IV → 4',          () => assertEqual(romanToNumber('IV'),      4));
    it('parses IX → 9',          () => assertEqual(romanToNumber('IX'),      9));
    it('parses XIV → 14',        () => assertEqual(romanToNumber('XIV'),     14));
    it('parses XL → 40',         () => assertEqual(romanToNumber('XL'),      40));
    it('parses XC → 90',         () => assertEqual(romanToNumber('XC'),      90));
    it('parses CD → 400',        () => assertEqual(romanToNumber('CD'),      400));
    it('parses CM → 900',        () => assertEqual(romanToNumber('CM'),      900));
    it('parses MCMXCIV → 1994',  () => assertEqual(romanToNumber('MCMXCIV'), 1994));
    it('parses MMMCMXCIX → 3999',() => assertEqual(romanToNumber('MMMCMXCIX'), 3999));
    it('is case-insensitive (xiv → 14)', () => assertEqual(romanToNumber('xiv'), 14));
    it('is case-insensitive (mcmxciv → 1994)', () => assertEqual(romanToNumber('mcmxciv'), 1994));
    it('returns 0 for empty string', () => assertEqual(romanToNumber(''), 0));
});

describe('Roman round-trip (numberToRoman → romanToNumber)', () => {
    [1, 4, 9, 14, 40, 90, 399, 400, 900, 1000, 1994, 3999].forEach(n => {
        it(`round-trips ${n}`, () => assertEqual(romanToNumber(numberToRoman(n)), n));
    });
});

describe('generateRomanProblem', () => {
    it('produces a valid answer for difficulty 1', () => {
        const p = generateRomanProblem(1);
        assertTrue(p.answer > 0, 'answer must be positive');
        assertEqual(romanToNumber(p.romanAnswer), p.answer);
    });

    it('produces a valid answer for difficulty 5', () => {
        const p = generateRomanProblem(5);
        assertTrue(p.answer > 0, 'answer must be positive');
        assertEqual(romanToNumber(p.romanAnswer), p.answer);
    });

    it('answer matches operation', () => {
        for (let i = 0; i < 20; i++) {
            const p = generateRomanProblem(rand(1, 5));
            const expected = p.operation === '+' ? p.num1 + p.num2 : p.num1 - p.num2;
            assertEqual(p.answer, expected, `operation mismatch: ${p.num1} ${p.operation} ${p.num2}`);
        }
    });

    it('subtraction never produces zero or negative answer', () => {
        for (let i = 0; i < 50; i++) {
            const p = generateRomanProblem(rand(1, 5));
            assertTrue(p.answer > 0, `answer must be > 0, got ${p.answer}`);
        }
    });
});
