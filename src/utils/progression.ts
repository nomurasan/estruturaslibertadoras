import { RANKS } from '../constants';
import { Challenge, EcocycleConcept, QuizAttemptRecord, RankInfo, UserProfile } from '../types';

export { RANKS };
export type { RankInfo };
export type EcocycleDomainStat = EcocycleConceptStat;

/**
 * Calculates total XP as the sum of best scores per level:
 * totalXP = bestScores.PADAWAN + bestScores.JEDI + bestScores.YODA
 */
export function calculateTotalXP(bestScores?: {
  PADAWAN?: number;
  JEDI?: number;
  YODA?: number;
}): number {
  if (!bestScores) return 0;
  const p = Number(bestScores.PADAWAN) || 0;
  const j = Number(bestScores.JEDI) || 0;
  const y = Number(bestScores.YODA) || 0;
  return p + j + y;
}

/**
 * Updates best score for a specific level.
 * If new score is lower, keeps existing best score.
 * If new score is higher, updates and recalculates total XP.
 */
export function recordQuizAttemptScore(
  currentBestScores: { PADAWAN?: number; JEDI?: number; YODA?: number } | undefined,
  level: 'PADAWAN' | 'JEDI' | 'YODA',
  sessionScore: number
): {
  bestScores: { PADAWAN: number; JEDI: number; YODA: number };
  totalXP: number;
  isNewBest: boolean;
} {
  const currentBest = {
    PADAWAN: Number(currentBestScores?.PADAWAN) || 0,
    JEDI: Number(currentBestScores?.JEDI) || 0,
    YODA: Number(currentBestScores?.YODA) || 0
  };

  const previousBestForLevel = currentBest[level];
  const isNewBest = sessionScore > previousBestForLevel;
  const updatedBestForLevel = isNewBest ? sessionScore : previousBestForLevel;

  const bestScores = {
    ...currentBest,
    [level]: updatedBestForLevel
  };

  const totalXP = calculateTotalXP(bestScores);

  return {
    bestScores,
    totalXP,
    isNewBest
  };
}

/**
 * Checks if a level is unlocked.
 * PADAWAN: always unlocked.
 * JEDI: unlocked ONLY when PADAWAN is completed (100%).
 * YODA: unlocked ONLY when JEDI is completed (100%).
 * NEVER uses XP to unlock levels!
 */
export function isLevelUnlocked(
  level: 'PADAWAN' | 'JEDI' | 'YODA',
  completedQuizzes: string[] = []
): boolean {
  if (level === 'PADAWAN') return true;
  if (level === 'JEDI') {
    return completedQuizzes.includes('PADAWAN');
  }
  if (level === 'YODA') {
    return completedQuizzes.includes('JEDI');
  }
  return false;
}

/**
 * Rank is derived strictly from completedQuizzes.
 * NEVER promoted to Jedi or Yoda simply by accumulating XP.
 * If user has only completed Padawan: rank continues PADAWAN.
 * If user has completed Jedi: rank is JEDI.
 * If user has completed Yoda: rank is YODA (Mestre Yoda).
 */
export function getRank(
  target?: string[] | { completedQuizzes?: string[]; xp?: number } | number
): RankInfo {
  let completed: string[] = [];

  if (Array.isArray(target)) {
    completed = target;
  } else if (target && typeof target === 'object' && 'completedQuizzes' in target) {
    completed = target.completedQuizzes || [];
  }

  if (completed.includes('JEDI') || completed.includes('YODA')) {
    return RANKS.YODA;
  }
  if (completed.includes('PADAWAN')) {
    return RANKS.JEDI;
  }
  return RANKS.PADAWAN;
}

/**
 * Normalizes user profile to migrate legacy data:
 * - If missing bestScores, derives safe bestScores from completedQuizzes and xp
 * - Recalculates total xp
 * - Rank remains derived from completedQuizzes
 */
export function normalizeUserProfile(profile: Partial<UserProfile>): Partial<UserProfile> {
  const completed = profile.completedQuizzes || [];
  let bestScores = profile.bestScores ? { ...profile.bestScores } : undefined;

  if (!bestScores) {
    // Migration: derive bestScores without infinite repetition
    bestScores = {
      PADAWAN: completed.includes('PADAWAN') ? Math.min(profile.xp || 14000, 15000) : Math.min(profile.xp || 0, 15000),
      JEDI: completed.includes('JEDI') ? 14000 : 0,
      YODA: completed.includes('YODA') ? 14000 : 0
    };
  }

  const normalizedXP = calculateTotalXP(bestScores);

  return {
    ...profile,
    bestScores,
    xp: normalizedXP,
    completedQuizzes: completed
  };
}

export interface EcocycleConceptStat {
  concept: EcocycleConcept;
  labelPt: string;
  labelEs: string;
  labelEn: string;
  isTrap: boolean;
  evaluated: boolean;
  accuracy: number;
  correctAnswers: number;
  totalAnswers: number;
}

