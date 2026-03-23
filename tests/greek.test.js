// ===== GREEK NUMERAL TESTS =====

describe('numberToGreek', () => {
    it('converts 1 → α',    () => assertEqual(numberToGreek(1),   'α'));
    it('converts 5 → ε',    () => assertEqual(numberToGreek(5),   'ε'));
    it('converts 9 → θ',    () => assertEqual(numberToGreek(9),   'θ'));
    it('converts 10 → ι',   () => assertEqual(numberToGreek(10),  'ι'));
    it('converts 20 → κ',   () => assertEqual(numberToGreek(20),  'κ'));
    it('converts 90 → ϙ',   () => assertEqual(numberToGreek(90),  'ϙ'));
    it('converts 100 → ρ',  () => assertEqual(numberToGreek(100), 'ρ'));
    it('converts 900 → ϡ',  () => assertEqual(numberToGreek(900), 'ϡ'));
    it('converts 999 → ϡϙθ',() => assertEqual(numberToGreek(999), 'ϡϙθ'));
    it('converts 123 → ρκγ',() => assertEqual(numberToGreek(123), 'ρκγ'));
    it('converts 11 → ια',  () => assertEqual(numberToGreek(11),  'ια'));
    it('returns Invalid for 0',    () => assertEqual(numberToGreek(0),    'Invalid'));
    it('returns Invalid for 1000', () => assertEqual(numberToGreek(1000), 'Invalid'));
    it('returns Invalid for negative', () => assertEqual(numberToGreek(-1), 'Invalid'));
});

describe('greekToNumber', () => {
    it('parses α → 1',     () => assertEqual(greekToNumber('α'),   1));
    it('parses θ → 9',     () => assertEqual(greekToNumber('θ'),   9));
    it('parses ι → 10',    () => assertEqual(greekToNumber('ι'),   10));
    it('parses ρ → 100',   () => assertEqual(greekToNumber('ρ'),   100));
    it('parses ϡϙθ → 999', () => assertEqual(greekToNumber('ϡϙθ'),999));
    it('parses ρκγ → 123', () => assertEqual(greekToNumber('ρκγ'),123));
    it('parses ια → 11',   () => assertEqual(greekToNumber('ια'),  11));
});

describe('Greek round-trip', () => {
    [1, 5, 9, 10, 11, 99, 100, 123, 500, 900, 999].forEach(n => {
        it(`round-trips ${n}`, () => assertEqual(greekToNumber(numberToGreek(n)), n));
    });
});

describe('generateGreekProblem', () => {
    it('answer is always within 1–999 (run 100 times)', () => {
        for (let i = 0; i < 100; i++) {
            const p = generateGreekProblem(rand(1, 5));
            assertTrue(p.answer >= 1 && p.answer <= 999,
                `answer ${p.answer} is out of Greek range [1, 999]`);
        }
    });

    it('answer matches the operation', () => {
        for (let i = 0; i < 20; i++) {
            const p = generateGreekProblem(rand(1, 5));
            const expected = p.operation === '+' ? p.num1 + p.num2 : p.num1 - p.num2;
            assertEqual(p.answer, expected);
        }
    });

    it('greekAnswer round-trips correctly', () => {
        for (let i = 0; i < 20; i++) {
            const p = generateGreekProblem(rand(1, 5));
            assertEqual(greekToNumber(p.greekAnswer), p.answer,
                `round-trip failed for answer ${p.answer}`);
        }
    });

    it('subtraction never produces zero or negative', () => {
        for (let i = 0; i < 50; i++) {
            const p = generateGreekProblem(rand(1, 5));
            assertTrue(p.answer > 0, `answer must be > 0, got ${p.answer}`);
        }
    });
});
