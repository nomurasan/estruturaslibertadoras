import { Challenge } from '../types';

export const ALL_CHALLENGES: Challenge[] = [
  // =========================================================================
  // NÍVEL 1: PADAWAN — RECONHECIMENTO DE ESTRUTURAS LIBERTADORAS (1 EL CHAVE)
  // Objetivo: Reconhecer a Estrutura Libertadora mais aderente a determinado
  // propósito e identificar qual pista do cenário aponta para essa escolha.
  // =========================================================================

  // Desafio 1
  {
    id: 1,
    level: 'PADAWAN',
    title: 'String: Armadilha da Rigidez e Desapego',
    scenario: 'Você está facilitando uma sessão de Ecocycle Planning para uma diretoria sobrecarregada, mas que demonstra forte apego a relatórios manuais e comitês obsoletos. Para quebrar a negação e criar coragem de enviar esses hábitos para a Destruição Criativa, qual Estrutura Libertadora deve abrir a String provocando risos e honestidade sobre o que é contraproducente?',
    correctSkillIds: [8], // 8: TRIZ
    incorrectSkillIds: [16, 21, 28, 32, 34],
    bestChoiceName: 'TRIZ',
    whyItWorks: 'Ao convidar o grupo a desenhar a pior receita possível para o fracasso e depois confrontar o que já praticam, TRIZ cria o alívio cômico e a lucidez necessários para aceitar o desapego antes do Ecocycle Planning.',
    scenarioClue: '“quebrar a negação e criar coragem de enviar esses hábitos para a Destruição Criativa provocando risos e honestidade sobre o que é contraproducente”',
    inStringRole: 'Antes do Ecocycle Planning (Abertura da String para desarmar resistências)',
    stringSequence: 'TRIZ (#8) ➔ Ecocycle Planning (#12)',
    anotherPossibility: 'Wicked Questions (#4) ou Conversation Café (#14) poderiam ajudar a verbalizar tensões veladas caso o humor encontre resistência inicial.',
    ecocyclePhase: 'Destruição Criativa / Armadilha da Rigidez',
    ecocycleConcepts: ['DESTRUIÇÃO_CRIATIVA', 'ARMADILHA_DA_RIGIDEZ'],
    explanation: 'TRIZ (#8) é uma escolha muito aderente para abrir a String quando o objetivo é quebrar a negação da Armadilha da Rigidez. O riso compartilhado sobre hábitos disfuncionais facilita a aceitação da Destruição Criativa no Ecocycle Planning.'
  },

  // Desafio 2
  {
    id: 2,
    level: 'PADAWAN',
    title: 'String: Resgatando da Armadilha da Pobreza',
    scenario: 'Durante o Ecocycle Planning, a equipe posicionou 8 iniciativas promissoras presas na Armadilha da Pobreza, sob o argumento recorrente de que "a diretoria não aprovou verba extra". Qual estrutura deve entrar logo após no fluxo da String para focar no que cada membro tem liberdade, autonomia e recursos próprios para agir no dia seguinte?',
    correctSkillIds: [5], // 5: 15% Solutions
    incorrectSkillIds: [22, 14, 24, 27, 34],
    bestChoiceName: '15% Solutions',
    whyItWorks: 'Foca a atenção do time exclusivamente naquilo que está dentro de sua esfera imediata de influência, eliminando desculpas por falta de verba e resgatando o senso de agência.',
    scenarioClue: '“a diretoria não aprovou verba extra... focar no que cada membro tem liberdade, autonomia e recursos próprios para agir no dia seguinte”',
    inStringRole: '1-2-4-All (Abertura/Mapeamento) ➔ Ecocycle Planning ➔ 15% Solutions (Ativação de autonomia imediata)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ 15% Solutions (#5)',
    anotherPossibility: 'Troika Consulting (#6) pode ser acoplada em seguida para que os colegas enriqueçam e desafiem positivamente essas soluções a 15%.',
    ecocyclePhase: 'Armadilha da Pobreza',
    ecocycleConcepts: ['ARMADILHA_DA_POBREZA'],
    explanation: '15% Solutions (#5) é extremamente coerente para responder à Armadilha da Pobreza no Ecocycle Planning. Ela devolve o protagonismo ao grupo, concentrando a energia no que é viável sem depender de orçamentos adicionais.'
  },

  // Desafio 3
  {
    id: 3,
    level: 'PADAWAN',
    title: 'String: Debriefing Reflexivo do Ecocycle Planning',
    scenario: 'O grupo acabou de posicionar 50 post-its no diagrama em infinito do Ecocycle Planning. Para evitar conclusões apressadas e transformar a visão visual em um plano de ação compartilhado e rigoroso em 3 etapas progressivas (fatos observados, significados/interpretações e próximas ações), qual estrutura deve fechar a String?',
    correctSkillIds: [11], // 11: What, So What, Now What? (W3)
    incorrectSkillIds: [2, 13, 20, 26, 31],
    bestChoiceName: 'What, So What, Now What? (W3)',
    whyItWorks: 'Estrutura o debriefing em três degraus cognitivos: primeiro garante alinhamento sobre o que realmente está no mapa (O quê?), depois explora as implicações estratégicas (E daí?), e culmina em decisões acordadas (E agora?).',
    scenarioClue: '“evitar conclusões apressadas e transformar a visão visual em um plano de ação compartilhado e rigoroso em 3 etapas progressivas (fatos, significados e ações)”',
    inStringRole: '1-2-4-All (Abertura/Mapeamento) ➔ Ecocycle Planning ➔ What, So What, Now What? (W3) (Fechamento reflexivo e plano de ação)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ What, So What, Now What? (W3) (#11)',
    anotherPossibility: '15% Solutions (#5) pode suceder o What, So What, Now What? (W3) (#11) para transformar as conclusões do "E agora?" em compromissos individuais imediatos.',
    ecocyclePhase: 'Integração de todo o Ecocycle Planning',
    ecocycleConcepts: ['MATURIDADE', 'DESTRUIÇÃO_CRIATIVA'],
    explanation: 'What, So What, Now What? (W3) (#11) é uma escolha muito sólida para fechar sessões com o Ecocycle Planning, pois impede que o grupo pule direto para soluções simplistas antes de analisar criticamente o panorama geral.'
  },

  // Desafio 4
  {
    id: 4,
    level: 'PADAWAN',
    title: 'String: Abertura Energética e Conexão em Pares',
    scenario: 'Você vai facilitar um workshop de Ecocycle Planning para 60 profissionais de diferentes departamentos que raramente conversam entre si. Qual estrutura abre a String gerando acolhimento, elevando a energia corporal e alinhando expectativas em 3 rodadas dinâmicas de conversas em pares?',
    correctSkillIds: [2], // 2: Impromptu Networking
    incorrectSkillIds: [19, 7, 25, 33, 29],
    bestChoiceName: 'Impromptu Networking',
    whyItWorks: 'Em cerca de 15 minutos e 3 rodadas com pessoas diferentes, distribui a fala igualmente para 100% dos presentes, quebra a rigidez formal e introduz as perguntas centrais da sessão.',
    scenarioClue: '“gerando acolhimento, elevando a energia corporal e alinhando expectativas em 3 rodadas dinâmicas de conversas em pares”',
    inStringRole: 'Antes do Ecocycle Planning (Abertura, quebra-gelo e conexão interpessoal)',
    stringSequence: 'Impromptu Networking (#2) ➔ Ecocycle Planning (#12)',
    anotherPossibility: 'Appreciative Interviews (#16) pode ser utilizada se a equipe estiver desmotivada e precisar resgatar histórias de sucesso antes da conexão geral.',
    ecocyclePhase: 'Abertura da sessão / Fase preparatória',
    ecocycleConcepts: ['GESTAÇÃO', 'NASCIMENTO'],
    explanation: 'Impromptu Networking (#2) encaixa-se com grande fluidez na abertura da String. As 3 trocas rápidas preparam o terreno emocional e relacional para a sinceridade exigida pelo Ecocycle Planning.'
  },

  // Desafio 5
  {
    id: 5,
    level: 'PADAWAN',
    title: 'String: Ampliando a Participação Total no Ecocycle Planning',
    scenario: 'Você deseja enriquecer o Ecocycle Planning com uma estrutura que amplie a participação antes da consolidação coletiva e reduza o efeito da hierarquia, garantindo que mesmo os colaboradores mais introvertidos tenham o mesmo espaço de contribuição que os diretores. Qual estrutura deve conduzir a reflexão e agrupamento dos itens?',
    correctSkillIds: [1], // 1: 1-2-4-All
    incorrectSkillIds: [22, 18, 28, 30, 32],
    bestChoiceName: '1-2-4-All',
    whyItWorks: 'Garante que cada pessoa tenha 1 minuto de silêncio para formular seu raciocínio, 2 minutos em duplas para enriquecer, 4 minutos em quartetos para consolidar antes de levar as ideias ao grande grupo, neutralizando dominâncias.',
    scenarioClue: '“amplie a participação antes da consolidação coletiva e reduza o efeito da hierarquia, garantindo que 100% dos presentes contribuam”',
    inStringRole: '1-2-4-All (Precede e conduz a participação coletiva) ➔ Ecocycle Planning (Mapeamento inclusivo)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12)',
    anotherPossibility: 'Conversation Café (#14) pode ser utilizado em temas especialmente sensíveis ou controversos dentro de cada quadrante.',
    ecocyclePhase: 'Mapeamento de todos os quadrantes do Ecocycle Planning',
    ecocycleConcepts: ['NASCIMENTO', 'MATURIDADE'],
    explanation: '1-2-4-All (#1) é uma escolha especialmente aderente para incorporar à String do Ecocycle Planning. Ela garante que todas as vozes contribuam com profundidade antes de colar os post-its no diagrama.'
  },

  // Desafio 6
  {
    id: 6,
    level: 'PADAWAN',
    title: 'String: Propósito Essencial como Bússola do Portfólio',
    scenario: 'Antes de pedir que a equipe decida quais produtos e iniciativas devem ser mantidos ou descontinuados no Ecocycle Planning, você percebe que os líderes discordam sobre a razão de existir da organização. Qual estrutura deve preceder o Ecocycle Planning na String, cavando o porquê essencial da equipe através de perguntas sucessivas em pares?',
    correctSkillIds: [3], // 3: 9 Whys
    incorrectSkillIds: [10, 15, 20, 24, 30],
    bestChoiceName: '9 Whys',
    whyItWorks: '9 Whys ajuda o grupo a aprofundar seu propósito e cria uma referência mais clara para avaliar decisões e prioridades do portfólio. Ao descer às raízes da motivação coletiva, oferece o referencial necessário para julgar o que pertence à Maturidade ou à Destruição.',
    scenarioClue: '“ninguém concorda sobre o propósito real da organização... cavando o porquê essencial da equipe através de perguntas sucessivas em pares”',
    inStringRole: 'Antes do Ecocycle Planning (Construção do norte estratégico e critério de escolha)',
    stringSequence: '9 Whys (#3) ➔ Ecocycle Planning (#12)',
    anotherPossibility: 'Purpose to Practice (P2P) (#33) pode complementar caso a equipe precise desdobrar o propósito descoberto em princípios e estruturas organizacionais.',
    ecocyclePhase: 'Fase preparatória / Gestação e Propósito',
    ecocycleConcepts: ['GESTAÇÃO'],
    explanation: '9 Whys (#3) traz clareza ao propósito raiz. Sem essa referência compartilhada, o grupo tem dificuldade em encontrar consenso sobre o que deve ser sustentado ou descontinuado no Ecocycle Planning.'
  },

  // Desafio 7
  {
    id: 7,
    level: 'PADAWAN',
    title: 'String: Desengessando Processos Burocráticos',
    scenario: 'O Ecocycle Planning revelou que os processos operacionais da empresa estão sofrendo de hipertrofia de regras e manuais na fase de Maturidade, sufocando a agilidade. Qual estrutura na String é indicada para podar essas restrições e identificar apenas as regras mínimas inegociáveis (Deve Fazer / Não Deve Fazer)?',
    correctSkillIds: [19], // 19: Min Specs
    incorrectSkillIds: [13, 2, 23, 27, 34],
    bestChoiceName: 'Min Specs',
    whyItWorks: 'Obriga o time a distinguir regras que são absolutamente indispensáveis para a segurança/sucesso daquelas que são apenas hábitos burocráticos, liberando espaço operacional imediato.',
    scenarioClue: '“hipertrofia de regras e manuais na fase de Maturidade... podar essas restrições e identificar apenas as regras mínimas inegociáveis (Deve Fazer / Não Deve Fazer)”',
    inStringRole: '1-2-4-All (Abertura/Mapeamento) ➔ Ecocycle Planning ➔ Min Specs (Intervenção na Armadilha da Rigidez)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Min Specs (#19)',
    anotherPossibility: 'TRIZ (#8) pode anteceder ou suceder o Min Specs para rir do absurdo de regras excessivas antes de podá-las.',
    ecocyclePhase: 'Armadilha da Rigidez / Maturidade',
    ecocycleConcepts: ['MATURIDADE', 'ARMADILHA_DA_RIGIDEZ'],
    explanation: 'Min Specs (#19) atua de forma muito eficaz para destravar a Armadilha da Rigidez no Ecocycle Planning. Ao definir apenas o estritamente obrigatório, devolve autonomia e flexibilidade às equipes.'
  },

  // Desafio 8
  {
    id: 8,
    level: 'PADAWAN',
    title: 'String: Consultoria Rápida para Projetos Travados',
    scenario: 'Após mapear o Ecocycle Planning, 6 líderes com projetos presos na Armadilha da Pobreza precisam de aconselhamento imediato de seus pares. Qual estrutura organiza a sala em trios de 10 minutos por rodada, onde o responsável expõe o desafio, senta de costas para escutar a conversa dos colegas e sai com novos caminhos?',
    correctSkillIds: [6], // 6: Troika Consulting
    incorrectSkillIds: [17, 21, 29, 31, 33],
    bestChoiceName: 'Troika Consulting',
    whyItWorks: 'O ato do protagonista ouvir de costas impede a reatividade e a necessidade de se defender, permitindo que a inteligência de dois colegas ofereça soluções práticas em ciclos curtos e objetivos.',
    scenarioClue: '“organiza a sala em trios de 10 minutos por rodada, onde o responsável expõe o problema, senta de costas para escutar a conversa dos colegas e sai com novos caminhos”',
    inStringRole: '1-2-4-All (Abertura/Mapeamento) ➔ Ecocycle Planning ➔ Troika Consulting (Aconselhamento prático entre pares)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Troika Consulting (#6)',
    anotherPossibility: 'Wise Crowds (#7) é uma opção complementar caso o desafio seja sistêmico e precise de um conselho consultivo maior em vez de trios.',
    ecocyclePhase: 'Armadilha da Pobreza',
    ecocycleConcepts: ['ARMADILHA_DA_POBREZA'],
    explanation: 'Troika Consulting (#6) é muito aderente para destravar iniciativas na Armadilha da Pobreza. Em menos de 30 minutos, múltiplos líderes recebem orientações práticas e frescas de seus colegas.'
  },

  // Desafio 9
  {
    id: 9,
    level: 'PADAWAN',
    title: 'String: Semeadura Rápida para a Gestação',
    scenario: 'O Ecocycle Planning apontou poucas iniciativas posicionadas em Gestação: a empresa não tem novos projetos no pipeline para o futuro. Você quer que um grupo de 70 pessoas gere e selecione democraticamente as 10 melhores e mais ousadas ideias em apenas 25 minutos com pontuação anônima. Qual estrutura acoplar na String?',
    correctSkillIds: [13], // 13: 25/10 Crowdsourcing
    incorrectSkillIds: [9, 14, 18, 26, 28],
    bestChoiceName: '25/10 Crowdsourcing',
    whyItWorks: 'Combina escrita sintética, troca randômica e divertida de cartões ao som de música e pontuação anônima em 5 rodadas rápidas, ranqueando as melhores ideias sem viés de hierarquia ou favoritismo.',
    scenarioClue: '“gere e selecione democraticamente as 10 melhores e mais ousadas ideias em apenas 25 minutos com pontuação anônima”',
    inStringRole: '1-2-4-All (Abertura/Mapeamento) ➔ Ecocycle Planning ➔ 25/10 Crowdsourcing (Nutrição do quadrante de Gestação)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ 25/10 Crowdsourcing (#13)',
    anotherPossibility: '1-2-4-All (#1) pode ser usado como alternativa mais reflexiva se o tempo for maior ou o grupo menor.',
    ecocyclePhase: 'Gestação',
    ecocycleConcepts: ['GESTAÇÃO'],
    explanation: '25/10 Crowdsourcing (#13) funciona de forma notável para abastecer a fase de Gestação do Ecocycle Planning, aproveitando a inteligência coletiva de grupos grandes em tempo reduzido.'
  },

  // Desafio 10
  {
    id: 10,
    level: 'PADAWAN',
    title: 'String: Acordos Explícitos Entre Áreas em Conflito',
    scenario: 'O Ecocycle Planning mostrou que os novos projetos só vão avançar se a área de TI e a área Comercial cooperarem, mas elas vivem em atrito e promessas vagas. Qual estrutura na String força cada grupo a declarar pedidos diretos e receber respostas transparentes e inequívocas de "Sim", "Não", "Vou Tentar" ou "Esclarecimento"?',
    correctSkillIds: [30], // 30: What I Need From You (WINFY)
    incorrectSkillIds: [4, 15, 20, 24, 32],
    bestChoiceName: 'What I Need From You (WINFY)',
    whyItWorks: 'Elimina as desculpas e meias-palavras interdepartamentais ao estabelecer um protocolo rígido de pedidos objetivos seguidos por quatro respostas categóricas e vinculantes.',
    scenarioClue: '“força cada grupo a declarar pedidos diretos e receber respostas explícitas e sem rodeios de \'Sim\', \'Não\', \'Vou Tentar\' ou \'Esclarecimento\'”',
    inStringRole: '1-2-4-All (Abertura/Mapeamento) ➔ Ecocycle Planning ➔ What I Need From You (WINFY) (Pactuação de dependências interdepartamentais)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ What I Need From You (WINFY) (#30)',
    anotherPossibility: 'Integrated~Autonomy (#29) pode ser utilizada caso o atrito venha de um conflito estrutural entre centralização e liberdade local.',
    ecocyclePhase: 'Armadilha da Pobreza / Fronteira entre áreas',
    ecocycleConcepts: ['ARMADILHA_DA_POBREZA'],
    explanation: 'What I Need From You (WINFY) (#30) desata bloqueios relacionais entre áreas que retêm projetos na Armadilha da Pobreza do Ecocycle Planning, substituindo reuniões evasivas por acordos de serviço claros.'
  },

  // =========================================================================
  // NÍVEL 2: JEDI — MONTAGEM DE STRINGS COMPOSTAS (2 ELS + ECOCYCLE CENTRAL)
  // Objetivo: Aprender a combinar Estruturas Libertadoras em sequências vivas
  // com o Ecocycle Planning funcionando como a estrutura central.
  // =========================================================================

  // Desafio 11
  {
    id: 11,
    level: 'JEDI',
    title: 'String de Desapego Burocrático e Ação Autônoma',
    scenario: 'Um departamento de operações está sufocado por rotinas antigas. Para facilitar um Ecocycle Planning libertador, você precisa: (1) antes do Ecocycle Planning, provocar a equipe a rir e desapegar de seus hábitos e processos contraproducentes, e (2) logo após o mapeamento do Ecocycle Planning, fazer com que cada um assuma compromissos imediatos com o que tem autonomia para executar. Quais 2 estruturas formam essa String com o Ecocycle Planning?',
    correctSkillIds: [8, 5], // 8: TRIZ + 5: 15% Solutions
    incorrectSkillIds: [2, 14, 21, 31],
    bestChoiceName: 'TRIZ (#8) e 15% Solutions (#5)',
    whyItWorks: 'TRIZ limpa a mente e o portfólio de práticas disfuncionais antes do mapeamento, e 15% Solutions transforma a lucidez do Ecocycle Planning em compromissos concretos que não dependem de autorização superior.',
    scenarioClue: '“antes do Ecocycle Planning, provocar a equipe a rir e desapegar de hábitos contraproducentes... e logo após o mapeamento do Ecocycle Planning, fazer com que cada um assuma compromissos com o que tem autonomia”',
    inStringRole: 'TRIZ (Antes do Ecocycle Planning) ➔ Ecocycle Planning (Durante) ➔ 15% Solutions (Depois)',
    stringSequence: 'TRIZ (#8) ➔ Ecocycle Planning (#12) ➔ 15% Solutions (#5)',
    anotherPossibility: 'Min Specs (#19) poderia ser inserido entre o Ecocycle Planning e o 15% Solutions (#5) para podar regras antes dos planos individuais.',
    ecocyclePhase: 'Destruição Criativa e Armadilha da Pobreza',
    ecocycleConcepts: ['DESTRUIÇÃO_CRIATIVA', 'ARMADILHA_DA_POBREZA'],
    explanation: 'A sequência TRIZ ➔ Ecocycle Planning ➔ 15% Solutions é uma String muito coerente para situações de desapego, análise do portfólio e ativação de ações autônomas, preparando o terreno e garantindo execução prática.'
  },

  // Desafio 12
  {
    id: 12,
    level: 'JEDI',
    title: 'String de Alinhamento de Propósito e Colheita Reflexiva',
    scenario: 'Você foi chamado para facilitar a revisão anual de portfólio da diretoria. Para que a sessão com o Ecocycle Planning tenha consistência duradoura, você planeja: (1) abrir descobrindo a razão essencial da companhia com sucessivas perguntas de "por quê?" em pares, e (2) fechar com um debriefing estruturado que separe fatos, sentidos e decisões em 3 etapas sequenciais. Quais 2 estruturas completam os extremos dessa String?',
    correctSkillIds: [3, 11], // 3: 9 Whys + 11: What, So What, Now What? (W3)
    incorrectSkillIds: [7, 18, 24, 28],
    bestChoiceName: '9 Whys (#3) e What, So What, Now What? (W3) (#11)',
    whyItWorks: '9 Whys ancora as decisões do Ecocycle Planning em um referencial claro de propósito, enquanto What, So What, Now What? (W3) fecha o processo extraindo significados compartilhados e decisões práticas sem precipitações.',
    scenarioClue: '“abrir descobrindo a razão essencial com perguntas sucessivas em pares... e fechar com debriefing estruturado em fatos, sentidos e decisões em 3 etapas”',
    inStringRole: '9 Whys (Antes do Ecocycle Planning) ➔ Ecocycle Planning (Durante) ➔ What, So What, Now What? (W3) (Depois)',
    stringSequence: '9 Whys (#3) ➔ Ecocycle Planning (#12) ➔ What, So What, Now What? (W3) (#11)',
    anotherPossibility: 'Impromptu Networking (#2) poderia anteceder os 9 Whys caso os participantes precisem de aquecimento interpessoal inicial.',
    ecocyclePhase: 'Propósito Estratégico e Integração Geral',
    ecocycleConcepts: ['GESTAÇÃO', 'MATURIDADE'],
    explanation: '9 Whys (#3) ajuda o grupo a aprofundar seu propósito antes do Ecocycle Planning, e What, So What, Now What? (W3) (#11) traduz a visão do mapa em decisões lúcidas e planos executáveis.'
  },

  // Desafio 13
  {
    id: 13,
    level: 'JEDI',
    title: 'String para Resgatar da Armadilha da Pobreza',
    scenario: 'Após o exercício do Ecocycle Planning, diversas iniciativas inovadoras foram identificadas como presas na Armadilha da Pobreza. Para montar uma String pós-Ecocycle Planning de resgate, você precisa: (1) primeiro, focar no que cada líder de projeto pode fazer com sua própria autonomia de 15%, e (2) em seguida, colocá-los em trios de consultoria rápida entre pares para refinar essas ações ouvindo os colegas de costas. Quais 2 estruturas compõem essa String de socorro?',
    correctSkillIds: [5, 6], // 5: 15% Solutions + 6: Troika Consulting
    incorrectSkillIds: [15, 20, 29, 34],
    bestChoiceName: '15% Solutions (#5) e Troika Consulting (#6)',
    whyItWorks: '15% Solutions gera o ponto de partida na autonomia individual, e Troika Consulting fornece a inteligência cruzada de colegas para aprimorar e testar essas soluções sem atritos defensivos.',
    scenarioClue: '“focar no que cada líder de projeto pode fazer com sua própria autonomia de 15%... e em seguida, colocá-los em trios de consultoria rápida ouvindo os colegas de costas”',
    inStringRole: '1-2-4-All (Abertura) ➔ Ecocycle Planning ➔ 15% Solutions (Depois 1) ➔ Troika Consulting (Depois 2)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ 15% Solutions (#5) ➔ Troika Consulting (#6)',
    anotherPossibility: 'Wise Crowds (#7) pode ser uma alternativa à Troika caso os desafios envolvam conhecimentos técnicos muito especializados.',
    ecocyclePhase: 'Armadilha da Pobreza',
    ecocycleConcepts: ['ARMADILHA_DA_POBREZA'],
    explanation: '15% Solutions (#5) ativa o protagonismo pessoal dos donos dos projetos travados, e Troika Consulting (#6) mobiliza a colaboração ágil de colegas para expandir e refinar esses primeiros passos.'
  },

  // Desafio 14
  {
    id: 14,
    level: 'JEDI',
    title: 'String de Destravamento da Rigidez e Acordos entre Silos',
    scenario: 'O Ecocycle Planning apontou dois gargalos críticos na empresa: a área de operações está com a Maturidade engessada por excesso de burocracia, e as áreas de negócio não conseguem firmar compromissos com TI. Para resolver ambos os impasses na String após o Ecocycle Planning, quais 2 estruturas devem ser acopladas para podar as regras para especificações mínimas e articular pedidos diretos de ajuda com respostas categóricas?',
    correctSkillIds: [19, 30], // 19: Min Specs + 30: What I Need From You (WINFY)
    incorrectSkillIds: [1, 16, 25, 32],
    bestChoiceName: 'Min Specs (#19) e What I Need From You (WINFY) (#30)',
    whyItWorks: 'Min Specs elimina regulamentos obsoletos que travam a agilidade interna, e What I Need From You (WINFY) estabelece acordos de cooperação explícitos e sem desculpas entre diferentes diretorias.',
    scenarioClue: '“podar as regras para especificações mínimas... e articular pedidos diretos de ajuda com respostas categóricas”',
    inStringRole: '1-2-4-All (Abertura) ➔ Ecocycle Planning ➔ Min Specs (Destravando Rigidez) ➔ What I Need From You (WINFY) (Destravando Pobreza entre áreas)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Min Specs (#19) ➔ What I Need From You (WINFY) (#30)',
    anotherPossibility: 'TRIZ (#8) poderia preparar o terreno do Min Specs, ajudando o grupo a rir dos regulamentos excessivos.',
    ecocyclePhase: 'Armadilha da Rigidez e Armadilha da Pobreza',
    ecocycleConcepts: ['ARMADILHA_DA_RIGIDEZ', 'ARMADILHA_DA_POBREZA'],
    explanation: 'Min Specs (#19) atua na poda de restrições desnecessárias da Rigidez, enquanto What I Need From You (WINFY) (#30) remove o gargalo de cooperação entre áreas que impedia projetos de decolarem.'
  },

  // Desafio 15
  {
    id: 15,
    level: 'JEDI',
    title: 'String de Inovação Aberta e Governança de Novos Projetos',
    scenario: 'O mapa do Ecocycle Planning revelou que o portfólio está envelhecido e com poucas iniciativas posicionadas em Gestação. Você desenha uma String onde: (1) primeiro, um grande grupo gera e ranqueia democraticamente as 10 ideias mais ousadas com pontuação anônima, e (2) para a ideia mais votada, o time projeta os 5 elementos essenciais de estruturação (Propósito, Princípios, Participantes, Estrutura e Práticas). Quais 2 estruturas formam essa String de inovação?',
    correctSkillIds: [13, 33], // 13: 25/10 Crowdsourcing + 33: Purpose to Practice (P2P)
    incorrectSkillIds: [4, 17, 23, 27],
    bestChoiceName: '25/10 Crowdsourcing (#13) e Purpose to Practice (P2P) (#33)',
    whyItWorks: '25/10 Crowdsourcing mobiliza a imaginação coletiva para semear ideias inovadoras no Ecocycle Planning, e Purpose to Practice (P2P) oferece o esqueleto institucional para que a ideia escolhida se materialize de forma sustentável.',
    scenarioClue: '“gera e ranqueia democraticamente as 10 ideias mais ousadas com pontuação anônima... e projeta os 5 elementos essenciais (Propósito, Princípios, Participantes, Estrutura e Práticas)”',
    inStringRole: '1-2-4-All (Abertura) ➔ Ecocycle Planning ➔ 25/10 Crowdsourcing (Geração de ideias) ➔ Purpose to Practice (P2P) (Estruturação)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ 25/10 Crowdsourcing (#13) ➔ Purpose to Practice (P2P) (#33)',
    anotherPossibility: '1-2-4-All (#1) pode anteceder o 25/10 Crowdsourcing (#13) para amadurecer as perguntas provocadoras sobre o futuro.',
    ecocyclePhase: 'Gestação',
    ecocycleConcepts: ['GESTAÇÃO', 'NASCIMENTO'],
    explanation: '25/10 Crowdsourcing (#13) semeia propostas ousadas na Gestação do Ecocycle Planning, e Purpose to Practice (P2P) (#33) traduz a aposta principal em governança e modelo de operação claros.'
  },

  // Desafio 16
  {
    id: 16,
    level: 'JEDI',
    title: 'String de Segurança Psicológica e Luto Organizacional',
    scenario: 'O desfecho da Destruição Criativa no Ecocycle Planning determinou a descontinuidade de uma unidade de negócios histórica, gerando clima pesado e ressentimento. Para acolher o fator humano na String de facilitação, você precisa: (1) criar um espaço de escuta empática em pares sobre experiências de não ser ouvido, e (2) abrir um espaço calmo e circular com bastão da fala para conversar serenamente sobre a transição. Quais 2 estruturas compõem essa String de acolhimento?',
    correctSkillIds: [23, 14], // 23: Heard, Seen, Respected + 14: Conversation Café
    incorrectSkillIds: [9, 10, 22, 29],
    bestChoiceName: 'Heard, Seen, Respected (HSR) (#23) e Conversation Café (#14)',
    whyItWorks: 'Heard, Seen, Respected (HSR) reconstrói a empatia e validação emocional individual em pares, e Conversation Café oferece um ambiente seguro e desacelerado com bastão da fala para dialogar sobre perdas sem debate agressivo.',
    scenarioClue: '“escuta empática em pares sobre experiências de não ser ouvido... e espaço calmo e circular com bastão da fala para conversar serenamente sobre a perda”',
    inStringRole: '1-2-4-All (Abertura) ➔ Ecocycle Planning ➔ Heard, Seen, Respected (HSR) (Empatia) ➔ Conversation Café (Diálogo seguro)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Heard, Seen, Respected (HSR) (#23) ➔ Conversation Café (#14)',
    anotherPossibility: 'Appreciative Interviews (#16) pode ser introduzida em seguida para resgatar aprendizados positivos deixados pelo ciclo que se encerra.',
    ecocyclePhase: 'Destruição Criativa / Luto Organizacional',
    ecocycleConcepts: ['DESTRUIÇÃO_CRIATIVA'],
    explanation: 'Heard, Seen, Respected (HSR) (#23) e Conversation Café (#14) criam a segurança psicológica necessária para que o grupo processe as consequências humanas da Destruição Criativa sem cair no cinismo.'
  },

  // Desafio 17
  {
    id: 17,
    level: 'JEDI',
    title: 'String de Conexão Inicial e Mapeamento de Redes Estratégicas',
    scenario: 'Para facilitar uma transição estratégica de portfólio no Ecocycle Planning com 50 líderes, sua String prevê: (1) abrir a sessão conectando todos rapidamente e alinhando expectativas em 3 rodadas em pares, e (2) após posicionar os projetos no Ecocycle Planning, desenhar a teia de relações organizacionais para identificar onde criar pontes entre departamentos necessárias para viabilizar as mudanças. Quais 2 estruturas completam essa String?',
    correctSkillIds: [2, 17], // 2: Impromptu Networking + 17: Social Network Webbing
    incorrectSkillIds: [7, 18, 26, 32],
    bestChoiceName: 'Impromptu Networking (#2) e Social Network Webbing (#17)',
    whyItWorks: 'Impromptu Networking aquece o grupo e gera entrosamento horizontal, enquanto Social Network Webbing mapeia as conexões informais e pontes que faltam para mobilizar recursos entre as fases do Ecocycle Planning.',
    scenarioClue: '“abrir a sessão conectando todos rapidamente em 3 rodadas em pares... e desenhar a teia de relações organizacionais para identificar onde criar pontes entre departamentos”',
    inStringRole: 'Impromptu Networking (Antes do Ecocycle Planning) ➔ Ecocycle Planning ➔ Social Network Webbing (Depois)',
    stringSequence: 'Impromptu Networking (#2) ➔ Ecocycle Planning (#12) ➔ Social Network Webbing (#17)',
    anotherPossibility: 'What I Need From You (WINFY) (#30) pode fechar a String para formalizar pedidos nas pontes descobertas pelo mapeamento de rede.',
    ecocyclePhase: 'Conexão sistêmica e fluxo de recursos',
    ecocycleConcepts: ['NASCIMENTO', 'MATURIDADE'],
    explanation: 'Impromptu Networking (#2) estabelece a presença e abertura relacional na abertura, e Social Network Webbing (#17) materializa as vias de conexão informal necessárias para sustentar as transições do Ecocycle Planning.'
  },

  // Desafio 18
  {
    id: 18,
    level: 'JEDI',
    title: 'String de Tensões Paradoxais e Autonomia Local',
    scenario: 'O Ecocycle Planning evidenciou um dilema crônico: filiais querem liberdade para experimentar novos serviços na Gestação, enquanto a sede exige padronização rigorosa na Maturidade. Para articular esse impasse na String, quais 2 estruturas devem: (1) formular a pergunta paradoxal que expressa essa tensão legítima, e (2) pactuar acordos de autonomia descentralizada integrada à coordenação central?',
    correctSkillIds: [4, 29], // 4: Wicked Questions + 29: Integrated~Autonomy
    incorrectSkillIds: [8, 15, 24, 34],
    bestChoiceName: 'Wicked Questions (#4) e Integrated~Autonomy (#29)',
    whyItWorks: 'Wicked Questions desafia o time a superar o falso dilema "ou inovação local ou controle central", e Integrated~Autonomy traduz essa resposta em critérios transparentes de governança.',
    scenarioClue: '“formular a pergunta paradoxal que expressa essa tensão legítima... e pactuar acordos de autonomia descentralizada integrada à coordenação central”',
    inStringRole: 'Wicked Questions (Antes do Ecocycle Planning ou Durante) ➔ Ecocycle Planning ➔ Integrated~Autonomy (Depois)',
    stringSequence: 'Wicked Questions (#4) ➔ Ecocycle Planning (#12) ➔ Integrated~Autonomy (#29)',
    anotherPossibility: 'Min Specs (#19) pode apoiar o Integrated~Autonomy definindo as regras mínimas inegociáveis que a sede exige.',
    ecocyclePhase: 'Tensões entre Maturidade e Gestação',
    ecocycleConcepts: ['MATURIDADE', 'GESTAÇÃO'],
    explanation: 'Wicked Questions (#4) nomeia a tensão polarizada de forma construtiva, e Integrated~Autonomy (#29) oferece a arquitetura operacional para que autonomia local e integração central coexistam.'
  },

  // Desafio 19
  {
    id: 19,
    level: 'JEDI',
    title: 'String de Validação Empírica no Campo e Escuta Dinâmica',
    scenario: 'Antes de decidir quais produtos da empresa ainda merecem permanecer na fase de Maturidade do Ecocycle Planning, a equipe precisa de dados factuais. A String preparatória deve: (1) orientar os desenvolvedores a observar silenciosamente os usuários usando o produto em seu ambiente real, e (2) realizar um diálogo dinâmico em formato aquário com usuários convidados e cadeira aberta para a plateia. Quais 2 estruturas compõem essa String empírica?',
    correctSkillIds: [28, 15], // 28: Simple Ethnography + 15: UX Fishbowl
    incorrectSkillIds: [3, 16, 20, 31],
    bestChoiceName: 'Simple Ethnography (#28) e User Experience Fishbowl (UX Fishbowl) (#15)',
    whyItWorks: 'Simple Ethnography colhe evidências comportamentais sem distorções de pesquisas formais, e User Experience Fishbowl (UX Fishbowl) permite que a equipe escute as experiências e dores reais dos clientes de forma vívida.',
    scenarioClue: '“observar silenciosamente os usuários usando o produto em seu ambiente real... e realizar diálogo dinâmico em formato aquário com usuários e cadeira aberta”',
    inStringRole: 'Simple Ethnography (Coleta no campo) ➔ User Experience Fishbowl (UX Fishbowl) (Escuta em grupo) ➔ Ecocycle Planning (Diagnóstico)',
    stringSequence: 'Simple Ethnography (#28) ➔ User Experience Fishbowl (UX Fishbowl) (#15) ➔ Ecocycle Planning (#12)',
    anotherPossibility: 'What, So What, Now What? (W3) (#11) pode fechar a rodada de observação para consolidar os insights antes de entrar no Ecocycle Planning.',
    ecocyclePhase: 'Diagnóstico da fase de Maturidade',
    ecocycleConcepts: ['MATURIDADE'],
    explanation: 'Simple Ethnography (#28) e User Experience Fishbowl (UX Fishbowl) (#15) alimentam o Ecocycle Planning com dados de experiência do usuário legítimos, evitando que o posicionamento dos itens seja baseado em opiniões subjetivas de gabinete.'
  },

  // Desafio 20
  {
    id: 20,
    level: 'JEDI',
    title: 'String de Resiliência a Choques Externos e Roadmap Visual',
    scenario: 'O setor em que a organização atua passa por transformações tecnológicas abruptas. Para enriquecer o Ecocycle Planning com visão de futuro, a String deve: (1) cruzar as duas variáveis mais imprevisíveis do mercado gerando 4 cenários futuros para testar a resiliência do portfólio, e (2) mapear o plano de transição resultante em quadros visuais cronológicos ao longo do tempo. Quais 2 estruturas compõem essa String com o Ecocycle Planning?',
    correctSkillIds: [32, 21], // 32: Critical Uncertainties + 21: Design Storyboards
    incorrectSkillIds: [1, 10, 26, 30],
    bestChoiceName: 'Critical Uncertainties (#32) e Design Storyboards (#21)',
    whyItWorks: 'Critical Uncertainties expõe o portfólio a quatro mundos plausíveis e contrastantes, e Design Storyboards traduz as adaptações necessárias em uma narrativa visual sequencial de execução.',
    scenarioClue: '“cruzar as duas variáveis mais imprevisíveis gerando 4 cenários futuros para testar o portfólio... e mapear o plano de transição em quadros visuais cronológicos”',
    inStringRole: '1-2-4-All (Abertura) ➔ Ecocycle Planning ➔ Critical Uncertainties (Teste de estresse) ➔ Design Storyboards (Plano de ação visual)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Critical Uncertainties (#32) ➔ Design Storyboards (#21)',
    anotherPossibility: '15% Solutions (#5) pode acompanhar o Design Storyboards para definir quem assume a responsabilidade pelas ações dos primeiros quadros.',
    ecocyclePhase: 'Teste de resiliência e planejamento de transições',
    ecocycleConcepts: ['MATURIDADE', 'DESTRUIÇÃO_CRIATIVA'],
    explanation: 'Critical Uncertainties (#32) testa a robustez das iniciativas mapeadas no Ecocycle Planning frente a surpresas externas, e Design Storyboards (#21) ancora as decisões em um roadmap visual compartilhado.'
  },

  // =========================================================================
  // NÍVEL 3: YODA — ARQUITETURA MESTRA DE STRINGS (3 ELS COMPLEMENTARES)
  // Objetivo: Desenvolver arquitetura de facilitação sofisticada em torno do
  // Ecocycle Planning, avaliando coerência de sequência, propósito e transição.
  // =========================================================================

  // Desafio 21
  {
    id: 21,
    level: 'YODA',
    title: 'String Mestra de Transformação Coletiva de Portfólio',
    scenario: 'Você foi contratado para desenhar uma convenção de 1 dia com 120 participantes para destravar uma organização estagnada. A arquitetura de facilitação em torno do Ecocycle Planning deve: (1) abrir a sessão quebrando práticas disfuncionais com humor reflexivo, (2) utilizar a estrutura inclusiva universal para que todos processem e posicionem os post-its no Ecocycle Planning sem monopolização de fala, e (3) encerrar o dia desafiando cada participante a firmar ações imediatas dentro de sua autonomia individual. Quais 3 estruturas complementam o Ecocycle Planning?',
    correctSkillIds: [8, 1, 5], // 8: TRIZ + 1: 1-2-4-All + 5: 15% Solutions
    incorrectSkillIds: [14, 25, 34],
    bestChoiceName: 'TRIZ (#8), 1-2-4-All (#1) e 15% Solutions (#5)',
    whyItWorks: 'Uma combinação muito consistente para este desafio: TRIZ prepara a mente desfazendo o apego e o medo; 1-2-4-All garante inclusão simultânea de todos os participantes no preenchimento do mapa; e 15% Solutions converte a visão ecológica em responsabilidade e ação imediata.',
    scenarioClue: '“abrir a sessão quebrando práticas disfuncionais com humor reflexivo... estrutura inclusiva universal para todos posicionarem os post-its... e firmar ações imediatas dentro de sua autonomia individual”',
    inStringRole: 'TRIZ (Abertura) ➔ Ecocycle Planning conduzido via 1-2-4-All (Centro) ➔ 15% Solutions (Fechamento)',
    stringSequence: 'TRIZ (#8) ➔ Ecocycle Planning (#12) com 1-2-4-All (#1) ➔ 15% Solutions (#5)',
    anotherPossibility: 'What, So What, Now What? (W3) (#11) poderia ser intercalado antes de 15% Solutions (#5) se a liderança exigir um debriefing analítico intermediário.',
    ecocyclePhase: 'Ciclo completo: Desapego ➔ Mapeamento ➔ Ação Autônoma',
    ecocycleConcepts: ['ARMADILHA_DA_RIGIDEZ', 'DESTRUIÇÃO_CRIATIVA'],
    explanation: 'Esta sequência combina três forças de facilitação de grande coerência pedagógica: TRIZ desconstrói a resistência da Rigidez, 1-2-4-All viabiliza o mapeamento coletivo no Ecocycle Planning, e 15% Solutions ativa a execução sem dependências hierárquicas.'
  },

  // Desafio 22
  {
    id: 22,
    level: 'YODA',
    title: 'String de Regeneração e Esperança pós-Reestruturação',
    scenario: 'Após uma dolorosa reestruturação organizacional, a equipe remanescente precisa reencontrar seu rumo. A jornada ao redor do Ecocycle Planning deve: (1) abrir resgatando histórias em que o time operou em seu auge para reconstruir autoconfiança, (2) debriefar o mapa do Ecocycle Planning em 3 etapas metódicas (O quê? E daí? E agora?), e (3) mobilizar primeiros passos acionáveis na margem individual de autonomia de cada membro. Quais 3 estruturas compõem essa jornada com o Ecocycle Planning?',
    correctSkillIds: [16, 11, 5], // 16: Appreciative Interviews + 11: W3 + 5: 15% Solutions
    incorrectSkillIds: [20, 27, 30],
    bestChoiceName: 'Appreciative Interviews (#16), What, So What, Now What? (W3) (#11) e 15% Solutions (#5)',
    whyItWorks: 'Appreciative Interviews transforma a energia coletiva do medo para o potencial a partir de memórias de sucesso real; What, So What, Now What? (W3) traduz o mapa do Ecocycle Planning em interpretações sóbrias; e 15% Solutions canaliza essa energia em passos que os colaboradores controlam diretamente.',
    scenarioClue: '“resgatando histórias em que o time operou em seu auge... debriefar em 3 etapas metódicas (O quê? E daí? E agora?)... e mobilizar primeiros passos na margem individual de autonomia”',
    inStringRole: 'Appreciative Interviews (Abertura apreciativa) ➔ Ecocycle Planning ➔ What, So What, Now What? (W3) (Reflexão) ➔ 15% Solutions (Ação)',
    stringSequence: 'Appreciative Interviews (#16) ➔ Ecocycle Planning (#12) ➔ What, So What, Now What? (W3) (#11) ➔ 15% Solutions (#5)',
    anotherPossibility: 'Conversation Café (#14) poderia anteceder o What, So What, Now What? (W3) (#11) caso o luto ainda exija desabafo emocional antes da análise de fatos.',
    ecocyclePhase: 'Travessia da Destruição Criativa para a Gestação',
    ecocycleConcepts: ['DESTRUIÇÃO_CRIATIVA', 'GESTAÇÃO'],
    explanation: 'Appreciative Interviews (#16) restaura a confiança psicológica, o Ecocycle Planning situa a realidade do portfólio, What, So What, Now What? (W3) (#11) constrói sentido coletivo e 15% Solutions (#5) sela o compromisso de reconstrução.'
  },

  // Desafio 23
  {
    id: 23,
    level: 'YODA',
    title: 'String de Destravamento Múltiplo de Armadilhas',
    scenario: 'Durante o Ecocycle Planning, ficou evidente que a empresa tem gargalos tanto na Rigidez (por regulamentos obsoletos) quanto na Pobreza (por desarticulação entre áreas e líderes inseguros). Para desenhar a intervenção pós-Ecocycle Planning na String, você precisa: (1) podar as regras ao mínimo essencial, (2) formalizar pedidos diretos e respostas categóricas entre diretorias, e (3) organizar os donos de projetos em trios de consultoria rápida de 10 minutos. Quais 3 estruturas formam essa sequência?',
    correctSkillIds: [19, 30, 6], // 19: Min Specs + 30: WINFY + 6: Troika Consulting
    incorrectSkillIds: [2, 13, 24],
    bestChoiceName: 'Min Specs (#19), What I Need From You (WINFY) (#30) e Troika Consulting (#6)',
    whyItWorks: 'Min Specs desobstrui a Rigidez cortando regulamentos inflados; What I Need From You (WINFY) resolve o impasse interdepartamental da Pobreza garantindo suporte explícito; e Troika Consulting capacita os líderes no refinamento de seus planos de ação.',
    scenarioClue: '“podar as regras ao mínimo essencial... formalizar pedidos diretos e respostas categóricas entre diretorias... e organizar donos de projetos em trios de consultoria de 10 minutos”',
    inStringRole: '1-2-4-All (Abertura) ➔ Ecocycle Planning ➔ Min Specs (Podando Rigidez) ➔ What I Need From You (WINFY) (Pactuando Pobreza) ➔ Troika Consulting (Mentoria entre pares)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Min Specs (#19) ➔ What I Need From You (WINFY) (#30) ➔ Troika Consulting (#6)',
    anotherPossibility: '15% Solutions (#5) pode ser realizada antes da Troika Consulting (#6) para que cada líder traga sua proposta inicial pronta para receber conselho.',
    ecocyclePhase: 'Armadilha da Rigidez e Armadilha da Pobreza',
    ecocycleConcepts: ['ARMADILHA_DA_RIGIDEZ', 'ARMADILHA_DA_POBREZA'],
    explanation: 'Esta combinação ataca os dois nós críticos do Ecocycle Planning: Min Specs (#19) desengessa a governança interna, What I Need From You (WINFY) (#30) garante cooperação entre departamentos e Troika Consulting (#6) oferece mentoria prática imediata.'
  },

  // Desafio 24
  {
    id: 24,
    level: 'YODA',
    title: 'String de Inovação a partir da Destruição Criativa',
    scenario: 'O produto mais antigo da empresa foi enviado para a Destruição Criativa no Ecocycle Planning e agora precisa ser substituído por uma aposta inovadora em Gestação. A String pós-Ecocycle Planning deve: (1) formular a pergunta paradoxal entre estabilidade e disrupção, (2) gerar e ranquear democraticamente as 10 ideias mais ousadas com pontuação anônima rápida, e (3) estruturar a governança e práticas operacionais completas da nova aposta vencedora. Quais 3 estruturas compõem essa arquitetura?',
    correctSkillIds: [4, 13, 33], // 4: Wicked Questions + 13: 25/10 Crowdsourcing + 33: Purpose to Practice (P2P)
    incorrectSkillIds: [9, 18, 28],
    bestChoiceName: 'Wicked Questions (#4), 25/10 Crowdsourcing (#13) e Purpose to Practice (P2P) (#33)',
    whyItWorks: 'Wicked Questions delimita a tensão estratégica inovadora; 25/10 Crowdsourcing extrai a imaginação coletiva e seleciona as melhores hipóteses; e Purpose to Practice (P2P) constrói a disciplina institucional necessária para o nascimento do novo projeto.',
    scenarioClue: '“formular a pergunta paradoxal entre estabilidade e disrupção... gerar e ranquear democraticamente as 10 ideias mais ousadas... e estruturar a governança e práticas operacionais completas”',
    inStringRole: '1-2-4-All (Abertura) ➔ Ecocycle Planning ➔ Wicked Questions (Enquadramento) ➔ 25/10 Crowdsourcing (Ideação) ➔ Purpose to Practice (P2P) (Governança)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Wicked Questions (#4) ➔ 25/10 Crowdsourcing (#13) ➔ Purpose to Practice (P2P) (#33)',
    anotherPossibility: 'Design Storyboards (#21) pode ilustrar o plano cronológico de lançamento derivado de Purpose to Practice (P2P) (#33).',
    ecocyclePhase: 'Destruição Criativa ➔ Gestação ➔ Nascimento',
    ecocycleConcepts: ['DESTRUIÇÃO_CRIATIVA', 'GESTAÇÃO', 'NASCIMENTO'],
    explanation: 'Wicked Questions (#4) desafia o pensamento convencional, 25/10 Crowdsourcing (#13) traz ideias ousadas na Gestação, e Purpose to Practice (P2P) (#33) estabelece as bases sólidas para a nova aposta emergir com governança clara.'
  },

  // Desafio 25
  {
    id: 25,
    level: 'YODA',
    title: 'String de Sincronização Multinível e Feira de Aprendizados',
    scenario: 'Uma rede com 12 unidades regionais precisa sincronizar o Ecocycle Planning de cada polo com o portfólio da holding central. A String sistêmica deve: (1) tecer e adaptar a estratégia respondendo a questões vitais em múltiplos níveis, (2) submeter os impasses mais complexos à consultoria de grandes grupos multidisciplinares com cliente ouvindo de costas, e (3) disseminar os aprendizados em estações rotativas de apresentação simultânea. Quais 3 estruturas compõem essa String?',
    correctSkillIds: [43, 7, 10], // 43: Strategy Knotworking + 7: Wise Crowds + 10: Shift & Share
    incorrectSkillIds: [3, 22, 23],
    bestChoiceName: 'Strategy Knotworking (#43), Wise Crowds (#7) e Shift & Share (#10)',
    whyItWorks: 'Strategy Knotworking orquestra o ritmo adaptativo e as dependências entre os diversos níveis da rede; Wise Crowds oferece consultoria multidisciplinar com grupos ampliados; e Shift & Share dissemina o conhecimento em rodadas rápidas e interativas.',
    scenarioClue: '“tecer e adaptar a estratégia respondendo a questões vitais em múltiplos níveis... submeter impasses à consultoria de grandes grupos multidisciplinares... e disseminar aprendizados em estações rotativas de apresentação”',
    inStringRole: 'Strategy Knotworking (Orquestração geral) ➔ Ecocycle Planning ➔ Wise Crowds (Consultoria ampliada) ➔ Shift & Share (Difusão)',
    stringSequence: 'Strategy Knotworking (#43) ➔ Ecocycle Planning (#12) ➔ Wise Crowds (#7) ➔ Shift & Share (#10)',
    anotherPossibility: 'Social Network Webbing (#17) pode mapear os laços informais entre os hospitais regionais antes do Shift & Share (#10).',
    ecocyclePhase: 'Alinhamento de ecossistema multinível',
    ecocycleConcepts: ['MATURIDADE', 'NASCIMENTO'],
    explanation: 'Strategy Knotworking (#43) sustenta a estratégia viva em rede, Wise Crowds (#7) resolve dilemas complexos de grande escala, e Shift & Share (#10) multiplica as práticas bem-sucedidas por todas as unidades da organização.'
  },

  // Desafio 26
  {
    id: 26,
    level: 'YODA',
    title: 'String para Grandes Grupos com Auto-organização Total',
    scenario: 'Você está planejando uma convenção de 2 dias com 200 líderes para renovar o portfólio corporativo. A String deve: (1) abrir conectando dinamicamente os líderes em rodadas rápidas em pares com perguntas provocadoras, (2) após mapear as prioridades no Ecocycle Planning, abrir a pauta para que os próprios líderes criem salas de trabalho autogerenciadas usando a Lei dos Dois Pés, e (3) fechar o encontro com o debriefing estruturado em fatos, significados e ações (O quê? E daí? E agora?). Quais 3 estruturas formam essa arquitetura?',
    correctSkillIds: [2, 31, 11], // 2: Impromptu Networking + 31: Open Space Technology + 11: What, So What, Now What? (W3)
    incorrectSkillIds: [6, 17, 26],
    bestChoiceName: 'Impromptu Networking (#2), Open Space Technology (#31) e What, So What, Now What? (W3) (#11)',
    whyItWorks: 'Impromptu Networking inicia o encontro com alta energia e conexão relacional; Open Space Technology transfere a liderança e responsabilidade aos próprios participantes para trabalhar os temas quentes do Ecocycle Planning; e What, So What, Now What? (W3) ancora as conclusões em compromissos práticos.',
    scenarioClue: '“abrir conectando dinamicamente os líderes em rodadas rápidas em pares... abrir a pauta para salas de trabalho autogerenciadas usando a Lei dos Dois Pés... e fechar com debriefing estruturado em fatos, significados e ações”',
    inStringRole: 'Impromptu Networking (Abertura) ➔ Ecocycle Planning ➔ Open Space Technology (Aprofundamento) ➔ What, So What, Now What? (W3) (Fechamento)',
    stringSequence: 'Impromptu Networking (#2) ➔ Ecocycle Planning (#12) ➔ Open Space Technology (#31) ➔ What, So What, Now What? (W3) (#11)',
    anotherPossibility: '25/10 Crowdsourcing (#13) poderia alimentar a abertura do Open Space Technology (#31) com ideias ousadas.',
    ecocyclePhase: 'Mobilização em larga escala / Governança emergente',
    ecocycleConcepts: ['GESTAÇÃO', 'NASCIMENTO'],
    explanation: 'Impromptu Networking (#2) constrói a sintonia relacional de partida, Open Space Technology (#31) ativa a auto-organização e paixão dos líderes sobre os dilemas do Ecocycle Planning, e What, So What, Now What? (W3) (#11) sintetiza os planos em decisões conjuntas.'
  },

  // Desafio 27
  {
    id: 27,
    level: 'YODA',
    title: 'String de Prototipagem Teatral e Alinhamento de Governança',
    scenario: 'Para colocar em prática uma nova interação humana desenhada no Ecocycle Planning, a equipe necessita: (1) testar na prática comportamentos e interações difíceis através de encenações teatrais com intervenção da plateia ("Congela!"), (2) formalizar os acordos que equilibram a liberdade das equipes locais na ponta com a conformidade dos diretores centrais, e (3) mapear a sequência cronológica da nova experiência em quadros visuais. Quais 3 estruturas compõem essa jornada?',
    correctSkillIds: [20, 29, 21], // 20: Improv Prototyping + 29: Integrated~Autonomy + 21: Design Storyboards
    incorrectSkillIds: [8, 14, 32],
    bestChoiceName: 'Improv Prototyping (#20), Integrated~Autonomy (#29) e Design Storyboards (#21)',
    whyItWorks: 'Improv Prototyping desenvolve o tato comportamental ao vivo antes do contato com clientes reais; Integrated~Autonomy pacifica tensões de governança entre autonomia e conformidade; e Design Storyboards constrói a narrativa visual do fluxo da operação.',
    scenarioClue: '“testar interações difíceis através de encenações teatrais com intervenção da plateia... formalizar acordos que equilibram liberdade local com conformidade central... e mapear sequência cronológica em quadros visuais”',
    inStringRole: '1-2-4-All (Abertura) ➔ Ecocycle Planning ➔ Improv Prototyping (Simulação humana) ➔ Integrated~Autonomy (Governança) ➔ Design Storyboards (Roadmap)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Improv Prototyping (#20) ➔ Integrated~Autonomy (#29) ➔ Design Storyboards (#21)',
    anotherPossibility: 'User Experience Fishbowl (UX Fishbowl) (#15) poderia preceder o Improv Prototyping (#20) para coletar histórias reais dos usuários que serão encenadas.',
    ecocyclePhase: 'Transição do Nascimento para Maturidade',
    ecocycleConcepts: ['NASCIMENTO', 'MATURIDADE'],
    explanation: 'Improv Prototyping (#20) desenvolve a habilidade prática em cena simulada, Integrated~Autonomy (#29) harmoniza autonomia e padronização, e Design Storyboards (#21) traduz a experiência em uma linha do tempo clara.'
  },

  // Desafio 28
  {
    id: 28,
    level: 'YODA',
    title: 'String de Diagnóstico Relacional e Diálogo Acolhedor',
    scenario: 'O Ecocycle Planning revelou que a transição de produtos está travada devido a conflitos crônicos entre duas diretorias com histórico de atritos. Para sanar essa raiz relacional na String, você precisa: (1) diagnosticar a qualidade da cooperação através dos 4 vetores STAR (Separação, Sintonia, Ação, Raciocínio), (2) conduzir uma conversa serena com bastão da fala para permitir escuta sem réplicas reativas, e (3) fazer com que as áreas troquem pedidos e respostas diretas e vinculantes. Quais 3 estruturas compõem essa mediação?',
    correctSkillIds: [26, 14, 30], // 26: Generative Relationships STAR + 14: Conversation Café + 30: What I Need From You (WINFY)
    incorrectSkillIds: [1, 19, 28],
    bestChoiceName: 'Generative Relationships STAR (#26), Conversation Café (#14) e What I Need From You (WINFY) (#30)',
    whyItWorks: 'Generative Relationships STAR traz objetividade analítica ao estado do relacionamento entre as áreas; Conversation Café desacelera reatividades e cultiva a escuta autêntica com o bastão da fala; e What I Need From You (WINFY) sela pactos operacionais explícitos de apoio mútuo.',
    scenarioClue: '“diagnosticar a cooperação através dos 4 vetores STAR... conversa serena com bastão da fala para permitir escuta sem réplicas... e fazer com que as áreas troquem pedidos e respostas diretas e vinculantes”',
    inStringRole: '1-2-4-All (Abertura) ➔ Ecocycle Planning ➔ Generative Relationships STAR (Diagnóstico) ➔ Conversation Café (Escuta) ➔ What I Need From You (WINFY) (Acordos)',
    stringSequence: '1-2-4-All (#1) ➔ Ecocycle Planning (#12) ➔ Generative Relationships STAR (#26) ➔ Conversation Café (#14) ➔ What I Need From You (WINFY) (#30)',
    anotherPossibility: 'Heard, Seen, Respected (HSR) (#23) poderia atuar como etapa de acolhimento inicial em pares antes do Conversation Café (#14).',
    ecocyclePhase: 'Cura de atritos e destravamento da Armadilha da Pobreza',
    ecocycleConcepts: ['ARMADILHA_DA_POBREZA'],
    explanation: 'Generative Relationships STAR (#26) diagnostica os vetores relacionais fragilizados, Conversation Café (#14) restabelece a confiança na fala, e What I Need From You (WINFY) (#30) fecha acordos de serviço categóricos.'
  },

  // Desafio 29
  {
    id: 29,
    level: 'YODA',
    title: 'String de Metadesign de Facilitação e Resiliência Estratégica',
    scenario: 'Antes de conduzir o conselho de administração pelo Ecocycle Planning, o facilitador experiente deve: (1) analisar a camada de metadesign calibrando os 5 microelementos da sessão (Convite, Espaço, Participação, Grupos e Tempos), (2) testar a solidez do portfólio contra 4 cenários extremos cruzando incertezas críticas, e (3) entrevistar o Presidente do Conselho de forma transparente diante de todos para alinhar premissas estratégicas. Quais 3 estruturas formam essa preparação de alto nível?',
    correctSkillIds: [25, 32, 22], // 25: 5 Design Elements + 32: Critical Uncertainties + 22: Celebrity Interview
    incorrectSkillIds: [5, 15, 23],
    bestChoiceName: '5 Design Elements (#25), Critical Uncertainties (#32) e Celebrity Interview (#22)',
    whyItWorks: '5 Design Elements opera o metadesign consciente da intervenção estruturando cada microelemento; Celebrity Interview alinha a visão da presidência sem monólogos hierárquicos; e Critical Uncertainties submete o portfólio a futuros imprevisíveis.',
    scenarioClue: '“analisar a camada de metadesign calibrando os 5 microelementos da sessão (Convite, Espaço, Participação, Grupos e Tempos)... testar a solidez contra 4 cenários extremos... e entrevistar o Presidente de forma transparente”',
    inStringRole: '5 Design Elements (Metadesign) ➔ Celebrity Interview (Alinhamento) ➔ Ecocycle Planning ➔ Critical Uncertainties (Resiliência)',
    stringSequence: '5 Design Elements (#25) ➔ Celebrity Interview (#22) ➔ Ecocycle Planning (#12) ➔ Critical Uncertainties (#32)',
    anotherPossibility: 'Purpose to Practice (P2P) (#33) pode ser utilizada caso o conselho precise desenhar um novo comitê estratégico derivado das incertezas.',
    ecocyclePhase: 'Metadesign, Governança e Resiliência Estratégica',
    ecocycleConcepts: ['MATURIDADE', 'DESTRUIÇÃO_CRIATIVA'],
    explanation: '5 Design Elements (#25) fornece o metadesign de facilitação para arquitetar a sessão, Celebrity Interview (#22) conecta a liderança com autenticidade, e Critical Uncertainties (#32) prepara o Ecocycle Planning contra choques futuros.'
  },

  // Desafio 30
  {
    id: 30,
    level: 'YODA',
    title: 'Desenho Sistêmico com Propósito e Desvios Positivos',
    scenario: 'Você vai facilitar o ciclo de alinhamento e evolução institucional de uma organização em um encontro estratégico. A String em torno do Ecocycle Planning precisa: (1) cavar o propósito inegociável da entidade através de sucessivos porquês em duplas, (2) investigar e valorizar desvios positivos e práticas já bem-sucedidas encontradas pelas equipes operacionais, e (3) fechar o encontro garantindo que cada participante assuma um compromisso pessoal dentro de sua margem de 15% de autonomia. Quais 3 estruturas completam essa String?',
    correctSkillIds: [3, 9, 5], // 3: 9 Whys + 9: DAD + 5: 15% Solutions
    incorrectSkillIds: [4, 10, 31],
    bestChoiceName: '9 Whys (#3), Discovery & Action Dialogue (DAD) (#9) e 15% Solutions (#5)',
    whyItWorks: '9 Whys orienta o portfólio na direção do propósito raiz da organização; Discovery & Action Dialogue (DAD) resgata a sabedoria prática da ponta operacional que já resolveu problemas difíceis; e 15% Solutions devolve o poder de ação a cada colaborador no presente.',
    scenarioClue: '“cavar o propósito inegociável através de sucessivos porquês em duplas... investigar e valorizar desvios positivos da linha de frente... e garantir que cada participante assuma compromisso dentro de sua margem de 15% de autonomia”',
    inStringRole: '9 Whys (Propósito) ➔ Discovery & Action Dialogue (DAD) (Práticas positivas) ➔ Ecocycle Planning ➔ 15% Solutions (Ação)',
    stringSequence: '9 Whys (#3) ➔ Discovery & Action Dialogue (DAD) (#9) ➔ Ecocycle Planning (#12) ➔ 15% Solutions (#5)',
    anotherPossibility: 'Appreciative Interviews (#16) pode atuar em sinergia com o Discovery & Action Dialogue (DAD) (#9) para aprofundar histórias de superação.',
    ecocyclePhase: 'Propósito ➔ Descoberta de Soluções ➔ Ecocycle Planning ➔ Autonomia',
    ecocycleConcepts: ['GESTAÇÃO', 'NASCIMENTO'],
    explanation: '9 Whys (#3) ancora a bússola de prioridades, Discovery & Action Dialogue (DAD) (#9) mobiliza as soluções que a própria equipe já desenvolveu na prática, e 15% Solutions (#5) traduz essas descobertas em ações imediatas.'
  }
];

export const CHALLENGES = ALL_CHALLENGES;
