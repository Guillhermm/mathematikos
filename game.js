// ===== GAME STATE =====
const gameState = {
    mode: null, // 'thematic' or 'temporal'
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
    timeLimit: null // For temporal mode
};

// ===== CIVILIZATIONS DATA =====
const civilizations = {
    roman: {
        id: 'roman',
        name: 'Roman Empire',
        icon: '🏛️',
        difficulty: 'Easy',
        unlocked: true,
        description: 'Help merchants in the Roman Forum calculate prices using Roman numerals.',
        numberSystem: 'Roman Numerals (I, V, X, L, C, D, M)',
        base: 10
    },
    egyptian: {
        id: 'egyptian',
        name: 'Ancient Egypt',
        icon: '🔺',
        difficulty: 'Intermediate',
        unlocked: false,
        description: 'Decipher hieroglyphic numbers in the pyramids.',
        numberSystem: 'Egyptian Hieroglyphic Numerals',
        base: 10
    },
    greek: {
        id: 'greek',
        name: 'Ancient Greece',
        icon: '⚱️',
        difficulty: 'Intermediate',
        unlocked: false,
        description: 'Calculate proportions for building temples.',
        numberSystem: 'Greek Alphabetic Numerals',
        base: 10
    },
    babylonian: {
        id: 'babylonian',
        name: 'Babylon',
        icon: '🌴',
        difficulty: 'Advanced',
        unlocked: false,
        description: 'Use the sexagesimal system to restore the Hanging Gardens.',
        numberSystem: 'Babylonian Base-60 System',
        base: 60
    },
    chinese: {
        id: 'chinese',
        name: 'Han Dynasty',
        icon: '🏯',
        difficulty: 'Advanced',
        unlocked: false,
        description: 'Calculate with counting rods in the imperial market.',
        numberSystem: 'Chinese Counting Rods',
        base: 10
    }
};

// ===== STORY CONTENT =====
const stories = {
    thematic: {
        intro: `<h3>🌟 The Oracle of Numbers</h3>
        <p>You are a young mathematician who has discovered a secret time machine hidden in an ancient temple. Upon activation, you are transported through time to different civilizations.</p>
        <p>Your mission: Help people solve mathematical challenges using their unique number systems while collecting fragments of the mysterious <strong>Oracle of Numbers</strong> - an artifact broken and scattered through time.</p>
        <p>Each civilization holds a piece of the Oracle. Only by completing all challenges can you unlock the ancient wisdom that reveals the true nature of numbers.</p>`,
        
        roman: {
            title: '🏛️ Romans - Helping in the Roman Forum',
            setting: 'You arrive at the bustling Roman Forum, surrounded by marble columns, statues of emperors, and market stalls filled with goods. A merchant calls out to you for help.',
            objective: 'Assist Marcus, a cloth merchant, in calculating prices and performing transactions using Roman numerals.',
            character: '<strong>Marcus the Merchant:</strong> "Welcome, traveler! The Forum is busy today, and I need help with my calculations. Can you assist me with these transactions?"'
        }
    },
    
    temporal: {
        intro: `<h3>⚡ Guardian of Numbers</h3>
        <p>You are a Guardian of Numbers, and you've discovered a terrible truth: a secret organization called "The Children of Time" is attempting to erase the knowledge of ancient number systems from history.</p>
        <p>Your mission: Race against time to save the mathematical knowledge of ancient civilizations by solving numerical operations before the records are destroyed forever.</p>
        <p>Time is running out. Every second counts!</p>`,
        
        roman: {
            title: '🔥 Romans - Emergency at the Forum',
            setting: 'The Roman Forum is engulfed in flames! Citizens are fleeing in panic. You must help organize the evacuation by quickly calculating necessary supplies.',
            objective: 'Solve addition and subtraction problems to save valuable records and supplies before they are lost to the fire.',
            character: '<strong>Time Remaining:</strong> You have 3 minutes to complete all challenges!'
        }
    }
};

// ===== ROMAN NUMERAL CONVERSION =====
function numberToRoman(num) {
    if (num <= 0 || num > 3999) return "Invalid";
    
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    
    let result = '';
    let remaining = num;
    
    for (let i = 0; i < romanNumerals.length; i++) {
        while (remaining >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            remaining -= romanNumerals[i].value;
        }
    }
    
    return result;
}

function romanToNumber(roman) {
    const romanValues = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let result = 0;
    let prevValue = 0;
    
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanValues[roman[i]];
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
        prevValue = currentValue;
    }
    
    return result;
}

