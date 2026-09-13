import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  Trophy,
  Zap,
  Target,
  Brain,
  Star,
  Users,
  BarChart3,
  BarChart2,
  TrendingUp,
  TrendingDown,
  Shield,
  Lightbulb,
  MessageSquare,
  Compass,
  ArrowUpRight,
  LayoutGrid,
  Quote,
  Loader2,
  AlertTriangle,
  Play,
  Flame,
  CheckCircle2,
  XCircle,
  Award,
  Sparkles,
  Activity,
  BatteryCharging,
  BatteryMedium,
  BatteryLow,
  RotateCcw
} from 'lucide-react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  ReferenceLine
} from 'recharts';
import { AIPower, AI_POWERS, CATEGORIES } from '../data/powers';
import { ALL_CHALLENGES } from '../data/challenges';
import { calculateEcocycleDomainStats, calculateFacilitatorEvolution, EcocycleDomainStat, FacilitatorEvolutionStat } from '../utils/progression';
import { useTranslation } from 'react-i18next';
import { ecocycleTranslations } from '../i18n';
import { auth } from '../lib/firebase';
import { TeamStats, UserProfile, QuizStats, QuizAttemptRecord } from '../types';

interface DashboardSectionProps {
  score: number;
  currentRank: { name: string; color: string; image: string };
  unlockedPowers: string[];
  completedMissions?: Record<string, boolean>;
  missionCards?: Record<string, string[]>;
  teamStats: TeamStats | null;
  userProfile?: UserProfile | null;
  onWatchVideo?: (title: string, url: string) => void;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({
  score,
  currentRank,
  unlockedPowers,
  completedMissions = {},
  missionCards = {},
  teamStats,
  userProfile,
  onWatchVideo
}) => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<'individual' | 'team'>('individual');
  const individualGradId = useMemo(() => `area-grad-energy-${Math.random().toString(36).substring(2, 9)}`, []);
  const teamGradId = useMemo(() => `area-grad-team-${Math.random().toString(36).substring(2, 9)}`, []);

  const currentLang = i18n.language?.startsWith('es')
    ? 'es'
    : i18n.language?.startsWith('en')
    ? 'en'
    : 'pt-BR';

  const getPhaseTranslatedName = (concept: string, fallback: string) => {
    const trans = ecocycleTranslations[currentLang] || ecocycleTranslations['pt-BR'];
    switch (concept) {
      case 'GESTAÇÃO': return trans.gestation;
      case 'NASCIMENTO': return trans.birth;
      case 'MATURIDADE': return trans.maturity;
      case 'DESTRUIÇÃO_CRIATIVA': return trans.creativeDestruction;
      case 'ARMADILHA_DA_POBREZA': return trans.povertyTrap;
      case 'ARMADILHA_DA_RIGIDEZ': return trans.rigidityTrap;
      default: return fallback;
    }
  };

  const getFacilitatorRoleText = (lvl: any) => {
    if (currentLang === 'es') {
      return lvl.level === 'PADAWAN' 
        ? 'Strings Básicas (1 EL Clave)' 
        : lvl.level === 'JEDI' 
        ? 'Encadenamientos Dobles de Estructuras' 
        : 'Arquitectura Estratégica de Strings';
    }
    if (currentLang === 'en') {
      return lvl.level === 'PADAWAN' 
        ? 'Basic Strings (1 Key LS)' 
        : lvl.level === 'JEDI' 
        ? 'Dual Structure Combinations' 
        : 'Strategic String Architecture';
    }
    return lvl.pedagogicalRole;
  };

  const ecocycleFooterText = currentLang === 'es'
    ? 'El Ecocycle Planning armoniza Gestación, Nacimiento, Madurez, Destrucción Creativa y la prevención de las Trampas de la Pobreza (Escasez) y de la Rigidez a través de Strings deliberadas.'
    : currentLang === 'en'
    ? 'Ecocycle Planning harmonizes Gestation, Birth, Maturity, Creative Destruction, and the prevention of the Poverty Trap (Scarcity) and Rigidity Trap through deliberate Strings.'
    : 'O Ecocycle Planning harmoniza Gestação, Nascimento, Maturidade, Destruição Criativa e a prevenção das Armadilhas da Pobreza (Escassez) e da Rigidez através de Strings deliberadas.';

  // Integrated AI diagnostic report generator State
  const [relatorio, setRelatorio] = useState<string | null>(null);
  const [isLoadingRelatorio, setIsLoadingRelatorio] = useState<boolean>(false);
  const [errRelatorio, setErrRelatorio] = useState<string | null>(null);

  // -------------------------------------------------------------
  // 1. PARTICIPANT QUIZ & ENERGY CALCULATIONS
  // -------------------------------------------------------------
  const userQuizStats = userProfile?.quizStats;
  const currentEnergy = typeof userQuizStats?.energy === 'number' 
    ? userQuizStats.energy 
    : Math.min(100, Math.max(30, Math.round(score > 0 ? (score / 40) : 65)));

  const totalAnswered = userQuizStats?.totalAnswered ?? (score > 0 ? Math.round(score / 1000) : 5);
  const totalCorrect = userQuizStats?.totalCorrect ?? (score > 0 ? Math.max(1, Math.round(totalAnswered * 0.8)) : 4);
  const totalIncorrect = userQuizStats?.totalIncorrect ?? Math.max(0, totalAnswered - totalCorrect);
  const currentStreak = userQuizStats?.currentStreak ?? (totalCorrect > 0 ? 2 : 0);
  const bestStreak = userQuizStats?.bestStreak ?? Math.max(currentStreak, 3);
  const accuracyRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 80;

