import { describe, it, expect } from 'vitest';
import {
  isLevelUnlocked,
  getRank,
  calculateTotalXP,
  recordQuizAttemptScore,
  normalizeUserProfile,
  RANKS,
} from './progression';
import { UserProfile } from '../types';

describe('Logic and Progression Unit Tests (10 tests)', () => {
  // Test 1: PADAWAN is unlocked by default
  it('1. PADAWAN is unlocked by default for any user', () => {
    expect(isLevelUnlocked('PADAWAN', [])).toBe(true);
    expect(isLevelUnlocked('PADAWAN', ['JEDI'])).toBe(true);
  });

  // Test 2: JEDI is locked when PADAWAN is not completed
  it('2. JEDI is locked when PADAWAN is not in completedQuizzes', () => {
    expect(isLevelUnlocked('JEDI', [])).toBe(false);
  });

  // Test 3: JEDI unlocks when PADAWAN is 100% completed
  it('3. JEDI unlocks when PADAWAN is in completedQuizzes', () => {
    expect(isLevelUnlocked('JEDI', ['PADAWAN'])).toBe(true);
  });

  // Test 4: YODA is locked when JEDI is not completed
  it('4. YODA is locked when JEDI is not in completedQuizzes', () => {
    expect(isLevelUnlocked('YODA', [])).toBe(false);
    expect(isLevelUnlocked('YODA', ['PADAWAN'])).toBe(false);
  });

  // Test 5: YODA unlocks when JEDI is completed
  it('5. YODA unlocks when JEDI is in completedQuizzes', () => {
    expect(isLevelUnlocked('YODA', ['PADAWAN', 'JEDI'])).toBe(true);
    expect(isLevelUnlocked('YODA', ['JEDI'])).toBe(true);
  });

  // Test 6: getRank derives strictly from completedQuizzes
  it('6. getRank derives strictly from completedQuizzes, not XP', () => {
    expect(getRank([]).name).toBe('Padawan');
    expect(getRank(['PADAWAN']).name).toBe('Jedi');
    expect(getRank(['PADAWAN', 'JEDI']).name).toBe('Mestre Yoda');
    expect(getRank(['JEDI']).name).toBe('Mestre Yoda');
  });

  // Test 7: XP calculation is the sum of bestScores per level
  it('7. calculateTotalXP calculates the sum of best scores across levels', () => {
    const scores = {
      PADAWAN: 14000,
      JEDI: 13500,
      YODA: 15000
    };
    expect(calculateTotalXP(scores)).toBe(42500);
    expect(calculateTotalXP({ PADAWAN: 10000 })).toBe(10000);
    expect(calculateTotalXP(undefined)).toBe(0);
  });

  // Test 8: recordQuizAttemptScore updates when new score is higher
  it('8. recordQuizAttemptScore updates best score when new score is higher', () => {
    const initial = { PADAWAN: 10000, JEDI: 0, YODA: 0 };
    const result = recordQuizAttemptScore(initial, 'PADAWAN', 12500);
    expect(result.isNewBest).toBe(true);
    expect(result.bestScores.PADAWAN).toBe(12500);
    expect(result.totalXP).toBe(12500);
  });

  // Test 9: recordQuizAttemptScore keeps existing best when new score is lower
  it('9. recordQuizAttemptScore keeps existing best when new score is lower', () => {
    const initial = { PADAWAN: 14000, JEDI: 12000, YODA: 0 };
    const result = recordQuizAttemptScore(initial, 'PADAWAN', 8000);
    expect(result.isNewBest).toBe(false);
    expect(result.bestScores.PADAWAN).toBe(14000);
    expect(result.totalXP).toBe(26000);
  });

  // Test 10: normalizeUserProfile guarantees data integrity and progression alignment
  it('10. normalizeUserProfile validates and repairs user scores and completed status', () => {
    const rawProfile: UserProfile = {
      userId: 'user-test-123',
      email: 'test@example.com',
      companyId: 'Empresa A',
      createdAt: '2025-01-01',
      lastActive: '2025-01-01',
      unlockedPowers: [],
      currentMissionIndex: 0,
      missionProgress: {},
      xp: 0,
      completedQuizzes: ['PADAWAN'],
      bestScores: { PADAWAN: 14000, JEDI: 0, YODA: 0 }
    };
    const normalized = normalizeUserProfile(rawProfile);
    expect(normalized.xp).toBe(14000);
    expect(normalized.completedQuizzes).toContain('PADAWAN');
    expect(getRank(normalized.completedQuizzes).name).toBe('Jedi');
  });
});
