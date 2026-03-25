// ===== CROSS-CIVILIZATION CONVERSION CHALLENGES =====
// Available in Practice mode when multiple civilizations are unlocked.
// Shows a number in Civilization A's notation; player answers using Civilization B's symbol pad.

// Converters: civId → numberToX function
const CROSS_CIV_CONVERTERS = {
    roman:          n => numberToRoman(n),
    egyptian:       n => numberToEgyptian(n),
    greek:          n => numberToGreek(n),
    babylonian:     n => numberToBabylonian(n),
    chinese:        n => numberToChinese(n),
    mayan:          n => numberToMayan(n),
    'hindu-arabic': n => numberToHinduArabic(n)
};

// Display renderers for the source numeral in the problem display area
const CROSS_CIV_DISPLAY_HTML = {
    roman:          str => str,
    egyptian:       str => egyptianToSVGHtml(str),
    greek:          str => greekToSVGHtml(str),
    babylonian:     str => babylonianToSVGHtml(str),
    chinese:        str => chineseToHtml(str),
    mayan:          str => mayanToSVGHtml(str),
    'hindu-arabic': str => hinduArabicToHtml(str)
};

// Reverse-converters: check if a player's input matches the expected target value
const CROSS_CIV_PARSERS = {
    roman:          str => romanToNumber(str.toUpperCase()),
    egyptian:       str => egyptianToNumber(str),
    greek:          str => greekToNumber(str),
    babylonian:     str => { try { return babylonianToNumber(str); } catch { return NaN; } },
    chinese:        str => { try { return chineseToNumber(str); } catch { return NaN; } },
    mayan:          str => mayanToNumber(str),
    'hindu-arabic': str => hinduArabicToNumber(str)
};

// Answer key getters (the string form of the answer in the target system)
const CROSS_CIV_ANSWER_KEY = {
    roman:          problem => problem.romanAnswer,
    egyptian:       problem => problem.egyptianAnswer,
    greek:          problem => problem.greekAnswer,
    babylonian:     problem => problem.babylonianAnswer,
    chinese:        problem => problem.chineseAnswer,
    mayan:          problem => problem.mayanAnswer,
    'hindu-arabic': problem => problem.hinduArabicAnswer
};

function getUnlockedCivIds() {
    return Object.keys(civilizations).filter(id => civilizations[id].unlocked);
}

function generateCrossCivProblem() {
    const unlocked = getUnlockedCivIds();
    if (unlocked.length < 2) return null;

    // Pick two distinct civilizations
    const shuffled = [...unlocked].sort(() => Math.random() - 0.5);
    const sourceCivId = shuffled[0];
    const targetCivId = shuffled[1];

    // Generate a number valid in both systems
    // Use a safe range that works for all civs: 1–99
    const value = rand(1, 99);

    const sourceConverter = CROSS_CIV_CONVERTERS[sourceCivId];
    const targetConverter = CROSS_CIV_CONVERTERS[targetCivId];
    if (!sourceConverter || !targetConverter) return null;

    const sourceStr = sourceConverter(value);
    const targetStr = targetConverter(value);

    if (sourceStr === 'Invalid' || targetStr === 'Invalid') return null;

    const sourceCivName = civilizations[sourceCivId].name;
    const targetCivName = civilizations[targetCivId].name;

    return {
        type:        'cross-civ',
        sourceCivId,
        targetCivId,
        value,
        sourceStr,
        targetStr,
        answer:      value,
        // Normalized answer key used by submitAnswer in each target system
        romanAnswer:          targetCivId === 'roman'          ? targetStr : null,
        egyptianAnswer:       targetCivId === 'egyptian'       ? targetStr : null,
        greekAnswer:          targetCivId === 'greek'          ? targetStr : null,
        babylonianAnswer:     targetCivId === 'babylonian'     ? targetStr : null,
        chineseAnswer:        targetCivId === 'chinese'        ? targetStr : null,
        mayanAnswer:          targetCivId === 'mayan'          ? targetStr : null,
        hinduArabicAnswer:    targetCivId === 'hindu-arabic'   ? targetStr : null,
        context: `Convert this ${sourceCivName} numeral into the ${targetCivName} system.`,
        hint: `The value is ${value}. In ${targetCivName}: ${targetStr}`
    };
}

function displayCrossCivChallenge() {
    const problem      = gameState.currentProblem;
    const sourceCivId  = problem.sourceCivId;
    const targetCivId  = problem.targetCivId;
    const sourceCivName = civilizations[sourceCivId].name;
    const targetCivName = civilizations[targetCivId].name;

    const displayFn = CROSS_CIV_DISPLAY_HTML[sourceCivId];
    const sourceHtml = displayFn ? displayFn(problem.sourceStr) : problem.sourceStr;

    document.getElementById('scene-description').innerHTML = `
        <strong>Cross-Era Conversion Challenge</strong>
        <p>${problem.context}</p>
    `;

    document.getElementById('number-system-info').innerHTML = `
        <h4>From ${sourceCivName} → To ${targetCivName}</h4>
        <p>Use the <strong>${targetCivName}</strong> symbol pad below to write your answer.</p>
    `;

    document.getElementById('problem').innerHTML = `
        <div class="problem-numerals">
            <div style="font-size:0.9rem; color:var(--accent-color); margin-bottom:6px;">${sourceCivName}:</div>
            <div>${sourceHtml}</div>
            <div style="font-size:0.9rem; margin-top:10px;">= <span style="color:var(--accent-color);">? in ${targetCivName}</span></div>
        </div>
    `;

    // Override the answer input placeholder
    const answerInput = document.getElementById('answer-input');
    if (answerInput) {
        answerInput.placeholder = `Build the ${targetCivName} numeral using the symbol pad above`;
    }
}

function isCrossCivCorrect(input, problem) {
    const targetCivId  = problem.targetCivId;
    const expectedStr  = problem.targetStr;
    const expectedVal  = problem.value;

    if (input === expectedStr) return true;

    // Accept numeric value typed in the text field
    if (Number.isInteger(+input) && +input === expectedVal) return true;

    // Accept parsed form
    const parser = CROSS_CIV_PARSERS[targetCivId];
    if (parser) {
        try {
            return parser(input) === expectedVal;
        } catch { /* ignore */ }
    }

    return false;
}
