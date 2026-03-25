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
    },
    'hindu-arabic': {
        id: 'hindu-arabic',
        name: 'House of Wisdom',
        icon: '🕌',
        difficulty: 'Expert',
        unlocked: false,
        description: 'Discover the number system that unified all others — 9th-century Baghdad.',
        numberSystem: 'Hindu-Arabic Numerals (٠١٢٣٤٥٦٧٨٩)',
        base: 10
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
            character: '<strong>Marcus the Merchant:</strong> "Welcome, traveler! The Forum is busy today, and I need help with my calculations. Can you assist me with these transactions?"',
            hypatia: {
                quote: 'Reserve your right to think, for even to think wrongly is better than not to think at all.',
                guidance: 'The Romans built their empire on order — and order begins with counting. Notice how their numerals reflect their values: repetition for accumulation, subtraction for elegance. Begin here, and the rest of history will open to you.'
            }
        },

        egyptian: {
            title: '🔺 Ancient Egypt - Deciphering the Pyramids',
            setting: 'You materialize inside the Great Pyramid of Giza. Torches flicker on ancient walls covered in mysterious hieroglyphs. The air is thick with the scent of incense. A royal scribe greets you with urgency.',
            objective: 'Help the royal scribe prepare for the pharaoh\'s grand banquet by calculating quantities using Egyptian hieroglyphic numerals.',
            character: '<strong>Imhotep the Scribe:</strong> "Great mathematician! The pharaoh\'s banquet approaches, and I must ensure our calculations are perfect. The hieroglyphs hold the answers - can you decipher them?"',
            hypatia: {
                quote: 'All formal dogmatic religions are fallacious and must never be accepted by self-respecting persons as final.',
                guidance: 'Egypt\'s number system predates Rome by millennia. Each symbol is a power of ten — count the hieroglyphs and sum their values. The Egyptians were the first to write numbers large enough to build wonders. Walk among their symbols with reverence.'
            }
        },

        greek: {
            title: '⚱️ Ancient Greece - Building with Proportions',
            setting: 'You arrive at the construction site of the magnificent Parthenon in Athens. Philosophers and architects surround you, discussing the divine proportions and mathematical harmonies that will make this temple eternal.',
            objective: 'Help the master architect calculate proportions and measurements using Greek alphabetic numerals to ensure perfect geometric harmony.',
            character: '<strong>Archimedes:</strong> "Ah, a fellow lover of mathematics! The golden ratio must guide our construction. These calculations require precision - will you help me solve them using our sacred numerals?"',
            hypatia: {
                quote: 'Fables should be taught as fables, myths as myths, and miracles as poetic fantasies. To teach superstitions as truth is a most terrible thing.',
                guidance: 'I was born into this Greek tradition — alphabetic numerals, each letter carrying a numerical soul. My own work built on Diophantus, Ptolemy, and Euclid. In this civilization you will think as the Greeks did: every symbol is also a letter, and every calculation, a kind of poetry.'
            }
        },

        babylonian: {
            title: '🌴 Babylon - Restoring the Hanging Gardens',
            setting: 'You arrive in ancient Babylon at the legendary Hanging Gardens, one of the Seven Wonders. The complex irrigation system needs recalculation, and the royal engineers turn to you for help.',
            objective: 'Use the sophisticated Babylonian base-60 (sexagesimal) system to calculate water distribution and resources for maintaining the gardens.',
            character: '<strong>Chief Engineer Nabu-rimanni:</strong> "Welcome, mathematician! Our ancestors developed the most advanced number system - base 60! Help us calculate the precise measurements needed for the gardens\' irrigation."',
            hypatia: {
                quote: 'In fact, men will fight for a superstition quite as quickly as for a living truth — often more so, since a superstition is so intangible you cannot get at it to refute it.',
                guidance: 'Babylon gave us the sixty-second minute and the three-hundred-sixty-degree circle. When you use a clock or a compass, you think in Babylonian. Their base-60 system emerges from the most divisible number the ancient world knew. Watch for groupings of sixty — they are the skeleton of this civilization\'s thought.'
            }
        },

        chinese: {
            title: '🏯 Han Dynasty - Calculating in the Imperial Market',
            setting: 'You arrive in the bustling marketplace of Chang\'an during the Han Dynasty. Merchants crowd the streets, selling silk, spices, jade, and countless treasures. An abacus master beckons you to his stall.',
            objective: 'Perform calculations using Chinese counting rod numerals or the suanpan (abacus) to help merchants with their trades and ensure fair exchanges.',
            character: '<strong>Master Liu the Abacus Expert:</strong> "Welcome, honored calculator! Our markets are alive with commerce. Use the ancient art of rod numerals to solve these merchant\'s calculations. Every transaction must be precise!"',
            hypatia: {
                quote: 'Life is an unfoldment, and the further we travel the more truth we can comprehend.',
                guidance: 'The Chinese developed a positional decimal system entirely independently of the West — and their suanpan (abacus) could outperform European pen-and-paper arithmetic for centuries. Read the characters from left to right: each named unit — ten, hundred, thousand — anchors the digit before it. The structure is strict but beautiful.'
            }
        },

        mayan: {
            title: '🌿 Maya Civilization - Secrets of the Pyramid',
            setting: 'You arrive at the magnificent pyramid of Chichen Itza at dawn. A Maya astronomer is studying the stars, using their remarkable vigesimal number system to track celestial cycles with extraordinary precision.',
            objective: 'Help the astronomer Itzamná calculate offerings and astronomical cycles using the Maya base-20 numeral system of dots, bars, and shells.',
            character: '<strong>Astronomer Itzamná:</strong> "Welcome, seeker of knowledge! Our vigesimal system — base 20 — holds secrets of the cosmos. Dots represent one, bars represent five, and the shell represents zero. Can you master our numbers?"',
            hypatia: {
                quote: 'The first step to wisdom is silence; the second is listening.',
                guidance: 'Of all the number systems you have encountered, the Maya stands apart. They invented zero independently — not as a placeholder, but as a number. Their calendar calculations rival our best astronomical software. Read from top to bottom; each layer multiplies by twenty. The shell is not nothing. It is everything.'
            }
        },

        'hindu-arabic': {
            title: '🕌 House of Wisdom - The Origin of Our Numbers',
            setting: 'You arrive at the Bayt al-Hikma — the House of Wisdom — in 9th-century Baghdad. Scholars from across the known world fill its halls: Greek, Persian, Indian, and Arab mathematicians working side by side, translating and extending human knowledge. Al-Khwarizmi himself invites you to his writing table.',
            objective: 'Work alongside Al-Khwarizmi to verify calculations using the Hindu-Arabic positional numeral system — the system that will one day become the universal language of mathematics.',
            character: '<strong>Al-Khwarizmi:</strong> "Welcome to the House of Wisdom. The Indian scholars brought us a gift: nine symbols and a zero. Together, they can represent any number in the universe. This is not merely arithmetic — it is a new way of thinking. Can you master these symbols?"',
            hypatia: {
                quote: 'To rule by fettering the mind through fear of punishment in another world is just as base as to use force.',
                guidance: 'You have traveled far, young mathematician. You have seen repetition in Egypt, subtraction in Rome, base-60 in Babylon, alphabets as numbers in Greece, rods in China, and shells in the Americas. All of them are answers to the same question: how do we represent the infinite with the finite? Here, in Baghdad, human civilization found its most elegant answer. These nine symbols and a zero — you already know them. But now you will understand where they came from.'
            }
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
        },

        'hindu-arabic': {
            title: '📜 House of Wisdom - The Library Under Siege',
            setting: 'The Mongol advance threatens Baghdad! Scholars frantically copy manuscripts before the city falls. The Hindu-Arabic numeral system — the most powerful mathematical tool humanity has ever created — must be preserved.',
            objective: 'Solve calculations using Hindu-Arabic numerals to verify and save the most critical mathematical manuscripts before time runs out!',
            character: '<strong>Time Remaining:</strong> You have 2 minutes to save the knowledge of the House of Wisdom!'
        }
    },

    practice: {
        roman: {
            title: '🏛️ Practice - Roman Numerals',
            setting: 'Practice the Roman numeral system at your own pace. No time limit — focus on understanding.',
            objective: 'Solve problems using Roman numerals. Hints are available and show the correct answer on mistakes.',
            character: '<strong>Practice Mode:</strong> Take your time. Hints are free and mistakes show the correct answer.',
            hypatia: null
        },
        egyptian: {
            title: '🔺 Practice - Egyptian Hieroglyphics',
            setting: 'Explore Egyptian hieroglyphic numerals without pressure.',
            objective: 'Solve problems using Egyptian numerals. No time limit.',
            character: '<strong>Practice Mode:</strong> Take your time. Hints are free and mistakes show the correct answer.',
            hypatia: null
        },
        greek: {
            title: '⚱️ Practice - Greek Alphabetic Numerals',
            setting: 'Study the Greek alphabetic numeral system without time pressure.',
            objective: 'Solve problems using Greek numerals. No time limit.',
            character: '<strong>Practice Mode:</strong> Take your time. Hints are free and mistakes show the correct answer.',
            hypatia: null
        },
        babylonian: {
            title: '🌴 Practice - Babylonian Base-60',
            setting: 'Explore the Babylonian sexagesimal system at your own pace.',
            objective: 'Solve base-60 problems. No time limit.',
            character: '<strong>Practice Mode:</strong> Take your time. Hints are free and mistakes show the correct answer.',
            hypatia: null
        },
        chinese: {
            title: '🏯 Practice - Chinese Numerals',
            setting: 'Study Chinese counting rod numerals without pressure.',
            objective: 'Solve problems using Chinese numerals. No time limit.',
            character: '<strong>Practice Mode:</strong> Take your time. Hints are free and mistakes show the correct answer.',
            hypatia: null
        },
        mayan: {
            title: '🌿 Practice - Maya Vigesimal',
            setting: 'Explore the Maya base-20 system at your own pace.',
            objective: 'Solve base-20 problems. No time limit.',
            character: '<strong>Practice Mode:</strong> Take your time. Hints are free and mistakes show the correct answer.',
            hypatia: null
        },
        'hindu-arabic': {
            title: '🕌 Practice - Hindu-Arabic Numerals',
            setting: 'Explore the Eastern Arabic-Indic numeral forms at your own pace.',
            objective: 'Solve problems using Eastern Arabic digits. No time limit.',
            character: '<strong>Practice Mode:</strong> Take your time. Hints are free and mistakes show the correct answer.',
            hypatia: null
        }
    }
};

// ===== UTILITY =====
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
