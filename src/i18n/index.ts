import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const ecocycleTranslations = {
  "pt-BR": {
    gestation: "Gestação",
    birth: "Nascimento",
    maturity: "Maturidade",
    creativeDestruction: "Destruição Criativa",
    povertyTrap: "Armadilha da Pobreza (Escassez)",
    rigidityTrap: "Armadilha da Rigidez",
  },
  es: {
    gestation: "Gestación",
    birth: "Nacimiento",
    maturity: "Madurez",
    creativeDestruction: "Destrucción Creativa",
    povertyTrap: "Trampa de la Pobreza (Escasez)",
    rigidityTrap: "Trampa de la Rigidez",
  },
  en: {
    gestation: "Gestation",
    birth: "Birth",
    maturity: "Maturity",
    creativeDestruction: "Creative Destruction",
    povertyTrap: "Poverty Trap (Scarcity)",
    rigidityTrap: "Rigidity Trap",
  },
} as const;

export const resources = {
  "pt-BR": {
    translation: {
      app: {
        title: "Ordem das Estruturas Libertadoras",
        subtitle: "Facilitação com Ecocycle Planning & Strings",
      },
      nav: {
        freeAccess: "ACESSO LIVRE",
        deck: "Deck",
        quizzes: "Quizzes",
        dashboard: "Dashboard",
        admin: "Admin",
        logout: "Sair",
        currentRank: "Rank Atual",
        totalXp: "XP Total",
        home: "Início",
        language: "Idioma / Language",
        jediLevel: "Nível Jedi",
        endSession: "Encerrar Sessão",
      },
      levelSelection: {
        title: "Escolha seu Quiz",
        subtitle:
          "Selecione o nível de dificuldade e a quantidade de perguntas",
        questionCount: "Nº PERGUNTAS:",
        back: "Voltar",
        backToHome: "Voltar ao Início",
        mentorBadge: "Jedi Mentor",
        mentorName: "Mestre Nomura",
        mentorQuote:
          '"Dê o primeiro passo para testar seus conhecimentos. O aprendizado real vem dos desafios superados. Que a força esteja com você!"',
        howQuizWorks: "Como Funciona o Quiz?",
        padawanName: "Padawan",
        padawanDesc:
          "Reconhecendo Estruturas Libertadoras e suas conexões com o Ecocycle Planning.",
        jediName: "Jedi",
        jediDesc:
          "Combinando Estruturas Libertadoras em Strings com o Ecocycle Planning.",
        yodaName: "Mestre Yoda",
        yodaDesc:
          "Arquitetando experiências de facilitação com Ecocycle Planning e Strings.",
        requiresPadawan: "Requer 100% de acertos no Quiz Padawan",
        requiresJedi: "Requer 100% de acertos no Quiz Jedi",
        locked: "Bloqueado",
        startQuiz: "Iniciar Quiz",
      },
      home: {
        freeAccessBadge:
          "Acesso Livre • Estruturas Libertadoras & Ecocycle Planning",
        heroTitle1: "ECOCYCLE",
        heroTitle2: "PLANNING",
        heroDesc:
          "Domine a arte de desenhar Strings com Estruturas Libertadoras para destravar as Armadilhas da Pobreza e da Rigidez, equilibrar o portfólio no Ecocycle e semear novas iniciativas.",
        mentorBadge: "Facilitador Mestre",
        mentorName: "Mestre Nomura",
        mentorQuote:
          '"As Estruturas Libertadoras dão forma à inteligência coletiva. Encadeie-as em Strings harmoniosas em torno do Ecociclo!"',
        howJourneyWorks: "Como Funciona a Jornada?",
        journeyTitle: "Sua Jornada com Estruturas Libertadoras",
        journeyStep1: "Explore o Deck",
        journeyStep2: "Monte Strings",
        journeyStep3: "Dashboard",
        cardDeckTitle: "DECK",
        cardDeckSub: "43 ESTRUTURAS LIBERTADORAS",
        cardDeckDesc:
          "Conheça todas as 43 Estruturas Libertadoras oficiais com propósito, passos, fluxo sequencial e conexão biológica com o Ecocycle Planning.",
        cardDeckBtn: "EXPLORAR AS 43 ELS",
        cardQuizTitle: "QUIZZES",
        cardQuizSub: "MONTAGEM DE STRINGS",
        cardQuizDesc:
          "30 exercícios desafiadores em 3 níveis (Padawan, Jedi e Yoda) de encadeamento de Strings com o Ecocycle Planning para destravar gargalos.",
        cardQuizBtn: "MONTAR STRINGS",
        cardDashTitle: "Dashboard de Facilitação",
        cardDashDesc:
          "Acompanhe o domínio das 43 Estruturas Libertadoras, sua evolução em montagem de Strings e diagnósticos do Ecocycle Planning.",
      },
      deck: {
        officialBadge: "Repertório Oficial de Facilitação",
        title: "Deck das 43 Estruturas Libertadoras",
        subtitle:
          "Explore as 43 Estruturas Libertadoras oficiais (as 33 clássicas + as 10 novidades do Fieldbook em liberatingstructures.com) com seus desenhos oficiais, propósitos essenciais, fluxos sequenciais e regras mínimas.",
        backToHome: "Voltar ao Início",
        practiceQuizzes: "Praticar nos Quizzes",
        mentorBadge: "Facilitador Mestre",
        mentorName: "Mestre Nomura",
        mentorQuote:
          '"Cada Estrutura Libertadora tem um propósito único. Use os filtros por propósito e coleção para encontrar a dinâmica exata para o seu momento de facilitação."',
        howDeckWorks: "Como Funciona o Deck?",
        searchPlaceholder: "Buscar por #ID, nome, objetivo ou propósito...",
        clearFilters: "Limpar Filtros",
        allCategories: "Todas as Categorias",
        allEditions: "Todas as 43",
        classicsEdition: "33 Clássicas",
        fieldbookEdition: "10 Fieldbook",
        structuresFound: "estruturas encontradas",
        viewStructure: "Ver Estrutura",
        officialDrawingBadge: "Desenho Oficial",
        officialDrawingOf: "Desenho oficial de {{title}}",
        anyGroup: "Qualquer grupo",
        backToDeck: "Voltar ao Deck",
        officialDrawing: "Desenho Oficial",
        structureNumber: "ESTRUTURA",
        originalTitle: "Título Original:",
        scrollDownPrompt:
          "Role a tela para baixo • 5 Etapas do Guia Completo de Condução",
        scrollDownHint:
          "Use a barra de rolagem laranja à direita ou clique neste banner para avançar",
        scrollDownAria: "Rolar para ver detalhes completos da estrutura",
        scrollToGuide: "Role para o Guia de Facilitação",
        whenToUse: "QUANDO UTILIZAR",
        applicationContext: "Contexto de Aplicação",
        facilitationFlow: "FLUXO DE FACILITAÇÃO",
        input: "Entrada",
        process: "Processo",
        output: "Saída",
        practicalExampleHeading: "EXEMPLO PRÁTICO DE CONDUÇÃO",
        dynamicInAction: "Dinâmica em Ação",
        recommendedCases: "CASOS DE USO RECOMENDADOS",
        whereToApply: "Onde aplicar no dia a dia",
        structureBenefits: "BENEFÍCIOS DA ESTRUTURA",
        expectedImpacts: "Impactos Esperados",
        prevStructure: "Estrutura Anterior",
        nextStructure: "Próxima Estrutura",
      },
      quiz: {
        stringBuilding: "Montagem de String",
        howQuizWorks: "Como Funciona o Quiz",
        timeLeft: "Tempo",
        energy: "Energia",
        progress: "Progresso",
        questionOf: "Pergunta {{current}} de {{total}}",
        selectCount:
          "Selecione {{count}} estrutura(s) libertadora(s) adequada(s)",
        confirmString: "Confirmar String",
        nextQuestion: "Próxima Pergunta",
        finishQuiz: "Concluir Quizzes",
        nextChallenge: "Próximo Desafio de String",
        feedbackCorrect: "String Excelente!",
        feedbackIncorrect: "String Incorreta",
        goodChoice: "Boa escolha de facilitação!",
        learningOpportunity: "Às vezes aprendemos. Às vezes acertamos.",
        correctDesc:
          "Sua seleção é muito aderente ao propósito e às pistas deste cenário.",
        incorrectDesc:
          "A facilitação é um processo vivo de refinamento. Analise as pistas conceituais abaixo para aprofundar seu repertório.",
        pedagogicalAnalysis: "Análise Pedagógica da Facilitação",
        bestChoiceTitle: "1. Melhor escolha",
        whyItWorksTitle: "2. Por que funciona?",
        scenarioClueTitle: "3. Pista do cenário",
        anotherPossibilityTitle: "4. Outra possibilidade",
        flowLabel: "Fluxo:",
        mentorAdviceTitle: "Conselho do Facilitador Mestre:",
        mentorRole: "Facilitador Estratégico",
        scenarioTitle: "Cenário de Facilitação com Ecocycle Planning",
        instructionPadawan:
          "Selecione a Estrutura Libertadora mais aderente às pistas deste cenário.",
        instructionJedi:
          "Selecione as 2 Estruturas Libertadoras que compõem uma String fluida com o Ecocycle.",
        instructionYoda:
          "Selecione as 3 Estruturas Libertadoras que complementam a arquitetura de facilitação.",
        pipelineTitle: "Pipeline da String:",
        selectPrompt:
          "Selecione as estruturas abaixo para montar o fluxo da sua String...",
        selected: "selecionada(s)",
        defaultAdvice:
          "Uma String não é uma lista estática de dinâmicas. Cada Estrutura Libertadora recebe uma Entrada, opera uma Transformação com 100% dos participantes e entrega uma Saída que alimenta a etapa seguinte do Ecocycle Planning. Analise o gargalo do cenário e as pistas contextuais.",
        whyThisString: "Por que esta combinação?",
        exitQuiz: "Sair do Quiz",
        noChallenge:
          "Nenhum exercício de String carregado para este nível. Redirecionando...",
        challengeFallback: "Exercício de String com Ecocycle",
        structuresRequired: "Estruturas Requeridas",
        yourString: "Sua String Construída",
      },
      auth: {
        freeAccess: "Acesso Livre",
        syncProfile:
          "Sincronize seu perfil para salvar seu progresso, dominar Estruturas Libertadoras e subir no ranking.",
        signInGoogle: "Entrar com Google",
        guestMode: "Modo Visitante (Sem Salvar Nuvem)",
        or: "ou",
        terms:
          "Ao entrar, você concorda com os termos de letramento digital e conformidade ética de IA.",
      },
      ranks: {
        padawan: "Padawan",
        jedi: "Jedi",
        yoda: "Mestre Yoda",
        padawanRole: "Strings Básicas (1 EL Chave)",
        jediRole: "Encadeamentos Duplos de Estruturas",
        yodaRole: "Arquitetura Estratégica de Strings",
      },
      ecocycle: {
        domainTitle: "DOMÍNIO NO ECOCYCLE & STRINGS",
        evolutionTitle: "EVOLUÇÃO COMO FACILITADOR",
        gestation: "Gestação",
        birth: "Nascimento",
        maturity: "Maturidade",
        creativeDestruction: "Destruição Criativa",
        povertyTrap: "Armadilha da Pobreza (Escassez)",
        rigidityTrap: "Armadilha da Rigidez",
      },
      admin: {
        title: "Painel Administrativo",
        headerTitlePrefix: "CONTROLE DE",
        headerTitleHighlight: "ACESSO & USUÁRIOS",
        resetProgress: "ZERAR PROGRESSO",
        deleteUser: "EXCLUIR USUÁRIO",
        confirmReset:
          "Tem certeza que deseja zerar o progresso deste participante? Todo o XP, histórico e quizzes concluídos serão reiniciados para o nível Padawan.",
        confirmDelete:
          "Tem certeza que deseja EXCLUIR permanentemente este usuário da plataforma? Esta ação não pode ser desfeita.",
        userTableTitle: "Participantes Cadastrados",
        participant: "Participante",
        accumulatedXp: "XP Acumulado",
        rank: "Nível / Rank",
        company: "Empresa / Turma",
        role: "Função",
        roleAdmin: "ADMINISTRADOR",
        roleParticipant: "PARTICIPANTE",
        roleAdminShort: "ADMIN",
        roleParticipantShort: "PARTICIPANTE",
        resetShort: "Zerar",
        demoteShort: "Demitir",
        promoteShort: "Promover",
        deleteShort: "Excluir",
        noUsers: "Nenhum usuário cadastrado no sistema",
        demoteAdmin: "Demitir Admin",
        makeAdmin: "Tornar Admin",
        actions: "Ações",
        subtitle:
          "Gerencie e autorize colaboradores, crie turmas e acompanhe a evolução de XP.",
        editCompanyTitle: "Editar Nome da Turma",
        editCompanyDesc:
          "Insira o novo nome para identificar esta organização na plataforma.",
        companyNamePlaceholder: "Ex: Organização",
        saveChanges: "Salvar Alterações",
        back: "Voltar",
        companiesTitle: "Empresas & Turmas",
        companiesSubtitle: "Turmas cadastradas na plataforma.",
        editTooltip: "Editar",
        deleteTooltip: "Excluir",
        confirmDeleteCompany: "Deseja realmente remover esta empresa/turma?",
        selectCompany: "Selecionar esta Turma",
        directory: "Diretório Global",
        allParticipants: "TODOS OS PARTICIPANTES",
        allParticipantsPrefix: "TODOS OS",
        allParticipantsHighlight: "PARTICIPANTES",
        allParticipantsDesc:
          "Lista de todos os usuários que acessaram a plataforma e seus níveis de acesso.",
        totalUsers: "TOTAL DE USUÁRIOS",
        totalAdmins: "ADMINS",
        noCompany: "Sem Turma",
        levelLabel: "Nível (Rank)",
        xpLabelMobile: "XP Acumulado",
        authorizeAccess: "Autorizar Acesso",
        authorizeDesc:
          "Adicione e-mails à lista de permissão de acesso da plataforma.",
        emailPlaceholder: "colaborador@empresa.com",
        addToWhitelist: "Adicionar aos Permitidos",
        authorizedMembers: "Membros Autorizados",
        authorizedDesc:
          "Estes e-mails estão autorizados a realizar Onboarding.",
        authorizedCount: "AUTORIZADOS",
        removeAuthorization: "Remover Autorização",
        emptyWhitelist: "Nenhuma credencial whitelist configurada",
      },
      dashboard: {
        header: {
          eyebrow: "Central de Inteligência & Diagnóstico",
          title: "DASHBOARDS",
          subtitle: "DO QUIZ & ENERGIA",
          description:
            "Acompanhe o pulso vital da Força: cada acerto eleva a energia (+15%) e cada erro a drena (-15%). Monitore sua precisão individual e a evolução coletiva da turma nas Estruturas Libertadoras.",
        },
        mentor: {
          badge: "Jedi Mentor",
          name: "Mestre Nomura",
          message:
            '"A Força oscila com suas decisões. Conheça sua energia para dominar o Ecocycle Planning."',
          videoButton: "Vídeo do Quiz",
        },
        tabParticipant: "Participante",
        tabTeam: "Grupo (Geral)",
        accumulatedXp: "XP ACUMULADO",
        rankLabel: "PATENTE",
        kyberCrystal: "Cristal Kyber Vital",
        forceEnergy: "Energia da Força",
        ofPower: "de Potência",
        dynamicVariation: "Variação Dinâmica",
        gainOnHit: "+15% no Acerto",
        lossOnError: "-15% no Erro",
        holocronSynced: "Holocron Sintonizado",
        energyStates: {
          full: {
            label: "Sintonia Plena com a Força",
            subtitle: "Cristal Kyber Radiante e Estável",
            advice:
              "Você está no ápice do seu fluxo decisório. Avance para as Strings complexas de Yoda!",
          },
          high: {
            label: "Canalizando a Força",
            subtitle: "Cristal Estabilizado em Expansão",
            advice:
              "Boa conexão com as Estruturas Libertadoras. Mantenha a sequência de acertos para atingir a maestria.",
          },
          medium: {
            label: "Oscilação Energética",
            subtitle: "Requer Foco nas Combinações de ELs",
            advice:
              "Atenção aos detalhes dos cenários. Revise as cartas no Deck para recuperar sua energia vital.",
          },
          low: {
            label: "Dreno Crítico da Força",
            subtitle: "Cristal Kyber Desestabilizado",
            advice:
              "Erros recentes drenaram sua energia. Consulte o Mestre Nomura e revise as armadilhas do Ecociclo!",
          },
        },
        accuracyInQuiz: "Precisão no Quiz",
        hits: "Acertos",
        misses: "Erros",
        streakTitle: "Sequência (Streak)",
        consecutiveHits: "acertos seguidos",
        bestStreakLabel: "Melhor sequência histórica:",
        hitsLower: "acertos",
        jediPace: "🔥 Ritmo de Mestre Jedi!",
        streakHint: "Acerte o próximo para subir o streak",
        energyEvolutionTitle: "Evolução de Acertos como Energia da Força",
        energyEvolutionDesc:
          "Trajetória contínua da energia: +15% de acréscimo a cada desafio correto e -15% de dreno a cada erro.",
        hitPlus: "Acerto (+15%)",
        errorMinus: "Erro (-15%)",
        vitalLevel: "Nível Vital",
        chart: {
          masteryLine: "Maestria 80%",
          criticalLine: "Crítico 30%",
          tipLabel: "Dica do Cristal:",
          tipText:
            "Mantenha a energia acima de 80% para manter o Holocron Jedi em harmonia e desbloquear o título de Guardião.",
          attemptsRegistered: "tentativas registradas",
        },
        tooltip: {
          hit: "Acerto",
          error: "Erro",
          forceEnergyLabel: "Energia da Força:",
          structuresLabel: "ELs:",
        },
        facilitatorEvolution: {
          subtitle: "Competência Demonstrada nos Quizzes",
          levelName: {
            padawan: "Nível 1 • Padawan",
            jedi: "Nível 2 • Jedi",
            yoda: "Nível 3 • Yoda",
          },
          completed: "100% Concluído",
          inProgress: "Em Progresso",
          locked: "Bloqueado",
          assertividade: "Assertividade Real",
          bestScore: "Melhor Pontuação:",
        },
        ecocycleDomain: {
          subtitle: "Desempenho Pedagógico por Fases e Armadilhas do Ecociclo",
          badge: "6 Fases & Armadilhas Mapeadas",
          examples: "Exemplos:",
          standard: "Padrão",
          hitsSuffix: "acertos",
        },
        history: {
          title: "Histórico Recente de Perguntas",
          subtitle: "Últimos Desafios",
        },
        advice: {
          feedbackLabel: "Feedback do Mentor",
          title: "Mestre Nomura Diz:",
          quoteSuffix:
            "Lembre-se: nas Estruturas Libertadoras não existem respostas decoradas, mas sim a combinação certa entre objetivo, participantes e momento do Ecociclo.",
          energyLabel: "Energia:",
          precisionLabel: "Precisão:",
          ecocycleLabel: "Ecocycle Planning",
        },
        aiReport: {
          diagnosticLabel: "Diagnóstico de Inteligência",
          title: "Conselho Consultivo de IA & Quiz",
          generateBtn: "Gerar Relatório Completo",
          generating: "Sincronizando Holocron...",
          loadingTitle:
            "Cruzando dados de energia vital, acertos e cartas libertadoras...",
          loadingSubtitle: "Isso leva apenas alguns instantes",
          retry: "Tentar Novamente",
          newReport: "Gerar Novo Relatório",
          defaultDesc:
            "Gere uma análise diagnóstica personalizada avaliando sua pontuação ({{xp}} XP), seu nível atual de Energia da Força ({{energy}}%) e recomendações práticas para a facilitação com Ecocycle Planning.",
          connectionError:
            "Erro de conexão com o servidor ao carregar relatório",
          reportError:
            "Houve uma falha na calibração do Holocron ao tentar gerar o relatório.",
        },
        team: {
          energyAvgTitle: "Energia Média Coletiva",
          energyAvgDesc: "Harmonia da turma nos Quizzes",
          accuracyTitle: "Assertividade Coletiva",
          accuracyDesc: "acertos de {{total}} questões",
          challengesTitle: "Desafios Enfrentados",
          challengesDesc: "Respostas submetidas no Quiz",
          activeParticipantsTitle: "Participantes Ativos",
          activeParticipantsDesc: "Membros engajados no ecossistema",
          evolutionTitle: "Evolução da Energia Coletiva da Turma",
          evolutionDesc:
            "Curva de assertividade e harmonia da turma ao longo dos testes",
          energyLegend: "Energia da Turma",
          energyName: "Energia Coletiva (%)",
          evolutionFooter:
            "A turma demonstrou aceleração no domínio das Estruturas Libertadoras nas rodadas recentes.",
          masteryByLevel: "Domínio por Nível",
          masteryByLevelDesc: "Taxa Coletiva de Acertos",
          completingParticipants: "Participantes Concluintes:",
          mostMasteredTitle: "Estruturas Mais Dominadas",
          mostMasteredSubtitle: "Maior Índice de Acertos no Quiz",
          highSync: "Alta Sintonia",
          mostMasteredFooter:
            "A turma compreende com rapidez o uso de TRIZ para destruir hábitos rígidos e 1-2-4-All para inclusão total.",
          attentionTitle: "Pontos de Atenção no Ecociclo",
          attentionSubtitle: "Estruturas com Maior Taxa de Erro",
          trainingFocus: "Foco de Treino",
          attentionFooter:
            "Recomendação para o facilitador: aprofundar na distinção entre a Armadilha da Rigidez e da Pobreza no Ecocycle Planning e nas escalas de Panarchy.",
          leaderboardTitle: "Quadro de Guardiões do Quiz",
          leaderboardSubtitle: "Participantes mais sintonizados com a Força",
          topParticipants: "Top Participantes",
          tablePosition: "Posição & Participante",
          tableEnergy: "Energia da Força",
          tablePrecision: "Precisão",
          tableHits: "Acertos",
          tableXp: "XP",
          levelMastery: {
            padawan: "Nível 1 • Padawan (Strings Simples)",
            jedi: "Nível 2 • Jedi (Encadeamentos)",
            yoda: "Nível 3 • Yoda (Strings com Ecocycle)",
          },
        },
      },
      common: {
        confirm: "Confirmar",
        cancel: "Cancelar",
        success: "Sucesso",
        error: "Erro",
        energy: "Energia",
        accuracy: "Assertividade",
      },
    },
  },
  es: {
    translation: {
      app: {
        title: "Orden de las Estructuras Liberadoras",
        subtitle: "Facilitación con Ecocycle Planning & Strings",
      },
      nav: {
        freeAccess: "ACCESO LIBRE",
        deck: "Deck",
        quizzes: "Quizzes",
        dashboard: "Dashboard",
        admin: "Admin",
        logout: "Salir",
        currentRank: "Rango Actual",
        totalXp: "XP Total",
        home: "Inicio",
        language: "Idioma / Language",
        jediLevel: "Nivel Jedi",
        endSession: "Cerrar Sesión",
      },
      levelSelection: {
        title: "Elige tu Quiz",
        subtitle:
          "Selecciona el nivel de dificultad y la cantidad de preguntas",
        questionCount: "Nº PREGUNTAS:",
        back: "Volver",
        backToHome: "Volver al Inicio",
        mentorBadge: "Jedi Mentor",
        mentorName: "Maestro Nomura",
        mentorQuote:
          '"Da el primer paso para poner a prueba tus conocimientos. El verdadero aprendizaje proviene de los desafíos superados. ¡Que la fuerza te acompañe!"',
        howQuizWorks: "¿Cómo Funciona el Quiz?",
        padawanName: "Padawan",
        padawanDesc:
          "Reconociendo Estructuras Liberadoras y sus conexiones con el Ecocycle Planning.",
        jediName: "Jedi",
        jediDesc:
          "Combinando Estructuras Liberadoras en Strings con el Ecocycle Planning.",
        yodaName: "Maestro Yoda",
        yodaDesc:
          "Diseñando experiencias completas de facilitación con Ecocycle Planning y Strings.",
        requiresPadawan: "Requiere 100% de aciertos en el Quiz Padawan",
        requiresJedi: "Requiere 100% de aciertos en el Quiz Jedi",
        locked: "Bloqueado",
        startQuiz: "Iniciar Quiz",
      },
      home: {
        freeAccessBadge:
          "Acceso Libre • Estructuras Liberadoras & Ecocycle Planning",
        heroTitle1: "ECOCYCLE",
        heroTitle2: "PLANNING",
        heroDesc:
          "Domina el arte de diseñar Strings con Estructuras Liberadoras para destrabar las Trampas de la Pobreza y de la Rigidez, equilibrar el portafolio en el Ecocycle y sembrar nuevas iniciativas.",
        mentorBadge: "Facilitador Maestro",
        mentorName: "Maestro Nomura",
        mentorQuote:
          '"Las Estructuras Liberadoras dan forma a la inteligencia colectiva. ¡Encadénalas en Strings armoniosas alrededor del Ecociclo!"',
        howJourneyWorks: "¿Cómo Funciona la Jornada?",
        journeyTitle: "Tu Viaje con Estructuras Liberadoras",
        journeyStep1: "Explora el Deck",
        journeyStep2: "Arma Strings",
        journeyStep3: "Dashboard",
        cardDeckTitle: "DECK",
        cardDeckSub: "43 ESTRUCTURAS LIBERADORAS",
        cardDeckDesc:
          "Conoce las 43 Estructuras Liberadoras oficiales con propósito, pasos, flujo secuencial y conexión biológica con Ecocycle Planning.",
        cardDeckBtn: "EXPLORAR LAS 43 ELS",
        cardQuizTitle: "QUIZZES",
        cardQuizSub: "ARMADO DE STRINGS",
        cardQuizDesc:
          "30 ejercicios desafiantes en 3 niveles (Padawan, Jedi y Yoda) de encadenamiento de Strings con Ecocycle Planning para destrabar cuellos de botella.",
        cardQuizBtn: "ARMAR STRINGS",
        cardDashTitle: "Dashboard de Facilitación",
        cardDashDesc:
          "Sigue el dominio de las 43 Estructuras Liberadoras, tu evolución en el armado de Strings y diagnósticos de Ecocycle Planning.",
      },
      deck: {
        officialBadge: "Repertorio Oficial de Facilitación",
        title: "Deck de las 43 Estructuras Liberadoras",
        subtitle:
          "Explora las 43 Estructuras Liberadoras oficiales (las 33 clásicas + las 10 del Fieldbook en liberatingstructures.com) con sus diseños oficiales, propósitos, flujos y reglas mínimas.",
        backToHome: "Volver al Inicio",
        practiceQuizzes: "Practicar en los Quizzes",
        mentorBadge: "Facilitador Maestro",
        mentorName: "Maestro Nomura",
        mentorQuote:
          '"Cada Estructura Liberadora tiene un propósito único. Usa los filtros por propósito y colección para encontrar la dinámica exacta para tu facilitación."',
        howDeckWorks: "¿Cómo Funciona el Deck?",
        searchPlaceholder: "Buscar por #ID, nombre, objetivo o propósito...",
        clearFilters: "Limpiar Filtros",
        allCategories: "Todas las Categorías",
        allEditions: "Todas las 43",
        classicsEdition: "33 Clásicas",
        fieldbookEdition: "10 Fieldbook",
        structuresFound: "estructuras encontradas",
        viewStructure: "Ver Estructura",
        officialDrawingBadge: "Diseño Oficial",
        officialDrawingOf: "Diseño oficial de {{title}}",
        anyGroup: "Cualquier grupo",
        backToDeck: "Volver al Deck",
        officialDrawing: "Diseño Oficial",
        structureNumber: "ESTRUCTURA",
        originalTitle: "Título Original:",
        scrollDownPrompt:
          "Desplázate hacia abajo • 5 Pasos de la Guía Completa de Conducción",
        scrollDownHint:
          "Usa la barra de desplazamiento naranja a la derecha o haz clic aquí para avanzar",
        scrollDownAria:
          "Desplazarse para ver detalles completos de la estructura",
        scrollToGuide: "Ir a la Guía de Facilitación",
        whenToUse: "CUÁNDO UTILIZAR",
        applicationContext: "Contexto de Aplicación",
        facilitationFlow: "FLUJO DE FACILITACIÓN",
        input: "Entrada",
        process: "Proceso",
        output: "Salida",
        practicalExampleHeading: "EJEMPLO PRÁCTICO DE CONDUCCIÓN",
        dynamicInAction: "Dinámica en Acción",
        recommendedCases: "CASOS DE USO RECOMENDADOS",
        whereToApply: "Dónde aplicar en el día a día",
        structureBenefits: "BENEFICIOS DE LA ESTRUCTURA",
        expectedImpacts: "Impactos Esperados",
        prevStructure: "Estructura Anterior",
        nextStructure: "Siguiente Estructura",
      },
      quiz: {
        stringBuilding: "Armado de String",
        howQuizWorks: "¿Cómo Funciona el Quiz?",
        timeLeft: "Tiempo",
        energy: "Energía",
        progress: "Progreso",
        questionOf: "Pregunta {{current}} de {{total}}",
        selectCount:
          "Selecciona {{count}} estructura(s) liberadora(s) adecuada(s)",
        confirmString: "Confirmar String",
        nextQuestion: "Siguiente Pregunta",
        finishQuiz: "Concluir Quizzes",
        nextChallenge: "Siguiente Desafío de String",
        feedbackCorrect: "¡Excelente String!",
        feedbackIncorrect: "String Incorrecta",
        goodChoice: "¡Buena elección de facilitación!",
        learningOpportunity: "A veces aprendemos. A veces acertamos.",
        correctDesc:
          "Tu selección se ajusta muy bien al propósito y a las pistas de este escenario.",
        incorrectDesc:
          "La facilitación es un proceso vivo de refinamiento. Analiza las pistas conceptuales a continuación para profundizar tu repertorio.",
        pedagogicalAnalysis: "Análisis Pedagógico de Facilitación",
        bestChoiceTitle: "1. Mejor elección",
        whyItWorksTitle: "2. ¿Por qué funciona?",
        scenarioClueTitle: "3. Pista del escenario",
        anotherPossibilityTitle: "4. Otra posibilidad",
        flowLabel: "Flujo:",
        mentorAdviceTitle: "Consejo del Facilitador Maestro:",
        mentorRole: "Facilitador Estratégico",
        scenarioTitle: "Escenario de Facilitación con Ecocycle Planning",
        instructionPadawan:
          "Selecciona la Estructura Liberadora más adecuada a las pistas de este escenario.",
        instructionJedi:
          "Selecciona las 2 Estructuras Liberadoras que forman una String fluida con el Ecocycle.",
        instructionYoda:
          "Selecciona las 3 Estructuras Liberadoras que complementan la arquitectura de facilitación.",
        pipelineTitle: "Pipeline de la String:",
        selectPrompt:
          "Selecciona las estructuras de abajo para armar el flujo de tu String...",
        selected: "seleccionada(s)",
        defaultAdvice:
          "Una String no es una lista estática de dinámicas. Cada Estructura Liberadora recibe una Entrada, opera una Transformación con el 100% de los participantes y entrega una Salida que nutre la etapa siguiente del Ecocycle Planning. Analiza el cuello de botella del escenario y las pistas contextuales.",
        whyThisString: "¿Por qué esta combinación?",
        exitQuiz: "Salir del Quiz",
        noChallenge:
          "No hay ejercicios de String cargados para este nivel. Redirigiendo...",
        challengeFallback: "Ejercicio de String con Ecocycle",
        structuresRequired: "Estructuras Requeridas",
        yourString: "Tu String Construida",
      },
      auth: {
        freeAccess: "Acceso Libre",
        syncProfile:
          "Sincroniza tu perfil para guardar tu progreso, dominar Estructuras Liberadoras y subir en el ranking.",
        signInGoogle: "Iniciar sesión con Google",
        guestMode: "Modo Invitado (Sin Guardar en la Nube)",
        or: "o",
        terms:
          "Al ingresar, aceptas los términos de alfabetización digital y cumplimiento ético de IA.",
      },
      ranks: {
        padawan: "Padawan",
        jedi: "Jedi",
        yoda: "Maestro Yoda",
        padawanRole: "Strings Básicas (1 EL Clave)",
        jediRole: "Encadenamientos Dobles de Estructuras",
        yodaRole: "Arquitectura Estratégica de Strings",
      },
      ecocycle: {
        domainTitle: "DOMINIO EN ECOCYCLE & STRINGS",
        evolutionTitle: "EVOLUCIÓN COMO FACILITADOR",
        gestation: "Gestación",
        birth: "Nacimiento",
        maturity: "Madurez",
        creativeDestruction: "Destrucción Creativa",
        povertyTrap: "Trampa de la Pobreza (Escasez)",
        rigidityTrap: "Trampa de la Rigidez",
      },
      admin: {
        title: "Panel Administrativo",
        headerTitlePrefix: "CONTROL DE",
        headerTitleHighlight: "ACCESO & USUARIOS",
        resetProgress: "REINICIAR PROGRESO",
        deleteUser: "ELIMINAR USUARIO",
        confirmReset:
          "¿Está seguro de que desea reiniciar el progreso de este participante? Todo el XP, historial y cuestionarios completados volverán al nivel Padawan.",
        confirmDelete:
          "¿Está seguro de que desea ELIMINAR permanentemente a este usuario? Esta acción no se puede deshacer.",
        userTableTitle: "Participantes Registrados",
        participant: "Participante",
        accumulatedXp: "XP Acumulado",
        rank: "Nivel / Rango",
        company: "Empresa / Grupo",
        role: "Rol",
        roleAdmin: "ADMINISTRADOR",
        roleParticipant: "PARTICIPANTE",
        roleAdminShort: "ADMIN",
        roleParticipantShort: "PARTICIPANTE",
        resetShort: "Reiniciar",
        demoteShort: "Degradar",
        promoteShort: "Promover",
        deleteShort: "Eliminar",
        noUsers: "Ningún usuario registrado en el sistema",
        demoteAdmin: "Degradar Admin",
        makeAdmin: "Hacer Admin",
        actions: "Acciones",
        subtitle:
          "Gestiona y autoriza colaboradores, crea grupos y sigue la evolución del XP.",
        editCompanyTitle: "Editar Nombre del Grupo",
        editCompanyDesc:
          "Ingresa el nuevo nombre para identificar esta organización en la plataforma.",
        companyNamePlaceholder: "Ej: Organización",
        saveChanges: "Guardar Cambios",
        back: "Volver",
        companiesTitle: "Empresas & Grupos",
        companiesSubtitle: "Grupos registrados en la plataforma.",
        editTooltip: "Editar",
        deleteTooltip: "Eliminar",
        confirmDeleteCompany: "¿Deseas eliminar realmente esta empresa/grupo?",
        selectCompany: "Seleccionar este Grupo",
        directory: "Directorio Global",
        allParticipants: "TODOS LOS PARTICIPANTES",
        allParticipantsPrefix: "TODOS LOS",
        allParticipantsHighlight: "PARTICIPANTES",
        allParticipantsDesc:
          "Lista de todos los usuarios que accedieron a la plataforma y sus niveles de acceso.",
        totalUsers: "TOTAL DE USUARIOS",
        totalAdmins: "ADMINS",
        noCompany: "Sin Grupo",
        levelLabel: "Nivel (Rango)",
        xpLabelMobile: "XP Acumulado",
        authorizeAccess: "Autorizar Acceso",
        authorizeDesc:
          "Agrega correos a la lista de permisos de acceso de la plataforma.",
        emailPlaceholder: "colaborador@empresa.com",
        addToWhitelist: "Agregar a Autorizados",
        authorizedMembers: "Miembros Autorizados",
        authorizedDesc:
          "Estos correos están autorizados para realizar el Onboarding.",
        authorizedCount: "AUTORIZADOS",
        removeAuthorization: "Quitar Autorización",
        emptyWhitelist: "Ninguna credencial whitelist configurada",
      },
      dashboard: {
        header: {
          eyebrow: "Central de Inteligencia & Diagnóstico",
          title: "DASHBOARDS",
          subtitle: "DEL QUIZ & ENERGÍA",
          description:
            "Sigue el pulso vital de la Fuerza: cada acierto eleva la energía (+15%) y cada error la drena (-15%). Monitorea tu precisión individual y la evolución colectiva del grupo en las Estructuras Liberadoras.",
        },
        mentor: {
          badge: "Jedi Mentor",
          name: "Maestro Nomura",
          message:
            '"La Fuerza oscila con tus decisiones. Conoce tu energía para dominar el Ecocycle Planning."',
          videoButton: "Video del Quiz",
        },
        tabParticipant: "Participante",
        tabTeam: "Grupo (General)",
        accumulatedXp: "XP ACUMULADO",
        rankLabel: "RANGO",
        kyberCrystal: "Cristal Kyber Vital",
        forceEnergy: "Energía de la Fuerza",
        ofPower: "de Potencia",
        dynamicVariation: "Variación Dinámica",
        gainOnHit: "+15% al Acertar",
        lossOnError: "-15% al Errar",
        holocronSynced: "Holocrón Sintonizado",
        energyStates: {
          full: {
            label: "Sintonía Plena con la Fuerza",
            subtitle: "Cristal Kyber Radiante y Estable",
            advice:
              "¡Estás en el ápice de tu flujo decisorio. Avanza hacia las Strings complejas de Yoda!",
          },
          high: {
            label: "Canalizando la Fuerza",
            subtitle: "Cristal Estabilizado en Expansión",
            advice:
              "Buena conexión con las Estructuras Liberadoras. Mantén la secuencia de aciertos para alcanzar la maestría.",
          },
          medium: {
            label: "Oscilación Energética",
            subtitle: "Requiere Foco en las Combinaciones de ELs",
            advice:
              "Presta atención a los detalles de los escenarios. Revisa las cartas en el Deck para recuperar tu energía vital.",
          },
          low: {
            label: "Drenaje Crítico de la Fuerza",
            subtitle: "Cristal Kyber Desestabilizado",
            advice:
              "¡Errores recientes drenaron tu energía. Consulta al Maestro Nomura y revisa las trampas del Ecociclo!",
          },
        },
        accuracyInQuiz: "Precisión en el Quiz",
        hits: "Aciertos",
        misses: "Errores",
        streakTitle: "Racha (Streak)",
        consecutiveHits: "aciertos seguidos",
        bestStreakLabel: "Mejor racha histórica:",
        hitsLower: "aciertos",
        jediPace: "🔥 ¡Ritmo de Maestro Jedi!",
        streakHint: "Acierta la próxima para subir la racha",
        energyEvolutionTitle: "Evolución de Aciertos como Energía de la Fuerza",
        energyEvolutionDesc:
          "Trayectoria continua de la energía: +15% de aumento en cada desafío correcto y -15% de drenaje en cada error.",
        hitPlus: "Acierto (+15%)",
        errorMinus: "Error (-15%)",
        vitalLevel: "Nivel Vital",
        chart: {
          masteryLine: "Maestría 80%",
          criticalLine: "Crítico 30%",
          tipLabel: "Consejo del Cristal:",
          tipText:
            "Mantén la energía por encima del 80% para mantener el Holocrón Jedi en armonía y desbloquear el título de Guardián.",
          attemptsRegistered: "intentos registrados",
        },
        tooltip: {
          hit: "Acierto",
          error: "Error",
          forceEnergyLabel: "Energía de la Fuerza:",
          structuresLabel: "ELs:",
        },
        facilitatorEvolution: {
          subtitle: "Competencia Demostrada en los Quizzes",
          levelName: {
            padawan: "Nivel 1 • Padawan",
            jedi: "Nivel 2 • Jedi",
            yoda: "Nivel 3 • Yoda",
          },
          completed: "100% Completado",
          inProgress: "En Progreso",
          locked: "Bloqueado",
          assertividade: "Asertividad Real",
          bestScore: "Mejor Puntuación:",
        },
        ecocycleDomain: {
          subtitle: "Desempeño Pedagógico por Fases y Trampas del Ecociclo",
          badge: "6 Fases & Trampas Mapeadas",
          examples: "Ejemplos:",
          standard: "Estándar",
          hitsSuffix: "aciertos",
        },
        history: {
          title: "Historial Reciente de Preguntas",
          subtitle: "Últimos Desafíos",
        },
        advice: {
          feedbackLabel: "Feedback del Mentor",
          title: "Maestro Nomura Dice:",
          quoteSuffix:
            "Recuerda: en las Estructuras Liberadoras no existen respuestas memorizadas, sino la combinación correcta entre objetivo, participantes y momento del Ecociclo.",
          energyLabel: "Energía:",
          precisionLabel: "Precisión:",
          ecocycleLabel: "Ecocycle Planning",
        },
        aiReport: {
          diagnosticLabel: "Diagnóstico de Inteligencia",
          title: "Consejo Consultivo de IA & Quiz",
          generateBtn: "Generar Informe Completo",
          generating: "Sincronizando Holocrón...",
          loadingTitle:
            "Cruzando datos de energía vital, aciertos y cartas liberadoras...",
          loadingSubtitle: "Esto toma solo unos instantes",
          retry: "Intentar de Nuevo",
          newReport: "Generar Nuevo Informe",
          defaultDesc:
            "Genera un análisis diagnóstico personalizado evaluando tu puntuación ({{xp}} XP), tu nivel actual de Energía de la Fuerza ({{energy}}%) y recomendaciones prácticas para la facilitación con Ecocycle Planning.",
          connectionError:
            "Error de conexión con el servidor al cargar el informe",
          reportError:
            "Hubo una falla en la calibración del Holocrón al intentar generar el informe.",
        },
        team: {
          energyAvgTitle: "Energía Media Colectiva",
          energyAvgDesc: "Armonía del grupo en los Quizzes",
          accuracyTitle: "Asertividad Colectiva",
          accuracyDesc: "aciertos de {{total}} preguntas",
          challengesTitle: "Desafíos Enfrentados",
          challengesDesc: "Respuestas enviadas en el Quiz",
          activeParticipantsTitle: "Participantes Activos",
          activeParticipantsDesc: "Miembros comprometidos con el ecosistema",
          evolutionTitle: "Evolución de la Energía Colectiva del Grupo",
          evolutionDesc:
            "Curva de asertividad y armonía del grupo a lo largo de las pruebas",
          energyLegend: "Energía del Grupo",
          energyName: "Energía Colectiva (%)",
          evolutionFooter:
            "El grupo demostró aceleración en el dominio de las Estructuras Liberadoras en las rondas recientes.",
          masteryByLevel: "Dominio por Nivel",
          masteryByLevelDesc: "Tasa Colectiva de Aciertos",
          completingParticipants: "Participantes que Completaron:",
          mostMasteredTitle: "Estructuras Más Dominadas",
          mostMasteredSubtitle: "Mayor Índice de Aciertos en el Quiz",
          highSync: "Alta Sintonía",
          mostMasteredFooter:
            "El grupo comprende rápidamente el uso de TRIZ para destruir hábitos rígidos y 1-2-4-All para la inclusión total.",
          attentionTitle: "Puntos de Atención en el Ecociclo",
          attentionSubtitle: "Estructuras con Mayor Tasa de Error",
          trainingFocus: "Foco de Entrenamiento",
          attentionFooter:
            "Recomendación para el facilitador: profundizar en la distinción entre la Trampa de la Rigidez y de la Pobreza en el Ecocycle Planning y en las escalas de Panarchy.",
          leaderboardTitle: "Tablero de Guardianes del Quiz",
          leaderboardSubtitle: "Participantes más sintonizados con la Fuerza",
          topParticipants: "Top Participantes",
          tablePosition: "Posición & Participante",
          tableEnergy: "Energía de la Fuerza",
          tablePrecision: "Precisión",
          tableHits: "Aciertos",
          tableXp: "XP",
          levelMastery: {
            padawan: "Nivel 1 • Padawan (Strings Simples)",
            jedi: "Nivel 2 • Jedi (Encadenamientos)",
            yoda: "Nivel 3 • Yoda (Strings con Ecocycle)",
          },
        },
      },
      common: {
        confirm: "Confirmar",
        cancel: "Cancelar",
        success: "Éxito",
        error: "Error",
        energy: "Energía",
        accuracy: "Asertividad",
      },
    },
  },
  en: {
    translation: {
      app: {
        title: "Liberating Structures Order",
        subtitle: "Facilitation with Ecocycle Planning & Strings",
      },
      nav: {
        freeAccess: "FREE ACCESS",
        deck: "Deck",
        quizzes: "Quizzes",
        dashboard: "Dashboard",
        admin: "Admin",
        logout: "Logout",
        currentRank: "Current Rank",
        totalXp: "Total XP",
        home: "Home",
        language: "Language",
        jediLevel: "Jedi Level",
        endSession: "Sign Out",
      },
      levelSelection: {
        title: "Choose your Quiz",
        subtitle: "Select the difficulty level and number of questions",
        questionCount: "NO. OF QUESTIONS:",
        back: "Back",
        backToHome: "Back to Home",
        mentorBadge: "Jedi Mentor",
        mentorName: "Master Nomura",
        mentorQuote:
          '"Take the first step to test your knowledge. Real learning comes from overcoming challenges. May the force be with you!"',
        howQuizWorks: "How Does the Quiz Work?",
        padawanName: "Padawan",
        padawanDesc:
          "Recognizing Liberating Structures and their connections to Ecocycle Planning.",
        jediName: "Jedi",
        jediDesc:
          "Combining Liberating Structures into Strings with Ecocycle Planning.",
        yodaName: "Master Yoda",
        yodaDesc:
          "Architecting facilitation experiences with Ecocycle Planning and Strings.",
        requiresPadawan: "Requires 100% score on Padawan Quiz",
        requiresJedi: "Requires 100% score on Jedi Quiz",
        locked: "Locked",
        startQuiz: "Start Quiz",
      },
      home: {
        freeAccessBadge:
          "Free Access • Liberating Structures & Ecocycle Planning",
        heroTitle1: "ECOCYCLE",
        heroTitle2: "PLANNING",
        heroDesc:
          "Master the art of designing Strings with Liberating Structures to unlock Poverty and Rigidity Traps, balance the portfolio in Ecocycle, and seed new initiatives.",
        mentorBadge: "Master Facilitator",
        mentorName: "Master Nomura",
        mentorQuote:
          '"Liberating Structures give shape to collective intelligence. String them harmoniously around the Ecocycle!"',
        howJourneyWorks: "How Does the Journey Work?",
        journeyTitle: "Your Journey with Liberating Structures",
        journeyStep1: "Explore the Deck",
        journeyStep2: "Build Strings",
        journeyStep3: "Dashboard",
        cardDeckTitle: "DECK",
        cardDeckSub: "43 LIBERATING STRUCTURES",
        cardDeckDesc:
          "Discover all 43 official Liberating Structures with purpose, steps, sequence flow, and biological connection to Ecocycle Planning.",
        cardDeckBtn: "EXPLORE THE 43 LS",
        cardQuizTitle: "QUIZZES",
        cardQuizSub: "STRING BUILDING",
        cardQuizDesc:
          "30 challenging exercises in 3 levels (Padawan, Jedi, and Yoda) of String sequencing with Ecocycle Planning to unlock bottlenecks.",
        cardQuizBtn: "BUILD STRINGS",
        cardDashTitle: "Facilitation Dashboard",
        cardDashDesc:
          "Track your mastery of the 43 Liberating Structures, evolution in String building, and Ecocycle Planning diagnostics.",
      },
      deck: {
        officialBadge: "Official Facilitation Repertoire",
        title: "Deck of 43 Liberating Structures",
        subtitle:
          "Explore the 43 official Liberating Structures (the 33 classics + the 10 from Fieldbook on liberatingstructures.com) with official designs, purposes, flows, and minimal rules.",
        backToHome: "Back to Home",
        practiceQuizzes: "Practice in Quizzes",
        mentorBadge: "Master Facilitator",
        mentorName: "Master Nomura",
        mentorQuote:
          '"Each Liberating Structure has a unique purpose. Use filters by purpose and collection to find the exact dynamics for your facilitation."',
        howDeckWorks: "How Does the Deck Work?",
        searchPlaceholder: "Search by #ID, name, objective or purpose...",
        clearFilters: "Clear Filters",
        allCategories: "All Categories",
        allEditions: "All 43",
        classicsEdition: "33 Classics",
        fieldbookEdition: "10 Fieldbook",
        structuresFound: "structures found",
        viewStructure: "View Structure",
        officialDrawingBadge: "Official Drawing",
        officialDrawingOf: "Official drawing of {{title}}",
        anyGroup: "Any group size",
        backToDeck: "Back to Deck",
        officialDrawing: "Official Drawing",
        structureNumber: "STRUCTURE",
        originalTitle: "Original Title:",
        scrollDownPrompt: "Scroll down • 5-Step Complete Facilitation Guide",
        scrollDownHint:
          "Use the orange scrollbar on the right or click this banner to explore",
        scrollDownAria: "Scroll down to see full structure details",
        scrollToGuide: "Scroll to Facilitation Guide",
        whenToUse: "WHEN TO USE",
        applicationContext: "Application Context",
        facilitationFlow: "FACILITATION FLOW",
        input: "Input",
        process: "Process",
        output: "Output",
        practicalExampleHeading: "PRACTICAL FACILITATION EXAMPLE",
        dynamicInAction: "Dynamics in Action",
        recommendedCases: "RECOMMENDED USE CASES",
        whereToApply: "Where to apply in daily practice",
        structureBenefits: "STRUCTURE BENEFITS",
        expectedImpacts: "Expected Impacts",
        prevStructure: "Previous Structure",
        nextStructure: "Next Structure",
      },
      quiz: {
        stringBuilding: "String Building",
        howQuizWorks: "How the Quiz Works",
        timeLeft: "Time",
        energy: "Energy",
        progress: "Progress",
        questionOf: "Question {{current}} of {{total}}",
        selectCount: "Select {{count}} appropriate liberating structure(s)",
        confirmString: "Confirm String",
        nextQuestion: "Next Question",
        finishQuiz: "Finish Quizzes",
        nextChallenge: "Next String Challenge",
        feedbackCorrect: "Excellent String!",
        feedbackIncorrect: "Incorrect String",
        goodChoice: "Great facilitation choice!",
        learningOpportunity: "Sometimes we learn. Sometimes we succeed.",
        correctDesc:
          "Your selection aligns very well with the purpose and clues of this scenario.",
        incorrectDesc:
          "Facilitation is a living process of refinement. Analyze the conceptual clues below to deepen your repertoire.",
        pedagogicalAnalysis: "Pedagogical Facilitation Analysis",
        bestChoiceTitle: "1. Best choice",
        whyItWorksTitle: "2. Why does it work?",
        scenarioClueTitle: "3. Scenario clue",
        anotherPossibilityTitle: "4. Another possibility",
        flowLabel: "Flow:",
        mentorAdviceTitle: "Master Facilitator Advice:",
        mentorRole: "Strategic Facilitator",
        scenarioTitle: "Facilitation Scenario with Ecocycle Planning",
        instructionPadawan:
          "Select the Liberating Structure best aligned with the clues of this scenario.",
        instructionJedi:
          "Select the 2 Liberating Structures that form a fluid String with Ecocycle.",
        instructionYoda:
          "Select the 3 Liberating Structures that complement the facilitation architecture.",
        pipelineTitle: "String Pipeline:",
        selectPrompt: "Select structures below to build your String flow...",
        selected: "selected",
        defaultAdvice:
          "A String is not a static list of dynamics. Each Liberating Structure receives an Input, operates a Transformation with 100% of participants, and delivers an Output that feeds the next step of Ecocycle Planning. Analyze the bottleneck and contextual clues.",
        whyThisString: "Why this combination?",
        exitQuiz: "Exit Quiz",
        noChallenge: "No String exercise loaded for this level. Redirecting...",
        challengeFallback: "String Exercise with Ecocycle",
        structuresRequired: "Required Structures",
        yourString: "Your Built String",
      },
      auth: {
        freeAccess: "Free Access",
        syncProfile:
          "Sync your profile to save progress, master Liberating Structures, and climb the ranks.",
        signInGoogle: "Sign in with Google",
        guestMode: "Guest Mode (No Cloud Save)",
        or: "or",
        terms:
          "By entering, you agree to the terms of digital literacy and ethical AI compliance.",
      },
      ranks: {
        padawan: "Padawan",
        jedi: "Jedi",
        yoda: "Master Yoda",
        padawanRole: "Basic Strings (1 Key LS)",
        jediRole: "Dual Structure Combinations",
        yodaRole: "Strategic String Architecture",
      },
      ecocycle: {
        domainTitle: "MASTERY IN ECOCYCLE & STRINGS",
        evolutionTitle: "EVOLUTION AS A FACILITATOR",
        gestation: "Gestation",
        birth: "Birth",
        maturity: "Maturity",
        creativeDestruction: "Creative Destruction",
        povertyTrap: "Poverty Trap (Scarcity)",
        rigidityTrap: "Rigidity Trap",
      },
      admin: {
        title: "Admin Panel",
        headerTitlePrefix: "ACCESS &",
        headerTitleHighlight: "USER CONTROL",
        resetProgress: "RESET PROGRESS",
        deleteUser: "DELETE USER",
        confirmReset:
          "Are you sure you want to reset this participant's progress? All XP, history, and completed quizzes will return to Padawan level.",
        confirmDelete:
          "Are you sure you want to permanently DELETE this user? This action cannot be undone.",
        userTableTitle: "Registered Participants",
        participant: "Participant",
        accumulatedXp: "Accumulated XP",
        rank: "Rank / Level",
        company: "Company / Cohort",
        role: "Role",
        roleAdmin: "ADMINISTRATOR",
        roleParticipant: "PARTICIPANT",
        roleAdminShort: "ADMIN",
        roleParticipantShort: "PARTICIPANT",
        resetShort: "Reset",
        demoteShort: "Demote",
        promoteShort: "Promote",
        deleteShort: "Delete",
        noUsers: "No users registered in the system",
        demoteAdmin: "Demote Admin",
        makeAdmin: "Make Admin",
        actions: "Actions",
        subtitle:
          "Manage and authorize collaborators, create cohorts, and track XP evolution.",
        editCompanyTitle: "Edit Cohort Name",
        editCompanyDesc:
          "Enter the new name to identify this organization on the platform.",
        companyNamePlaceholder: "E.g.: Organization",
        saveChanges: "Save Changes",
        back: "Back",
        companiesTitle: "Companies & Cohorts",
        companiesSubtitle: "Cohorts registered on the platform.",
        editTooltip: "Edit",
        deleteTooltip: "Delete",
        confirmDeleteCompany:
          "Do you really want to remove this company/cohort?",
        selectCompany: "Select this Cohort",
        directory: "Global Directory",
        allParticipants: "ALL PARTICIPANTS",
        allParticipantsPrefix: "ALL",
        allParticipantsHighlight: "PARTICIPANTS",
        allParticipantsDesc:
          "List of all users who accessed the platform and their access levels.",
        totalUsers: "TOTAL USERS",
        totalAdmins: "ADMINS",
        noCompany: "No Cohort",
        levelLabel: "Level (Rank)",
        xpLabelMobile: "Accumulated XP",
        authorizeAccess: "Authorize Access",
        authorizeDesc: "Add emails to the platform's access whitelist.",
        emailPlaceholder: "collaborator@company.com",
        addToWhitelist: "Add to Whitelist",
        authorizedMembers: "Authorized Members",
        authorizedDesc: "These emails are authorized to complete Onboarding.",
        authorizedCount: "AUTHORIZED",
        removeAuthorization: "Remove Authorization",
        emptyWhitelist: "No whitelist credentials configured",
      },
      dashboard: {
        header: {
          eyebrow: "Intelligence & Diagnostics Center",
          title: "DASHBOARDS",
          subtitle: "QUIZ & ENERGY",
          description:
            "Track the vital pulse of the Force: every correct answer raises energy (+15%) and every mistake drains it (-15%). Monitor your individual accuracy and the collective evolution of the cohort in the Liberating Structures.",
        },
        mentor: {
          badge: "Jedi Mentor",
          name: "Master Nomura",
          message:
            '"The Force fluctuates with your decisions. Know your energy to master Ecocycle Planning."',
          videoButton: "Quiz Video",
        },
        tabParticipant: "Participant",
        tabTeam: "Group (Overall)",
        accumulatedXp: "ACCUMULATED XP",
        rankLabel: "RANK",
        kyberCrystal: "Vital Kyber Crystal",
        forceEnergy: "Force Energy",
        ofPower: "of Power",
        dynamicVariation: "Dynamic Variation",
        gainOnHit: "+15% on Hit",
        lossOnError: "-15% on Error",
        holocronSynced: "Holocron Synced",
        energyStates: {
          full: {
            label: "Full Attunement with the Force",
            subtitle: "Radiant and Stable Kyber Crystal",
            advice:
              "You're at the peak of your decision-making flow. Advance to Yoda's complex Strings!",
          },
          high: {
            label: "Channeling the Force",
            subtitle: "Stabilized Crystal in Expansion",
            advice:
              "Good connection with the Liberating Structures. Keep your hit streak going to reach mastery.",
          },
          medium: {
            label: "Energy Oscillation",
            subtitle: "Requires Focus on LS Combinations",
            advice:
              "Pay attention to scenario details. Review the cards in the Deck to recover your vital energy.",
          },
          low: {
            label: "Critical Force Drain",
            subtitle: "Destabilized Kyber Crystal",
            advice:
              "Recent mistakes drained your energy. Consult Master Nomura and review the Ecocycle traps!",
          },
        },
        accuracyInQuiz: "Quiz Accuracy",
        hits: "Hits",
        misses: "Misses",
        streakTitle: "Streak",
        consecutiveHits: "consecutive hits",
        bestStreakLabel: "Best historical streak:",
        hitsLower: "hits",
        jediPace: "🔥 Jedi Master Pace!",
        streakHint: "Get the next one right to raise your streak",
        energyEvolutionTitle: "Hit Evolution as Force Energy",
        energyEvolutionDesc:
          "Continuous energy trajectory: +15% gain for each correct challenge and -15% drain for each mistake.",
        hitPlus: "Hit (+15%)",
        errorMinus: "Error (-15%)",
        vitalLevel: "Vital Level",
        chart: {
          masteryLine: "Mastery 80%",
          criticalLine: "Critical 30%",
          tipLabel: "Crystal Tip:",
          tipText:
            "Keep energy above 80% to keep the Jedi Holocron in harmony and unlock the Guardian title.",
          attemptsRegistered: "attempts recorded",
        },
        tooltip: {
          hit: "Hit",
          error: "Error",
          forceEnergyLabel: "Force Energy:",
          structuresLabel: "LSs:",
        },
        facilitatorEvolution: {
          subtitle: "Competence Demonstrated in Quizzes",
          levelName: {
            padawan: "Level 1 • Padawan",
            jedi: "Level 2 • Jedi",
            yoda: "Level 3 • Yoda",
          },
          completed: "100% Completed",
          inProgress: "In Progress",
          locked: "Locked",
          assertividade: "Real Accuracy",
          bestScore: "Best Score:",
        },
        ecocycleDomain: {
          subtitle: "Pedagogical Performance by Ecocycle Phases and Traps",
          badge: "6 Phases & Traps Mapped",
          examples: "Examples:",
          standard: "Standard",
          hitsSuffix: "hits",
        },
        history: {
          title: "Recent Question History",
          subtitle: "Latest Challenges",
        },
        advice: {
          feedbackLabel: "Mentor Feedback",
          title: "Master Nomura Says:",
          quoteSuffix:
            "Remember: in Liberating Structures there are no memorized answers, but rather the right combination between purpose, participants, and Ecocycle moment.",
          energyLabel: "Energy:",
          precisionLabel: "Accuracy:",
          ecocycleLabel: "Ecocycle Planning",
        },
        aiReport: {
          diagnosticLabel: "Intelligence Diagnostics",
          title: "AI Consultative Advice & Quiz",
          generateBtn: "Generate Full Report",
          generating: "Syncing Holocron...",
          loadingTitle:
            "Cross-referencing vital energy, hits and liberating cards data...",
          loadingSubtitle: "This takes just a few moments",
          retry: "Try Again",
          newReport: "Generate New Report",
          defaultDesc:
            "Generate a personalized diagnostic analysis evaluating your score ({{xp}} XP), your current Force Energy level ({{energy}}%), and practical recommendations for facilitation with Ecocycle Planning.",
          connectionError:
            "Connection error with the server while loading the report",
          reportError:
            "There was a failure in the Holocron calibration while trying to generate the report.",
        },
        team: {
          energyAvgTitle: "Average Collective Energy",
          energyAvgDesc: "Cohort harmony in the Quizzes",
          accuracyTitle: "Collective Accuracy",
          accuracyDesc: "hits out of {{total}} questions",
          challengesTitle: "Challenges Faced",
          challengesDesc: "Answers submitted in the Quiz",
          activeParticipantsTitle: "Active Participants",
          activeParticipantsDesc: "Members engaged in the ecosystem",
          evolutionTitle: "Cohort's Collective Energy Evolution",
          evolutionDesc:
            "Accuracy and harmony curve of the cohort throughout the tests",
          energyLegend: "Cohort Energy",
          energyName: "Collective Energy (%)",
          evolutionFooter:
            "The cohort showed acceleration in mastering the Liberating Structures in recent rounds.",
          masteryByLevel: "Mastery by Level",
          masteryByLevelDesc: "Collective Hit Rate",
          completingParticipants: "Completing Participants:",
          mostMasteredTitle: "Most Mastered Structures",
          mostMasteredSubtitle: "Highest Hit Rate in the Quiz",
          highSync: "High Sync",
          mostMasteredFooter:
            "The cohort quickly grasps the use of TRIZ to break rigid habits and 1-2-4-All for full inclusion.",
          attentionTitle: "Ecocycle Attention Points",
          attentionSubtitle: "Structures with Highest Error Rate",
          trainingFocus: "Training Focus",
          attentionFooter:
            "Recommendation for the facilitator: deepen the distinction between the Rigidity Trap and the Poverty Trap in Ecocycle Planning and the Panarchy scales.",
          leaderboardTitle: "Quiz Guardians Board",
          leaderboardSubtitle: "Participants most attuned with the Force",
          topParticipants: "Top Participants",
          tablePosition: "Position & Participant",
          tableEnergy: "Force Energy",
          tablePrecision: "Accuracy",
          tableHits: "Hits",
          tableXp: "XP",
          levelMastery: {
            padawan: "Level 1 • Padawan (Simple Strings)",
            jedi: "Level 2 • Jedi (Combinations)",
            yoda: "Level 3 • Yoda (Strings with Ecocycle)",
          },
        },
      },
      common: {
        confirm: "Confirm",
        cancel: "Cancel",
        success: "Success",
        error: "Error",
        energy: "Energy",
        accuracy: "Accuracy",
      },
    },
  },
} as const;

const getSavedLanguage = (): string => {
  if (typeof window !== "undefined") {
    try {
      const saved =
        localStorage.getItem("app_language") ||
        localStorage.getItem("i18nextLng");
      if (saved) {
        if (saved.startsWith("es")) return "es";
        if (saved.startsWith("en")) return "en";
        if (saved.startsWith("pt")) return "pt-BR";
      }
    } catch {
      // ignore
    }
  }
  return "pt-BR";
};

const initialLang = getSavedLanguage();

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang,
  fallbackLng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});

if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    try {
      localStorage.setItem("app_language", lng);
      localStorage.setItem("i18nextLng", lng);
    } catch {
      // ignore
    }
  });
}

export default i18n;
