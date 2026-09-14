import { 
  Infinity, 
  Users, 
  UserCheck, 
  HelpCircle, 
  Zap, 
  Flame, 
  Search, 
  RefreshCw, 
  CheckSquare, 
  Sparkles, 
  Coffee, 
  Eye, 
  Heart, 
  Network, 
  HandHeart, 
  ShieldCheck, 
  Theater, 
  LayoutGrid, 
  Mic, 
  HeartHandshake, 
  Palette, 
  Sliders, 
  Compass, 
  Target, 
  Glasses, 
  GitMerge, 
  HandHelping, 
  Maximize, 
  ShieldAlert, 
  Award, 
  Orbit,
  Layers,
  Brain
} from 'lucide-react';
import { ELCategory } from './elCategories';

export interface AIPower {
  id: string;
  /** @deprecated Classificação legada usada pelo Quiz. Não usar como taxonomia principal do Deck. */
  category: string;
  // Taxonomia principal do Deck/Matchmaker — uma EL pode pertencer a mais de uma categoria.
  categories: ELCategory[];
  // Conceitos complementares (ex: "Conectar & Aquecer", "Abertura") preservados fora da taxonomia principal.
  tags?: string[];
  // true quando a categorização não pôde ser confirmada em fonte documentada do projeto.
  needsCategoryReview?: boolean;
  title: string;
  englishTitle?: string;
  objective: string;
  applicationContext: string;
  practicalExample: string;
  expectedBenefits: string[];
  icon: string;
  image: string;
  drawingUrl: string;
  
  // Liberating Structures & String Lab Fields
  ecocycleConnection?: string;
  input?: string;
  process?: string;
  output?: string;
  timeNeeded?: string;
  groupSize?: string;

  // Special Card Fields (ex: 5 Design Elements - Meta-facilitação)
  isDesignCard?: boolean;
  specialBadge?: string;
  designElementsList?: string[];

  // Backward compatibility fields
  shortDescription?: string;
  fullDescription?: string;
  detailedDescription?: string;
  detailedExamples?: { title: string; description: string }[];
  cases?: string[];
  tools?: string[];
  security?: string;
  related?: string[];
}

export const DRAWING_BY_ID: Record<string, string> = {
  '1': '/el-drawings/1-2-4-all.svg',
  '2': '/el-drawings/impromptu-networking.svg',
  '3': '/el-drawings/9-whys.svg',
  '4': '/el-drawings/wicked-questions.svg',
  '5': '/el-drawings/15-percent-solutions.svg',
  '6': '/el-drawings/troika-consulting.svg',
  '7': '/el-drawings/wise-crowds.svg',
  '8': '/el-drawings/triz.svg',
  '9': '/el-drawings/discovery-and-action-dialog.svg',
  '10': '/el-drawings/shift-and-share.svg',
  '11': '/el-drawings/what-3-debrief.svg',
  '12': '/el-drawings/ecocycle.svg',
  '13': '/el-drawings/25-10-crowdsourcing.svg',
  '14': '/el-drawings/conversation-cafe.svg',
  '15': '/el-drawings/user-experience-fishbowl.svg',
  '16': '/el-drawings/appreciative-interviews.svg',
  '17': '/el-drawings/social-network-webbing.svg',
  '18': '/el-drawings/helping-heuristics.svg',
  '19': '/el-drawings/min-specs.svg',
  '20': '/el-drawings/improv-prototyping.svg',
  '21': '/el-drawings/design-storyboards.svg',
  '22': '/el-drawings/celebrity-interview.svg',
  '23': '/el-drawings/heard-seen-respected.svg',
  '24': '/el-drawings/drawing-together.svg',
  '25': '/el-drawings/design-elements.svg',
  '26': '/el-drawings/generative-relationships.svg',
  '27': '/el-drawings/agree-certainty-matrix.svg',
  '28': '/el-drawings/simple-ethnography.svg',
  '29': '/el-drawings/integrated-autonomy.svg',
  '30': '/el-drawings/what-i-need-from-you.svg',
  '31': '/el-drawings/open-space.svg',
  '32': '/el-drawings/critical-uncertainties.svg',
  '33': '/el-drawings/purpose-to-practice.svg',
  '34': '/el-drawings/mad-tea.svg',
  '35': '/el-drawings/spiral-journal.svg',
  '36': '/el-drawings/folding-spectrogram.svg',
  '37': '/el-drawings/positive-gossip.svg',
  '38': '/el-drawings/principles-walk-around.svg',
  '39': '/el-drawings/network-relationship-patterns.svg',
  '40': '/el-drawings/grief-walking.svg',
  '41': '/el-drawings/future-present.svg',
  '42': '/el-drawings/talking-with-pixies.svg',
  '43': '/el-drawings/strategy-knotworking.svg'
};

export const CATEGORIES: Record<string, { label: string; icon: any }> = {
  'Gerar Ideias & Inovação': { label: 'Gerar Ideias & Inovação', icon: Sparkles },
  'Revelar & Diagnosticar': { label: 'Revelar & Diagnosticar', icon: Search },
  'Estratégia & Propósito': { label: 'Estratégia & Propósito', icon: Target },
  'Colaboração & Ajuda': { label: 'Colaboração & Ajuda', icon: Users },
  'Ação & Convergência': { label: 'Ação & Convergência', icon: Zap },
  'Conectar & Aquecer': { label: 'Conectar & Aquecer', icon: Heart }
};

// Migração determinística da taxonomia legada (acima) para a nova taxonomia principal do
// Deck/Matchmaker (src/data/elCategories.ts). Reaproveita a classificação já existente no
// projeto em vez de inventar associações novas por EL.
const LEGACY_CATEGORY_TO_EL_CATEGORY: Record<string, ELCategory> = {
  'Gerar Ideias & Inovação': 'REVELAR_GERAR_MELHORAR',
  'Revelar & Diagnosticar': 'ANALISAR_DIAGNOSTICAR_REFLETIR',
  'Estratégia & Propósito': 'DESENVOLVER_ESTRATEGIAS',
  'Colaboração & Ajuda': 'DAR_PEDIR_AJUDA',
  'Ação & Convergência': 'PLANEJAR',
  // "Conectar & Aquecer" não tem correspondente direto nas 6 categorias principais; passa a ser
  // tag complementar. A categoria abaixo segue o exemplo do próprio pedido (Impromptu Networking).
  'Conectar & Aquecer': 'COMPARTILHAR_DISSEMINAR',
};

// Exceções revisadas manualmente por instrução explícita, com base no texto já cadastrado da EL
// (ex: Troika Consulting gera "soluções inovadoras" para o cliente; 15% Solutions destrava o
// primeiro passo de uma ideia). Categorias adicionais são somadas à categoria base da EL.
const MANUAL_CATEGORY_ADDITIONS: Record<string, ELCategory[]> = {
  '5': ['REVELAR_GERAR_MELHORAR'], // 15% Solutions
  '6': ['REVELAR_GERAR_MELHORAR'], // Troika Consulting
};

// Tags complementares preservadas a partir da taxonomia legada "Conectar & Aquecer".
const LEGACY_TAG_ADDITIONS: Record<string, string[]> = {
  '2': ['conectar', 'aquecer', 'abertura'], // Impromptu Networking
  '16': ['conectar', 'aquecer'], // Appreciative Interviews
  '34': ['conectar', 'aquecer', 'abertura'], // Mad Tea | Calm Tea
  '37': ['conectar', 'aquecer'], // Positive Gossip
};

