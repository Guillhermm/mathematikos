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

    const context = tPick(
        `challenge.roman.contexts.${operation === '+' ? 'plus' : 'minus'}`,
        { num1, num2 }
    );

    return {
        num1, num2, operation, answer,
        roman1, roman2,
        romanAnswer: numberToRoman(answer),
        context,
        hint: t('challenge.roman.hint', { sym1: roman1, sym2: roman2, num1, num2, operation, answer })
    };
}

// ----- Display (browser only) -----

function displayRomanChallenge() {
    const problem = gameState.currentProblem;

    renderSceneDescription(problem.context);

    document.getElementById('number-system-info').innerHTML = `
        <h4>${t('guide.roman.title')}</h4>
        <p><strong>I</strong> = 1, <strong>V</strong> = 5, <strong>X</strong> = 10, <strong>L</strong> = 50,
        <strong>C</strong> = 100, <strong>D</strong> = 500, <strong>M</strong> = 1000</p>
        <p style="font-size: 0.9rem; margin-top: 8px;">${icon('lamp')} ${t('guide.roman.tip')}</p>
    `;

    document.getElementById('problem').innerHTML = `
        <div class="problem-numerals">
            <span class="operand">${problem.roman1}</span>
            <span class="problem-operator">${problem.operation}</span>
            <span class="operand">${problem.roman2}</span>
        </div>
    `;
}
