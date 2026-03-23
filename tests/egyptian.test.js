// ===== EGYPTIAN NUMERAL TESTS =====

describe('numberToEgyptian', () => {
    it('converts 1',       () => assertEqual(numberToEgyptian(1),    '𓏺'));
    it('converts 10',      () => assertEqual(numberToEgyptian(10),   '𓎆'));
    it('converts 100',     () => assertEqual(numberToEgyptian(100),  '𓍢'));
    it('converts 1000',    () => assertEqual(numberToEgyptian(1000), '𓆼'));
    it('converts 11',      () => assertEqual(numberToEgyptian(11),   '𓎆𓏺'));
    it('converts 21',      () => assertEqual(numberToEgyptian(21),   '𓎆𓎆𓏺'));
    it('converts 111',     () => assertEqual(numberToEgyptian(111),  '𓍢𓎆𓏺'));
    it('converts 1111',    () => assertEqual(numberToEgyptian(1111), '𓆼𓍢𓎆𓏺'));
    it('converts 22',      () => assertEqual(numberToEgyptian(22),   '𓎆𓎆𓏺𓏺'));
    it('returns Invalid for 0',       () => assertEqual(numberToEgyptian(0),       'Invalid'));
    it('returns Invalid for 1000000', () => assertEqual(numberToEgyptian(1000000), 'Invalid'));
    it('returns Invalid for negative',() => assertEqual(numberToEgyptian(-5),      'Invalid'));
});

describe('egyptianToNumber', () => {
    it('parses 𓏺 → 1',         () => assertEqual(egyptianToNumber('𓏺'), 1));
    it('parses 𓎆 → 10',        () => assertEqual(egyptianToNumber('𓎆'), 10));
    it('parses 𓍢 → 100',       () => assertEqual(egyptianToNumber('𓍢'), 100));
    it('parses 𓆼 → 1000',      () => assertEqual(egyptianToNumber('𓆼'), 1000));
    it('parses 𓎆𓏺 → 11',      () => assertEqual(egyptianToNumber('𓎆𓏺'), 11));
    it('parses 𓍢𓎆𓏺 → 111',   () => assertEqual(egyptianToNumber('𓍢𓎆𓏺'), 111));
    it('parses 𓆼𓍢𓎆𓏺 → 1111',() => assertEqual(egyptianToNumber('𓆼𓍢𓎆𓏺'), 1111));
});

describe('Egyptian round-trip', () => {
    [1, 10, 11, 99, 100, 111, 999, 1000, 1234, 9999].forEach(n => {
        it(`round-trips ${n}`, () => assertEqual(egyptianToNumber(numberToEgyptian(n)), n));
    });
});

describe('generateEgyptianProblem', () => {
    it('produces a valid answer for difficulty 1', () => {
        const p = generateEgyptianProblem(1);
        assertTrue(p.answer > 0, 'answer must be positive');
        assertEqual(egyptianToNumber(p.egyptianAnswer), p.answer);
    });

    it('answer matches operation', () => {
        for (let i = 0; i < 20; i++) {
            const p = generateEgyptianProblem(rand(1, 5));
            const expected = p.operation === '+' ? p.num1 + p.num2 : p.num1 - p.num2;
            assertEqual(p.answer, expected);
        }
    });

    it('subtraction never produces zero or negative', () => {
        for (let i = 0; i < 50; i++) {
            const p = generateEgyptianProblem(rand(1, 5));
            assertTrue(p.answer > 0, `answer must be > 0, got ${p.answer}`);
        }
    });
});
