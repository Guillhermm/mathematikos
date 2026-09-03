// ===== BRIEFING SLIDER =====
// One card that speaks, instead of a stack of boxes. The Oracle narrates the
// frame story on first arrival; Hypatia always gets the last slide with the
// guidance for this civilization. Collapsing them into one slider is what keeps
// the story screen from running several screens tall.

const BRIEFING_SPEAKERS = {
    oracle:  'The Oracle of Numbers',
    hypatia: 'Hypatia of Alexandria'
};

// Returns the slides for a run, in order. The intro appears only before the
// first fragment is recovered, so returning players go straight to Hypatia.
function buildBriefingSlides(mode, civId, showIntro) {
    const slides = [];
    const storyMode = mode === 'daily' ? 'thematic' : mode;
    const modeStories = stories[storyMode];

    if (showIntro && modeStories && Array.isArray(modeStories.intro)) {
        modeStories.intro.forEach(line => {
            slides.push({
                speaker: 'oracle',
                quote: line.quote,
                text: line.text
            });
        });
    }

    const story = modeStories && modeStories[civId];
    if (story && story.hypatia && (mode === 'thematic' || mode === 'daily')) {
        slides.push({
            speaker: 'hypatia',
            civId: civId,
            quote: story.hypatia.quote,
            text: story.hypatia.guidance
        });
    }

    return slides;
}

// Structure only. Quote and text are filled in with textContent by
// fillBriefingText, so authored copy never travels through innerHTML.
function briefingMarkup(slides) {
    if (slides.length === 0) return '';

    const panels = slides.map((slide, i) => {
        const art = slide.speaker === 'oracle'
            ? oracleSceneMarkup()
            : hypatiaSceneArtMarkup(slide.civId);
        return `
            <article class="briefing-slide" data-speaker="${slide.speaker}"
                     role="group" aria-roledescription="slide"
                     aria-label="${i + 1} of ${slides.length}">
                <div class="briefing-art">${art}</div>
                <div class="briefing-speech">
                    <p class="briefing-name">${BRIEFING_SPEAKERS[slide.speaker]}</p>
                    <blockquote class="briefing-quote"></blockquote>
                    <p class="briefing-text"></p>
                </div>
            </article>`;
    }).join('');

    const isSingle = slides.length === 1;
    const dots = slides.map((slide, i) =>
        `<button type="button" class="briefing-dot${i === 0 ? ' active' : ''}"
                 data-goto="${i}" aria-label="Go to slide ${i + 1}"></button>`
    ).join('');

    const nav = isSingle ? '' : `
            <nav class="briefing-nav">
                <button type="button" class="briefing-arrow" data-step="-1"
                        aria-label="Previous" disabled>&#8592;</button>
                <div class="briefing-dots">${dots}</div>
                <button type="button" class="briefing-arrow" data-step="1"
                        aria-label="Next">&#8594;</button>
            </nav>`;

    return `
        <section class="briefing${isSingle ? ' briefing-single' : ''}" data-slide="0"
                 aria-roledescription="carousel" aria-label="Mission briefing">
            <div class="briefing-viewport">
                <div class="briefing-track">${panels}</div>
            </div>
            ${nav}
        </section>
    `;
}

function fillBriefingText(slides) {
    const panels = document.querySelectorAll('.briefing-slide');
    slides.forEach((slide, i) => {
        const panel = panels[i];
        if (!panel) return;
        const quote = panel.querySelector('.briefing-quote');
        const text = panel.querySelector('.briefing-text');
        if (quote) quote.textContent = slide.quote;
        if (text) text.textContent = slide.text;
    });
}

function goToBriefingSlide(root, index) {
    const slides = root.querySelectorAll('.briefing-slide');
    if (slides.length === 0) return;

    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    root.dataset.slide = String(clamped);

    const track = root.querySelector('.briefing-track');
    if (track) track.style.transform = `translateX(-${clamped * 100}%)`;

    // Height follows the visible slide. Without this the card is always as tall
    // as its longest slide, which leaves dead space under the shorter ones.
    const viewport = root.querySelector('.briefing-viewport');
    if (viewport) viewport.style.height = `${slides[clamped].offsetHeight}px`;

    root.querySelectorAll('.briefing-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === clamped);
    });

    root.querySelectorAll('.briefing-arrow').forEach(arrow => {
        const step = Number(arrow.dataset.step);
        arrow.disabled = step < 0 ? clamped === 0 : clamped === slides.length - 1;
    });

    // Only the visible slide should be reachable by keyboard or screen reader.
    slides.forEach((slide, i) => {
        slide.setAttribute('aria-hidden', String(i !== clamped));
    });
}

// Kept at module scope so re-rendering the story screen replaces the listener
// instead of stacking a new one on every visit.
let briefingResizeHandler = null;

function initBriefing() {
    if (briefingResizeHandler) {
        window.removeEventListener('resize', briefingResizeHandler);
        briefingResizeHandler = null;
    }

    const root = document.querySelector('.briefing');
    if (!root) return;

    root.addEventListener('click', event => {
        const arrow = event.target.closest('.briefing-arrow');
        if (arrow) {
            goToBriefingSlide(root, Number(root.dataset.slide) + Number(arrow.dataset.step));
            return;
        }
        const dot = event.target.closest('.briefing-dot');
        if (dot) goToBriefingSlide(root, Number(dot.dataset.goto));
    });

    // Swipe, since this is a phone-first screen.
    let startX = null;
    root.addEventListener('touchstart', event => {
        startX = event.touches[0].clientX;
    }, { passive: true });

    root.addEventListener('touchend', event => {
        if (startX === null) return;
        const dx = event.changedTouches[0].clientX - startX;
        startX = null;
        if (Math.abs(dx) < 40) return;
        goToBriefingSlide(root, Number(root.dataset.slide) + (dx < 0 ? 1 : -1));
    }, { passive: true });

    briefingResizeHandler = () => {
        if (!document.body.contains(root)) return;
        goToBriefingSlide(root, Number(root.dataset.slide));
    };
    window.addEventListener('resize', briefingResizeHandler);

    goToBriefingSlide(root, 0);
}
