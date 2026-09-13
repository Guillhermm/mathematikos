// ===== BABYLONIAN SEXAGESIMAL NUMERAL SYSTEM (Base 60) =====
// Represents numbers using positional notation where each position is 60× the previous.
// Practical range: 1–3599 (two positional digits).

const BABYLONIAN_SYMBOLS = {
    10: '𒌋', // Horizontal wedge
    1:  '𒐕'  // Vertical wedge
};

const BABYLONIAN_ZERO = '⊙'; // Empty position marker

function convertBabylonianDigit(n) {
    if (n === 0) return BABYLONIAN_ZERO;
    const tens = Math.floor(n / 10);
    const ones = n % 10;
    return BABYLONIAN_SYMBOLS[10].repeat(tens) + BABYLONIAN_SYMBOLS[1].repeat(ones);
}

function numberToBabylonian(num) {
    if (!Number.isInteger(num) || num <= 0 || num >= 3600) return 'Invalid';
    const sixties = Math.floor(num / 60);
    const ones    = num % 60;
    if (sixties > 0) {
        return `${convertBabylonianDigit(sixties)} ${convertBabylonianDigit(ones)}`;
    }
    return convertBabylonianDigit(ones);
}

function parseBabylonianDigit(digit) {
    if (digit === BABYLONIAN_ZERO) return 0;
    const tens = (digit.match(new RegExp(BABYLONIAN_SYMBOLS[10], 'g')) || []).length;
    const ones = (digit.match(new RegExp(BABYLONIAN_SYMBOLS[1],  'g')) || []).length;
    return tens * 10 + ones;
}

function babylonianToNumber(babylonian) {
    const positions = babylonian.trim().split(/\s+/);
    let total = 0;
    for (let i = 0; i < positions.length; i++) {
        const place = positions.length - 1 - i;
        total += parseBabylonianDigit(positions[i]) * Math.pow(60, place);
    }
    return total;
}

function generateBabylonianProblem(difficulty) {
    let num1, num2;

    switch (difficulty) {
        case 1:  num1 = rand(10, 39);  num2 = rand(5, 24);   break;
        case 2:  num1 = rand(20, 69);  num2 = rand(10, 39);  break;
        case 3:  num1 = rand(40, 139); num2 = rand(20, 79);  break;
        case 4:  num1 = rand(60, 239); num2 = rand(30, 129); break;
        case 5:  num1 = rand(100, 399);num2 = rand(60, 259); break;
        default: num1 = rand(10, 59);  num2 = rand(10, 39);
    }

    let operation = Math.random() > 0.5 ? '+' : '-';

    // Keep the answer within the representable range (1–3599).
    if (operation === '+' && num1 + num2 >= 3600) operation = '-';

    if (operation === '-' && num1 < num2) [num1, num2] = [num2, num1];
    if (operation === '-' && num1 === num2) num1 += 1;

    const answer = operation === '+' ? num1 + num2 : num1 - num2;
    const babylonian1 = numberToBabylonian(num1);
    const babylonian2 = numberToBabylonian(num2);

    const context = tPick(
        `challenge.babylonian.contexts.${operation === '+' ? 'plus' : 'minus'}`,
        { num1, num2 }
    );

    return {
        num1, num2, operation, answer,
        babylonian1, babylonian2,
        babylonianAnswer: numberToBabylonian(answer),
        context,
        hint: t('challenge.babylonian.hint', { sym1: babylonian1, sym2: babylonian2, num1, num2, operation, answer })
    };
}

// ----- Display (browser only) -----

function displayBabylonianChallenge() {
    const problem = gameState.currentProblem;

    renderSceneDescription(problem.context);

    document.getElementById('number-system-info').innerHTML = `
        <h4>${t('guide.babylonian.title')}</h4>
        <div class="guide-panel" style="margin-top: 10px;">
            <p><strong>${t('guide.babylonian.symbols')}</strong></p>
            <div style="margin: 12px 0; display: flex; flex-direction: column; gap: 8px;">
                <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.babylonian[1]}</span> = ${t('guide.babylonian.wedgeOne')}</div>
                <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.babylonian[10]}</span> = ${t('guide.babylonian.wedgeTen')}</div>
                <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.babylonian[0]}</span> = ${t('guide.babylonian.wedgeZero')}</div>
            </div>
            <p style="margin-top: 10px;"><strong>${t('guide.babylonian.howItWorks')}</strong> ${t('guide.babylonian.howItWorksText')}</p>
            <p style="font-size: 0.9rem; margin-top: 8px;">${t('guide.babylonian.example')} <span class="numeral-svg ref-svg-inline">${NUMERAL_SVGS.babylonian[1]}</span> <span class="numeral-svg ref-svg-inline">${NUMERAL_SVGS.babylonian[10]}</span><span class="numeral-svg ref-svg-inline">${NUMERAL_SVGS.babylonian[10]}</span> = (1 × 60) + 20 = 80</p>
        </div>
        <p style="font-size: 0.9rem; margin-top: 8px;">${icon('lamp')} ${t('guide.babylonian.tip')}</p>
    `;

    document.getElementById('problem').innerHTML = `
        <div class="problem-numerals">
            <span class="operand">${babylonianToSVGHtml(problem.babylonian1)}</span>
            <span class="problem-operator">${problem.operation}</span>
            <span class="operand">${babylonianToSVGHtml(problem.babylonian2)}</span>
        </div>
    `;
}
