// ===== GAME STATE =====
const gameState = {
    mode: null,
    currentCivilization: null,
    score: 0,
    currentChallenge: 0,
    totalChallenges: 5,
    startTime: null,
    timerInterval: null,
    hintsUsed: 0,
    correctAnswers: 0,
    oraclePieces: [],
    currentProblem: null,
    timeLimit: null
};

// ===== CIVILIZATIONS DATA =====
const civilizations = {
    roman: {
        id: 'roman',
        name: 'Roman Empire',
        icon: '🏛️',
        difficulty: 'Easy',
        unlocked: true,
        description: 'Help merchants in the Roman Forum calculate prices using Roman numerals.',
        numberSystem: 'Roman Numerals (I, V, X, L, C, D, M)',
        base: 10
    },
    egyptian: {
        id: 'egyptian',
        name: 'Ancient Egypt',
        icon: '🔺',
        difficulty: 'Intermediate',
        unlocked: false,
        description: 'Decipher hieroglyphic numbers in the pyramids.',
        numberSystem: 'Egyptian Hieroglyphic Numerals',
        base: 10
    },
    greek: {
        id: 'greek',
        name: 'Ancient Greece',
        icon: '⚱️',
        difficulty: 'Intermediate',
        unlocked: false,
        description: 'Calculate proportions for building temples.',
        numberSystem: 'Greek Alphabetic Numerals',
        base: 10
    },
    babylonian: {
        id: 'babylonian',
        name: 'Babylon',
        icon: '🌴',
        difficulty: 'Advanced',
        unlocked: false,
        description: 'Use the sexagesimal system to restore the Hanging Gardens.',
        numberSystem: 'Babylonian Base-60 System',
        base: 60
    },
    chinese: {
        id: 'chinese',
        name: 'Han Dynasty',
        icon: '🏯',
        difficulty: 'Advanced',
        unlocked: false,
        description: 'Calculate with counting rods in the imperial market.',
        numberSystem: 'Chinese Counting Rods',
        base: 10
    },
    mayan: {
        id: 'mayan',
        name: 'Maya Civilization',
        icon: '🌿',
        difficulty: 'Expert',
        unlocked: false,
        description: 'Decipher the base-20 vigesimal system of the ancient Maya.',
        numberSystem: 'Maya Vigesimal (Base-20)',
        base: 20
    }
};

