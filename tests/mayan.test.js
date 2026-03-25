// ===== MAYA NUMERAL TESTS =====

describe('numberToMayan', () => {
    it('converts 0 → ○', () => assertEqual(numberToMayan(0), '○'));
    it('converts 1 → ●', () => assertEqual(numberToMayan(1), '●'));
    it('converts 4 → ●●●●', () => assertEqual(numberToMayan(4), '●●●●'));
    it('converts 5 → ━', () => assertEqual(numberToMayan(5), '━'));
    it('converts 6 → ━●', () => assertEqual(numberToMayan(6), '━●'));
    it('converts 9 → ━●●●●', () => assertEqual(numberToMayan(9), '━●●●●'));
    it('converts 10 → ━━', () => assertEqual(numberToMayan(10), '━━'));
    it('converts 14 → ━━●●●●', () => assertEqual(numberToMayan(14), '━━●●●●'));
    it('converts 15 → ━━━', () => assertEqual(numberToMayan(15), '━━━'));
    it('converts 19 → ━━━●●●●', () => assertEqual(numberToMayan(19), '━━━●●●●'));
    it('converts 20 → ●|○', () => assertEqual(numberToMayan(20), '●|○'));
    it('converts 21 → ●|●', () => assertEqual(numberToMayan(21), '●|●'));
    it('converts 25 → ●|━', () => assertEqual(numberToMayan(25), '●|━'));
    it('converts 40 → ●●|○', () => assertEqual(numberToMayan(40), '●●|○'));
    it('converts 399 → ━━━●●●●|━━━●●●●', () => assertEqual(numberToMayan(399), '━━━●●●●|━━━●●●●'));
    it('returns Invalid for 400', () => assertEqual(numberToMayan(400), 'Invalid'));
    it('returns Invalid for negative', () => assertEqual(numberToMayan(-1), 'Invalid'));
    it('returns Invalid for non-integer', () => assertEqual(numberToMayan(3.5), 'Invalid'));
});

describe('mayanToNumber', () => {
    it('parses ○ → 0', () => assertEqual(mayanToNumber('○'), 0));
    it('parses ● → 1', () => assertEqual(mayanToNumber('●'), 1));
    it('parses ━ → 5', () => assertEqual(mayanToNumber('━'), 5));
    it('parses ━━━●●●● → 19', () => assertEqual(mayanToNumber('━━━●●●●'), 19));
    it('parses ●|○ → 20', () => assertEqual(mayanToNumber('●|○'), 20));
    it('parses ●|● → 21', () => assertEqual(mayanToNumber('●|●'), 21));
    it('parses ●|━ → 25', () => assertEqual(mayanToNumber('●|━'), 25));
    it('parses ●●|○ → 40', () => assertEqual(mayanToNumber('●●|○'), 40));
    it('parses ━━━●●●●|━━━●●●● → 399', () => assertEqual(mayanToNumber('━━━●●●●|━━━●●●●'), 399));
    it('returns NaN for invalid digit > 19', () => assertTrue(isNaN(mayanToNumber('━━━━'))));
});

describe('Maya round-trip (numberToMayan → mayanToNumber)', () => {
    [0, 1, 5, 9, 10, 14, 15, 19, 20, 21, 25, 40, 100, 199, 200, 399].forEach(n => {
        it(`round-trips ${n}`, () => assertEqual(mayanToNumber(numberToMayan(n)), n));
    });
});

describe('generateMayanProblem', () => {
    it('produces a valid answer for difficulty 1', () => {
        const p = generateMayanProblem(1);
        assertTrue(p.answer > 0 && p.answer <= 399, `answer ${p.answer} out of range`);
    });
    it('answer matches the operation', () => {
        const p = generateMayanProblem(3);
        const expected = p.operation === '+' ? p.num1 + p.num2 : p.num1 - p.num2;
        assertEqual(p.answer, expected);
    });
    it('mayanAnswer round-trips correctly (50 runs)', () => {
        for (let i = 0; i < 50; i++) {
            const p = generateMayanProblem(rand(1, 5));
            assertEqual(mayanToNumber(p.mayanAnswer), p.answer, `round-trip failed for ${p.mayanAnswer} (${p.answer})`);
        }
    });
    it('answer is always within 1–399 (run 100 times)', () => {
        for (let i = 0; i < 100; i++) {
            const p = generateMayanProblem(rand(1, 5));
            assertTrue(p.answer >= 1 && p.answer <= 399, `answer ${p.answer} out of range`);
        }
    });
    it('subtraction never produces zero or negative answer', () => {
        for (let i = 0; i < 50; i++) {
            const p = generateMayanProblem(rand(1, 5));
            if (p.operation === '-') assertTrue(p.answer > 0, `negative/zero subtraction: ${p.num1} - ${p.num2} = ${p.answer}`);
        }
    });
});

describe('numberToMayan — full digit range 0–19', () => {
    const expected = {
        0:'○', 1:'●', 2:'●●', 3:'●●●', 4:'●●●●',
        5:'━', 6:'━●', 7:'━●●', 8:'━●●●', 9:'━●●●●',
        10:'━━', 11:'━━●', 12:'━━●●', 13:'━━●●●', 14:'━━●●●●',
        15:'━━━', 16:'━━━●', 17:'━━━●●', 18:'━━━●●●', 19:'━━━●●●●'
    };
    Object.entries(expected).forEach(([n, str]) => {
        it(`converts ${n} → ${str}`, () => assertEqual(numberToMayan(+n), str));
    });
});

describe('numberToMayan — positional values', () => {
    it('converts 60 → ●●●|○',    () => assertEqual(numberToMayan(60),  '●●●|○'));
    it('converts 100 → ━|○',     () => assertEqual(numberToMayan(100), '━|○'));
    it('converts 380 → ━━━●●●●●|○', () => {
        // 380 = 19×20 + 0
        assertEqual(numberToMayan(380), '━━━●●●●|○');
    });
});

describe('mayanToNumber — edge cases', () => {
    it('returns NaN for empty string', () => assertTrue(isNaN(mayanToNumber(''))));
    it('returns NaN for whitespace only', () => assertTrue(isNaN(mayanToNumber('   '))));
    it('returns 0 for whitespace-padded ○', () => assertEqual(mayanToNumber(' ○ '), 0));
});

describe('Maya — all digits 0–19 round-trip', () => {
    for (let d = 0; d <= 19; d++) {
        it(`round-trips digit ${d}`, () => {
            assertEqual(mayanToNumber(numberToMayan(d)), d);
        });
    }
});

describe('generateMayanProblem — all difficulties', () => {
    [1, 2, 3, 4, 5].forEach(diff => {
        it(`difficulty ${diff}: answer in [1, 399], mayanAnswer round-trips`, () => {
            for (let i = 0; i < 10; i++) {
                const p = generateMayanProblem(diff);
                assertTrue(p.answer >= 1 && p.answer <= 399,
                    `answer ${p.answer} out of range at diff ${diff}`);
                assertEqual(mayanToNumber(p.mayanAnswer), p.answer,
                    `round-trip failed at diff ${diff}`);
            }
        });
    });
});
