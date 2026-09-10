import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Gift, Cake, PartyPopper, X, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BirthdayPerson } from '../types';

interface CelebrationDisplayProps {
  currentPerson: BirthdayPerson;
  isActive: boolean;
}

/**
 * Animated High-Fidelity Birthday Cake
 * Features multi-tier cake, cream drips, cherry toppings, and 3 lit flickering candles
 */
export const AnimatedCelebrationCake: React.FC<{ size?: 'sm' | 'lg'; isLit?: boolean }> = ({
  size = 'sm',
  isLit = true,
}) => {
  const isLarge = size === 'lg';
  const width = isLarge ? 160 : 54;
  const height = isLarge ? 140 : 48;

  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Ambient Warm Golden Aura Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute rounded-full bg-gradient-to-r from-amber-400/40 via-rose-500/30 to-pink-500/30 blur-md pointer-events-none ${
          isLarge ? 'w-44 h-44 -top-6' : 'w-16 h-16 -top-2'
        }`}
      />

      <svg
        width={width}
        height={height}
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
      >
        <defs>
          <linearGradient id="cakePlateGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          <linearGradient id="cakeBottomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          <linearGradient id="cakeFrostingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>

          <linearGradient id="cakeTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>

          <linearGradient id="candleFlames" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>

          <filter id="flameGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Cake Stand / Plate */}
        <ellipse cx="80" cy="130" rx="68" ry="7" fill="url(#cakePlateGrad)" opacity="0.9" />
        <ellipse cx="80" cy="132" rx="55" ry="4" fill="#64748b" opacity="0.5" />

        {/* BOTTOM TIER (Chocolate Gold Sponge) */}
        <path
          d="M26 95 C26 95 26 122 80 122 C134 122 134 95 134 95 L134 85 C134 85 134 100 80 100 C26 100 26 85 26 85 Z"
          fill="url(#cakeBottomGrad)"
        />
        {/* Bottom Tier Frosting Swirls & Drips */}
        <path
          d="M26 85 C32 94 38 94 44 85 C50 95 58 95 64 85 C70 96 78 96 84 85 C90 95 98 95 104 85 C110 96 118 96 124 85 C130 92 134 87 134 85 C134 78 110 74 80 74 C50 74 26 78 26 85 Z"
          fill="url(#cakeFrostingGrad)"
        />
        {/* Decorative Gold Sprinkles on Bottom Tier */}
        <circle cx="48" cy="104" r="2.2" fill="#fbbf24" />
        <circle cx="70" cy="110" r="2.2" fill="#38bdf8" />
        <circle cx="92" cy="107" r="2.2" fill="#4ade80" />
        <circle cx="112" cy="103" r="2.2" fill="#f43f5e" />

        {/* TOP TIER (Vanilla Rose Sponge) */}
        <path
          d="M44 65 C44 65 44 85 80 85 C116 85 116 65 116 65 L116 56 C116 56 116 68 80 68 C44 68 44 56 44 56 Z"
          fill="url(#cakeTopGrad)"
        />
        {/* Top Tier Frosting Drips */}
        <path
          d="M44 56 C50 63 56 63 60 56 C65 64 72 64 76 56 C81 64 88 64 92 56 C98 63 104 63 108 56 C112 60 116 57 116 56 C116 49 100 46 80 46 C60 46 44 49 44 56 Z"
          fill="#ffffff"
        />

        {/* Cherry Toppings / Pearl Candies */}
        <circle cx="56" cy="50" r="4" fill="#e11d48" />
        <circle cx="58" cy="48" r="1.5" fill="#fecdd3" />
        <circle cx="80" cy="47" r="4.5" fill="#e11d48" />
        <circle cx="82" cy="45" r="1.8" fill="#fecdd3" />
        <circle cx="104" cy="50" r="4" fill="#e11d48" />
        <circle cx="106" cy="48" r="1.5" fill="#fecdd3" />

        {/* CANDLE 1 (Left - Cyan stripes) */}
        <rect x="61" y="24" width="5" height="23" rx="2.5" fill="#38bdf8" />
        <line x1="63.5" y1="20" x2="63.5" y2="24" stroke="#475569" strokeWidth="1.5" />

        {/* CANDLE 2 (Center - Golden stripes) */}
        <rect x="77.5" y="18" width="5.5" height="29" rx="2.5" fill="#fbbf24" />
        <line x1="80.25" y1="14" x2="80.25" y2="18" stroke="#475569" strokeWidth="1.5" />

        {/* CANDLE 3 (Right - Rose stripes) */}
        <rect x="94" y="24" width="5" height="23" rx="2.5" fill="#f43f5e" />
        <line x1="96.5" y1="20" x2="96.5" y2="24" stroke="#475569" strokeWidth="1.5" />

        {/* CANDLE FLAMES (Dancing & Pulsing with SVG animate / Motion) */}
        {isLit && (
          <>
            {/* Candle 1 Flame */}
            <g className="origin-bottom">
              <ellipse cx="63.5" cy="14" rx="4.5" ry="8" fill="url(#candleFlames)" filter="url(#flameGlow)" opacity="0.65" />
              <ellipse cx="63.5" cy="14" rx="3" ry="6" fill="url(#candleFlames)" />
              <ellipse cx="63.5" cy="16" rx="1.5" ry="3" fill="#ffffff" />
            </g>

            {/* Candle 2 Flame (Taller Center Flame) */}
            <g className="origin-bottom">
              <ellipse cx="80.25" cy="8" rx="5.5" ry="9" fill="url(#candleFlames)" filter="url(#flameGlow)" opacity="0.7" />
              <ellipse cx="80.25" cy="8" rx="3.8" ry="7" fill="url(#candleFlames)" />
              <ellipse cx="80.25" cy="10" rx="1.8" ry="3.5" fill="#ffffff" />
            </g>

            {/* Candle 3 Flame */}
            <g className="origin-bottom">
              <ellipse cx="96.5" cy="14" rx="4.5" ry="8" fill="url(#candleFlames)" filter="url(#flameGlow)" opacity="0.65" />
              <ellipse cx="96.5" cy="14" rx="3" ry="6" fill="url(#candleFlames)" />
              <ellipse cx="96.5" cy="16" rx="1.5" ry="3" fill="#ffffff" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
};

/**
 * Animated High-Fidelity Celebration Gift Box
 * Features shiny royal magenta box, golden metallic ribbon, and bouncing lid with bursting celebration hearts/stars
 */
export const AnimatedCelebrationGift: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'sm' }) => {
  const isLarge = size === 'lg';
  const width = isLarge ? 150 : 54;
  const height = isLarge ? 140 : 48;

  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Ambient Magenta/Pink Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute rounded-full bg-gradient-to-r from-pink-500/40 via-purple-500/30 to-amber-400/30 blur-md pointer-events-none ${
          isLarge ? 'w-40 h-40 -top-4' : 'w-16 h-16 -top-2'
        }`}
      />

      {/* Floating Celebration Particles popping out from the box */}
      <motion.div
        animate={{
          y: [-2, -8, -2],
          x: [-2, 3, -2],
          opacity: [0.5, 1, 0.5],
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 left-2 text-amber-300 pointer-events-none z-10"
      >
        <Sparkles className={isLarge ? 'w-6 h-6' : 'w-3.5 h-3.5'} />
      </motion.div>

      <motion.div
        animate={{
          y: [-1, -6, -1],
          opacity: [0.6, 1, 0.6],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{ duration: 2.1, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
        className="absolute -top-3 right-2 text-pink-400 pointer-events-none z-10"
      >
        <Heart className={`${isLarge ? 'w-5 h-5' : 'w-3 h-3'} fill-pink-500`} />
      </motion.div>

      <svg
        width={width}
        height={height}
        viewBox="0 0 150 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
      >
        <defs>
          <linearGradient id="giftBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="60%" stopColor="#be185d" />
            <stop offset="100%" stopColor="#831843" />
          </linearGradient>

          <linearGradient id="giftLidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="70%" stopColor="#db2777" />
            <stop offset="100%" stopColor="#9d174d" />
          </linearGradient>

          <linearGradient id="ribbonGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#facc15" />
            <stop offset="80%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>

        {/* Drop shadow underneath */}
        <ellipse cx="75" cy="132" rx="55" ry="6" fill="#020617" opacity="0.6" />

        {/* GIFT BOX BODY */}
        <rect x="25" y="65" width="100" height="64" rx="8" fill="url(#giftBodyGrad)" stroke="#f472b6" strokeWidth="1" />

        {/* Body Vertical Ribbon (Gold) */}
        <rect x="66" y="65" width="18" height="64" fill="url(#ribbonGoldGrad)" />
        {/* Ribbon gold edge highlights */}
        <line x1="66" y1="65" x2="66" y2="129" stroke="#fef08a" strokeWidth="1" />
        <line x1="84" y1="65" x2="84" y2="129" stroke="#92400e" strokeWidth="1" />

        {/* GIFT LID (Animated subtle pop-up angle) */}
        <g>
          {/* Lid Rectangle with soft corners */}
          <rect x="18" y="48" width="114" height="20" rx="5" fill="url(#giftLidGrad)" stroke="#fbcfe8" strokeWidth="1" />

          {/* Lid Ribbon (Gold) */}
          <rect x="66" y="48" width="18" height="20" fill="url(#ribbonGoldGrad)" />

          {/* Golden Ribbon Bow on Top */}
          {/* Left Loop */}
          <path
            d="M75 48 C65 32 40 22 42 38 C43 46 62 46 75 48 Z"
            fill="url(#ribbonGoldGrad)"
            stroke="#fef08a"
            strokeWidth="1"
          />
          <ellipse cx="56" cy="36" rx="6" ry="4" fill="#92400e" opacity="0.35" />

          {/* Right Loop */}
          <path
            d="M75 48 C85 32 110 22 108 38 C107 46 88 46 75 48 Z"
            fill="url(#ribbonGoldGrad)"
            stroke="#fef08a"
            strokeWidth="1"
          />
          <ellipse cx="94" cy="36" rx="6" ry="4" fill="#92400e" opacity="0.35" />

          {/* Center Bow Knot with jewel highlight */}
          <ellipse cx="75" cy="46" rx="8" ry="6" fill="url(#ribbonGoldGrad)" stroke="#fef08a" strokeWidth="1.5" />
          <circle cx="73" cy="44" r="2" fill="#ffffff" />

          {/* Ribbon Tails hanging down */}
          <path d="M70 49 C64 54 52 64 48 72 C52 70 58 70 64 64 Z" fill="url(#ribbonGoldGrad)" />
          <path d="M80 49 C86 54 98 64 102 72 C98 70 92 70 86 64 Z" fill="url(#ribbonGoldGrad)" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Main Interactive / Eye-Catchy Celebration Display Component
 * Shows high-fidelity Cake, Gift, and Desk Note with Pop-up Celebration modal
 */
export const CelebrationDisplay: React.FC<CelebrationDisplayProps> = ({ currentPerson, isActive }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupTab, setPopupTab] = useState<'both' | 'cake' | 'gift'>('both');

  // Launch celebration confetti whenever the popup opens
  useEffect(() => {
    if (showPopup) {
      const count = 180;
      const defaults = { origin: { y: 0.6 } };
      const fire = (particleRatio: number, opts: confetti.Options) => {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      };

      fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ec4899', '#f59e0b', '#10b981', '#38bdf8'] });
      fire(0.2, { spread: 60, colors: ['#f43f5e', '#fbbf24', '#a855f7'] });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    }
  }, [showPopup]);

  const handleOpenPopup = (tab: 'both' | 'cake' | 'gift' = 'both') => {
    setPopupTab(tab);
    setShowPopup(true);
  };

  return (
    <>
      {/* 3-CARD CELEBRATION ITEMS WITH RICH ANIMATED CAKE & GIFT */}
      <div className="w-full grid grid-cols-3 gap-2.5 sm:gap-3.5 pt-1 select-none">
        {/* 1. Eye-Catchy Birthday Cake Card */}
        <motion.div
          whileHover={{ scale: 1.025, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleOpenPopup('cake')}
          role="button"
          tabIndex={0}
          className="group relative bg-gradient-to-br from-amber-500/15 via-slate-900/80 to-slate-950/90 backdrop-blur-md rounded-xl p-2.5 sm:p-3.5 border border-amber-400/30 hover:border-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.15)] hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all cursor-pointer flex items-center gap-2.5 overflow-hidden"
          title="Click for Celebration Cake Pop-up (केक उत्सव पहा)"
        >
          {/* Subtle Shimmer Ray */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

          {/* Rich Animated Cake Display */}
          <div className="flex-shrink-0">
            <AnimatedCelebrationCake size="sm" isLit={isActive} />
          </div>

          <div className="text-left min-w-0 z-10">
            <div className="flex items-center gap-1">
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-amber-300/90 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                <span>Celebration</span>
              </span>
              <span className="text-[10px] sm:text-xs text-amber-400/80 font-['Noto_Sans_Devanagari',sans-serif]">&bull; उत्सव</span>
            </div>
            <p className="text-xs sm:text-sm lg:text-base font-bold text-white leading-tight truncate mt-0.5">
              Birthday Cake
            </p>
            <p className="text-xs sm:text-sm font-semibold text-amber-300 font-['Noto_Sans_Devanagari',sans-serif] leading-none mt-0.5">
              वाढदिवसाचा केक 🎂
            </p>
          </div>

          {/* Floating celebratory mini badge */}
          <div className="absolute top-1.5 right-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
          </div>
        </motion.div>

        {/* 2. Eye-Catchy Celebration Gift Box Card */}
        <motion.div
          whileHover={{ scale: 1.025, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleOpenPopup('gift')}
          role="button"
          tabIndex={0}
          className="group relative bg-gradient-to-br from-pink-500/15 via-slate-900/80 to-slate-950/90 backdrop-blur-md rounded-xl p-2.5 sm:p-3.5 border border-pink-400/30 hover:border-pink-400 shadow-[0_4px_20px_rgba(236,72,153,0.15)] hover:shadow-[0_0_25px_rgba(236,72,153,0.35)] transition-all cursor-pointer flex items-center gap-2.5 overflow-hidden"
          title="Click for Celebration Gift Pop-up (भेटवस्तू उत्सव पहा)"
        >
          {/* Subtle Shimmer Ray */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

          {/* Rich Animated Gift Box Display */}
          <div className="flex-shrink-0">
            <AnimatedCelebrationGift size="sm" />
          </div>

          <div className="text-left min-w-0 z-10">
            <div className="flex items-center gap-1">
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-pink-300/90 flex items-center gap-1">
                <Heart className="w-3 h-3 fill-pink-400 text-pink-400 animate-pulse" />
                <span>Special Gift</span>
              </span>
              <span className="text-[10px] sm:text-xs text-pink-400/80 font-['Noto_Sans_Devanagari',sans-serif]">&bull; खास भेट</span>
            </div>
            <p className="text-xs sm:text-sm lg:text-base font-bold text-white leading-tight truncate mt-0.5">
              From Company
            </p>
            <p className="text-xs sm:text-sm font-semibold text-pink-300 font-['Noto_Sans_Devanagari',sans-serif] leading-none mt-0.5">
              कंपनीकडून भेट 🎁
            </p>
          </div>

          {/* Floating celebratory mini badge */}
          <div className="absolute top-1.5 right-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
            </span>
          </div>
        </motion.div>

        {/* 3. Eye-Catchy Celebration Desk Note Card */}
        <motion.div
          whileHover={{ scale: 1.025, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleOpenPopup('both')}
          role="button"
          tabIndex={0}
          className="group relative bg-gradient-to-br from-teal-500/15 via-slate-900/80 to-slate-950/90 backdrop-blur-md rounded-xl p-2.5 sm:p-3.5 border border-teal-400/30 hover:border-teal-400 shadow-[0_4px_20px_rgba(20,184,166,0.15)] hover:shadow-[0_0_25px_rgba(20,184,166,0.35)] transition-all cursor-pointer flex flex-col justify-center text-center overflow-hidden"
          title="Click to view full celebration popup (संपूर्ण उत्सव पहा)"
        >
          <div className="flex items-center justify-center gap-1.5 text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-300 animate-pulse" />
            <span className="text-xs sm:text-sm lg:text-base font-bold leading-tight">
              Stay Blessed
            </span>
            <Star className="w-3.5 h-3.5 fill-amber-300 animate-pulse" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-teal-300 font-['Noto_Sans_Devanagari',sans-serif] leading-tight mt-0.5">
            सदा आनंदी व सुखी राहा
          </span>
          <span className="text-[11px] sm:text-xs text-pink-400 font-bold mt-0.5 tracking-wider flex items-center justify-center gap-1">
            <span>✨</span>
            <span>Celebrate Day</span>
            <span>✨</span>
          </span>
        </motion.div>
      </div>

      {/* POPUP BIRTHDAY CELEBRATION MODAL (Rich, Eye-Catchy Festive Showcase) */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-lg">
            {/* Backdrop click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-pink-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(244,63,94,0.35)] overflow-hidden z-10"
            >
              {/* Top Accent Rainbow Line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-pink-500 to-teal-400" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition cursor-pointer z-20 shadow-lg"
                title="Close Celebration (बंद करा)"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Title Banner */}
              <div className="text-center space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs sm:text-sm font-semibold">
                  <PartyPopper className="w-4 h-4 text-pink-400" />
                  <span>Grand Birthday Celebration &bull; <span className="font-['Noto_Sans_Devanagari',sans-serif]">वाढदिवस सोहळा</span></span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-300 to-teal-200 tracking-tight">
                  Happy Birthday, {currentPerson.nameEn}!
                </h2>
                <p className="text-base sm:text-lg font-bold text-pink-300 font-['Noto_Sans_Devanagari',sans-serif]">
                  {currentPerson.nameMr} यांना वाढदिवसाच्या मनःपूर्वक शुभेच्छा! 🎉
                </p>
              </div>

              {/* Centerpiece Showcase: Cake & Gift Display */}
              <div className="mt-6 py-4 px-6 bg-slate-950/60 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-around gap-6 relative overflow-hidden">
                {/* Background Ambient Glows */}
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />

                {/* 1. Large Animated Cake */}
                <div className="flex flex-col items-center text-center space-y-2 relative z-10">
                  <AnimatedCelebrationCake size="lg" isLit={true} />
                  <div>
                    <h4 className="text-base font-bold text-amber-300 flex items-center justify-center gap-1.5">
                      <span>Celebration Cake</span>
                      <span className="text-xs text-amber-400 font-['Noto_Sans_Devanagari',sans-serif]">(केक)</span>
                    </h4>
                    <p className="text-xs text-slate-300 font-medium">
                      Sweet moments for your special day!
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                {/* 2. Large Animated Gift Box */}
                <div className="flex flex-col items-center text-center space-y-2 relative z-10">
                  <AnimatedCelebrationGift size="lg" />
                  <div>
                    <h4 className="text-base font-bold text-pink-300 flex items-center justify-center gap-1.5">
                      <span>Corporate Gift</span>
                      <span className="text-xs text-pink-400 font-['Noto_Sans_Devanagari',sans-serif]">(विशेष भेट)</span>
                    </h4>
                    <p className="text-xs text-slate-300 font-medium">
                      Token of appreciation from Savera Group!
                    </p>
                  </div>
                </div>
              </div>

              {/* Congratulatory Footer Note */}
              <div className="mt-5 text-center space-y-2">
                <p className="text-sm sm:text-base text-slate-200 leading-snug">
                  &ldquo;Wishing you a year filled with wonderful achievements, good health, and joyful moments.&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-teal-300 font-['Noto_Sans_Devanagari',sans-serif] font-medium">
                  &ldquo;आपणास पुढील वर्षात उत्तम आरोग्य, भरभराट आणि सुख-समृद्धी लाभो हीच सवेरा समूहातर्फे सदिच्छा.&rdquo;
                </p>

                <div className="pt-3 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      confetti({
                        particleCount: 150,
                        spread: 80,
                        origin: { y: 0.6 },
                        colors: ['#ec4899', '#f59e0b', '#38bdf8', '#10b981'],
                      });
                    }}
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-sm shadow-lg hover:shadow-pink-500/40 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <PartyPopper className="w-4 h-4" />
                    <span>Pop More Confetti! / उत्सव साजरा करा 🎉</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowPopup(false)}
                    className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-slate-200 font-semibold text-sm transition-all cursor-pointer"
                  >
                    Close / बंद करा
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
