// ===== CHALLENGE LIFECYCLE =====

function startChallenge() {
    gameState.currentChallenge = 0;
    gameState.correctAnswers   = 0;
    gameState.hintsUsed        = 0;
    gameState.startTime        = Date.now();

    if (gameState.mode === 'temporal') {
        const timeLimits = {
            roman:          180, // 3 min
            egyptian:       150, // 2.5 min
            greek:          150, // 2.5 min
            babylonian:     120, // 2 min
            chinese:        120, // 2 min
            mayan:          120, // 2 min
            'hindu-arabic': 120  // 2 min
        };
        gameState.timeLimit = timeLimits[gameState.currentCivilization] || 180;
        startTimer();
    } else if (gameState.mode === 'thematic') {
        startTimer(); // tracks elapsed time, no hard limit
    } else if (gameState.mode === 'practice' || gameState.mode === 'daily') {
        document.getElementById('timer').textContent = '∞';
    }

    loadNextChallenge();
    showScreen('game-play');
}

function loadNextChallenge() {
    gameState.currentChallenge++;
    gameState._crossCivTarget = null;

    if (gameState.currentChallenge > gameState.totalChallenges) {
        endChallenge(true);
        return;
    }

    document.getElementById('score').textContent = gameState.score;
    document.getElementById('challenge-number').textContent =
        `${gameState.currentChallenge}/${gameState.totalChallenges}`;
    document.getElementById('feedback').classList.remove('show');
    document.getElementById('hint-display').classList.remove('show');
    document.getElementById('answer-input').value = '';
    clearAnswer();

    // In practice mode with 2+ unlocked civs: 20% chance of cross-civ conversion challenge
    if (gameState.mode === 'practice' && getUnlockedCivIds().length >= 2 && Math.random() < 0.2) {
        const crossProblem = generateCrossCivProblem();
        if (crossProblem) {
            gameState.currentProblem  = crossProblem;
            gameState._crossCivTarget = crossProblem.targetCivId;
            displayCrossCivChallenge();
            renderSymbolPad();
            updateOraclePiecesDisplay();
            return;
        }
    }

    const diff = gameState.currentChallenge;
    switch (gameState.currentCivilization) {
        case 'roman':
            gameState.currentProblem = generateRomanProblem(diff);
            displayRomanChallenge();
            break;
        case 'egyptian':
            gameState.currentProblem = generateEgyptianProblem(diff);
            displayEgyptianChallenge();
            break;
        case 'greek':
            gameState.currentProblem = generateGreekProblem(diff);
            displayGreekChallenge();
            break;
        case 'babylonian':
            gameState.currentProblem = generateBabylonianProblem(diff);
            displayBabylonianChallenge();
            break;
        case 'chinese':
            gameState.currentProblem = generateChineseProblem(diff);
            displayChineseChallenge();
            break;
        case 'mayan':
            gameState.currentProblem = generateMayanProblem(diff);
            displayMayanChallenge();
            break;
        case 'hindu-arabic':
            gameState.currentProblem = generateHinduArabicProblem(diff);
            displayHinduArabicChallenge();
            break;
    }

    // Assign reverse challenge (30% chance) in non-temporal modes
    if (gameState.mode !== 'temporal') {
        gameState.currentProblem.isReverse = Math.random() < 0.3;
        if (gameState.currentProblem.isReverse) applyReverseDisplay();
    }

    renderSymbolPad();
    updateOraclePiecesDisplay();
}

function applyReverseDisplay() {
    const problem = gameState.currentProblem;
    const civName = civilizations[gameState.currentCivilization].name;
    document.getElementById('problem').innerHTML = `
        <div class="problem-numerals reverse-problem">
            <div class="reverse-prompt">Write in ${civName} numerals:</div>
            <div class="reverse-number">${problem.answer}</div>
        </div>
    `;
    const answerInput = document.getElementById('answer-input');
    if (answerInput) answerInput.placeholder = 'Build the numeral using the symbol pad above';
}