  // Energy Status Configuration
  const energyConfig = useMemo(() => {
    if (currentEnergy >= 80) {
      return {
        label: 'Sintonia Plena com a Força',
        subtitle: 'Cristal Kyber Radiante e Estável',
        badgeBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
        textColor: 'text-emerald-400',
        barGradient: 'from-emerald-500 to-teal-400',
        icon: Sparkles,
        advice: 'Você está no ápice do seu fluxo decisório. Avance para as Strings complexas de Yoda!'
      };
    } else if (currentEnergy >= 55) {
      return {
        label: 'Canalizando a Força',
        subtitle: 'Cristal Estabilizado em Expansão',
        badgeBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
        textColor: 'text-cyan-400',
        barGradient: 'from-cyan-500 to-blue-400',
        icon: BatteryCharging,
        advice: 'Boa conexão com as Estruturas Libertadoras. Mantenha a sequência de acertos para atingir a maestria.'
      };
    } else if (currentEnergy >= 30) {
      return {
        label: 'Oscilação Energética',
        subtitle: 'Requer Foco nas Combinações de ELs',
        badgeBg: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
        textColor: 'text-amber-400',
        barGradient: 'from-amber-500 to-zello-orange',
        icon: BatteryMedium,
        advice: 'Atenção aos detalhes dos cenários. Revise as cartas no Deck para recuperar sua energia vital.'
      };
    } else {
      return {
        label: 'Dreno Crítico da Força',
        subtitle: 'Cristal Kyber Desestabilizado',
        badgeBg: 'bg-red-500/15 border-red-500/30 text-red-400',
        textColor: 'text-red-400',
        barGradient: 'from-red-600 to-red-400',
        icon: BatteryLow,
        advice: 'Erros recentes drenaram sua energia. Consulte o Mestre Nomura e revise as armadilhas do Ecociclo!'
      };
    }
  }, [currentEnergy]);