const RAW_AI_POWERS: Omit<AIPower, 'drawingUrl'>[] = [
  // 1. 1-2-4-ALL
  {
    id: '1',
    category: 'Gerar Ideias & Inovação',
    title: '1-2-4-All (1-2-4-Todos)',
    englishTitle: '1-2-4-All',
    objective: 'Engajar simultaneamente 100% dos participantes na geração de ideias, perguntas e sugestões em ciclos rápidos e inclusivos.',
    applicationContext: 'Utilize sempre que precisar ouvir todas as vozes de um grupo sem permitir que chefias ou pessoas extrovertidas monopolizem a palavra.',
    practicalExample: 'Ao posicionar iniciativas no Ecocycle, cada um reflete em silêncio por 1 min, compara em duplas por 2 min, agrupa em quartetos por 4 min e traz para o plenário coletivo.',
    expectedBenefits: [
      'Participação ativa de 100% dos presentes.',
      'Eliminação do viés hierárquico e medo de falar.',
      'Rápida convergência de ideias ricas.',
      'Geração simultânea de senso de corresponsabilidade.'
    ],
    ecocycleConnection: 'Microestrutura padrão para popular os quatro quadrantes do Ecocycle Planning (Gestação, Nascimento, Maturidade, Destruição Criativa) de forma justa e colaborativa.',
    input: 'Uma pergunta norteadora clara sobre o portfólio de atividades ou projetos.',
    process: '1 min individual silencioso ➔ 2 min em duplas ➔ 4 min em quartetos ➔ 5 min partilha no plenário.',
    output: 'Ideias refinadas e sintetizadas com forte apropriação coletiva.',
    timeNeeded: '12-15 min',
    groupSize: 'Qualquer tamanho de grupo (de 4 a 500+ pessoas)',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Engajar 100% das pessoas simultaneamente em ciclos rápidos de reflexão e partilha.',
    fullDescription: 'Engajar simultaneamente todos os participantes na geração de ideias e perguntas em ciclos silenciosos de 1, 2 e 4 pessoas.',
    cases: ['Mapeamento de itens para o Ecocycle Planning', 'Reflexão após diagnósticos difíceis', 'Brainstorming descentralizado em grandes plenárias']
  },

  // 2. IMPROMPTU NETWORKING
  {
    id: '2',
    category: 'Conectar & Aquecer',
    title: 'Impromptu Networking (Networking Espontâneo)',
    englishTitle: 'Impromptu Networking',
    objective: 'Conectar rapidamente os participantes, alinhando expectativas e criando empatia em 3 rodadas dinâmicas em pares.',
    applicationContext: 'Ideal para abrir reuniões, oficinas e workshops de portfólio, rompendo o distanciamento formal e ativando energia corporal.',
    practicalExample: 'Três rodadas de 4 minutos onde participantes trocam respostas para: "Qual projeto hoje drena sua energia e o que você espera renovar neste encontro?"',
    expectedBenefits: [
      'Quebra rápida do gelo e aumento da energia do grupo.',
      'Revelação antecipada das maiores dores do portfólio.',
      'Conexões entre pessoas de departamentos diferentes.'
    ],
    ecocycleConnection: 'Abre a String de facilitação do Ecocycle Planning, preparando emocionalmente o grupo para falar de suas atividades com autenticidade.',
    input: 'Um ou dois tópicos provocativos sobre os desafios do portfólio.',
    process: '3 rodadas sucessivas de 4 a 5 min com duplas alternadas, em pé ou em salas simultâneas.',
    output: 'Grupo conectado, expectativas compartilhadas e mapa mental ativado.',
    timeNeeded: '15-20 min',
    groupSize: 'De 8 a centenas de participantes',
    icon: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Conectar participantes rapidamente em rodadas dinâmicas em pares.',
    fullDescription: 'Conectar rapidamente os participantes criando laços de confiança através de 3 rodadas de conversas em pares.',
    cases: ['Abertura de workshop de Ecocycle Planning', 'Integração de novos squads', 'Alinhamento inicial de expectativas']
  },

  // 3. 9 WHYS
  {
    id: '3',
    category: 'Estratégia & Propósito',
    title: '9 Whys (9 Porquês)',
    englishTitle: '9 Whys',
    objective: 'Descobrir o propósito mais profundo e essencial por trás do trabalho ou da existência de uma equipe ou projeto.',
    applicationContext: 'Quando o time está preso no operacional e perdeu a clareza sobre por que certas iniciativas existem e devem continuar existindo.',
    practicalExample: 'Em duplas, um participante indaga repetidas vezes ao colega: "Por que isso é importante para você?", até alcançar o propósito inegociável.',
    expectedBenefits: [
      'Clareza cristalina sobre a razão de ser das iniciativas.',
      'Régua objetiva de valor para decidir o que manter ou descontinuar.',
      'Alinhamento profundo de valores e motivação intrínseca.'
    ],
    ecocycleConnection: 'Define a régua de corte antes de iniciar o Ecocycle. Sem o propósito essencial claro, é impossível decidir com coragem o que deve ir para a Destruição Criativa.',
    input: 'A descrição da atividade atual ou missão do departamento.',
    process: 'Entrevistas em pares cavando sucessivos "Porquês" ➔ Consolidação em quartetos do propósito mestre.',
    output: 'Declaração inequívoca e inspiradora do propósito raiz compartilhado.',
    timeNeeded: '20-25 min',
    groupSize: 'Grupos de qualquer tamanho organizados em pares',
    icon: 'HelpCircle',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Descobrir o propósito essencial através de perguntas sucessivas de "por quê?".',
    fullDescription: 'Descobrir o propósito mais profundo de uma iniciativa através de perguntas em camadas sucessivas.',
    cases: ['Definição de propósito antes do Ecocycle', 'Alinhamento de visão em fusões e reestruturações', 'Resgate de motivação de equipes esgotadas']
  },

  // 4. WICKED QUESTIONS
  {
    id: '4',
    category: 'Revelar & Diagnosticar',
    title: 'Wicked Questions (Perguntas Capciosas)',
    englishTitle: 'Wicked Questions',
    objective: 'Articular os paradoxos e tensões fundamentais e aparentemente opostas que o grupo precisa equilibrar para ter sucesso.',
    applicationContext: 'Quando a equipe fica travada em dicotomias falsas (ex: "ou entregamos rápido ou entregamos com qualidade").',
    practicalExample: '"Como podemos preservar a estabilidade da Maturidade operacional E AO MESMO TEMPO destruir processos velhos para abrir espaço ao Nascimento?"',
    expectedBenefits: [
      'Superação de impasses e polarizações simplistas.',
      'Capacidade de conviver e operar em cenários complexos e contraditórios.',
      'Geração de soluções inovadoras que equilibram ambos os lados.'
    ],
    ecocycleConnection: 'Tenciona as fronteiras do Ecocycle Planning, especialmente a tensão entre a conservação na Maturidade e a inovação na Gestação.',
    input: 'As maiores tensões ou dilemas vivenciados na organização.',
    process: 'Identificação de lados opostos ➔ Redação da fórmula "Como podemos X E AO MESMO TEMPO Y?" ➔ Validação coletiva.',
    output: 'Perguntas paradoxais precisas que desbloqueiam a estratégia.',
    timeNeeded: '25-30 min',
    groupSize: 'Qualquer tamanho de grupo',
    icon: 'HelpCircle',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Articular tensões paradoxais para superar dilemas do tipo "ou isso ou aquilo".',
    fullDescription: 'Articular os paradoxos e desafios aparentemente opostos que o grupo enfrenta simultaneamente.',
    cases: ['Mapeamento de tensões no Ecocycle', 'Resolução de polaridades entre inovação e conformidade', 'Mediação de conflitos estratégicos']
  },

  // 5. 15% SOLUTIONS
  {
    id: '5',
    category: 'Ação & Convergência',
    title: '15% Solutions (Soluções a 15%)',
    englishTitle: '15% Solutions',
    objective: 'Focar imediatamente no que cada indivíduo tem a liberdade, autonomia e recursos para realizar sem precisar de aprovação superior.',
    applicationContext: 'Sempre que um time se queixa de falta de verba, burocracia ou permissão da diretoria para agir.',
    practicalExample: 'Após mapear projetos na Armadilha da Pobreza: "Qual é o seu 15% que você pode fazer amanhã de manhã para dar o primeiro passo nesta ideia?"',
    expectedBenefits: [
      'Resgate instantâneo do protagonismo e senso de agência.',
      'Quebra da paralisia analítica e do vitimismo corporativo.',
      'Avanço de iniciativas paradas sem depender de orçamentos extras.'
    ],
    ecocycleConnection: 'A estrutura de ouro para escapar da Armadilha da Pobreza no Ecocycle Planning e acionar o primeiro passo em projetos travados.',
    input: 'Um desafio, iniciativa ou gargalo diagnosticado no Ecocycle.',
    process: '5 min de reflexão individual listando ações a 15% ➔ Compartilhamento em duplas ou quartetos para validação e enriquecimento.',
    output: 'Lista de compromissos concretos e executáveis no dia seguinte.',
    timeNeeded: '15-20 min',
    groupSize: 'Individual com partilha em pequenos grupos',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Focar no que você tem autonomia para fazer agora sem aprovações externas.',
    fullDescription: 'Focar no que cada indivíduo pode realizar imediatamente dentro da sua margem de autonomia e liberdade.',
    cases: ['Destravamento da Armadilha da Pobreza', 'Fechamento de planos de ação no Ecocycle', 'Superação de bloqueios burocráticos']
  },

  // 6. TROIKA CONSULTING
  {
    id: '6',
    category: 'Colaboração & Ajuda',
    title: 'Troika Consulting (Consultoria Troika)',
    englishTitle: 'Troika Consulting',
    objective: 'Obter conselhos rápidos, francos e práticos de dois colegas atuando como consultores em rodadas estruturadas de 10 minutos.',
    applicationContext: 'Quando donos de projetos enfrentam impasses práticos e precisam de visões frescas sem reuniões intermináveis.',
    practicalExample: 'O cliente expõe seu projeto travado na Armadilha da Pobreza (1 min), os consultores fazem perguntas rápidas (1-2 min), o cliente vira de costas e apenas escuta o debate dos consultores (4-5 min), e depois agradece e compartilha aprendizados.',
    expectedBenefits: [
      'Escuta profunda sem a tentação de se justificar ou rebater.',
      'Conselhos rápidos, desinteressados e acionáveis.',
      'Cultura de ajuda mútua e apoio contínuo entre pares.'
    ],
    ecocycleConnection: 'Acelera a transição de projetos presos nas Armadilhas do Ecocycle (Pobreza ou Rigidez), dando suporte prático ao responsável pelo projeto.',
    input: 'Um desafio individual ou de projeto bem formulado.',
    process: 'Trios (1 cliente e 2 consultores) em rodadas cronometradas com o cliente ouvindo de costas ➔ Alternância de papéis.',
    output: 'Novas ideias, soluções inovadoras e passos concretos para o cliente.',
    timeNeeded: '30 min (3 rodadas de 10 min)',
    groupSize: 'Grupos divididos em trios',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Consultoria rápida de dois colegas em rodadas com o cliente ouvindo de costas.',
    fullDescription: 'Obter conselhos práticos e rápidos em trios estruturados com escuta reflexiva.',
    cases: ['Destravamento de projetos em armadilhas', 'Mentoria de pares em squads ágeis', 'Resolução rápida de impasses técnicos']
  },

  // 7. WISE CROWDS
  {
    id: '7',
    category: 'Colaboração & Ajuda',
    title: 'Wise Crowds (Multidões Sábias)',
    englishTitle: 'Wise Crowds',
    objective: 'Aproveitar a sabedoria de um grupo maior de consultores multidisciplinares para aconselhar um cliente sobre um desafio complexo.',
    applicationContext: 'Para projetos de alto impacto que envolvem múltiplas áreas e precisam de aconselhamento de diversas especialidades ao mesmo tempo.',
    practicalExample: 'O líder de uma iniciativa que está saindo da Gestação no Ecocycle recebe consultoria de 5 a 8 pessoas de finanças, jurídico, vendas e operações.',
    expectedBenefits: [
      'Visão sistêmica 360 graus para projetos estratégicos.',
      'Identificação precoce de riscos operacionais e regulatórios.',
      'Fortalecimento de iniciativas corporativas de grande escala.'
    ],
    ecocycleConnection: 'Aconselha os grandes projetos do Ecocycle Planning na transição da Gestação para o Nascimento sustentável.',
    input: 'Apresentação clara de um desafio estratégico complexo.',
    process: 'Cliente expõe o desafio ➔ Perguntas de clarificação ➔ Cliente senta de costas e escuta o debate do grupo ➔ Reflexão final.',
    output: 'Plano refinado com contribuições de múltiplas áreas.',
    timeNeeded: '45-60 min',
    groupSize: 'Grupos de 5 a 8 consultores por cliente',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Consultoria multidisciplinar com grupos maiores para desafios complexos.',
    fullDescription: 'Mobilizar a sabedoria coletiva de 5 a 8 consultores para aconselhar um cliente sobre um desafio de alta complexidade.',
    cases: ['Projetos estratégicos saindo do Ecocycle', 'Revisão de novos modelos de negócio', 'Aconselhamento executivo entre áreas']
  },

  // 8. TRIZ
  {
    id: '8',
    category: 'Revelar & Diagnosticar',
    title: 'TRIZ (Destruição Criativa / Parar o Contraproducente)',
    englishTitle: 'TRIZ',
    objective: 'Identificar e parar comportamentos, processos e rituais contraproducentes, abrindo espaço real para a inovação e o desapego.',
    applicationContext: 'Quando equipes estão sobrecarregadas, apegadas ao passado e relutantes em admitir práticas que não funcionam.',
    practicalExample: 'Passo 1: "Como garantir que nossos projetos fiquem 100% atrasados e o time exausto?". Passo 2: "O que já estamos fazendo hoje dessa lista?". Passo 3: "O que paramos de fazer agora?"',
    expectedBenefits: [
      'Humor e alívio para tratar de temas espinhosos sem culpa.',
      'Identificação honesta do que está drenando os recursos da equipe.',
      'Liberação de espaço e energia para o novo florescer.'
    ],
    ecocycleConnection: 'A alma gêmea da fase de Destruição Criativa e da Armadilha da Rigidez no Ecocycle Planning. Quebra a negação e desapega do que está obsoleto.',
    input: 'O desafio central de eficiência ou renovação do portfólio.',
    process: 'Brainstorming do pior cenário ➔ Confronto sincero com a realidade atual ➔ Plano de eliminação de práticas inúteis.',
    output: 'Lista explícita de "Não Deve Fazer" e práticas descontinuadas para limpar o portfólio.',
    timeNeeded: '35-45 min',
    groupSize: 'Qualquer tamanho de grupo',
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Identificar e eliminar práticas contraproducentes para abrir espaço ao novo.',
    fullDescription: 'Criar espaço para inovação descontinuando comportamentos e atividades contraproducentes através de engenharia reversa.',
    cases: ['Destruição Criativa no Ecocycle Planning', 'Eliminação da Armadilha da Rigidez', 'Enxugamento de processos burocráticos']
  },

  // 9. DAD
  {
    id: '9',
    category: 'Revelar & Diagnosticar',
    title: 'Discovery & Action Dialogue - DAD (Diálogo de Descoberta e Ação)',
    englishTitle: 'Discovery and Action Dialogue (DAD)',
    objective: 'Descobrir e disseminar soluções práticas já existentes na organização através de "desvios positivos" da linha de frente.',
    applicationContext: 'Quando soluções teóricas de manuais falham e algumas pessoas da ponta operacional já descobriram como resolver o problema sem recursos extras.',
    practicalExample: 'Roteiro de 7 perguntas investigativas: "Quem aqui consegue manter o projeto vivo mesmo sem verba da matriz? O que essa pessoa faz exatamente de diferente?"',
    expectedBenefits: [
      'Valorização da sabedoria prática da ponta operacional.',
      'Soluções comprovadas e de custo zero já adaptadas à cultura.',
      'Rápida difusão comunitária de boas práticas.'
    ],
    ecocycleConnection: 'Identifica como determinadas equipes furaram a Armadilha da Pobreza no Ecocycle e traz esses aprendizados para as outras iniciativas.',
    input: 'Um problema crônico que a maioria não consegue resolver, mas alguns poucos conseguem.',
    process: 'Roteiro estruturado de 7 perguntas facilitado em pequenos círculos de diálogo.',
    output: 'Práticas ocultas reveladas e plano de adoção voluntária.',
    timeNeeded: '45-60 min',
    groupSize: 'Pequenos grupos de 4 a 8 pessoas',
    icon: 'Search',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Descobrir soluções práticas já existentes na linha de frente (desvios positivos).',
    fullDescription: 'Descobrir e adotar práticas positivas que já funcionam no ambiente real sem precisar de recursos externos.',
    cases: ['Superação da Armadilha da Pobreza no Ecocycle', 'Disseminação de práticas de ponta', 'Soluções de baixo custo']
  },

  // 10. SHIFT & SHARE
  {
    id: '10',
    category: 'Ação & Convergência',
    title: 'Shift & Share (Mudar e Compartilhar)',
    englishTitle: 'Shift & Share',
    objective: 'Disseminar rapidamente múltiplos projetos, produtos ou inovações para um grande grupo em estações rotativas de apresentação.',
    applicationContext: 'Quando você tem várias equipes com entregas para mostrar e quer evitar apresentações lineares cansativas em plenária.',
    practicalExample: '5 estações na sala, cada uma apresentando o Ecocycle Planning de uma diretoria diferente; o público transita em rodadas de 10 minutos.',
    expectedBenefits: [
      'Dinamismo físico e eliminação da fadiga de palestras longas.',
      'Feedback direto e cruzamento de ideias entre diferentes áreas.',
      'Compreensão do todo em uma fração do tempo habitual.'
    ],
    ecocycleConnection: 'Permite que diferentes áreas ou squads apresentem seus Ecociclos uns aos outros, encontrando sobreposições e dependências de portfólio.',
    input: '4 a 7 projetos ou inovações prontos para apresentação sintética.',
    process: 'Rodadas de 8 a 10 min em estações simultâneas (5 min apresentação + 3-5 min diálogo e perguntas).',
    output: 'Público com visão ampla de todas as inovações e conexões firmadas.',
    timeNeeded: '45-60 min',
    groupSize: 'Grupos médios a grandes (20 a 100+ pessoas)',
    icon: 'RefreshCw',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Compartilhar inovações e projetos em estações rotativas dinâmicas.',
    fullDescription: 'Apresentar rapidamente múltiplas inovações para um grande grupo em estações rotativas e interativas.',
    cases: ['Cruzamento de Ecociclos entre áreas', 'Feiras internas de inovação', 'Alinhamento de portfólio entre diretorias']
  },

  // 11. WHAT, SO WHAT, NOW WHAT? (W3)
  {
    id: '11',
    category: 'Ação & Convergência',
    title: 'What, So What, Now What? - W3 (O quê? E daí? E agora?)',
    englishTitle: 'What, So What, Now What?',
    objective: 'Estruturar o debriefing e a reflexão compartilhada em três passos rigorosos: fatos objetivos, significados e ações práticas imediatas.',
    applicationContext: 'Indispensável após qualquer sessão de trabalho intenso, crise, mapeamento ou encerramento de oficina.',
    practicalExample: 'Etapa 1 (O quê?): "O que vimos objetivamente no mapa do Ecocycle?". Etapa 2 (E daí?): "O que isso significa para nossa sobrevivência?". Etapa 3 (E agora?): "Quais ações tomaremos agora?"',
    expectedBenefits: [
      'Evita conclusões precipitadas separando fatos de impressões.',
      'Cria um entendimento compartilhado antes de pular para ações.',
      'Garante que workshops resultem em planos de ação consequentes.'
    ],
    ecocycleConnection: 'A estrutura oficial e indispensável de debriefing para fechar qualquer sessão de Ecocycle Planning, transformando o mapa em compromissos de ação.',
    input: 'O resultado visual do Ecocycle Planning ou qualquer experiência vivida.',
    process: '1-2-4-All aplicado sequencialmente nas três perguntas: O quê? ➔ E daí? ➔ E agora?',
    output: 'Diagnóstico unificado e plano de ação estruturado.',
    timeNeeded: '30-45 min',
    groupSize: 'Qualquer tamanho de grupo',
    icon: 'CheckSquare',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Estruturar reflexão e ação em 3 passos: O quê? E daí? E agora?',
    fullDescription: 'Conduzir reflexão compartilhada em três etapas progressivas para transformar dados e experiências em planos de ação.',
    cases: ['Debriefing obrigatório pós-Ecocycle Planning', 'Retrospectivas de projetos', 'Análise pós-incidente e crise']
  },

  // 12. ECOCYCLE PLANNING (THE HUB)
  {
    id: '12',
    category: 'Estratégia & Propósito',
    title: 'Ecocycle Planning (Planejamento Ecociclo)',
    englishTitle: 'Ecocycle Planning',
    objective: 'Mapear o portfólio completo de atividades e relacionamentos através do ciclo de vida biológico e suas armadilhas, equilibrando sustentabilidade e novos investimentos.',
    applicationContext: 'O núcleo estratégico da facilitação! Para avaliar onde os projetos estão (Gestação, Nascimento, Maturidade, Destruição Criativa) e destravar as Armadilhas da Pobreza e Rigidez.',
    practicalExample: 'Uma equipe mapeia 40 iniciativas em um diagrama em formato de infinito: descobre que 65% estão retidas na Rigidez, 20% na Pobreza e poucas posicionadas em Gestação, reorganizando os investimentos.',
    expectedBenefits: [
      'Visão sistêmica e ecológica de todo o portfólio.',
      'Identificação precisa das duas armadilhas organizacionais (Pobreza e Rigidez).',
      'Coragem para podar o obsoleto e liberar recursos para semear o novo em Gestação.'
    ],
    ecocycleConnection: 'O coração vivo de todo o sistema! É o hub integrador que orienta e contextualiza a aplicação das outras 33 Estruturas Libertadoras.',
    input: 'Lista completa de todos os projetos, rotinas e investimentos da equipe.',
    process: 'Reflexão individual com post-its ➔ Diálogo em quartetos ➔ Posicionamento no painel em infinito ➔ Identificação de gargalos e armadilhas.',
    output: 'Mapa vivo da saúde do portfólio com prioridades de intervenção.',
    timeNeeded: '60-120 min',
    groupSize: 'Grupos de 6 a 100+ participantes',
    icon: 'Infinity',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Mapear o portfólio no ciclo vital biológico e equilibrar armadilhas e novos investimentos.',
    fullDescription: 'Mapear o portfólio completo de atividades através do ciclo vital biológico (Gestação, Nascimento, Maturidade, Destruição Criativa) e suas armadilhas.',
    cases: ['Revisão anual de portfólio de projetos', 'Alocação estratégica de investimentos', 'Planejamento de capacidade de squads']
  },

  // 13. 25/10 CROWDSOURCING
  {
    id: '13',
    category: 'Gerar Ideias & Inovação',
    title: '25/10 Crowdsourcing',
    englishTitle: '25/10 Crowdsourcing',
    objective: 'Gerar e ranquear rapidamente as 10 ideias mais ousadas e promissoras de um grande grupo em menos de 30 minutos com pontuação anônima.',
    applicationContext: 'Quando a equipe precisa de ideias ousadas e disruptivas imediatamente, sem passar pelo filtro de aprovação da chefia.',
    practicalExample: 'Cada um escreve uma ideia ousada para nutrir a Gestação no Ecocycle em um cartão; os participantes caminham pela sala trocando cartões aleatoriamente ao som de música; em 5 rodadas pontuam de 1 a 5; somam-se os pontos (máximo 25).',
    expectedBenefits: [
      'Geração e seleção democrática das melhores ideias em tempo recorde.',
      'Energia física contagiante e atmosfera de diversão.',
      'Eliminação do viés de autoria através de pontuação anônima.'
    ],
    ecocycleConnection: 'Nutre a fase de Gestação do Ecocycle Planning quando o mapa revela falta de projetos inovadores no pipeline.',
    input: 'Um desafio aberto que exige inovação radical.',
    process: 'Escrita da ideia e primeiro passo em cartão ➔ 5 rodadas de troca e pontuação às cegas (1 a 5) ➔ Revelação do Top 10.',
    output: 'As melhores 10 ideias selecionadas pelo coletivo com alta pontuação.',
    timeNeeded: '25-30 min',
    groupSize: 'Grupos de 25 a 300+ pessoas',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Gerar e ranquear as 10 ideias mais ousadas em 5 rodadas rápidas e divertidas.',
    fullDescription: 'Gerar e selecionar democraticamente as ideias mais promissoras de um grande grupo com pontuação anônima em 5 rodadas.',
    cases: ['Semeadura na Gestação do Ecocycle', 'Inovação aberta em convenções', 'Geração de soluções para novos produtos']
  },

  // 14. CONVERSATION CAFÉ
  {
    id: '14',
    category: 'Colaboração & Ajuda',
    title: 'Conversation Café (Café de Conversação)',
    englishTitle: 'Conversation Café',
    objective: 'Criar um ambiente calmo e acolhedor para conversas profundas sobre temas difíceis, sensíveis ou conflituosos usando um bastão da fala.',
    applicationContext: 'Quando o grupo enfrenta luto organizacional, tensões emocionais ou assuntos espinhosos que geram discussões acaloradas.',
    practicalExample: 'Mesas de 5 pessoas com um bastão da fala: rodada 1 com sentimentos individuais; rodada 2 aprofundamento; rodada 3 diálogo aberto; rodada 4 conclusões sobre o encerramento de um projeto histórico.',
    expectedBenefits: [
      'Escuta sem interrupções e redução da reatividade emocional.',
      'Espaço seguro para processar mudanças difíceis.',
      'Compreensão mútua de diferentes pontos de vista.'
    ],
    ecocycleConnection: 'Cuida do impacto emocional da Destruição Criativa no Ecocycle Planning, permitindo processar o luto do encerramento de iniciativas queridas.',
    input: 'Um tema sensível ou dilema de alta carga emocional.',
    process: '4 rodadas estruturadas com objeto de fala (1 min por pessoa rodadas 1 e 2, diálogo aberto rodada 3, fechamento rodada 4).',
    output: 'Compreensão mútua ampliada e harmonia relacional restabelecida.',
    timeNeeded: '45-60 min',
    groupSize: 'Mesas de 4 a 6 participantes',
    icon: 'Coffee',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Diálogo calmo e profundo sobre temas difíceis usando bastão da fala.',
    fullDescription: 'Criar um espaço seguro para processar temas complexos e emocionais com escuta paciente e estruturada.',
    cases: ['Processamento de perdas na Destruição Criativa', 'Mediação de crises culturais', 'Debates sobre reestruturações']
  },

  // 15. UX FISHBOWL
  {
    id: '15',
    category: 'Revelar & Diagnosticar',
    title: 'User Experience Fishbowl - UX Fishbowl (Aquário de Experiência)',
    englishTitle: 'User Experience Fishbowl',
    objective: 'Compartilhar experiências autênticas de um pequeno círculo interno de debatedores enquanto um círculo externo escuta atentamente.',
    applicationContext: 'Para substituir painéis formais e palestras cansativas por conversas francas com uma cadeira aberta para o público participar.',
    practicalExample: '3 pessoas no centro debatendo os aprendizados de um projeto que passou pelo ciclo completo do Ecocycle, com uma cadeira vazia onde qualquer um da plateia pode sentar temporariamente.',
    expectedBenefits: [
      'Desmistificação de hierarquias e conversas autênticas.',
      'Escuta de altíssima qualidade pelo círculo externo.',
      'Fluidez e participação rotativa da audiência.'
    ],
    ecocycleConnection: 'Permite que a organização escute relatos reais de quem gerencia iniciativas nas bordas do Ecocycle (inovações na Gestação ou descontinuidades na Destruição Criativa).',
    input: 'Tema com pessoas que viveram a experiência na prática.',
    process: 'Círculo central com 3-4 cadeiras e 1 vazia ➔ Círculo externo em escuta ativa ➔ Rotação quando alguém ocupa a cadeira livre.',
    output: 'Aprendizados práticos assimilados coletivamente.',
    timeNeeded: '45-60 min',
    groupSize: 'De 20 a centenas de participantes',
    icon: 'Eye',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Círculo interno de conversa autêntica com cadeira aberta e escuta ativa externa.',
    fullDescription: 'Substituir painéis expositivos por um debate dinâmico em aquário com assento rotativo para o público.',
    cases: ['Lições aprendidas de projetos do Ecocycle', 'Diálogo entre líderes e colaboradores', 'Compartilhamento de experiências de clientes']
  },

  // 16. APPRECIATIVE INTERVIEWS
  {
    id: '16',
    category: 'Conectar & Aquecer',
    title: 'Appreciative Interviews (Entrevistas Apreciativas)',
    englishTitle: 'Appreciative Interviews',
    objective: 'Descobrir e amplificar as raízes do sucesso ao investigar momentos passados em que o grupo operou com excelência máxima.',
    applicationContext: 'Quando o time está desmotivado, traumatizado por fracassos recentes e com foco excessivo em problemas.',
    practicalExample: 'Em duplas, cada participante entrevista o parceiro por 10 minutos pedindo que conte em detalhes um projeto que foi um tremendo sucesso e o que possibilitou aquele resultado.',
    expectedBenefits: [
      'Mudança rápida da mentalidade de escassez para abundância.',
      'Mapeamento das competências nucleares da equipe.',
      'Energia e autoconfiança renovadas para novos desafios.'
    ],
    ecocycleConnection: 'Alimenta a fase de Gestação do Ecocycle Planning resgatando as condições que permitiram a outros projetos atingirem a Maturidade com brilho no passado.',
    input: 'Roteiro de perguntas apreciativas sobre momentos de pico de sucesso.',
    process: 'Entrevistas em pares (10 min cada) ➔ Compartilhamento dos padrões em quartetos ➔ Síntese no plenário.',
    output: 'Catálogo vivo das condições que geram alto desempenho na equipe.',
    timeNeeded: '45-60 min',
    groupSize: 'Qualquer tamanho em duplas e quartetos',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Resgatar histórias de sucesso para identificar as raízes do melhor desempenho.',
    fullDescription: 'Descobrir e amplificar o melhor que existe no grupo através de entrevistas focadas em histórias de realizações extraordinárias.',
    cases: ['Gestação no Ecocycle Planning', 'Energização de times desmotivados', 'Início de programas de transformação cultural']
  },

  // 17. SOCIAL NETWORK WEBBING
  {
    id: '17',
    category: 'Estratégia & Propósito',
    title: 'Social Network Webbing (Mapeamento de Redes Sociais)',
    englishTitle: 'Social Network Webbing',
    objective: 'Mapear visualmente a teia de relacionamentos e influências para identificar nós centrais, pontes entre silos e laços ausentes.',
    applicationContext: 'Quando uma iniciativa estratégica precisa de apoio multifuncional e enfrenta barreiras de comunicação entre áreas.',
    practicalExample: 'Desenhar a rede com 50 pessoas: quem fala com quem, onde estão as pontes entre TI, Produto e Vendas, e quem precisa ser envolvido imediatamente para destravar o projeto.',
    expectedBenefits: [
      'Visualização imediata de silos departamentais e gargalos.',
      'Identificação de conectores informais invisíveis.',
      'Plano de engajamento direcionado para acelerar inovações.'
    ],
    ecocycleConnection: 'Indispensável para resgatar iniciativas na Armadilha da Pobreza: mapeia quem detém os recursos, patrocinadores e parceiros para fazer a ideia nascer.',
    input: 'Objetivo estratégico que depende de colaboração entre áreas.',
    process: 'Mapeamento individual de contatos ➔ Desenho coletivo da rede ➔ Análise de laços fracos e novas pontes a construir.',
    output: 'Grafo relacional do time com ações para conectar nós isolados.',
    timeNeeded: '45-60 min',
    groupSize: 'Grupos de 10 a 60 pessoas',
    icon: 'Network',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Mapear visualmente redes e influências para quebrar silos e criar pontes.',
    fullDescription: 'Mapear graficamente relacionamentos e fluxos de influência para mobilizar suporte e destravar projetos.',
    cases: ['Superação da Armadilha da Pobreza', 'Quebra de silos organizacionais', 'Mapeamento de stakeholders estratégicos']
  },

  // 18. HELPING HEURISTICS
  {
    id: '18',
    category: 'Colaboração & Ajuda',
    title: 'Helping Heuristics (Heurísticas de Ajuda)',
    englishTitle: 'Helping Heuristics',
    objective: 'Praticar a arte de pedir e oferecer ajuda eficaz, corrigindo padrões disfuncionais de auxílio condescendente ou impositivo.',
    applicationContext: 'Quando tentativas de ajuda geram atrito, defensividade ou desempoderamento de quem recebe o apoio.',
    practicalExample: 'Em trios, um buscador de ajuda apresenta um desafio e os ajudantes praticam alternadamente três posturas: escuta silenciosa, perguntas investigativas e suporte com recursos.',
    expectedBenefits: [
      'Desenvolvimento de relações de ajuda maduras e horizontais.',
      'Capacidade de pedir apoio com clareza e precisão.',
      'Eliminação da postura de salvador ou imposição de soluções prontas.'
    ],
    ecocycleConnection: 'Capacita facilitadores e líderes a apoiarem donos de projetos durante as transições delicadas do Ecocycle sem microgestão.',
    input: 'Um desafio real em que alguém necessita de suporte.',
    process: 'Rodadas em trios experimentando diferentes estilos de ajuda seguidas de debriefing imediato.',
    output: 'Habilidade aprimorada de dar e receber ajuda transformadora.',
    timeNeeded: '35-45 min',
    groupSize: 'Trios de trabalho',
    icon: 'HandHeart',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Praticar pedidos e ofertas de ajuda eficazes sem arrogância ou imposição.',
    fullDescription: 'Desenvolver a competência relacional de pedir e prestar ajuda saudável em equipes ágeis.',
    cases: ['Apoio a líderes de projetos no Ecocycle', 'Mentoria de pares', 'Melhoria de relações em equipes sobrecarregadas']
  },

  // 19. MIN SPECS
  {
    id: '19',
    category: 'Revelar & Diagnosticar',
    title: 'Min Specs (Especificações Mínimas)',
    englishTitle: 'Min Specs',
    objective: 'Especificar apenas o conjunto indispensável de regras absolutas ("Deve Fazer" e "Não Deve Fazer") para garantir o sucesso com máxima liberdade.',
    applicationContext: 'Quando projetos e equipes foram sufocados por manuais gigantescos, procedimentos engessados e burocracia desnecessária.',
    practicalExample: 'Listar todas as 25 regras operacionais existentes e testar uma a uma: "Se quebrarmos esta regra, o projeto falha?". Reter apenas as 4 regras estritamente críticas.',
    expectedBenefits: [
      'Eliminação imediata de regras e restrições burocráticas inúteis.',
      'Aumento expressivo da autonomia e velocidade de execução.',
      'Foco total no que é realmente inegociável.'
    ],
    ecocycleConnection: 'A ferramenta perfeita para destravar a Armadilha da Rigidez no Ecocycle Planning, enxugando processos maduros burocratizados.',
    input: 'A lista de todas as normas, procedimentos e regras atuais do projeto.',
    process: 'Brainstorming de regras ➔ Teste implacável de necessidade absoluta ➔ Redução para 4 a 6 Min Specs inegociáveis.',
    output: 'Conjunto compacto e potente de regras mínimas e invioláveis.',
    timeNeeded: '35-50 min',
    groupSize: 'Qualquer tamanho de grupo',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Reduzir regras ao mínimo indispensável (Deve e Não Deve Fazer).',
    fullDescription: 'Liberar a inovação podando regras desnecessárias e retendo apenas as especificações mínimas críticas para o sucesso.',
    cases: ['Destravamento da Armadilha da Rigidez', 'Desburocratização de governança', 'Definição de limites claros para squads autônomos']
  },

  // 20. IMPROV PROTOTYPING
  {
    id: '20',
    category: 'Gerar Ideias & Inovação',
    title: 'Improv Prototyping (Prototipagem com Improviso)',
    englishTitle: 'Improv Prototyping',
    objective: 'Simular e testar soluções comportamentais através de encenações teatrais rápidas e iterativas sem medo de errar.',
    applicationContext: 'Quando uma solução envolve interação humana delicada (ex: como dar um feedback difícil ou como cancelar um contrato com elegância).',
    practicalExample: 'Dois colegas encenam a comunicação da descontinuidade de um produto; a plateia intervém gritando "Congela!" para sugerir abordagens mais empáticas.',
    expectedBenefits: [
      'Aprendizado vivencial e incorporado no corpo e nas emoções.',
      'Identificação rápida de falhas de comunicação antes da vida real.',
      'Criação de repertório comportamental compartilhado.'
    ],
    ecocycleConnection: 'Testa na prática as conversas difíceis de descontinuidade exigidas na Destruição Criativa do Ecocycle Planning.',
    input: 'Uma situação desafiadora de relacionamento ou atendimento.',
    process: 'Encenação inicial ➔ Interrupções com "Congela!" para ajustes ➔ Reencenação com novas atitudes.',
    output: 'Comportamentos eficazes validados e memorizados pela equipe.',
    timeNeeded: '30-45 min',
    groupSize: 'Grupos de 10 a 40 participantes',
    icon: 'Theater',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Simular e aprimorar interações difíceis através de encenações teatrais rápidas.',
    fullDescription: 'Prototipar soluções para desafios humanos através de pequenas encenações improvisadas e iterativas.',
    cases: ['Comunicação de descontinuidade de projetos', 'Treinamento de atendimento difícil', 'Resolução de atritos interpessoais']
  },

  // 21. DESIGN STORYBOARDS
  {
    id: '21',
    category: 'Ação & Convergência',
    title: 'Design Storyboards (Storyboards de Design)',
    englishTitle: 'Design Storyboards',
    objective: 'Mapear visualmente a trajetória cronológica de uma intervenção ou projeto ao longo do tempo através de uma série de quadros visuais.',
    applicationContext: 'Quando o time precisa visualizar o fluxo completo de uma experiência antes de começar a executá-la.',
    practicalExample: 'Criação de 6 quadros visuais mostrando o que acontece antes, durante e após a sessão de facilitação do Ecocycle Planning corporativo.',
    expectedBenefits: [
      'Visão integrada da linha do tempo e dependências temporais.',
      'Detecção preventiva de lacunas e momentos de atrito.',
      'Alinhamento visual da equipe de facilitação.'
    ],
    ecocycleConnection: 'Constrói o roadmap visual de transição para implementar as decisões tomadas no mapa do Ecocycle Planning.',
    input: 'O objetivo da intervenção e as principais etapas imaginadas.',
    process: 'Desenho de 6 a 8 quadros sequenciais detalhando ações dos participantes e do facilitador em cada momento.',
    output: 'Roteiro visual claro com tempos, papéis e passos acionáveis.',
    timeNeeded: '40-60 min',
    groupSize: 'Equipes de 3 a 7 facilitadores/líderes',
    icon: 'LayoutGrid',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Mapear visualmente a sequência cronológica de uma experiência em quadros.',
    fullDescription: 'Desenhar passo a passo o roteiro visual de uma intervenção ou serviço ao longo do tempo.',
    cases: ['Roadmap pós-Ecocycle Planning', 'Planejamento de workshops de facilitação', 'Mapeamento da jornada do cliente']
  },

  // 22. CELEBRITY INTERVIEW
  {
    id: '22',
    category: 'Revelar & Diagnosticar',
    title: 'Celebrity Interview (Entrevista com Especialista/Líder)',
    englishTitle: 'Celebrity Interview',
    objective: 'Entrevistar especialistas ou líderes de forma descontraída e transparente, quebrando a barreira de palestras formais unidirecionais.',
    applicationContext: 'Para aproximar a liderança sênior da equipe e esclarecer o contexto estratégico real sem jargões ou apresentações de slides.',
    practicalExample: 'Um facilitador e os participantes entrevistam o Diretor Geral sobre por que a empresa precisa rever seu portfólio no Ecocycle com urgência.',
    expectedBenefits: [
      'Humanização da liderança e transparência de premissas.',
      'Engajamento ativo da plateia através de perguntas espontâneas.',
      'Esclarecimento imediato de dúvidas estratégicas críticas.'
    ],
    ecocycleConnection: 'Traz o sponsor executivo para abrir o jogo sobre as restrições financeiras e metas que influenciam onde os projetos devem se posicionar no Ecociclo.',
    input: 'Presença de um líder ou especialista e perguntas preparadas pelo grupo.',
    process: 'Entrevista ágil pelo facilitador (10 min) ➔ Perguntas abertas da plateia (15 min) ➔ Fechamento reflexivo.',
    output: 'Compreensão clara das prioridades e desafios da liderança.',
    timeNeeded: '30-40 min',
    groupSize: 'Qualquer tamanho de audiência',
    icon: 'Mic',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Entrevistar líderes ou especialistas de forma transparente e descontraída.',
    fullDescription: 'Quebrar formalidades corporativas conduzindo entrevistas autênticas com decisores-chave para alinhar o grupo.',
    cases: ['Abertura executiva para o Ecocycle Planning', 'Alinhamento com patrocinadores', 'Entrevista de especialistas em tecnologia']
  },

  // 23. HEARD, SEEN, RESPECTED (HSR)
  {
    id: '23',
    category: 'Colaboração & Ajuda',
    title: 'Heard, Seen, Respected - HSR (Ouvido, Visto, Respeitado)',
    englishTitle: 'Heard, Seen, Respected (HSR)',
    objective: 'Desenvolver escuta compassiva e sem julgamentos através do compartilhamento em pares de momentos em que alguém se sentiu valorizado ou ignorado.',
    applicationContext: 'Quando o ambiente está carregado de desconfiança, mágoas passadas ou frieza relacional entre equipes.',
    practicalExample: 'Em duplas, um participante relata por 7 minutos uma ocasião em que sentiu que não foi ouvido; o parceiro escuta com presença absoluta sem dar conselhos.',
    expectedBenefits: [
      'Fortalecimento profundo da segurança psicológica.',
      'Desenvolvimento de empatia genuína entre colegas.',
      'Cura de ressentimentos que travavam a cooperação.'
    ],
    ecocycleConnection: 'Estabelece a base de segurança emocional indispensável para que o time aceite expor fracassos na Destruição Criativa do Ecocycle sem medo de retaliação.',
    input: 'Histórias e vivências pessoais autênticas.',
    process: 'Escuta generosa em pares (7 min cada) sem interrupções nem julgamentos ➔ Reflexão compartilhada.',
    output: 'Confiança mútua restabelecida e abertura para conversas sinceras.',
    timeNeeded: '35-45 min',
    groupSize: 'Pares organizados em grupos maiores',
    icon: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Praticar escuta empática profunda sem conselhos ou julgamentos.',
    fullDescription: 'Criar laços de confiança e empatia através do compartilhamento de vivências pessoais de escuta e acolhimento.',
    cases: ['Segurança psicológica antes da Destruição Criativa', 'Integração de times após crises', 'Melhoria de clima organizacional']
  },

  // 24. DRAWING TOGETHER
  {
    id: '24',
    category: 'Gerar Ideias & Inovação',
    title: 'Drawing Together (Desenhando Juntos)',
    englishTitle: 'Drawing Together',
    objective: 'Acessar a sabedoria intuitiva e emocional do grupo usando apenas 5 símbolos visuais universais (círculo, retângulo, triângulo, espiral e linha).',
    applicationContext: 'Quando palavras e argumentos racionais já se esgotaram e não conseguem expressar o verdadeiro sentimento sobre um problema.',
    practicalExample: 'Cada participante desenha o estado atual do seu portfólio usando apenas os 5 símbolos; em duplas, interpretam o que as formas revelam sobre o peso do trabalho.',
    expectedBenefits: [
      'Expressão de sentimentos difíceis de colocar em palavras.',
      'Quebra de defesas intelectuais e raciocínios pré-fabricados.',
      'Compreensão profunda e intuitiva do clima do time.'
    ],
    ecocycleConnection: 'Permite ilustrar graficamente a sensação de sufoco na Rigidez ou a esperança na Gestação antes de montar o Ecocycle Planning.',
    input: 'Folha de papel e caneta com os 5 símbolos universais.',
    process: 'Desenho individual silencioso ➔ Interpretação cruzada em duplas ➔ Partilha de insights no grupo.',
    output: 'Compreensão intuitiva profunda dos desafios e sentimentos da equipe.',
    timeNeeded: '30-40 min',
    groupSize: 'Qualquer tamanho de grupo',
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Revelar sentimentos profundos usando 5 símbolos visuais universais.',
    fullDescription: 'Desbloquear a inteligência não-verbal do grupo desenhando desafios através de símbolos universais.',
    cases: ['Diagnóstico emocional do portfólio', 'Superação de bloqueios criativos', 'Expressão de tensões não-ditas']
  },

  // 25. CARTA ESPECIAL — 5 DESIGN ELEMENTS (META-FACILITAÇÃO)
  {
    id: '25',
    category: 'Estratégia & Propósito',
    title: 'Carta Especial — 5 Design Elements (Metadesign de Facilitação)',
    englishTitle: '5 Design Elements (Meta-Facilitation)',
    isDesignCard: true,
    specialBadge: 'CARTA DE DESIGN • META-FACILITAÇÃO',
    designElementsList: [
      '1. Convite estruturante',
      '2. Espaço e materiais',
      '3. Distribuição da participação',
      '4. Configuração dos grupos',
      '5. Sequência de passos e tempos'
    ],
    objective: 'Camada de metadesign da facilitação: arquitetar como cada Estrutura Libertadora ou String será desenhada calibrando os 5 microelementos essenciais (Convite, Espaço e materiais, Distribuição da participação, Configuração dos grupos, Sequência de passos e tempos).',
    applicationContext: 'A bússola do facilitador consciente. Usada para analisar criticamente e estruturar qualquer intervenção, reunião ou String em torno do Ecocycle Planning sem improvisos cegos.',
    practicalExample: 'Antes de rodar a String com o Ecocycle Planning, o facilitador desenha os 5 elementos: (1) Convite com pergunta gerativa; (2) Sala em círculos e post-its coloridos; (3) 100% de voz ativa garantida; (4) Ciclos de 1-2-4-Todos; (5) Tempos rígidos e passos transparentes.',
    expectedBenefits: [
      'Metadesign consciente: clareza prévia de como cada momento opera.',
      'Sessões de facilitação fluidas, inclusivas e altamente produtivas.',
      'Prevenção de armadilhas de tempo, dispersão e dominação hierárquica.',
      'Coerência máxima entre o propósito da intervenção e a experiência vivida.'
    ],
    ecocycleConnection: 'A bússola de metadesign com a qual o facilitador projeta e calibra a String completa que orbita o Ecocycle Planning.',
    input: 'O propósito estratégico da sessão e as pistas do contexto dos participantes.',
    process: 'Calibragem explícita dos 5 microelementos: Convite ➔ Espaço e materiais ➔ Distribuição da participação ➔ Configuração dos grupos ➔ Sequência de passos e tempos.',
    output: 'Design de facilitação robusto, adaptável e de alta aderência pedagógica.',
    timeNeeded: '30-60 min de planejamento prévio',
    groupSize: 'Facilitadores, líderes e designers de experiências',
    icon: 'Sliders',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Carta Especial: Os 5 elementos essenciais que desenham qualquer Estrutura Libertadora.',
    fullDescription: 'Metadesign da facilitação: calibra convite, espaço, participação, grupos e tempos para arquitetar Strings de alta precisão.',
    cases: ['Arquitetura de Strings para Ecocycle Planning', 'Planejamento de convenções estratégicas', 'Design de reuniões executivas']
  },

  // 26. GENERATIVE RELATIONSHIPS (STAR)
  {
    id: '26',
    category: 'Colaboração & Ajuda',
    title: 'Generative Relationships STAR (Relações Generativas)',
    englishTitle: 'Generative Relationships STAR',
    objective: 'Diagnosticar e aprimorar como equipes interagem avaliando os 4 vetores STAR: Separação, Sintonia, Ação e Raciocínio.',
    applicationContext: 'Quando equipes interdisciplinares não conseguem colaborar harmoniosamente e vivem em desgaste constante.',
    practicalExample: 'O time plota suas notas na bússola STAR e descobre que tem muita Ação e pouca Sintonia (visão compartilhada), gerando esforço desconexo.',
    expectedBenefits: [
      'Diagnóstico visual e objetivo da saúde dos relacionamentos.',
      'Identificação de lacunas de diversidade ou alinhamento.',
      'Ações práticas para fortalecer a capacidade colaborativa do time.'
    ],
    ecocycleConnection: 'Avalia se a equipe tem a maturidade relacional necessária para cooperar nas transições de projetos no Ecocycle Planning.',
    input: 'A experiência diária de trabalho conjunto da equipe.',
    process: 'Avaliação individual nos 4 eixos STAR ➔ Mapeamento coletivo da teia ➔ Diálogo sobre intervenções necessárias.',
    output: 'Plano de fortalecimento das relações de cooperação da equipe.',
    timeNeeded: '45-60 min',
    groupSize: 'Equipes de 4 a 25 membros',
    icon: 'Compass',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Avaliar a saúde das relações de trabalho usando a bússola STAR.',
    fullDescription: 'Diagnosticar e calibrar relacionamentos produtivos considerando Separação, Sintonia, Ação e Raciocínio.',
    cases: ['Maturidade relacional de equipes no Ecocycle', 'Alinhamento entre lideranças', 'Integração de novos times multidisciplinares']
  },

  // 27. AGREEMENT-CERTAINTY MATRIX
  {
    id: '27',
    category: 'Estratégia & Propósito',
    title: 'Agreement-Certainty Matrix (Matriz de Concordância e Certeza)',
    englishTitle: 'Agreement-Certainty Matrix',
    objective: 'Classificar os desafios em Simples, Complicados, Complexos ou Caóticos com base no grau de certeza técnica e consenso social.',
    applicationContext: 'Para evitar o erro clássico de aplicar soluções lineares e burocráticas a problemas complexos e imprevisíveis.',
    practicalExample: 'Mapear 30 iniciativas da empresa: separar o que pode ser padronizado (Simples) daquilo que exige experimentação orgânica e o Ecocycle Planning (Complexo).',
    expectedBenefits: [
      'Escolha correta de métodos de gestão para cada tipo de problema.',
      'Redução de atritos causados por expectativas de previsibilidade irrealistas.',
      'Liberação para inovar em terrenos de alta incerteza.'
    ],
    ecocycleConnection: 'Ajuda a equipe a entender que o Ecocycle Planning é a ferramenta por excelência para a zona Complexa da matriz.',
    input: 'A lista de desafios e iniciativas prioritárias da organização.',
    process: 'Posicionamento dos desafios nos 2 eixos (certeza técnica e concordância entre pessoas) ➔ Definição da abordagem correta.',
    output: 'Mapa claro de complexidade guiando a estratégia do portfólio.',
    timeNeeded: '30-45 min',
    groupSize: 'Grupos de 6 a 40 pessoas',
    icon: 'Target',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Classificar desafios em simples, complicados, complexos ou caóticos.',
    fullDescription: 'Mapear o grau de certeza e concordância dos desafios para escolher a estratégia de gestão mais apropriada.',
    cases: ['Enquadramento estratégico antes do Ecocycle', 'Seleção de métodos ágeis vs tradicionais', 'Navegação em cenários de alta complexidade']
  },

  // 28. SIMPLE ETHNOGRAPHY
  {
    id: '28',
    category: 'Revelar & Diagnosticar',
    title: 'Simple Ethnography (Etnografia Simples)',
    englishTitle: 'Simple Ethnography',
    objective: 'Observar diretamente comportamentos, hábitos e dificuldades reais dos usuários em seu ambiente natural, sem interferir nem julgar.',
    applicationContext: 'Quando reuniões de diretoria se baseiam em achismos sobre os clientes em vez de dados empíricos observados na vida real.',
    practicalExample: 'Desenvolvedores passam uma manhã observando atendentes usando o sistema no balcão e registram as frustrações silenciosas que nunca aparecem nos relatórios.',
    expectedBenefits: [
      'Empatia fundada em evidências reais observadas no campo.',
      'Eliminação de mitos corporativos desmentidos pelos fatos.',
      'Descoberta de necessidades não-articuladas pelos clientes.'
    ],
    ecocycleConnection: 'Traz evidências empíricas para embasar se um produto do Ecocycle realmente está maduro ou se já entrou em declínio.',
    input: 'Acesso ao ambiente natural onde o serviço ou processo é executado.',
    process: 'Observação silenciosa e respeitosa com caderno de notas ➔ Compartilhamento de dados brutos ➔ Interpretação coletiva.',
    output: 'Relatório de percepções reais com foco na experiência autêntica.',
    timeNeeded: '1 a 3 horas de campo + 45 min de análise',
    groupSize: 'Pares de observadores',
    icon: 'Glasses',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Observar clientes no seu ambiente real para extrair insights sem filtros.',
    fullDescription: 'Observar diretamente o comportamento dos usuários no mundo real para embasar decisões com fatos empíricos.',
    cases: ['Validação de maturidade no Ecocycle Planning', 'Pesquisa de experiência do usuário', 'Descoberta de problemas ocultos em processos']
  },

  // 29. INTEGRATED~AUTONOMY
  {
    id: '29',
    category: 'Ação & Convergência',
    title: 'Integrated~Autonomy (Autonomia Integrada)',
    englishTitle: 'Integrated~Autonomy',
    objective: 'Conciliar a autonomia das unidades locais com a integração e governança global corporativa, sem guerras de poder.',
    applicationContext: 'Conflitos crônicos entre matriz e filiais, ou entre squads autônomos e áreas de auditoria e compliance.',
    practicalExample: 'Definir claramente em quais dimensões os squads de produto têm total autonomia para inovar e em quais pontos devem seguir os padrões centrais.',
    expectedBenefits: [
      'Fim da disputa paralisante entre centralização e descentralização.',
      'Autonomia local com segurança e responsabilidade sistêmica.',
      'Agilidade nas pontas sem perda de coerência organizacional.'
    ],
    ecocycleConnection: 'Permite que projetos na Gestação do Ecocycle inovem com liberdade sem violar a estabilidade da Maturidade corporativa.',
    input: 'Lista de atritos de autonomia vs. padronização.',
    process: 'Identificação de atividades que exigem autonomia e as que exigem integração ➔ Construção de acordos funcionais de convivência.',
    output: 'Acordo explícito de Autonomia Integrada entre as partes.',
    timeNeeded: '45-60 min',
    groupSize: 'Representantes dos níveis local e central',
    icon: 'GitMerge',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Equilibrar a liberdade das equipes locais com a governança da matriz.',
    fullDescription: 'Conciliar a necessidade de autonomia local com a governança e padronização global da organização.',
    cases: ['Alinhamento de governança no Ecocycle', 'Relações entre squads ágeis e matriz corporativa', 'Descentralização segura de decisões']
  },

  // 30. WHAT I NEED FROM YOU (WINFY)
  {
    id: '30',
    category: 'Colaboração & Ajuda',
    title: 'What I Need From You - WINFY (O Que Preciso de Você)',
    englishTitle: 'What I Need From You (WINFY)',
    objective: 'Articular pedidos claros e diretos de recursos ou decisões entre grupos funcionais e receber respostas objetivas sem evasivas.',
    applicationContext: 'Quando áreas dependem umas das outras (ex: Vendas, TI e RH) e vivem em eterno jogo de empurra e reuniões inconclusivas.',
    practicalExample: 'Líderes de Inovação declaram o que precisam de TI para colocar no ar um projeto do Ecocycle; TI responde apenas: "Sim", "Não", "Vou tentar" ou "Preciso de esclarecimento".',
    expectedBenefits: [
      'Eliminação de promessas vagas e desculpas corporativas.',
      'Redução de reuniões inúteis através de acordos transparentes.',
      'Desbloqueio de dependências críticas entre departamentos.'
    ],
    ecocycleConnection: 'Desata o principal gargalo da Armadilha da Pobreza no Ecocycle: garante acordos firmes entre áreas para viabilizar novas iniciativas.',
    input: 'Demandas e dependências operacionais entre equipes.',
    process: 'Envio de listas de pedidos claros ➔ Análise interna ➔ Resposta formal com Sim, Não, Vou Tentar ou Esclarecimento.',
    output: 'Pacto transparente de entregas mútuas entre departamentos.',
    timeNeeded: '45-60 min',
    groupSize: 'Grupos de 2 a 5 equipes representadas',
    icon: 'HandHelping',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Pedir com clareza o que você precisa de outras áreas e receber respostas diretas.',
    fullDescription: 'Eliminar o jogo de empurra entre departamentos articulando pedidos explícitos com respostas vinculantes.',
    cases: ['Destravamento da Armadilha da Pobreza no Ecocycle', 'Acordos de serviço entre TI e negócios', 'Eliminação de gargalos interdepartamentais']
  },

  // 31. OPEN SPACE TECHNOLOGY
  {
    id: '31',
    category: 'Gerar Ideias & Inovação',
    title: 'Open Space Technology (Tecnologia do Espaço Aberto)',
    englishTitle: 'Open Space Technology',
    objective: 'Conduzir encontros autogerenciados onde os participantes criam a pauta, lideram as sessões de trabalho e documentam os resultados.',
    applicationContext: 'Para grandes encontros focados em temas complexos e urgentes onde ninguém possui a resposta pronta e todos são responsáveis.',
    practicalExample: '150 colaboradores criam em 20 minutos uma grade de 16 salas de debate sobre como semear novos caminhos apontados no Ecocycle Planning.',
    expectedBenefits: [
      'Mobilização de paixão e responsabilidade descentralizada.',
      'Surgimento de líderes naturais e soluções inovadoras.',
      'Engajamento massivo sem planejamento centralizador prévio.'
    ],
    ecocycleConnection: 'Mobiliza a inteligência de toda a organização para atacar os focos de Gestação e Destruição Criativa identificados no Ecocycle.',
    input: 'Um tema central urgente e relevante que mobiliza o grupo.',
    process: 'Criação da agenda no "Mercado de Ideias" ➔ Rodadas em salas paralelas com a "Lei dos Dois Pés" ➔ Notícias e fechamento.',
    output: 'Livro de procedimentos com planos de ação e equipes auto-organizadas.',
    timeNeeded: 'Meio período a 2 dias',
    groupSize: 'De 20 a 500+ participantes',
    icon: 'Maximize',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Encontros autogerenciados onde o grupo cria a pauta e lidera as ações.',
    fullDescription: 'Conduzir grandes encontros participativos onde a agenda e os grupos de trabalho emergem da inteligência coletiva.',
    cases: ['Mobilização de planos de ação pós-Ecocycle', 'Convenções participativas de inovação', 'Resolução de crises organizacionais']
  },

  // 32. CRITICAL UNCERTAINTIES
  {
    id: '32',
    category: 'Estratégia & Propósito',
    title: 'Critical Uncertainties (Incertezas Críticas)',
    englishTitle: 'Critical Uncertainties',
    objective: 'Desenvolver estratégias robustas combinando as 2 variáveis mais imprevisíveis e críticas do ambiente em 4 cenários futuros plausíveis.',
    applicationContext: 'Planejamento estratégico em ambientes voláteis, disrupções tecnológicas ou incertezas regulatórias agudas.',
    practicalExample: 'Cruzar 2 incertezas críticas (ex: regulação de IA favorável vs restritiva x taxa de juros alta vs baixa) gerando 4 cenários e testando o portfólio do Ecocycle em cada um.',
    expectedBenefits: [
      'Preparação contra surpresas e eventos imprevistos do mercado.',
      'Desenvolvimento de estratégias resilientes que funcionam em qualquer futuro.',
      'Abandono de previsões ingênuas de linha reta.'
    ],
    ecocycleConnection: 'Testa a resiliência do portfólio do Ecocycle Planning frente a choques externos, identificando projetos vulneráveis na Maturidade.',
    input: 'Lista dos fatores externos críticos que impactam o futuro do setor.',
    process: 'Seleção das 2 maiores incertezas ➔ Criação da matriz 2x2 com 4 mundos ➔ Teste de estratégias robustas para cada cenário.',
    output: 'Estratégias à prova de futuro e planos de contingência ágeis.',
    timeNeeded: '60-90 min',
    groupSize: 'Grupos estratégicos de 10 a 50 pessoas',
    icon: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Construir 4 cenários futuros para testar a resiliência das estratégias.',
    fullDescription: 'Desenvolver estratégias robustas operando sob incerteza extrema ao cruzar as duas variáveis mais imprevisíveis.',
    cases: ['Teste de resiliência do Ecocycle Planning', 'Planejamento estratégico de cenários', 'Gestão de riscos futuros']
  },

  // 33. PURPOSE TO PRACTICE (P2P)
  {
    id: '33',
    category: 'Estratégia & Propósito',
    title: 'Purpose to Practice - P2P (Do Propósito à Prática)',
    englishTitle: 'Purpose to Practice (P2P)',
    objective: 'Projetar os 5 elementos fundamentais de uma nova iniciativa: Propósito, Princípios, Participantes, Estrutura e Práticas.',
    applicationContext: 'Lançamento de novas empresas, programas de transformação, alianças estratégicas ou novos departamentos.',
    practicalExample: 'Equipe define o lançamento de um novo produto posicionado em Gestação no Ecocycle, alinhando passo a passo propósito, princípios e práticas operacionais.',
    expectedBenefits: [
      'Alinhamento holístico desde o nascimento do projeto.',
      'Prevenção de incoerências entre discurso e ações práticas diárias.',
      'Fundação sólida para governança participativa e ágil.'
    ],
    ecocycleConnection: 'Estrutura o plano arquitetônico de governança para que projetos na Gestação do Ecocycle façam uma transição segura e sustentável para o Nascimento.',
    input: 'A oportunidade ou nova iniciativa a ser lançada.',
    process: 'Construção sequencial dos 5 elementos usando 1-2-4-All em cada etapa: Propósito ➔ Princípios ➔ Participantes ➔ Estrutura ➔ Práticas.',
    output: 'Documento fundador completo e alinhado da nova iniciativa.',
    timeNeeded: '90-120 min',
    groupSize: 'Grupos de 6 a 40 pessoas',
    icon: 'Award',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Projetar os 5 elementos de uma iniciativa: Propósito, Princípios, Pessoas, Estrutura e Práticas.',
    fullDescription: 'Estruturar uma iniciativa completa desde sua razão de ser até as práticas diárias de execução.',
    cases: ['Lançamento de projetos que saem da Gestação do Ecocycle', 'Criação de novos departamentos', 'Governança de comunidades']
  },

  // 34. MAD TEA | CALM TEA
  {
    id: '34',
    category: 'Conectar & Aquecer',
    title: 'Mad Tea | Calm Tea (Chá Maluco | Chá Calmo)',
    englishTitle: 'Mad Tea | Calm Tea',
    objective: 'Conectar rapidamente os participantes, alternando rodadas aceleradas em pares com momentos intencionais de silêncio para energizar o grupo e trazer presença plena.',
    applicationContext: 'Ideal para aberturas de workshops, convenções, transições entre pautas densas ou para romper a inibição em grupos presenciais ou remotos.',
    practicalExample: 'No presencial (Mad Tea), dois círculos concêntricos ficam frente a frente e completam frases provocativas em 1 minuto antes de girar. No virtual (Calm Tea), o grupo reflete em silêncio e envia respostas simultâneas ("chat waterfall").',
    expectedBenefits: [
      'Inclusão imediata de 100% dos participantes em poucos minutos.',
      'Quebra da inibição social e criação de um clima leve e seguro.',
      'Mapeamento relâmpago de perspectivas, medos e expectativas do grupo.',
      'Equilíbrio dinâmico entre energia vibrante e escuta focada.'
    ],
    ecocycleConnection: 'Nutre a fase de Gestação e Nascimento de novas ideias, dissolvendo rigidezes e renovando a energia vital do grupo.',
    input: 'Frases inacabadas e instigantes formuladas pelo facilitador (ex: "O que ninguém ousa dizer sobre nosso projeto é...").',
    process: 'No Mad Tea: círculos concêntricos ➔ 1 minuto por rodada em dupla ➔ rotação para novo par. No Calm Tea: escrita silenciosa ➔ envio em cascata no chat.',
    output: 'Grupo altamente conectado, energizado e pronto para debates mais profundos.',
    timeNeeded: '15-20 min',
    groupSize: 'Qualquer tamanho (de 8 a centenas de pessoas)',
    icon: 'Coffee',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Conectar participantes rapidamente alternando rodadas em pares com silêncio reflexivo.',
    fullDescription: 'Promover conexão humana veloz e presença plena com rodadas dinâmicas em círculos concêntricos ou cascata reflexiva online.',
    cases: ['Abertura de convenções e workshops', 'Quebra-gelo em encontros virtuais', 'Transição após momentos tensos']
  },

  // 35. SPIRAL JOURNAL
  {
    id: '35',
    category: 'Revelar & Diagnosticar',
    title: 'Spiral Journal (Diário em Espiral)',
    englishTitle: 'Spiral Journal',
    objective: 'Acalmar a mente agitada, desacelerar o sistema nervoso e acessar pensamentos profundos não censurados por meio de escrita reflexiva em 4 quadrantes.',
    applicationContext: 'Momentos de sobrecarga, ansiedade, antes de conversas difíceis ou no início de sessões de planejamento estratégico.',
    practicalExample: 'Cada participante divide uma folha em 4 quadrantes. Durante 2 minutos, desenha uma espiral lenta e contínua do centro para fora para acalmar os batimentos cardíacos. Em seguida, responde a 4 perguntas reflexivas (1 min em cada quadrante) sem parar de escrever.',
    expectedBenefits: [
      'Redução imediata do estresse mental e ansiedade cognitiva.',
      'Acesso à intuição sincera sem o filtro da autocrítica.',
      'Inclusão silenciosa e confortável para participantes introvertidos.',
      'Clareza pessoal antes de decisões de alto impacto.'
    ],
    ecocycleConnection: 'Auxilia na fase de Destruição Criativa e transição para Gestação, permitindo desapegar de ruídos mentais para abrir espaço ao essencial.',
    input: 'Folha de papel, caneta e 4 prompts reflexivos elaborados para a situação.',
    process: 'Desenho da espiral lenta e contínua por 2 min ➔ Resposta aos 4 prompts (1 min cada quadrante) ➔ Breve compartilhamento voluntário em duplas.',
    output: 'Insights pessoais nítidos, calma mental e prontidão para colaborar.',
    timeNeeded: '15-20 min',
    groupSize: 'Individual ou qualquer tamanho de grupo em paralelo',
    icon: 'Edit3',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Acalmar a mente e gerar reflexões profundas desenhando uma espiral e escrevendo em 4 quadrantes.',
    fullDescription: 'Desacelerar o sistema nervoso com desenho meditativo em espiral seguido de escrita rápida estruturada em quatro perspectivas.',
    cases: ['Abertura de retrospectivas e reuniões difíceis', 'Alívio de sobrecarga e estresse de time', 'Reflexão prévia para decisões']
  },

  // 36. FOLDING SPECTROGRAM
  {
    id: '36',
    category: 'Revelar & Diagnosticar',
    title: 'Folding Spectrogram (Espectrograma Dobrado)',
    englishTitle: 'Folding Spectrogram',
    objective: 'Mapear a diversidade de posições em uma linha contínua e "dobrar" a linha para colocar em diálogo direto quem tem opiniões mais opostas, sem confronto destrutivo.',
    applicationContext: 'Quando o grupo está preso em polarizações binárias ("nós contra eles", remoto vs presencial, acelerar vs conter riscos).',
    practicalExample: 'O facilitador traça uma linha imaginária na sala de 0 a 100% de concordância com um dilema. Os participantes se posicionam ao longo do espectro. Em seguida, a linha se dobra ao meio, fazendo com que os extremos opostos conversem com empatia por 5 minutos.',
    expectedBenefits: [
      'Visualização física instantânea da distribuição de opiniões.',
      'Diálogo empático e calmo entre visões diametralmente opostas.',
      'Superação do pensamento tribal e descoberta de nuances intermediárias.',
      'Segurança para expressar divergências sem medo de retaliação.'
    ],
    ecocycleConnection: 'Destrava a Armadilha da Rigidez no Ecocycle, expondo visões periféricas que o grupo costuma sufocar.',
    input: 'Uma afirmação provocativa ou dilema estratégico com gradiente de concordância.',
    process: 'Posicionamento ao longo da linha contínua ➔ Dobra da linha ao meio ➔ Diálogo empático em duplas de visões opostas ➔ Síntese em plenária.',
    output: 'Compreensão mútua das razões do outro lado e novos caminhos de consenso.',
    timeNeeded: '25-35 min',
    groupSize: '12 a 60 participantes',
    icon: 'Layers',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Mapear um espectro de opiniões e dobrar a linha para unir polos opostos em diálogo empático.',
    fullDescription: 'Posicionar participantes num gradiente de opiniões e dobrar a linha para que extremos dialoguem respeitosamente.',
    cases: ['Mediação de divergências de equipe', 'Decisões sobre modelos de trabalho', 'Alinhamento em transições polêmicas']
  },

  // 37. POSITIVE GOSSIP
  {
    id: '37',
    category: 'Conectar & Aquecer',
    title: 'Positive Gossip (Fofoca Positiva)',
    englishTitle: 'Positive Gossip',
    objective: 'Fortalecer a segurança psicológica e a confiança recíproca na equipe falando abertamente sobre as qualidades e forças dos colegas na terceira pessoa.',
    applicationContext: 'Final de projetos intensos, retrospectivas de celebração, momentos de baixa motivação ou para integração de novas equipes.',
    practicalExample: 'Em trios, uma pessoa senta de costas (ou fecha os olhos/câmera). Durante 3 minutos, os outros dois colegas conversam entre si com entusiasmo sobre o que mais admiram no colega ausente simbolicamente. Depois, todos alternam as posições.',
    expectedBenefits: [
      'Aumento imediato da autoestima e sensação genuína de pertencimento.',
      'Revelação de talentos e contribuições que passavam despercebidos.',
      'Fortalecimento expressivo da segurança psicológica do time.',
      'Substituição de narrativas tóxicas por gratidão ativa e admiração.'
    ],
    ecocycleConnection: 'Fortalece o ecossistema na fase de Maturidade e Gestação, oxigenando os laços humanos que sustentam o time.',
    input: 'Trios de colegas e disposição para expressar apreciação sincera.',
    process: 'Colega A fica de costas e escuta ➔ Colegas B e C conversam sobre as forças de A por 3 min ➔ Rotação até que todos tenham sido apreciados.',
    output: 'Ambiente caloroso, laços afetivos consolidados e motivação renovada.',
    timeNeeded: '20-25 min',
    groupSize: 'Grupos divididos em trios (qualquer número total)',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Espalhar elogios sinceros falando sobre as qualidades de um colega enquanto ele escuta de costas.',
    fullDescription: 'Criar um ciclo virtuoso de segurança psicológica e reconhecimento onde colegas "fofocam" apenas pontos fortes e gratidão.',
    cases: ['Retrospectivas de fim de ciclo', 'Celebração de conquistas', 'Team building e acolhimento']
  },

  // 38. PRINCIPLES WALK-AROUND
  {
    id: '38',
    category: 'Estratégia & Propósito',
    title: 'Principles Walk-Around (Caminhada pelos Princípios)',
    englishTitle: 'Principles Walk-Around',
    objective: 'Avaliar criticamente a coerência prática entre os princípios declarados de uma organização e os comportamentos reais do dia a dia por meio de estações rotativas.',
    applicationContext: 'Diagnósticos de cultura corporativa, auditorias de integridade ética, onboarding de líderes ou revisão de diretrizes de governança.',
    practicalExample: 'Cartazes com os princípios da empresa são afixados nas paredes. Em duplas, as pessoas caminham de cartaz em cartaz respondendo: "Onde estamos vivendo esse princípio exemplarmente?" e "Onde estamos sendo hipócritas ou omissos?".',
    expectedBenefits: [
      'Identificação honesta de distâncias entre o discurso oficial e a prática real.',
      'Transparência radical sem culpabilização individual.',
      'Apropriação autêntica dos princípios por toda a equipe.',
      'Criação de compromissos concretos de coerência comportamental.'
    ],
    ecocycleConnection: 'Atua na transição entre Maturidade e Destruição Criativa, podando práticas hipócritas que corroem a cultura.',
    input: 'Os princípios fundamentais da instituição impressos ou projetados em estações.',
    process: 'Caminhada livre em duplas pelas estações ➔ Registro de exemplos de sucesso e contradições ➔ Colheita em plenária.',
    output: 'Diagnóstico lúcido da saúde cultural e plano de ação para restaurar a coerência.',
    timeNeeded: '35-50 min',
    groupSize: '10 a 60 participantes',
    icon: 'Compass',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Caminhar por estações para confrontar os princípios declarados com os comportamentos reais.',
    fullDescription: 'Examinar a fidelidade aos princípios fundamentais identificando onde a organização é autêntica e onde há brechas de coerência.',
    cases: ['Diagnósticos de cultura e governança', 'Alinhamento ético e compliance', 'Revisão de valores organizacionais']
  },

  // 39. NETWORK RELATIONSHIP PATTERNS
  {
    id: '39',
    category: 'Colaboração & Ajuda',
    title: 'Network Relationship Patterns (Padrões de Relação em Rede)',
    englishTitle: 'Network Relationship Patterns',
    objective: 'Tornar visíveis os fluxos reais de poder, colaboração e dependência em uma rede, comparando como as pessoas trabalham com como deveriam trabalhar.',
    applicationContext: 'Reorganizações corporativas, fusões, mapeamento de silos departamentais ou desenho de ecossistemas descentralizados.',
    practicalExample: 'O grupo mapeia em um grande painel quem conversa com quem para tomar decisões, onde estão os gargalos de aprovação e quais pontes estão faltando entre áreas para acelerar a inovação.',
    expectedBenefits: [
      'Visualização clara de silos e pessoas sobrecarregadas como gargalos.',
      'Identificação de conexões periféricas vitais que precisam de apoio.',
      'Descentralização do poder e empoderamento de pontes informais.',
      'Desenho consciente de uma arquitetura social mais ágil e fluida.'
    ],
    ecocycleConnection: 'Reconecta elementos isolados na Armadilha da Pobreza, criando pontes para viabilizar novos ciclos de vida.',
    input: 'Mapa de atores da rede e categorias de relacionamento (informação, decisão, apoio, recursos).',
    process: 'Mapeamento individual e em pequenos grupos das conexões existentes ➔ Análise de lacunas ➔ Desenho da rede ideal desejada.',
    output: 'Mapa de rede social atual e plano de ativação de novas conexões estratégicas.',
    timeNeeded: '45-60 min',
    groupSize: '15 a 80 participantes',
    icon: 'Share2',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Mapear fluxos de poder, colaboração e silos invisíveis em redes humanas.',
    fullDescription: 'Revelar como a rede realmente opera na prática e projetar novos padrões de relacionamento para destravar a colaboração.',
    cases: ['Superação de silos entre departamentos', 'Pós-fusão e reestruturações', 'Governança em redes descentralizadas']
  },

  // 40. GRIEF WALKING
  {
    id: '40',
    category: 'Colaboração & Ajuda',
    title: 'Grief Walking (Caminhada do Luto e Despedida)',
    englishTitle: 'Grief Walking',
    objective: 'Oferecer um espaço seguro e respeitoso para acolher perdas coletivas, términos de projetos ou transições dolorosas com presença silenciosa e empatia.',
    applicationContext: 'Demissões em massa, cancelamento de projetos de longo prazo, mortes na comunidade ou reestruturações bruscas que deixam cicatrizes emocionais.',
    practicalExample: 'Em duplas que caminham ao ar livre ou em silêncio na sala, uma pessoa expressa sua dor ou luto por 10 minutos sem ser interrompida, enquanto o colega caminha ao lado prestando atenção plena sem aconselhar nem tentar consertar. Em seguida, os papéis se invertem.',
    expectedBenefits: [
      'Liberação saudável de dores e mágoas não ditas na organização.',
      'Prevenção de cinismo, amargura e desengajamento crônico.',
      'Fortalecimento de laços profundos de solidariedade e respeito.',
      'Fechamento consciente para que o time consiga olhar para o futuro.'
    ],
    ecocycleConnection: 'Atua diretamente na fase de Destruição Criativa do Ecocycle, garantindo que o adeus seja honrado antes de recomeçar.',
    input: 'O reconhecimento conjunto de uma perda ou transição difícil enfrentada pela equipe.',
    process: 'Formação de duplas ➔ Caminhada de 10 min onde um desabafa e o outro escuta em silêncio acolhedor ➔ Troca de papéis ➔ Agradecimento mútuo.',
    output: 'Alívio emocional, validação do sofrimento e restauração da prontidão para novas etapas.',
    timeNeeded: '30-40 min',
    groupSize: 'Pares (qualquer tamanho total de grupo)',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Acolher perdas e transições dolorosas caminhando em duplas com escuta silenciosa.',
    fullDescription: 'Honrar finais, lutos e encerramentos com presença e silêncio atento, liberando a carga emocional que bloqueia o recomeço.',
    cases: ['Cancelamento de projetos estratégicos', 'Despedidas e demissões em equipe', 'Recuperação pós-crises organizacionais']
  },

  // 41. FUTURE~PRESENT
  {
    id: '41',
    category: 'Estratégia & Propósito',
    title: 'Future~Present (Futuro~Presente)',
    englishTitle: 'Future~Present',
    objective: 'Fazer "backcasting" (olhar para trás a partir de um futuro de sucesso daqui a 15-30 anos) para identificar as pequenas escolhas do presente que tornaram a visão realidade.',
    applicationContext: 'Planejamento estratégico de sustentabilidade, inovação de longo prazo ou quando o time está paralisado pelo curto prazo.',
    practicalExample: 'Em clima de fogueira narrativa, participantes assumem papéis de "anciãos sábios" no ano 2045 e contam para os "jovens aprendizes" como venceram os desafios lá atrás, narrando a história de sucesso de trás para frente.',
    expectedBenefits: [
      'Quebra de horizontes limitados e visão além de metas imediatistas.',
      'Estímulo à curiosidade lúdica séria e otimismo ativo.',
      'Identificação das sementes de sucesso que já existem hoje.',
      'Alinhamento entre ações táticas de curto prazo e legado duradouro.'
    ],
    ecocycleConnection: 'Conecta a Gestação com o Nascimento no Ecocycle, antecipando frutos futuros para semear hoje.',
    input: 'Um horizonte temporal aspiracional (ex: 2040) e um desafio complexo.',
    process: 'Formação de papéis (anciãos e jovens) ➔ Entrevista retrospectiva simulada ➔ Descoberta de pontos de virada ➔ Registro das ações necessárias hoje.',
    output: 'Roteiro narrativo inspirador e lista de primeiros passos factíveis no presente.',
    timeNeeded: '30-45 min',
    groupSize: 'Grupos de 4 a 6 pessoas',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Olhar para trás a partir do futuro de sucesso para revelar os passos vitais de hoje.',
    fullDescription: 'Simular uma conversa intergeracional no futuro para desvendar de trás para frente as escolhas presentes essenciais.',
    cases: ['Planejamento de visão e legado', 'Estratégias de sustentabilidade e ESG', 'Inovação transformadora']
  },

  // 42. TALKING WITH PIXIES
  {
    id: '42',
    category: 'Revelar & Diagnosticar',
    title: 'Talking with Pixies (Conversando com Duendes / Vozes Opostas)',
    englishTitle: 'Talking with Pixies',
    objective: 'Ajudar tomadores de decisão em encruzilhadas complexas a explorar seus dilemas expondo-se a pontos de vista intencionalmente contrastantes e audaciosos.',
    applicationContext: 'Decisões de carreira, pivôs estratégicos, impasses éticos ou momentos em que uma liderança está paralisada por dúvidas internas.',
    practicalExample: 'Um profissional senta entre dois colegas ("duendes"). Um duende argumenta com otimismo audacioso e paixão destemida; o outro argumenta com ceticismo impiedoso e prudência máxima. O participante apenas escuta e depois sintetiza a decisão.',
    expectedBenefits: [
      'Exteriorização clara dos medos e aspirações que disputam a mente.',
      'Superação de bloqueios e paralisia por excesso de análise.',
      'Abertura para caminhos inovadores que a mente censurava.',
      'Aumento da coragem e clareza para tomadas de decisão decisivas.'
    ],
    ecocycleConnection: 'Ajuda a superar a Armadilha da Pobreza, rompendo hesitações crônicas e gerando impulso para agir.',
    input: 'Um dilema pessoal ou corporativo real onde o participante se sente dividido.',
    process: 'O protagonista senta entre os 2 duendes ➔ Os duendes dialogam e debatem o dilema entre si por 5 min ➔ O protagonista reflete sobre os novos horizontes.',
    output: 'Clareza cristalina sobre os prós e contras e compromisso com o próximo passo.',
    timeNeeded: '20-30 min',
    groupSize: 'Trios (1 Protagonista + 2 Duendes)',
    icon: 'Smile',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Superar dilemas sentando entre duas vozes opostas: a audácia e a prudência.',
    fullDescription: 'Expor um dilema complexo ao debate ao vivo entre um conselheiro ultra-audacioso e um ultra-prudente para clarear a decisão.',
    cases: ['Coaching de liderança', 'Decisões de mudança de carreira', 'Pivô de produtos ou negócios']
  },

  // 43. STRATEGY KNOTWORKING
  {
    id: '43',
    category: 'Estratégia & Propósito',
    title: 'Strategy Knotworking (Tricotagem Estratégica)',
    englishTitle: 'Strategy Knotworking',
    objective: 'Tece e evolui continuamente estratégias coletivas respondendo a 6 perguntas fundamentais em ciclos iterativos, envolvendo toda a organização na criação e adaptação do rumo.',
    applicationContext: 'Planejamento estratégico participativo, alinhamento multinível de squads ou para substituir planos corporativos rígidos por uma estratégia ágil e viva.',
    practicalExample: 'Uma corporação ou ecossistema passa pelas 6 perguntas do Knotworking (Propósito, Contexto, Desafios, Linhas de Ação, Primeiros Passos e Aprendizados), usando uma sequência de ELs para responder cada uma de forma inclusiva e distribuída.',
    expectedBenefits: [
      'Construção de propriedade compartilhada da estratégia por 100% dos envolvidos.',
      'Capacidade rápida de adaptação a mudanças de mercado e imprevistos.',
      'Alinhamento fluido entre a alta gestão e a ponta operacional.',
      'Eliminação de relatórios estáticos em favor de ações vivas e coordenadas.'
    ],
    ecocycleConnection: 'Orquestra todo o Ecocycle Planning de forma contínua, garantindo que o portfólio estratégico respire e se adapte sem cessar.',
    input: 'Os desafios estratégicos centrais da organização e seus diversos públicos de interesse.',
    process: 'Navegação orquestrada pelas 6 perguntas estratégicas usando Strings de ELs ➔ Mapeamento de nós críticos ➔ Ciclos curtos de ação e reavaliação.',
    output: 'Estratégia dinâmica com ações coordenadas em todos os níveis organizacionais.',
    timeNeeded: 'Sessões de 90 min a jornadas de múltiplos dias',
    groupSize: 'De times pequenos a redes com centenas de pessoas',
    icon: 'Target',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Tecer estratégias vivas e ágeis com toda a organização respondendo a 6 perguntas-chave.',
    fullDescription: 'Metamétodo para co-criar estratégias adaptativas com propriedade coletiva, orquestrando strings de estruturas para 6 questões vitais.',
    cases: [
      'Planejamento estratégico anual e trimestral',
      'Alinhamento corporativo multinível',
      'Transformação ágil em escala (Referência: Catálogo de Estruturas Libertadoras setembro/2026)'
    ]
  }
];

// Informação de referência da base de conhecimento do aplicativo
export const CATALOG_REFERENCE_VERSION = 'Catálogo de Estruturas Libertadoras utilizado pelo protótipo: versão de referência setembro/2026.';

export const AI_POWERS: AIPower[] = RAW_AI_POWERS.map((p) => {
  const baseCategory = LEGACY_CATEGORY_TO_EL_CATEGORY[p.category];
  const extraCategories = MANUAL_CATEGORY_ADDITIONS[p.id] || [];
  const categories = baseCategory
    ? Array.from(new Set([baseCategory, ...extraCategories]))
    : [];

  return {
    ...p,
    drawingUrl: DRAWING_BY_ID[p.id] || '/el-drawings/1-2-4-all.svg',
    categories,
    tags: LEGACY_TAG_ADDITIONS[p.id],
    needsCategoryReview: categories.length === 0 ? true : undefined,
  };
});

// Alias export for explicit domain clarity
export const LIBERATING_STRUCTURES = AI_POWERS;