export const ECOCYCLE_CONCEPTS_CONFIG: {
  concept: EcocycleConcept;
  labelPt: string;
  labelEs: string;
  labelEn: string;
  isTrap: boolean;
}[] = [
  { concept: 'GESTAÇÃO', labelPt: 'Gestação', labelEs: 'Gestación', labelEn: 'Gestation', isTrap: false },
  { concept: 'NASCIMENTO', labelPt: 'Nascimento', labelEs: 'Nacimiento', labelEn: 'Birth', isTrap: false },
  { concept: 'MATURIDADE', labelPt: 'Maturidade', labelEs: 'Madurez', labelEn: 'Maturity', isTrap: false },
  { concept: 'DESTRUIÇÃO_CRIATIVA', labelPt: 'Destruição Criativa', labelEs: 'Destrucción Creativa', labelEn: 'Creative Destruction', isTrap: false },
  { concept: 'ARMADILHA_DA_POBREZA', labelPt: 'Armadilha da Pobreza', labelEs: 'Trampa de la Pobreza', labelEn: 'Poverty Trap', isTrap: true },
  { concept: 'ARMADILHA_DA_RIGIDEZ', labelPt: 'Armadilha da Rigidez', labelEs: 'Trampa de la Rigidez', labelEn: 'Rigidity Trap', isTrap: true },
];

/**
 * Calculates Ecocycle 4 Stages + 2 Traps domain stats.
 * Uses only questions actually answered related to that concept.
 * If 0 questions answered, returns evaluated: false.
 * Prevents infinite repetitions from inflating scores by considering distinct challenges or actual attempts.
 */
export function calculateEcocycleDomainStats(
  history: QuizAttemptRecord[] = [],
  challenges: Challenge[] = []
): EcocycleConceptStat[] {
  // Map challengeId to concepts
  const challengeConceptMap = new Map<number, EcocycleConcept[]>();
  challenges.forEach(c => {
    if (c.ecocycleConcepts && c.ecocycleConcepts.length > 0) {
      challengeConceptMap.set(c.id, c.ecocycleConcepts);
    }
  });

  return ECOCYCLE_CONCEPTS_CONFIG.map(cfg => {
    let correct = 0;
    let total = 0;

    // Distinct challenge evaluation to avoid repetition inflation
    const latestAttemptByChallenge = new Map<number, QuizAttemptRecord>();
    history.forEach(att => {
      latestAttemptByChallenge.set(att.challengeId, att);
    });

    latestAttemptByChallenge.forEach(att => {
      const concepts = att.ecocycleConcepts || challengeConceptMap.get(att.challengeId) || [];
      if (concepts.includes(cfg.concept)) {
        total += 1;
        if (att.isCorrect) {
          correct += 1;
        }
      }
    });

    const evaluated = total > 0;
    const accuracy = evaluated ? Math.round((correct / total) * 100) : 0;

    return {
      ...cfg,
      evaluated,
      accuracy,
      correctAnswers: correct,
      totalAnswers: total
    };
  });
}

export interface FacilitatorEvolutionStat {
  level: 'PADAWAN' | 'JEDI' | 'YODA';
  rolePt: string;
  roleEs: string;
  roleEn: string;
  descriptionPt: string;
  descriptionEs: string;
  descriptionEn: string;
  evaluated: boolean;
  accuracy: number;
  completed: boolean;
}

export function calculateFacilitatorEvolution(
  history: QuizAttemptRecord[] = [],
  completedQuizzes: string[] = []
): FacilitatorEvolutionStat[] {
  const levels: {
    level: 'PADAWAN' | 'JEDI' | 'YODA';
    rolePt: string;
    roleEs: string;
    roleEn: string;
    descriptionPt: string;
    descriptionEs: string;
    descriptionEn: string;
  }[] = [
    {
      level: 'PADAWAN',
      rolePt: 'RECONHECER',
      roleEs: 'RECONOCER',
      roleEn: 'RECOGNIZE',
      descriptionPt: 'Reconhece ELs aderentes aos desafios do Ecocycle.',
      descriptionEs: 'Reconoce ELs afines a los desafíos del Ecocycle.',
      descriptionEn: 'Recognizes LS suited to Ecocycle challenges.'
    },
    {
      level: 'JEDI',
      rolePt: 'COMBINAR',
      roleEs: 'COMBINAR',
      roleEn: 'COMBINE',
      descriptionPt: 'Combina ELs em Strings coerentes com o propósito.',
      descriptionEs: 'Combina ELs en Strings coherentes con el propósito.',
      descriptionEn: 'Combines LS into purpose-aligned Strings.'
    },
    {
      level: 'YODA',
      rolePt: 'ARQUITETAR',
      roleEs: 'ARQUITECTAR',
      roleEn: 'ARCHITECT',
      descriptionPt: 'Arquitetura experiências completas de facilitação.',
      descriptionEs: 'Arquitectura experiencias completas de facilitación.',
      descriptionEn: 'Architects complete facilitation experiences.'
    }
  ];

  return levels.map(lvl => {
    const attempts = history.filter(h => h.level === lvl.level);
    const completed = completedQuizzes.includes(lvl.level);
    const evaluated = attempts.length > 0 || completed;
    const correct = attempts.filter(a => a.isCorrect).length;
    const accuracy = attempts.length > 0 ? Math.round((correct / attempts.length) * 100) : (completed ? 100 : 0);

    return {
      ...lvl,
      evaluated,
      accuracy,
      completed
    };
  });
}
