// ===== ROMAN NUMERAL SYSTEM =====

const ROMAN_VALUES = [
    { value: 1000, numeral: 'M'  },
    { value: 900,  numeral: 'CM' },
    { value: 500,  numeral: 'D'  },
    { value: 400,  numeral: 'CD' },
    { value: 100,  numeral: 'C'  },
    { value: 90,   numeral: 'XC' },
    { value: 50,   numeral: 'L'  },
    { value: 40,   numeral: 'XL' },
    { value: 10,   numeral: 'X'  },
    { value: 9,    numeral: 'IX' },
    { value: 5,    numeral: 'V'  },
    { value: 4,    numeral: 'IV' },
    { value: 1,    numeral: 'I'  }
];

const ROMAN_CHAR_VALUES = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function numberToRoman(num) {
    if (!Number.isInteger(num) || num <= 0 || num > 3999) return 'Invalid';
    let result = '';
    let remaining = num;
    for (const { value, numeral } of ROMAN_VALUES) {
        while (remaining >= value) {
            result += numeral;
            remaining -= value;
        }
    }
    return result;
}

function romanToNumber(roman) {
    if (!roman || typeof roman !== 'string') return 0;
    const upper = roman.toUpperCase();
    let result = 0;
    let prevValue = 0;
    for (let i = upper.length - 1; i >= 0; i--) {
        const curr = ROMAN_CHAR_VALUES[upper[i]] || 0;
        result += curr < prevValue ? -curr : curr;
        prevValue = curr;
    }
    return result;
}

function generateRomanProblem(difficulty) {
    let num1, num2;

    switch (difficulty) {
        case 1:  num1 = rand(1, 20);   num2 = rand(1, 20);   break;
        case 2:  num1 = rand(10, 59);  num2 = rand(5, 34);   break;
        case 3:  num1 = rand(20, 119); num2 = rand(10, 59);  break;
        case 4:  num1 = rand(50, 249); num2 = rand(20, 119); break;
        case 5:  num1 = rand(100, 599);num2 = rand(50, 249); break;
        default: num1 = rand(1, 50);   num2 = rand(1, 30);
    }

    let operation = Math.random() > 0.5 ? '+' : '-';
    if (operation === '-' && num1 < num2) [num1, num2] = [num2, num1];
    if (operation === '-' && num1 === num2) num1 += 1;

    const answer = operation === '+' ? num1 + num2 : num1 - num2;
    const roman1 = numberToRoman(num1);
    const roman2 = numberToRoman(num2);

    const contexts = [
        `Marcus needs to calculate the total cost of ${num1} yards of silk and ${num2} yards of linen.`,
        `A customer wants to buy ${num1} amphorae of wine, but returns ${num2} amphorae. How many does Marcus sell?`,
        `The stall has ${num1} loaves of bread. Marcus ${operation === '+' ? 'receives' : 'sells'} ${num2} more. How many remain?`,
        `Calculate the ${operation === '+' ? 'sum' : 'difference'} of these transactions: ${num1} denarii and ${num2} denarii.`,
        `Marcus counts ${num1} customers in the morning and ${num2} in the afternoon. Total customers?`
    ];

    return {
        num1, num2, operation, answer,
        roman1, roman2,
        romanAnswer: numberToRoman(answer),
        context: contexts[rand(0, contexts.length - 1)],
        hint: `Break down the numerals: ${roman1} = ${num1}, ${roman2} = ${num2}. Then calculate: ${num1} ${operation} ${num2} = ${answer}`
    };
}

// ----- Display (browser only) -----

function displayRomanChallenge() {
    const problem = gameState.currentProblem;

    document.getElementById('scene-description').innerHTML = `
        <strong>Challenge ${gameState.currentChallenge} of ${gameState.totalChallenges}</strong>
        <p>${problem.context}</p>
    `;

    document.getElementById('number-system-info').innerHTML = `
        <h4>Roman Numerals Quick Reference</h4>
        <p><strong>I</strong> = 1, <strong>V</strong> = 5, <strong>X</strong> = 10, <strong>L</strong> = 50,
        <strong>C</strong> = 100, <strong>D</strong> = 500, <strong>M</strong> = 1000</p>
        <p style="font-size: 0.9rem; margin-top: 8px;">💡 Tip: When a smaller numeral comes before a larger one, subtract it (e.g., IV = 4, IX = 9)</p>
    `;

    document.getElementById('problem').innerHTML = `
        ${problem.roman1} ${problem.operation} ${problem.roman2} = <span style="color: #CD853F;">?</span>
    `;
}
