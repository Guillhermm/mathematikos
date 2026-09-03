// ===== BRIEFING SLIDER TESTS =====

describe('buildBriefingSlides', () => {
    it('opens with the Oracle on a first thematic run', () => {
        const slides = buildBriefingSlides('thematic', 'roman', true);
        assertEqual(slides.length, stories.thematic.intro.length + 1);
        assertEqual(slides[0].speaker, 'oracle');
    });

    it('always closes on Hypatia', () => {
        const slides = buildBriefingSlides('thematic', 'roman', true);
        assertEqual(slides[slides.length - 1].speaker, 'hypatia');
    });

    // Returning players have already heard the frame story.
    it('drops the intro once a fragment is held', () => {
        const slides = buildBriefingSlides('thematic', 'greek', false);
        assertEqual(slides.length, 1);
        assertEqual(slides[0].speaker, 'hypatia');
    });

    it('carries the civilization onto the Hypatia slide', () => {
        const slides = buildBriefingSlides('thematic', 'mayan', false);
        assertEqual(slides[0].civId, 'mayan');
    });

    it('gives daily mode the thematic briefing', () => {
        const daily = buildBriefingSlides('daily', 'chinese', false);
        assertEqual(daily.length, 1);
        assertEqual(daily[0].speaker, 'hypatia');
    });

    // Temporal has its own Oracle intro but no Hypatia guidance.
    it('gives temporal mode the Oracle only', () => {
        const slides = buildBriefingSlides('temporal', 'roman', true);
        assertEqual(slides.length, stories.temporal.intro.length);
        assertTrue(slides.every(s => s.speaker === 'oracle'));
    });

    it('returns nothing for practice mode', () => {
        assertEqual(buildBriefingSlides('practice', 'roman', false).length, 0);
    });

    it('builds a slide for every civilization', () => {
        Object.keys(civilizations).forEach(civId => {
            const slides = buildBriefingSlides('thematic', civId, false);
            assertEqual(slides.length, 1, `${civId} produced ${slides.length} slides`);
            assertTrue(slides[0].quote.length > 0, `${civId} has no quote`);
            assertTrue(slides[0].text.length > 0, `${civId} has no guidance`);
        });
    });
});

describe('briefingMarkup', () => {
    it('renders nothing when there are no slides', () => {
        assertEqual(briefingMarkup([]), '');
    });

    it('renders one panel per slide', () => {
        const slides = buildBriefingSlides('thematic', 'roman', true);
        const markup = briefingMarkup(slides);
        assertEqual((markup.match(/class="briefing-slide"/g) || []).length, slides.length);
        assertEqual((markup.match(/data-goto="/g) || []).length, slides.length);
    });

    it('hides the controls for a single slide', () => {
        const markup = briefingMarkup(buildBriefingSlides('thematic', 'roman', false));
        assertTrue(markup.includes('briefing-single'));
        assertTrue(!markup.includes('briefing-nav'));
    });

    it('starts on the first slide with the back arrow disabled', () => {
        const markup = briefingMarkup(buildBriefingSlides('thematic', 'roman', true));
        assertTrue(markup.includes('data-slide="0"'));
        assertTrue(/data-step="-1"[^>]*disabled/.test(markup.replace(/\s+/g, ' ')));
    });

    it('leaves quote and text empty, so authored copy never enters innerHTML', () => {
        const slides = buildBriefingSlides('thematic', 'roman', true);
        const markup = briefingMarkup(slides);
        assertTrue(markup.includes('<blockquote class="briefing-quote"></blockquote>'));
        assertTrue(markup.includes('<p class="briefing-text"></p>'));
        slides.forEach(slide => {
            assertTrue(!markup.includes(slide.quote), 'a quote leaked into the markup');
            assertTrue(!markup.includes(slide.text), 'guidance leaked into the markup');
        });
    });

    it('gives each speaker their own artwork', () => {
        const markup = briefingMarkup(buildBriefingSlides('thematic', 'greek', true));
        assertTrue(markup.includes('href="#oracle-character"'));
        assertTrue(markup.includes('href="#hypatia"'));
        assertTrue(markup.includes('href="#bd-greek"'));
    });
});
