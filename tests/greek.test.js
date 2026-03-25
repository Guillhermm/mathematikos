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

describe('numberToGreek — all 27 standard values', () => {
    // Units 1–9
    const expected = {
        1:'α', 2:'β', 3:'γ', 4:'δ', 5:'ε', 6:'ϛ', 7:'ζ', 8:'η', 9:'θ',
        // Tens 10–90
        10:'ι', 20:'κ', 30:'λ', 40:'μ', 50:'ν', 60:'ξ', 70:'ο', 80:'π', 90:'ϙ',
        // Hundreds 100–900
        100:'ρ', 200:'σ', 300:'τ', 400:'υ', 500:'φ', 600:'χ', 700:'ψ', 800:'ω', 900:'ϡ'
    };
    Object.entries(expected).forEach(([num, letter]) => {
        it(`converts ${num} → ${letter}`, () => assertEqual(numberToGreek(+num), letter));
    });
});

describe('numberToGreek — composite values', () => {
    it('converts 55 → νε',   () => assertEqual(numberToGreek(55),  'νε'));
    it('converts 444 → υμδ', () => assertEqual(numberToGreek(444), 'υμδ'));
    it('converts 888 → ωπη', () => assertEqual(numberToGreek(888), 'ωπη'));
    it('converts 506 → φϛ',  () => assertEqual(numberToGreek(506), 'φϛ'));
});

describe('greekToNumber — all 27 standard letters', () => {
    const pairs = [
        ['α',1],['β',2],['γ',3],['δ',4],['ε',5],['ϛ',6],['ζ',7],['η',8],['θ',9],
        ['ι',10],['κ',20],['λ',30],['μ',40],['ν',50],['ξ',60],['ο',70],['π',80],['ϙ',90],
        ['ρ',100],['σ',200],['τ',300],['υ',400],['φ',500],['χ',600],['ψ',700],['ω',800],['ϡ',900]
    ];
    pairs.forEach(([letter, value]) => {
        it(`parses ${letter} → ${value}`, () => assertEqual(greekToNumber(letter), value));
    });
});

describe('greekToNumber — edge cases', () => {
    it('returns 0 for empty string', () => assertEqual(greekToNumber(''), 0));
    it('returns 0 for non-Greek chars', () => assertEqual(greekToNumber('ABC'), 0));
    it('ignores unknown chars in mixed string', () => assertEqual(greekToNumber('ιZα'), 11));
});

describe('generateGreekProblem — all difficulties', () => {
    [1, 2, 3, 4, 5].forEach(diff => {
        it(`difficulty ${diff}: answer in range, greekAnswer round-trips`, () => {
            for (let i = 0; i < 10; i++) {
                const p = generateGreekProblem(diff);
                assertTrue(p.answer >= 1 && p.answer <= 999,
                    `answer ${p.answer} out of range at diff ${diff}`);
                assertEqual(greekToNumber(p.greekAnswer), p.answer);
            }
        });
    });
});
