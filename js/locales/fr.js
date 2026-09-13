// ===== FRANÇAIS =====
// Mirrors the key set of en.js exactly. tests/i18n.test.js fails on any key
// that is missing, extra, empty, or that drops a {placeholder}.

I18N_CATALOGS.fr = {

ui: {
    document: {
        title: 'Mathematikos - Un voyage à travers les nombres anciens',
        description: 'Voyagez dans le temps et résolvez des défis mathématiques avec les systèmes de numération anciens.'
    },

    common: {
        backToMenu: '← Retour au menu',
        close: 'Fermer'
    },

    // The two constant voices. A local speaker is named by the story.
    speakers: {
        oracle: 'L\'Oracle des Nombres',
        hypatia: 'Hypatie d\'Alexandrie'
    },

    menu: {
        settings: 'Réglages',
        subtitle: 'Un voyage à travers les systèmes de numération anciens',
        thematic: 'Scènes thématiques',
        temporal: 'Défis temporels',
        practice: 'Mode entraînement',
        daily: 'Défi du jour',
        about: 'À propos et origine →'
    },

    civSelect: {
        title: 'Choisissez votre civilisation',
        subtitle: 'Découvrez les secrets mathématiques des anciens.',
        best: 'Record : {score}'
    },

    difficulty: {
        easy: 'Facile',
        intermediate: 'Intermédiaire',
        advanced: 'Avancé',
        expert: 'Expert'
    },

    story: {
        back: 'Retour',
        openCodex: 'Ouvrir le codex',
        begin: 'Commencer le défi →',
        scene: 'La scène',
        challengeCount: '{count} défis'
    },

    game: {
        backToStory: 'Retour à l\'histoire',
        toggleSound: 'Activer ou couper le son d\'ambiance',
        answerLabel: 'Votre réponse',
        answerPlaceholder: 'Touchez les symboles ci-dessous',
        storyChip: 'Histoire',
        guideChip: 'Guide',
        oraclePieces: 'Fragments de l\'Oracle réunis :',
        hint: 'Voir l\'indice',
        clear: 'Effacer',
        backspace: 'Retour',
        submit: 'Valider',
        counter: 'Défi {current}/{total}',
        sceneCounter: 'Défi {current} sur {total}',
        reversePrompt: 'Écrivez en chiffres {civ}',
        reverseSlot: 'Composez en chiffres {civ}',
        reverseInput: 'Composez le chiffre avec le clavier de symboles ci-dessus'
    },

    symbolPad: {
        separator: 'sép',
        position: 'pos'
    },

    feedback: {
        empty: 'Composez une réponse ou saisissez un nombre !',
        correct: 'Correct ! +{points} points',
        incorrect: 'Incorrect. Réessayez !',
        incorrectTimed: 'Incorrect. Réessayez ! (-10 s)',
        incorrectReveal: 'Presque ! Réponse : {answer} = {civAnswer}'
    },

    achievement: {
        rollTitle: 'En pleine forme !',
        rollText: 'Trois bonnes réponses d\'affilée !',
        masterTitle: 'Maître du calcul !',
        masterText: 'Tous les défis sont terminés !',
        penaltyTitle: 'Pénalité de temps !',
        penaltyText: '-10 secondes',
        streakTitle: 'Série de {count} jours !',
        streakText: 'Revenez demain pour la prolonger !',
        dailyTitle: 'Défi du jour terminé !',
        dailyText: 'Revenez demain pour une nouvelle civilisation !',
        unlockedTitle: 'Nouvelle civilisation débloquée !',
        unlockedText: 'Vous pouvez maintenant explorer {civ} !',
        allCompleteTitle: 'Maître des nombres !',
        allCompleteText: 'Vous avez terminé toutes les civilisations ! Vous êtes un véritable Gardien des Nombres !'
    },

    results: {
        title: 'Défi terminé !',
        continue: 'Poursuivre le voyage →',
        openCodex: 'Ouvrir le codex',
        chooseAnother: 'Choisir une autre',
        mainMenu: 'Menu principal',
        totalScore: 'Score total',
        correctAnswers: 'Bonnes réponses',
        timeTaken: 'Temps écoulé',
        oraclePieces: 'Fragments de l\'Oracle',
        hintsUsed: 'Indices utilisés',
        collectedTitle: 'Fragment de l\'Oracle récupéré !',
        collectedText: 'Vous avez récupéré un fragment de l\'Oracle des Nombres auprès de {civ} !',
        collectedQuote: '"La sagesse des nombres traverse le temps..."',
        timeUpTitle: 'Temps écoulé !',
        timeoutMessage: 'Les Enfants du Temps ont détruit les archives !',
        scoreAchieved: 'Score obtenu',
        challengesCompleted: 'Défis terminés',
        progress: 'Progression',
        retryMessage: 'N\'abandonnez pas ! Réessayez pour sauver le savoir des civilisations anciennes.'
    },

    daily: {
        title: 'Défi du jour',
        streak: 'Série de {count} jours !',
        startStreak: 'Commencez votre série aujourd\'hui !',
        completedTitle: 'Vous avez déjà terminé le défi du jour !',
        completedText: 'Revenez demain pour une nouvelle civilisation.',
        description: 'Le défi du jour utilise le système de numération de {civ}. 5 questions, sans limite de temps. Montrez ce que vous avez appris !',
        play: '▶ Jouer le défi du jour'
    },

    help: {
        title: 'Comment jouer'
    },

    settings: {
        title: 'Réglages',
        appearance: 'Apparence',
        language: 'Langue',
        system: 'Système',
        light: 'Clair',
        dark: 'Sombre',
        note: 'Le changement de langue s\'applique immédiatement à tout le jeu.'
    },

    crossCiv: {
        sceneTitle: 'Défi de conversion entre époques',
        context: 'Convertissez ce chiffre {source} dans le système {target}.',
        hint: 'La valeur est {value}. En {target} : {answer}',
        guideTitle: 'De {source} → Vers {target}',
        guideText: 'Utilisez le clavier de symboles {target} ci-dessous pour écrire votre réponse.',
        slot: 'Composez en {target}',
        input: 'Composez le chiffre {target} avec le clavier de symboles ci-dessus'
    },

    about: {
        title: 'À propos de Mathematikos'
    }
},

// ── Civilisations ────────────────────────────────────────────────────────────

civ: {
    roman: {
        name: 'Empire romain',
        description: 'Aidez les marchands du Forum romain à calculer leurs prix avec les chiffres romains.',
        numberSystem: 'Chiffres romains (I, V, X, L, C, D, M)'
    },
    egyptian: {
        name: 'Égypte antique',
        description: 'Déchiffrez les nombres hiéroglyphiques dans les pyramides.',
        numberSystem: 'Chiffres hiéroglyphiques égyptiens'
    },
    greek: {
        name: 'Grèce antique',
        description: 'Calculez des proportions pour bâtir des temples.',
        numberSystem: 'Chiffres alphabétiques grecs'
    },
    babylonian: {
        name: 'Babylone',
        description: 'Utilisez le système sexagésimal pour restaurer les Jardins suspendus.',
        numberSystem: 'Système babylonien en base 60'
    },
    chinese: {
        name: 'Dynastie Han',
        description: 'Calculez avec les baguettes à compter au marché impérial.',
        numberSystem: 'Baguettes à compter chinoises'
    },
    mayan: {
        name: 'Civilisation maya',
        description: 'Déchiffrez le système vigésimal en base 20 des anciens Mayas.',
        numberSystem: 'Vigésimal maya (base 20)'
    },
    'hindu-arabic': {
        name: 'Maison de la Sagesse',
        description: 'Découvrez le système de numération qui a unifié tous les autres, dans le Bagdad du IXe siècle.',
        numberSystem: 'Chiffres indo-arabes (٠١٢٣٤٥٦٧٨٩)'
    }
},

// ── Histoires ────────────────────────────────────────────────────────────────

stories: {
    thematic: {
        intro: [
            {
                quote: 'Vous avez trouvé la machine dans le temple. Bien. J\'attendais depuis longtemps que quelqu\'un l\'allume.',
                text: 'Je suis l\'Oracle des Nombres. J\'étais entier autrefois, et je contenais toutes les façons dont l\'humanité a jamais compté.'
            },
            {
                quote: 'Puis je me suis brisé, et mes fragments sont tombés en arrière dans le temps.',
                text: 'Chaque civilisation que vous visiterez détient l\'un de mes fragments, sans le savoir. Elles ne connaissent que leurs propres chiffres, et elles ont besoin qu\'on les compte correctement.'
            },
            {
                quote: 'Aidez-les, et le fragment se détachera.',
                text: 'Récupérez chaque pièce et je redeviendrai entier, et vous comprendrez ce que je comprends : que tous ces systèmes sont une seule question posée en sept langues.'
            }
        ],

        roman: {
            title: 'Romains - À l\'aide sur le Forum romain',
            setting: 'Vous arrivez sur le Forum romain animé, entouré de colonnes de marbre, de statues d\'empereurs et d\'étals chargés de marchandises. Un marchand vous appelle à l\'aide.',
            objective: 'Aidez Marcus, marchand de tissus, à calculer ses prix et à réaliser ses transactions avec les chiffres romains.',
            speaker: {
                name: 'Marcus le marchand',
                line: 'Bienvenue, voyageur ! Le Forum est bondé aujourd\'hui et j\'ai besoin d\'aide pour mes comptes. Pouvez-vous m\'aider avec ces transactions ?'
            },
            hypatia: {
                guidance: 'Les Romains ont bâti leur empire sur l\'ordre, et l\'ordre commence par le dénombrement. Voyez comme leurs chiffres reflètent leurs valeurs : la répétition pour accumuler, la soustraction pour l\'élégance. Commencez ici, et le reste de l\'histoire s\'ouvrira à vous.'
            }
        },

        egyptian: {
            title: 'Égypte antique - Déchiffrer les pyramides',
            setting: 'Vous vous matérialisez dans la grande pyramide de Gizeh. Des torches vacillent sur des murs anciens couverts de hiéroglyphes mystérieux. L\'air est chargé d\'encens. Un scribe royal vous accueille avec urgence.',
            objective: 'Aidez le scribe royal à préparer le grand banquet du pharaon en calculant les quantités avec les chiffres hiéroglyphiques égyptiens.',
            speaker: {
                name: 'Imhotep le scribe',
                line: 'Grand mathématicien ! Le banquet du pharaon approche et je dois m\'assurer que nos calculs sont parfaits. Les hiéroglyphes détiennent les réponses : pouvez-vous les déchiffrer ?'
            },
            hypatia: {
                guidance: 'Le système de numération égyptien précède Rome de plusieurs millénaires. Chaque symbole est une puissance de dix : comptez les hiéroglyphes et additionnez leurs valeurs. Les Égyptiens furent les premiers à écrire des nombres assez grands pour bâtir des merveilles. Marchez parmi leurs symboles avec respect.'
            }
        },

        greek: {
            title: 'Grèce antique - Bâtir avec les proportions',
            setting: 'Vous arrivez sur le chantier du magnifique Parthénon, à Athènes. Philosophes et architectes vous entourent, débattant des proportions divines et des harmonies mathématiques qui rendront ce temple éternel.',
            objective: 'Aidez l\'architecte en chef à calculer proportions et mesures avec les chiffres alphabétiques grecs, pour une harmonie géométrique parfaite.',
            speaker: {
                name: 'Archimède',
                line: 'Ah, un autre amoureux des mathématiques ! Le nombre d\'or doit guider notre construction. Ces calculs exigent de la précision. M\'aiderez-vous à les résoudre avec nos chiffres sacrés ?'
            },
            hypatia: {
                guidance: 'Je suis née dans cette tradition grecque des chiffres alphabétiques, où chaque lettre porte une âme numérique. Mon propre travail est parti de Diophante, Ptolémée et Euclide. Dans cette civilisation, vous penserez comme les Grecs : chaque symbole est aussi une lettre, et chaque calcul, une forme de poésie.'
            }
        },

        babylonian: {
            title: 'Babylone - Restaurer les Jardins suspendus',
            setting: 'Vous arrivez dans l\'antique Babylone, aux légendaires Jardins suspendus, l\'une des Sept Merveilles. Le système d\'irrigation complexe doit être recalculé, et les ingénieurs royaux se tournent vers vous.',
            objective: 'Utilisez le système babylonien en base 60 (sexagésimal) pour calculer la distribution de l\'eau et les ressources nécessaires à l\'entretien des jardins.',
            speaker: {
                name: 'Ingénieur en chef Nabu-rimanni',
                line: 'Bienvenue, mathématicien ! Nos ancêtres ont mis au point le système de numération le plus avancé, la base 60 ! Aidez-nous à calculer les mesures exactes pour l\'irrigation des jardins.'
            },
            hypatia: {
                guidance: 'Babylone nous a donné la minute de soixante secondes et le cercle de trois cent soixante degrés. Quand vous regardez une horloge ou une boussole, vous pensez en babylonien. Leur base 60 naît du nombre le plus divisible que connaissait le monde antique. Guettez les groupes de soixante. Ils sont le squelette de la pensée de cette civilisation.'
            }
        },

        chinese: {
            title: 'Dynastie Han - Calculer au marché impérial',
            setting: 'Vous arrivez au marché animé de Chang\'an, sous la dynastie Han. Les marchands envahissent les rues, vendant soie, épices, jade et trésors innombrables. Un maître de l\'abaque vous fait signe depuis son étal.',
            objective: 'Effectuez des calculs avec les baguettes à compter chinoises ou le suanpan (abaque) pour aider les marchands dans leurs échanges et garantir des transactions justes.',
            speaker: {
                name: 'Maître Liu, expert de l\'abaque',
                line: 'Bienvenue, honorable calculateur ! Nos marchés débordent de commerce. Utilisez l\'art ancien des baguettes pour résoudre les comptes de ces marchands. Chaque transaction doit être exacte !'
            },
            hypatia: {
                guidance: 'Les Chinois ont développé un système décimal positionnel de façon totalement indépendante de l\'Occident, et leur suanpan (abaque) a surpassé pendant des siècles l\'arithmétique européenne au papier et à la plume. Lisez les caractères de gauche à droite : chaque unité nommée (dix, cent, mille) ancre le chiffre qui la précède. La structure est stricte, mais belle.'
            }
        },

        mayan: {
            title: 'Civilisation maya - Les secrets de la pyramide',
            setting: 'Vous arrivez à l\'aube devant la magnifique pyramide de Chichén Itzá. Un astronome maya étudie les étoiles et utilise son remarquable système vigésimal pour suivre les cycles célestes avec une précision extraordinaire.',
            objective: 'Aidez l\'astronome Itzamná à calculer offrandes et cycles astronomiques avec le système maya en base 20, fait de points, de barres et de coquilles.',
            speaker: {
                name: 'Astronome Itzamná',
                line: 'Bienvenue, chercheur de savoir ! Notre système vigésimal, en base 20, renferme les secrets du cosmos. Les points valent un, les barres valent cinq et la coquille représente le zéro. Saurez-vous maîtriser nos nombres ?'
            },
            hypatia: {
                guidance: 'De tous les systèmes de numération que vous avez rencontrés, le maya est à part. Ils ont inventé le zéro de façon indépendante, non comme marqueur de position mais comme nombre. Leurs calculs calendaires rivalisent avec nos meilleurs logiciels d\'astronomie. Lisez de haut en bas ; chaque couche multiplie par vingt. La coquille n\'est pas rien. Elle est tout.'
            }
        },

        'hindu-arabic': {
            title: 'Maison de la Sagesse - L\'origine de nos nombres',
            setting: 'Vous arrivez à la Bayt al-Hikma, la Maison de la Sagesse, dans le Bagdad du IXe siècle. Des savants venus du monde entier emplissent ses salles : mathématiciens grecs, perses, indiens et arabes travaillant côte à côte, traduisant et élargissant le savoir humain. Al-Khwarizmi lui-même vous invite à sa table de travail.',
            objective: 'Travaillez aux côtés d\'Al-Khwarizmi pour vérifier des calculs avec le système positionnel indo-arabe, celui qui deviendra un jour la langue universelle des mathématiques.',
            speaker: {
                name: 'Al-Khwarizmi',
                line: 'Bienvenue à la Maison de la Sagesse. Les savants indiens nous ont apporté un présent : neuf symboles et un zéro. Ensemble, ils peuvent représenter n\'importe quel nombre de l\'univers. Ce n\'est pas seulement de l\'arithmétique. C\'est une nouvelle façon de penser. Saurez-vous maîtriser ces symboles ?'
            },
            hypatia: {
                guidance: 'Vous avez voyagé loin, jeune mathématicien. Vous avez vu la répétition en Égypte, la soustraction à Rome, la base 60 à Babylone, les alphabets devenus nombres en Grèce, les baguettes en Chine et les coquilles dans les Amériques. Toutes sont des réponses à la même question : comment représenter l\'infini avec le fini ? Ici, à Bagdad, la civilisation humaine a trouvé sa réponse la plus élégante. Ces neuf symboles et ce zéro : vous les connaissez déjà. Mais vous allez comprendre d\'où ils viennent.'
            }
        }
    },

    temporal: {
        intro: [
            {
                quote: 'Quelque chose dévore les archives, et remonte le temps à partir d\'aujourd\'hui.',
                text: 'Ils se nomment les Enfants du Temps. Ils effacent de l\'histoire les systèmes de numération anciens, une civilisation à la fois, en commençant par la plus ancienne.'
            },
            {
                quote: 'Un système que plus personne ne sait lire est un système qui n\'a jamais été inventé.',
                text: 'C\'est ainsi que l\'effacement opère. Il ne brûle rien. Il attend simplement que disparaisse la dernière personne qui comprenait la notation.'
            },
            {
                quote: 'Alors relisez-la-moi avant que les archives ne se referment.',
                text: 'Chaque bonne réponse restitue un calcul qu\'ils avaient déjà emporté. Vous travaillerez contre la montre, parce qu\'eux aussi.'
            }
        ],

        roman: {
            title: 'Romains - Urgence au Forum',
            setting: 'Le Forum romain est en flammes ! Les citoyens fuient, paniqués. Vous devez aider à organiser l\'évacuation en calculant rapidement les vivres nécessaires.',
            objective: 'Résolvez des additions et des soustractions pour sauver archives et vivres précieux avant que le feu ne les emporte.',
            note: { label: 'Temps restant', text: 'Vous avez 3 minutes pour terminer tous les défis !' }
        },

        egyptian: {
            title: 'Égypte antique - Destruction de la bibliothèque',
            setting: 'La grande bibliothèque d\'Alexandrie s\'effondre ! D\'anciens rouleaux de papyrus contenant un savoir mathématique sont sur le point d\'être perdus à jamais. Vous devez agir vite pour les sauver.',
            objective: 'Déchiffrez des calculs hiéroglyphiques et sauvez ces précieuses archives mathématiques avant qu\'elles ne tombent en poussière !',
            note: { label: 'Temps restant', text: 'Vous avez 2,5 minutes pour sauver le savoir ancien !' }
        },

        greek: {
            title: 'Grèce antique - Menace sur le savoir',
            setting: 'L\'Académie de Platon est attaquée ! Un incendie menace de détruire des siècles de philosophie et de savoir mathématique. Les rouleaux contenant la sagesse de Pythagore, Euclide et Archimède partent en cendres !',
            objective: 'Résolvez des problèmes mathématiques pour sauver les textes les plus précieux avant qu\'ils ne soient perdus à jamais !',
            note: { label: 'Temps restant', text: 'Vous avez 2,5 minutes avant que le savoir ne disparaisse !' }
        },

        babylonian: {
            title: 'Babylone - Crise agricole',
            setting: 'Une sécheresse dévastatrice menace Babylone ! Les anciens systèmes d\'irrigation défaillent et les cultures meurent. Le savoir des calculs de distribution de l\'eau s\'éteint : vous devez le sauver !',
            objective: 'Résolvez des calculs en base 60 pour rétablir l\'irrigation et sauver la ville de la famine !',
            note: { label: 'Temps restant', text: 'Vous avez 2 minutes pour sauver l\'agriculture de Babylone !' }
        },

        chinese: {
            title: 'Dynastie Han - Chaos à la cour impériale',
            setting: 'La fête du Nouvel An de l\'empereur est compromise ! Une erreur catastrophique dans le budget impérial menace de faire s\'effondrer les festivités. Des rivaux détruisent d\'anciens registres comptables !',
            objective: 'Utilisez les chiffres chinois pour résoudre des calculs financiers et sauver la plus importante célébration de l\'année !',
            note: { label: 'Temps restant', text: 'Vous avez 2 minutes pour sauver la célébration impériale !' }
        },

        mayan: {
            title: 'Mayas - Éruption à Chichén Itzá',
            setting: 'Une éruption volcanique menace la grande cité maya de Chichén Itzá ! De précieuses tablettes de pierre portant des siècles de savoir mathématique et astronomique vont être détruites par les cendres et la lave !',
            objective: 'Résolvez des calculs en base 20 pour sauver les archives mathématiques mayas avant que l\'éruption ne détruise tout !',
            note: { label: 'Temps restant', text: 'Vous avez 2 minutes pour sauver le savoir maya !' }
        },

        'hindu-arabic': {
            title: 'Maison de la Sagesse - La bibliothèque assiégée',
            setting: 'L\'avancée mongole menace Bagdad ! Les savants recopient frénétiquement les manuscrits avant la chute de la ville. Le système de numération indo-arabe, l\'outil mathématique le plus puissant que l\'humanité ait créé, doit être préservé.',
            objective: 'Résolvez des calculs en chiffres indo-arabes pour vérifier et sauver les manuscrits mathématiques les plus importants avant la fin du temps imparti !',
            note: { label: 'Temps restant', text: 'Vous avez 2 minutes pour sauver le savoir de la Maison de la Sagesse !' }
        }
    },

    practice: {
        roman: {
            title: 'Entraînement - Chiffres romains',
            setting: 'Entraînez-vous aux chiffres romains à votre rythme. Sans limite de temps, pour vous concentrer sur la compréhension.',
            objective: 'Résolvez des problèmes en chiffres romains. Les indices sont disponibles et les erreurs révèlent la bonne réponse.',
            note: { label: 'Mode entraînement', text: 'Prenez votre temps. Les indices sont gratuits et les erreurs révèlent la bonne réponse.' },
            hypatia: null
        },
        egyptian: {
            title: 'Entraînement - Hiéroglyphes égyptiens',
            setting: 'Explorez les chiffres hiéroglyphiques égyptiens sans pression.',
            objective: 'Résolvez des problèmes en chiffres égyptiens. Sans limite de temps.',
            note: { label: 'Mode entraînement', text: 'Prenez votre temps. Les indices sont gratuits et les erreurs révèlent la bonne réponse.' },
            hypatia: null
        },
        greek: {
            title: 'Entraînement - Chiffres alphabétiques grecs',
            setting: 'Étudiez le système alphabétique grec sans pression de temps.',
            objective: 'Résolvez des problèmes en chiffres grecs. Sans limite de temps.',
            note: { label: 'Mode entraînement', text: 'Prenez votre temps. Les indices sont gratuits et les erreurs révèlent la bonne réponse.' },
            hypatia: null
        },
        babylonian: {
            title: 'Entraînement - Base 60 babylonienne',
            setting: 'Explorez le système sexagésimal babylonien à votre rythme.',
            objective: 'Résolvez des problèmes en base 60. Sans limite de temps.',
            note: { label: 'Mode entraînement', text: 'Prenez votre temps. Les indices sont gratuits et les erreurs révèlent la bonne réponse.' },
            hypatia: null
        },
        chinese: {
            title: 'Entraînement - Chiffres chinois',
            setting: 'Étudiez les baguettes à compter chinoises sans pression.',
            objective: 'Résolvez des problèmes en chiffres chinois. Sans limite de temps.',
            note: { label: 'Mode entraînement', text: 'Prenez votre temps. Les indices sont gratuits et les erreurs révèlent la bonne réponse.' },
            hypatia: null
        },
        mayan: {
            title: 'Entraînement - Vigésimal maya',
            setting: 'Explorez le système maya en base 20 à votre rythme.',
            objective: 'Résolvez des problèmes en base 20. Sans limite de temps.',
            note: { label: 'Mode entraînement', text: 'Prenez votre temps. Les indices sont gratuits et les erreurs révèlent la bonne réponse.' },
            hypatia: null
        },
        'hindu-arabic': {
            title: 'Entraînement - Chiffres indo-arabes',
            setting: 'Explorez les formes orientales des chiffres arabo-indiens à votre rythme.',
            objective: 'Résolvez des problèmes avec les chiffres arabes orientaux. Sans limite de temps.',
            note: { label: 'Mode entraînement', text: 'Prenez votre temps. Les indices sont gratuits et les erreurs révèlent la bonne réponse.' },
            hypatia: null
        }
    }
},

// ── Problèmes ────────────────────────────────────────────────────────────────

challenge: {
    roman: {
        contexts: {
            plus: [
                'Marcus doit calculer le coût total de {num1} coudées de soie et {num2} coudées de lin.',
                'Un client achète {num1} amphores de vin, puis en commande {num2} de plus. Combien cela fait-il en tout ?',
                'L\'étal compte {num1} pains. Marcus en reçoit {num2} de plus. Combien y en a-t-il maintenant ?',
                'Calculez la somme de ces transactions : {num1} deniers et {num2} deniers.',
                'Marcus compte {num1} clients le matin et {num2} l\'après-midi. Total des clients ?'
            ],
            minus: [
                'Marcus avait {num1} coudées de tissu et en a vendu {num2} aujourd\'hui. Combien lui en reste-t-il ?',
                'Un client veut acheter {num1} amphores de vin, mais en rend {num2}. Combien Marcus en vend-il ?',
                'L\'étal compte {num1} pains. Marcus en vend {num2}. Combien en reste-t-il ?',
                'Calculez la différence de ces transactions : {num1} deniers et {num2} deniers.',
                'Marcus a compté {num1} clients aujourd\'hui, dont {num2} n\'ont fait que regarder. Combien ont acheté ?'
            ]
        },
        hint: 'Décomposez les chiffres : {sym1} = {num1}, {sym2} = {num2}. Puis calculez : {num1} {operation} {num2} = {answer}'
    },

    egyptian: {
        contexts: {
            plus: [
                'Le scribe royal doit compter les offrandes : {num1} pains et {num2} jarres de miel pour le temple.',
                'Calculez le nombre de blocs de pierre : {num1} blocs plus {num2} blocs pour la construction de la pyramide.',
                'Le trésor du pharaon compte {num1} pièces d\'or. Ajoutez-en {num2}. Quel est le total ?',
                'Comptez les rouleaux de papyrus de la bibliothèque : {num1} rouleaux sur une étagère, ajoutez-en {num2} d\'une autre.',
                'Calculez les provisions du banquet : {num1} portions associées à {num2} portions.'
            ],
            minus: [
                'Le scribe royal compte {num1} pains et en envoie {num2} au temple. Combien en reste-t-il ?',
                'Calculez le nombre de blocs de pierre : {num1} blocs moins {num2} blocs pour la construction de la pyramide.',
                'Le trésor du pharaon compte {num1} pièces d\'or. Retirez-en {num2}. Que reste-t-il ?',
                'Comptez les rouleaux de papyrus de la bibliothèque : {num1} rouleaux sur une étagère, retirez-en {num2} déplacés ailleurs.',
                'Calculez les provisions du banquet : {num1} portions réduites de {num2} portions.'
            ]
        },
        hint: 'Comptez les symboles : {sym1} = {num1}, {sym2} = {num2}. Calculez : {num1} {operation} {num2} = {answer}. Chaque symbole représente une puissance de 10 !'
    },

    greek: {
        contexts: {
            plus: [
                'L\'architecte doit calculer le nombre d\'or pour {num1} colonnes plus {num2} colonnes du Parthénon.',
                'Pythagore vous demande : si un côté mesure {num1} unités et qu\'on ajoute {num2} unités, quel est le résultat ?',
                'Calculez la proportion : {num1} blocs de marbre associés à {num2} blocs pour la construction du temple.',
                'Le rouleau du philosophe indique {num1} élèves à l\'académie, et {num2} autres arrivent. Calculez le total.',
                'Harmonie mathématique : équilibrez l\'équation de {num1} lyres et {num2} flûtes dans l\'amphithéâtre.'
            ],
            minus: [
                'L\'architecte doit calculer le nombre d\'or pour {num1} colonnes moins {num2} colonnes du Parthénon.',
                'Pythagore vous demande : si un côté mesure {num1} unités et qu\'on retire {num2} unités, quel est le résultat ?',
                'Calculez la proportion : {num1} blocs de marbre réduits de {num2} blocs pour la construction du temple.',
                'Le rouleau du philosophe indique {num1} élèves à l\'académie, et {num2} d\'entre eux partent. Calculez la différence.',
                'Harmonie mathématique : équilibrez l\'équation de {num1} lyres moins {num2} flûtes dans l\'amphithéâtre.'
            ]
        },
        hint: 'Décodez les lettres : {sym1} = {num1}, {sym2} = {num2}. Alors : {num1} {operation} {num2} = {answer}. Rappel : chaque lettre grecque représente un nombre précis !'
    },

    babylonian: {
        contexts: {
            plus: [
                'L\'ingénieur royal calcule la distribution de l\'eau : {num1} mesures plus {num2} mesures pour les canaux d\'irrigation.',
                'Calculez les ressources des Jardins suspendus : {num1} palmiers associés à {num2} cèdres.',
                'Le calcul de l\'astronome : {num1} observations célestes et {num2} positions d\'étoiles. Calculez le résultat.',
                'Répartition de l\'eau pour l\'agriculture : {num1} unités ajoutées à {num2} unités pour les champs.',
                'La construction du temple demande {num1} briques d\'argile plus {num2} blocs de pierre. Calculez le total.'
            ],
            minus: [
                'L\'ingénieur royal calcule la distribution de l\'eau : {num1} mesures moins {num2} mesures pour les canaux d\'irrigation.',
                'Calculez les ressources des Jardins suspendus : {num1} palmiers moins {num2} cèdres abattus.',
                'Le calcul de l\'astronome : {num1} observations célestes moins {num2} nuits nuageuses. Calculez le résultat.',
                'Répartition de l\'eau pour l\'agriculture : {num1} unités dont {num2} unités retirées des champs.',
                'La construction du temple demande {num1} briques d\'argile moins {num2} cassées. Calculez ce qui est utilisable.'
            ]
        },
        hint: 'Système en base 60 ! Chaque position vaut 60x la précédente. {sym1} = {num1}, {sym2} = {num2}. Calculez : {num1} {operation} {num2} = {answer}. 𒐕=1, 𒌋=10'
    },

    chinese: {
        contexts: {
            plus: [
                'Le marchand calcule : {num1} pièces de soie plus {num2} pièces de coton au marché de la dynastie Han.',
                'Calculez le trésor impérial : {num1} taels d\'argent associés à {num2} taels d\'or.',
                'Le maître de l\'abaque demande : {num1} sacs de riz et {num2} sacs de blé. Quel est le résultat ?',
                'Préparatifs de la fête : {num1} lanternes ajoutées à {num2} dragons de papier. Calculez le total.',
                'Les baguettes à compter indiquent : {num1} pièces de jade plus {num2} pièces de bronze au marché.'
            ],
            minus: [
                'Le marchand calcule : {num1} pièces de soie moins {num2} pièces vendues au marché de la dynastie Han.',
                'Calculez le trésor impérial : {num1} taels d\'argent réduits de {num2} taels dépensés.',
                'Le maître de l\'abaque demande : {num1} sacs de riz moins {num2} sacs de blé. Quel est le résultat ?',
                'Préparatifs de la fête : {num1} lanternes dont {num2} retirées pour réparation. Calculez le total.',
                'Les baguettes à compter indiquent : {num1} pièces de jade moins {num2} échangées au marché.'
            ]
        },
        hint: 'Système chinois ! {sym1} = {num1}, {sym2} = {num2}. Calculez : {num1} {operation} {num2} = {answer}. 一二三=1,2,3 ; 十百千萬=10,100,1000,10000'
    },

    mayan: {
        contexts: {
            plus: [
                'L\'astronome maya calcule : {num1} jours plus {num2} jours dans le calendrier sacré Tzolk\'in.',
                'Préparez les offrandes pour Kukulcán : {num1} fèves de cacao associées à {num2} pièces de jade.',
                'Le scribe consigne la récolte : {num1} épis de maïs ajoutés à {num2} courges de la milpa.',
                'Calculez les marches de la pyramide : {num1} pierres plus {num2} pierres pour le niveau suivant de Chichén Itzá.',
                'Le marchand compte au marché de Tikal : {num1} plumes de quetzal et {num2} lames d\'obsidienne.'
            ],
            minus: [
                'L\'astronome maya calcule : {num1} jours moins {num2} jours dans le calendrier sacré Tzolk\'in.',
                'Préparez les offrandes pour Kukulcán : {num1} fèves de cacao moins {num2} qui ont été données.',
                'Le scribe consigne la récolte : {num1} épis de maïs moins {num2} courges échangées de la milpa.',
                'Calculez les marches de la pyramide : {num1} pierres moins {num2} pierres fendues pendant le transport.',
                'Le marchand compte au marché de Tikal : {num1} plumes de quetzal moins {num2} vendues.'
            ]
        },
        hint: 'Vigésimal maya (base 20) ! Point = 1, barre = 5, coquille = 0. {sym1} = {num1}, {sym2} = {num2}. Calculez : {num1} {operation} {num2} = {answer}.'
    },

    'hindu-arabic': {
        contexts: {
            plus: [
                'Al-Khwarizmi note deux mesures de l\'observatoire : {num1} et {num2}. Quelle est leur somme ?',
                'Un marchand du bazar de Bagdad a {num1} dirhams et en reçoit {num2} de plus. Combien en a-t-il maintenant ?',
                'La Maison de la Sagesse catalogue {num1} manuscrits grecs et {num2} rouleaux perses. Combien cela fait-il en tout ?',
                'Un astronome calcule {num1} degrés pour un arc et {num2} pour un autre. Quel est l\'arc total ?',
                'Un traducteur termine {num1} pages le matin et {num2} le soir. Quel est le total de la journée ?'
            ],
            minus: [
                'Al-Khwarizmi note deux mesures de l\'observatoire : {num1} et {num2}. Quelle est leur différence ?',
                'Un marchand du bazar de Bagdad a {num1} dirhams et en dépense {num2}. Combien lui en reste-t-il ?',
                'La Maison de la Sagesse catalogue {num1} manuscrits grecs et {num2} rouleaux perses. Combien y a-t-il de manuscrits grecs en plus ?',
                'Un astronome calcule {num1} degrés pour un arc et {num2} pour un autre. Quelle est la différence ?',
                'Un traducteur termine {num1} pages le matin et {num2} le soir. Quelle est la différence ?'
            ]
        },
        hint: 'Ce sont des chiffres arabo-indiens orientaux : {sym1} = {num1}, {sym2} = {num2}. Calculez : {num1} {operation} {num2} = {answer} → {answerNumeral}'
    }
},

// ── Guides rapides ───────────────────────────────────────────────────────────

guide: {
    roman: {
        title: 'Aide-mémoire des chiffres romains',
        tip: 'Astuce : quand un chiffre plus petit précède un plus grand, on le soustrait (par exemple IV = 4, IX = 9)'
    },
    egyptian: {
        title: 'Chiffres hiéroglyphiques égyptiens',
        tip: 'Astuce : comptez chaque symbole, multipliez par sa valeur, puis additionnez le tout.'
    },
    greek: {
        title: 'Chiffres alphabétiques grecs',
        tip: 'Astuce : les lettres se combinent pour former des nombres. ρκγ = 100 + 20 + 3 = 123'
    },
    babylonian: {
        title: 'Système sexagésimal babylonien (base 60)',
        symbols: 'Symboles :',
        wedgeOne: '1 (clou vertical)',
        wedgeTen: '10 (clou horizontal)',
        wedgeZero: '0 ou position vide',
        howItWorks: 'Comment ça marche :',
        howItWorksText: 'Les nombres s\'écrivent par positions. Chaque position vers la gauche vaut 60x plus (comme notre base 10, mais en base 60 !).',
        example: 'Exemple :',
        tip: 'Astuce : comptez les clous de chaque position, puis multipliez par les puissances de 60.'
    },
    chinese: {
        title: 'Baguettes à compter chinoises / système suanpan',
        basicDigits: 'Chiffres de base :',
        placeValues: 'Valeurs de position :',
        ten: 'dix',
        hundred: 'cent',
        thousand: 'mille',
        tenThousand: 'dix mille',
        tip: 'Astuce : lisez de gauche à droite. 三百五十二 = 3x100 + 5x10 + 2 = 352'
    },
    mayan: {
        title: 'Système vigésimal maya (base 20)',
        dot: 'point',
        bar: 'barre',
        shell: 'coquille',
        max: 'maximum = 19',
        tip: 'Astuce : chaque position vaut 20x celle du dessous. Les positions s\'empilent verticalement, la plus haute étant la plus significative.'
    },
    'hindu-arabic': {
        title: 'Aide-mémoire des chiffres indo-arabes',
        tip: 'Ce système positionnel, doté d\'un véritable zéro, est l\'ancêtre des nombres que nous utilisons aujourd\'hui.'
    }
},

// ── Codex ────────────────────────────────────────────────────────────────────

codex: {
    roman: {
        title: 'Chiffres romains',
        period: 'v. 900 av. J.-C. – 400 apr. J.-C.',
        region: 'Péninsule italienne, Empire romain',
        sections: [
            {
                heading: 'Origines',
                text: 'Les chiffres romains sont issus d\'un simple système d\'entailles utilisé par les Étrusques et les premiers peuples latins. Les symboles I, V et X viennent probablement d\'encoches taillées dans l\'os ou le bois : I est un trait unique, V évoque une main et X, deux V croisés.'
            },
            {
                heading: 'Notation soustractive',
                text: 'La règle selon laquelle un chiffre plus petit placé avant un plus grand signifie une soustraction (IV = 4, IX = 9) fut un raffinement tardif. Les Romains plus anciens écrivaient souvent IIII au lieu de IV, et cette forme "ancienne" figure encore sur de nombreux cadrans d\'horloge.'
            },
            {
                heading: 'Limites',
                text: 'Les chiffres romains n\'ont ni zéro ni valeur de position. La multiplication et la division étaient extraordinairement difficiles, ce qui explique sans doute que les Romains aient adopté l\'abaque pour les calculs sérieux. De grands nombres comme 1 000 000 exigeaient des symboles inventés, peu répandus.'
            },
            {
                heading: 'Héritage',
                text: 'Les chiffres romains subsistent dans les titres de chapitres, les cadrans d\'horloge, les génériques de films et les noms de monarques et de papes. Les éditions du Super Bowl, les Jeux olympiques et les premières pierres des bâtiments les emploient encore : une présence de 2 000 ans dans la vie quotidienne.'
            }
        ]
    },

    egyptian: {
        title: 'Chiffres hiéroglyphiques égyptiens',
        period: 'v. 3000 av. J.-C. – 400 apr. J.-C.',
        region: 'Vallée du Nil, Afrique du Nord',
        sections: [
            {
                heading: 'Un système purement additif',
                text: 'Les chiffres égyptiens utilisaient un hiéroglyphe distinct pour chaque puissance de dix : un trait (1), un os de talon (10), une corde enroulée (100), une fleur de lotus (1 000), un doigt plié (10 000), un têtard (100 000) et un dieu aux bras levés (1 000 000). Les nombres se formaient en répétant et combinant ces signes : purement additif, sans soustraction ni valeur de position.'
            },
            {
                heading: 'Le papyrus Rhind',
                text: 'Le papyrus mathématique Rhind (v. 1550 av. J.-C.) est l\'un des plus anciens documents mathématiques existants. Il contient 84 problèmes d\'arithmétique et de géométrie, dont des fractions unitaires, des calculs d\'aires et des estimations de volumes. Les Égyptiens travaillaient exclusivement en fractions unitaires (1/n), à l\'exception de 2/3.'
            },
            {
                heading: 'Pi et la pyramide',
                text: 'Les ingénieurs égyptiens approchaient π par (16/9)² ≈ 3,16, soit une erreur inférieure à 0,6 %. Les dimensions de la grande pyramide de Gizeh encodent cette valeur, même si l\'on débat depuis des siècles pour savoir si c\'était délibéré ou fortuit.'
            },
            {
                heading: 'L\'écriture hiératique',
                text: 'Pour l\'écriture courante, les Égyptiens utilisaient des chiffres "hiératiques", version cursive et abrégée des hiéroglyphes permettant d\'écrire plus vite sur le papyrus. Le système hiératique employait des symboles distincts pour 1 à 9 (et non de simples traits répétés), ce qui le rendait nettement plus compact.'
            }
        ]
    },

    greek: {
        title: 'Chiffres alphabétiques grecs',
        period: 'v. Ve siècle av. J.-C. – époque byzantine',
        region: 'Grèce, Alexandrie, Méditerranée orientale',
        sections: [
            {
                heading: 'Le système milésien',
                text: 'Les chiffres alphabétiques grecs (dits aussi milésiens ou ioniens) attribuaient des valeurs numériques aux 24 lettres de l\'alphabet grec, plus trois lettres archaïques : stigma/digamma (6), koppa (90) et sampi (900). L\'alphabet complet représentait ainsi 1 à 9, 10 à 90 et 100 à 900.'
            },
            {
                heading: 'Hypatie d\'Alexandrie',
                text: 'Hypatie (v. 360–415 apr. J.-C.) fut une philosophe néoplatonicienne et mathématicienne qui édita et enseigna les œuvres de Diophante, Ptolémée et Apollonius. Elle fut la dernière grande mathématicienne de la tradition alexandrine antique. Son assassinat par une foule chrétienne marqua la fin symbolique de l\'érudition païenne à Alexandrie.'
            },
            {
                heading: 'Diophante et l\'algèbre',
                text: 'Diophante d\'Alexandrie (v. IIIe siècle apr. J.-C.) écrivit les Arithmétiques, 13 livres de problèmes algébriques qui posèrent les bases de ce qu\'Al-Khwarizmi formaliserait plus tard. Sa notation utilisait les chiffres alphabétiques grecs et des symboles proto-algébriques, ce qui en fait l\'un des premiers algébristes de l\'histoire.'
            },
            {
                heading: 'La machine d\'Anticythère',
                text: 'La machine d\'Anticythère (v. 100 av. J.-C.), calculateur astronomique grec antique, utilisait des roues dentées pour prédire les phénomènes célestes. Ses inscriptions emploient les chiffres alphabétiques pour les degrés et les divisions du calendrier, preuve que ces symboles étaient intégrés à des instruments scientifiques sophistiqués.'
            }
        ]
    },

    babylonian: {
        title: 'Chiffres cunéiformes babyloniens',
        period: 'v. 2000–500 av. J.-C.',
        region: 'Mésopotamie (Irak actuel)',
        sections: [
            {
                heading: 'Base 60 : le système sexagésimal',
                text: 'Les Babyloniens employaient un système positionnel en base 60 (sexagésimal), le plus sophistiqué du monde antique. Pourquoi 60 ? Parce qu\'il se divise exactement par 1, 2, 3, 4, 5, 6, 10, 12, 15, 20 et 30 : plus de diviseurs que tout nombre plus petit. Cela simplifiait les fractions dans la vie quotidienne.'
            },
            {
                heading: 'L\'héritage que vous utilisez chaque jour',
                text: 'La minute de 60 secondes, l\'heure de 60 minutes, le cercle de 360 degrés et la journée de 24 heures descendent directement des mathématiques babyloniennes. Chaque fois que vous regardez une horloge ou une boussole, vous utilisez un système de numération vieux de 4 000 ans.'
            },
            {
                heading: 'Plimpton 322',
                text: 'Plimpton 322 est une tablette d\'argile datée d\'environ 1800 av. J.-C. qui recense des triplets pythagoriciens (solutions entières de a² + b² = c²) plus de 1 000 ans avant Pythagore. Les mathématiciens babyloniens maîtrisaient en profondeur les triangles rectangles et les équations du second degré.'
            },
            {
                heading: 'Notation positionnelle et zéro',
                text: 'Les Babyloniens ont inventé la notation positionnelle, où la valeur d\'un symbole dépend de sa place. Ils ont aussi créé un symbole marqueur (⊙) pour signaler un groupe positionnel vide, le plus ancien précurseur du zéro. Ils n\'ont toutefois jamais utilisé le zéro comme nombre dans les calculs, seulement comme séparateur.'
            }
        ]
    },

    chinese: {
        title: 'Baguettes à compter chinoises',
        period: 'v. 400 av. J.-C. – aujourd\'hui (formes traditionnelles)',
        region: 'Chine, Asie de l\'Est',
        sections: [
            {
                heading: 'Les baguettes à compter',
                text: 'Les mathématiciens chinois disposaient des baguettes de bambou ou d\'ivoire sur un plateau pour représenter les nombres. Les baguettes verticales (⌶) figuraient les unités de 1 à 5 ; une seule baguette horizontale (一) se plaçait perpendiculairement pour 6. Alterner les orientations d\'une colonne à l\'autre (verticale, puis horizontale) évitait de confondre les chiffres voisins, un précurseur de la pensée binaire.'
            },
            {
                heading: 'Le suanpan (abaque)',
                text: 'Le suanpan chinois (算盤), mis au point vers le IIe siècle av. J.-C., permettait d\'additionner, soustraire, multiplier, diviser et extraire des racines carrées plus vite que l\'arithmétique européenne au papier et à la plume, et ce pendant des siècles. Des opérateurs chevronnés égalaient les calculatrices électroniques sur les opérations de base lors de concours organisés jusqu\'en 1946.'
            },
            {
                heading: 'Les nombres négatifs',
                text: 'Les mathématiciens chinois employaient des baguettes rouges pour les nombres positifs et noires pour les négatifs : le premier usage connu des nombres négatifs dans le calcul. Les Neuf chapitres sur l\'art mathématique (v. Ier siècle apr. J.-C.) contiennent des règles d\'arithmétique sur les quantités négatives, plus de mille ans avant que les mathématiques européennes ne les acceptent.'
            },
            {
                heading: 'Les Neuf chapitres',
                text: 'Le Jiuzhang Suanshu (Neuf chapitres sur l\'art mathématique) est un texte mathématique chinois fondamental qui traite de problèmes pratiques : arpentage, répartition des récoltes, génie civil et fiscalité. Il décrit l\'élimination de Gauss (réduction par lignes) pour résoudre des systèmes d\'équations, 1 800 ans avant Gauss.'
            }
        ]
    },

    mayan: {
        title: 'Chiffres vigésimaux mayas',
        period: 'v. 300 av. J.-C. – conquête espagnole (XVIe siècle)',
        region: 'Mésoamérique (Mexique, Guatemala, Belize)',
        sections: [
            {
                heading: 'Base 20 et un zéro indépendant',
                text: 'Les Mayas ont développé un système de numération positionnel vigésimal (base 20), écrit verticalement de bas en haut. Leur zéro, un symbole de coquille, fut l\'une des deux seules inventions indépendantes du zéro dans l\'histoire (l\'autre ayant eu lieu en Asie du Sud). Le zéro maya n\'était pas qu\'un marqueur de position : c\'était un nombre employé dans les calculs.'
            },
            {
                heading: 'Le système calendaire maya',
                text: 'Le calendrier maya du Compte long pouvait désigner n\'importe quelle date dans un cycle de 5 125 ans (environ de 3114 av. J.-C. à 2012 apr. J.-C.) au moyen d\'une notation à cinq chiffres. Leurs calculs astronomiques, notamment pour les cycles de Vénus (584 jours) et les mois lunaires, étaient précis à quelques minutes d\'arc, sans télescope.'
            },
            {
                heading: 'Le codex de Dresde',
                text: 'Le codex de Dresde (v. 900–1000 apr. J.-C.) est un livre maya précolombien contenant des tables de Vénus qui prédisent les apparitions de la planète comme étoile du matin et du soir sur 104 ans, avec une précision extraordinaire. C\'est l\'un des quatre seuls codex mayas conservés ; les autres ont été brûlés par des missionnaires espagnols.'
            },
            {
                heading: 'Points, barres et coquilles',
                text: 'Trois symboles encodent tous les nombres mayas : un point (●) pour 1, une barre (━) pour 5 et une coquille (○) pour 0. L\'élégance de ce système, trois symboles pour n\'importe quel nombre agencés positionnellement, est une réussite mathématique de premier ordre, apparue de façon entièrement indépendante des mathématiques de l\'Ancien Monde.'
            }
        ]
    },

    'hindu-arabic': {
        title: 'Chiffres indo-arabes',
        period: 'v. VIe siècle apr. J.-C. (Inde) → IXe siècle apr. J.-C. (Bagdad) → XIIe siècle apr. J.-C. (Europe)',
        region: 'Inde → Perse → Bagdad → Méditerranée → Monde',
        sections: [
            {
                heading: 'La plus grande invention mathématique',
                text: 'Le système de numération indo-arabe, dix symboles (0–9) dans un système positionnel en base 10 doté d\'un véritable zéro, est sans doute l\'invention la plus déterminante de l\'histoire des mathématiques. Tous les nombres de la science, de la finance, de l\'ingénierie et de l\'informatique d\'aujourd\'hui reposent sur ce système, descendant direct des chiffres brahmi de l\'Inde ancienne.'
            },
            {
                heading: 'Al-Khwarizmi et la Maison de la Sagesse',
                text: 'Muhammad ibn Musa al-Khwarizmi (v. 780–850 apr. J.-C.) était un mathématicien perse en poste à la Bayt al-Hikma (Maison de la Sagesse) de Bagdad, sous le califat abbasside. Son ouvrage Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala (Abrégé du calcul par la restauration et la comparaison) nous a donné le mot "algèbre" (al-jabr). Un travail ultérieur sur les chiffres indiens introduisit le système indo-arabe dans le monde islamique puis, via les traductions latines, en Europe.'
            },
            {
                heading: 'Le mot "algorithme"',
                text: 'Le mot "algorithme" vient d\'"Algoritmi", forme latinisée du nom d\'Al-Khwarizmi. Lorsque les traducteurs latins décrivirent ses méthodes de calcul avec les chiffres indiens, ils intitulèrent leurs ouvrages "Algoritmi dixit..." ("Al-Khwarizmi a dit..."). Son nom devint le terme désignant toute procédure de calcul pas à pas, puis le concept fondateur de l\'informatique.'
            },
            {
                heading: 'La longue résistance de l\'Europe',
                text: 'Les chiffres indo-arabes atteignirent l\'Europe par l\'Espagne et l\'Italie aux XIIe et XIIIe siècles. Les marchands les adorèrent ; les autorités les redoutèrent. Florence les interdit en 1299, craignant que la facilité à transformer le symbole 0 en 6 ou en 9 ne favorise la fraude. Malgré cette résistance officielle, la supériorité pratique du système était indéniable, et il remplaça les chiffres romains dans le calcul dès la Renaissance.'
            }
        ]
    }
},

// ── À propos ─────────────────────────────────────────────────────────────────

about: {
    intro: 'Mathematikos est un jeu éducatif gratuit et ouvert créé par Guilherme Almeida Zeni. Cette page documente l\'origine du projet (y compris des horodatages antérieurs à tous les produits similaires connus) et la philosophie qui le sous-tend.',

    creatorHeading: 'Le créateur',
    creatorText1: 'Guilherme est ingénieur logiciel senior, avec plus de 10 ans d\'expérience. Mathematikos est né d\'une passion personnelle pour l\'histoire et les mathématiques, et de la conviction qu\'il n\'existe aucun bon jeu de navigateur gratuit enseignant les systèmes de numération anciens comme une véritable expérience de jeu.',
    creatorText2: 'Le jeu est et restera gratuit. S\'il vous est utile, envisagez de le soutenir librement.',

    whyHeading: 'Pourquoi ces civilisations ?',
    whyLead: 'Chaque civilisation a été choisie pour sa singularité mathématique et son importance culturelle :',
    whyItems: [
        { name: 'Romaine', text: 'Le système ancien le plus familier ; une entrée en matière tout en douceur' },
        { name: 'Égyptienne', text: 'Base 10 mais entièrement additif ; les hiéroglyphes visuels le rendent mémorable' },
        { name: 'Grecque', text: 'Chiffres alphabétiques ; un pont unique entre langue et nombre' },
        { name: 'Babylonienne', text: 'Base 60, sexagésimal ; l\'origine de notre minute de 60 secondes et du cercle de 360 degrés' },
        { name: 'Chinoise', text: 'Baguettes à compter et suanpan (abaque) ; un système positionnel sophistiqué' },
        { name: 'Maya', text: 'Base 20, vigésimal ; l\'une des rares inventions indépendantes du zéro' },
        { name: 'Indo-arabe', text: 'Le grand final, le système qui a unifié tous les autres et est devenu nos chiffres modernes' }
    ],

    timelineHeading: 'Chronologie du développement',
    timeline: [
        {
            date: 'Fin 2024',
            title: 'L\'idée naît',
            text: 'Au cours d\'une conversation ChatGPT intitulée "Jogo de adição histórica" (en portugais : "Jeu d\'addition historique"), le concept de Mathematikos prend forme : un jeu de navigateur enseignant les systèmes de numération anciens à travers des défis de voyage dans le temps. Le nom, la liste des civilisations et les deux modes de jeu (Scènes thématiques et Défis temporels) sont tous définis lors de cette session.'
        },
        {
            date: '19 octobre 2024',
            title: 'Création du dépôt du prototype',
            text: 'Le premier commit du dépôt du prototype est effectué à 22h21 (UTC-3). Dix-huit minutes plus tard, un document de conception complet est enregistré puis publié le lendemain ; il couvre l\'intégralité du concept du jeu, la narration, les civilisations, les mécaniques et le plan technique. Ce document est horodaté de façon cryptographique dans l\'historique Git.',
            proof: 'Premier commit du prototype : e78660e, 19 octobre 2024, 22h21 UTC-3'
        },
        {
            date: 'Du 21 octobre au 6 novembre 2024',
            title: 'Construction du premier prototype',
            text: 'Un prototype fonctionnel est développé avec React, TypeScript, Vite et Phaser 3. Le système de sélection des thèmes, les shaders WebGL par civilisation et la scène d\'introduction sont implémentés. Le développement s\'étale sur 19 jours dans le dépôt du prototype.'
        },
        {
            date: '2025',
            title: 'Sortie du jeu de plateau Mathematicus',
            text: 'Un jeu de plateau physique nommé Mathematicus paraît, couvrant les systèmes de numération babylonien, égyptien, chinois, romain, maya, arabe et binaire : un concept convergent élaboré de façon indépendante. Mathematikos précède cette sortie de plus d\'un an, comme l\'atteste l\'historique Git de 2024. Les deux produits sont complémentaires et non concurrents : Mathematikos est numérique et gratuit ; Mathematicus est physique et payant.'
        },
        {
            date: '2025',
            title: 'Début du master en mathématiques appliquées',
            text: 'Le développement de Mathematikos est mis en pause au profit du travail universitaire. Le projet se repose, mais l\'idée ne disparaît pas.'
        },
        {
            date: '15 février 2026',
            title: 'Reconstruit en HTML/CSS/JS purs',
            text: 'Mathematikos est reconstruit de zéro en jeu de navigateur sans dépendances, en HTML, CSS et JavaScript ES6 purs. L\'objectif : jouer instantanément, sans étape de compilation, hors ligne. Les civilisations romaine, égyptienne, grecque, babylonienne et chinoise sont implémentées en une seule soirée.'
        },
        {
            date: '23 mars 2026',
            title: 'Civilisation maya et grande extension',
            text: 'Le système vigésimal maya (base 20) est ajouté, de même qu\'un rendu SVG complet pour tous les systèmes de numération, une suite de tests par civilisation, le Mode entraînement et les défis inversés (écrire des chiffres anciens à partir de nombres arabes). Le code est modularisé dans une arborescence claire.'
        },
        {
            date: '25 mars 2026',
            title: 'Mode sombre et finitions visuelles',
            text: 'La prise en charge complète du mode sombre est ajoutée, corrigeant toutes les couleurs claires figées dans le code. Les styles en ligne sont réécrits en classes CSS. Le jeu est désormais soigné en thème clair comme en thème sombre.'
        },
        {
            date: '25 mars 2026',
            title: 'Civilisation indo-arabe et extension complète',
            text: 'La septième et dernière civilisation est ajoutée : les chiffres indo-arabes du Bagdad du IXe siècle, l\'histoire d\'origine du système de numération que nous utilisons aujourd\'hui. Le Défi du jour, le Codex (encyclopédie des civilisations), les thèmes visuels par civilisation, le son d\'ambiance, les défis de conversion entre civilisations et la PWA (jeu hors ligne) sortent tous dans une seule version.'
        }
    ],

    evidenceHeading: 'Preuves et provenance',
    evidenceText: 'La conversation ChatGPT originale de 2024 et l\'historique des commits du dépôt du prototype attestent d\'une origine indépendante. Le dépôt du prototype a depuis été archivé.',
    evidenceAlt1: 'Conversation ChatGPT intitulée "Jogo de adição histórica", octobre 2024',
    evidenceCaption1: 'Conversation ChatGPT, "Jogo de adição histórica", octobre 2024',
    evidenceAlt2: 'Dépôt du prototype montrant le premier commit du 19 octobre 2024',
    evidenceCaption2: 'Dépôt du prototype, premier commit du 19 octobre 2024'
}

};