function submitAnswer() {
    const typedRaw = document.getElementById('answer-input').value.trim();
    const input    = builtAnswer || typedRaw;

    if (!input) {
        showFeedback('Please build an answer or type a number!', 'incorrect');
        return;
    }

    const problem       = gameState.currentProblem;
    const correctNumber = problem.answer;
    let isCorrect       = false;

    // Handle cross-civilization conversion challenge
    if (problem.type === 'cross-civ') {
        isCorrect = isCrossCivCorrect(input, problem);
        if (isCorrect) {
            handleCorrectAnswer();
        } else {
            handleIncorrectAnswer();
        }
        return;
    }

    switch (gameState.currentCivilization) {
        case 'roman': {
            const upper = input.toUpperCase();
            isCorrect = upper === problem.romanAnswer || romanToNumber(upper) === correctNumber;
            if (!problem.isReverse) isCorrect = isCorrect || (Number.isInteger(+input) && +input === correctNumber);
            break;
        }
        case 'egyptian':
            isCorrect = input === problem.egyptianAnswer || egyptianToNumber(input) === correctNumber;
            if (!problem.isReverse) isCorrect = isCorrect || (Number.isInteger(+input) && +input === correctNumber);
            break;
        case 'greek':
            isCorrect = input === problem.greekAnswer || greekToNumber(input) === correctNumber;
            if (!problem.isReverse) isCorrect = isCorrect || (Number.isInteger(+input) && +input === correctNumber);
            break;
        case 'babylonian':
            isCorrect = input === problem.babylonianAnswer;
            if (!problem.isReverse) isCorrect = isCorrect || (Number.isInteger(+input) && +input === correctNumber);
            if (!isCorrect) {
                try { isCorrect = babylonianToNumber(input) === correctNumber; } catch (e) { /* ignore */ }
            }
            break;
        case 'chinese':
            isCorrect = input === problem.chineseAnswer;
            if (!problem.isReverse) isCorrect = isCorrect || (Number.isInteger(+input) && +input === correctNumber);
            if (!isCorrect) {
                try { isCorrect = chineseToNumber(input) === correctNumber; } catch (e) { /* ignore */ }
            }
            break;
        case 'mayan':
            isCorrect = input === problem.mayanAnswer;
            if (!problem.isReverse) isCorrect = isCorrect || (Number.isInteger(+input) && +input === correctNumber);
            if (!isCorrect) {
                try { isCorrect = mayanToNumber(input) === correctNumber; } catch (e) { /* ignore */ }
            }
            break;
        case 'hindu-arabic':
            isCorrect = input === problem.hinduArabicAnswer;
            if (!problem.isReverse) isCorrect = isCorrect || (Number.isInteger(+input) && +input === correctNumber);
            if (!isCorrect) {
                try { isCorrect = hinduArabicToNumber(input) === correctNumber; } catch (e) { /* ignore */ }
            }
            break;
    }

    if (isCorrect) {
        handleCorrectAnswer();
    } else {
        handleIncorrectAnswer();
    }
}

function handleCorrectAnswer() {
    gameState.correctAnswers++;

    const points = gameState.hintsUsed === 0 ? 150 : 100;
    gameState.score += points;

    showFeedback(`🎉 Correct! +${points} points`, 'correct');
    playSound('correct');
    celebrateSuccess(document.getElementById('score'));

    gameState.oraclePieces.push({
        civilization: gameState.currentCivilization,
        challenge:    gameState.currentChallenge
    });

    document.getElementById('score').textContent = gameState.score;

    if (gameState.correctAnswers === 3) {
        showAchievement('On a Roll!', 'Three correct answers in a row!');
    } else if (gameState.correctAnswers === 5) {
        showAchievement('Master Calculator!', 'All challenges completed!');
    }

    setTimeout(loadNextChallenge, 1500);
}

