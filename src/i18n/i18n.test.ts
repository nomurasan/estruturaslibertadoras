import { describe, it, expect } from 'vitest';
import { ecocycleTranslations, resources } from './index';
import { ECOCYCLE_CONCEPTS_CONFIG } from '../utils/progression';

describe('i18n and Consistency Unit Tests (10 tests)', () => {
  // Test 1: Ecocycle translations exist for PT-BR, ES, and EN
  it('1. All 3 required language packs (pt-BR, es, en) are defined in ecocycleTranslations', () => {
    expect(ecocycleTranslations).toHaveProperty('pt-BR');
    expect(ecocycleTranslations).toHaveProperty('es');
    expect(ecocycleTranslations).toHaveProperty('en');
  });

  // Test 2: Official Liberating Structures name "Ecocycle Planning" is preserved in all languages without translation
  it('2. Official Liberating Structure name "Ecocycle Planning" is preserved in all languages', () => {
    const ptSubtitle = resources['pt-BR'].translation.app.subtitle;
    const esSubtitle = resources['es'].translation.app.subtitle;
    const enSubtitle = resources['en'].translation.app.subtitle;

    expect(ptSubtitle).toContain('Ecocycle Planning');
    expect(esSubtitle).toContain('Ecocycle Planning');
    expect(enSubtitle).toContain('Ecocycle Planning');
  });

  // Test 3: Official Liberating Structures names like "Strings" are preserved across locales
  it('3. Official term "Strings" is preserved in all language packs', () => {
    expect(resources['pt-BR'].translation.app.subtitle).toContain('Strings');
    expect(resources['es'].translation.app.subtitle).toContain('Strings');
    expect(resources['en'].translation.app.subtitle).toContain('Strings');
  });

  // Test 4: Gestation is correctly translated
  it('4. Gestation is accurately localized across pt-BR, es, and en', () => {
    expect(ecocycleTranslations['pt-BR'].gestation).toBe('Gestação');
    expect(ecocycleTranslations['es'].gestation).toBe('Gestación');
    expect(ecocycleTranslations['en'].gestation).toBe('Gestation');
  });

  // Test 5: Birth is correctly translated
  it('5. Birth is accurately localized across pt-BR, es, and en', () => {
    expect(ecocycleTranslations['pt-BR'].birth).toBe('Nascimento');
    expect(ecocycleTranslations['es'].birth).toBe('Nacimiento');
    expect(ecocycleTranslations['en'].birth).toBe('Birth');
  });

  // Test 6: Maturity is correctly translated
  it('6. Maturity is accurately localized across pt-BR, es, and en', () => {
    expect(ecocycleTranslations['pt-BR'].maturity).toBe('Maturidade');
    expect(ecocycleTranslations['es'].maturity).toBe('Madurez');
    expect(ecocycleTranslations['en'].maturity).toBe('Maturity');
  });

  // Test 7: Creative Destruction is correctly translated
  it('7. Creative Destruction is accurately localized across pt-BR, es, and en', () => {
    expect(ecocycleTranslations['pt-BR'].creativeDestruction).toBe('Destruição Criativa');
    expect(ecocycleTranslations['es'].creativeDestruction).toBe('Destrucción Creativa');
    expect(ecocycleTranslations['en'].creativeDestruction).toBe('Creative Destruction');
  });

  // Test 8: Poverty Trap is correctly translated
  it('8. Poverty Trap is accurately localized with scarcity clarification', () => {
    expect(ecocycleTranslations['pt-BR'].povertyTrap).toContain('Armadilha da Pobreza');
    expect(ecocycleTranslations['es'].povertyTrap).toContain('Trampa de la Pobreza');
    expect(ecocycleTranslations['en'].povertyTrap).toContain('Poverty Trap');
  });

  // Test 9: Rigidity Trap is correctly translated
  it('9. Rigidity Trap is accurately localized across pt-BR, es, and en', () => {
    expect(ecocycleTranslations['pt-BR'].rigidityTrap).toBe('Armadilha da Rigidez');
    expect(ecocycleTranslations['es'].rigidityTrap).toBe('Trampa de la Rigidez');
    expect(ecocycleTranslations['en'].rigidityTrap).toBe('Rigidity Trap');
  });

  // Test 10: All 6 concepts in ECOCYCLE_CONCEPTS_CONFIG contain labels for pt, es, and en
  it('10. All 6 concepts in ECOCYCLE_CONCEPTS_CONFIG contain PT, ES, and EN metadata labels', () => {
    expect(ECOCYCLE_CONCEPTS_CONFIG).toHaveLength(6);
    ECOCYCLE_CONCEPTS_CONFIG.forEach(item => {
      expect(item.labelPt).toBeTruthy();
      expect(item.labelEs).toBeTruthy();
      expect(item.labelEn).toBeTruthy();
    });
  });
});
