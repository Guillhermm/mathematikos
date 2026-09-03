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
                ${icon('lock', 'icon-locked')}
            </div>` : '';

        const completionRow = isCompleted ? `
            <div class="civ-completion-badge">
                ${icon('check')}<span>Best: ${stats ? stats.score : 0}</span>
            </div>` : (stats && civ.unlocked ? `
            <p class="civ-best-score">Best: ${stats.score}</p>` : '');

        const codexBtn = isCompleted ? `
            <button class="btn-codex-card" onclick="event.stopPropagation(); openCodex('${civ.id}')" title="Open Codex">${icon('book')}</button>` : '';

        card.innerHTML = `
            ${lockedOverlay}
            ${codexBtn}
            <div class="civ-card-art" data-civ="${civ.id}">
                <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <rect width="400" height="200" fill="var(--scene-sky)"/>
                    <use href="#${sceneBackdropId(civ.id)}" width="400" height="200"/>
                    <rect y="168" width="400" height="32" fill="var(--scene-ground)"/>
                </svg>
            </div>
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

    // Briefing: the Oracle narrates the frame story on first arrival, Hypatia
    // always closes with the guidance for this civilization.
    const showIntro = mode !== 'practice' && gameState.oraclePieces.length === 0;
    const slides = buildBriefingSlides(mode, gameState.currentCivilization, showIntro);

    // The facts about this run, as one dense list rather than four stacked cards.
    const rows = [
        { icon: 'pin',    label: 'Setting',   value: story.setting },
        { icon: 'target', label: 'Objective', value: story.objective },
        { icon: 'book',   label: 'Numerals',  value: civ.numberSystem }
    ];
    if (story.note) {
        rows.push({ icon: 'clock', label: story.note.label, value: story.note.text });
    }

    document.getElementById('story-content').innerHTML = `
        ${briefingMarkup(slides)}

        <h3 class="story-title">${story.title}</h3>

        ${dossierMarkup(rows)}
    `;

    // Authored copy goes in as text, never through innerHTML.
    fillDossier(rows);
    fillBriefingText(slides);

    // The screen has to be visible before the briefing measures its slides;
    // a hidden element reports zero height and the card collapses.
    showScreen('story-intro');
    initBriefing();
}

// ===== STORY DOSSIER =====
// Setting, objective, numerals and any mode note, as hairline-separated rows
// on one surface. Four separate cards cost roughly twice the height for the
// same words.

function dossierMarkup(rows) {
    if (rows.length === 0) return '';
    const items = rows.map(row => `
        <div class="dossier-row">
            <p class="dossier-label">${icon(row.icon)}<span></span></p>
            <p class="dossier-value"></p>
        </div>`).join('');
    return `<section class="dossier">${items}</section>`;
}

function fillDossier(rows) {
    const nodes = document.querySelectorAll('.dossier-row');
    rows.forEach((row, i) => {
        const node = nodes[i];
        if (!node) return;
        const label = node.querySelector('.dossier-label span');
        const value = node.querySelector('.dossier-value');
        if (label) label.textContent = row.label;
        if (value) value.textContent = row.value;
    });
}
