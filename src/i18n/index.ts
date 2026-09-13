import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const ecocycleTranslations = {
  'pt-BR': {
    gestation: 'Gestação',
    birth: 'Nascimento',
    maturity: 'Maturidade',
    creativeDestruction: 'Destruição Criativa',
    povertyTrap: 'Armadilha da Pobreza (Escassez)',
    rigidityTrap: 'Armadilha da Rigidez',
  },
  es: {
    gestation: 'Gestación',
    birth: 'Nacimiento',
    maturity: 'Madurez',
    creativeDestruction: 'Destrucción Creativa',
    povertyTrap: 'Trampa de la Pobreza (Escasez)',
    rigidityTrap: 'Trampa de la Rigidez',
  },
  en: {
    gestation: 'Gestation',
    birth: 'Birth',
    maturity: 'Maturity',
    creativeDestruction: 'Creative Destruction',
    povertyTrap: 'Poverty Trap (Scarcity)',
    rigidityTrap: 'Rigidity Trap',
  },
} as const;

export const resources = {
  'pt-BR': {
    translation: {
      app: {
        title: 'Ordem das Estruturas Libertadoras',
        subtitle: 'Facilitação com Ecocycle Planning & Strings',
      },
      ranks: {
        padawan: 'Padawan',
        jedi: 'Jedi',
        yoda: 'Yoda',
        padawanRole: 'Strings Básicas (1 EL Chave)',
        jediRole: 'Encadeamentos Duplos de Estruturas',
        yodaRole: 'Arquitetura Estratégica de Strings',
      },
      ecocycle: {
        domainTitle: 'DOMÍNIO NO ECOCYCLE & STRINGS',
        evolutionTitle: 'EVOLUÇÃO COMO FACILITADOR',
        gestation: 'Gestação',
        birth: 'Nascimento',
        maturity: 'Maturidade',
        creativeDestruction: 'Destruição Criativa',
        povertyTrap: 'Armadilha da Pobreza (Escassez)',
        rigidityTrap: 'Armadilha da Rigidez',
      },
      admin: {
        title: 'Painel Administrativo',
        resetProgress: 'ZERAR PROGRESSO',
        deleteUser: 'EXCLUIR USUÁRIO',
        confirmReset: 'Tem certeza que deseja zerar o progresso deste participante? Todo o XP, histórico e quizzes concluídos serão reiniciados para o nível Padawan.',
        confirmDelete: 'Tem certeza que deseja EXCLUIR permanentemente este usuário da plataforma? Esta ação não pode ser desfeita.',
        userTableTitle: 'Participantes Cadastrados',
        participant: 'Participante',
        accumulatedXp: 'XP Acumulado',
        rank: 'Nível / Rank',
        company: 'Empresa / Turma',
        role: 'Função',
        actions: 'Ações',
      },
      common: {
        confirm: 'Confirmar',
        cancel: 'Cancelar',
        success: 'Sucesso',
        error: 'Erro',
        energy: 'Energia',
        accuracy: 'Assertividade',
      },
    },
  },
  es: {
    translation: {
      app: {
        title: 'Orden de las Estructuras Liberadoras',
        subtitle: 'Facilitación con Ecocycle Planning & Strings',
      },
      ranks: {
        padawan: 'Padawan',
        jedi: 'Jedi',
        yoda: 'Yoda',
        padawanRole: 'Strings Básicas (1 EL Clave)',
        jediRole: 'Encadenamientos Dobles de Estructuras',
        yodaRole: 'Arquitectura Estratégica de Strings',
      },
      ecocycle: {
        domainTitle: 'DOMINIO EN ECOCYCLE & STRINGS',
        evolutionTitle: 'EVOLUCIÓN COMO FACILITADOR',
        gestation: 'Gestación',
        birth: 'Nacimiento',
        maturity: 'Madurez',
        creativeDestruction: 'Destrucción Creativa',
        povertyTrap: 'Trampa de la Pobreza (Escasez)',
        rigidityTrap: 'Trampa de la Rigidez',
      },
      admin: {
        title: 'Panel Administrativo',
        resetProgress: 'REINICIAR PROGRESO',
        deleteUser: 'ELIMINAR USUARIO',
        confirmReset: '¿Está seguro de que desea reiniciar el progreso de este participante? Todo el XP, historial y cuestionarios completados volverán al nivel Padawan.',
        confirmDelete: '¿Está seguro de que desea ELIMINAR permanentemente a este usuario? Esta acción no se puede deshacer.',
        userTableTitle: 'Participantes Registrados',
        participant: 'Participante',
        accumulatedXp: 'XP Acumulado',
        rank: 'Nivel / Rango',
        company: 'Empresa / Grupo',
        role: 'Rol',
        actions: 'Acciones',
      },
      common: {
        confirm: 'Confirmar',
        cancel: 'Cancelar',
        success: 'Éxito',
        error: 'Error',
        energy: 'Energía',
        accuracy: 'Asertividad',
      },
    },
  },
  en: {
    translation: {
      app: {
        title: 'Liberating Structures Order',
        subtitle: 'Facilitation with Ecocycle Planning & Strings',
      },
      ranks: {
        padawan: 'Padawan',
        jedi: 'Jedi',
        yoda: 'Yoda',
        padawanRole: 'Basic Strings (1 Key LS)',
        jediRole: 'Dual Structure Combinations',
        yodaRole: 'Strategic String Architecture',
      },
      ecocycle: {
        domainTitle: 'MASTERY IN ECOCYCLE & STRINGS',
        evolutionTitle: 'EVOLUTION AS A FACILITATOR',
        gestation: 'Gestation',
        birth: 'Birth',
        maturity: 'Maturity',
        creativeDestruction: 'Creative Destruction',
        povertyTrap: 'Poverty Trap (Scarcity)',
        rigidityTrap: 'Rigidity Trap',
      },
      admin: {
        title: 'Admin Panel',
        resetProgress: 'RESET PROGRESS',
        deleteUser: 'DELETE USER',
        confirmReset: 'Are you sure you want to reset this participant\'s progress? All XP, history, and completed quizzes will return to Padawan level.',
        confirmDelete: 'Are you sure you want to permanently DELETE this user? This action cannot be undone.',
        userTableTitle: 'Registered Participants',
        participant: 'Participant',
        accumulatedXp: 'Accumulated XP',
        rank: 'Rank / Level',
        company: 'Company / Cohort',
        role: 'Role',
        actions: 'Actions',
      },
      common: {
        confirm: 'Confirm',
        cancel: 'Cancel',
        success: 'Success',
        error: 'Error',
        energy: 'Energy',
        accuracy: 'Accuracy',
      },
    },
  },
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
