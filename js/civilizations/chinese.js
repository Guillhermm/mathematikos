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
            // Zero placeholder, skip
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

    const context = tPick(
        `challenge.chinese.contexts.${operation === '+' ? 'plus' : 'minus'}`,
        { num1, num2 }
    );

    return {
        num1, num2, operation, answer,
        chinese1, chinese2,
        chineseAnswer: numberToChinese(answer),
        context,
        hint: t('challenge.chinese.hint', { sym1: chinese1, sym2: chinese2, num1, num2, operation, answer })
    };
}

// ----- Display (browser only) -----

function displayChineseChallenge() {
    const problem = gameState.currentProblem;

    renderSceneDescription(problem.context);

    document.getElementById('number-system-info').innerHTML = `
        <h4>${t('guide.chinese.title')}</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 10px;">
            <div class="guide-panel">
                <strong>${t('guide.chinese.basicDigits')}</strong><br>
                <span class="chinese-numeral">〇=0, 一=1, 二=2, 三=3, 四=4</span><br>
                <span class="chinese-numeral">五=5, 六=6, 七=7, 八=8, 九=9</span>
            </div>
            <div class="guide-panel">
                <strong>${t('guide.chinese.placeValues')}</strong><br>
                <span class="chinese-numeral">十</span> = 10 (${t('guide.chinese.ten')})<br>
                <span class="chinese-numeral">百</span> = 100 (${t('guide.chinese.hundred')})<br>
                <span class="chinese-numeral">千</span> = 1,000 (${t('guide.chinese.thousand')})<br>
                <span class="chinese-numeral">萬</span> = 10,000 (${t('guide.chinese.tenThousand')})
            </div>
        </div>
        <p style="font-size: 0.9rem; margin-top: 8px;">${icon('lamp')} ${t('guide.chinese.tip')}</p>
    `;

    document.getElementById('problem').innerHTML = `
        <div class="problem-numerals chinese-problem">
            <span class="operand">${chineseToHtml(problem.chinese1)}</span>
            <span class="problem-operator">${problem.operation}</span>
            <span class="operand">${chineseToHtml(problem.chinese2)}</span>
        </div>
    `;
}
