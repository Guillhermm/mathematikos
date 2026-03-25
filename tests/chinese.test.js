// ===== CHINESE NUMERAL TESTS =====

describe('numberToChinese', () => {
    it('converts 0 → 〇',           () => assertEqual(numberToChinese(0),     '〇'));
    it('converts 1 → 一',           () => assertEqual(numberToChinese(1),     '一'));
    it('converts 9 → 九',           () => assertEqual(numberToChinese(9),     '九'));
    it('converts 10 → 十',          () => assertEqual(numberToChinese(10),    '十'));
    it('converts 11 → 十一',        () => assertEqual(numberToChinese(11),    '十一'));
    it('converts 20 → 二十',        () => assertEqual(numberToChinese(20),    '二十'));
    it('converts 21 → 二十一',      () => assertEqual(numberToChinese(21),    '二十一'));
    it('converts 100 → 百',         () => assertEqual(numberToChinese(100),   '百'));
    it('converts 101 → 百〇一',     () => assertEqual(numberToChinese(101),   '百〇一'));
    it('converts 110 → 百一十',     () => assertEqual(numberToChinese(110),   '百一十'));
    it('converts 111 → 百一十一',   () => assertEqual(numberToChinese(111),   '百一十一'));
    it('converts 200 → 二百',       () => assertEqual(numberToChinese(200),   '二百'));
    it('converts 1000 → 千',        () => assertEqual(numberToChinese(1000),  '千'));
    it('converts 1001 → 千〇一',    () => assertEqual(numberToChinese(1001),  '千〇一'));
    it('converts 1100 → 千百',      () => assertEqual(numberToChinese(1100),  '千百'));
    it('converts 10000 → 萬',       () => assertEqual(numberToChinese(10000), '萬'));
    it('converts 20000 → 二萬',     () => assertEqual(numberToChinese(20000), '二萬'));
    it('returns Invalid for negative',() => assertEqual(numberToChinese(-1),   'Invalid'));
    it('returns Invalid for 100000', () => assertEqual(numberToChinese(100000),'Invalid'));
});

describe('chineseToNumber', () => {
    it('parses 〇 → 0',     () => assertEqual(chineseToNumber('〇'),   0));
    it('parses 一 → 1',     () => assertEqual(chineseToNumber('一'),   1));
    it('parses 十 → 10',    () => assertEqual(chineseToNumber('十'),   10));
    it('parses 十一 → 11',  () => assertEqual(chineseToNumber('十一'), 11));
    it('parses 二十 → 20',  () => assertEqual(chineseToNumber('二十'), 20));
    it('parses 百 → 100',   () => assertEqual(chineseToNumber('百'),   100));
    it('parses 百一十一 → 111',() => assertEqual(chineseToNumber('百一十一'), 111));
    it('parses 千 → 1000',  () => assertEqual(chineseToNumber('千'),   1000));
    it('parses 萬 → 10000', () => assertEqual(chineseToNumber('萬'),   10000));
    it('parses 二萬 → 20000',() => assertEqual(chineseToNumber('二萬'),20000));
});

describe('Chinese round-trip', () => {
    [0, 1, 9, 10, 11, 20, 21, 99, 100, 101, 110, 111, 200, 999,
     1000, 1001, 1100, 2000, 9999, 10000, 20000, 99999].forEach(n => {
        it(`round-trips ${n}`, () => assertEqual(chineseToNumber(numberToChinese(n)), n));
    });
});

describe('generateChineseProblem', () => {
    it('produces a valid answer for difficulty 1', () => {
        const p = generateChineseProblem(1);
        assertTrue(p.answer > 0, 'answer must be positive');
        assertEqual(chineseToNumber(p.chineseAnswer), p.answer,
            `round-trip failed for ${p.answer}`);
    });

    it('answer matches the operation', () => {
        for (let i = 0; i < 20; i++) {
            const p = generateChineseProblem(rand(1, 5));
            const expected = p.operation === '+' ? p.num1 + p.num2 : p.num1 - p.num2;
            assertEqual(p.answer, expected);
        }
    });

    it('chineseAnswer round-trips correctly (50 runs)', () => {
        for (let i = 0; i < 50; i++) {
            const p = generateChineseProblem(rand(1, 5));
            assertEqual(chineseToNumber(p.chineseAnswer), p.answer,
                `round-trip mismatch: ${p.chineseAnswer} should equal ${p.answer}`);
        }
    });

    it('subtraction never produces zero or negative', () => {
        for (let i = 0; i < 50; i++) {
            const p = generateChineseProblem(rand(1, 5));
            assertTrue(p.answer > 0, `answer must be > 0, got ${p.answer}`);
        }
    });
});

describe('numberToChinese — tricky cases', () => {
    it('converts 1010 → 千一十', () => assertEqual(numberToChinese(1010), '千一十'));
    it('converts 2001 → 二千〇一',  () => assertEqual(numberToChinese(2001), '二千〇一'));
    it('converts 10001 → 萬〇〇一',  () => assertEqual(numberToChinese(10001), '萬〇〇一'));
    it('converts 11111 → 萬千百一十一', () => assertEqual(numberToChinese(11111), '萬千百一十一'));
    it('converts 99999 → 九萬九千九百九十九', () => assertEqual(numberToChinese(99999), '九萬九千九百九十九'));
    it('converts 2 → 二',  () => assertEqual(numberToChinese(2),  '二'));
    it('converts 50 → 五十', () => assertEqual(numberToChinese(50), '五十'));
    it('converts 500 → 五百', () => assertEqual(numberToChinese(500), '五百'));
});

describe('chineseToNumber — edge cases', () => {
    it('returns 0 for unknown chars', () => assertEqual(chineseToNumber('ABC'), 0));
    it('parses 五百 → 500',   () => assertEqual(chineseToNumber('五百'), 500));
    it('parses 五十 → 50',    () => assertEqual(chineseToNumber('五十'), 50));
    it('parses 千〇一 → 1001', () => assertEqual(chineseToNumber('千〇一'), 1001));
    it('parses 千百 → 1100',   () => assertEqual(chineseToNumber('千百'), 1100));
});

describe('generateChineseProblem — all difficulties', () => {
    [1, 2, 3, 4, 5].forEach(diff => {
        it(`difficulty ${diff}: answer > 0, chineseAnswer round-trips`, () => {
            for (let i = 0; i < 10; i++) {
                const p = generateChineseProblem(diff);
                assertTrue(p.answer > 0, `answer must be > 0 at diff ${diff}`);
                assertEqual(chineseToNumber(p.chineseAnswer), p.answer,
                    `round-trip failed at diff ${diff}: ${p.chineseAnswer} ≠ ${p.answer}`);
            }
        });
    });
});
