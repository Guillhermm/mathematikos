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

    it('defines the Oracle character exactly once', () => {
        const matches = SCENE_SPRITE.match(/<symbol id="oracle-character"/g) || [];
        assertEqual(matches.length, 1);
    });

    it('defines one symbol per civilization plus both characters', () => {
        const open = (SCENE_SPRITE.match(/<symbol\b/g) || []).length;
        assertEqual(open, SCENE_CIV_IDS.length + 2);
    });

    // Every color must be a variable, or the art stops following the civilization
    // theme and dark mode.
    it('uses no literal hex colors', () => {
        const literals = SCENE_SPRITE.match(/(fill|stroke)="#[0-9a-fA-F]{3,8}"/g) || [];
        assertEqual(literals.length, 0, `found ${literals.join(', ')}`);
    });
});

describe('hypatiaSceneArtMarkup', () => {
    SCENE_CIV_IDS.forEach(civId => {
        it(`points at the ${civId} backdrop`, () => {
            assertTrue(
                hypatiaSceneArtMarkup(civId).includes(`href="#bd-${civId}"`),
                `expected href="#bd-${civId}"`
            );
        });
    });

    it('references the shared figure', () => {
        assertTrue(hypatiaSceneArtMarkup('greek').includes('href="#hypatia"'));
    });

    it('carries artwork only, leaving the speech panel to the caller', () => {
        const markup = hypatiaSceneArtMarkup('greek');
        assertTrue(!markup.includes('blockquote'), 'art markup must not carry a quote element');
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

describe('oracleDiscMarkup', () => {
    it('draws one wedge per challenge', () => {
        const markup = oracleDiscMarkup(0, 5);
        assertEqual((markup.match(/class="oracle-wedge/g) || []).length, 5);
    });

    it('fills exactly the recovered fragments', () => {
        const markup = oracleDiscMarkup(3, 5);
        assertEqual((markup.match(/oracle-wedge filled/g) || []).length, 3);
    });

    it('fills nothing at zero', () => {
        assertEqual((oracleDiscMarkup(0, 5).match(/filled/g) || []).length, 0);
    });

    it('fills every wedge when complete', () => {
        assertEqual((oracleDiscMarkup(5, 5).match(/oracle-wedge filled/g) || []).length, 5);
    });

    it('states progress for screen readers', () => {
        assertTrue(oracleDiscMarkup(2, 5).includes('2 of 5 fragments recovered'));
    });

    it('emits no NaN in any wedge path', () => {
        for (let total = 2; total <= 8; total++) {
            const markup = oracleDiscMarkup(total, total);
            assertTrue(!markup.includes('NaN'), `NaN in a ${total}-wedge disc`);
        }
    });
});

describe('oracleWedgePath', () => {
    it('closes every wedge', () => {
        for (let i = 0; i < 5; i++) {
            assertTrue(oracleWedgePath(i, 5).trim().endsWith('Z'));
        }
    });

    // Only a single-wedge disc sweeps past 180 degrees; at two wedges each
    // sector is 175 degrees once the gap is subtracted, so the flag stays clear.
    it('sets the large-arc flag for a single-wedge disc', () => {
        assertTrue(/A46 46 0 1 1/.test(oracleWedgePath(0, 1)), 'expected large-arc flag for 1 wedge');
    });

    it('clears the large-arc flag at two wedges', () => {
        assertTrue(/A46 46 0 0 1/.test(oracleWedgePath(0, 2)), 'a 175 degree sector is not a large arc');
    });

    it('clears the large-arc flag for ordinary sectors', () => {
        assertTrue(/A46 46 0 0 1/.test(oracleWedgePath(0, 5)), 'expected no large-arc flag for 5 wedges');
    });
});

describe('oracleResultSceneMarkup', () => {
    // A nested <svg> inside the scene would size itself to the outer viewport
    // instead of the 120x120 disc grid, so the shapes must be inlined.
    it('nests no second svg element', () => {
        const markup = oracleResultSceneMarkup('greek', 5, 5);
        assertEqual((markup.match(/<svg/g) || []).length, 1);
    });

    it('places the figure and the civilization backdrop', () => {
        const markup = oracleResultSceneMarkup('mayan', 3, 5);
        assertTrue(markup.includes('href="#hypatia"'));
        assertTrue(markup.includes('href="#bd-mayan"'));
    });

    it('shows the fragments recovered so far', () => {
        assertEqual((oracleResultSceneMarkup('roman', 4, 5).match(/oracle-wedge filled/g) || []).length, 4);
    });

    it('states progress for screen readers', () => {
        assertTrue(oracleResultSceneMarkup('roman', 4, 5).includes('4 of 5 Oracle fragments'));
    });
});
