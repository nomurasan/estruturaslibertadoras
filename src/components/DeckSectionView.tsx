import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GameState } from '../types';
import { AI_POWERS, AIPower } from '../data/powers';
import { getLocalizedPower, CATEGORY_TRANSLATIONS } from '../data/powersLocalization';
import { SuperPowerCard } from './SuperPowerCard';

interface DeckSectionViewProps {
  setViewingPower: (power: AIPower | null) => void;
  setGameState: (state: GameState) => void;
  setActiveVideo: (video: { title: string; url: string } | null) => void;
  gameState: GameState;
}

interface CategoryConfig {
  key: string;
  label: string;
  shortLabel: string;
  icon: keyof typeof LucideIcons;
  description: string;
}

const CATEGORY_ITEMS: CategoryConfig[] = [
  {
    key: 'Gerar Ideias & Inovação',
    label: 'Gerar Ideias & Inovação',
    shortLabel: 'Ideias & Inovação',
    icon: 'Sparkles',
    description: 'Estimular criatividade coletiva, romper bloqueios e engajar 100% dos participantes.'
  },
  {
    key: 'Revelar & Diagnosticar',
    label: 'Revelar & Diagnosticar',
    shortLabel: 'Revelar & Diagnóstico',
    icon: 'Search',
    description: 'Expor tabus, diagnosticar impasses ocultos e mapear o espectro real de opiniões.'
  },
  {
    key: 'Estratégia & Propósito',
    label: 'Estratégia & Propósito',
    shortLabel: 'Estratégia & Propósito',
    icon: 'Target',
    description: 'Alinhar propósito essencial, navegar incertezas críticas e desenhar governança viva.'
  },
  {
    key: 'Colaboração & Ajuda',
    label: 'Colaboração & Ajuda',
    shortLabel: 'Colaboração & Ajuda',
    icon: 'Users',
    description: 'Consultoria mútua e franca entre pares, quebra de silos e fortalecimento de redes.'
  },
  {
    key: 'Ação & Convergência',
    label: 'Ação & Convergência',
    shortLabel: 'Ação & Convergência',
    icon: 'Zap',
    description: 'Destravar autonomia imediata, prototipar soluções e filtrar regras mínimas.'
  },
  {
    key: 'Conectar & Aquecer',
    label: 'Conectar & Aquecer',
    shortLabel: 'Conectar & Aquecer',
    icon: 'Heart',
    description: 'Aproximação humana rápida, segurança psicológica e abertura acolhedora.'
  }
];

type EditionFilter = 'all' | 'classics' | 'fieldbook';
type ViewLayoutMode = 'grid' | 'list';

