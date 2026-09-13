export type GameState =
  | 'home'
  | 'level-selection'
  | 'game'
  | 'deck'
  | 'results'
  | 'dashboards'
  | 'admin'
  | 'autoconhecimento';

export interface Company {
  id: string;
  name: string;
  ownerId?: string;
  createdAt: any;
  logoUrl?: string;
  domain?: string;
  accessCode?: string;
}

export interface UserProfile {
  userId: string;
  email: string;
  xp: number;
  unlockedPowers: string[];
  currentMissionIndex: number;
  missionProgress: any;
  companyId?: string;
  isAdmin?: boolean;
  lastActive: any;
  createdAt: any;
  surveyCompleted?: boolean;
  skillsSurvey?: Record<string, { current: number; target: number }>;
  completedQuizzes?: string[];
  quizStats?: QuizStats;
}

export interface QuizAttemptRecord {
  id: string;
  challengeId: number;
  challengeTitle: string;
  level: 'PADAWAN' | 'JEDI' | 'YODA';
  isCorrect: boolean;
  energyChange: number;
  energyAfter: number;
  timestamp: number;
  structuresInvolved?: string[];
}

export interface QuizStats {
  energy: number;
  totalAnswered: number;
  totalCorrect: number;
  totalIncorrect: number;
  currentStreak: number;
  bestStreak: number;
  history: QuizAttemptRecord[];
  levelStats?: Record<string, { answered: number; correct: number }>;
}

export interface RankInfo {
  name: string;
  image: string;
  description: string;
  color: string;
}

export interface AIUsageAudit {
  id?: string;
  userId: string;
  companyId: string;
  provider: string;
  model: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  estimatedCost: number;
  endpoint: string;
  createdAt: string;
}

export interface RecommendedSkill {
  skillId: number;
  weight: number;
  role: 'primary' | 'secondary';
}

export interface Challenge {
  id: number;
  level: 'PADAWAN' | 'JEDI' | 'YODA';
  title: string;
  scenario: string;
  correctSkillIds: number[];
  incorrectSkillIds: number[];
  recommendedSkills?: RecommendedSkill[];
  explanation: string;

  // Pedagogical 4-Block Feedback Fields
  bestChoiceName?: string;          // 1. Melhor escolha (Nome da EL ou String)
  whyItWorks?: string;              // 2. Por que funciona? (Relação desafio vs estrutura)
  scenarioClue?: string;            // 3. Pista do cenário (Frase-chave / conceito)
  inStringRole?: string;            // Papel na String (Antes / Durante / Depois do Ecocycle)
  stringSequence?: string;          // Sequência visual sugerida (ex: TRIZ ➔ Ecocycle ➔ 15%)
  anotherPossibility?: string;      // 4. Outra possibilidade (EL complementar quando aplicável)
  ecocyclePhase?: string;           // Ponto do Ecociclo (ex: Gestação, Armadilha da Pobreza, etc.)
}

export interface AIPower {
  id: string;
  category: string;
  title: string;
  englishTitle?: string;
  objective: string;
  applicationContext: string;
  practicalExample: string;
  expectedBenefits: string[];
  icon: string;
  image: string;
  
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

  // Legacy fields preserved for complete backward compatibility
  shortDescription?: string;
  fullDescription?: string;
  detailedDescription?: string;
  detailedExamples?: { title: string; description: string }[];
  cases?: string[];
}

export interface TeamMaturityMetric {
  subject: string;
  A: number;
}

export interface TeamSkillDist {
  name: string;
  value: number;
}

export interface TeamEvolutionItem {
  name: string;
  xp: number;
}

export interface TopSkillItem {
  id?: string;
  name: string;
  count: number;
}

export interface TeamQuizStats {
  collectiveEnergy: number; // 0 - 100
  totalAnswered: number;
  totalCorrect: number;
  totalIncorrect: number;
  accuracyRate: number; // 0 - 100
  activeQuizParticipants: number;
  evolution: Array<{
    name: string;
    energy: number;
    accuracy: number;
    totalAnswers: number;
  }>;
  levelMastery: Array<{
    level: 'PADAWAN' | 'JEDI' | 'YODA';
    label: string;
    accuracy: number;
    completedUsers: number;
    totalUsers: number;
  }>;
  structurePerformance: Array<{
    id: string;
    name: string;
    correctCount: number;
    incorrectCount: number;
    accuracy: number;
    category: string;
  }>;
  topParticipants: Array<{
    userId: string;
    email: string;
    energy: number;
    accuracy: number;
    totalCorrect: number;
    completedLevels: string[];
    xp: number;
  }>;
}

export interface TeamStats {
  totalXp: number;
  teamMaturity: TeamMaturityMetric[];
  teamSkillDist: TeamSkillDist[];
  teamEvolution: TeamEvolutionItem[];
  topSkills: TopSkillItem[];
  quizStats?: TeamQuizStats;
}
