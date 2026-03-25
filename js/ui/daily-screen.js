// ===== DAILY CHALLENGE SCREEN =====

function showDailyChallenge() {
    const civId      = getDailyCivId();
    const civ        = civilizations[civId];
    const completed  = isDailyCompleted();
    const streak     = getDailyStreak();
    const today      = getTodayKey();
    const streakText = streak > 0
        ? `🔥 <strong>${streak}-day streak!</strong>`
        : 'Start your streak today!';

    document.getElementById('daily-content').innerHTML = `
        <div class="daily-info">
            <div class="daily-date">${formatDate(today)}</div>
            <div class="daily-streak">${streakText}</div>
        </div>

        <div class="daily-civ-card">
            <div class="daily-civ-icon">${civ.icon}</div>
            <div class="daily-civ-name">${civ.name}</div>
            <div class="daily-civ-system">${civ.numberSystem}</div>
            <div class="daily-civ-difficulty">${civ.difficulty}</div>
        </div>

        ${completed ? `
            <div class="daily-completed-msg">
                <p>✅ You've already completed today's challenge!</p>
                <p>Come back tomorrow for a new civilization.</p>
            </div>
        ` : `
            <p class="daily-description">
                Today's challenge uses the <strong>${civ.name}</strong> number system.
                5 questions, no time limit — just show what you've learned!
            </p>
        `}
    `;

    document.getElementById('daily-actions').innerHTML = completed
        ? ''
        : `<button class="btn btn-primary" onclick="startDailyChallenge()">▶ Play Today's Challenge</button>`;

    showScreen('daily-screen');
}

function formatDate(isoDate) {
    const [year, month, day] = isoDate.split('-').map(Number);
    const d = new Date(year, month - 1, day);
    return d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