// ===== PROBLEM GENERATION =====
function generateRomanProblem(difficulty) {
    let num1, num2, operation, answer;
    
    switch(difficulty) {
        case 1:
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * 20) + 1;
            break;
        case 2:
            num1 = Math.floor(Math.random() * 50) + 10;
            num2 = Math.floor(Math.random() * 30) + 5;
            break;
        case 3:
            num1 = Math.floor(Math.random() * 100) + 20;
            num2 = Math.floor(Math.random() * 50) + 10;
            break;
        case 4:
            num1 = Math.floor(Math.random() * 200) + 50;
            num2 = Math.floor(Math.random() * 100) + 20;
            break;
        case 5:
            num1 = Math.floor(Math.random() * 500) + 100;
            num2 = Math.floor(Math.random() * 200) + 50;
            break;
        default:
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 30) + 1;
    }
    
    // Randomly choose addition or subtraction
    operation = Math.random() > 0.5 ? '+' : '-';
    
    // For subtraction, ensure num1 > num2
    if (operation === '-' && num1 < num2) {
        [num1, num2] = [num2, num1];
    }
    
    answer = operation === '+' ? num1 + num2 : num1 - num2;
    
    const roman1 = numberToRoman(num1);
    const roman2 = numberToRoman(num2);
    const romanAnswer = numberToRoman(answer);
    
    // Generate context story
    const contexts = [
        `Marcus needs to calculate the total cost of ${num1} yards of silk and ${num2} yards of linen.`,
        `A customer wants to buy ${num1} amphorae of wine, but returns ${num2} amphorae. How many does Marcus sell?`,
        `The stall has ${num1} loaves of bread. Marcus ${operation === '+' ? 'receives' : 'sells'} ${num2} more. How many remain?`,
        `Calculate the ${operation === '+' ? 'sum' : 'difference'} of these transactions: ${num1} denarii and ${num2} denarii.`,
        `Marcus counts ${num1} customers in the morning and ${num2} in the afternoon. Total customers?`
    ];
    
    const contextIndex = operation === '-' ? 1 : Math.floor(Math.random() * contexts.length);
    
    return {
        num1,
        num2,
        operation,
        answer,
        roman1,
        roman2,
        romanAnswer,
        context: contexts[contextIndex] || contexts[0],
        hint: `Break down the numerals: ${roman1} = ${num1}, ${roman2} = ${num2}. Then calculate: ${num1} ${operation} ${num2} = ${answer}`
    };
}

// ===== SCREEN MANAGEMENT =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ===== GAME START =====
function startGame(mode) {
    gameState.mode = mode;
    gameState.score = 0;
    gameState.oraclePieces = [];
    
    // Show civilization selection
    renderCivilizationSelect();
    showScreen('civilization-select');
}

function renderCivilizationSelect() {
    const container = document.getElementById('civilization-list');
    container.innerHTML = '';
    
    Object.values(civilizations).forEach(civ => {
        const card = document.createElement('div');
        card.className = `civilization-card ${!civ.unlocked ? 'locked' : ''}`;
        
        if (civ.unlocked) {
            card.onclick = () => selectCivilization(civ.id);
        }
        
        card.innerHTML = `
            <div class="icon">${civ.icon}</div>
            <div class="name">${civ.name}</div>
            <div class="difficulty">${civ.difficulty}</div>
            ${!civ.unlocked ? '<p style="margin-top: 10px; font-size: 0.9rem;">🔒 Complete previous civilization first</p>' : ''}
        `;
        
        container.appendChild(card);
    });
}

function selectCivilization(civId) {
    gameState.currentCivilization = civId;
    showStoryIntro();
}

// ===== STORY INTRODUCTION =====
function showStoryIntro() {
    const civ = civilizations[gameState.currentCivilization];
    const mode = gameState.mode;
    const story = stories[mode][gameState.currentCivilization];
    
    const content = document.getElementById('story-content');
    content.innerHTML = `
        ${mode === 'thematic' && gameState.oraclePieces.length === 0 ? stories[mode].intro : ''}
        
        <h3>${story.title}</h3>
        
        <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <strong>📍 Setting:</strong>
            <p>${story.setting}</p>
        </div>
        
        <div style="background: #e8f4f8; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <strong>🎯 Objective:</strong>
            <p>${story.objective}</p>
        </div>
        
        <div style="background: #fff9e6; padding: 15px; border-radius: 8px; margin: 15px 0;">
            ${story.character}
        </div>
        
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <strong>📚 Number System:</strong> ${civ.numberSystem}
        </div>
    `;
    
    showScreen('story-intro');
}

