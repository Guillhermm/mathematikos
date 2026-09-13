// ===== ABOUT SCREEN =====
// Origin story and provenance. All copy lives in js/locales/<tag>.js;
// TIMELINE_ENTRIES is bound from there by applyCatalog().

let TIMELINE_ENTRIES = [];

function showAbout() {
    const container = document.getElementById('about-content');
    const whyItems = tData('about.whyItems') || [];

    container.innerHTML = `
        <div class="about-intro">
            <p class="about-intro-text"></p>
        </div>

        <div class="about-creator">
            <h3 class="about-creator-heading"></h3>
            <p class="about-creator-text-1"></p>
            <p class="about-creator-text-2"></p>
        </div>

        <div class="about-why">
            <h3 class="about-why-heading"></h3>
            <p class="about-why-lead"></p>
            <ul class="about-why-list">
                ${whyItems.map(() => '<li><strong></strong><span></span></li>').join('')}
            </ul>
        </div>

        <h3 class="timeline-heading"></h3>
        <div class="timeline">
            ${TIMELINE_ENTRIES.map((entry, i) => `
                <div class="timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}">
                    <div class="timeline-dot">${i + 1}</div>
                    <div class="timeline-card">
                        <div class="timeline-date"></div>
                        <h4 class="timeline-title"></h4>
                        <p class="timeline-text"></p>
                        ${entry.proof ? '<div class="timeline-proof"></div>' : ''}
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="about-screenshots">
            <h3 class="about-evidence-heading"></h3>
            <p class="about-evidence-text"></p>
            <figure class="screenshot-figure">
                <img src="screenshots/screenshot-chatgpt-2024-october.png"
                     class="screenshot-img evidence-img-1">
                <figcaption class="evidence-caption-1"></figcaption>
            </figure>
            <figure class="screenshot-figure">
                <img src="screenshots/screenshot-github-mathematikos-proto-readme-history.png"
                     class="screenshot-img evidence-img-2">
                <figcaption class="evidence-caption-2"></figcaption>
            </figure>
        </div>
    `;

    const setText = (selector, value) => {
        const node = container.querySelector(selector);
        if (node) node.textContent = value;
    };

    setText('.about-intro-text',      t('about.intro'));
    setText('.about-creator-heading', t('about.creatorHeading'));
    setText('.about-creator-text-1',  t('about.creatorText1'));
    setText('.about-creator-text-2',  t('about.creatorText2'));
    setText('.about-why-heading',     t('about.whyHeading'));
    setText('.about-why-lead',        t('about.whyLead'));
    setText('.timeline-heading',      t('about.timelineHeading'));
    setText('.about-evidence-heading', t('about.evidenceHeading'));
    setText('.about-evidence-text',   t('about.evidenceText'));
    setText('.evidence-caption-1',    t('about.evidenceCaption1'));
    setText('.evidence-caption-2',    t('about.evidenceCaption2'));

    const img1 = container.querySelector('.evidence-img-1');
    if (img1) img1.alt = t('about.evidenceAlt1');
    const img2 = container.querySelector('.evidence-img-2');
    if (img2) img2.alt = t('about.evidenceAlt2');

    container.querySelectorAll('.about-why-list li').forEach((node, i) => {
        const item = whyItems[i];
        if (!item) return;
        node.querySelector('strong').textContent = `${item.name}: `;
        node.querySelector('span').textContent = item.text;
    });

    container.querySelectorAll('.timeline-item').forEach((node, i) => {
        const entry = TIMELINE_ENTRIES[i];
        if (!entry) return;
        node.querySelector('.timeline-date').textContent = entry.date;
        node.querySelector('.timeline-title').textContent = entry.title;
        node.querySelector('.timeline-text').textContent = entry.text;
        const proof = node.querySelector('.timeline-proof');
        if (proof) proof.textContent = entry.proof;
    });

    showScreen('about-screen');
}
