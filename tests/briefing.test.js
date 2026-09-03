// ===== BRIEFING SLIDER TESTS =====

describe('buildBriefingSlides', () => {
    it('opens with the Oracle on a first thematic run', () => {
        const slides = buildBriefingSlides('thematic', 'roman', true);
        // Oracle narration, then Hypatia, then the person you are helping.
        assertEqual(slides.length, stories.thematic.intro.length + 2);
        assertEqual(slides[0].speaker, 'oracle');
    });

    // The local speaker goes last because the next thing on screen is the
    // button that starts their problem.
    it('closes on the local character', () => {
        const slides = buildBriefingSlides('thematic', 'roman', true);
        const last = slides[slides.length - 1];
        assertEqual(last.speaker, 'local');
        assertEqual(last.name, stories.thematic.roman.speaker.name);
        assertEqual(slides[slides.length - 2].speaker, 'hypatia');
    });

    // Returning players have already heard the frame story.
    it('drops the intro once a fragment is held', () => {
        const slides = buildBriefingSlides('thematic', 'greek', false);
        assertEqual(slides.length, 2);
        assertEqual(slides.map(s => s.speaker).join(','), 'hypatia,local');
    });

    it('carries the civilization onto the Hypatia slide', () => {
        const slides = buildBriefingSlides('thematic', 'mayan', false);
        assertEqual(slides[0].civId, 'mayan');
    });

    it('gives daily mode the thematic briefing', () => {
        const daily = buildBriefingSlides('daily', 'chinese', false);
        assertEqual(daily.map(s => s.speaker).join(','), 'hypatia,local');
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

    it('builds both speaker slides for every civilization', () => {
        Object.keys(civilizations).forEach(civId => {
            const slides = buildBriefingSlides('thematic', civId, false);
            assertEqual(slides.length, 2, `${civId} produced ${slides.length} slides`);
            assertTrue(slides[0].quote.length > 0, `${civId} has no Hypatia quote`);
            assertTrue(slides[0].text.length > 0, `${civId} has no guidance`);
            assertTrue(slides[1].name.length > 0, `${civId} has no named local speaker`);
            assertTrue(slides[1].quote.length > 0, `${civId} local speaker says nothing`);
        });
    });

    // Temporal and practice reuse the same slot for a status note, not a person.
    it('treats the mode note as a note, never as a speaker', () => {
        ['temporal', 'practice'].forEach(mode => {
            const slides = buildBriefingSlides(mode, 'roman', false);
            assertTrue(!slides.some(s => s.speaker === 'local'), `${mode} produced a local speaker`);
            assertTrue(!!stories[mode].roman.note.label, `${mode} note has no label`);
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
        assertEqual((markup.match(/class="briefing-speech"/g) || []).length, slides.length);
        assertEqual((markup.match(/data-goto="/g) || []).length, slides.length);
    });

    it('hides the controls for a single slide', () => {
        const markup = briefingMarkup([{ speaker: 'hypatia', civId: 'roman', quote: 'q', text: 't' }]);
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
            if (slide.text) {
                assertTrue(!markup.includes(slide.text), 'guidance leaked into the markup');
            }
            if (slide.name) {
                assertTrue(!markup.includes(slide.name), 'a speaker name leaked into the markup');
            }
        });
    });

    it('gives each speaker their own artwork', () => {
        const markup = briefingMarkup(buildBriefingSlides('thematic', 'greek', true));
        assertTrue(markup.includes('href="#oracle-character"'), 'Oracle art missing');
        assertTrue(markup.includes('href="#hypatia"'), 'Hypatia art missing');
        assertTrue(markup.includes('href="#bd-greek"'), 'civilization backdrop missing');
    });

    // The local speaker stands in the place, not beside Hypatia.
    it('shows the place alone on the local speaker slide', () => {
        const local = buildBriefingSlides('thematic', 'greek', false).filter(s => s.speaker === 'local');
        const markup = briefingMarkup(local);
        assertTrue(markup.includes('href="#bd-greek"'), 'backdrop missing');
        assertTrue(!markup.includes('href="#hypatia"'), 'Hypatia must not appear on the local slide');
    });
});

describe('briefing artwork layers', () => {
    // The Oracle's three slides show the same instrument. Sliding that image is
    // motion carrying no information, so they share one layer and it holds still.
    it('gives the Oracle slides a single shared layer', () => {
        const slides = buildBriefingSlides('thematic', 'roman', true);
        const oracle = slides.filter(s => s.speaker === 'oracle');
        assertTrue(oracle.length > 1, 'expected several Oracle slides');
        const keys = new Set(oracle.map(briefingArtKey));
        assertEqual(keys.size, 1, `Oracle slides produced ${keys.size} art keys`);
    });

    it('renders one layer per distinct image, not one per slide', () => {
        const slides = buildBriefingSlides('thematic', 'roman', true);
        const markup = briefingMarkup(slides);
        const layers = (markup.match(/class="briefing-art[ "]/g) || []).length;
        const distinct = new Set(slides.map(briefingArtKey)).size;
        assertEqual(layers, distinct, `${layers} layers for ${distinct} distinct images`);
        assertTrue(layers < slides.length, 'layers should be fewer than slides here');
    });

    it('separates the three speakers into three images', () => {
        const slides = buildBriefingSlides('thematic', 'greek', true);
        assertEqual(new Set(slides.map(briefingArtKey)).size, 3);
    });

    it('keeps Hypatia and the local place apart in the same civilization', () => {
        const slides = buildBriefingSlides('thematic', 'greek', false);
        assertNotEqual(briefingArtKey(slides[0]), briefingArtKey(slides[1]));
    });

    it('does not share artwork across civilizations', () => {
        assertNotEqual(
            briefingArtKey({ speaker: 'hypatia', civId: 'greek' }),
            briefingArtKey({ speaker: 'hypatia', civId: 'mayan' })
        );
    });

    it('points every panel at a layer that exists', () => {
        const markup = briefingMarkup(buildBriefingSlides('thematic', 'roman', true));
        const layerKeys = [...markup.matchAll(/class="briefing-art[^"]*"\s*data-art="([^"]+)"/g)].map(m => m[1]);
        const panelKeys = [...markup.matchAll(/class="briefing-speech"[^>]*data-art="([^"]+)"/g)].map(m => m[1]);
        assertTrue(panelKeys.length > 0, 'no panels found');
        panelKeys.forEach(key => {
            assertTrue(layerKeys.includes(key), `panel references missing layer ${key}`);
        });
    });

    it('marks exactly one layer active at the start', () => {
        const markup = briefingMarkup(buildBriefingSlides('thematic', 'roman', true));
        assertEqual((markup.match(/class="briefing-art active"/g) || []).length, 1);
    });
});
