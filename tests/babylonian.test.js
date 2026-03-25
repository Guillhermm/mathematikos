// ===== BABYLONIAN NUMERAL TESTS =====

describe('convertBabylonianDigit', () => {
    it('0 → ⊙',  () => assertEqual(convertBabylonianDigit(0),  '⊙'));
    it('1 → 𒐕',  () => assertEqual(convertBabylonianDigit(1),  '𒐕'));
    it('10 → 𒌋', () => assertEqual(convertBabylonianDigit(10), '𒌋'));
    it('11 → 𒌋𒐕',() => assertEqual(convertBabylonianDigit(11), '𒌋𒐕'));
    it('59 → 𒌋𒌋𒌋𒌋𒌋𒐕𒐕𒐕𒐕𒐕𒐕𒐕𒐕𒐕', () => {
        const result = convertBabylonianDigit(59);
        const tens = (result.match(/𒌋/g) || []).length;
        const ones = (result.match(/𒐕/g) || []).length;
        assertEqual(tens, 5);
        assertEqual(ones, 9);
    });
});

describe('parseBabylonianDigit', () => {
    it('⊙ → 0',   () => assertEqual(parseBabylonianDigit('⊙'),   0));
    it('𒐕 → 1',   () => assertEqual(parseBabylonianDigit('𒐕'),   1));
    it('𒌋 → 10',  () => assertEqual(parseBabylonianDigit('𒌋'),   10));
    it('𒌋𒐕 → 11', () => assertEqual(parseBabylonianDigit('𒌋𒐕'), 11));
    it('𒌋𒌋𒐕𒐕𒐕 → 23', () => assertEqual(parseBabylonianDigit('𒌋𒌋𒐕𒐕𒐕'), 23));
});

describe('numberToBabylonian', () => {
    it('converts 1',  () => assertEqual(numberToBabylonian(1),  '𒐕'));
    it('converts 10', () => assertEqual(numberToBabylonian(10), '𒌋'));
    it('converts 59', () => {
        const result = numberToBabylonian(59);
        // Should be a single group (no space) with 5 tens + 9 ones
        assertTrue(!result.includes(' '), 'single digit group for < 60');
        assertEqual(parseBabylonianDigit(result), 59);
    });
    it('converts 60 → 𒐕 ⊙', () => {
        const result = numberToBabylonian(60);
        assertEqual(result, '𒐕 ⊙');
    });
    it('converts 61', () => {
        const result = numberToBabylonian(61);
        assertEqual(result, '𒐕 𒐕');
    });
    it('converts 80 (1×60 + 20)', () => {
        const result = numberToBabylonian(80);
        const parts = result.split(' ');
        assertEqual(parts.length, 2);
        assertEqual(parseBabylonianDigit(parts[0]), 1);
        assertEqual(parseBabylonianDigit(parts[1]), 20);
    });
    it('returns Invalid for 0',    () => assertEqual(numberToBabylonian(0),    'Invalid'));
    it('returns Invalid for 3600', () => assertEqual(numberToBabylonian(3600), 'Invalid'));
    it('returns Invalid for negative', () => assertEqual(numberToBabylonian(-1), 'Invalid'));
});

describe('babylonianToNumber', () => {
    it('parses single digit: 𒐕 → 1',     () => assertEqual(babylonianToNumber('𒐕'), 1));
    it('parses single digit: 𒌋 → 10',    () => assertEqual(babylonianToNumber('𒌋'), 10));
    it('parses two positions: 𒐕 ⊙ → 60', () => assertEqual(babylonianToNumber('𒐕 ⊙'), 60));
    it('parses two positions: 𒐕 𒐕 → 61', () => assertEqual(babylonianToNumber('𒐕 𒐕'), 61));
});

describe('Babylonian round-trip', () => {
    [1, 10, 30, 59, 60, 61, 80, 120, 300, 600, 1200, 3599].forEach(n => {
        it(`round-trips ${n}`, () => assertEqual(babylonianToNumber(numberToBabylonian(n)), n));
    });
});

describe('generateBabylonianProblem', () => {
    it('answer is always within 1–3599 (run 100 times)', () => {
        for (let i = 0; i < 100; i++) {
            const p = generateBabylonianProblem(rand(1, 5));
            assertTrue(p.answer >= 1 && p.answer < 3600,
                `answer ${p.answer} is out of Babylonian range`);
        }
    });

    it('answer matches the operation', () => {
        for (let i = 0; i < 20; i++) {
            const p = generateBabylonianProblem(rand(1, 5));
            const expected = p.operation === '+' ? p.num1 + p.num2 : p.num1 - p.num2;
            assertEqual(p.answer, expected);
        }
    });

    it('subtraction never produces zero or negative', () => {
        for (let i = 0; i < 50; i++) {
            const p = generateBabylonianProblem(rand(1, 5));
            assertTrue(p.answer > 0, `answer must be > 0, got ${p.answer}`);
        }
    });
});

describe('convertBabylonianDigit — extended', () => {
    [2, 3, 4, 5, 6, 7, 8, 9].forEach(n => {
        it(`digit ${n} has exactly ${n} ones and 0 tens`, () => {
            const result = convertBabylonianDigit(n);
            const ones = (result.match(/𒐕/g) || []).length;
            const tens = (result.match(/𒌋/g) || []).length;
            assertEqual(ones, n);
            assertEqual(tens, 0);
        });
    });
    it('digit 20 has 2 tens and 0 ones', () => {
        const result = convertBabylonianDigit(20);
        assertEqual((result.match(/𒌋/g) || []).length, 2);
        assertEqual((result.match(/𒐕/g) || []).length, 0);
    });
    it('digit 30 has 3 tens', () => {
        assertEqual((convertBabylonianDigit(30).match(/𒌋/g) || []).length, 3);
    });
    it('digit 45 has 4 tens and 5 ones', () => {
        const r = convertBabylonianDigit(45);
        assertEqual((r.match(/𒌋/g) || []).length, 4);
        assertEqual((r.match(/𒐕/g) || []).length, 5);
    });
});

describe('parseBabylonianDigit — round-trips with convertBabylonianDigit', () => {
    [0, 1, 5, 10, 19, 23, 45, 59].forEach(n => {
        it(`round-trips digit ${n}`, () => {
            assertEqual(parseBabylonianDigit(convertBabylonianDigit(n)), n);
        });
    });
});

describe('babylonianToNumber — extended', () => {
    it('parses single zero ⊙ → 0', () => assertEqual(babylonianToNumber('⊙'), 0));
    it('parses 3599 correctly', () => {
        assertEqual(babylonianToNumber(numberToBabylonian(3599)), 3599);
    });
    it('parses 3540 = 59×60', () => {
        assertEqual(babylonianToNumber(numberToBabylonian(3540)), 3540);
    });
});

describe('generateBabylonianProblem — babylonianAnswer round-trips', () => {
    it('babylonianAnswer round-trips correctly (50 runs)', () => {
        for (let i = 0; i < 50; i++) {
            const p = generateBabylonianProblem(rand(1, 5));
            assertEqual(babylonianToNumber(p.babylonianAnswer), p.answer,
                `round-trip failed for ${p.babylonianAnswer} (expected ${p.answer})`);
        }
    });

    [1, 2, 3, 4, 5].forEach(diff => {
        it(`difficulty ${diff}: answer in range [1, 3599]`, () => {
            for (let i = 0; i < 10; i++) {
                const p = generateBabylonianProblem(diff);
                assertTrue(p.answer >= 1 && p.answer < 3600,
                    `answer ${p.answer} out of range at diff ${diff}`);
            }
        });
    });
});
