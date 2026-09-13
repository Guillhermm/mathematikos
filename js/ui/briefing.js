// ===== BRIEFING SLIDER =====
// One card that speaks, instead of a stack of boxes. The Oracle narrates the
// frame story on first arrival; Hypatia always gets the last slide with the
// guidance for this civilization. Collapsing them into one slider is what keeps
// the story screen from running several screens tall.

// The Oracle and Hypatia are fixed; a local speaker is named by the story.
// Their names are catalog keys because they are read aloud in every language,
// and Hypatia's name in particular is spelled differently in each.
const BRIEFING_SPEAKER_KEYS = {
    oracle:  'ui.speakers.oracle',
    hypatia: 'ui.speakers.hypatia'
};

// Identifies the artwork a slide shows. Consecutive slides with the same key
// share one art layer, so the image holds still while only the words move.
function briefingArtKey(slide) {
    if (slide.speaker === 'oracle') return 'oracle';
    if (slide.speaker === 'local')  return `place:${slide.civId}`;
    return `hypatia:${slide.civId}`;
}

function briefingArtMarkup(key, civId) {
    if (key === 'oracle') return oracleSceneMarkup();
    if (key.startsWith('place:')) return placeSceneArtMarkup(civId);
    return hypatiaSceneArtMarkup(civId);
}

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
    if (!story) return slides;

    if (story.hypatia && (mode === 'thematic' || mode === 'daily')) {
        slides.push({
            speaker: 'hypatia',
            civId: civId,
            // Her guidance is the whole slide. The philosophical quotes that
            // used to sit above it were atmosphere, not instruction.
            quote: '',
            text: story.hypatia.guidance
        });
    }

    // The person you are actually there to help gets the last word, because the
    // next thing on screen is the button that starts their problem.
    if (story.speaker) {
        slides.push({
            speaker: 'local',
            civId: civId,
            name: story.speaker.name,
            quote: story.speaker.line,
            text: ''
        });
    }

    return slides;
}

// Structure only. Quote and text are filled in with textContent by
// fillBriefingText, so authored copy never travels through innerHTML.
function briefingMarkup(slides) {
    if (slides.length === 0) return '';

    // Distinct artwork only. Three Oracle slides in a row share one layer.
    const artKeys = [];
    slides.forEach(slide => {
        const key = briefingArtKey(slide);
        if (!artKeys.includes(key)) artKeys.push(key);
    });

    const layers = artKeys.map((key, i) => {
        const slide = slides.find(s => briefingArtKey(s) === key);
        return `<div class="briefing-art${i === 0 ? ' active' : ''}" data-art="${key}"
                     aria-hidden="${i === 0 ? 'false' : 'true'}">${briefingArtMarkup(key, slide.civId)}</div>`;
    }).join('');

    const panels = slides.map((slide, i) => `
            <article class="briefing-speech" data-speaker="${slide.speaker}"
                     data-art="${briefingArtKey(slide)}"
                     role="group" aria-roledescription="slide"
                     aria-label="${i + 1} of ${slides.length}">
                <p class="briefing-name"></p>
                <blockquote class="briefing-quote"></blockquote>
                <p class="briefing-text"></p>
            </article>`).join('');

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
            <div class="briefing-stage">${layers}</div>
            <div class="briefing-viewport">
                <div class="briefing-track">${panels}</div>
            </div>
            ${nav}
        </section>
    `;
}

function fillBriefingText(slides) {
    const panels = document.querySelectorAll('.briefing-speech');
    slides.forEach((slide, i) => {
        const panel = panels[i];
        if (!panel) return;
        const name = panel.querySelector('.briefing-name');
        const quote = panel.querySelector('.briefing-quote');
        const text = panel.querySelector('.briefing-text');
        const speakerKey = BRIEFING_SPEAKER_KEYS[slide.speaker];
        if (name) name.textContent = speakerKey ? t(speakerKey) : (slide.name || '');
        if (quote) {
            quote.textContent = slide.quote;
            quote.hidden = !slide.quote;
        }
        if (text) {
            text.textContent = slide.text;
            text.hidden = !slide.text;
        }
    });
}

function goToBriefingSlide(root, index) {
    const panels = root.querySelectorAll('.briefing-speech');
    if (panels.length === 0) return;

    const clamped = Math.max(0, Math.min(index, panels.length - 1));
    root.dataset.slide = String(clamped);

    const track = root.querySelector('.briefing-track');
    if (track) track.style.transform = `translateX(-${clamped * 100}%)`;

    // Only swap the image when the next slide actually shows a different one.
    // Across the Oracle's three slides this is a no-op and the art holds still.
    const wanted = panels[clamped].dataset.art;
    root.querySelectorAll('.briefing-art').forEach(layer => {
        const isActive = layer.dataset.art === wanted;
        layer.classList.toggle('active', isActive);
        layer.setAttribute('aria-hidden', String(!isActive));
    });

    // Height follows the visible panel, so shorter slides leave no dead space.
    // A zero measurement means the screen is not laid out yet; leaving the
    // height alone keeps the card at its natural size instead of collapsing it.
    const viewport = root.querySelector('.briefing-viewport');
    const measured = panels[clamped].offsetHeight;
    if (viewport && measured > 0) viewport.style.height = `${measured}px`;

    root.querySelectorAll('.briefing-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === clamped);
    });

    root.querySelectorAll('.briefing-arrow').forEach(arrow => {
        const step = Number(arrow.dataset.step);
        arrow.disabled = step < 0 ? clamped === 0 : clamped === panels.length - 1;
    });

    // Only the visible panel should be reachable by keyboard or screen reader.
    panels.forEach((panel, i) => {
        panel.setAttribute('aria-hidden', String(i !== clamped));
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
