// Taxonomia principal (Matchmaker/Deck) das 43 Estruturas Libertadoras.
// Uma mesma EL pode pertencer a mais de uma categoria (ver AIPower.categories).

export type ELCategory =
  | "PLANEJAR"
  | "DAR_PEDIR_AJUDA"
  | "ANALISAR_DIAGNOSTICAR_REFLETIR"
  | "REVELAR_GERAR_MELHORAR"
  | "COMPARTILHAR_DISSEMINAR"
  | "DESENVOLVER_ESTRATEGIAS";

export interface ELCategoryConfig {
  label: string;
  shortLabel: string;
  icon: string;
  description: string;
  en: { label: string; shortLabel: string };
  es: { label: string; shortLabel: string };
}

export const EL_CATEGORY_ORDER: ELCategory[] = [
  "PLANEJAR",
  "DAR_PEDIR_AJUDA",
  "ANALISAR_DIAGNOSTICAR_REFLETIR",
  "REVELAR_GERAR_MELHORAR",
  "COMPARTILHAR_DISSEMINAR",
  "DESENVOLVER_ESTRATEGIAS",
];

export const EL_CATEGORIES: Record<ELCategory, ELCategoryConfig> = {
  PLANEJAR: {
    label: "Planejar",
    shortLabel: "Planejar",
    icon: "ClipboardList",
    description:
      "Estruturas voltadas a organizar, priorizar e planejar o portfólio ou os próximos passos de uma iniciativa.",
    en: { label: "Plan", shortLabel: "Plan" },
    es: { label: "Planificar", shortLabel: "Planificar" },
  },
  DAR_PEDIR_AJUDA: {
    label: "Dar ou Pedir Ajuda",
    shortLabel: "Dar/Pedir Ajuda",
    icon: "HandHeart",
    description:
      "Estruturas de consultoria entre pares, apoio mútuo e pedidos/ofertas de ajuda entre pessoas ou equipes.",
    en: { label: "Give or Ask for Help", shortLabel: "Give/Ask Help" },
    es: { label: "Dar o Pedir Ayuda", shortLabel: "Dar/Pedir Ayuda" },
  },
  ANALISAR_DIAGNOSTICAR_REFLETIR: {
    label: "Analisar, Diagnosticar ou Refletir",
    shortLabel: "Analisar/Refletir",
    icon: "Search",
    description:
      "Estruturas para diagnosticar causas, revelar padrões ocultos e refletir sobre a situação atual.",
    en: {
      label: "Analyze, Diagnose or Reflect",
      shortLabel: "Analyze/Reflect",
    },
    es: {
      label: "Analizar, Diagnosticar o Reflexionar",
      shortLabel: "Analizar/Reflexionar",
    },
  },
  REVELAR_GERAR_MELHORAR: {
    label: "Revelar, Gerar, Melhorar Ideias ou Soluções",
    shortLabel: "Gerar/Melhorar",
    icon: "Sparkles",
    description:
      "Estruturas para gerar, revelar ou aperfeiçoar ideias, protótipos e soluções novas.",
    en: {
      label: "Reveal, Generate or Improve Ideas/Solutions",
      shortLabel: "Generate/Improve",
    },
    es: {
      label: "Revelar, Generar o Mejorar Ideas/Soluciones",
      shortLabel: "Generar/Mejorar",
    },
  },
  COMPARTILHAR_DISSEMINAR: {
    label: "Compartilhar ou Disseminar Ideias",
    shortLabel: "Compartilhar",
    icon: "Share2",
    description:
      "Estruturas para conectar pessoas e disseminar rapidamente ideias, experiências ou boas práticas.",
    en: { label: "Share or Disseminate Ideas", shortLabel: "Share" },
    es: { label: "Compartir o Diseminar Ideas", shortLabel: "Compartir" },
  },
  DESENVOLVER_ESTRATEGIAS: {
    label: "Desenvolver Estratégias",
    shortLabel: "Estratégias",
    icon: "Target",
    description:
      "Estruturas voltadas a propósito, governança e construção de estratégias de médio/longo prazo.",
    en: { label: "Develop Strategies", shortLabel: "Strategies" },
    es: { label: "Desarrollar Estrategias", shortLabel: "Estrategias" },
  },
};
