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

    const contexts = [
        `The royal engineer calculates water distribution: ${num1} measures ${operation === '+' ? 'plus' : 'minus'} ${num2} measures for the irrigation canals.`,
        `Calculate the resources for the Hanging Gardens: ${num1} palm trees ${operation === '+' ? 'combined with' : 'reduced by'} ${num2} cedar trees.`,
        `The astronomer's calculation: ${num1} celestial observations ${operation === '+' ? 'and' : 'minus'} ${num2} star positions. Compute the result.`,
        `Water allocation for agriculture: ${num1} units ${operation === '+' ? 'added to' : 'removed from'} ${num2} units for the fields.`,
        `Temple construction needs: ${num1} clay bricks ${operation === '+' ? 'plus' : 'minus'} ${num2} stone blocks. Calculate the total.`
    ];

    return {
        num1, num2, operation, answer,
        babylonian1, babylonian2,
        babylonianAnswer: numberToBabylonian(answer),
        context: contexts[rand(0, contexts.length - 1)],
        hint: `Base-60 system! Each position is 60× the previous. ${babylonian1} = ${num1}, ${babylonian2} = ${num2}. Calculate: ${num1} ${operation} ${num2} = ${answer}. 𒐕=1, 𒌋=10`
    };
}

// ----- Display (browser only) -----

function displayBabylonianChallenge() {
    const problem = gameState.currentProblem;

    document.getElementById('scene-description').innerHTML = `
        <strong>Challenge ${gameState.currentChallenge} of ${gameState.totalChallenges}</strong>
        <p>${problem.context}</p>
    `;

    document.getElementById('number-system-info').innerHTML = `
        <h4>Babylonian Sexagesimal (Base-60) System</h4>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 10px;">
            <p><strong>Symbols:</strong></p>
            <div style="margin: 12px 0; display: flex; flex-direction: column; gap: 8px;">
                <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.babylonian[1]}</span> = 1 (vertical wedge)</div>
                <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.babylonian[10]}</span> = 10 (horizontal wedge)</div>
                <div class="symbol-ref"><span class="numeral-svg ref-svg">${NUMERAL_SVGS.babylonian[0]}</span> = 0 or empty position</div>
            </div>
            <p style="margin-top: 10px;"><strong>How it works:</strong> Numbers are written in positions. Each position to the left is worth 60× more (like our base-10, but base-60!).</p>
            <p style="font-size: 0.9rem; margin-top: 8px;">Example: <span class="numeral-svg ref-svg-inline">${NUMERAL_SVGS.babylonian[1]}</span> <span class="numeral-svg ref-svg-inline">${NUMERAL_SVGS.babylonian[10]}</span><span class="numeral-svg ref-svg-inline">${NUMERAL_SVGS.babylonian[10]}</span> = (1 × 60) + 20 = 80</p>
        </div>
        <p style="font-size: 0.9rem; margin-top: 8px;">💡 Tip: Count the wedges in each position, then multiply by powers of 60!</p>
    `;

    document.getElementById('problem').innerHTML = `
        <div class="problem-numerals" style="line-height: 2.2;">
            <div>${babylonianToSVGHtml(problem.babylonian1)}</div>
            <div>${problem.operation}</div>
            <div>${babylonianToSVGHtml(problem.babylonian2)}</div>
            <div>= <span style="color: #CD853F;">?</span></div>
        </div>
    `;
}