export const DeckSectionView: React.FC<DeckSectionViewProps> = ({
  setViewingPower,
  setGameState,
  setActiveVideo,
}) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'pt';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEdition, setSelectedEdition] = useState<EditionFilter>('all');
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [viewLayout, setViewLayout] = useState<ViewLayoutMode>('grid');

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Localized categories list
  const localizedCategories = useMemo(() => {
    return CATEGORY_ITEMS.map((cat) => {
      const trans = CATEGORY_TRANSLATIONS[cat.key];
      const label = !currentLang || currentLang.startsWith('pt')
        ? cat.label
        : currentLang.startsWith('es')
        ? trans?.es || cat.label
        : trans?.en || cat.label;
      return {
        ...cat,
        label,
        shortLabel: label
      };
    });
  }, [currentLang]);

  // Localized powers list based on current language
  const localizedPowers = useMemo(() => {
    return AI_POWERS.map((power) => getLocalizedPower(power, currentLang));
  }, [currentLang]);

  // Base counts
  const totalCount = localizedPowers.length;
  const classicsCount = localizedPowers.filter((p) => Number(p.id) >= 1 && Number(p.id) <= 33).length;
  const fieldbookCount = localizedPowers.filter((p) => Number(p.id) >= 34 && Number(p.id) <= 43).length;

  // Filtered structures
  const filteredPowers = useMemo(() => {
    return localizedPowers.filter((power) => {
      const numId = Number(power.id);

      // Match Edition
      if (selectedEdition === 'classics' && (numId < 1 || numId > 33)) return false;
      if (selectedEdition === 'fieldbook' && (numId < 34 || numId > 43)) return false;

      // Match Category
      if (selectedCategory !== 'all') {
        const rawPower = AI_POWERS.find((p) => p.id === power.id);
        if (rawPower?.category !== selectedCategory && power.category !== selectedCategory) {
          return false;
        }
      }

      // Match Search Term
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase().trim();
        const idMatches =
          power.id === query ||
          `#${power.id}` === query ||
          power.id.padStart(2, '0') === query ||
          `#${power.id.padStart(2, '0')}` === query;
        const titleMatches = power.title.toLowerCase().includes(query);
        const engTitleMatches = !!power.englishTitle && power.englishTitle.toLowerCase().includes(query);
        const objectiveMatches = power.objective.toLowerCase().includes(query);
        const categoryMatches = power.category.toLowerCase().includes(query);
        const casesMatches = !!power.cases && power.cases.some((c) => c.toLowerCase().includes(query));

        if (!idMatches && !titleMatches && !engTitleMatches && !objectiveMatches && !categoryMatches && !casesMatches) {
          return false;
        }
      }

      return true;
    });
  }, [localizedPowers, searchTerm, selectedCategory, selectedEdition]);

  const hasActiveFilters = searchTerm.trim() !== '' || selectedCategory !== 'all' || selectedEdition !== 'all';

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedEdition('all');
  };

  // Active category display label
  const activeCategoryObj = localizedCategories.find((c) => c.key === selectedCategory);

  return (
    <motion.div
      key="deck-section-component"
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-[1500px] mx-auto space-y-6 sm:space-y-8 mb-20 px-3 sm:px-6 md:px-8 py-3 sm:py-6 font-sans overflow-x-hidden"
    >
      {/* Header Section — Compact & Responsive */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5 sm:gap-8 pb-5 sm:pb-8 border-b border-white/5">
        <div className="space-y-3 text-center lg:text-left flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zello-orange/10 border border-zello-orange/20 text-zello-orange text-[10px] sm:text-xs font-black uppercase tracking-widest">
            <LucideIcons.Sparkles size={14} />
            {t('deck.officialBadge', { defaultValue: 'Repertório Oficial de Facilitação' })}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter text-white font-sans leading-tight">
            {t('deck.title', { defaultValue: 'Deck das 43 Estruturas Libertadoras' })}
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
            {t('deck.subtitle', { defaultValue: 'Explore as 43 Estruturas Libertadoras oficiais (as 33 clássicas + as 10 novidades do Fieldbook em liberatingstructures.com) com seus desenhos oficiais, propósitos essenciais, fluxos sequenciais e regras mínimas.' })}
          </p>

          <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start pt-1">
            <button
              onClick={() => setGameState('home')}
              className="px-5 sm:px-7 py-2.5 sm:py-3 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] sm:text-xs rounded-xl hover:bg-white/10 active:scale-95 transition-all cursor-pointer font-sans"
            >
              {t('deck.backToHome', { defaultValue: 'Voltar ao Início' })}
            </button>
            <button
              onClick={() => setGameState('level-selection')}
              className="px-5 sm:px-7 py-2.5 sm:py-3 bg-zello-orange/20 border border-zello-orange/40 text-zello-orange font-black uppercase tracking-widest text-[10px] sm:text-xs rounded-xl hover:bg-zello-orange/30 active:scale-95 transition-all cursor-pointer font-sans flex items-center gap-2"
            >
              <LucideIcons.Layers size={14} />
              {t('deck.practiceQuizzes', { defaultValue: 'Praticar nos Quizzes' })}
            </button>
          </div>
        </div>

        {/* Coach Deck Box (Mestre Nomura) — Ergonomic on Mobile & Desktop */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-5 p-3.5 sm:p-5 bg-white/5 border border-white/15 rounded-2xl sm:rounded-[28px] max-w-lg w-full shadow-2xl hover:border-zello-orange/30 transition-all duration-300 group hover:bg-white/[0.07] text-left">
          <div className="relative shrink-0 select-none">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-zello-orange to-yellow-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full border-2 border-zello-orange overflow-hidden shadow-[0_0_20px_rgba(240,90,40,0.35)] bg-zinc-950 flex items-center justify-center">
              <img
                src="/Mestre Nomura.png"
                alt="Mestre Nomura"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-zello-orange/15 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-zinc-900 border border-zello-orange flex items-center justify-center shadow-lg">
              <LucideIcons.Sparkles size={11} className="text-zello-orange animate-pulse" />
            </div>
          </div>

          <div className="text-center sm:text-left space-y-1.5 flex-1 min-w-0">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[9px] bg-zello-orange/20 text-zello-orange border border-zello-orange/30 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                {t('deck.mentorBadge', { defaultValue: 'Facilitador Mestre' })}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <h3 className="text-xs sm:text-sm font-black text-white italic uppercase tracking-wider mb-0.5 font-sans">
              {t('deck.mentorName', { defaultValue: 'Mestre Nomura' })}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 font-semibold leading-relaxed line-clamp-2 sm:line-clamp-none">
              {t('deck.mentorQuote', { defaultValue: '"Cada Estrutura Libertadora tem um propósito único. Use os filtros por propósito e coleção para encontrar a dinâmica exata para o seu momento de facilitação."' })}
            </p>

            <div className="pt-0.5">
              <button
                onClick={() =>
                  setActiveVideo({
                    title: t('deck.howDeckWorks', { defaultValue: 'Como Funciona o Deck das Estruturas Libertadoras?' }),
                    url: 'https://www.youtube.com/embed/La7fiY38IDA?rel=0',
                  })
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zello-orange hover:bg-zello-orange/90 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(240,90,40,0.3)] hover:shadow-[0_0_25px_rgba(240,90,40,0.5)] transition-all duration-300 cursor-pointer group/btn font-sans"
              >
                <LucideIcons.Play size={9} className="fill-white text-white group-hover/btn:scale-110 transition-transform" />
                {t('deck.howDeckWorks', { defaultValue: 'Como Funciona o Deck?' })}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER CONTROLS HUB — ZERO OVERFLOW & FULLY RESPONSIVE */}
      <div className="w-full max-w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-950/85 border border-white/10 p-3.5 sm:p-5 md:p-6 shadow-2xl backdrop-blur-md space-y-3.5 sm:space-y-4">
        
        {/* ROW 1: SEARCH, VIEW SWITCHER & RESULTS COUNTER */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4">
          {/* Search Input */}
          <div className="relative flex-1 min-w-0">
            <LucideIcons.Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 shrink-0" size={16} />
            <input
              type="text"
              placeholder={t('deck.searchPlaceholder', { defaultValue: 'Buscar por #ID, nome, objetivo ou propósito...' })}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-zello-orange transition-all font-sans"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                title="Limpar busca"
              >
                <LucideIcons.X size={15} />
              </button>
            )}
          </div>

          {/* Controls Right: View Mode + Count Stats */}
          <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0">
            {/* View Layout Toggle (Grid vs. List) */}
            <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setViewLayout('grid')}
                className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewLayout === 'grid'
                    ? 'bg-zello-orange text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Visualização em Cards"
                aria-label="Ver em Cards"
              >
                <LucideIcons.LayoutGrid size={14} />
                <span className="hidden xs:inline text-[10px] font-black uppercase tracking-wider">Cards</span>
              </button>
              <button
                onClick={() => setViewLayout('list')}
                className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewLayout === 'list'
                    ? 'bg-zello-orange text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Visualização em Lista Compacta"
                aria-label="Ver em Lista"
              >
                <LucideIcons.List size={14} />
                <span className="hidden xs:inline text-[10px] font-black uppercase tracking-wider">Lista</span>
              </button>
            </div>

            {/* Results Count Badge */}
            <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>
                <strong className="text-zello-orange font-bold font-mono text-sm">{filteredPowers.length}</strong>/{AI_POWERS.length}
              </span>
            </div>

            {/* Mobile Category Drawer Trigger */}
            <button
              onClick={() => setIsMobileCategoryOpen(true)}
              className="md:hidden p-2 rounded-xl bg-zello-orange/15 border border-zello-orange/30 text-zello-orange text-xs font-bold flex items-center gap-1 shrink-0"
              title="Explorar propósitos em tela cheia"
            >
              <LucideIcons.SlidersHorizontal size={14} />
              <span className="text-[10px] font-black uppercase">Filtros</span>
            </button>
          </div>
        </div>

        {/* ROW 2: DIMENSION 1 — COLEÇÃO OFICIAL (Segmented Tabs) */}
        <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 shrink-0">
            <LucideIcons.BookOpen size={13} className="text-zello-orange" />
            Coleção:
          </div>

          <div className="grid grid-cols-3 sm:flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-white/10 w-full sm:w-auto">
            <button
              onClick={() => setSelectedEdition('all')}
              className={`px-2.5 sm:px-4 py-1.5 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all cursor-pointer text-center truncate ${
                selectedEdition === 'all'
                  ? 'bg-zello-orange text-white shadow-[0_0_12px_rgba(240,90,40,0.35)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Todas ({totalCount})
            </button>

            <button
              onClick={() => setSelectedEdition('classics')}
              className={`px-2.5 sm:px-4 py-1.5 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all cursor-pointer text-center truncate ${
                selectedEdition === 'classics'
                  ? 'bg-zello-orange text-white shadow-[0_0_12px_rgba(240,90,40,0.35)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="sm:hidden">Clássicas ({classicsCount})</span>
              <span className="hidden sm:inline">33 Clássicas ({classicsCount})</span>
            </button>

            <button
              onClick={() => setSelectedEdition('fieldbook')}
              className={`px-2.5 sm:px-4 py-1.5 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all cursor-pointer text-center truncate ${
                selectedEdition === 'fieldbook'
                  ? 'bg-zello-orange text-white shadow-[0_0_12px_rgba(240,90,40,0.35)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="sm:hidden">Fieldbook ({fieldbookCount})</span>
              <span className="hidden sm:inline">10 Fieldbook ({fieldbookCount})</span>
            </button>
          </div>
        </div>

        {/* ROW 3: DIMENSION 2 — PROPÓSITO / CATEGORIAS */}
        <div className="pt-2 border-t border-white/5 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
              <LucideIcons.Filter size={13} className="text-zello-orange" />
              Filtrar por Propósito:
            </div>

            {/* Current Active Indicator Label on Mobile */}
            <button
              onClick={() => setIsMobileCategoryOpen(true)}
              className="md:hidden text-[10px] font-mono font-bold text-zello-orange flex items-center gap-1 hover:underline"
            >
              <span>{selectedCategory === 'all' ? 'Ver Todos' : activeCategoryObj?.shortLabel}</span>
              <LucideIcons.ChevronRight size={12} />
            </button>
          </div>

          {/* DESKTOP / TABLET (>= 768px): WRAPPED CHIPS THAT NEVER OVERFLOW */}
          <div className="hidden md:flex flex-wrap items-center gap-1.5 lg:gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-zello-orange text-white shadow-[0_0_15px_rgba(240,90,40,0.4)] ring-1 ring-zello-orange/50'
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <LucideIcons.LayoutGrid size={13} />
              <span>Todas ({AI_POWERS.length})</span>
            </button>

            {localizedCategories.map((cat) => {
              const count = AI_POWERS.filter((p) => p.category === cat.key).length;
              const isSelected = selectedCategory === cat.key;
              const Icon = (LucideIcons as any)[cat.icon] || LucideIcons.Zap;

              return (
                <button
                  key={`cat-btn-desk-${cat.key}`}
                  onClick={() => setSelectedCategory(cat.key)}
                  title={cat.description}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-zello-orange text-white shadow-[0_0_15px_rgba(240,90,40,0.4)] ring-1 ring-zello-orange/50'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={13} className={isSelected ? 'text-white' : 'text-zello-orange'} />
                  <span>{cat.shortLabel}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                      isSelected ? 'bg-white/20 text-white font-bold' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* MOBILE (< 768px): SMOOTH HORIZONTAL TOUCH TRACK WITH ZERO CONTAINER OVERFLOW */}
          <div className="md:hidden relative w-full">
            <div
              ref={scrollContainerRef}
              className="flex items-center gap-1.5 overflow-x-auto py-1 px-0.5 no-scrollbar scroll-smooth snap-x"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 snap-start cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-zello-orange text-white shadow-[0_0_10px_rgba(240,90,40,0.3)]'
                    : 'bg-white/5 border border-white/10 text-slate-300'
                }`}
              >
                <LucideIcons.LayoutGrid size={12} />
                <span>{t('deck.all', { defaultValue: 'Todas' })} ({totalCount})</span>
              </button>

              {localizedCategories.map((cat) => {
                const count = AI_POWERS.filter((p) => p.category === cat.key).length;
                const isSelected = selectedCategory === cat.key;
                const Icon = (LucideIcons as any)[cat.icon] || LucideIcons.Zap;

                return (
                  <button
                    key={`cat-btn-mob-scroll-${cat.key}`}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 snap-start cursor-pointer ${
                      isSelected
                        ? 'bg-zello-orange text-white shadow-[0_0_10px_rgba(240,90,40,0.3)]'
                        : 'bg-white/5 border border-white/10 text-slate-300'
                    }`}
                  >
                    <Icon size={12} className={isSelected ? 'text-white' : 'text-zello-orange'} />
                    <span>{cat.shortLabel}</span>
                    <span className="text-[9px] font-mono opacity-80">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ROW 4: ACTIVE FILTERS RIBBON & QUICK RESET */}
        {hasActiveFilters && (
          <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest shrink-0">
              Filtros:
            </span>

            {selectedEdition !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zello-orange/15 border border-zello-orange/30 text-zello-orange text-[10px] font-bold">
                Coleção: {selectedEdition === 'classics' ? '33 Clássicas' : '10 Fieldbook'}
                <button
                  onClick={() => setSelectedEdition('all')}
                  className="hover:text-white p-0.5 ml-0.5 cursor-pointer"
                  title="Remover filtro de coleção"
                >
                  <LucideIcons.X size={11} />
                </button>
              </span>
            )}

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zello-orange/15 border border-zello-orange/30 text-zello-orange text-[10px] font-bold">
                Propósito: {activeCategoryObj?.shortLabel}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="hover:text-white p-0.5 ml-0.5 cursor-pointer"
                  title="Remover filtro de propósito"
                >
                  <LucideIcons.X size={11} />
                </button>
              </span>
            )}

            {searchTerm.trim() !== '' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white text-[10px] font-bold">
                Busca: "{searchTerm}"
                <button
                  onClick={() => setSearchTerm('')}
                  className="hover:text-zello-orange p-0.5 ml-0.5 cursor-pointer"
                  title="Remover busca"
                >
                  <LucideIcons.X size={11} />
                </button>
              </span>
            )}

            <button
              onClick={clearAllFilters}
              className="ml-auto text-[10px] font-mono text-zello-orange hover:text-white underline uppercase font-bold cursor-pointer py-1"
            >
              Resetar Tudo
            </button>
          </div>
        )}
      </div>

      {/* MOBILE CATEGORY BOTTOM SHEET / MODAL */}
      <AnimatePresence>
        {isMobileCategoryOpen && (
          <div className="fixed inset-0 z-[210] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="w-full max-w-lg bg-zinc-950 border-t sm:border border-white/20 rounded-t-3xl sm:rounded-3xl p-5 space-y-4 max-h-[85vh] overflow-y-auto custom-scrollbar"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <LucideIcons.Target className="text-zello-orange" size={18} />
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">
                    Filtrar por Propósito
                  </h3>
                </div>
                <button
                  onClick={() => setIsMobileCategoryOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white"
                  title="Fechar"
                >
                  <LucideIcons.X size={18} />
                </button>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setIsMobileCategoryOpen(false);
                  }}
                  className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    selectedCategory === 'all'
                      ? 'bg-zello-orange text-white border-zello-orange shadow-[0_0_15px_rgba(240,90,40,0.3)]'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <LucideIcons.LayoutGrid size={16} />
                    <span className="text-xs font-black uppercase tracking-wider">Todas as Categorias</span>
                  </div>
                  <span className="text-xs font-mono font-bold">{AI_POWERS.length}</span>
                </button>

                {localizedCategories.map((cat) => {
                  const count = AI_POWERS.filter((p) => p.category === cat.key).length;
                  const isSelected = selectedCategory === cat.key;
                  const Icon = (LucideIcons as any)[cat.icon] || LucideIcons.Zap;

                  return (
                    <button
                      key={`cat-modal-btn-${cat.key}`}
                      onClick={() => {
                        setSelectedCategory(cat.key);
                        setIsMobileCategoryOpen(false);
                      }}
                      className={`w-full p-3 rounded-xl border text-left space-y-1 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zello-orange text-white border-zello-orange shadow-[0_0_15px_rgba(240,90,40,0.3)]'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon size={16} className={isSelected ? 'text-white' : 'text-zello-orange'} />
                          <span className="text-xs font-black uppercase tracking-wider">{cat.label}</span>
                        </div>
                        <span className="text-xs font-mono font-bold">({count})</span>
                      </div>
                      <p className={`text-[10px] leading-relaxed ${isSelected ? 'text-white/90' : 'text-slate-400'}`}>
                        {cat.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CONTENT: EMPTY STATE OR RESULTS (CARDS VS COMPACT LIST) */}
      {filteredPowers.length === 0 ? (
        <div className="py-14 sm:py-20 text-center space-y-4 rounded-3xl bg-white/[0.02] border border-white/5 px-4">
          <LucideIcons.SearchX size={40} className="text-slate-600 mx-auto" />
          <h4 className="text-base sm:text-lg font-bold text-white">Nenhuma Estrutura Libertadora encontrada</h4>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
            Não encontramos estruturas com os filtros atuais{searchTerm ? ` ("${searchTerm}")` : ''}. Tente outros termos ou limpe os filtros.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2.5 bg-zello-orange text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zello-orange/90 transition-all cursor-pointer shadow-[0_0_15px_rgba(240,90,40,0.3)]"
          >
            Limpar Filtros e Ver Todas
          </button>
        </div>
      ) : viewLayout === 'grid' ? (
        /* VISUAL CARDS VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredPowers.map((power, idx) => {
            return (
              <div
                key={`dk-card-f-${power.id}-${idx}`}
                className="relative cursor-pointer transition-all duration-300 active:scale-98 select-none"
                onClick={() => setViewingPower(power)}
              >
                <SuperPowerCard
                  power={power}
                  isLocked={false}
                  onClick={() => setViewingPower(power)}
                  onConsult={() => setViewingPower(power)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        /* COMPACT FACILITATOR LIST VIEW — PERFECT FOR MOBILE & FAST WORKSHOP CONSULTATION */
        <div className="space-y-2.5">
          {filteredPowers.map((power, idx) => {
            const IconComponent = (LucideIcons as any)[power.icon] || LucideIcons.Zap;
            const isFieldbook = Number(power.id) >= 34;

            return (
              <div
                key={`dk-list-item-${power.id}-${idx}`}
                onClick={() => setViewingPower(power)}
                className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-zello-orange/50 hover:bg-white/[0.08] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-between gap-3 group select-none"
              >
                {/* Left: ID & Official Drawing Thumbnail / Icon */}
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-white p-1 border border-white/20 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                    {power.drawingUrl ? (
                      <img
                        src={power.drawingUrl}
                        alt={power.title}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <IconComponent size={20} className="text-slate-800" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-mono font-black text-zello-orange">
                        #{power.id.padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                        • {power.category}
                      </span>
                      {isFieldbook && (
                        <span className="text-[8px] font-mono font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase">
                          Fieldbook
                        </span>
                      )}
                    </div>

                    <h4 className="text-xs sm:text-sm font-black text-white uppercase italic tracking-tight group-hover:text-zello-orange transition-colors truncate">
                      {power.title}
                    </h4>

                    {power.englishTitle && (
                      <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 truncate">
                        {power.englishTitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right: Time & Action */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <span className="hidden sm:inline text-[9px] font-mono text-slate-400 uppercase">
                    {power.timeNeeded || '15-30 min'}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-zello-orange text-slate-400 group-hover:text-white flex items-center justify-center transition-all">
                    <LucideIcons.ChevronRight size={15} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};
