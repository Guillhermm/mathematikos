// ===== ABOUT SCREEN =====

const TIMELINE_ENTRIES = [
    {
        date: 'Late 2024',
        icon: '💬',
        title: 'The Idea Is Born',
        text: 'During a ChatGPT conversation titled <em>"Jogo de adição histórica"</em> (Portuguese: "Historical Addition Game"), the concept for Mathematikos takes shape — a browser game teaching ancient number systems through time-travel challenges. The name, the civilization list, and the two game modes (Thematic Scenes and Temporal Challenges) are all defined in this session.'
    },
    {
        date: 'October 19, 2024',
        icon: '📁',
        title: 'Private Prototype Repository Created',
        text: 'The first commit to the private prototype repository is made at 22:21 (UTC-3). Eighteen minutes later, a comprehensive design document is committed — the complete game concept, story narrative, civilizations, mechanics, and technology plan. This document is cryptographically timestamped in Git history.',
        proof: 'Prototype first commit: <code>e78660e</code> — Oct 19, 2024, 22:21 UTC-3'
    },
    {
        date: 'October 21–November 6, 2024',
        icon: '⚛️',
        title: 'First Prototype Built',
        text: 'A working prototype is developed using React, TypeScript, Vite, and Phaser 3. The theme selection system, WebGL shaders per civilization, and introduction scene are implemented. Development spans 19 days across the prototype repository.'
    },
    {
        date: '2025',
        icon: '🎲',
        title: 'Mathematicus Board Game Released',
        text: 'A physical board game called <em>Mathematicus</em> is released, covering Babylonian, Egyptian, Chinese, Roman, Mayan, Arabic, and binary numeral systems — a convergent concept developed independently. Mathematikos predates this release by over a year, as evidenced by the 2024 Git history. The two products are complementary, not competitive: Mathematikus is digital and free; Mathematicus is physical and paid.'
    },
    {
        date: 'February 15, 2026',
        icon: '🔄',
        title: 'Rebuilt as Pure HTML/CSS/JS',
        text: 'Mathematikos is rebuilt from scratch as a zero-dependency browser game — pure HTML, CSS, and ES6 JavaScript. The goal: instant play, no build step, works offline. Roman, Egyptian, Greek, Babylonian, and Chinese civilizations are implemented in a single evening.'
    },
    {
        date: 'March 23, 2026',
        icon: '🌿',
        title: 'Maya Civilization &amp; Major Expansion',
        text: 'The Maya vigesimal (base-20) system is added, along with full SVG rendering for all numeral systems, a test suite per civilization, Practice Mode, and reverse challenges (write ancient numerals from Arabic numbers). The codebase is modularized into a clean file structure.'
    },
    {
        date: 'March 25, 2026',
        icon: '🌙',
        title: 'Dark Mode &amp; Visual Polish',
        text: 'Comprehensive dark mode support is added, fixing all hardcoded light colors. Inline styles are refactored to CSS classes. The game now looks great in both light and dark themes.'
    },
    {
        date: 'March 25, 2026',
        icon: '🕌',
        title: 'Hindu-Arabic Civilization &amp; Full Feature Expansion',
        text: 'The seventh and final civilization is added: Hindu-Arabic numerals from 9th-century Baghdad — the origin story of the number system we use today. The Daily Challenge, Codex (civilization encyclopedia), civilization visual themes, ambient sound, cross-civilization conversion challenges, and PWA (offline play) are all shipped in a single release.'
    }
];

function showAbout() {
    const container = document.getElementById('about-content');

    container.innerHTML = `
        <div class="about-intro">
            <p>Mathematikos is a free, open educational game created by <strong>Guilherme Zeni</strong>. This page documents the project's origin — including timestamps predating all known similar products — and the philosophy behind it.</p>
        </div>

        <div class="about-creator">
            <h3>The Creator</h3>
            <p><strong>Guilherme Zeni</strong> is a senior software engineer with over 10 years of experience. Mathematikos was born from a personal passion for history and mathematics, and a conviction that there is no good free browser game that teaches ancient number systems as a genuine game experience.</p>
            <p>The game is and will remain <strong>free</strong>. If it helps you, consider supporting it voluntarily.</p>
        </div>

        <div class="about-why">
            <h3>Why These Civilizations?</h3>
            <p>Each civilization was chosen for its mathematical distinctiveness and cultural significance:</p>
            <ul>
                <li><strong>Roman</strong> — The most familiar ancient system; a gentle entry point</li>
                <li><strong>Egyptian</strong> — Base-10 but fully additive; visual hieroglyphs make it memorable</li>
                <li><strong>Greek</strong> — Alphabetic numerals; a unique bridge between language and number</li>
                <li><strong>Babylonian</strong> — Base-60, sexagesimal; the origin of our 60-second minute and 360-degree circle</li>
                <li><strong>Chinese</strong> — Rod numerals and suanpan (abacus); a sophisticated positional system</li>
                <li><strong>Maya</strong> — Base-20, vigesimal; one of the few independent inventions of zero</li>
                <li><strong>Hindu-Arabic</strong> — The grand finale: the system that unified all others and became our modern numerals</li>
            </ul>
        </div>

        <h3 class="timeline-heading">Development Timeline</h3>
        <div class="timeline">
            ${TIMELINE_ENTRIES.map((entry, i) => `
                <div class="timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}">
                    <div class="timeline-dot">${entry.icon}</div>
                    <div class="timeline-card">
                        <div class="timeline-date">${entry.date}</div>
                        <h4 class="timeline-title">${entry.title}</h4>
                        <p class="timeline-text">${entry.text}</p>
                        ${entry.proof ? `<div class="timeline-proof">${entry.proof}</div>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="about-screenshots">
            <h3>Evidence &amp; Provenance</h3>
            <p>Screenshots of the original 2024 ChatGPT conversation and the private prototype repository commit history are available as documentation of independent origin.</p>
            <div class="screenshot-placeholder">
                <p>[ Screenshot: ChatGPT conversation — "Jogo de adição histórica", 2024 ]</p>
            </div>
            <div class="screenshot-placeholder">
                <p>[ Screenshot: Private prototype repository — first commit October 19, 2024 ]</p>
            </div>
        </div>
    `;

    showScreen('about-screen');
}