// ===== START CHALLENGE =====
function startChallenge() {
    gameState.currentChallenge = 0;
    gameState.correctAnswers = 0;
    gameState.hintsUsed = 0;
    gameState.startTime = Date.now();
    
    // Set time limit for temporal mode
    if (gameState.mode === 'temporal') {
        gameState.timeLimit = 180; // 3 minutes in seconds
    }
    
    // Start timer
    startTimer();
    
    // Load first challenge
    loadNextChallenge();
    
    showScreen('game-play');
}

// ===== TIMER =====
function startTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    
    if (gameState.mode === 'temporal') {
        const remaining = gameState.timeLimit - elapsed;
        
        if (remaining <= 0) {
            clearInterval(gameState.timerInterval);
            endChallenge(false); // Time's up!
            return;
        }
        
        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        document.getElementById('timer').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Warning color when time is running out
        if (remaining <= 30) {
            document.getElementById('timer').style.color = 'red';
        }
    } else {
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('timer').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

// ===== LOAD CHALLENGE =====
function loadNextChallenge() {
    gameState.currentChallenge++;
    
    if (gameState.currentChallenge > gameState.totalChallenges) {
        endChallenge(true);
        return;
    }
    
    // Update header
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('challenge-number').textContent = 
        `${gameState.currentChallenge}/${gameState.totalChallenges}`;
    
    // Generate problem based on civilization
    if (gameState.currentCivilization === 'roman') {
        gameState.currentProblem = generateRomanProblem(gameState.currentChallenge);
        displayRomanChallenge();
    }
    // Add other civilizations here later
    
    // Clear previous feedback and hint
    document.getElementById('feedback').classList.remove('show');
    document.getElementById('hint-display').classList.remove('show');
    document.getElementById('answer-input').value = '';
    document.getElementById('answer-input').focus();
    
    // Update oracle pieces display
    updateOraclePiecesDisplay();
}

function displayRomanChallenge() {
    const problem = gameState.currentProblem;
    const civ = civilizations[gameState.currentCivilization];
    
    // Scene description
    document.getElementById('scene-description').innerHTML = `
        <strong>Challenge ${gameState.currentChallenge} of ${gameState.totalChallenges}</strong>
        <p>${problem.context}</p>
    `;
    
    // Number system info
    document.getElementById('number-system-info').innerHTML = `
        <h4>Roman Numerals Quick Reference</h4>
        <p><strong>I</strong> = 1, <strong>V</strong> = 5, <strong>X</strong> = 10, <strong>L</strong> = 50, 
        <strong>C</strong> = 100, <strong>D</strong> = 500, <strong>M</strong> = 1000</p>
        <p style="font-size: 0.9rem; margin-top: 8px;">💡 Tip: When a smaller numeral comes before a larger one, subtract it (e.g., IV = 4, IX = 9)</p>
    `;
    
    // Display problem
    document.getElementById('problem').innerHTML = `
        ${problem.roman1} ${problem.operation} ${problem.roman2} = <span style="color: #CD853F;">?</span>
    `;
}

// ===== SUBMIT ANSWER =====
function submitAnswer() {
    const input = document.getElementById('answer-input').value.trim().toUpperCase();
    
    if (!input) {
        showFeedback('Please enter an answer!', 'incorrect');
        return;
    }
    
    const problem = gameState.currentProblem;
    const correctRoman = problem.romanAnswer;
    const correctNumber = problem.answer;
    
    // Accept both Roman numeral and Arabic number
    let isCorrect = false;
    
    if (input === correctRoman) {
        isCorrect = true;
    } else if (!isNaN(input) && parseInt(input) === correctNumber) {
        isCorrect = true;
    } else if (romanToNumber(input) === correctNumber) {
        isCorrect = true;
    }
    
    if (isCorrect) {
        handleCorrectAnswer();
    } else {
        handleIncorrectAnswer();
    }
}

function handleCorrectAnswer() {
    gameState.correctAnswers++;
    
    // Calculate points (bonus for speed and no hints)
    let points = 100;
    if (gameState.hintsUsed === 0) points += 50; // Bonus for no hints
    
    gameState.score += points;
    
    showFeedback(`🎉 Correct! +${points} points`, 'correct');
    
    // Collect oracle piece
    gameState.oraclePieces.push({
        civilization: gameState.currentCivilization,
        challenge: gameState.currentChallenge
    });
    
    // Update display
    document.getElementById('score').textContent = gameState.score;
    
    // Move to next challenge after delay
    setTimeout(() => {
        loadNextChallenge();
    }, 1500);
}

function handleIncorrectAnswer() {
    showFeedback('❌ Incorrect. Try again!', 'incorrect');
    
    // Penalty in temporal mode
    if (gameState.mode === 'temporal') {
        gameState.timeLimit -= 10; // Lose 10 seconds
    }
}

function showFeedback(message, type) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = `feedback ${type} show`;
    
    if (type === 'incorrect') {
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 2000);
    }
}

