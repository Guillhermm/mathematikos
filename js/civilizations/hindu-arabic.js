// ===== HINDU-ARABIC NUMERAL SYSTEM =====
// Eastern Arabic-Indic digits: ٠١٢٣٤٥٦٧٨٩ (Unicode U+0660–U+0669)
// This is the historical form of our modern positional decimal system,
// developed in 9th-century Baghdad and transmitted to Europe via Arabic scholars.
// Practical range: 1–9999.

const EASTERN_ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

// Map each Eastern Arabic digit to its value
const EASTERN_ARABIC_VALUES = Object.fromEntries(
    EASTERN_ARABIC_DIGITS.map((char, i) => [char, i])
);

function numberToHinduArabic(num) {
    if (!Number.isInteger(num) || num < 0 || num > 9999) return 'Invalid';
    return String(num)
        .split('')
        .map(d => EASTERN_ARABIC_DIGITS[parseInt(d)])
        .join('');
}

function hinduArabicToNumber(str) {
    if (!str || typeof str !== 'string') return NaN;
    const trimmed = str.trim();
    if (!trimmed) return NaN;
    let result = 0;
    for (const ch of trimmed) {
        const val = EASTERN_ARABIC_VALUES[ch];
        if (val === undefined) return NaN;
        result = result * 10 + val;
    }
    return result;
}

function hinduArabicToHtml(str) {
    return `<span class="hindu-arabic-numeral">${str}</span>`;
}

function generateHinduArabicProblem(difficulty) {
    let num1, num2;

    switch (difficulty) {
        case 1:  num1 = rand(1,  30);   num2 = rand(1,  20);   break;
        case 2:  num1 = rand(20, 150);  num2 = rand(10, 80);   break;
        case 3:  num1 = rand(100, 500); num2 = rand(50, 250);  break;
        case 4:  num1 = rand(200, 999); num2 = rand(100, 499); break;
        case 5:  num1 = rand(500,4999); num2 = rand(100,1999); break;
        default: num1 = rand(1,  50);   num2 = rand(1,  30);
    }

    let operation = Math.random() > 0.5 ? '+' : '-';
    if (operation === '-' && num1 < num2) [num1, num2] = [num2, num1];
    if (operation === '-' && num1 === num2) num1 += 1;

    const answer  = operation === '+' ? num1 + num2 : num1 - num2;
    const ha1     = numberToHinduArabic(num1);
    const ha2     = numberToHinduArabic(num2);

    const context = tPick(
        `challenge.hindu-arabic.contexts.${operation === '+' ? 'plus' : 'minus'}`,
        { num1, num2 }
    );

    return {
        num1, num2, operation, answer,
        ha1, ha2,
        hinduArabicAnswer: numberToHinduArabic(answer),
        context,
        hint: t('challenge.hindu-arabic.hint', { sym1: ha1, sym2: ha2, num1, num2, operation, answer, answerNumeral: numberToHinduArabic(answer) })
    };
}

function displayHinduArabicChallenge() {
    const problem = gameState.currentProblem;

    renderSceneDescription(problem.context);

    document.getElementById('number-system-info').innerHTML = `
        <h4>${t('guide.hindu-arabic.title')}</h4>
        <p>
            <span class="hindu-arabic-numeral">٠</span>=0 &nbsp;
            <span class="hindu-arabic-numeral">١</span>=1 &nbsp;
            <span class="hindu-arabic-numeral">٢</span>=2 &nbsp;
            <span class="hindu-arabic-numeral">٣</span>=3 &nbsp;
            <span class="hindu-arabic-numeral">٤</span>=4 &nbsp;
            <span class="hindu-arabic-numeral">٥</span>=5 &nbsp;
            <span class="hindu-arabic-numeral">٦</span>=6 &nbsp;
            <span class="hindu-arabic-numeral">٧</span>=7 &nbsp;
            <span class="hindu-arabic-numeral">٨</span>=8 &nbsp;
            <span class="hindu-arabic-numeral">٩</span>=9
        </p>
        <p style="margin-top:8px; font-size:0.9rem;">${icon('lamp')} ${t('guide.hindu-arabic.tip')}</p>
    `;

    document.getElementById('problem').innerHTML = `
        <div class="problem-numerals">
            <span class="operand"><span class="hindu-arabic-numeral">${problem.ha1}</span></span>
            <span class="problem-operator">${problem.operation}</span>
            <span class="operand"><span class="hindu-arabic-numeral">${problem.ha2}</span></span>
        </div>
    `;
}
