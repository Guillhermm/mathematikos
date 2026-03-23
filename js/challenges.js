// ===== CHALLENGE LIFECYCLE =====

function startChallenge() {
    gameState.currentChallenge = 0;
    gameState.correctAnswers   = 0;
    gameState.hintsUsed        = 0;
    gameState.startTime        = Date.now();

    if (gameState.mode === 'temporal') {
        const timeLimits = {
            roman:      180, // 3 min
            egyptian:   150, // 2.5 min
            greek:      150, // 2.5 min
            babylonian: 120, // 2 min
            chinese:    120  // 2 min
        };
        gameState.timeLimit = timeLimits[gameState.currentCivilization] || 180;
    }

    startTimer();
    loadNextChallenge();
    showScreen('game-play');
}

function loadNextChallenge() {
    gameState.currentChallenge++;

    if (gameState.currentChallenge > gameState.totalChallenges) {
        endChallenge(true);
        return;
    }

    document.getElementById('score').textContent = gameState.score;
    document.getElementById('challenge-number').textContent =
        `${gameState.currentChallenge}/${gameState.totalChallenges}`;

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
    }

    document.getElementById('feedback').classList.remove('show');
    document.getElementById('hint-display').classList.remove('show');
    document.getElementById('answer-input').value = '';
    clearAnswer();
    renderSymbolPad();
    updateOraclePiecesDisplay();
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

    switch (gameState.currentCivilization) {
        case 'roman': {
            const upper = input.toUpperCase();
            isCorrect = upper === problem.romanAnswer
                || (Number.isInteger(+input) && +input === correctNumber)
                || romanToNumber(upper) === correctNumber;
            break;
        }
        case 'egyptian':
            isCorrect = input === problem.egyptianAnswer
                || (Number.isInteger(+input) && +input === correctNumber)
                || egyptianToNumber(input) === correctNumber;
            break;
        case 'greek':
            isCorrect = input === problem.greekAnswer
                || (Number.isInteger(+input) && +input === correctNumber)
                || greekToNumber(input) === correctNumber;
            break;
        case 'babylonian':
            isCorrect = input === problem.babylonianAnswer
                || (Number.isInteger(+input) && +input === correctNumber);
            if (!isCorrect) {
                try { isCorrect = babylonianToNumber(input) === correctNumber; } catch (e) { /* ignore */ }
            }
            break;
        case 'chinese':
            isCorrect = input === problem.chineseAnswer
                || (Number.isInteger(+input) && +input === correctNumber);
            if (!isCorrect) {
                try { isCorrect = chineseToNumber(input) === correctNumber; } catch (e) { /* ignore */ }
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
    showFeedback('❌ Incorrect. Try again!', 'incorrect');
    playSound('incorrect');
    shakeElement(document.querySelector('.problem-display'));

    if (gameState.mode === 'temporal') {
        gameState.timeLimit -= 10;
        showAchievement('Time Penalty!', '-10 seconds');
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
