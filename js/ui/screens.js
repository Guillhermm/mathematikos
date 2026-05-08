// ===== SCREEN MANAGEMENT =====

function showScreen(screenId) {
    // Stop timer when leaving the game screen
    if (document.getElementById('game-play').classList.contains('active')) {
        if (screenId !== 'game-play' && gameState.timerInterval) {
            clearInterval(gameState.timerInterval);
            gameState.timerInterval = null;
        }
    }

    // Clear civilization theme when returning to root screens
    if (screenId === 'main-menu' || screenId === 'about-screen' || screenId === 'daily-screen') {
        clearTheme();
        stopAmbient();
    }

    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

const DIFFICULTY_CLASS = {
    'Easy':         'diff-easy',
    'Intermediate': 'diff-intermediate',
    'Advanced':     'diff-advanced',
    'Expert':       'diff-expert'
};

function renderCivilizationSelect() {
    const container = document.getElementById('civilization-list');
    container.innerHTML = '';

    Object.values(civilizations).forEach(civ => {
        const isCompleted  = isCivilizationComplete(civ.id);
        const stats        = getCivilizationStats(civ.id);
        const diffClass    = DIFFICULTY_CLASS[civ.difficulty] || 'diff-intermediate';

        const card = document.createElement('div');
        card.className = `civilization-card ${!civ.unlocked ? 'locked' : ''}`;

        if (civ.unlocked) {
            card.onclick = () => selectCivilization(civ.id);
        }

        const lockedOverlay = !civ.unlocked ? `
            <div class="civ-locked-overlay">
                <span class="civ-locked-overlay-icon">🔒</span>
            </div>` : '';

        const completionRow = isCompleted ? `
            <div class="civ-completion-badge">
                <span>✓</span><span>Best: ${stats ? stats.score : 0}</span>
            </div>` : (stats && civ.unlocked ? `
            <p class="civ-best-score">Best: ${stats.score}</p>` : '');

        const codexBtn = isCompleted ? `
            <button class="btn-codex-card" onclick="event.stopPropagation(); openCodex('${civ.id}')" title="Open Codex">📚</button>` : '';

        card.innerHTML = `
            ${lockedOverlay}
            ${codexBtn}
            <div class="civ-card-icon">${civ.icon}</div>
            <div class="civ-card-name">${civ.name}</div>
            <span class="civ-difficulty-badge ${diffClass}">${civ.difficulty}</span>
            ${completionRow}
        `;

        container.appendChild(card);
    });
}

function selectCivilization(civId) {
    gameState.currentCivilization = civId;
    applyTheme(civId);
    startAmbient(civId);
    showStoryIntro();
}

function showStoryIntro() {
    const civ   = civilizations[gameState.currentCivilization];
    const mode  = gameState.mode;
    // Daily challenge uses the thematic story content
    const storyMode = mode === 'daily' ? 'thematic' : mode;
    const story = stories[storyMode][gameState.currentCivilization];

    const civTitleEl = document.getElementById('story-intro-civ-title');
    if (civTitleEl) civTitleEl.textContent = civ.name;

    // Hypatia guide block — shown in thematic and daily modes
    const hypatiaBlock = (mode === 'thematic' || mode === 'daily') && story.hypatia ? `
        <div class="hypatia-guide">
            <div class="hypatia-header">
                <span class="hypatia-avatar">🔭</span>
                <strong class="hypatia-name">Hypatia of Alexandria</strong>
                <button class="hypatia-toggle" onclick="toggleHypatia()" title="Show/hide guidance">▼</button>
            </div>
            <div class="hypatia-body" id="hypatia-body">
                <blockquote class="hypatia-quote">"${story.hypatia.quote}"</blockquote>
                <p class="hypatia-guidance">${story.hypatia.guidance}</p>
            </div>
        </div>
    ` : '';

    document.getElementById('story-content').innerHTML = `
        ${mode === 'thematic' && gameState.oraclePieces.length === 0 ? stories['thematic'].intro : ''}

        ${hypatiaBlock}

        <h3>${story.title}</h3>

        <div class="story-box story-setting-box">
            <strong>📍 Setting:</strong>
            <p>${story.setting}</p>
        </div>

        <div class="story-box story-objective-box">
            <strong>🎯 Objective:</strong>
            <p>${story.objective}</p>
        </div>

        <div class="story-box story-character-box">
            ${story.character}
        </div>

        <div class="story-box story-numsystem-box">
            <strong>📚 Number System:</strong> ${civ.numberSystem}
        </div>
    `;

    showScreen('story-intro');
}
