// ===== CIVILIZATION CODEX =====
// Per-civilization encyclopedia, unlocked after completing each civilization.
// The entries themselves live in js/locales/<tag>.js; applyCatalog() binds the
// active language's set here.

let CODEX = {};

function openCodex(civId) {
    const entry = CODEX[civId];
    if (!entry) return;

    const content = document.getElementById('codex-content');
    content.innerHTML = `
        <div class="codex-header">
            <span class="codex-icon">${icon('book')}</span>
            <div>
                <h2 class="codex-title"></h2>
                <p class="codex-meta"></p>
            </div>
        </div>
        ${entry.sections.map(() => `
            <div class="codex-section">
                <h4 class="codex-section-heading"></h4>
                <p></p>
            </div>
        `).join('')}
    `;

    // Authored prose goes in as text, never as markup.
    content.querySelector('.codex-title').textContent = entry.title;
    content.querySelector('.codex-meta').textContent = `${entry.period} · ${entry.region}`;

    content.querySelectorAll('.codex-section').forEach((node, i) => {
        const section = entry.sections[i];
        if (!section) return;
        node.querySelector('.codex-section-heading').textContent = section.heading;
        node.querySelector('p').textContent = section.text;
    });

    document.getElementById('codex-modal').classList.add('show');
}

function closeCodex() {
    document.getElementById('codex-modal').classList.remove('show');
}
