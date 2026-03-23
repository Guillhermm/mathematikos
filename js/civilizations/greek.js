// ===== GREEK ALPHABETIC NUMERAL SYSTEM =====
// Max representable value: 999

const GREEK_NUMERALS = {
    // Units
    1: 'α', 2: 'β', 3: 'γ', 4: 'δ', 5: 'ε',
    6: 'ϛ', 7: 'ζ', 8: 'η', 9: 'θ',
    // Tens
    10: 'ι', 20: 'κ', 30: 'λ', 40: 'μ', 50: 'ν',
    60: 'ξ', 70: 'ο', 80: 'π', 90: 'ϙ',
    // Hundreds
    100: 'ρ', 200: 'σ', 300: 'τ', 400: 'υ', 500: 'φ',
    600: 'χ', 700: 'ψ', 800: 'ω', 900: 'ϡ'
};

// Reverse lookup: letter → numeric value
const GREEK_VALUES = Object.fromEntries(
    Object.entries(GREEK_NUMERALS).map(([num, letter]) => [letter, parseInt(num)])
);

function numberToGreek(num) {
    if (!Number.isInteger(num) || num <= 0 || num > 999) return 'Invalid';
    let result = '';
    const hundreds = Math.floor(num / 100) * 100;
    const tens     = Math.floor((num % 100) / 10) * 10;
    const units    = num % 10;
    if (hundreds) result += GREEK_NUMERALS[hundreds];
    if (tens)     result += GREEK_NUMERALS[tens];
    if (units)    result += GREEK_NUMERALS[units];
    return result;
}

function greekToNumber(greek) {
    let total = 0;
    for (const char of greek) {
        total += GREEK_VALUES[char] || 0;
    }
    return total;
}

function generateGreekProblem(difficulty) {
    let num1, num2;

    switch (difficulty) {
        case 1:  num1 = rand(5, 24);   num2 = rand(5, 24);   break;
        case 2:  num1 = rand(20, 69);  num2 = rand(10, 49);  break;
        case 3:  num1 = rand(50, 149); num2 = rand(20, 99);  break;
        case 4:  num1 = rand(100, 399);num2 = rand(50, 249); break;
        case 5:  num1 = rand(200, 799);num2 = rand(100, 499);break;
        default: num1 = rand(10, 59);  num2 = rand(10, 39);
    }

    let operation = Math.random() > 0.5 ? '+' : '-';

    // Greek system tops out at 999 — force subtraction if addition would overflow.
    if (operation === '+' && num1 + num2 > 999) {
        operation = '-';
    }

    if (operation === '-' && num1 < num2) [num1, num2] = [num2, num1];
    // Avoid answer of zero (not representable in Greek numerals).
    if (operation === '-' && num1 === num2) num1 = Math.min(num1 + 1, 999);

    const answer = operation === '+' ? num1 + num2 : num1 - num2;
    const greek1 = numberToGreek(num1);
    const greek2 = numberToGreek(num2);

    const contexts = [
        `The architect needs to calculate the golden ratio for ${num1} columns ${operation === '+' ? 'plus' : 'minus'} ${num2} columns for the Parthenon.`,
        `Pythagoras asks you to solve: if one side measures ${num1} units, ${operation === '+' ? 'and we add' : 'and we subtract'} ${num2} units, what is the result?`,
        `Calculate the proportion: ${num1} marble blocks ${operation === '+' ? 'combined with' : 'reduced by'} ${num2} blocks for the temple construction.`,
        `The philosopher's scroll shows: ${num1} students ${operation === '+' ? 'join' : 'leave'} the academy. ${operation === '+' ? 'And' : 'Leaving'} ${num2} ${operation === '+' ? 'more arrive' : 'remaining'}. Calculate the ${operation === '+' ? 'total' : 'difference'}.`,
        `Mathematical harmony: balance the equation of ${num1} lyres ${operation === '+' ? 'and' : 'minus'} ${num2} flutes in the amphitheater.`
    ];

    return {
        num1, num2, operation, answer,
        greek1, greek2,
        greekAnswer: numberToGreek(answer),
        context: contexts[rand(0, contexts.length - 1)],
        hint: `Decode the letters: ${greek1} = ${num1}, ${greek2} = ${num2}. Then: ${num1} ${operation} ${num2} = ${answer}. Remember: each Greek letter represents a specific number!`
    };
}

// ----- Display (browser only) -----

function displayGreekChallenge() {
    const problem = gameState.currentProblem;

    document.getElementById('scene-description').innerHTML = `
        <strong>Challenge ${gameState.currentChallenge} of ${gameState.totalChallenges}</strong>
        <p>${problem.context}</p>
    `;

    document.getElementById('number-system-info').innerHTML = `
        <h4>Greek Alphabetic Numerals</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 10px; font-size: 0.9rem;">
            <div><strong>α</strong>=1 <strong>β</strong>=2 <strong>γ</strong>=3</div>
            <div><strong>δ</strong>=4 <strong>ε</strong>=5 <strong>ϛ</strong>=6</div>
            <div><span class="greek-char">ζ</span>=7 <span class="greek-char">η</span>=8 <span class="greek-char">θ</span>=9</div>
            <div><span class="greek-char">ι</span>=10 <span class="greek-char">κ</span>=20 <span class="greek-char">λ</span>=30</div>
            <div><span class="greek-char">μ</span>=40 <span class="greek-char">ν</span>=50 <span class="greek-char">ξ</span>=60</div>
            <div><span class="greek-char">ο</span>=70 <span class="greek-char">π</span>=80 <span class="numeral-svg ref-svg-inline">${NUMERAL_SVGS.greek['ϙ']}</span>=90</div>
            <div><span class="greek-char">ρ</span>=100 <span class="greek-char">σ</span>=200 <span class="greek-char">τ</span>=300</div>
            <div><span class="greek-char">υ</span>=400 <span class="greek-char">φ</span>=500 <span class="greek-char">χ</span>=600</div>
            <div><span class="greek-char">ψ</span>=700 <span class="greek-char">ω</span>=800 <span class="numeral-svg ref-svg-inline">${NUMERAL_SVGS.greek['ϡ']}</span>=900</div>
        </div>
        <p style="font-size: 0.9rem; margin-top: 8px;">💡 Tip: Letters are combined to form numbers. ρκγ = 100 + 20 + 3 = 123</p>
    `;

    document.getElementById('problem').innerHTML = `
        <div class="problem-numerals greek-problem" style="font-size: 2.2rem; line-height: 1.5;">
            ${greekToSVGHtml(problem.greek1)} ${problem.operation} ${greekToSVGHtml(problem.greek2)} = <span style="color: #CD853F;">?</span>
        </div>
    `;
}
