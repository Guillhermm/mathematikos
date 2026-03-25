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

describe('numberToEgyptian — higher powers', () => {
    it('converts 10000',  () => assertEqual(numberToEgyptian(10000),  '𓂭'));
    it('converts 100000', () => assertEqual(numberToEgyptian(100000), '𓆏'));
    it('converts 999999 — valid non-Invalid result with 100000 symbol', () => {
        const s = numberToEgyptian(999999);
        assertTrue(s !== 'Invalid', 'should not be Invalid');
        assertTrue(s.includes('𓆏'), '100000 tadpole symbol missing');  // 9 tadpoles
        assertTrue(s.includes('𓏺'), '1 stroke symbol missing');          // 9 strokes
    });
    it('converts 22222', () => {
        const s = numberToEgyptian(22222);
        const n = egyptianToNumber(s);
        assertEqual(n, 22222);
    });
    it('converts 9 → nine strokes', () => {
        const s = numberToEgyptian(9);
        assertEqual((s.match(/𓏺/g) || []).length, 9);
    });
});

describe('egyptianToNumber — edge cases', () => {
    it('returns 0 for empty string', () => assertEqual(egyptianToNumber(''), 0));
    it('returns 0 for non-hieroglyph chars', () => assertEqual(egyptianToNumber('ABC123'), 0));
    it('parses 𓂭 → 10000',  () => assertEqual(egyptianToNumber('𓂭'), 10000));
    it('parses 𓆏 → 100000', () => assertEqual(egyptianToNumber('𓆏'), 100000));
    it('parses repeated symbols: 𓏺𓏺𓏺 → 3', () => assertEqual(egyptianToNumber('𓏺𓏺𓏺'), 3));
    it('parses 𓎆𓎆𓎆 → 30', () => assertEqual(egyptianToNumber('𓎆𓎆𓎆'), 30));
});

describe('Egyptian round-trip — extended', () => {
    [10000, 100000, 22222, 99999, 111111, 999999].forEach(n => {
        it(`round-trips ${n}`, () => assertEqual(egyptianToNumber(numberToEgyptian(n)), n));
    });
});

describe('generateEgyptianProblem — all difficulties', () => {
    [1, 2, 3, 4, 5].forEach(diff => {
        it(`difficulty ${diff}: answer > 0, egyptianAnswer round-trips`, () => {
            for (let i = 0; i < 10; i++) {
                const p = generateEgyptianProblem(diff);
                assertTrue(p.answer > 0, `answer must be > 0 at diff ${diff}`);
                assertEqual(egyptianToNumber(p.egyptianAnswer), p.answer);
            }
        });
    });

    it('problem has all required fields', () => {
        const p = generateEgyptianProblem(1);
        assertTrue(typeof p.num1 === 'number', 'num1 is number');
        assertTrue(p.operation === '+' || p.operation === '-', 'valid operation');
        assertTrue(typeof p.context === 'string' && p.context.length > 0, 'context non-empty');
        assertTrue(typeof p.hint === 'string' && p.hint.length > 0, 'hint non-empty');
    });
});
