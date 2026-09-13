// ===== GAME STATE =====
const gameState = {
    mode: null,
    currentCivilization: null,
    score: 0,
    currentChallenge: 0,
    totalChallenges: 5,
    startTime: null,
    timerInterval: null,
    hintsUsed: 0,
    correctAnswers: 0,
    oraclePieces: [],
    currentProblem: null,
    timeLimit: null
};

// ===== CIVILIZATIONS =====
// Identity, arithmetic base and runtime progress. The name, description and
// number-system label are merged in from the active locale by applyCatalog(),
// so switching language renames every civilization in place. `difficulty` is an
// identifier, not a label: it keys both a CSS class and a translated string.
const civilizations = {
    roman:          { id: 'roman',          difficulty: 'easy',         unlocked: true,  base: 10 },
    egyptian:       { id: 'egyptian',       difficulty: 'intermediate', unlocked: false, base: 10 },
    greek:          { id: 'greek',          difficulty: 'intermediate', unlocked: false, base: 10 },
    babylonian:     { id: 'babylonian',     difficulty: 'advanced',     unlocked: false, base: 60 },
    chinese:        { id: 'chinese',        difficulty: 'advanced',     unlocked: false, base: 10 },
    mayan:          { id: 'mayan',          difficulty: 'expert',       unlocked: false, base: 20 },
    'hindu-arabic': { id: 'hindu-arabic',   difficulty: 'expert',       unlocked: false, base: 10 }
};

// ===== STORY CONTENT =====
// Filled from the active locale. Declared here because the briefing, the story
// screen and the tests all read it as a global.
let stories = {};

// ===== UTILITY =====
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
