// ===== CHINESE ROD / SUANPAN NUMERAL SYSTEM =====
// Uses traditional Chinese numerals with place-value markers.
// Practical range: 0–99,999.

const CHINESE_NUMERALS = {
    0:     '〇',
    1:     '一', 2: '二', 3: '三', 4: '四', 5: '五',
    6:     '六', 7: '七', 8: '八', 9: '九',
    10:    '十',
    100:   '百',
    1000:  '千',
    10000: '萬'
};

// Reverse lookup: character → single-digit value (1–9 only)
const CHINESE_DIGIT_VALUES = Object.fromEntries(
    Object.entries(CHINESE_NUMERALS)
        .filter(([num]) => parseInt(num) >= 1 && parseInt(num) <= 9)
        .map(([num, char]) => [char, parseInt(num)])
);

function numberToChinese(num) {
    if (num === 0) return CHINESE_NUMERALS[0];
    if (!Number.isInteger(num) || num < 0 || num > 99999) return 'Invalid';

    let result = '';
    let remaining = num;

    // Ten-thousands
    if (remaining >= 10000) {
        const wan = Math.floor(remaining / 10000);
        if (wan > 1) result += CHINESE_NUMERALS[wan];
        result += CHINESE_NUMERALS[10000];
        remaining %= 10000;
    }

    // Thousands
    if (remaining >= 1000) {
        const qian = Math.floor(remaining / 1000);
        if (qian > 1) result += CHINESE_NUMERALS[qian];
        result += CHINESE_NUMERALS[1000];
        remaining %= 1000;
    } else if (result && remaining > 0 && remaining < 100) {
        result += CHINESE_NUMERALS[0];
    }

    // Hundreds
    if (remaining >= 100) {
        const bai = Math.floor(remaining / 100);
        if (bai > 1) result += CHINESE_NUMERALS[bai];
        result += CHINESE_NUMERALS[100];
        remaining %= 100;
        // Insert zero placeholder when tens digit is 0 but ones are present.
        if (remaining > 0 && remaining < 10) {
            result += CHINESE_NUMERALS[0];
        }
    } else if (result && remaining > 0 && remaining < 10) {
        result += CHINESE_NUMERALS[0];
    }

    // Tens
    if (remaining >= 10) {
        const shi = Math.floor(remaining / 10);
        if (shi > 1 || result) result += CHINESE_NUMERALS[shi];
        result += CHINESE_NUMERALS[10];
        remaining %= 10;
    }

    // Ones
    if (remaining > 0) {
        result += CHINESE_NUMERALS[remaining];
    }

    return result || CHINESE_NUMERALS[0];
}

function chineseToNumber(chinese) {
    if (chinese === CHINESE_NUMERALS[0]) return 0;

    let total = 0;
    let current = 0;

    for (const char of chinese) {
        if (char === CHINESE_NUMERALS[10000]) {
            total += (current || 1) * 10000;
            current = 0;
        } else if (char === CHINESE_NUMERALS[1000]) {
            total += (current || 1) * 1000;
            current = 0;
        } else if (char === CHINESE_NUMERALS[100]) {
            total += (current || 1) * 100;
            current = 0;
        } else if (char === CHINESE_NUMERALS[10]) {
            total += (current || 1) * 10;
            current = 0;
        } else if (char === CHINESE_NUMERALS[0]) {
            // Zero placeholder — skip
        } else {
            current = CHINESE_DIGIT_VALUES[char] || 0;
        }
    }

    return total + current;
}

function generateChineseProblem(difficulty) {
    let num1, num2;

    switch (difficulty) {
        case 1:  num1 = rand(10, 39);   num2 = rand(5, 24);    break;
        case 2:  num1 = rand(30, 109);  num2 = rand(20, 69);   break;
        case 3:  num1 = rand(80, 279);  num2 = rand(50, 199);  break;
        case 4:  num1 = rand(300, 1099);num2 = rand(200, 699); break;
        case 5:  num1 = rand(1000, 3999);num2 = rand(500, 2499);break;
        default: num1 = rand(20, 99);   num2 = rand(10, 59);
    }

    let operation = Math.random() > 0.5 ? '+' : '-';
    if (operation === '-' && num1 < num2) [num1, num2] = [num2, num1];
    if (operation === '-' && num1 === num2) num1 += 1;

    const answer = operation === '+' ? num1 + num2 : num1 - num2;
    const chinese1 = numberToChinese(num1);
    const chinese2 = numberToChinese(num2);

    const contexts = [
        `The merchant calculates: ${num1} bolts of silk ${operation === '+' ? 'plus' : 'minus'} ${num2} bolts of cotton in the Han Dynasty market.`,
        `Calculate the imperial treasury: ${num1} taels of silver ${operation === '+' ? 'combined with' : 'reduced by'} ${num2} taels of gold.`,
        `The abacus master asks: ${num1} bags of rice ${operation === '+' ? 'and' : 'minus'} ${num2} bags of wheat. What is the result?`,
        `Festival preparations: ${num1} lanterns ${operation === '+' ? 'added to' : 'removed from'} ${num2} paper dragons. Calculate the total.`,
        `Counting rods show: ${num1} jade pieces ${operation === '+' ? 'plus' : 'minus'} ${num2} bronze coins at the marketplace.`
    ];

    return {
        num1, num2, operation, answer,
        chinese1, chinese2,
        chineseAnswer: numberToChinese(answer),
        context: contexts[rand(0, contexts.length - 1)],
        hint: `Chinese system! ${chinese1} = ${num1}, ${chinese2} = ${num2}. Calculate: ${num1} ${operation} ${num2} = ${answer}. 一二三=1,2,3; 十百千萬=10,100,1000,10000`
    };
}

// ----- Display (browser only) -----

function displayChineseChallenge() {
    const problem = gameState.currentProblem;

    document.getElementById('scene-description').innerHTML = `
        <strong>Challenge ${gameState.currentChallenge} of ${gameState.totalChallenges}</strong>
        <p>${problem.context}</p>
    `;

    document.getElementById('number-system-info').innerHTML = `
        <h4>Chinese Rod Numerals / Suanpan System</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 10px;">
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">
                <strong>Basic Digits:</strong><br>
                〇=0, 一=1, 二=2, 三=3, 四=4<br>
                五=5, 六=6, 七=7, 八=8, 九=9
            </div>
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">
                <strong>Place Values:</strong><br>
                十 = 10 (ten)<br>
                百 = 100 (hundred)<br>
                千 = 1,000 (thousand)<br>
                萬 = 10,000 (ten thousand)
            </div>
        </div>
        <p style="font-size: 0.9rem; margin-top: 8px;">💡 Tip: Read from left to right. 三百五十二 = 3×100 + 5×10 + 2 = 352</p>
    `;

    document.getElementById('problem').innerHTML = `
        <div style="font-size: 2.2rem; line-height: 1.5;">
            ${problem.chinese1} ${problem.operation} ${problem.chinese2} = <span style="color: #CD853F;">?</span>
        </div>
    `;
}
