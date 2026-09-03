// ===== HYPATIA SCENE TESTS =====

const SCENE_CIV_IDS = Object.keys(civilizations);

describe('sceneBackdropId', () => {
    SCENE_CIV_IDS.forEach(civId => {
        it(`maps ${civId} to its own backdrop`, () => {
            assertEqual(sceneBackdropId(civId), `bd-${civId}`);
        });
    });

    it('falls back to Greek for an unknown civilization', () => {
        assertEqual(sceneBackdropId('atlantis'), 'bd-greek');
    });

    it('falls back to Greek for undefined', () => {
        assertEqual(sceneBackdropId(undefined), 'bd-greek');
    });

    // A bare `SCENE_BACKDROPS[civId]` would return Object.prototype members here
    // and emit <use href="#function Object() ...">.
    ['constructor', '__proto__', 'toString', 'hasOwnProperty'].forEach(key => {
        it(`does not leak Object.prototype via "${key}"`, () => {
            assertEqual(sceneBackdropId(key), 'bd-greek');
        });
    });
});

describe('scene sprite', () => {
    it('defines the Hypatia figure exactly once', () => {
        const matches = SCENE_SPRITE.match(/<symbol id="hypatia"/g) || [];
        assertEqual(matches.length, 1);
    });

    SCENE_CIV_IDS.forEach(civId => {
        it(`defines a backdrop symbol for ${civId}`, () => {
            assertTrue(
                SCENE_SPRITE.includes(`<symbol id="bd-${civId}"`),
                `missing <symbol id="bd-${civId}">`
            );
        });
    });

    it('has balanced symbol tags', () => {
        const open = (SCENE_SPRITE.match(/<symbol\b/g) || []).length;
        const close = (SCENE_SPRITE.match(/<\/symbol>/g) || []).length;
        assertEqual(open, close, `${open} <symbol> vs ${close} </symbol>`);
    });

    it('defines one symbol per civilization plus the figure', () => {
        const open = (SCENE_SPRITE.match(/<symbol\b/g) || []).length;
        assertEqual(open, SCENE_CIV_IDS.length + 1);
    });

    // Every color must be a variable, or the art stops following the civilization
    // theme and dark mode.
    it('uses no literal hex colors', () => {
        const literals = SCENE_SPRITE.match(/(fill|stroke)="#[0-9a-fA-F]{3,8}"/g) || [];
        assertEqual(literals.length, 0, `found ${literals.join(', ')}`);
    });
});

describe('hypatiaSceneMarkup', () => {
    SCENE_CIV_IDS.forEach(civId => {
        it(`points at the ${civId} backdrop`, () => {
            assertTrue(
                hypatiaSceneMarkup(civId).includes(`href="#bd-${civId}"`),
                `expected href="#bd-${civId}"`
            );
        });
    });

    it('references the shared figure', () => {
        assertTrue(hypatiaSceneMarkup('greek').includes('href="#hypatia"'));
    });

    it('leaves the quote and guidance empty for textContent', () => {
        const markup = hypatiaSceneMarkup('greek');
        assertTrue(markup.includes('<blockquote class="hypatia-scene-quote"></blockquote>'));
        assertTrue(markup.includes('<p class="hypatia-scene-guidance"></p>'));
    });

    it('carries no story text, so nothing authored goes through innerHTML', () => {
        const markup = hypatiaSceneMarkup('greek');
        assertTrue(
            !markup.includes(stories.thematic.greek.hypatia.quote),
            'quote must not be interpolated into the markup'
        );
    });
});

describe('scene coverage', () => {
    it('every civilization with a Hypatia entry has a backdrop', () => {
        Object.keys(stories.thematic).forEach(key => {
            const story = stories.thematic[key];
            if (!story || !story.hypatia) return;
            assertEqual(sceneBackdropId(key), `bd-${key}`, `${key} has no backdrop`);
        });
    });

    it('every backdrop belongs to a real civilization', () => {
        Object.keys(SCENE_BACKDROPS).forEach(civId => {
            assertTrue(
                Object.prototype.hasOwnProperty.call(civilizations, civId),
                `${civId} is not a civilization`
            );
        });
    });
});
