// ===== EGYPTIAN HIEROGLYPHIC NUMERAL SYSTEM =====

const EGYPTIAN_SYMBOLS = {
    1000000: '𓁏',  // Astonished man
    100000:  '𓆏',  // Tadpole
    10000:   '𓂭',  // Finger
    1000:    '𓆼',  // Lotus flower
    100:     '𓍢',  // Coil of rope
    10:      '𓎆',  // Heel bone
    1:       '𓏺'   // Staff / stroke
};

const EGYPTIAN_POWERS = [1000000, 100000, 10000, 1000, 100, 10, 1];

function numberToEgyptian(num) {
    if (!Number.isInteger(num) || num <= 0 || num > 999999) return 'Invalid';
    let result = '';
    let remaining = num;
    for (const power of EGYPTIAN_POWERS) {
        const count = Math.floor(remaining / power);
        if (count > 0) {
            result += EGYPTIAN_SYMBOLS[power].repeat(count);
            remaining %= power;
        }
    }
    return result;
}

function egyptianToNumber(egyptian) {
    let total = 0;
    for (const [value, symbol] of Object.entries(EGYPTIAN_SYMBOLS)) {
        const count = (egyptian.match(new RegExp(symbol, 'g')) || []).length;
        total += parseInt(value) * count;
    }
    return total;
}

function generateEgyptianProblem(difficulty) {
    let num1, num2;

    switch (difficulty) {
        case 1:  num1 = rand(5, 19);   num2 = rand(5, 19);   break;
        case 2:  num1 = rand(10, 49);  num2 = rand(10, 39);  break;
        case 3:  num1 = rand(30, 129); num2 = rand(20, 79);  break;
        case 4:  num1 = rand(100, 399);num2 = rand(50, 199); break;
        case 5:  num1 = rand(200, 1199);num2 = rand(100, 599);break;
        default: num1 = rand(10, 59);  num2 = rand(10, 39);
    }

    let operation = Math.random() > 0.5 ? '+' : '-';
    if (operation === '-' && num1 < num2) [num1, num2] = [num2, num1];
    if (operation === '-' && num1 === num2) num1 += 1;

    const answer = operation === '+' ? num1 + num2 : num1 - num2;
    const egyptian1 = numberToEgyptian(num1);
    const egyptian2 = numberToEgyptian(num2);

    const context = tPick(
        `challenge.egyptian.contexts.${operation === '+' ? 'plus' : 'minus'}`,
        { num1, num2 }
    );

    return {
        num1, num2, operation, answer,
        egyptian1, egyptian2,
        egyptianAnswer: numberToEgyptian(answer),
        context,
        hint: t('challenge.egyptian.hint', { sym1: egyptian1, sym2: egyptian2, num1, num2, operation, answer })
    };
}

// ----- Display (browser only) -----

function displayEgyptianChallenge() {
    const problem = gameState.currentProblem;

    renderSceneDescription(problem.context);

    document.getElementById('number-system-info').innerHTML = `
        <h4>${t('guide.egyptian.title')}</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin-top: 10px; align-items: center;">
            <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.egyptian[1]}</span> = 1</div>
            <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.egyptian[10]}</span> = 10</div>
            <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.egyptian[100]}</span> = 100</div>
            <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.egyptian[1000]}</span> = 1,000</div>
            <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.egyptian[10000]}</span> = 10,000</div>
            <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.egyptian[100000]}</span> = 100,000</div>
        </div>
        <p style="font-size: 0.9rem; margin-top: 8px;">${icon('lamp')} ${t('guide.egyptian.tip')}</p>
    `;

    document.getElementById('problem').innerHTML = `
        <div class="problem-numerals">
            <span class="operand">${egyptianToSVGHtml(problem.egyptian1)}</span>
            <span class="problem-operator">${problem.operation}</span>
            <span class="operand">${egyptianToSVGHtml(problem.egyptian2)}</span>
        </div>
    `;
}