// ===== STORY CONTENT =====
const stories = {
    thematic: {
        intro: `<h3>🌟 The Oracle of Numbers</h3>
        <p>You are a young mathematician who has discovered a secret time machine hidden in an ancient temple. Upon activation, you are transported through time to different civilizations.</p>
        <p>Your mission: Help people solve mathematical challenges using their unique number systems while collecting fragments of the mysterious <strong>Oracle of Numbers</strong> - an artifact broken and scattered through time.</p>
        <p>Each civilization holds a piece of the Oracle. Only by completing all challenges can you unlock the ancient wisdom that reveals the true nature of numbers.</p>`,

        roman: {
            title: '🏛️ Romans - Helping in the Roman Forum',
            setting: 'You arrive at the bustling Roman Forum, surrounded by marble columns, statues of emperors, and market stalls filled with goods. A merchant calls out to you for help.',
            objective: 'Assist Marcus, a cloth merchant, in calculating prices and performing transactions using Roman numerals.',
            character: '<strong>Marcus the Merchant:</strong> "Welcome, traveler! The Forum is busy today, and I need help with my calculations. Can you assist me with these transactions?"'
        },

        egyptian: {
            title: '🔺 Ancient Egypt - Deciphering the Pyramids',
            setting: 'You materialize inside the Great Pyramid of Giza. Torches flicker on ancient walls covered in mysterious hieroglyphs. The air is thick with the scent of incense. A royal scribe greets you with urgency.',
            objective: 'Help the royal scribe prepare for the pharaoh\'s grand banquet by calculating quantities using Egyptian hieroglyphic numerals.',
            character: '<strong>Imhotep the Scribe:</strong> "Great mathematician! The pharaoh\'s banquet approaches, and I must ensure our calculations are perfect. The hieroglyphs hold the answers - can you decipher them?"'
        },

        greek: {
            title: '⚱️ Ancient Greece - Building with Proportions',
            setting: 'You arrive at the construction site of the magnificent Parthenon in Athens. Philosophers and architects surround you, discussing the divine proportions and mathematical harmonies that will make this temple eternal.',
            objective: 'Help the master architect calculate proportions and measurements using Greek alphabetic numerals to ensure perfect geometric harmony.',
            character: '<strong>Archimedes:</strong> "Ah, a fellow lover of mathematics! The golden ratio must guide our construction. These calculations require precision - will you help me solve them using our sacred numerals?"'
        },

        babylonian: {
            title: '🌴 Babylon - Restoring the Hanging Gardens',
            setting: 'You arrive in ancient Babylon at the legendary Hanging Gardens, one of the Seven Wonders. The complex irrigation system needs recalculation, and the royal engineers turn to you for help.',
            objective: 'Use the sophisticated Babylonian base-60 (sexagesimal) system to calculate water distribution and resources for maintaining the gardens.',
            character: '<strong>Chief Engineer Nabu-rimanni:</strong> "Welcome, mathematician! Our ancestors developed the most advanced number system - base 60! Help us calculate the precise measurements needed for the gardens\' irrigation."'
        },

        chinese: {
            title: '🏯 Han Dynasty - Calculating in the Imperial Market',
            setting: 'You arrive in the bustling marketplace of Chang\'an during the Han Dynasty. Merchants crowd the streets, selling silk, spices, jade, and countless treasures. An abacus master beckons you to his stall.',
            objective: 'Perform calculations using Chinese counting rod numerals or the suanpan (abacus) to help merchants with their trades and ensure fair exchanges.',
            character: '<strong>Master Liu the Abacus Expert:</strong> "Welcome, honored calculator! Our markets are alive with commerce. Use the ancient art of rod numerals to solve these merchant\'s calculations. Every transaction must be precise!"'
        },

        mayan: {
            title: '🌿 Maya Civilization - Secrets of the Pyramid',
            setting: 'You arrive at the magnificent pyramid of Chichen Itza at dawn. A Maya astronomer is studying the stars, using their remarkable vigesimal number system to track celestial cycles with extraordinary precision.',
            objective: 'Help the astronomer Itzamná calculate offerings and astronomical cycles using the Maya base-20 numeral system of dots, bars, and shells.',
            character: '<strong>Astronomer Itzamná:</strong> "Welcome, seeker of knowledge! Our vigesimal system — base 20 — holds secrets of the cosmos. Dots represent one, bars represent five, and the shell represents zero. Can you master our numbers?"'
        }
    },

    temporal: {
        intro: `<h3>⚡ Guardian of Numbers</h3>
        <p>You are a Guardian of Numbers, and you've discovered a terrible truth: a secret organization called "The Children of Time" is attempting to erase the knowledge of ancient number systems from history.</p>
        <p>Your mission: Race against time to save the mathematical knowledge of ancient civilizations by solving numerical operations before the records are destroyed forever.</p>
        <p>Time is running out. Every second counts!</p>`,

        roman: {
            title: '🔥 Romans - Emergency at the Forum',
            setting: 'The Roman Forum is engulfed in flames! Citizens are fleeing in panic. You must help organize the evacuation by quickly calculating necessary supplies.',
            objective: 'Solve addition and subtraction problems to save valuable records and supplies before they are lost to the fire.',
            character: '<strong>Time Remaining:</strong> You have 3 minutes to complete all challenges!'
        },

        egyptian: {
            title: '📚 Ancient Egypt - Destruction of the Library',
            setting: 'The great Library of Alexandria is crumbling! Ancient papyrus scrolls containing mathematical knowledge are about to be lost forever. You must work quickly to save them.',
            objective: 'Decipher hieroglyphic calculations and save the precious mathematical records before they turn to dust!',
            character: '<strong>Time Remaining:</strong> You have 2.5 minutes to save the ancient knowledge!'
        },

        greek: {
            title: '🔥 Ancient Greece - Threat to Knowledge',
            setting: 'Plato\'s Academy is under attack! A fire threatens to destroy centuries of mathematical philosophy and knowledge. Scrolls containing the wisdom of Pythagoras, Euclid, and Archimedes are turning to ash!',
            objective: 'Solve mathematical problems to save the most precious texts before they are lost to history forever!',
            character: '<strong>Time Remaining:</strong> You have 2.5 minutes before the knowledge is lost!'
        },

        babylonian: {
            title: '💧 Babylon - Agricultural Crisis',
            setting: 'A devastating drought threatens Babylon! The ancient irrigation systems are failing, and crops are dying. The knowledge of water distribution calculations is fading - you must save it!',
            objective: 'Solve base-60 calculations to restore the irrigation system and save the city from starvation!',
            character: '<strong>Time Remaining:</strong> You have 2 minutes to save Babylon\'s agriculture!'
        },

        chinese: {
            title: '🎊 Han Dynasty - Chaos in the Imperial Court',
            setting: 'The Emperor\'s New Year celebration is in jeopardy! A catastrophic miscalculation in the imperial budget threatens to collapse the festivities. Ancient accounting records are being destroyed by rivals!',
            objective: 'Use Chinese numerals to solve financial calculations and save the most important celebration of the year!',
            character: '<strong>Time Remaining:</strong> You have 2 minutes to save the imperial celebration!'
        },

        mayan: {
            title: '🌋 Maya - Eruption at Chichen Itza',
            setting: 'A volcanic eruption threatens the great Maya city of Chichen Itza! Precious stone tablets bearing centuries of mathematical and astronomical knowledge are about to be destroyed by ash and lava flows!',
            objective: 'Solve base-20 calculations to save the Maya mathematical records before the eruption destroys everything!',
            character: '<strong>Time Remaining:</strong> You have 2 minutes to save the ancient Maya knowledge!'
        }
    }
};

// ===== UTILITY =====
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
