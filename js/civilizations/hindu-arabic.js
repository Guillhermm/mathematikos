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

    const contexts = [
        `Al-Khwarizmi records two measurements from the observatory: ${num1} and ${num2}. What is their ${operation === '+' ? 'sum' : 'difference'}?`,
        `A merchant in the Baghdad bazaar has ${num1} dirhams and ${operation === '+' ? 'receives' : 'spends'} ${num2} more. How many remain?`,
        `The House of Wisdom catalogues ${num1} Greek manuscripts and ${num2} Persian scrolls. ${operation === '+' ? 'How many in total?' : 'How many more Greek manuscripts are there?'}`,
        `An astronomer calculates ${num1} degrees for one arc and ${num2} for another. What is the ${operation === '+' ? 'total arc' : 'difference'}?`,
        `A translator completes ${num1} pages in the morning and ${num2} in the evening. What is the ${operation === '+' ? 'daily total' : 'difference'}?`
    ];

    return {
        num1, num2, operation, answer,
        ha1, ha2,
        hinduArabicAnswer: numberToHinduArabic(answer),
        context: contexts[rand(0, contexts.length - 1)],
        hint: `These are Eastern Arabic-Indic numerals: ${ha1} = ${num1}, ${ha2} = ${num2}. Calculate: ${num1} ${operation} ${num2} = ${answer} → ${numberToHinduArabic(answer)}`
    };
}

function displayHinduArabicChallenge() {
    const problem = gameState.currentProblem;

    document.getElementById('scene-description').innerHTML = `
        <strong>Challenge ${gameState.currentChallenge} of ${gameState.totalChallenges}</strong>
        <p>${problem.context}</p>
    `;

    document.getElementById('number-system-info').innerHTML = `
        <h4>Hindu-Arabic Numerals Quick Reference</h4>
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
        <p style="margin-top:8px; font-size:0.9rem;">💡 This positional system — with a true zero — is the ancestor of the numbers we use today.</p>
    `;

    document.getElementById('problem').innerHTML = `
        <span class="hindu-arabic-numeral">${problem.ha1}</span>
        ${problem.operation}
        <span class="hindu-arabic-numeral">${problem.ha2}</span>
        = <span style="color:var(--accent-color);">?</span>
    `;
}
