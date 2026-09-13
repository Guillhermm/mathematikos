// ===== ENGLISH =====
// The reference catalog. Every other locale mirrors this key set exactly, which
// tests/i18n.test.js enforces, so a key added here without a translation fails
// the suite rather than reaching a player as English inside another language.

I18N_CATALOGS.en = {

ui: {
    document: {
        title: 'Mathematikos - Journey Through Ancient Numbers',
        description: 'Travel through time and solve mathematical challenges using ancient number systems.'
    },

    common: {
        backToMenu: '← Back to Menu',
        close: 'Close'
    },

    // The two constant voices. A local speaker is named by the story.
    speakers: {
        oracle: 'The Oracle of Numbers',
        hypatia: 'Hypatia of Alexandria'
    },

    menu: {
        settings: 'Settings',
        subtitle: 'Journey Through Ancient Number Systems',
        thematic: 'Thematic Scenes',
        temporal: 'Temporal Challenges',
        practice: 'Practice Mode',
        daily: 'Daily Challenge',
        about: 'About & Origin Story →'
    },

    civSelect: {
        title: 'Select Your Civilization',
        subtitle: 'Uncover the mathematical secrets of the ancients.',
        best: 'Best: {score}'
    },

    difficulty: {
        easy: 'Easy',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        expert: 'Expert'
    },

    story: {
        back: 'Back',
        openCodex: 'Open Codex',
        begin: 'Begin Challenge →',
        scene: 'The scene',
        challengeCount: '{count} challenges'
    },

    game: {
        backToStory: 'Back to story',
        toggleSound: 'Toggle ambient sound',
        answerLabel: 'Your answer',
        answerPlaceholder: 'Tap symbols below',
        storyChip: 'Story',
        guideChip: 'Guide',
        oraclePieces: 'Oracle Pieces Collected:',
        hint: 'Get Hint',
        clear: 'Clear',
        backspace: 'Back',
        submit: 'Submit',
        counter: 'Challenge {current}/{total}',
        sceneCounter: 'Challenge {current} of {total}',
        reversePrompt: 'Write in {civ} numerals',
        reverseSlot: 'Build in {civ} numerals',
        reverseInput: 'Build the numeral using the symbol pad above'
    },

    symbolPad: {
        separator: 'sep',
        position: 'pos'
    },

    feedback: {
        empty: 'Please build an answer or type a number!',
        correct: 'Correct! +{points} points',
        incorrect: 'Incorrect. Try again!',
        incorrectTimed: 'Incorrect. Try again! (-10s)',
        incorrectReveal: 'Not quite! Answer: {answer} = {civAnswer}'
    },

    achievement: {
        rollTitle: 'On a Roll!',
        rollText: 'Three correct answers in a row!',
        masterTitle: 'Master Calculator!',
        masterText: 'All challenges completed!',
        penaltyTitle: 'Time Penalty!',
        penaltyText: '-10 seconds',
        streakTitle: '{count}-Day Streak!',
        streakText: 'Come back tomorrow to keep it going!',
        dailyTitle: 'Daily Challenge Complete!',
        dailyText: 'Come back tomorrow for a new civilization!',
        unlockedTitle: 'New Civilization Unlocked!',
        unlockedText: 'You can now explore {civ}!',
        allCompleteTitle: 'Master of Numbers!',
        allCompleteText: 'You have completed all civilizations! You are a true Guardian of Numbers!'
    },

    results: {
        title: 'Challenge Complete!',
        continue: 'Continue Journey →',
        openCodex: 'Open Codex',
        chooseAnother: 'Choose Another',
        mainMenu: 'Main Menu',
        totalScore: 'Total Score',
        correctAnswers: 'Correct Answers',
        timeTaken: 'Time Taken',
        oraclePieces: 'Oracle Pieces',
        hintsUsed: 'Hints Used',
        collectedTitle: 'Oracle Piece Collected!',
        collectedText: 'You have collected a fragment of the Oracle of Numbers from the {civ}!',
        collectedQuote: '"The wisdom of numbers transcends time..."',
        timeUpTitle: 'Time\'s Up!',
        timeoutMessage: 'The Children of Time have destroyed the records!',
        scoreAchieved: 'Score Achieved',
        challengesCompleted: 'Challenges Completed',
        progress: 'Progress',
        retryMessage: 'Don\'t give up! Try again to save the knowledge of ancient civilizations!'
    },

    daily: {
        title: 'Daily Challenge',
        streak: '{count}-day streak!',
        startStreak: 'Start your streak today!',
        completedTitle: 'You\'ve already completed today\'s challenge!',
        completedText: 'Come back tomorrow for a new civilization.',
        description: 'Today\'s challenge uses the {civ} number system. 5 questions, no time limit. Just show what you\'ve learned!',
        play: '▶ Play Today\'s Challenge'
    },

    help: {
        title: 'How to Play'
    },

    settings: {
        title: 'Settings',
        appearance: 'Appearance',
        language: 'Language',
        system: 'System',
        light: 'Light',
        dark: 'Dark',
        note: 'Language changes apply immediately across the whole game.'
    },

    crossCiv: {
        sceneTitle: 'Cross-Era Conversion Challenge',
        context: 'Convert this {source} numeral into the {target} system.',
        hint: 'The value is {value}. In {target}: {answer}',
        guideTitle: 'From {source} → To {target}',
        guideText: 'Use the {target} symbol pad below to write your answer.',
        slot: 'Build in {target}',
        input: 'Build the {target} numeral using the symbol pad above'
    },

    about: {
        title: 'About Mathematikos'
    }
},

// ── Civilizations ────────────────────────────────────────────────────────────

civ: {
    roman: {
        name: 'Roman Empire',
        description: 'Help merchants in the Roman Forum calculate prices using Roman numerals.',
        numberSystem: 'Roman Numerals (I, V, X, L, C, D, M)'
    },
    egyptian: {
        name: 'Ancient Egypt',
        description: 'Decipher hieroglyphic numbers in the pyramids.',
        numberSystem: 'Egyptian Hieroglyphic Numerals'
    },
    greek: {
        name: 'Ancient Greece',
        description: 'Calculate proportions for building temples.',
        numberSystem: 'Greek Alphabetic Numerals'
    },
    babylonian: {
        name: 'Babylon',
        description: 'Use the sexagesimal system to restore the Hanging Gardens.',
        numberSystem: 'Babylonian Base-60 System'
    },
    chinese: {
        name: 'Han Dynasty',
        description: 'Calculate with counting rods in the imperial market.',
        numberSystem: 'Chinese Counting Rods'
    },
    mayan: {
        name: 'Maya Civilization',
        description: 'Decipher the base-20 vigesimal system of the ancient Maya.',
        numberSystem: 'Maya Vigesimal (Base-20)'
    },
    'hindu-arabic': {
        name: 'House of Wisdom',
        description: 'Discover the number system that unified all others, in 9th-century Baghdad.',
        numberSystem: 'Hindu-Arabic Numerals (٠١٢٣٤٥٦٧٨٩)'
    }
},

// ── Stories ──────────────────────────────────────────────────────────────────

stories: {
    thematic: {
        intro: [
            {
                quote: 'You found the machine in the temple. Good. I have been waiting a long time for someone to switch it on.',
                text: 'I am the Oracle of Numbers. I was whole once, and I held every way that humankind has ever counted.'
            },
            {
                quote: 'Then I broke, and my pieces fell backward through time.',
                text: 'Each civilization you visit is holding one of my fragments, though none of them know it. They only know their own numerals, and they need them counted correctly.'
            },
            {
                quote: 'Help them, and the fragment comes loose.',
                text: 'Recover every piece and I will be whole again, and you will understand what I understand: that all these systems are one question asked in seven languages.'
            }
        ],

        roman: {
            title: 'Romans - Helping in the Roman Forum',
            setting: 'You arrive at the bustling Roman Forum, surrounded by marble columns, statues of emperors, and market stalls filled with goods. A merchant calls out to you for help.',
            objective: 'Assist Marcus, a cloth merchant, in calculating prices and performing transactions using Roman numerals.',
            speaker: {
                name: 'Marcus the Merchant',
                line: 'Welcome, traveler! The Forum is busy today, and I need help with my calculations. Can you assist me with these transactions?'
            },
            hypatia: {
                guidance: 'The Romans built their empire on order, and order begins with counting. Notice how their numerals reflect their values: repetition for accumulation, subtraction for elegance. Begin here, and the rest of history will open to you.'
            }
        },

        egyptian: {
            title: 'Ancient Egypt - Deciphering the Pyramids',
            setting: 'You materialize inside the Great Pyramid of Giza. Torches flicker on ancient walls covered in mysterious hieroglyphs. The air is thick with the scent of incense. A royal scribe greets you with urgency.',
            objective: 'Help the royal scribe prepare for the pharaoh\'s grand banquet by calculating quantities using Egyptian hieroglyphic numerals.',
            speaker: {
                name: 'Imhotep the Scribe',
                line: 'Great mathematician! The pharaoh\'s banquet approaches, and I must ensure our calculations are perfect. The hieroglyphs hold the answers: can you decipher them?'
            },
            hypatia: {
                guidance: 'Egypt\'s number system predates Rome by millennia. Each symbol is a power of ten: count the hieroglyphs and sum their values. The Egyptians were the first to write numbers large enough to build wonders. Walk among their symbols with reverence.'
            }
        },

        greek: {
            title: 'Ancient Greece - Building with Proportions',
            setting: 'You arrive at the construction site of the magnificent Parthenon in Athens. Philosophers and architects surround you, discussing the divine proportions and mathematical harmonies that will make this temple eternal.',
            objective: 'Help the master architect calculate proportions and measurements using Greek alphabetic numerals to ensure perfect geometric harmony.',
            speaker: {
                name: 'Archimedes',
                line: 'Ah, a fellow lover of mathematics! The golden ratio must guide our construction. These calculations require precision. Will you help me solve them using our sacred numerals?'
            },
            hypatia: {
                guidance: 'I was born into this Greek tradition of alphabetic numerals, each letter carrying a numerical soul. My own work built on Diophantus, Ptolemy, and Euclid. In this civilization you will think as the Greeks did: every symbol is also a letter, and every calculation, a kind of poetry.'
            }
        },

        babylonian: {
            title: 'Babylon - Restoring the Hanging Gardens',
            setting: 'You arrive in ancient Babylon at the legendary Hanging Gardens, one of the Seven Wonders. The complex irrigation system needs recalculation, and the royal engineers turn to you for help.',
            objective: 'Use the sophisticated Babylonian base-60 (sexagesimal) system to calculate water distribution and resources for maintaining the gardens.',
            speaker: {
                name: 'Chief Engineer Nabu-rimanni',
                line: 'Welcome, mathematician! Our ancestors developed the most advanced number system, base 60! Help us calculate the precise measurements needed for the gardens\' irrigation.'
            },
            hypatia: {
                guidance: 'Babylon gave us the sixty-second minute and the three-hundred-sixty-degree circle. When you use a clock or a compass, you think in Babylonian. Their base-60 system emerges from the most divisible number the ancient world knew. Watch for groupings of sixty. They are the skeleton of this civilization\'s thought.'
            }
        },

        chinese: {
            title: 'Han Dynasty - Calculating in the Imperial Market',
            setting: 'You arrive in the bustling marketplace of Chang\'an during the Han Dynasty. Merchants crowd the streets, selling silk, spices, jade, and countless treasures. An abacus master beckons you to his stall.',
            objective: 'Perform calculations using Chinese counting rod numerals or the suanpan (abacus) to help merchants with their trades and ensure fair exchanges.',
            speaker: {
                name: 'Master Liu the Abacus Expert',
                line: 'Welcome, honored calculator! Our markets are alive with commerce. Use the ancient art of rod numerals to solve these merchants\' calculations. Every transaction must be precise!'
            },
            hypatia: {
                guidance: 'The Chinese developed a positional decimal system entirely independently of the West, and their suanpan (abacus) could outperform European pen-and-paper arithmetic for centuries. Read the characters from left to right: each named unit (ten, hundred, thousand) anchors the digit before it. The structure is strict but beautiful.'
            }
        },

        mayan: {
            title: 'Maya Civilization - Secrets of the Pyramid',
            setting: 'You arrive at the magnificent pyramid of Chichen Itza at dawn. A Maya astronomer is studying the stars, using their remarkable vigesimal number system to track celestial cycles with extraordinary precision.',
            objective: 'Help the astronomer Itzamná calculate offerings and astronomical cycles using the Maya base-20 numeral system of dots, bars, and shells.',
            speaker: {
                name: 'Astronomer Itzamná',
                line: 'Welcome, seeker of knowledge! Our vigesimal system, base 20, holds secrets of the cosmos. Dots represent one, bars represent five, and the shell represents zero. Can you master our numbers?'
            },
            hypatia: {
                guidance: 'Of all the number systems you have encountered, the Maya stands apart. They invented zero independently, not as a placeholder but as a number. Their calendar calculations rival our best astronomical software. Read from top to bottom; each layer multiplies by twenty. The shell is not nothing. It is everything.'
            }
        },

        'hindu-arabic': {
            title: 'House of Wisdom - The Origin of Our Numbers',
            setting: 'You arrive at the Bayt al-Hikma, the House of Wisdom, in 9th-century Baghdad. Scholars from across the known world fill its halls: Greek, Persian, Indian, and Arab mathematicians working side by side, translating and extending human knowledge. Al-Khwarizmi himself invites you to his writing table.',
            objective: 'Work alongside Al-Khwarizmi to verify calculations using the Hindu-Arabic positional numeral system, the system that will one day become the universal language of mathematics.',
            speaker: {
                name: 'Al-Khwarizmi',
                line: 'Welcome to the House of Wisdom. The Indian scholars brought us a gift: nine symbols and a zero. Together, they can represent any number in the universe. This is not merely arithmetic. It is a new way of thinking. Can you master these symbols?'
            },
            hypatia: {
                guidance: 'You have traveled far, young mathematician. You have seen repetition in Egypt, subtraction in Rome, base-60 in Babylon, alphabets as numbers in Greece, rods in China, and shells in the Americas. All of them are answers to the same question: how do we represent the infinite with the finite? Here, in Baghdad, human civilization found its most elegant answer. These nine symbols and a zero: you already know them. But now you will understand where they came from.'
            }
        }
    },

    temporal: {
        intro: [
            {
                quote: 'Something is eating the record, and it is working backward from today.',
                text: 'They call themselves the Children of Time. They are removing the ancient number systems from history, one civilization at a time, starting with the oldest.'
            },
            {
                quote: 'A system nobody can still read is a system that was never invented.',
                text: 'That is how the erasure works. It does not burn anything. It simply waits until the last person who understood the notation is gone.'
            },
            {
                quote: 'So read it back to me before the record closes.',
                text: 'Every answer you get right restores a calculation they had already taken. You will be working against the clock, because they are.'
            }
        ],

        roman: {
            title: 'Romans - Emergency at the Forum',
            setting: 'The Roman Forum is engulfed in flames! Citizens are fleeing in panic. You must help organize the evacuation by quickly calculating necessary supplies.',
            objective: 'Solve addition and subtraction problems to save valuable records and supplies before they are lost to the fire.',
            note: { label: 'Time Remaining', text: 'You have 3 minutes to complete all challenges!' }
        },

        egyptian: {
            title: 'Ancient Egypt - Destruction of the Library',
            setting: 'The great Library of Alexandria is crumbling! Ancient papyrus scrolls containing mathematical knowledge are about to be lost forever. You must work quickly to save them.',
            objective: 'Decipher hieroglyphic calculations and save the precious mathematical records before they turn to dust!',
            note: { label: 'Time Remaining', text: 'You have 2.5 minutes to save the ancient knowledge!' }
        },

        greek: {
            title: 'Ancient Greece - Threat to Knowledge',
            setting: 'Plato\'s Academy is under attack! A fire threatens to destroy centuries of mathematical philosophy and knowledge. Scrolls containing the wisdom of Pythagoras, Euclid, and Archimedes are turning to ash!',
            objective: 'Solve mathematical problems to save the most precious texts before they are lost to history forever!',
            note: { label: 'Time Remaining', text: 'You have 2.5 minutes before the knowledge is lost!' }
        },

        babylonian: {
            title: 'Babylon - Agricultural Crisis',
            setting: 'A devastating drought threatens Babylon! The ancient irrigation systems are failing, and crops are dying. The knowledge of water distribution calculations is fading: you must save it!',
            objective: 'Solve base-60 calculations to restore the irrigation system and save the city from starvation!',
            note: { label: 'Time Remaining', text: 'You have 2 minutes to save Babylon\'s agriculture!' }
        },

        chinese: {
            title: 'Han Dynasty - Chaos in the Imperial Court',
            setting: 'The Emperor\'s New Year celebration is in jeopardy! A catastrophic miscalculation in the imperial budget threatens to collapse the festivities. Ancient accounting records are being destroyed by rivals!',
            objective: 'Use Chinese numerals to solve financial calculations and save the most important celebration of the year!',
            note: { label: 'Time Remaining', text: 'You have 2 minutes to save the imperial celebration!' }
        },

        mayan: {
            title: 'Maya - Eruption at Chichen Itza',
            setting: 'A volcanic eruption threatens the great Maya city of Chichen Itza! Precious stone tablets bearing centuries of mathematical and astronomical knowledge are about to be destroyed by ash and lava flows!',
            objective: 'Solve base-20 calculations to save the Maya mathematical records before the eruption destroys everything!',
            note: { label: 'Time Remaining', text: 'You have 2 minutes to save the ancient Maya knowledge!' }
        },

        'hindu-arabic': {
            title: 'House of Wisdom - The Library Under Siege',
            setting: 'The Mongol advance threatens Baghdad! Scholars frantically copy manuscripts before the city falls. The Hindu-Arabic numeral system, the most powerful mathematical tool humanity has ever created, must be preserved.',
            objective: 'Solve calculations using Hindu-Arabic numerals to verify and save the most critical mathematical manuscripts before time runs out!',
            note: { label: 'Time Remaining', text: 'You have 2 minutes to save the knowledge of the House of Wisdom!' }
        }
    },

    practice: {
        roman: {
            title: 'Practice - Roman Numerals',
            setting: 'Practice the Roman numeral system at your own pace. No time limit, so focus on understanding.',
            objective: 'Solve problems using Roman numerals. Hints are available and show the correct answer on mistakes.',
            note: { label: 'Practice Mode', text: 'Take your time. Hints are free and mistakes show the correct answer.' },
            hypatia: null
        },
        egyptian: {
            title: 'Practice - Egyptian Hieroglyphics',
            setting: 'Explore Egyptian hieroglyphic numerals without pressure.',
            objective: 'Solve problems using Egyptian numerals. No time limit.',
            note: { label: 'Practice Mode', text: 'Take your time. Hints are free and mistakes show the correct answer.' },
            hypatia: null
        },
        greek: {
            title: 'Practice - Greek Alphabetic Numerals',
            setting: 'Study the Greek alphabetic numeral system without time pressure.',
            objective: 'Solve problems using Greek numerals. No time limit.',
            note: { label: 'Practice Mode', text: 'Take your time. Hints are free and mistakes show the correct answer.' },
            hypatia: null
        },
        babylonian: {
            title: 'Practice - Babylonian Base-60',
            setting: 'Explore the Babylonian sexagesimal system at your own pace.',
            objective: 'Solve base-60 problems. No time limit.',
            note: { label: 'Practice Mode', text: 'Take your time. Hints are free and mistakes show the correct answer.' },
            hypatia: null
        },
        chinese: {
            title: 'Practice - Chinese Numerals',
            setting: 'Study Chinese counting rod numerals without pressure.',
            objective: 'Solve problems using Chinese numerals. No time limit.',
            note: { label: 'Practice Mode', text: 'Take your time. Hints are free and mistakes show the correct answer.' },
            hypatia: null
        },
        mayan: {
            title: 'Practice - Maya Vigesimal',
            setting: 'Explore the Maya base-20 system at your own pace.',
            objective: 'Solve base-20 problems. No time limit.',
            note: { label: 'Practice Mode', text: 'Take your time. Hints are free and mistakes show the correct answer.' },
            hypatia: null
        },
        'hindu-arabic': {
            title: 'Practice - Hindu-Arabic Numerals',
            setting: 'Explore the Eastern Arabic-Indic numeral forms at your own pace.',
            objective: 'Solve problems using Eastern Arabic digits. No time limit.',
            note: { label: 'Practice Mode', text: 'Take your time. Hints are free and mistakes show the correct answer.' },
            hypatia: null
        }
    }
},

// ── Challenge word problems ──────────────────────────────────────────────────
// Separate lists per operation so each language phrases addition and
// subtraction naturally, instead of splicing a translated verb into an
// English sentence frame.

challenge: {
    roman: {
        contexts: {
            plus: [
                'Marcus needs to calculate the total cost of {num1} yards of silk and {num2} yards of linen.',
                'A customer buys {num1} amphorae of wine, then orders {num2} more. How many in all?',
                'The stall has {num1} loaves of bread. Marcus receives {num2} more. How many are there now?',
                'Calculate the sum of these transactions: {num1} denarii and {num2} denarii.',
                'Marcus counts {num1} customers in the morning and {num2} in the afternoon. Total customers?'
            ],
            minus: [
                'Marcus had {num1} yards of cloth and sold {num2} yards today. How much is left?',
                'A customer wants to buy {num1} amphorae of wine, but returns {num2} amphorae. How many does Marcus sell?',
                'The stall has {num1} loaves of bread. Marcus sells {num2}. How many remain?',
                'Calculate the difference of these transactions: {num1} denarii and {num2} denarii.',
                'Marcus counted {num1} customers today, and {num2} of them only browsed. How many bought something?'
            ]
        },
        hint: 'Break down the numerals: {sym1} = {num1}, {sym2} = {num2}. Then calculate: {num1} {operation} {num2} = {answer}'
    },

    egyptian: {
        contexts: {
            plus: [
                'The royal scribe needs to count offerings: {num1} loaves of bread and {num2} jars of honey for the temple.',
                'Calculate the number of stone blocks: {num1} blocks plus {num2} blocks for the pyramid construction.',
                'The pharaoh\'s treasury has {num1} gold pieces. Add {num2} pieces. What is the total?',
                'Count the papyrus scrolls in the library: {num1} scrolls on one shelf, add {num2} from another.',
                'Calculate provisions for the banquet: {num1} portions combined with {num2} portions.'
            ],
            minus: [
                'The royal scribe counts {num1} loaves of bread and sends {num2} to the temple. How many are left?',
                'Calculate the number of stone blocks: {num1} blocks minus {num2} blocks for the pyramid construction.',
                'The pharaoh\'s treasury has {num1} gold pieces. Remove {num2} pieces. What remains?',
                'Count the papyrus scrolls in the library: {num1} scrolls on one shelf, subtract {num2} moved elsewhere.',
                'Calculate provisions for the banquet: {num1} portions reduced by {num2} portions.'
            ]
        },
        hint: 'Count the symbols: {sym1} = {num1}, {sym2} = {num2}. Calculate: {num1} {operation} {num2} = {answer}. Each symbol represents a power of 10!'
    },

    greek: {
        contexts: {
            plus: [
                'The architect needs to calculate the golden ratio for {num1} columns plus {num2} columns for the Parthenon.',
                'Pythagoras asks you to solve: if one side measures {num1} units, and we add {num2} units, what is the result?',
                'Calculate the proportion: {num1} marble blocks combined with {num2} blocks for the temple construction.',
                'The philosopher\'s scroll shows {num1} students at the academy, and {num2} more arrive. Calculate the total.',
                'Mathematical harmony: balance the equation of {num1} lyres and {num2} flutes in the amphitheater.'
            ],
            minus: [
                'The architect needs to calculate the golden ratio for {num1} columns minus {num2} columns for the Parthenon.',
                'Pythagoras asks you to solve: if one side measures {num1} units, and we subtract {num2} units, what is the result?',
                'Calculate the proportion: {num1} marble blocks reduced by {num2} blocks for the temple construction.',
                'The philosopher\'s scroll shows {num1} students at the academy, and {num2} of them leave. Calculate the difference.',
                'Mathematical harmony: balance the equation of {num1} lyres minus {num2} flutes in the amphitheater.'
            ]
        },
        hint: 'Decode the letters: {sym1} = {num1}, {sym2} = {num2}. Then: {num1} {operation} {num2} = {answer}. Remember: each Greek letter represents a specific number!'
    },

    babylonian: {
        contexts: {
            plus: [
                'The royal engineer calculates water distribution: {num1} measures plus {num2} measures for the irrigation canals.',
                'Calculate the resources for the Hanging Gardens: {num1} palm trees combined with {num2} cedar trees.',
                'The astronomer\'s calculation: {num1} celestial observations and {num2} star positions. Compute the result.',
                'Water allocation for agriculture: {num1} units added to {num2} units for the fields.',
                'Temple construction needs: {num1} clay bricks plus {num2} stone blocks. Calculate the total.'
            ],
            minus: [
                'The royal engineer calculates water distribution: {num1} measures minus {num2} measures for the irrigation canals.',
                'Calculate the resources for the Hanging Gardens: {num1} palm trees reduced by {num2} felled cedars.',
                'The astronomer\'s calculation: {num1} celestial observations minus {num2} clouded nights. Compute the result.',
                'Water allocation for agriculture: {num1} units with {num2} units removed for the fields.',
                'Temple construction needs: {num1} clay bricks minus {num2} broken ones. Calculate what is usable.'
            ]
        },
        hint: 'Base-60 system! Each position is 60x the previous. {sym1} = {num1}, {sym2} = {num2}. Calculate: {num1} {operation} {num2} = {answer}. 𒐕=1, 𒌋=10'
    },

    chinese: {
        contexts: {
            plus: [
                'The merchant calculates: {num1} bolts of silk plus {num2} bolts of cotton in the Han Dynasty market.',
                'Calculate the imperial treasury: {num1} taels of silver combined with {num2} taels of gold.',
                'The abacus master asks: {num1} bags of rice and {num2} bags of wheat. What is the result?',
                'Festival preparations: {num1} lanterns added to {num2} paper dragons. Calculate the total.',
                'Counting rods show: {num1} jade pieces plus {num2} bronze coins at the marketplace.'
            ],
            minus: [
                'The merchant calculates: {num1} bolts of silk minus {num2} bolts sold in the Han Dynasty market.',
                'Calculate the imperial treasury: {num1} taels of silver reduced by {num2} taels spent.',
                'The abacus master asks: {num1} bags of rice minus {num2} bags of wheat. What is the result?',
                'Festival preparations: {num1} lanterns with {num2} removed for repair. Calculate the total.',
                'Counting rods show: {num1} jade pieces minus {num2} traded away at the marketplace.'
            ]
        },
        hint: 'Chinese system! {sym1} = {num1}, {sym2} = {num2}. Calculate: {num1} {operation} {num2} = {answer}. 一二三=1,2,3; 十百千萬=10,100,1000,10000'
    },

    mayan: {
        contexts: {
            plus: [
                'The Maya astronomer calculates: {num1} days plus {num2} days in the sacred Tzolk\'in calendar.',
                'Prepare offerings for Kukulcán: {num1} cacao beans combined with {num2} jade pieces.',
                'The scribe records the harvest: {num1} maize cobs added to {num2} squash from the milpa field.',
                'Calculate the pyramid steps: {num1} stones plus {num2} stones for the next level of Chichen Itza.',
                'The merchant counts at Tikal market: {num1} quetzal feathers and {num2} obsidian blades.'
            ],
            minus: [
                'The Maya astronomer calculates: {num1} days minus {num2} days in the sacred Tzolk\'in calendar.',
                'Prepare offerings for Kukulcán: {num1} cacao beans reduced by {num2} given away.',
                'The scribe records the harvest: {num1} maize cobs minus {num2} squash traded from the milpa field.',
                'Calculate the pyramid steps: {num1} stones minus {num2} stones cracked in transport.',
                'The merchant counts at Tikal market: {num1} quetzal feathers minus {num2} sold.'
            ]
        },
        hint: 'Maya vigesimal (base-20)! Dot = 1, bar = 5, shell = 0. {sym1} = {num1}, {sym2} = {num2}. Calculate: {num1} {operation} {num2} = {answer}.'
    },

    'hindu-arabic': {
        contexts: {
            plus: [
                'Al-Khwarizmi records two measurements from the observatory: {num1} and {num2}. What is their sum?',
                'A merchant in the Baghdad bazaar has {num1} dirhams and receives {num2} more. How many are there now?',
                'The House of Wisdom catalogs {num1} Greek manuscripts and {num2} Persian scrolls. How many in total?',
                'An astronomer calculates {num1} degrees for one arc and {num2} for another. What is the total arc?',
                'A translator completes {num1} pages in the morning and {num2} in the evening. What is the daily total?'
            ],
            minus: [
                'Al-Khwarizmi records two measurements from the observatory: {num1} and {num2}. What is their difference?',
                'A merchant in the Baghdad bazaar has {num1} dirhams and spends {num2}. How many remain?',
                'The House of Wisdom catalogs {num1} Greek manuscripts and {num2} Persian scrolls. How many more Greek manuscripts are there?',
                'An astronomer calculates {num1} degrees for one arc and {num2} for another. What is the difference?',
                'A translator completes {num1} pages in the morning and {num2} in the evening. What is the difference?'
            ]
        },
        hint: 'These are Eastern Arabic-Indic numerals: {sym1} = {num1}, {sym2} = {num2}. Calculate: {num1} {operation} {num2} = {answer} → {answerNumeral}'
    }
},

// ── Quick-reference guides ───────────────────────────────────────────────────

guide: {
    roman: {
        title: 'Roman Numerals Quick Reference',
        tip: 'Tip: When a smaller numeral comes before a larger one, subtract it (e.g., IV = 4, IX = 9)'
    },
    egyptian: {
        title: 'Egyptian Hieroglyphic Numerals',
        tip: 'Tip: Count each symbol and multiply by its value, then add them all together!'
    },
    greek: {
        title: 'Greek Alphabetic Numerals',
        tip: 'Tip: Letters are combined to form numbers. ρκγ = 100 + 20 + 3 = 123'
    },
    babylonian: {
        title: 'Babylonian Sexagesimal (Base-60) System',
        symbols: 'Symbols:',
        wedgeOne: '1 (vertical wedge)',
        wedgeTen: '10 (horizontal wedge)',
        wedgeZero: '0 or empty position',
        howItWorks: 'How it works:',
        howItWorksText: 'Numbers are written in positions. Each position to the left is worth 60x more (like our base-10, but base-60!).',
        example: 'Example:',
        tip: 'Tip: Count the wedges in each position, then multiply by powers of 60!'
    },
    chinese: {
        title: 'Chinese Rod Numerals / Suanpan System',
        basicDigits: 'Basic Digits:',
        placeValues: 'Place Values:',
        ten: 'ten',
        hundred: 'hundred',
        thousand: 'thousand',
        tenThousand: 'ten thousand',
        tip: 'Tip: Read from left to right. 三百五十二 = 3x100 + 5x10 + 2 = 352'
    },
    mayan: {
        title: 'Maya Vigesimal (Base-20) System',
        dot: 'dot',
        bar: 'bar',
        shell: 'shell',
        max: 'max = 19',
        tip: 'Tip: Each position is 20x the one below it. Positions stack vertically, with the top position most significant.'
    },
    'hindu-arabic': {
        title: 'Hindu-Arabic Numerals Quick Reference',
        tip: 'This positional system, with a true zero, is the ancestor of the numbers we use today.'
    }
},

// ── Codex ────────────────────────────────────────────────────────────────────

codex: {
    roman: {
        title: 'Roman Numerals',
        period: 'c. 900 BCE – 400 CE',
        region: 'Italian Peninsula, Roman Empire',
        sections: [
            {
                heading: 'Origins',
                text: 'Roman numerals evolved from a simple tally system used by Etruscan and early Latin peoples. The symbols I, V, X likely derive from notches cut in bones or wood: I is a single stroke, V resembles a hand, and X is two V shapes crossed.'
            },
            {
                heading: 'Subtractive Notation',
                text: 'The rule that a smaller numeral placed before a larger one means subtraction (IV = 4, IX = 9) was a late refinement. Earlier Romans often wrote IIII instead of IV, and this "older" form still appears on many clock faces today.'
            },
            {
                heading: 'Limitations',
                text: 'Roman numerals have no zero and no concept of place value. Multiplication and division were extraordinarily difficult, a likely reason why the Romans adopted the abacus for serious calculation. Large numbers like 1,000,000 required invented symbols not in common use.'
            },
            {
                heading: 'Legacy',
                text: 'Roman numerals persist in chapter headings, clock faces, film credits, and the names of monarchs and popes. Super Bowl numbers, Olympic Games, and building cornerstones still use them, a 2,000-year presence in daily life.'
            }
        ]
    },

    egyptian: {
        title: 'Egyptian Hieroglyphic Numerals',
        period: 'c. 3000 BCE – 400 CE',
        region: 'Nile Valley, North Africa',
        sections: [
            {
                heading: 'A Purely Additive System',
                text: 'Egyptian numerals used distinct hieroglyphs for each power of ten: a stroke (1), heel bone (10), coil of rope (100), lotus flower (1,000), bent finger (10,000), tadpole (100,000), and a god with raised arms (1,000,000). Numbers were formed by repeating and combining these: purely additive, with no subtraction or positional value.'
            },
            {
                heading: 'The Rhind Papyrus',
                text: 'The Rhind Mathematical Papyrus (c. 1550 BCE) is one of the oldest mathematical documents in existence. It contains 84 problems in arithmetic and geometry, including unit fractions, area calculations, and volume estimation. The Egyptians worked entirely in unit fractions (1/n), except for 2/3.'
            },
            {
                heading: 'Pi and the Pyramid',
                text: 'Egyptian engineers approximated π as (16/9)² ≈ 3.16, accurate to within 0.6%. The dimensions of the Great Pyramid of Giza encode this value, though whether this was deliberate or coincidental has been debated for centuries.'
            },
            {
                heading: 'Hieratic Script',
                text: 'For everyday writing, Egyptians used "hieratic" numerals, a cursive shorthand version of the hieroglyphs that allowed faster writing on papyrus. The hieratic system used different symbols for 1–9 (not just repeated strokes), making it significantly more compact.'
            }
        ]
    },

    greek: {
        title: 'Greek Alphabetic Numerals',
        period: 'c. 5th century BCE – Byzantine era',
        region: 'Greece, Alexandria, Eastern Mediterranean',
        sections: [
            {
                heading: 'The Milesian System',
                text: 'Greek alphabetic numerals (also called Milesian or Ionic numerals) assigned numerical values to the 24 letters of the Greek alphabet, plus three archaic letters: stigma/digamma (6), koppa (90), and sampi (900). The full alphabet thus represented 1–9, 10–90, and 100–900.'
            },
            {
                heading: 'Hypatia of Alexandria',
                text: 'Hypatia (c. 360–415 CE) was a Neoplatonist philosopher and mathematician who edited and taught from the works of Diophantus, Ptolemy, and Apollonius. She was the last major mathematician of the ancient Alexandrian tradition. Her murder by a Christian mob marked a symbolic end to ancient pagan scholarship in Alexandria.'
            },
            {
                heading: 'Diophantus and Algebra',
                text: 'Diophantus of Alexandria (c. 3rd century CE) wrote the Arithmetica, 13 books of algebraic problems that laid the foundation for what Al-Khwarizmi would later formalize. His notation used Greek alphabetic numerals and proto-algebraic symbols, making him one of the first algebraists in history.'
            },
            {
                heading: 'The Antikythera Mechanism',
                text: 'The Antikythera mechanism (c. 100 BCE), an ancient Greek astronomical calculator, used geared wheels to predict celestial events. Its inscriptions use alphabetic numerals for degrees and calendar divisions, demonstrating how these symbols were embedded in sophisticated scientific instruments.'
            }
        ]
    },

    babylonian: {
        title: 'Babylonian Cuneiform Numerals',
        period: 'c. 2000–500 BCE',
        region: 'Mesopotamia (modern Iraq)',
        sections: [
            {
                heading: 'Base-60: The Sexagesimal System',
                text: 'The Babylonians used a base-60 (sexagesimal) positional system, the most sophisticated numerical system in the ancient world. Why 60? It divides evenly by 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, and 30, more divisors than any smaller number. This made fractions simpler in daily life.'
            },
            {
                heading: 'The Legacy You Use Every Day',
                text: 'The 60-second minute, 60-minute hour, 360-degree circle, and 24-hour day all descend directly from Babylonian mathematics. Every time you look at a clock or compass, you are using a number system 4,000 years old.'
            },
            {
                heading: 'Plimpton 322',
                text: 'Plimpton 322 is a clay tablet dated to c. 1800 BCE that lists Pythagorean triples (integer solutions to a² + b² = c²) over 1,000 years before Pythagoras. Babylonian mathematicians had a deep understanding of right triangles and quadratic equations.'
            },
            {
                heading: 'Positional Notation and Zero',
                text: 'The Babylonians invented positional notation, meaning the value of a symbol depends on its position. They also invented a placeholder symbol (⊙) to indicate an empty positional group, making it the earliest precursor to zero. However, they never used zero as a number in calculations, only as a separator.'
            }
        ]
    },

    chinese: {
        title: 'Chinese Rod Numerals',
        period: 'c. 400 BCE – present (traditional forms)',
        region: 'China, East Asia',
        sections: [
            {
                heading: 'Counting Rods',
                text: 'Chinese mathematicians used physical bamboo or ivory rods laid on a counting board to represent numbers. Vertical rods (⌶) represented units 1–5; a single horizontal rod (一) lay perpendicular for 6. Alternating orientations between columns (vertical, then horizontal) prevented confusion between adjacent digits, a precursor to binary thinking.'
            },
            {
                heading: 'The Suanpan (Abacus)',
                text: 'The Chinese suanpan (算盤), developed around the 2nd century BCE, could perform addition, subtraction, multiplication, division, and square roots faster than European pen-and-paper arithmetic for centuries. Skilled operators could match electronic calculators for basic operations in competitions held as late as 1946.'
            },
            {
                heading: 'Negative Numbers',
                text: 'Chinese mathematicians used red rods for positive numbers and black rods for negative numbers, the earliest known use of negative numbers in calculation. The Nine Chapters on the Mathematical Art (c. 1st century CE) contains rules for arithmetic with negative quantities, over a thousand years before European mathematics accepted them.'
            },
            {
                heading: 'The Nine Chapters',
                text: 'The Jiuzhang Suanshu (Nine Chapters on the Mathematical Art) is a foundational Chinese mathematical text covering practical problems: land measurement, crop distribution, civil engineering, and taxation. It describes Gaussian elimination (row reduction) for solving systems of equations, 1,800 years before Gauss.'
            }
        ]
    },

    mayan: {
        title: 'Maya Vigesimal Numerals',
        period: 'c. 300 BCE – Spanish conquest (1500s CE)',
        region: 'Mesoamerica (Mexico, Guatemala, Belize)',
        sections: [
            {
                heading: 'Base-20 and an Independent Zero',
                text: 'The Maya developed a vigesimal (base-20) positional number system, written vertically from bottom to top. Their zero, a shell symbol, was one of only two independent inventions of zero in history (the other being in South Asia). The Maya zero was not just a placeholder; it was a number used in calculations.'
            },
            {
                heading: 'The Maya Calendar System',
                text: 'The Maya Long Count calendar could specify any date within a 5,125-year cycle (approximately 3114 BCE to 2012 CE) with a five-digit notation. Their astronomical calculations, particularly for Venus cycles (584 days) and lunar months, were accurate to within minutes of arc, without telescopes.'
            },
            {
                heading: 'The Dresden Codex',
                text: 'The Dresden Codex (c. 900–1000 CE) is a pre-Columbian Maya book containing Venus tables that predict the morning and evening star appearances of Venus across 104 years with extraordinary accuracy. It is one of only four surviving Maya codices; the rest were burned by Spanish missionaries.'
            },
            {
                heading: 'Dots, Bars, and Shells',
                text: 'Three symbols encode all Maya numbers: a dot (●) for 1, a bar (━) for 5, and a shell (○) for 0. The elegance of this system, three symbols for any number arranged positionally, is a mathematical achievement of the highest order, and it emerged completely independently of Old World mathematics.'
            }
        ]
    },

    'hindu-arabic': {
        title: 'Hindu-Arabic Numerals',
        period: 'c. 6th century CE (India) → 9th century CE (Baghdad) → 12th century CE (Europe)',
        region: 'India → Persia → Baghdad → Mediterranean → Global',
        sections: [
            {
                heading: 'The Greatest Mathematical Invention',
                text: 'The Hindu-Arabic numeral system, ten symbols (0–9) in a positional base-10 system with a true zero, is arguably the single most impactful invention in the history of mathematics. Every number in science, finance, engineering, and computing today uses this system, directly descended from the Brahmi numerals of ancient India.'
            },
            {
                heading: 'Al-Khwarizmi and the House of Wisdom',
                text: 'Muhammad ibn Musa al-Khwarizmi (c. 780–850 CE) was a Persian mathematician working at the Bayt al-Hikma (House of Wisdom) in Baghdad under the Abbasid Caliphate. His book Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala (The Compendious Book on Calculation by Completion and Balancing) gave us the word "algebra" (al-jabr). A later work on Indian numerals introduced the Hindu-Arabic system to the Islamic world and, through Latin translations, to Europe.'
            },
            {
                heading: 'The Word "Algorithm"',
                text: 'The word "algorithm" derives from "Algoritmi", the Latinized form of Al-Khwarizmi\'s name. When Latin translators described his methods for arithmetic using Indian numerals, they titled their works "Algoritmi dixit..." ("Al-Khwarizmi said..."). His name became a term for any step-by-step calculation procedure, and eventually the foundation concept of computer science.'
            },
            {
                heading: 'Europe\'s Long Resistance',
                text: 'The Hindu-Arabic numerals reached Europe via Spain and Italy in the 12th–13th centuries. Merchants loved them; officials feared them. Florence banned the numerals in 1299, fearing that the ease of modifying the symbol 0 into a 6 or 9 enabled fraud. Despite official resistance, the system\'s practical superiority was undeniable, and it replaced Roman numerals for calculation by the Renaissance.'
            }
        ]
    }
},

// ── About screen ─────────────────────────────────────────────────────────────

about: {
    intro: 'Mathematikos is a free, open educational game created by Guilherme Almeida Zeni. This page documents the project\'s origin (including timestamps predating all known similar products) and the philosophy behind it.',

    creatorHeading: 'The Creator',
    creatorText1: 'Guilherme is a senior software engineer with over 10 years of experience. Mathematikos was born from a personal passion for history and mathematics, and a conviction that there is no good free browser game that teaches ancient number systems as a genuine game experience.',
    creatorText2: 'The game is and will remain free. If it helps you, consider supporting it voluntarily.',

    whyHeading: 'Why These Civilizations?',
    whyLead: 'Each civilization was chosen for its mathematical distinctiveness and cultural significance:',
    whyItems: [
        { name: 'Roman', text: 'The most familiar ancient system; a gentle entry point' },
        { name: 'Egyptian', text: 'Base-10 but fully additive; visual hieroglyphs make it memorable' },
        { name: 'Greek', text: 'Alphabetic numerals; a unique bridge between language and number' },
        { name: 'Babylonian', text: 'Base-60, sexagesimal; the origin of our 60-second minute and 360-degree circle' },
        { name: 'Chinese', text: 'Rod numerals and suanpan (abacus); a sophisticated positional system' },
        { name: 'Maya', text: 'Base-20, vigesimal; one of the few independent inventions of zero' },
        { name: 'Hindu-Arabic', text: 'The grand finale, the system that unified all others and became our modern numerals' }
    ],

    timelineHeading: 'Development Timeline',
    timeline: [
        {
            date: 'Late 2024',
            title: 'The Idea Is Born',
            text: 'During a ChatGPT conversation titled "Jogo de adição histórica" (Portuguese: "Historical Addition Game"), the concept for Mathematikos takes shape: a browser game teaching ancient number systems through time-travel challenges. The name, the civilization list, and the two game modes (Thematic Scenes and Temporal Challenges) are all defined in this session.'
        },
        {
            date: 'October 19, 2024',
            title: 'Prototype Repository Created',
            text: 'The first commit to the prototype repository is made at 22:21 (UTC-3). Eighteen minutes later, a comprehensive design document is committed and pushed the next day, covering the complete game concept, story narrative, civilizations, mechanics, and technology plan. This document is cryptographically timestamped in Git history.',
            proof: 'Prototype first commit: e78660e, Oct 19, 2024, 22:21 UTC-3'
        },
        {
            date: 'October 21–November 6, 2024',
            title: 'First Prototype Built',
            text: 'A working prototype is developed using React, TypeScript, Vite, and Phaser 3. The theme selection system, WebGL shaders per civilization, and introduction scene are implemented. Development spans 19 days across the prototype repository.'
        },
        {
            date: '2025',
            title: 'Mathematicus Board Game Released',
            text: 'A physical board game called Mathematicus is released, covering Babylonian, Egyptian, Chinese, Roman, Mayan, Arabic, and binary numeral systems, a convergent concept developed independently. Mathematikos predates this release by over a year, as evidenced by the 2024 Git history. The two products are complementary, not competitive: Mathematikos is digital and free; Mathematicus is physical and paid.'
        },
        {
            date: '2025',
            title: 'Master\'s Degree in Applied Mathematics Begins',
            text: 'Development of Mathematikos is paused to focus on academic work. The project rests, but the idea does not disappear.'
        },
        {
            date: 'February 15, 2026',
            title: 'Rebuilt as Pure HTML/CSS/JS',
            text: 'Mathematikos is rebuilt from scratch as a zero-dependency browser game in pure HTML, CSS, and ES6 JavaScript. The goal: instant play, no build step, works offline. Roman, Egyptian, Greek, Babylonian, and Chinese civilizations are implemented in a single evening.'
        },
        {
            date: 'March 23, 2026',
            title: 'Maya Civilization & Major Expansion',
            text: 'The Maya vigesimal (base-20) system is added, along with full SVG rendering for all numeral systems, a test suite per civilization, Practice Mode, and reverse challenges (write ancient numerals from Arabic numbers). The codebase is modularized into a clean file structure.'
        },
        {
            date: 'March 25, 2026',
            title: 'Dark Mode & Visual Polish',
            text: 'Comprehensive dark mode support is added, fixing all hardcoded light colors. Inline styles are refactored to CSS classes. The game now looks great in both light and dark themes.'
        },
        {
            date: 'March 25, 2026',
            title: 'Hindu-Arabic Civilization & Full Feature Expansion',
            text: 'The seventh and final civilization is added: Hindu-Arabic numerals from 9th-century Baghdad, the origin story of the number system we use today. The Daily Challenge, Codex (civilization encyclopedia), civilization visual themes, ambient sound, cross-civilization conversion challenges, and PWA (offline play) are all shipped in a single release.'
        }
    ],

    evidenceHeading: 'Evidence & Provenance',
    evidenceText: 'The original 2024 ChatGPT conversation and the mathematikos prototype repository commit history document independent origin. The prototype repository has since been archived.',
    evidenceAlt1: 'ChatGPT conversation titled "Jogo de adição histórica", October 2024',
    evidenceCaption1: 'ChatGPT conversation, "Jogo de adição histórica", October 2024',
    evidenceAlt2: 'Prototype repository showing first commit on October 19, 2024',
    evidenceCaption2: 'Prototype repository, first commit October 19, 2024'
}

};