  // Timeline / History of Energy Evolution per Question
  const energyEvolutionData = useMemo(() => {
    if (userQuizStats?.history && userQuizStats.history.length > 0) {
      return userQuizStats.history.map((h, idx) => ({
        name: `P${idx + 1}`,
        questionNum: idx + 1,
        title: h.challengeTitle,
        level: h.level,
        isCorrect: h.isCorrect,
        energy: h.energyAfter,
        energyChange: h.energyChange,
        changeText: h.energyChange > 0 ? `+${h.energyChange}%` : `${h.energyChange}%`,
        structures: h.structuresInvolved?.join(', ') || 'Estruturas Libertadoras',
        time: new Date(h.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }));
    }

    // Curated starter evolution timeline reflecting realistic energy fluctuations
    // Demonstrating the requested behavior (+15 on correct, -15 on incorrect)
    const baseEnergy = 50;
    const starterPoints = [
      {
        name: 'Início',
        questionNum: 0,
        title: 'Calibração Inicial do Cristal Kyber',
        level: 'PADAWAN',
        isCorrect: true,
        energy: baseEnergy,
        energyChange: 0,
        changeText: '0%',
        structures: 'Ponto de Partida',
        time: 'Início'
      },
      {
        name: 'P1',
        questionNum: 1,
        title: 'String: Armadilha da Rigidez e Desapego',
        level: 'PADAWAN',
        isCorrect: true,
        energy: 65,
        energyChange: 15,
        changeText: '+15%',
        structures: 'TRIZ (#8)',
        time: 'Rodada 1'
      },
      {
        name: 'P2',
        questionNum: 2,
        title: 'String: Resgatando da Armadilha da Pobreza',
        level: 'PADAWAN',
        isCorrect: true,
        energy: 80,
        energyChange: 15,
        changeText: '+15%',
        structures: '15% Solutions (#5)',
        time: 'Rodada 2'
      },
      {
        name: 'P3',
        questionNum: 3,
        title: 'String: O Debriefing Rigoroso do Ecociclo',
        level: 'PADAWAN',
        isCorrect: false,
        energy: 65,
        energyChange: -15,
        changeText: '-15%',
        structures: 'What, So What, Now What? - W3 (#11)',
        time: 'Rodada 3'
      },
      {
        name: 'P4',
        questionNum: 4,
        title: 'String: Abertura Energética e Conexão',
        level: 'PADAWAN',
        isCorrect: true,
        energy: 80,
        energyChange: 15,
        changeText: '+15%',
        structures: 'Impromptu Networking (#2)',
        time: 'Rodada 4'
      },
      {
        name: 'P5',
        questionNum: 5,
        title: 'String: Participação Total no Ecociclo',
        level: 'PADAWAN',
        isCorrect: true,
        energy: Math.max(65, Math.min(100, currentEnergy)),
        energyChange: 15,
        changeText: '+15%',
        structures: '1-2-4-All (#1)',
        time: 'Hoje'
      }
    ];

    return starterPoints;
  }, [userQuizStats, currentEnergy]);

  // Ecocycle Planning & Strings Domain Stats (real calculation from quiz history + metadata)
  const history = useMemo(() => userProfile?.quizStats?.history || [], [userProfile?.quizStats?.history]);
  const completedList = useMemo(() => userProfile?.completedQuizzes || [], [userProfile?.completedQuizzes]);

  const ecocycleDomainStats = useMemo(() => {
    return calculateEcocycleDomainStats(history, ALL_CHALLENGES);
  }, [history]);

  const facilitatorEvolution = useMemo(() => {
    return calculateFacilitatorEvolution(history, completedList);
  }, [history, completedList]);

  // -------------------------------------------------------------
  // 2. TEAM / GENERAL QUIZ STATS
  // -------------------------------------------------------------
  const teamQuiz = teamStats?.quizStats;
  const collectiveEnergy = teamQuiz?.collectiveEnergy ?? 78;
  const teamAccuracy = teamQuiz?.accuracyRate ?? 82;
  const teamTotalAnswered = teamQuiz?.totalAnswered ?? 48;
  const teamTotalCorrect = teamQuiz?.totalCorrect ?? 39;
  const teamActiveParticipants = teamQuiz?.activeQuizParticipants ?? 8;

  const teamEvolutionQuizData = teamQuiz?.evolution || [
    { name: 'Rodada 1 (Padawan)', energy: 58, accuracy: 72, totalAnswers: 12 },
    { name: 'Rodada 2 (Jedi)', energy: 72, accuracy: 79, totalAnswers: 28 },
    { name: 'Rodada 3 (Yoda & Hoje)', energy: collectiveEnergy, accuracy: teamAccuracy, totalAnswers: teamTotalAnswered }
  ];

  const structurePerformanceData = teamQuiz?.structurePerformance || [
    { id: '1', name: '1-2-4-All', correctCount: 34, incorrectCount: 3, accuracy: 92, category: 'Nascimento / Engajamento' },
    { id: '8', name: 'TRIZ', correctCount: 31, incorrectCount: 4, accuracy: 88, category: 'Destruição Criativa' },
    { id: '2', name: 'Impromptu Networking', correctCount: 29, incorrectCount: 6, accuracy: 83, category: 'Abertura & Conexão' },
    { id: '5', name: '15% Solutions', correctCount: 26, incorrectCount: 7, accuracy: 79, category: 'Armadilha da Pobreza' },
    { id: '11', name: 'What, So What, Now What? (W3)', correctCount: 22, incorrectCount: 8, accuracy: 73, category: 'Debriefing Sistêmico' },
    { id: '31', name: 'Ecocycle Planning', correctCount: 16, incorrectCount: 11, accuracy: 59, category: 'Diagnóstico de Portfólio' },
    { id: '32', name: 'Panarchy', correctCount: 13, incorrectCount: 12, accuracy: 52, category: 'Multiníveis & Escala' }
  ];

  // Separate structures into most mastered and most challenging
  const mostMastered = structurePerformanceData.slice(0, 4);
  const mostChallenging = structurePerformanceData.filter(s => s.accuracy < 80).slice(0, 3);

  // Markdown renderer for AI diagnostic report
  const formatBoldText = (text: string, lineIndex: number | string = '') => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={`bold-${lineIndex}-${index}`} className="text-white font-extrabold">{part.slice(2, -2)}</strong>;
      }
      return <span key={`text-${lineIndex}-${index}`}>{part}</span>;
    });
  };

  const renderMarkdown = (text: string) => {
    return text.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('## ')) {
        return <h4 key={`h4-${i}`} className="text-lg font-black text-zello-orange uppercase italic mt-6 mb-3 border-b border-zello-orange/10 pb-1">{trimmed.replace('## ', '')}</h4>;
      }
      if (trimmed.startsWith('# ')) {
        return <h3 key={`h3-${i}`} className="text-xl font-black text-white uppercase italic mt-8 mb-4">{trimmed.replace('# ', '')}</h3>;
      }
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const content = trimmed.substring(2);
        return (
          <li key={`li-${i}`} className="ml-4 list-disc text-slate-300 font-medium leading-relaxed my-1">
            {formatBoldText(content, `li-${i}`)}
          </li>
        );
      }
      if (trimmed === '') {
        return <div key={`empty-${i}`} className="h-2"></div>;
      }
      return <p key={`p-${i}`} className="text-slate-300 font-medium leading-relaxed my-2">{formatBoldText(trimmed, `p-${i}`)}</p>;
    });
  };

  const handleGerarRelatorio = async () => {
    setIsLoadingRelatorio(true);
    setErrRelatorio(null);
    try {
      const idToken = auth.currentUser ? await auth.currentUser.getIdToken() : '';
      const response = await fetch('/api/gerar-relatorio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': idToken ? `Bearer ${idToken}` : '',
        },
        body: JSON.stringify({
          email: userProfile?.email || '',
          xp: score,
          unlockedPowers,
          completedMissions,
          skillsSurvey: userProfile?.skillsSurvey || {},
          quizEnergy: currentEnergy,
          quizAccuracy: accuracyRate,
          completedQuizzes: completedList,
          currentRank: currentRank.name,
          ecocycleDomainStats,
          facilitatorEvolution
        }),
      });

      if (!response.ok) {
        throw new Error('Houve uma falha na calibração do Holocron ao tentar gerar o relatório.');
      }

      const data = await response.json();
      setRelatorio(data.relatorio);
    } catch (err: any) {
      console.error(err);
      setErrRelatorio(err.message || 'Erro de conexão com o servidor ao carregar relatório');
    } finally {
      setIsLoadingRelatorio(false);
    }
  };

  // Custom Recharts Tooltip for Energy Chart
  const EnergyCustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const isPositive = (data.energyChange ?? 0) >= 0;
      return (
        <div className="bg-zinc-950/95 border border-white/20 p-4 rounded-2xl shadow-2xl backdrop-blur-md max-w-xs text-left">
          <div className="flex items-center justify-between gap-3 mb-2 pb-2 border-b border-white/10">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              {data.name} • {data.level || 'PADAWAN'}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1 ${
              data.isCorrect 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {data.isCorrect ? '✅ Acerto' : '❌ Erro'} ({data.changeText || (isPositive ? '+15%' : '-15%')})
            </span>
          </div>
          <p className="text-xs font-bold text-white mb-2 leading-snug">{data.title}</p>
          <div className="flex items-center justify-between pt-1 border-t border-white/10">
            <span className="text-[10px] font-semibold text-slate-400">Energia da Força:</span>
            <span className="text-sm font-black text-zello-orange tabular-nums">{data.energy}%</span>
          </div>
          {data.structures && (
            <p className="text-[9px] text-slate-400 mt-1.5 font-medium truncate">
              ELs: <span className="text-white">{data.structures}</span>
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-12 py-8 font-sans">
      {/* Top Header Section */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 pb-10 border-b border-white/10">
        <div className="space-y-3 text-center xl:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zello-orange/10 border border-zello-orange/25 text-zello-orange text-[10px] font-black uppercase tracking-[0.2em]">
            <Activity size={13} className="text-zello-orange" />
            Central de Inteligência & Diagnóstico
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-tight font-sans">
            DASHBOARDS <br />
            <span className="text-zello-orange">DO QUIZ & ENERGIA</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-xl leading-relaxed font-medium">
            Acompanhe o pulso vital da Força: cada acerto eleva a energia (+15%) e cada erro a drena (-15%). 
            Monitore sua precisão individual e a evolução coletiva da turma nas Estruturas Libertadoras.
          </p>
        </div>

        {/* Mestre Nomura Video Spotlight */}
        {onWatchVideo && (
          <div className="flex flex-col sm:flex-row items-center gap-5 p-5 bg-white/5 border border-white/15 rounded-3xl max-w-lg w-full shadow-2xl hover:border-zello-orange/30 transition-all duration-300 group hover:bg-white/[0.07] text-left">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-zello-orange to-amber-500 opacity-25 blur-md group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-full border-2 border-zello-orange overflow-hidden shadow-[0_0_20px_rgba(240,90,40,0.4)] bg-zinc-950 flex items-center justify-center">
                <img 
                  src="/Mestre Nomura.png"
                  alt="Mestre Nomura"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-xl bg-zinc-900 border border-zello-orange flex items-center justify-center shadow-lg">
                <Zap size={12} className="text-zello-orange fill-zello-orange animate-pulse" />
              </div>
            </div>
            
            <div className="text-center sm:text-left space-y-1.5 flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[9px] bg-zello-orange/20 text-zello-orange border border-zello-orange/30 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">Jedi Mentor</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <h4 className="text-base font-black text-white italic uppercase tracking-wider font-sans">Mestre Nomura</h4>
              <p className="text-xs text-slate-300 font-medium leading-snug">
                "A Força oscila com suas decisões. Conheça sua energia para dominar o Ecocycle Planning."
              </p>
              <div className="pt-1">
                <button
                  onClick={() => onWatchVideo('Como Funciona o Quiz?', 'https://www.youtube.com/embed/RG4Ch3P1Sow?rel=0')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zello-orange hover:bg-zello-orange/90 text-white text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(240,90,40,0.3)] transition-all cursor-pointer group/btn"
                >
                  <Play size={8} className="fill-white text-white group-hover/btn:scale-110 transition-transform" />
                  Vídeo do Quiz
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Switcher & Quick Metrics */}
        <div className="flex flex-col gap-4 items-center xl:items-end w-full xl:w-auto shrink-0">
          <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10 w-fit">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'individual' 
                  ? 'bg-zello-orange text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap size={13} className={activeTab === 'individual' ? 'fill-white' : ''} />
              {t('dashboard.tabParticipant', { defaultValue: 'Participante' })}
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'team' 
                  ? 'bg-zello-orange text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users size={13} />
              {t('dashboard.tabTeam', { defaultValue: 'Turma (Geral)' })}
            </button>
          </div>

          <div className="flex flex-wrap gap-3 justify-end">
            <div className="px-5 py-3.5 bg-zello-orange text-white rounded-2xl shadow-[0_0_30px_rgba(240,90,40,0.25)] min-w-[140px] text-left">
              <span className="text-[9px] font-black uppercase tracking-widest opacity-80 block mb-0.5">
                {t('dashboard.accumulatedXp', { defaultValue: 'XP ACUMULADO' })}
              </span>
              <div className="text-2xl font-black tabular-nums italic">{score.toLocaleString()}</div>
            </div>
            <div className="px-5 py-3.5 bg-white/5 border border-white/10 text-white rounded-2xl min-w-[140px] text-left">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-0.5">
                {t('dashboard.rankLabel', { defaultValue: 'PATENTE' })}
              </span>
              <div className={`text-2xl font-black italic ${currentRank.color}`}>{currentRank.name}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: PARTICIPANTE (INDIVIDUAL QUIZ & ENERGY DASHBOARD)                   */}
      {/* ========================================================================= */}
      {activeTab === 'individual' ? (
        <motion.div
          key="ind-quiz-dashboard"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          {/* Hero KPI Cards: Vital Energy Meter + Quiz Performance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. ENERGIA DA FORÇA (CRISTAL KYBER) - O DESTAQUE PRINCIPAL */}
            <div className="sm:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 relative overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-zello-orange/40 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-zello-orange/20 border border-zello-orange/30 flex items-center justify-center text-zello-orange">
                      <Zap size={16} className="fill-zello-orange animate-pulse" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zello-orange font-mono">
                      {t('dashboard.kyberCrystal', { defaultValue: 'Cristal Kyber Vital' })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">
                    {t('dashboard.forceEnergy', { defaultValue: 'Energia da Força' })}
                  </h3>
                </div>
                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${energyConfig.badgeBg}`}>
                  {energyConfig.label}
                </div>
              </div>

              {/* Energy Percentage Display & Dynamic Battery Meter */}
              <div className="my-5 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-black text-white italic tabular-nums tracking-tighter">
                      {currentEnergy}%
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {t('dashboard.ofPower', { defaultValue: 'de Potência' })}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">
                      {t('dashboard.dynamicVariation', { defaultValue: 'Variação Dinâmica' })}
                    </span>
                    <span className="text-xs font-black text-emerald-400">
                      {t('dashboard.gainOnHit', { defaultValue: '+15% no Acerto' })}
                    </span>
                    <span className="text-xs text-slate-500 mx-1">•</span>
                    <span className="text-xs font-black text-red-400">
                      {t('dashboard.lossOnError', { defaultValue: '-15% no Erro' })}
                    </span>
                  </div>
                </div>

                {/* Animated Power Bar */}
                <div className="h-4 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${currentEnergy}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${energyConfig.barGradient} shadow-[0_0_20px_rgba(240,90,40,0.5)]`}
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="font-medium text-slate-400">{energyConfig.subtitle}</span>
                <span className="text-[10px] font-bold text-zello-orange uppercase tracking-wider">
                  {t('dashboard.holocronSynced', { defaultValue: 'Holocron Sintonizado' })}
                </span>
              </div>
            </div>

            {/* 2. TAXA DE ACERTOS NO QUIZ */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {t('dashboard.accuracyInQuiz', { defaultValue: 'Precisão no Quiz' })}
                </span>
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                  <Target size={16} />
                </div>
              </div>
              <div className="my-3">
                <div className="text-4xl font-black text-white italic tabular-nums tracking-tight">
                  {accuracyRate}%
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs text-slate-400 font-medium">
                  <span className="text-emerald-400 font-bold">{totalCorrect} {t('dashboard.hits', { defaultValue: 'Acertos' })}</span>
                  <span>•</span>
                  <span className="text-red-400 font-bold">{totalIncorrect} {t('dashboard.misses', { defaultValue: 'Erros' })}</span>
                </div>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 rounded-full transition-all duration-700" 
                  style={{ width: `${accuracyRate}%` }}
                />
              </div>
            </div>

            {/* 3. SEQUÊNCIA DE ACERTOS (STREAK) */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {t('dashboard.streakTitle', { defaultValue: 'Sequência (Streak)' })}
                </span>
                <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Flame size={16} className="fill-amber-400" />
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-amber-400 italic tabular-nums tracking-tight">
                    {currentStreak}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t('dashboard.consecutiveHits', { defaultValue: 'acertos seguidos' })}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  {t('dashboard.bestStreakLabel', { defaultValue: 'Melhor sequência histórica:' })} <strong className="text-white">{bestStreak} {t('dashboard.hitsLower', { defaultValue: 'acertos' })}</strong>
                </p>
              </div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                {currentStreak >= 3 ? t('dashboard.jediPace', { defaultValue: '🔥 Ritmo de Mestre Jedi!' }) : t('dashboard.streakHint', { defaultValue: 'Acerte o próximo para subir o streak' })}
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* O GRÁFICO CENTRAL: EVOLUÇÃO DA ENERGIA NO QUIZ (ACERTOS VS ERROS)          */}
          {/* ========================================================================= */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/15 space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zello-orange to-transparent"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-zello-orange/20 flex items-center justify-center text-zello-orange">
                    <Activity size={15} />
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-white italic uppercase tracking-tight font-sans">
                    {t('dashboard.energyEvolutionTitle', { defaultValue: 'Evolução de Acertos como Energia da Força' })}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  {t('dashboard.energyEvolutionDesc', { defaultValue: 'Trajetória contínua da energia: +15% de acréscimo a cada desafio correto e -15% de dreno a cada erro.' })}
                </p>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center gap-4 text-xs font-bold shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-300">{t('dashboard.hitPlus', { defaultValue: 'Acerto (+15%)' })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="text-slate-300">{t('dashboard.errorMinus', { defaultValue: 'Erro (-15%)' })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-1 bg-zello-orange"></span>
                  <span className="text-slate-300">{t('dashboard.vitalLevel', { defaultValue: 'Nível Vital' })}</span>
                </div>
              </div>
            </div>

            {/* Recharts Area Chart for Energy */}
            <div className="h-[340px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart 
                  data={energyEvolutionData} 
                  margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id={individualGradId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F05A28" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#F05A28" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    stroke="#64748b" 
                    fontSize={11} 
                    fontWeight="bold" 
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="#64748b" 
                    fontSize={11} 
                    fontWeight="bold" 
                    domain={[0, 100]} 
                    ticks={[0, 25, 50, 75, 100]}
                    tickFormatter={(v) => `${v}%`}
                    tickLine={false}
                  />
                  <Tooltip content={<EnergyCustomTooltip />} />
                  <ReferenceLine y={80} stroke="#10b981" strokeDasharray="3 3" label={{ value: 'Maestria 80%', fill: '#10b981', fontSize: 10, position: 'right' }} />
                  <ReferenceLine y={30} stroke="#ef4444" strokeDasharray="3 3" label={{ value: 'Crítico 30%', fill: '#ef4444', fontSize: 10, position: 'right' }} />
                  <Area 
                    type="monotone" 
                    dataKey="energy" 
                    stroke="#F05A28" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill={`url(#${individualGradId})`} 
                    dot={(props: any) => {
                      const { cx, cy, payload } = props;
                      const isCorrect = payload.isCorrect;
                      return (
                        <circle
                          key={`dot-energy-${props.index}`}
                          cx={cx}
                          cy={cy}
                          r={5}
                          fill={isCorrect ? '#10b981' : '#ef4444'}
                          stroke="#ffffff"
                          strokeWidth={2}
                          className="hover:scale-150 transition-transform cursor-pointer"
                        />
                      );
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zello-orange animate-ping"></span>
                <span>
                  <strong>Dica do Cristal:</strong> Mantenha a energia acima de <strong>80%</strong> para manter o Holocron Jedi em harmonia e desbloquear o título de Guardião.
                </span>
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                {energyEvolutionData.length} tentativas registradas
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* EVOLUÇÃO COMO FACILITADOR & DOMÍNIO NO ECOCYCLE & STRINGS                 */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. Evolução de Competência do Facilitador */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-zello-orange/20 flex items-center justify-center text-zello-orange">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white italic uppercase tracking-tight">
                    {t('ecocycle.evolutionTitle', 'EVOLUÇÃO COMO FACILITADOR')}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Competência Demonstrada nos Quizzes
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {facilitatorEvolution.map((lvl) => {
                  const cardGradients = {
                    PADAWAN: 'from-emerald-500/15 to-emerald-500/5 border-emerald-500/30 text-emerald-400',
                    JEDI: 'from-blue-500/15 to-blue-500/5 border-blue-500/30 text-blue-400',
                    YODA: 'from-purple-500/15 to-purple-500/5 border-purple-500/30 text-purple-400'
                  };
                  const styling = cardGradients[lvl.level] || 'from-white/10 to-white/5 border-white/10 text-white';

                  return (
                    <div
                      key={lvl.level}
                      className={`p-4 rounded-2xl border bg-gradient-to-r ${styling} space-y-2`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-white">
                          Nível {lvl.level === 'PADAWAN' ? '1 • Padawan' : lvl.level === 'JEDI' ? '2 • Jedi' : '3 • Yoda'}
                        </span>
                        {lvl.isCompleted ? (
                          <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                            <CheckCircle2 size={11} /> 100% Concluído
                          </span>
                        ) : lvl.isUnlocked ? (
                          <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                            Em Progresso
                          </span>
                        ) : (
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                            Bloqueado
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-300 font-medium">
                        {getFacilitatorRoleText(lvl)}
                      </p>
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 pt-1">
                        <span>Assertividade Real</span>
                        <span className="text-white font-black tabular-nums">{lvl.accuracy}%</span>
                      </div>
                      <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-zello-orange to-amber-400 rounded-full transition-all duration-500"
                          style={{ width: `${lvl.accuracy}%` }}
                        />
                      </div>
                      {lvl.bestScore > 0 && (
                        <div className="text-[9px] text-slate-400 font-mono text-right">
                          Melhor Pontuação: <span className="text-zello-orange font-bold">{lvl.bestScore.toLocaleString()} pts</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Domínio no Ecocycle & Strings */}
            <div className="lg:col-span-2 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white italic uppercase tracking-tight">
                      {t('ecocycle.domainTitle', 'DOMÍNIO NO ECOCYCLE & STRINGS')}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Desempenho Pedagógico por Fases e Armadilhas do Ecociclo
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  6 Fases & Armadilhas Mapeadas
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {ecocycleDomainStats.map((phase) => (
                  <div 
                    key={phase.concept}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2.5 hover:border-white/15 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-white uppercase tracking-wider">
                        {getPhaseTranslatedName(phase.concept, phase.name)}
                      </span>
                      <span className="text-sm font-black text-zello-orange tabular-nums">
                        {phase.accuracy}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${phase.color} rounded-full transition-all duration-500`} 
                        style={{ width: `${phase.accuracy}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                      <span className="truncate max-w-[200px]" title={phase.structuresExample}>
                        Exemplos: {phase.structuresExample}
                      </span>
                      <span className="font-mono text-[9px] text-slate-500 shrink-0 ml-2">
                        {phase.totalQuestions > 0 ? `${phase.correctCount}/${phase.totalQuestions} acertos` : 'Padrão'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 italic text-center pt-2">
                {ecocycleFooterText}
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RECENT QUIZ FEED & MESTRE NOMURA ADVICE                                    */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feed of Recent Questions */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-black text-white italic uppercase tracking-tight flex items-center gap-2">
                  <Activity size={18} className="text-zello-orange" />
                  Histórico Recente de Perguntas
                </h4>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Últimos Desafios
                </span>
              </div>

              <div className="space-y-3">
                {energyEvolutionData.slice(-5).reverse().map((item, idx) => (
                  <div
                    key={`hist-feed-${item.name}-${idx}`}
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-4 hover:border-white/15 transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        item.isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {item.isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-xs font-black text-white truncate">{item.title}</h5>
                        <p className="text-[10px] text-slate-400 truncate">{item.structures}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`text-xs font-black block tabular-nums ${
                        item.isCorrect ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        {item.changeText}
                      </span>
                      <span className="text-[9px] font-mono text-slate-500">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mestre Nomura Advice customized by Energy */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-zello-orange/15 to-transparent border border-zello-orange/30 space-y-5 relative overflow-hidden flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 text-zello-orange opacity-10 pointer-events-none" size={100} />
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500/30 overflow-hidden shrink-0">
                    <img src="/Mestre Nomura.png" alt="Mestre Nomura" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-zello-orange text-[10px] font-black uppercase tracking-widest font-mono">
                      Feedback do Mentor
                    </span>
                    <h4 className="text-xl font-black text-white italic uppercase font-sans">Mestre Nomura Diz:</h4>
                  </div>
                </div>

                <p className="text-slate-300 italic font-medium leading-relaxed text-sm">
                  "{energyConfig.advice} Lembre-se: nas Estruturas Libertadoras não existem respostas decoradas, mas sim a combinação certa entre objetivo, participantes e momento do Ecociclo."
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-black uppercase text-zello-orange border border-zello-orange/30">
                  Energia: {currentEnergy}%
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-black uppercase text-zello-orange border border-zello-orange/30">
                  Precisão: {accuracyRate}%
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-black uppercase text-zello-orange border border-zello-orange/30">
                  Ecocycle Planning
                </span>
              </div>
            </div>
          </div>

          {/* AI Holocron Diagnostic Report Button */}
          <div className="p-6 md:p-10 bg-white/5 border border-white/10 rounded-3xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zello-orange/10 rounded-2xl flex items-center justify-center border border-zello-orange/20 text-zello-orange shadow-[0_0_20px_rgba(240,90,40,0.15)]">
                  <Star size={24} className="fill-zello-orange text-zello-orange" />
                </div>
                <div>
                  <h5 className="text-zello-orange text-xs font-black uppercase tracking-widest font-mono">
                    Diagnóstico de Inteligência
                  </h5>
                  <h3 className="text-xl md:text-2xl font-black text-white italic uppercase tracking-tight">
                    Conselho Consultivo de IA & Quiz
                  </h3>
                </div>
              </div>
              
              {!relatorio && (
                <button
                  onClick={handleGerarRelatorio}
                  disabled={isLoadingRelatorio}
                  className="px-6 py-3.5 bg-zello-orange text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(240,90,40,0.2)] disabled:opacity-50 disabled:pointer-events-none flex items-center gap-2 cursor-pointer shrink-0"
                >
                  {isLoadingRelatorio ? (
                    <>
                      <Loader2 className="animate-spin" size={14} />
                      Sincronizando Holocron...
                    </>
                  ) : (
                    <>
                      <Zap size={14} className="fill-white" />
                      Gerar Relatório Completo
                    </>
                  )}
                </button>
              )}
            </div>

            {isLoadingRelatorio && (
              <div className="py-10 flex flex-col items-center justify-center space-y-4">
                <Loader2 className="animate-spin text-zello-orange" size={40} />
                <div className="text-center">
                  <p className="text-sm font-black uppercase text-slate-300 tracking-wider animate-pulse">
                    Cruzando dados de energia vital, acertos e cartas libertadoras...
                  </p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                    Isso leva apenas alguns instantes
                  </p>
                </div>
              </div>
            )}

            {errRelatorio && (
              <div className="p-5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-xs font-medium flex items-center gap-3">
                <AlertTriangle size={18} />
                <span>{errRelatorio}</span>
                <button onClick={handleGerarRelatorio} className="underline font-black uppercase ml-auto hover:text-white cursor-pointer">
                  Tentar Novamente
                </button>
              </div>
            )}

            {relatorio && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 pt-2 text-left"
              >
                <div className="prose prose-invert max-w-none space-y-4 text-slate-300 text-sm leading-relaxed">
                  {renderMarkdown(relatorio)}
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <button 
                    onClick={() => setRelatorio(null)}
                    className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Gerar Novo Relatório
                  </button>
                </div>
              </motion.div>
            )}

            {!relatorio && !isLoadingRelatorio && (
              <p className="text-xs text-slate-400 font-medium">
                Gere uma análise diagnóstica personalizada avaliando sua pontuação ({score.toLocaleString()} XP), 
                seu nível atual de Energia da Força ({currentEnergy}%) e recomendações práticas para a facilitação com Ecocycle Planning.
              </p>
            )}
          </div>
        </motion.div>
      ) : (
        /* ========================================================================= */
        /* TAB 2: TURMA / GERAL (COLLECTIVE QUIZ & ENERGY DASHBOARD)                 */
        /* ========================================================================= */
        <motion.div
          key="team-quiz-dashboard"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          {/* Header Metric Cards for Team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Energia Média Coletiva */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-zello-orange/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Energia Média Coletiva
                </span>
                <div className="w-8 h-8 rounded-xl bg-zello-orange/20 text-zello-orange flex items-center justify-center">
                  <Zap size={16} className="fill-zello-orange" />
                </div>
              </div>
              <div className="text-4xl font-black text-white italic tabular-nums tracking-tight">
                {collectiveEnergy}%
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-zello-orange rounded-full" 
                  style={{ width: `${collectiveEnergy}%` }} 
                />
              </div>
              <p className="text-[10px] text-slate-400 font-semibold">Harmonia da turma nos Quizzes</p>
            </div>

            {/* 2. Assertividade Coletiva */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Assertividade Coletiva
                </span>
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Target size={16} />
                </div>
              </div>
              <div className="text-4xl font-black text-emerald-400 italic tabular-nums tracking-tight">
                {teamAccuracy}%
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 rounded-full" 
                  style={{ width: `${teamAccuracy}%` }} 
                />
              </div>
              <p className="text-[10px] text-slate-400 font-semibold">{teamTotalCorrect} acertos de {teamTotalAnswered} questões</p>
            </div>

            {/* 3. Total de Questões Respondidas */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-blue-500/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Desafios Enfrentados
                </span>
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <BarChart2 size={16} />
                </div>
              </div>
              <div className="text-4xl font-black text-white italic tabular-nums tracking-tight">
                {teamTotalAnswered}
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '85%' }} />
              </div>
              <p className="text-[10px] text-slate-400 font-semibold">Respostas submetidas no Quiz</p>
            </div>

            {/* 4. Participantes Ativos */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Participantes Ativos
                </span>
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Users size={16} />
                </div>
              </div>
              <div className="text-4xl font-black text-white italic tabular-nums tracking-tight">
                {teamActiveParticipants}
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '100%' }} />
              </div>
              <p className="text-[10px] text-slate-400 font-semibold">Membros engajados no ecossistema</p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* TEAM EVOLUTION: COLLECTIVE ENERGY AND ACCURACY OVER SESSIONS               */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-black text-white italic uppercase tracking-tight">
                      Evolução da Energia Coletiva da Turma
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Curva de assertividade e harmonia da turma ao longo dos testes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="font-bold">Energia da Turma</span>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={teamEvolutionQuizData}>
                    <defs>
                      <linearGradient id={teamGradId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#64748b" fontSize={11} fontWeight="bold" />
                    <YAxis stroke="#64748b" fontSize={11} fontWeight="bold" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '16px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="energy" 
                      name="Energia Coletiva (%)"
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill={`url(#${teamGradId})`} 
                      strokeWidth={3} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-slate-400 font-medium text-center italic">
                A turma demonstrou aceleração no domínio das Estruturas Libertadoras nas rodadas recentes.
              </p>
            </div>

            {/* Domínio Coletivo por Nível */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-zello-orange/20 flex items-center justify-center text-zello-orange">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white italic uppercase tracking-tight">
                    Domínio por Nível
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Taxa Coletiva de Acertos
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {(teamQuiz?.levelMastery || [
                  { level: 'PADAWAN', label: 'Nível 1 • Padawan (Strings Simples)', accuracy: 89, completedUsers: 7, totalUsers: 8 },
                  { level: 'JEDI', label: 'Nível 2 • Jedi (Encadeamentos)', accuracy: 76, completedUsers: 4, totalUsers: 8 },
                  { level: 'YODA', label: 'Nível 3 • Yoda (Strings com Ecocycle)', accuracy: 64, completedUsers: 2, totalUsers: 8 }
                ]).map((lvl) => (
                  <div key={lvl.level} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-black text-white uppercase tracking-wider">
                        {lvl.label}
                      </span>
                      <span className="text-sm font-black text-zello-orange tabular-nums">
                        {lvl.accuracy}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-zello-orange to-amber-400 rounded-full" 
                        style={{ width: `${lvl.accuracy}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                      <span>Participantes Concluintes:</span>
                      <span className="text-white font-bold">{lvl.completedUsers} de {lvl.totalUsers}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* ESTRUTURAS LIBERTADORAS: MAIS DOMINADAS VS MAIS DESAFIADORAS               */}
          {/* (Substitui completamente o antigo RH, MKT, Sales, Ops, TI)                */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Estruturas Mais Dominadas */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white italic uppercase tracking-tight">
                      Estruturas Mais Dominadas
                    </h4>
                    <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest font-mono">
                      Maior Índice de Acertos no Quiz
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full">
                  Alta Sintonia
                </span>
              </div>

              <div className="space-y-4">
                {mostMastered.map((s, idx) => (
                  <div key={`mastered-${s.name}-${idx}`} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-black text-white block">{s.name}</span>
                        <span className="text-[10px] text-slate-400">{s.category}</span>
                      </div>
                      <span className="text-base font-black text-emerald-400 tabular-nums">
                        {s.accuracy}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${s.accuracy}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 font-medium italic">
                A turma compreende com rapidez o uso de TRIZ para destruir hábitos rígidos e 1-2-4-All para inclusão total.
              </p>
            </div>

            {/* Top Estruturas Desafiadoras (Atenção para o Facilitador) */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <AlertTriangle size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white italic uppercase tracking-tight">
                      Pontos de Atenção no Ecociclo
                    </h4>
                    <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest font-mono">
                      Estruturas com Maior Taxa de Erro
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-400 bg-amber-500/15 border border-amber-500/30 px-3 py-1 rounded-full">
                  Foco de Treino
                </span>
              </div>

              <div className="space-y-4">
                {mostChallenging.map((s, idx) => (
                  <div key={`challenging-${s.name}-${idx}`} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-black text-white block">{s.name}</span>
                        <span className="text-[10px] text-slate-400">{s.category}</span>
                      </div>
                      <span className="text-base font-black text-amber-400 tabular-nums">
                        {s.accuracy}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: `${s.accuracy}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 font-medium italic">
                Recomendação para o facilitador: aprofundar na distinção entre a Armadilha da Rigidez e da Pobreza no Ecocycle Planning e nas escalas de Panarchy.
              </p>
            </div>
          </div>

          {/* Leaderboard of Quiz Guardians in Team */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white italic uppercase tracking-tight">
                    Quadro de Guardiões do Quiz
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Participantes mais sintonizados com a Força
                  </p>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-bold bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Top Participantes
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase text-[9px] tracking-widest">
                    <th className="pb-3 pl-2">Posição & Participante</th>
                    <th className="pb-3 text-center">Energia da Força</th>
                    <th className="pb-3 text-center">Precisão</th>
                    <th className="pb-3 text-center">Acertos</th>
                    <th className="pb-3 text-right pr-2">XP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {(teamQuiz?.topParticipants || [
                    { userId: '1', email: 'nomura.eduardo@gmail.com', energy: 95, accuracy: 92, totalCorrect: 15, completedLevels: ['PADAWAN', 'JEDI', 'YODA'], xp: 18500 },
                    { userId: '2', email: 'guardiao.jedi@empresa.com', energy: 85, accuracy: 88, totalCorrect: 12, completedLevels: ['PADAWAN', 'JEDI'], xp: 12200 },
                    { userId: '3', email: 'facilitador.agil@empresa.com', energy: 80, accuracy: 83, totalCorrect: 9, completedLevels: ['PADAWAN'], xp: 8400 },
                    { userId: '4', email: 'membro.equipe@empresa.com', energy: 75, accuracy: 78, totalCorrect: 7, completedLevels: ['PADAWAN'], xp: 6500 }
                  ]).map((p, idx) => (
                    <tr key={`rank-user-${p.userId}-${idx}`} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 pl-2 font-bold text-white flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-[10px] ${
                          idx === 0 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                          idx === 1 ? 'bg-slate-300/20 text-slate-300 border border-slate-300/30' :
                          idx === 2 ? 'bg-amber-700/20 text-amber-500 border border-amber-700/30' :
                          'bg-white/5 text-slate-400'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="truncate max-w-[200px]">{p.email}</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="px-2.5 py-1 rounded-full bg-zello-orange/15 text-zello-orange font-black border border-zello-orange/30 tabular-nums">
                          {p.energy}%
                        </span>
                      </td>
                      <td className="py-3 text-center font-bold text-emerald-400 tabular-nums">
                        {p.accuracy}%
                      </td>
                      <td className="py-3 text-center font-bold text-slate-300 tabular-nums">
                        {p.totalCorrect}
                      </td>
                      <td className="py-3 text-right pr-2 font-black text-white tabular-nums">
                        {p.xp.toLocaleString()} XP
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