// ===== HINTS =====
function showHint() {
    const hintDisplay = document.getElementById('hint-display');
    hintDisplay.textContent = gameState.currentProblem.hint;
    hintDisplay.classList.add('show');
    gameState.hintsUsed++;
}

// ===== ORACLE PIECES DISPLAY =====
function updateOraclePiecesDisplay() {
    const container = document.getElementById('pieces-display');
    container.innerHTML = '';
    
    for (let i = 0; i < gameState.totalChallenges; i++) {
        const piece = document.createElement('div');
        piece.className = 'piece';
        
        if (i < gameState.oraclePieces.length) {
            piece.classList.add('collected');
            piece.textContent = '✨';
        } else {
            piece.textContent = '❓';
        }
        
        container.appendChild(piece);
    }
}

// ===== END CHALLENGE =====
function endChallenge(completed) {
    clearInterval(gameState.timerInterval);
    
    const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    const resultsTitle = document.getElementById('results-title');
    const resultsContent = document.getElementById('results-content');
    
    if (completed) {
        resultsTitle.textContent = '🎊 Challenge Complete!';
        
        // Unlock next civilization
        const civs = Object.keys(civilizations);
        const currentIndex = civs.indexOf(gameState.currentCivilization);
        if (currentIndex < civs.length - 1) {
            civilizations[civs[currentIndex + 1]].unlocked = true;
        }
        
        resultsContent.innerHTML = `
            <div class="final-score">${gameState.score}</div>
            <p style="font-size: 1.2rem; margin-bottom: 20px;">Total Score</p>
            
            <div class="stats">
                <div class="stat-item">
                    <strong>${gameState.correctAnswers}</strong>
                    <p>Correct Answers</p>
                </div>
                <div class="stat-item">
                    <strong>${minutes}:${String(seconds).padStart(2, '0')}</strong>
                    <p>Time Taken</p>
                </div>
                <div class="stat-item">
                    <strong>${gameState.oraclePieces.length}</strong>
                    <p>Oracle Pieces</p>
                </div>
                <div class="stat-item">
                    <strong>${gameState.hintsUsed}</strong>
                    <p>Hints Used</p>
                </div>
            </div>
            
            ${gameState.mode === 'thematic' ? `
                <div style="background: #FFF9E6; padding: 20px; border-radius: 10px; margin-top: 20px; border: 2px solid #DAA520;">
                    <h3>✨ Oracle Piece Collected!</h3>
                    <p>You have collected a fragment of the Oracle of Numbers from the ${civilizations[gameState.currentCivilization].name}!</p>
                    <p style="margin-top: 10px;"><em>"The wisdom of numbers transcends time..."</em></p>
                </div>
            ` : ''}
        `;
    } else {
        resultsTitle.textContent = '⏰ Time\'s Up!';
        resultsContent.innerHTML = `
            <p style="font-size: 1.2rem; margin: 20px 0;">The Children of Time have destroyed the records!</p>
            
            <div class="final-score">${gameState.score}</div>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">Score Achieved</p>
            
            <div class="stats">
                <div class="stat-item">
                    <strong>${gameState.correctAnswers}</strong>
                    <p>Challenges Completed</p>
                </div>
                <div class="stat-item">
                    <strong>${gameState.currentChallenge - 1}/${gameState.totalChallenges}</strong>
                    <p>Progress</p>
                </div>
            </div>
            
            <p style="margin-top: 20px;">Don't give up! Try again to save the knowledge of ancient civilizations!</p>
        `;
    }
    
    showScreen('results');
}

// ===== NAVIGATION =====
function nextCivilization() {
    const civs = Object.keys(civilizations);
    const currentIndex = civs.indexOf(gameState.currentCivilization);
    
    if (currentIndex < civs.length - 1 && civilizations[civs[currentIndex + 1]].unlocked) {
        selectCivilization(civs[currentIndex + 1]);
    } else {
        showScreen('civilization-select');
    }
}

// ===== HELP MODAL =====
function closeHelp() {
    document.getElementById('help-modal').classList.remove('show');
}

// ===== KEYBOARD SUPPORT =====
document.addEventListener('DOMContentLoaded', () => {
    const answerInput = document.getElementById('answer-input');
    
    if (answerInput) {
        answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitAnswer();
            }
        });
    }
});

// Initialize game
console.log('🎮 Mathematikos Game Loaded!');
console.log('Travel through time and explore ancient number systems!');