function handleIncorrectAnswer() {
    playSound('incorrect');
    shakeElement(document.querySelector('.problem-display'));

    if (gameState.mode === 'temporal') {
        gameState.timeLimit -= 10;
        showFeedback('❌ Incorrect. Try again! (-10s)', 'incorrect');
        showAchievement('Time Penalty!', '-10 seconds');
    } else if (gameState.mode === 'practice' || gameState.mode === 'daily') {
        const civ       = gameState.currentCivilization;
        const problem   = gameState.currentProblem;
        const key       = civ.replace('-', '') + 'Answer'; // e.g. hinduArabicAnswer
        const civAnswer = problem[key] !== undefined ? problem[key] : problem.answer;
        showFeedback(`❌ Not quite! Answer: ${problem.answer} = ${civAnswer}`, 'incorrect');
    } else {
        showFeedback('❌ Incorrect. Try again!', 'incorrect');
    }
}

function endChallenge(completed) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;

    const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    const resultsTitle   = document.getElementById('results-title');
    const resultsContent = document.getElementById('results-content');

    if (completed) {
        resultsTitle.textContent = '🎊 Challenge Complete!';
        playSound('complete');

        // Record daily completion and update streak
        if (gameState.mode === 'daily') {
            const streak = recordDailyComplete();
            if (streak > 1) {
                showAchievement(`🔥 ${streak}-Day Streak!`, 'Come back tomorrow to keep it going!');
            } else {
                showAchievement('Daily Challenge Complete!', 'Come back tomorrow for a new civilization!');
            }
        }

        if (gameState.mode !== 'practice' && gameState.mode !== 'daily') {
            const stats = {
                score:          gameState.score,
                time:           elapsed,
                correctAnswers: gameState.correctAnswers,
                hintsUsed:      gameState.hintsUsed,
                mode:           gameState.mode,
                completedAt:    new Date().toISOString()
            };
            saveCivilizationStats(gameState.currentCivilization, stats);
            markCivilizationComplete(gameState.currentCivilization);

            // Unlock next civilization
            const civIds      = Object.keys(civilizations);
            const currentIdx  = civIds.indexOf(gameState.currentCivilization);
            if (currentIdx < civIds.length - 1) {
                const nextId = civIds[currentIdx + 1];
                civilizations[nextId].unlocked = true;
                setStorage(`mathematikos_${nextId}_unlocked`, 'true');
                showAchievement('New Civilization Unlocked!',
                    `You can now explore ${civilizations[nextId].name}!`);
            } else {
                showAchievement('🏆 Master of Numbers!',
                    'You have completed all civilizations! You are a true Guardian of Numbers!');
            }
        }

        resultsContent.innerHTML = `
            <div class="final-score">${gameState.score}</div>
            <p class="results-score-label">Total Score</p>

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
                <div class="oracle-collected-box">
                    <h3>✨ Oracle Piece Collected!</h3>
                    <p>You have collected a fragment of the Oracle of Numbers from the ${civilizations[gameState.currentCivilization].name}!</p>
                    <p><em>"The wisdom of numbers transcends time..."</em></p>
                </div>
            ` : ''}
        `;

        // Show Codex button for completed non-practice runs
        const codexBtn = document.getElementById('codex-btn');
        if (codexBtn) {
            codexBtn.style.display = gameState.mode !== 'practice' ? 'inline-block' : 'none';
        }
    } else {
        // Hide Codex button on time-out
        const codexBtn = document.getElementById('codex-btn');
        if (codexBtn) codexBtn.style.display = 'none';

        resultsTitle.textContent = '⏰ Time\'s Up!';
        resultsContent.innerHTML = `
            <p class="results-timeout-msg">The Children of Time have destroyed the records!</p>

            <div class="final-score">${gameState.score}</div>
            <p class="results-score-label">Score Achieved</p>

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

            <p class="results-retry-msg">Don't give up! Try again to save the knowledge of ancient civilizations!</p>
        `;
    }

    showScreen('results');
}
