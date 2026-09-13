// ===== PORTUGUÊS (BRASIL) =====
// Mirrors the key set of en.js exactly. tests/i18n.test.js fails on any key
// that is missing, extra, empty, or that drops a {placeholder}.

I18N_CATALOGS['pt-BR'] = {

ui: {
    document: {
        title: 'Mathematikos - Uma Viagem pelos Números Antigos',
        description: 'Viaje no tempo e resolva desafios matemáticos usando sistemas numéricos antigos.'
    },

    common: {
        backToMenu: '← Voltar ao Menu',
        close: 'Fechar'
    },

    // The two constant voices. A local speaker is named by the story.
    speakers: {
        oracle: 'O Oráculo dos Números',
        hypatia: 'Hipátia de Alexandria'
    },

    menu: {
        settings: 'Configurações',
        subtitle: 'Uma Viagem pelos Sistemas Numéricos Antigos',
        thematic: 'Cenas Temáticas',
        temporal: 'Desafios Temporais',
        practice: 'Modo Treino',
        daily: 'Desafio Diário',
        about: 'Sobre e História de Origem →'
    },

    civSelect: {
        title: 'Escolha Sua Civilização',
        subtitle: 'Descubra os segredos matemáticos dos antigos.',
        best: 'Recorde: {score}'
    },

    difficulty: {
        easy: 'Fácil',
        intermediate: 'Intermediário',
        advanced: 'Avançado',
        expert: 'Especialista'
    },

    story: {
        back: 'Voltar',
        openCodex: 'Abrir o Códice',
        begin: 'Começar o Desafio →',
        scene: 'A cena',
        challengeCount: '{count} desafios'
    },

    game: {
        backToStory: 'Voltar à história',
        toggleSound: 'Ligar ou desligar o som ambiente',
        answerLabel: 'Sua resposta',
        answerPlaceholder: 'Toque nos símbolos abaixo',
        storyChip: 'História',
        guideChip: 'Guia',
        oraclePieces: 'Fragmentos do Oráculo reunidos:',
        hint: 'Ver Dica',
        clear: 'Limpar',
        backspace: 'Apagar',
        submit: 'Responder',
        counter: 'Desafio {current}/{total}',
        sceneCounter: 'Desafio {current} de {total}',
        reversePrompt: 'Escreva em algarismos {civ}',
        reverseSlot: 'Monte em algarismos {civ}',
        reverseInput: 'Monte o algarismo usando o teclado de símbolos acima'
    },

    symbolPad: {
        separator: 'sep',
        position: 'pos'
    },

    feedback: {
        empty: 'Monte uma resposta ou digite um número!',
        correct: 'Correto! +{points} pontos',
        incorrect: 'Errado. Tente de novo!',
        incorrectTimed: 'Errado. Tente de novo! (-10s)',
        incorrectReveal: 'Quase! Resposta: {answer} = {civAnswer}'
    },

    achievement: {
        rollTitle: 'Embalando!',
        rollText: 'Três respostas certas seguidas!',
        masterTitle: 'Calculista Mestre!',
        masterText: 'Todos os desafios concluídos!',
        penaltyTitle: 'Penalidade de Tempo!',
        penaltyText: '-10 segundos',
        streakTitle: 'Sequência de {count} Dias!',
        streakText: 'Volte amanhã para manter a sequência!',
        dailyTitle: 'Desafio Diário Concluído!',
        dailyText: 'Volte amanhã para uma nova civilização!',
        unlockedTitle: 'Nova Civilização Desbloqueada!',
        unlockedText: 'Agora você pode explorar {civ}!',
        allCompleteTitle: 'Mestre dos Números!',
        allCompleteText: 'Você completou todas as civilizações! Você é um verdadeiro Guardião dos Números!'
    },

    results: {
        title: 'Desafio Concluído!',
        continue: 'Continuar a Jornada →',
        openCodex: 'Abrir o Códice',
        chooseAnother: 'Escolher Outra',
        mainMenu: 'Menu Principal',
        totalScore: 'Pontuação Total',
        correctAnswers: 'Respostas Certas',
        timeTaken: 'Tempo Gasto',
        oraclePieces: 'Fragmentos do Oráculo',
        hintsUsed: 'Dicas Usadas',
        collectedTitle: 'Fragmento do Oráculo Recuperado!',
        collectedText: 'Você recuperou um fragmento do Oráculo dos Números de {civ}!',
        collectedQuote: '"A sabedoria dos números atravessa o tempo..."',
        timeUpTitle: 'Acabou o Tempo!',
        timeoutMessage: 'Os Filhos do Tempo destruíram os registros!',
        scoreAchieved: 'Pontuação Alcançada',
        challengesCompleted: 'Desafios Concluídos',
        progress: 'Progresso',
        retryMessage: 'Não desista! Tente de novo para salvar o conhecimento das civilizações antigas!'
    },

    daily: {
        title: 'Desafio Diário',
        streak: 'Sequência de {count} dias!',
        startStreak: 'Comece sua sequência hoje!',
        completedTitle: 'Você já concluiu o desafio de hoje!',
        completedText: 'Volte amanhã para uma nova civilização.',
        description: 'O desafio de hoje usa o sistema numérico de {civ}. 5 questões, sem limite de tempo. Mostre o que você aprendeu!',
        play: '▶ Jogar o Desafio de Hoje'
    },

    help: {
        title: 'Como Jogar'
    },

    settings: {
        title: 'Configurações',
        appearance: 'Aparência',
        language: 'Idioma',
        system: 'Sistema',
        light: 'Claro',
        dark: 'Escuro',
        note: 'A mudança de idioma vale imediatamente para o jogo inteiro.'
    },

    crossCiv: {
        sceneTitle: 'Desafio de Conversão entre Eras',
        context: 'Converta este algarismo {source} para o sistema {target}.',
        hint: 'O valor é {value}. Em {target}: {answer}',
        guideTitle: 'De {source} → Para {target}',
        guideText: 'Use o teclado de símbolos {target} abaixo para escrever sua resposta.',
        slot: 'Monte em {target}',
        input: 'Monte o algarismo {target} usando o teclado de símbolos acima'
    },

    about: {
        title: 'Sobre o Mathematikos'
    }
},

// ── Civilizações ─────────────────────────────────────────────────────────────

civ: {
    roman: {
        name: 'Império Romano',
        description: 'Ajude os mercadores do Fórum Romano a calcular preços usando algarismos romanos.',
        numberSystem: 'Algarismos Romanos (I, V, X, L, C, D, M)'
    },
    egyptian: {
        name: 'Antigo Egito',
        description: 'Decifre os números hieroglíficos nas pirâmides.',
        numberSystem: 'Algarismos Hieroglíficos Egípcios'
    },
    greek: {
        name: 'Grécia Antiga',
        description: 'Calcule proporções para a construção de templos.',
        numberSystem: 'Algarismos Alfabéticos Gregos'
    },
    babylonian: {
        name: 'Babilônia',
        description: 'Use o sistema sexagesimal para restaurar os Jardins Suspensos.',
        numberSystem: 'Sistema Babilônico de Base 60'
    },
    chinese: {
        name: 'Dinastia Han',
        description: 'Calcule com barras de contagem no mercado imperial.',
        numberSystem: 'Barras de Contagem Chinesas'
    },
    mayan: {
        name: 'Civilização Maia',
        description: 'Decifre o sistema vigesimal de base 20 dos antigos maias.',
        numberSystem: 'Vigesimal Maia (Base 20)'
    },
    'hindu-arabic': {
        name: 'Casa da Sabedoria',
        description: 'Descubra o sistema numérico que unificou todos os outros, na Bagdá do século IX.',
        numberSystem: 'Algarismos Indo-Arábicos (٠١٢٣٤٥٦٧٨٩)'
    }
},

// ── Histórias ────────────────────────────────────────────────────────────────

stories: {
    thematic: {
        intro: [
            {
                quote: 'Você encontrou a máquina no templo. Ótimo. Esperei muito tempo por alguém que a ligasse.',
                text: 'Eu sou o Oráculo dos Números. Já fui inteiro, e guardava todas as formas que a humanidade já usou para contar.'
            },
            {
                quote: 'Então me parti, e meus fragmentos caíram para trás no tempo.',
                text: 'Cada civilização que você visitar guarda um dos meus fragmentos, ainda que nenhuma delas saiba disso. Elas só conhecem os próprios algarismos, e precisam que sejam contados corretamente.'
            },
            {
                quote: 'Ajude essas pessoas, e o fragmento se solta.',
                text: 'Recupere cada peça e eu voltarei a ser inteiro, e você entenderá o que eu entendo: que todos esses sistemas são uma única pergunta feita em sete línguas.'
            }
        ],

        roman: {
            title: 'Romanos - Ajudando no Fórum Romano',
            setting: 'Você chega ao movimentado Fórum Romano, cercado por colunas de mármore, estátuas de imperadores e bancas de mercado cheias de mercadorias. Um mercador chama você para pedir ajuda.',
            objective: 'Ajude Marcus, um mercador de tecidos, a calcular preços e realizar transações usando algarismos romanos.',
            speaker: {
                name: 'Marcus, o Mercador',
                line: 'Bem-vindo, viajante! O Fórum está cheio hoje, e preciso de ajuda com minhas contas. Você pode me ajudar com estas transações?'
            },
            hypatia: {
                guidance: 'Os romanos construíram seu império sobre a ordem, e a ordem começa por contar. Repare como os algarismos deles refletem seus valores: repetição para acumular, subtração para dar elegância. Comece por aqui, e o resto da história se abrirá para você.'
            }
        },

        egyptian: {
            title: 'Antigo Egito - Decifrando as Pirâmides',
            setting: 'Você se materializa dentro da Grande Pirâmide de Gizé. Tochas tremeluzem sobre paredes antigas cobertas de hieróglifos misteriosos. O ar está denso com o cheiro de incenso. Um escriba real cumprimenta você com urgência.',
            objective: 'Ajude o escriba real a preparar o grande banquete do faraó calculando quantidades com algarismos hieroglíficos egípcios.',
            speaker: {
                name: 'Imhotep, o Escriba',
                line: 'Grande matemático! O banquete do faraó se aproxima, e preciso garantir que nossas contas estejam perfeitas. Os hieróglifos guardam as respostas: você consegue decifrá-los?'
            },
            hypatia: {
                guidance: 'O sistema numérico do Egito é milênios mais antigo que o de Roma. Cada símbolo é uma potência de dez: conte os hieróglifos e some seus valores. Os egípcios foram os primeiros a escrever números grandes o bastante para erguer maravilhas. Caminhe entre os símbolos deles com reverência.'
            }
        },

        greek: {
            title: 'Grécia Antiga - Construindo com Proporções',
            setting: 'Você chega ao canteiro de obras do magnífico Partenon, em Atenas. Filósofos e arquitetos cercam você, discutindo as proporções divinas e as harmonias matemáticas que tornarão este templo eterno.',
            objective: 'Ajude o arquiteto-mestre a calcular proporções e medidas com algarismos alfabéticos gregos para garantir uma harmonia geométrica perfeita.',
            speaker: {
                name: 'Arquimedes',
                line: 'Ah, outro amante da matemática! A proporção áurea deve guiar nossa construção. Estes cálculos exigem precisão. Você me ajuda a resolvê-los com nossos algarismos sagrados?'
            },
            hypatia: {
                guidance: 'Nasci dentro dessa tradição grega dos algarismos alfabéticos, em que cada letra carrega uma alma numérica. Meu próprio trabalho partiu de Diofanto, Ptolomeu e Euclides. Nesta civilização você vai pensar como os gregos pensavam: cada símbolo também é uma letra, e cada cálculo, uma espécie de poesia.'
            }
        },

        babylonian: {
            title: 'Babilônia - Restaurando os Jardins Suspensos',
            setting: 'Você chega à antiga Babilônia, nos lendários Jardins Suspensos, uma das Sete Maravilhas. O complexo sistema de irrigação precisa ser recalculado, e os engenheiros reais recorrem a você.',
            objective: 'Use o sofisticado sistema babilônico de base 60 (sexagesimal) para calcular a distribuição de água e os recursos necessários à manutenção dos jardins.',
            speaker: {
                name: 'Engenheiro-Chefe Nabu-rimanni',
                line: 'Bem-vindo, matemático! Nossos ancestrais criaram o sistema numérico mais avançado, a base 60! Ajude-nos a calcular as medidas exatas para a irrigação dos jardins.'
            },
            hypatia: {
                guidance: 'A Babilônia nos deu o minuto de sessenta segundos e o círculo de trezentos e sessenta graus. Quando você olha um relógio ou uma bússola, está pensando em babilônico. A base 60 deles nasce do número mais divisível que o mundo antigo conhecia. Fique atento a agrupamentos de sessenta. Eles são o esqueleto do pensamento desta civilização.'
            }
        },

        chinese: {
            title: 'Dinastia Han - Calculando no Mercado Imperial',
            setting: 'Você chega ao movimentado mercado de Chang\'an, durante a Dinastia Han. Mercadores lotam as ruas, vendendo seda, especiarias, jade e incontáveis tesouros. Um mestre do ábaco acena para você da sua banca.',
            objective: 'Faça cálculos com as barras de contagem chinesas ou com o suanpan (ábaco) para ajudar os mercadores em suas negociações e garantir trocas justas.',
            speaker: {
                name: 'Mestre Liu, o Especialista no Ábaco',
                line: 'Bem-vindo, honrado calculista! Nossos mercados fervem de comércio. Use a antiga arte das barras de contagem para resolver as contas destes mercadores. Cada transação precisa ser exata!'
            },
            hypatia: {
                guidance: 'Os chineses desenvolveram um sistema decimal posicional de forma totalmente independente do Ocidente, e o suanpan (ábaco) deles superou a aritmética europeia de papel e pena durante séculos. Leia os caracteres da esquerda para a direita: cada unidade nomeada (dez, cem, mil) ancora o dígito anterior a ela. A estrutura é rígida, mas bonita.'
            }
        },

        mayan: {
            title: 'Civilização Maia - Segredos da Pirâmide',
            setting: 'Você chega à magnífica pirâmide de Chichén Itzá ao amanhecer. Um astrônomo maia estuda as estrelas, usando o notável sistema numérico vigesimal para acompanhar ciclos celestes com precisão extraordinária.',
            objective: 'Ajude o astrônomo Itzamná a calcular oferendas e ciclos astronômicos usando o sistema maia de base 20, feito de pontos, barras e conchas.',
            speaker: {
                name: 'Astrônomo Itzamná',
                line: 'Bem-vindo, buscador do conhecimento! Nosso sistema vigesimal, de base 20, guarda segredos do cosmos. Pontos valem um, barras valem cinco e a concha representa o zero. Você consegue dominar nossos números?'
            },
            hypatia: {
                guidance: 'De todos os sistemas numéricos que você encontrou, o maia é único. Eles inventaram o zero de forma independente, não como marcador de posição, mas como número. Os cálculos do calendário deles rivalizam com nossos melhores programas de astronomia. Leia de cima para baixo; cada camada multiplica por vinte. A concha não é nada. Ela é tudo.'
            }
        },

        'hindu-arabic': {
            title: 'Casa da Sabedoria - A Origem dos Nossos Números',
            setting: 'Você chega à Bayt al-Hikma, a Casa da Sabedoria, na Bagdá do século IX. Estudiosos de todo o mundo conhecido lotam seus salões: matemáticos gregos, persas, indianos e árabes trabalhando lado a lado, traduzindo e ampliando o conhecimento humano. O próprio Al-Khwarizmi convida você à sua mesa de escrita.',
            objective: 'Trabalhe ao lado de Al-Khwarizmi para verificar cálculos com o sistema posicional indo-arábico, o sistema que um dia se tornará a língua universal da matemática.',
            speaker: {
                name: 'Al-Khwarizmi',
                line: 'Bem-vindo à Casa da Sabedoria. Os estudiosos indianos nos trouxeram um presente: nove símbolos e um zero. Juntos, eles podem representar qualquer número do universo. Isto não é apenas aritmética. É um novo jeito de pensar. Você consegue dominar estes símbolos?'
            },
            hypatia: {
                guidance: 'Você viajou muito, jovem matemático. Viu repetição no Egito, subtração em Roma, base 60 na Babilônia, alfabetos como números na Grécia, barras na China e conchas nas Américas. Todos são respostas à mesma pergunta: como representar o infinito com o finito? Aqui, em Bagdá, a civilização humana encontrou sua resposta mais elegante. Estes nove símbolos e um zero: você já os conhece. Mas agora vai entender de onde eles vieram.'
            }
        }
    },

    temporal: {
        intro: [
            {
                quote: 'Alguma coisa está devorando o registro, e trabalha de trás para frente, a partir de hoje.',
                text: 'Eles se chamam Filhos do Tempo. Estão removendo da história os sistemas numéricos antigos, uma civilização por vez, começando pela mais velha.'
            },
            {
                quote: 'Um sistema que ninguém mais consegue ler é um sistema que nunca foi inventado.',
                text: 'É assim que o apagamento funciona. Não queima nada. Apenas espera até que a última pessoa que entendia a notação se vá.'
            },
            {
                quote: 'Então leia tudo de volta para mim antes que o registro se feche.',
                text: 'Cada resposta certa devolve um cálculo que eles já haviam tomado. Você vai trabalhar contra o relógio, porque eles também estão.'
            }
        ],

        roman: {
            title: 'Romanos - Emergência no Fórum',
            setting: 'O Fórum Romano está em chamas! Cidadãos fogem em pânico. Você precisa ajudar a organizar a evacuação calculando rapidamente os suprimentos necessários.',
            objective: 'Resolva problemas de adição e subtração para salvar registros e suprimentos valiosos antes que o fogo os consuma.',
            note: { label: 'Tempo Restante', text: 'Você tem 3 minutos para concluir todos os desafios!' }
        },

        egyptian: {
            title: 'Antigo Egito - Destruição da Biblioteca',
            setting: 'A grande Biblioteca de Alexandria está desmoronando! Antigos rolos de papiro com conhecimento matemático estão prestes a se perder para sempre. Você precisa agir rápido para salvá-los.',
            objective: 'Decifre cálculos hieroglíficos e salve os preciosos registros matemáticos antes que virem pó!',
            note: { label: 'Tempo Restante', text: 'Você tem 2,5 minutos para salvar o conhecimento antigo!' }
        },

        greek: {
            title: 'Grécia Antiga - Ameaça ao Conhecimento',
            setting: 'A Academia de Platão está sob ataque! Um incêndio ameaça destruir séculos de filosofia e conhecimento matemático. Rolos com a sabedoria de Pitágoras, Euclides e Arquimedes estão virando cinzas!',
            objective: 'Resolva problemas matemáticos para salvar os textos mais preciosos antes que se percam para sempre!',
            note: { label: 'Tempo Restante', text: 'Você tem 2,5 minutos antes que o conhecimento se perca!' }
        },

        babylonian: {
            title: 'Babilônia - Crise Agrícola',
            setting: 'Uma seca devastadora ameaça a Babilônia! Os antigos sistemas de irrigação estão falhando, e as plantações morrendo. O conhecimento dos cálculos de distribuição de água está se apagando: você precisa salvá-lo!',
            objective: 'Resolva cálculos de base 60 para restaurar a irrigação e salvar a cidade da fome!',
            note: { label: 'Tempo Restante', text: 'Você tem 2 minutos para salvar a agricultura da Babilônia!' }
        },

        chinese: {
            title: 'Dinastia Han - Caos na Corte Imperial',
            setting: 'A celebração de Ano-Novo do Imperador está em risco! Um erro catastrófico no orçamento imperial ameaça derrubar as festividades. Registros contábeis antigos estão sendo destruídos por rivais!',
            objective: 'Use algarismos chineses para resolver cálculos financeiros e salvar a celebração mais importante do ano!',
            note: { label: 'Tempo Restante', text: 'Você tem 2 minutos para salvar a celebração imperial!' }
        },

        mayan: {
            title: 'Maias - Erupção em Chichén Itzá',
            setting: 'Uma erupção vulcânica ameaça a grande cidade maia de Chichén Itzá! Preciosas tábuas de pedra com séculos de conhecimento matemático e astronômico estão prestes a ser destruídas por cinzas e lava!',
            objective: 'Resolva cálculos de base 20 para salvar os registros matemáticos maias antes que a erupção destrua tudo!',
            note: { label: 'Tempo Restante', text: 'Você tem 2 minutos para salvar o conhecimento maia!' }
        },

        'hindu-arabic': {
            title: 'Casa da Sabedoria - A Biblioteca Sitiada',
            setting: 'O avanço mongol ameaça Bagdá! Estudiosos copiam manuscritos freneticamente antes que a cidade caia. O sistema numérico indo-arábico, a ferramenta matemática mais poderosa que a humanidade já criou, precisa ser preservado.',
            objective: 'Resolva cálculos com algarismos indo-arábicos para verificar e salvar os manuscritos matemáticos mais importantes antes que o tempo acabe!',
            note: { label: 'Tempo Restante', text: 'Você tem 2 minutos para salvar o conhecimento da Casa da Sabedoria!' }
        }
    },

    practice: {
        roman: {
            title: 'Treino - Algarismos Romanos',
            setting: 'Treine o sistema de algarismos romanos no seu ritmo. Sem limite de tempo, para você focar em entender.',
            objective: 'Resolva problemas com algarismos romanos. As dicas estão disponíveis e os erros mostram a resposta certa.',
            note: { label: 'Modo Treino', text: 'Vá no seu ritmo. As dicas são livres e os erros mostram a resposta certa.' },
            hypatia: null
        },
        egyptian: {
            title: 'Treino - Hieróglifos Egípcios',
            setting: 'Explore os algarismos hieroglíficos egípcios sem pressão.',
            objective: 'Resolva problemas com algarismos egípcios. Sem limite de tempo.',
            note: { label: 'Modo Treino', text: 'Vá no seu ritmo. As dicas são livres e os erros mostram a resposta certa.' },
            hypatia: null
        },
        greek: {
            title: 'Treino - Algarismos Alfabéticos Gregos',
            setting: 'Estude o sistema alfabético grego sem pressão de tempo.',
            objective: 'Resolva problemas com algarismos gregos. Sem limite de tempo.',
            note: { label: 'Modo Treino', text: 'Vá no seu ritmo. As dicas são livres e os erros mostram a resposta certa.' },
            hypatia: null
        },
        babylonian: {
            title: 'Treino - Base 60 Babilônica',
            setting: 'Explore o sistema sexagesimal babilônico no seu ritmo.',
            objective: 'Resolva problemas de base 60. Sem limite de tempo.',
            note: { label: 'Modo Treino', text: 'Vá no seu ritmo. As dicas são livres e os erros mostram a resposta certa.' },
            hypatia: null
        },
        chinese: {
            title: 'Treino - Algarismos Chineses',
            setting: 'Estude as barras de contagem chinesas sem pressão.',
            objective: 'Resolva problemas com algarismos chineses. Sem limite de tempo.',
            note: { label: 'Modo Treino', text: 'Vá no seu ritmo. As dicas são livres e os erros mostram a resposta certa.' },
            hypatia: null
        },
        mayan: {
            title: 'Treino - Vigesimal Maia',
            setting: 'Explore o sistema maia de base 20 no seu ritmo.',
            objective: 'Resolva problemas de base 20. Sem limite de tempo.',
            note: { label: 'Modo Treino', text: 'Vá no seu ritmo. As dicas são livres e os erros mostram a resposta certa.' },
            hypatia: null
        },
        'hindu-arabic': {
            title: 'Treino - Algarismos Indo-Arábicos',
            setting: 'Explore as formas orientais dos algarismos arábico-índicos no seu ritmo.',
            objective: 'Resolva problemas com os dígitos arábicos orientais. Sem limite de tempo.',
            note: { label: 'Modo Treino', text: 'Vá no seu ritmo. As dicas são livres e os erros mostram a resposta certa.' },
            hypatia: null
        }
    }
},

// ── Problemas ────────────────────────────────────────────────────────────────

challenge: {
    roman: {
        contexts: {
            plus: [
                'Marcus precisa calcular o custo total de {num1} côvados de seda e {num2} côvados de linho.',
                'Um cliente compra {num1} ânforas de vinho e depois encomenda mais {num2}. Quantas são ao todo?',
                'A banca tem {num1} pães. Marcus recebe mais {num2}. Quantos há agora?',
                'Calcule a soma destas transações: {num1} denários e {num2} denários.',
                'Marcus conta {num1} clientes de manhã e {num2} à tarde. Total de clientes?'
            ],
            minus: [
                'Marcus tinha {num1} côvados de tecido e vendeu {num2} hoje. Quanto sobrou?',
                'Um cliente quer comprar {num1} ânforas de vinho, mas devolve {num2}. Quantas Marcus vende?',
                'A banca tem {num1} pães. Marcus vende {num2}. Quantos restam?',
                'Calcule a diferença destas transações: {num1} denários e {num2} denários.',
                'Marcus contou {num1} clientes hoje, e {num2} deles só olharam. Quantos compraram algo?'
            ]
        },
        hint: 'Decomponha os algarismos: {sym1} = {num1}, {sym2} = {num2}. Depois calcule: {num1} {operation} {num2} = {answer}'
    },

    egyptian: {
        contexts: {
            plus: [
                'O escriba real precisa contar as oferendas: {num1} pães e {num2} potes de mel para o templo.',
                'Calcule o número de blocos de pedra: {num1} blocos mais {num2} blocos para a construção da pirâmide.',
                'O tesouro do faraó tem {num1} peças de ouro. Acrescente {num2} peças. Qual é o total?',
                'Conte os rolos de papiro da biblioteca: {num1} rolos numa prateleira, some {num2} de outra.',
                'Calcule as provisões do banquete: {num1} porções somadas a {num2} porções.'
            ],
            minus: [
                'O escriba real conta {num1} pães e envia {num2} ao templo. Quantos sobraram?',
                'Calcule o número de blocos de pedra: {num1} blocos menos {num2} blocos para a construção da pirâmide.',
                'O tesouro do faraó tem {num1} peças de ouro. Retire {num2} peças. Quanto resta?',
                'Conte os rolos de papiro da biblioteca: {num1} rolos numa prateleira, menos {num2} levados para outro lugar.',
                'Calcule as provisões do banquete: {num1} porções reduzidas em {num2} porções.'
            ]
        },
        hint: 'Conte os símbolos: {sym1} = {num1}, {sym2} = {num2}. Calcule: {num1} {operation} {num2} = {answer}. Cada símbolo representa uma potência de 10!'
    },

    greek: {
        contexts: {
            plus: [
                'O arquiteto precisa calcular a proporção áurea para {num1} colunas mais {num2} colunas do Partenon.',
                'Pitágoras pede que você resolva: se um lado mede {num1} unidades e somamos {num2} unidades, qual é o resultado?',
                'Calcule a proporção: {num1} blocos de mármore somados a {num2} blocos para a construção do templo.',
                'O pergaminho do filósofo mostra {num1} alunos na academia, e chegam mais {num2}. Calcule o total.',
                'Harmonia matemática: equilibre a equação de {num1} liras e {num2} flautas no anfiteatro.'
            ],
            minus: [
                'O arquiteto precisa calcular a proporção áurea para {num1} colunas menos {num2} colunas do Partenon.',
                'Pitágoras pede que você resolva: se um lado mede {num1} unidades e subtraímos {num2} unidades, qual é o resultado?',
                'Calcule a proporção: {num1} blocos de mármore reduzidos em {num2} blocos para a construção do templo.',
                'O pergaminho do filósofo mostra {num1} alunos na academia, e {num2} deles vão embora. Calcule a diferença.',
                'Harmonia matemática: equilibre a equação de {num1} liras menos {num2} flautas no anfiteatro.'
            ]
        },
        hint: 'Decodifique as letras: {sym1} = {num1}, {sym2} = {num2}. Então: {num1} {operation} {num2} = {answer}. Lembre: cada letra grega representa um número específico!'
    },

    babylonian: {
        contexts: {
            plus: [
                'O engenheiro real calcula a distribuição de água: {num1} medidas mais {num2} medidas para os canais de irrigação.',
                'Calcule os recursos dos Jardins Suspensos: {num1} palmeiras somadas a {num2} cedros.',
                'O cálculo do astrônomo: {num1} observações celestes e {num2} posições de estrelas. Calcule o resultado.',
                'Distribuição de água para a agricultura: {num1} unidades somadas a {num2} unidades para os campos.',
                'A construção do templo precisa de {num1} tijolos de barro mais {num2} blocos de pedra. Calcule o total.'
            ],
            minus: [
                'O engenheiro real calcula a distribuição de água: {num1} medidas menos {num2} medidas para os canais de irrigação.',
                'Calcule os recursos dos Jardins Suspensos: {num1} palmeiras menos {num2} cedros derrubados.',
                'O cálculo do astrônomo: {num1} observações celestes menos {num2} noites nubladas. Calcule o resultado.',
                'Distribuição de água para a agricultura: {num1} unidades com {num2} unidades retiradas dos campos.',
                'A construção do templo precisa de {num1} tijolos de barro menos {num2} quebrados. Calcule quantos servem.'
            ]
        },
        hint: 'Sistema de base 60! Cada posição vale 60x a anterior. {sym1} = {num1}, {sym2} = {num2}. Calcule: {num1} {operation} {num2} = {answer}. 𒐕=1, 𒌋=10'
    },

    chinese: {
        contexts: {
            plus: [
                'O mercador calcula: {num1} peças de seda mais {num2} peças de algodão no mercado da Dinastia Han.',
                'Calcule o tesouro imperial: {num1} taéis de prata somados a {num2} taéis de ouro.',
                'O mestre do ábaco pergunta: {num1} sacos de arroz e {num2} sacos de trigo. Qual é o resultado?',
                'Preparativos da festa: {num1} lanternas somadas a {num2} dragões de papel. Calcule o total.',
                'As barras de contagem mostram: {num1} peças de jade mais {num2} moedas de bronze no mercado.'
            ],
            minus: [
                'O mercador calcula: {num1} peças de seda menos {num2} peças vendidas no mercado da Dinastia Han.',
                'Calcule o tesouro imperial: {num1} taéis de prata reduzidos em {num2} taéis gastos.',
                'O mestre do ábaco pergunta: {num1} sacos de arroz menos {num2} sacos de trigo. Qual é o resultado?',
                'Preparativos da festa: {num1} lanternas com {num2} retiradas para conserto. Calcule o total.',
                'As barras de contagem mostram: {num1} peças de jade menos {num2} trocadas no mercado.'
            ]
        },
        hint: 'Sistema chinês! {sym1} = {num1}, {sym2} = {num2}. Calcule: {num1} {operation} {num2} = {answer}. 一二三=1,2,3; 十百千萬=10,100,1000,10000'
    },

    mayan: {
        contexts: {
            plus: [
                'O astrônomo maia calcula: {num1} dias mais {num2} dias no sagrado calendário Tzolk\'in.',
                'Prepare oferendas para Kukulcán: {num1} grãos de cacau somados a {num2} peças de jade.',
                'O escriba registra a colheita: {num1} espigas de milho somadas a {num2} abóboras da milpa.',
                'Calcule os degraus da pirâmide: {num1} pedras mais {num2} pedras para o próximo nível de Chichén Itzá.',
                'O mercador conta no mercado de Tikal: {num1} penas de quetzal e {num2} lâminas de obsidiana.'
            ],
            minus: [
                'O astrônomo maia calcula: {num1} dias menos {num2} dias no sagrado calendário Tzolk\'in.',
                'Prepare oferendas para Kukulcán: {num1} grãos de cacau menos {num2} que foram doados.',
                'O escriba registra a colheita: {num1} espigas de milho menos {num2} abóboras trocadas da milpa.',
                'Calcule os degraus da pirâmide: {num1} pedras menos {num2} pedras rachadas no transporte.',
                'O mercador conta no mercado de Tikal: {num1} penas de quetzal menos {num2} vendidas.'
            ]
        },
        hint: 'Vigesimal maia (base 20)! Ponto = 1, barra = 5, concha = 0. {sym1} = {num1}, {sym2} = {num2}. Calcule: {num1} {operation} {num2} = {answer}.'
    },

    'hindu-arabic': {
        contexts: {
            plus: [
                'Al-Khwarizmi anota duas medidas do observatório: {num1} e {num2}. Qual é a soma delas?',
                'Um mercador do bazar de Bagdá tem {num1} dirrãs e recebe mais {num2}. Quantos ele tem agora?',
                'A Casa da Sabedoria cataloga {num1} manuscritos gregos e {num2} rolos persas. Quantos são no total?',
                'Um astrônomo calcula {num1} graus para um arco e {num2} para outro. Qual é o arco total?',
                'Um tradutor termina {num1} páginas de manhã e {num2} à noite. Qual é o total do dia?'
            ],
            minus: [
                'Al-Khwarizmi anota duas medidas do observatório: {num1} e {num2}. Qual é a diferença entre elas?',
                'Um mercador do bazar de Bagdá tem {num1} dirrãs e gasta {num2}. Quantos restam?',
                'A Casa da Sabedoria cataloga {num1} manuscritos gregos e {num2} rolos persas. Quantos manuscritos gregos há a mais?',
                'Um astrônomo calcula {num1} graus para um arco e {num2} para outro. Qual é a diferença?',
                'Um tradutor termina {num1} páginas de manhã e {num2} à noite. Qual é a diferença?'
            ]
        },
        hint: 'Estes são algarismos arábico-índicos orientais: {sym1} = {num1}, {sym2} = {num2}. Calcule: {num1} {operation} {num2} = {answer} → {answerNumeral}'
    }
},

// ── Guias rápidos ────────────────────────────────────────────────────────────

guide: {
    roman: {
        title: 'Referência Rápida dos Algarismos Romanos',
        tip: 'Dica: quando um algarismo menor vem antes de um maior, ele é subtraído (por exemplo, IV = 4, IX = 9)'
    },
    egyptian: {
        title: 'Algarismos Hieroglíficos Egípcios',
        tip: 'Dica: conte cada símbolo, multiplique pelo valor dele e some tudo no final!'
    },
    greek: {
        title: 'Algarismos Alfabéticos Gregos',
        tip: 'Dica: as letras se combinam para formar números. ρκγ = 100 + 20 + 3 = 123'
    },
    babylonian: {
        title: 'Sistema Sexagesimal Babilônico (Base 60)',
        symbols: 'Símbolos:',
        wedgeOne: '1 (cunha vertical)',
        wedgeTen: '10 (cunha horizontal)',
        wedgeZero: '0 ou posição vazia',
        howItWorks: 'Como funciona:',
        howItWorksText: 'Os números são escritos em posições. Cada posição à esquerda vale 60x mais (como a nossa base 10, mas em base 60!).',
        example: 'Exemplo:',
        tip: 'Dica: conte as cunhas de cada posição e multiplique por potências de 60!'
    },
    chinese: {
        title: 'Barras de Contagem Chinesas / Sistema Suanpan',
        basicDigits: 'Dígitos básicos:',
        placeValues: 'Valores posicionais:',
        ten: 'dez',
        hundred: 'cem',
        thousand: 'mil',
        tenThousand: 'dez mil',
        tip: 'Dica: leia da esquerda para a direita. 三百五十二 = 3x100 + 5x10 + 2 = 352'
    },
    mayan: {
        title: 'Sistema Vigesimal Maia (Base 20)',
        dot: 'ponto',
        bar: 'barra',
        shell: 'concha',
        max: 'máximo = 19',
        tip: 'Dica: cada posição vale 20x a de baixo. As posições se empilham na vertical, e a do topo é a mais significativa.'
    },
    'hindu-arabic': {
        title: 'Referência Rápida dos Algarismos Indo-Arábicos',
        tip: 'Este sistema posicional, com um zero de verdade, é o ancestral dos números que usamos hoje.'
    }
},

// ── Códice ───────────────────────────────────────────────────────────────────

codex: {
    roman: {
        title: 'Algarismos Romanos',
        period: 'c. 900 a.C. – 400 d.C.',
        region: 'Península Itálica, Império Romano',
        sections: [
            {
                heading: 'Origens',
                text: 'Os algarismos romanos evoluíram de um sistema simples de marcação usado pelos etruscos e pelos primeiros povos latinos. Os símbolos I, V e X provavelmente vêm de entalhes feitos em ossos ou madeira: I é um traço único, V lembra uma mão e X são dois V cruzados.'
            },
            {
                heading: 'Notação Subtrativa',
                text: 'A regra de que um algarismo menor colocado antes de um maior significa subtração (IV = 4, IX = 9) foi um refinamento tardio. Romanos mais antigos escreviam IIII em vez de IV, e essa forma "antiga" ainda aparece em muitos mostradores de relógio hoje.'
            },
            {
                heading: 'Limitações',
                text: 'Os algarismos romanos não têm zero nem noção de valor posicional. Multiplicar e dividir era extraordinariamente difícil, provável razão pela qual os romanos adotaram o ábaco para cálculos sérios. Números grandes como 1.000.000 exigiam símbolos inventados, de pouco uso comum.'
            },
            {
                heading: 'Legado',
                text: 'Os algarismos romanos persistem em títulos de capítulos, mostradores de relógio, créditos de filmes e nomes de monarcas e papas. Edições do Super Bowl, Jogos Olímpicos e pedras fundamentais de prédios ainda os usam, uma presença de 2.000 anos na vida cotidiana.'
            }
        ]
    },

    egyptian: {
        title: 'Algarismos Hieroglíficos Egípcios',
        period: 'c. 3000 a.C. – 400 d.C.',
        region: 'Vale do Nilo, Norte da África',
        sections: [
            {
                heading: 'Um Sistema Puramente Aditivo',
                text: 'Os algarismos egípcios usavam hieróglifos distintos para cada potência de dez: um traço (1), um calcanhar (10), um rolo de corda (100), uma flor de lótus (1.000), um dedo dobrado (10.000), um girino (100.000) e um deus de braços erguidos (1.000.000). Os números se formavam repetindo e combinando esses símbolos: puramente aditivo, sem subtração nem valor posicional.'
            },
            {
                heading: 'O Papiro de Rhind',
                text: 'O Papiro Matemático de Rhind (c. 1550 a.C.) é um dos documentos matemáticos mais antigos que existem. Contém 84 problemas de aritmética e geometria, incluindo frações unitárias, cálculos de área e estimativa de volume. Os egípcios trabalhavam inteiramente com frações unitárias (1/n), com exceção de 2/3.'
            },
            {
                heading: 'Pi e a Pirâmide',
                text: 'Os engenheiros egípcios aproximavam π como (16/9)² ≈ 3,16, com precisão dentro de 0,6%. As dimensões da Grande Pirâmide de Gizé codificam esse valor, embora se debata há séculos se isso foi deliberado ou coincidência.'
            },
            {
                heading: 'Escrita Hierática',
                text: 'Para a escrita do dia a dia, os egípcios usavam algarismos "hieráticos", uma versão cursiva e abreviada dos hieróglifos que permitia escrever mais rápido no papiro. O sistema hierático usava símbolos diferentes para 1 a 9 (e não apenas traços repetidos), o que o tornava bem mais compacto.'
            }
        ]
    },

    greek: {
        title: 'Algarismos Alfabéticos Gregos',
        period: 'c. século V a.C. – era bizantina',
        region: 'Grécia, Alexandria, Mediterrâneo Oriental',
        sections: [
            {
                heading: 'O Sistema Milesiano',
                text: 'Os algarismos alfabéticos gregos (também chamados de milesianos ou jônicos) atribuíam valores numéricos às 24 letras do alfabeto grego, mais três letras arcaicas: estigma/digama (6), copa (90) e sampi (900). O alfabeto completo representava assim 1 a 9, 10 a 90 e 100 a 900.'
            },
            {
                heading: 'Hipátia de Alexandria',
                text: 'Hipátia (c. 360–415 d.C.) foi uma filósofa neoplatônica e matemática que editou e ensinou a partir das obras de Diofanto, Ptolomeu e Apolônio. Foi a última grande matemática da tradição alexandrina antiga. Seu assassinato por uma turba cristã marcou o fim simbólico da erudição pagã em Alexandria.'
            },
            {
                heading: 'Diofanto e a Álgebra',
                text: 'Diofanto de Alexandria (c. século III d.C.) escreveu a Aritmética, 13 livros de problemas algébricos que lançaram a base do que Al-Khwarizmi viria a formalizar. Sua notação usava algarismos alfabéticos gregos e símbolos proto-algébricos, o que faz dele um dos primeiros algebristas da história.'
            },
            {
                heading: 'O Mecanismo de Anticítera',
                text: 'O mecanismo de Anticítera (c. 100 a.C.), uma calculadora astronômica grega antiga, usava rodas dentadas para prever eventos celestes. Suas inscrições empregam algarismos alfabéticos para graus e divisões de calendário, mostrando como esses símbolos estavam incorporados a instrumentos científicos sofisticados.'
            }
        ]
    },

    babylonian: {
        title: 'Algarismos Cuneiformes Babilônicos',
        period: 'c. 2000–500 a.C.',
        region: 'Mesopotâmia (atual Iraque)',
        sections: [
            {
                heading: 'Base 60: O Sistema Sexagesimal',
                text: 'Os babilônios usavam um sistema posicional de base 60 (sexagesimal), o mais sofisticado do mundo antigo. Por que 60? Porque é divisível por 1, 2, 3, 4, 5, 6, 10, 12, 15, 20 e 30, mais divisores do que qualquer número menor. Isso tornava as frações mais simples no dia a dia.'
            },
            {
                heading: 'O Legado que Você Usa Todo Dia',
                text: 'O minuto de 60 segundos, a hora de 60 minutos, o círculo de 360 graus e o dia de 24 horas descendem diretamente da matemática babilônica. Toda vez que você olha um relógio ou uma bússola, está usando um sistema numérico de 4.000 anos.'
            },
            {
                heading: 'Plimpton 322',
                text: 'Plimpton 322 é uma tábua de argila datada de c. 1800 a.C. que lista ternos pitagóricos (soluções inteiras de a² + b² = c²) mais de 1.000 anos antes de Pitágoras. Os matemáticos babilônicos tinham profundo domínio dos triângulos retângulos e das equações quadráticas.'
            },
            {
                heading: 'Notação Posicional e o Zero',
                text: 'Os babilônios inventaram a notação posicional, em que o valor de um símbolo depende da posição que ocupa. Também criaram um símbolo marcador (⊙) para indicar um grupo posicional vazio, o precursor mais antigo do zero. Ainda assim, nunca usaram o zero como número em cálculos, apenas como separador.'
            }
        ]
    },

    chinese: {
        title: 'Barras de Contagem Chinesas',
        period: 'c. 400 a.C. – presente (formas tradicionais)',
        region: 'China, Leste Asiático',
        sections: [
            {
                heading: 'Barras de Contagem',
                text: 'Os matemáticos chineses usavam barras físicas de bambu ou marfim dispostas sobre um tabuleiro para representar números. Barras verticais (⌶) representavam as unidades de 1 a 5; uma única barra horizontal (一) ficava perpendicular para o 6. Alternar as orientações entre colunas (vertical, depois horizontal) evitava confusão entre dígitos vizinhos, um precursor do pensamento binário.'
            },
            {
                heading: 'O Suanpan (Ábaco)',
                text: 'O suanpan chinês (算盤), criado por volta do século II a.C., fazia adição, subtração, multiplicação, divisão e raízes quadradas mais rápido que a aritmética europeia de papel e pena durante séculos. Operadores habilidosos empatavam com calculadoras eletrônicas em operações básicas, em competições realizadas até 1946.'
            },
            {
                heading: 'Números Negativos',
                text: 'Os matemáticos chineses usavam barras vermelhas para números positivos e barras pretas para negativos, o primeiro uso conhecido de números negativos em cálculo. Os Nove Capítulos sobre a Arte Matemática (c. século I d.C.) trazem regras de aritmética com quantidades negativas, mais de mil anos antes de a matemática europeia aceitá-las.'
            },
            {
                heading: 'Os Nove Capítulos',
                text: 'O Jiuzhang Suanshu (Nove Capítulos sobre a Arte Matemática) é um texto matemático chinês fundamental, que cobre problemas práticos: medição de terras, distribuição de colheitas, engenharia civil e tributação. Ele descreve a eliminação de Gauss (redução por linhas) para resolver sistemas de equações, 1.800 anos antes de Gauss.'
            }
        ]
    },

    mayan: {
        title: 'Algarismos Vigesimais Maias',
        period: 'c. 300 a.C. – conquista espanhola (século XVI)',
        region: 'Mesoamérica (México, Guatemala, Belize)',
        sections: [
            {
                heading: 'Base 20 e um Zero Independente',
                text: 'Os maias desenvolveram um sistema numérico posicional vigesimal (base 20), escrito na vertical, de baixo para cima. O zero deles, um símbolo de concha, foi uma das apenas duas invenções independentes do zero na história (a outra ocorreu no Sul da Ásia). O zero maia não era só um marcador de posição; era um número usado em cálculos.'
            },
            {
                heading: 'O Sistema de Calendário Maia',
                text: 'O calendário maia de Conta Longa conseguia especificar qualquer data dentro de um ciclo de 5.125 anos (aproximadamente de 3114 a.C. a 2012 d.C.) com uma notação de cinco dígitos. Seus cálculos astronômicos, em especial os ciclos de Vênus (584 dias) e os meses lunares, tinham precisão de minutos de arco, sem telescópios.'
            },
            {
                heading: 'O Códice de Dresden',
                text: 'O Códice de Dresden (c. 900–1000 d.C.) é um livro maia pré-colombiano com tabelas de Vênus que preveem as aparições do planeta como estrela da manhã e da tarde ao longo de 104 anos, com precisão extraordinária. É um dos apenas quatro códices maias sobreviventes; os demais foram queimados por missionários espanhóis.'
            },
            {
                heading: 'Pontos, Barras e Conchas',
                text: 'Três símbolos codificam todos os números maias: um ponto (●) para 1, uma barra (━) para 5 e uma concha (○) para 0. A elegância desse sistema, três símbolos para qualquer número dispostos posicionalmente, é uma conquista matemática da mais alta ordem, e surgiu de forma completamente independente da matemática do Velho Mundo.'
            }
        ]
    },

    'hindu-arabic': {
        title: 'Algarismos Indo-Arábicos',
        period: 'c. século VI d.C. (Índia) → século IX d.C. (Bagdá) → século XII d.C. (Europa)',
        region: 'Índia → Pérsia → Bagdá → Mediterrâneo → Mundo',
        sections: [
            {
                heading: 'A Maior Invenção Matemática',
                text: 'O sistema numérico indo-arábico, dez símbolos (0 a 9) num sistema posicional de base 10 com um zero de verdade, é possivelmente a invenção de maior impacto na história da matemática. Todo número da ciência, das finanças, da engenharia e da computação hoje usa esse sistema, descendente direto dos algarismos brâmi da Índia antiga.'
            },
            {
                heading: 'Al-Khwarizmi e a Casa da Sabedoria',
                text: 'Muhammad ibn Musa al-Khwarizmi (c. 780–850 d.C.) foi um matemático persa que trabalhou na Bayt al-Hikma (Casa da Sabedoria), em Bagdá, sob o Califado Abássida. Seu livro Kitāb al-mukhtaṣar fī ḥisāb al-jabr wa-l-muqābala (O Livro Compendioso sobre Cálculo por Completamento e Balanceamento) nos deu a palavra "álgebra" (al-jabr). Uma obra posterior sobre algarismos indianos apresentou o sistema indo-arábico ao mundo islâmico e, por meio de traduções latinas, à Europa.'
            },
            {
                heading: 'A Palavra "Algoritmo"',
                text: 'A palavra "algoritmo" vem de "Algoritmi", a forma latinizada do nome de Al-Khwarizmi. Quando tradutores latinos descreveram seus métodos de aritmética com algarismos indianos, intitularam suas obras "Algoritmi dixit..." ("Al-Khwarizmi disse..."). O nome dele virou termo para qualquer procedimento de cálculo passo a passo e, por fim, o conceito fundador da ciência da computação.'
            },
            {
                heading: 'A Longa Resistência da Europa',
                text: 'Os algarismos indo-arábicos chegaram à Europa pela Espanha e pela Itália nos séculos XII e XIII. Os mercadores os adoraram; as autoridades os temeram. Florença proibiu os algarismos em 1299, com medo de que a facilidade de transformar o símbolo 0 em 6 ou 9 permitisse fraudes. Apesar da resistência oficial, a superioridade prática do sistema era inegável, e ele substituiu os algarismos romanos nos cálculos já no Renascimento.'
            }
        ]
    }
},

// ── Sobre ────────────────────────────────────────────────────────────────────

about: {
    intro: 'Mathematikos é um jogo educativo gratuito e aberto, criado por Guilherme Almeida Zeni. Esta página documenta a origem do projeto (incluindo registros de data anteriores a todos os produtos semelhantes conhecidos) e a filosofia por trás dele.',

    creatorHeading: 'O Criador',
    creatorText1: 'Guilherme é engenheiro de software sênior, com mais de 10 anos de experiência. Mathematikos nasceu de uma paixão pessoal por história e matemática, e da convicção de que não existe um bom jogo de navegador gratuito que ensine sistemas numéricos antigos como uma experiência de jogo de verdade.',
    creatorText2: 'O jogo é e continuará sendo gratuito. Se ele ajudar você, considere apoiá-lo voluntariamente.',

    whyHeading: 'Por Que Estas Civilizações?',
    whyLead: 'Cada civilização foi escolhida por sua singularidade matemática e sua importância cultural:',
    whyItems: [
        { name: 'Romana', text: 'O sistema antigo mais familiar; um ponto de partida suave' },
        { name: 'Egípcia', text: 'Base 10, mas totalmente aditivo; os hieróglifos visuais o tornam memorável' },
        { name: 'Grega', text: 'Algarismos alfabéticos; uma ponte única entre língua e número' },
        { name: 'Babilônica', text: 'Base 60, sexagesimal; a origem do nosso minuto de 60 segundos e do círculo de 360 graus' },
        { name: 'Chinesa', text: 'Barras de contagem e suanpan (ábaco); um sistema posicional sofisticado' },
        { name: 'Maia', text: 'Base 20, vigesimal; uma das poucas invenções independentes do zero' },
        { name: 'Indo-Arábica', text: 'O grande final, o sistema que unificou todos os outros e virou nossos algarismos modernos' }
    ],

    timelineHeading: 'Linha do Tempo do Desenvolvimento',
    timeline: [
        {
            date: 'Fim de 2024',
            title: 'A Ideia Nasce',
            text: 'Durante uma conversa no ChatGPT intitulada "Jogo de adição histórica", o conceito de Mathematikos toma forma: um jogo de navegador que ensina sistemas numéricos antigos por meio de desafios de viagem no tempo. O nome, a lista de civilizações e os dois modos de jogo (Cenas Temáticas e Desafios Temporais) são todos definidos nessa sessão.'
        },
        {
            date: '19 de outubro de 2024',
            title: 'Repositório do Protótipo Criado',
            text: 'O primeiro commit no repositório do protótipo é feito às 22:21 (UTC-3). Dezoito minutos depois, um documento de design completo é registrado e enviado no dia seguinte, cobrindo o conceito integral do jogo, a narrativa, as civilizações, as mecânicas e o plano de tecnologia. Esse documento tem data criptograficamente registrada no histórico do Git.',
            proof: 'Primeiro commit do protótipo: e78660e, 19 de outubro de 2024, 22:21 UTC-3'
        },
        {
            date: '21 de outubro a 6 de novembro de 2024',
            title: 'Primeiro Protótipo Construído',
            text: 'Um protótipo funcional é desenvolvido com React, TypeScript, Vite e Phaser 3. O sistema de seleção de temas, os shaders WebGL por civilização e a cena de introdução são implementados. O desenvolvimento se estende por 19 dias no repositório do protótipo.'
        },
        {
            date: '2025',
            title: 'Jogo de Tabuleiro Mathematicus é Lançado',
            text: 'Um jogo de tabuleiro físico chamado Mathematicus é lançado, cobrindo os sistemas numéricos babilônico, egípcio, chinês, romano, maia, árabe e binário, um conceito convergente desenvolvido de forma independente. Mathematikos é mais de um ano anterior a esse lançamento, como comprova o histórico do Git de 2024. Os dois produtos são complementares, não concorrentes: Mathematikos é digital e gratuito; Mathematicus é físico e pago.'
        },
        {
            date: '2025',
            title: 'Começa o Mestrado em Matemática Aplicada',
            text: 'O desenvolvimento de Mathematikos é pausado para dar espaço ao trabalho acadêmico. O projeto descansa, mas a ideia não desaparece.'
        },
        {
            date: '15 de fevereiro de 2026',
            title: 'Reconstruído em HTML/CSS/JS Puros',
            text: 'Mathematikos é reconstruído do zero como um jogo de navegador sem dependências, em HTML, CSS e JavaScript ES6 puros. O objetivo: jogar na hora, sem etapa de build, funcionando offline. As civilizações romana, egípcia, grega, babilônica e chinesa são implementadas numa única noite.'
        },
        {
            date: '23 de março de 2026',
            title: 'Civilização Maia e Grande Expansão',
            text: 'O sistema vigesimal maia (base 20) é adicionado, junto com renderização completa em SVG para todos os sistemas numéricos, uma suíte de testes por civilização, o Modo Treino e os desafios invertidos (escrever algarismos antigos a partir de números arábicos). O código é modularizado numa estrutura de arquivos limpa.'
        },
        {
            date: '25 de março de 2026',
            title: 'Modo Escuro e Polimento Visual',
            text: 'O suporte completo ao modo escuro é adicionado, corrigindo todas as cores claras fixas no código. Estilos embutidos são reescritos como classes CSS. O jogo passa a ficar bonito tanto no tema claro quanto no escuro.'
        },
        {
            date: '25 de março de 2026',
            title: 'Civilização Indo-Arábica e Expansão Completa',
            text: 'A sétima e última civilização é adicionada: os algarismos indo-arábicos da Bagdá do século IX, a história de origem do sistema numérico que usamos hoje. O Desafio Diário, o Códice (enciclopédia das civilizações), os temas visuais por civilização, o som ambiente, os desafios de conversão entre civilizações e o PWA (jogo offline) saem todos numa única versão.'
        }
    ],

    evidenceHeading: 'Evidências e Procedência',
    evidenceText: 'A conversa original de 2024 no ChatGPT e o histórico de commits do repositório do protótipo documentam a origem independente. O repositório do protótipo foi arquivado desde então.',
    evidenceAlt1: 'Conversa no ChatGPT intitulada "Jogo de adição histórica", outubro de 2024',
    evidenceCaption1: 'Conversa no ChatGPT, "Jogo de adição histórica", outubro de 2024',
    evidenceAlt2: 'Repositório do protótipo mostrando o primeiro commit em 19 de outubro de 2024',
    evidenceCaption2: 'Repositório do protótipo, primeiro commit em 19 de outubro de 2024'
}

};
