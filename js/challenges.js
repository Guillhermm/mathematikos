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
    document.getElementById('challenge-number').textContent = t('ui.game.counter', {
        current: gameState.currentChallenge,
        total:   gameState.totalChallenges
    });
    const fillEl = document.getElementById('progress-fill');
    if (fillEl) {
        fillEl.style.width =
            `${((gameState.currentChallenge - 1) / gameState.totalChallenges) * 100}%`;
    }
    document.getElementById('feedback').classList.remove('show');
    document.getElementById('hint-display').classList.remove('show');
    document.getElementById('answer-input').value = '';
    const numPad = document.getElementById('numeric-pad');
    if (numPad) numPad.classList.remove('is-reverse');

    // The previous challenge may have been reverse or cross-civilization, both
    // of which change the equation tail. Reset before the next one renders.
    const problemDisplay = document.getElementById('problem-display');
    if (problemDisplay) problemDisplay.classList.remove('is-reverse');
    const answerSlot = document.getElementById('built-answer');
    if (answerSlot) answerSlot.dataset.placeholder = t('ui.game.answerPlaceholder');

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
    const problemEl = document.getElementById('problem');
    problemEl.innerHTML = `
        <div class="problem-numerals reverse-problem">
            <div class="reverse-prompt"></div>
            <div class="reverse-number">${problem.answer}</div>
        </div>
    `;
    problemEl.querySelector('.reverse-prompt').textContent =
        t('ui.game.reversePrompt', { civ: civName });
    // A reverse challenge is a value to transcribe, not a sum to complete, so
    // the equals sign is dropped and the slot asks for the numerals directly.
    const display = document.getElementById('problem-display');
    if (display) display.classList.add('is-reverse');
    const slot = document.getElementById('built-answer');
    if (slot) slot.dataset.placeholder = t('ui.game.reverseSlot', { civ: civName });
    const answerInput = document.getElementById('answer-input');
    if (answerInput) answerInput.placeholder = t('ui.game.reverseInput');
    const numPad = document.getElementById('numeric-pad');
    if (numPad) numPad.classList.add('is-reverse');
}

function submitAnswer() {
    const typedRaw = document.getElementById('answer-input').value.trim();
    const input    = numericInput || builtAnswer || typedRaw;

    if (!input) {
        showFeedback(t('ui.feedback.empty'), 'incorrect');
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

    showFeedback(t('ui.feedback.correct', { points }), 'correct');
    playSound('correct');
    celebrateSuccess(document.getElementById('score'));

    gameState.oraclePieces.push({
        civilization: gameState.currentCivilization,
        challenge:    gameState.currentChallenge
    });

    document.getElementById('score').textContent = gameState.score;

    if (gameState.correctAnswers === 3) {
        showAchievement(t('ui.achievement.rollTitle'), t('ui.achievement.rollText'));
    } else if (gameState.correctAnswers === 5) {
        showAchievement(t('ui.achievement.masterTitle'), t('ui.achievement.masterText'));
    }

    setTimeout(loadNextChallenge, 1500);
}

function handleIncorrectAnswer() {
    playSound('incorrect');
    shakeElement(document.querySelector('.problem-display'));

    if (gameState.mode === 'temporal') {
        gameState.timeLimit -= 10;
        showFeedback(t('ui.feedback.incorrectTimed'), 'incorrect');
        showAchievement(t('ui.achievement.penaltyTitle'), t('ui.achievement.penaltyText'));
    } else if (gameState.mode === 'practice' || gameState.mode === 'daily') {
        const civ       = gameState.currentCivilization;
        const problem   = gameState.currentProblem;
        const key       = civ.replace('-', '') + 'Answer'; // e.g. hinduArabicAnswer
        const civAnswer = problem[key] !== undefined ? problem[key] : problem.answer;
        showFeedback(
            t('ui.feedback.incorrectReveal', { answer: problem.answer, civAnswer }),
            'incorrect');
    } else {
        showFeedback(t('ui.feedback.incorrect'), 'incorrect');
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
        resultsTitle.textContent = t('ui.results.title');
        playSound('complete');

        // Record daily completion and update streak
        if (gameState.mode === 'daily') {
            const streak = recordDailyComplete();
            if (streak > 1) {
                showAchievement(t('ui.achievement.streakTitle', { count: streak }),
                                t('ui.achievement.streakText'));
            } else {
                showAchievement(t('ui.achievement.dailyTitle'), t('ui.achievement.dailyText'));
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
                showAchievement(t('ui.achievement.unlockedTitle'),
                    t('ui.achievement.unlockedText', { civ: civilizations[nextId].name }));
            } else {
                showAchievement(t('ui.achievement.allCompleteTitle'),
                    t('ui.achievement.allCompleteText'));
            }
        }

        resultsContent.innerHTML = `
            <div class="final-score">${gameState.score}</div>
            <p class="results-score-label" data-i18n="ui.results.totalScore"></p>

            <div class="stats">
                <div class="stat-item">
                    <strong>${gameState.correctAnswers}</strong>
                    <p data-i18n="ui.results.correctAnswers"></p>
                </div>
                <div class="stat-item">
                    <strong>${minutes}:${String(seconds).padStart(2, '0')}</strong>
                    <p data-i18n="ui.results.timeTaken"></p>
                </div>
                <div class="stat-item">
                    <strong>${gameState.oraclePieces.length}</strong>
                    <p data-i18n="ui.results.oraclePieces"></p>
                </div>
                <div class="stat-item">
                    <strong>${gameState.hintsUsed}</strong>
                    <p data-i18n="ui.results.hintsUsed"></p>
                </div>
            </div>

            ${gameState.mode === 'thematic' ? `
                <div class="oracle-collected-box">
                    ${oracleResultSceneMarkup(
                        gameState.currentCivilization,
                        gameState.oraclePieces.length,
                        gameState.totalChallenges
                    )}
                    <h3 data-i18n="ui.results.collectedTitle"></h3>
                    <p class="results-collected-text"></p>
                    <p><em data-i18n="ui.results.collectedQuote"></em></p>
                </div>
            ` : ''}
        `;

        applyStaticTranslations(resultsContent);
        const collected = resultsContent.querySelector('.results-collected-text');
        if (collected) {
            collected.textContent = t('ui.results.collectedText', {
                civ: civilizations[gameState.currentCivilization].name
            });
        }

        // Show Codex button for completed non-practice runs
        const codexBtn = document.getElementById('codex-btn');
        if (codexBtn) {
            codexBtn.style.display = gameState.mode !== 'practice' ? 'inline-block' : 'none';
        }
    } else {
        // Hide Codex button on time-out
        const codexBtn = document.getElementById('codex-btn');
        if (codexBtn) codexBtn.style.display = 'none';

        resultsTitle.textContent = t('ui.results.timeUpTitle');
        resultsContent.innerHTML = `
            <p class="results-timeout-msg" data-i18n="ui.results.timeoutMessage"></p>

            <div class="final-score">${gameState.score}</div>
            <p class="results-score-label" data-i18n="ui.results.scoreAchieved"></p>

            <div class="stats">
                <div class="stat-item">
                    <strong>${gameState.correctAnswers}</strong>
                    <p data-i18n="ui.results.challengesCompleted"></p>
                </div>
                <div class="stat-item">
                    <strong>${gameState.currentChallenge - 1}/${gameState.totalChallenges}</strong>
                    <p data-i18n="ui.results.progress"></p>
                </div>
            </div>

            <p class="results-retry-msg" data-i18n="ui.results.retryMessage"></p>
        `;

        applyStaticTranslations(resultsContent);
    }

    showScreen('results');
}
