import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { AIPower } from '../data/powers';
import { EL_CATEGORIES } from '../data/elCategories';
import * as LucideIcons from 'lucide-react';

interface SuperPowerCardProps {
  power: AIPower;
  isLocked?: boolean;
  onClick?: () => void;
  onConsult?: () => void;
}

export const SuperPowerCard: React.FC<SuperPowerCardProps> = ({ power, isLocked = false, onClick, onConsult }) => {
  const { t } = useTranslation();
  const IconComponent = (LucideIcons as any)[power.icon] || LucideIcons.Zap;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className="relative w-full min-h-[360px] sm:min-h-[380px] group cursor-pointer perspective-1000 flex flex-col"
      onClick={onClick}
    >
      <div className="relative w-full h-full rounded-2xl sm:rounded-[32px] overflow-hidden border border-white/10 bg-zinc-950/90 shadow-2xl transition-all duration-500 group-hover:border-zello-orange/60 group-hover:shadow-[0_0_40px_rgba(240,90,40,0.25)] flex flex-col justify-between">

        {/* Subtle Ambient Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-zello-orange/[0.03] pointer-events-none" />

        {/* Content Container */}
        <div className="relative h-full p-4 sm:p-5 md:p-6 flex flex-col justify-between z-10 space-y-3.5 sm:space-y-4">

          {/* Top Section: Category, Icon & EL Number */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-zello-orange/15 border border-zello-orange/30 flex items-center justify-center text-zello-orange shadow-[0_0_15px_rgba(240,90,40,0.2)] group-hover:bg-zello-orange group-hover:text-white transition-all duration-300 shrink-0">
                <IconComponent size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[9px] sm:text-[10px] font-black text-slate-300 uppercase tracking-wider truncate">{power.category}</span>
                  {power.isDesignCard && (
                    <span className="text-[8px] font-mono font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      Meta
                    </span>
                  )}
                </div>
                {power.englishTitle && (
                  <span className="text-[9px] sm:text-[10px] font-mono text-zello-orange/90 font-bold tracking-tight truncate">
                    {power.englishTitle}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 shrink-0">
              <span className="text-[8px] font-black text-zello-orange uppercase tracking-[0.2em] leading-none">EL</span>
              <span className="text-xs sm:text-sm font-black text-white italic tracking-tighter leading-none">#{power.id.padStart(2, '0')}</span>
            </div>
          </div>

          {/* Categories (Matchmaker taxonomy) — discreet badges, wraps on mobile */}
          {power.categories && power.categories.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {power.categories.map((catKey) => (
                <span
                  key={`${power.id}-cat-${catKey}`}
                  title={EL_CATEGORIES[catKey]?.label}
                  className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-zello-orange/10 border border-zello-orange/20 text-zello-orange"
                >
                  {EL_CATEGORIES[catKey]?.shortLabel}
                </span>
              ))}
            </div>
          )}

          {/* Official Drawing Canvas Showcase */}
          <div className="relative w-full h-32 sm:h-36 md:h-40 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white to-slate-100 p-2.5 sm:p-3 flex items-center justify-center overflow-hidden border border-white/20 shadow-md group-hover:shadow-[0_0_25px_rgba(240,90,40,0.2)] group-hover:border-zello-orange/40 transition-all duration-300">
            {power.drawingUrl ? (
              <img
                src={power.drawingUrl}
                alt={t('deck.officialDrawingOf', { title: power.title, defaultValue: `Desenho oficial de ${power.title}` })}
                className="max-h-full max-w-full object-contain filter drop-shadow select-none group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ) : (
              <IconComponent size={40} className="text-slate-700" />
            )}

            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/10 border border-black/5 text-[7px] sm:text-[8px] font-mono text-slate-700 font-bold uppercase tracking-wider">
              {t('deck.officialDrawingBadge', { defaultValue: 'Desenho Oficial' })}
            </div>
          </div>

          {/* Title & Objective Section */}
          <div className="space-y-1.5 sm:space-y-2 flex-1">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-white uppercase italic tracking-tighter group-hover:text-zello-orange transition-colors leading-tight font-sans">
              {power.title}
            </h3>

            <p className="text-xs text-slate-300 font-medium leading-relaxed line-clamp-3">
              {power.objective}
            </p>
          </div>

          {/* Bottom Bar: Time, Group Size & Action */}
          <div className="pt-2.5 sm:pt-3 flex items-center justify-between border-t border-white/5 gap-2">
            <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono truncate">
              {power.timeNeeded || '15-30 min'} • {power.groupSize || t('deck.anyGroup', { defaultValue: 'Qualquer grupo' })}
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onConsult) onConsult();
                else if (onClick) onClick();
              }}
              className="px-3 sm:px-3.5 py-1.5 sm:py-2 bg-zello-orange text-white hover:bg-zello-orange/90 active:scale-95 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_15px_rgba(240,90,40,0.3)] shrink-0 font-sans min-h-[36px]"
            >
              <LucideIcons.Eye size={12} />
              {t('deck.viewStructure', { defaultValue: 'Ver Estrutura' })}
            </button>
          </div>
        </div>

        {/* Subtle corner highlight */}
        <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-zello-orange/10 rounded-full blur-2xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

