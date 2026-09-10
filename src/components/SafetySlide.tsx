import React from 'react';
import { motion } from 'motion/react';
import {
  AlertTriangle,
  ShieldCheck,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { SlideData } from '../types';
import { SaveraLogo } from './SaveraLogo';
import { SafetyIllustration } from './SafetyIllustrations';

interface SafetySlideProps {
  slide: SlideData;
  isActive: boolean;
}

// Dynamically scales typography, icon sizes, and spacing based on item count
// Guarantees high-visibility text from a distance on TV screens,
// while auto-adjusting to fit EXACTLY inside the box boundaries on all display types
const getListItemStyles = (count: number) => {
  if (count <= 2) {
    return {
      en: 'text-[clamp(0.95rem,1.25vw,1.45rem)] font-black leading-snug',
      mr: 'text-[clamp(0.82rem,1.05vw,1.2rem)] font-semibold leading-snug',
      bullet: 'w-3 h-3 sm:w-3.5 sm:h-3.5 mt-1 sm:mt-1.5',
      icon: 'w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 mt-0.5',
      gap: 'gap-2.5 sm:gap-3.5',
    };
  }
  if (count === 3) {
    return {
      en: 'text-[clamp(0.85rem,1.12vw,1.25rem)] font-extrabold leading-snug',
      mr: 'text-[clamp(0.74rem,0.92vw,1.05rem)] font-semibold leading-snug',
      bullet: 'w-2.5 h-2.5 sm:w-3 sm:h-3 mt-1',
      icon: 'w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mt-0.5',
      gap: 'gap-2 sm:gap-2.5',
    };
  }
  // count >= 4 (Auto-adjusts tight spacing and proportional typography so nothing overflows the box)
  return {
    en: 'text-[clamp(0.76rem,0.95vw,1.08rem)] font-bold leading-tight',
    mr: 'text-[clamp(0.68rem,0.82vw,0.95rem)] font-semibold leading-tight',
    bullet: 'w-2 h-2 sm:w-2.5 sm:h-2.5 mt-1',
    icon: 'w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mt-0.5',
    gap: 'gap-1.5 sm:gap-2',
  };
};

export const SafetySlide: React.FC<SafetySlideProps> = ({ slide, isActive }) => {
  return (
    <div
      id={`safety-slide-${slide.id}`}
      className="relative w-full h-full bg-slate-950 text-white font-sans flex flex-col justify-between p-2.5 sm:p-3.5 lg:p-4 overflow-hidden select-none"
    >
      {/* VIBRANT PALETTE AMBIENT GLOWING SHAPES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[8%] w-32 h-44 rounded-[50%] bg-gradient-to-t from-pink-600/30 to-pink-400/10 blur-lg transform -rotate-12 pointer-events-none" />
        <div className="absolute top-[15%] right-[15%] w-28 h-40 rounded-[50%] bg-gradient-to-t from-blue-500/30 to-blue-300/10 blur-lg transform rotate-6 pointer-events-none" />
        <div className="absolute bottom-[20%] left-[5%] w-24 h-32 rounded-[50%] bg-gradient-to-t from-teal-500/30 to-teal-200/10 blur-lg pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-36 h-48 rounded-[50%] bg-gradient-to-t from-purple-600/30 to-purple-400/10 blur-lg pointer-events-none" />
      </div>

      {/* TOP HEADER: Exact Company Header with Central Logo & Bilingual Titles */}
      <header className="relative z-20 border-b border-white/10 pb-2.5 bg-slate-950/50 backdrop-blur-md rounded-2xl px-4 pt-1 mb-1 flex-shrink-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 max-w-[1850px] mx-auto w-full pr-0 md:pr-48">
          
          {/* Left Title: English */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black tracking-tight text-teal-400 uppercase font-['Montserrat',sans-serif]">
              {slide.titleEn}
            </h2>
          </div>

          {/* Center: Corporate Branding & Savera Spiral Logo */}
          <div className="flex items-center justify-center gap-3 px-4 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 shadow-lg">
            <SaveraLogo size="sm" />
            <div className="text-center">
              <span className="block text-xs sm:text-sm lg:text-base font-bold text-white tracking-wider font-['Montserrat',sans-serif]">
                SAVERA AUTO COMPS PVT LTD <span className="font-['Noto_Sans_Devanagari',sans-serif] text-slate-300 font-normal">| सावेरा ऑटो कॉम्प्स प्रा. लि.</span>
              </span>
              <span className="text-[11px] sm:text-xs lg:text-sm font-mono font-semibold text-teal-400 tracking-widest uppercase">
                {slide.unit} &bull; <span className="font-['Noto_Sans_Devanagari',sans-serif] font-normal">युनिट - १</span>
              </span>
            </div>
          </div>

          {/* Right Title: Marathi */}
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black tracking-tight text-amber-300 font-['Noto_Sans_Devanagari',sans-serif]">
              {slide.titleMr}
            </h2>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA: Left Side Content (60%) | Right Side Big Safety Image (40%) */}
      <main className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 items-stretch max-w-[1850px] mx-auto w-full my-1 min-h-0 overflow-y-auto lg:overflow-hidden">
        
        {/* ================= LEFT SIDE: EXACT CONTENT (HAZARDS, PPE, DO'S, DON'TS) ================= */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-2 sm:gap-2.5 lg:gap-3 h-full min-h-0">
          
          {/* TOP ROW: Hazards & PPE Lists */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 lg:gap-3 min-h-0">
            
            {/* 1. HAZARDS BOX (धोके) */}
            {slide.hazards && slide.hazards.length > 0 && (() => {
              const styles = getListItemStyles(slide.hazards.length);
              return (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-rose-500/40 p-2.5 sm:p-3 lg:p-3.5 xl:p-4 shadow-[0_8px_25px_rgba(244,63,94,0.12)] flex flex-col h-full min-h-0 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-2 pb-1.5 sm:pb-2 mb-1 border-b border-rose-500/30 text-rose-400 flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-rose-500 animate-pulse flex-shrink-0" />
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-wide uppercase text-rose-400 flex items-center gap-1.5 flex-wrap">
                      <span>Hazards</span>
                      <span className="text-amber-400 font-semibold font-['Noto_Sans_Devanagari'] text-xs sm:text-sm md:text-base">(धोके)</span>
                    </h3>
                  </div>

                  {/* Auto-adjusting List perfectly filling the box area to eliminate unnecessary gaps */}
                  <ul className="flex-1 flex flex-col justify-evenly min-h-0 py-0.5 overflow-hidden">
                    {slide.hazards.map((item, idx) => (
                      <li key={idx} className={`flex items-start ${styles.gap}`}>
                        <span className={`${styles.bullet} rounded-full bg-rose-400 flex-shrink-0 shadow-[0_0_8px_#f43f5e]`} />
                        <div className="leading-snug min-w-0">
                          <span className={`block text-white ${styles.en}`}>
                            {item.en}
                          </span>
                          <span className={`block text-slate-300 font-['Noto_Sans_Devanagari'] ${styles.mr} mt-0.5`}>
                            ({item.mr})
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })()}

            {/* 2. PPE LIST BOX (पीपीई) */}
            {slide.ppeList && slide.ppeList.length > 0 && (() => {
              const styles = getListItemStyles(slide.ppeList.length);
              return (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-teal-500/40 p-2.5 sm:p-3 lg:p-3.5 xl:p-4 shadow-[0_8px_25px_rgba(20,184,166,0.12)] flex flex-col h-full min-h-0 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-2 pb-1.5 sm:pb-2 mb-1 border-b border-teal-500/30 text-teal-400 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-teal-400 flex-shrink-0" />
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-wide uppercase text-teal-400 flex items-center gap-1.5 flex-wrap">
                      <span>PPE</span>
                      <span className="text-cyan-300 font-semibold font-['Noto_Sans_Devanagari'] text-xs sm:text-sm md:text-base">(पीपीई)</span>
                    </h3>
                  </div>

                  {/* Auto-adjusting List perfectly filling the box area to eliminate unnecessary gaps */}
                  <ul className="flex-1 flex flex-col justify-evenly min-h-0 py-0.5 overflow-hidden">
                    {slide.ppeList.map((item, idx) => (
                      <li key={idx} className={`flex items-start ${styles.gap}`}>
                        <span className={`${styles.bullet} rounded-full bg-teal-400 flex-shrink-0 shadow-[0_0_8px_#14b8a6]`} />
                        <div className="leading-snug min-w-0">
                          <span className={`block text-white ${styles.en}`}>
                            {item.en}
                          </span>
                          <span className={`block text-slate-300 font-['Noto_Sans_Devanagari'] ${styles.mr} mt-0.5`}>
                            ({item.mr})
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })()}
          </div>

          {/* BOTTOM ROW: DO'S (करावे) & DON'TS (करू नये) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 lg:gap-3 min-h-0">
            
            {/* DO'S (करावे) */}
            {slide.dos && (() => {
              const styles = getListItemStyles(slide.dos.length);
              return (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-emerald-500/40 p-2.5 sm:p-3 lg:p-3.5 xl:p-4 shadow-[0_8px_25px_rgba(16,185,129,0.12)] flex flex-col h-full min-h-0 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-2 pb-1.5 sm:pb-2 mb-1 border-b border-emerald-500/30 text-emerald-400 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-emerald-400 flex-shrink-0" />
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-wide uppercase text-emerald-400 flex items-center gap-1.5 flex-wrap">
                      <span>Do&apos;s</span>
                      <span className="text-emerald-300 font-semibold font-['Noto_Sans_Devanagari'] text-xs sm:text-sm md:text-base">✅ (करावे)</span>
                    </h3>
                  </div>

                  {/* Auto-adjusting List perfectly filling the box area to eliminate unnecessary gaps */}
                  <ul className="flex-1 flex flex-col justify-evenly min-h-0 py-0.5 overflow-hidden">
                    {slide.dos.map((item, idx) => (
                      <li key={idx} className={`flex items-start ${styles.gap}`}>
                        <CheckCircle className={`${styles.icon} text-emerald-400 flex-shrink-0`} />
                        <div className="leading-snug min-w-0">
                          <span className={`block font-black text-emerald-100 ${styles.en}`}>
                            {item.en}
                          </span>
                          <span className={`block text-emerald-300 font-semibold font-['Noto_Sans_Devanagari'] ${styles.mr} mt-0.5`}>
                            {item.mr}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })()}

            {/* DON'TS (करू नये) */}
            {slide.donts && (() => {
              const styles = getListItemStyles(slide.donts.length);
              return (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-pink-500/40 p-2.5 sm:p-3 lg:p-3.5 xl:p-4 shadow-[0_8px_25px_rgba(236,72,153,0.12)] flex flex-col h-full min-h-0 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-2 pb-1.5 sm:pb-2 mb-1 border-b border-pink-500/30 text-pink-400 flex-shrink-0">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-pink-400 flex-shrink-0" />
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-wide uppercase text-pink-400 flex items-center gap-1.5 flex-wrap">
                      <span>Don&apos;ts</span>
                      <span className="text-pink-300 font-semibold font-['Noto_Sans_Devanagari'] text-xs sm:text-sm md:text-base">❌ (करू नये)</span>
                    </h3>
                  </div>

                  {/* Auto-adjusting List perfectly filling the box area to eliminate unnecessary gaps */}
                  <ul className="flex-1 flex flex-col justify-evenly min-h-0 py-0.5 overflow-hidden">
                    {slide.donts.map((item, idx) => (
                      <li key={idx} className={`flex items-start ${styles.gap}`}>
                        <XCircle className={`${styles.icon} text-pink-400 flex-shrink-0`} />
                        <div className="leading-snug min-w-0">
                          <span className={`block font-black text-pink-100 ${styles.en}`}>
                            {item.en}
                          </span>
                          <span className={`block text-pink-300 font-semibold font-['Noto_Sans_Devanagari'] ${styles.mr} mt-0.5`}>
                            {item.mr}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })()}
          </div>

          {/* FOOTER SAFETY FIRST BANNER */}
          {slide.safetyFirstText && (
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-gradient-to-r from-indigo-950/90 via-slate-900/95 to-teal-950/90 rounded-xl border border-teal-400/50 py-1.5 sm:py-2.5 px-3 sm:px-5 shadow-[0_0_25px_rgba(20,184,166,0.2)] text-center flex items-center justify-center gap-2 sm:gap-4 flex-shrink-0"
            >
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-teal-400 shadow-[0_0_12px_#2dd4bf] animate-ping flex-shrink-0" />
              <div>
                <h4 className="text-[clamp(0.95rem,1.25vw,1.45rem)] font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-indigo-300 font-['Montserrat',sans-serif]">
                  {slide.safetyFirstText.en} &bull; <span className="font-['Noto_Sans_Devanagari',sans-serif]">सुरक्षा प्रथम</span>
                </h4>
                <p className="text-[clamp(0.75rem,0.95vw,1.05rem)] font-bold text-amber-300 font-['Noto_Sans_Devanagari',sans-serif] mt-0.5">
                  {slide.safetyFirstText.mr} <span className="font-sans text-teal-300 font-semibold text-[clamp(0.7rem,0.85vw,0.95rem)] ml-1.5">(Stay Alert, Stay Safe)</span>
                </p>
              </div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-teal-400 shadow-[0_0_12px_#2dd4bf] animate-ping flex-shrink-0" />
            </motion.div>
          )}
        </div>

        {/* ================= RIGHT SIDE: BIG SAFETY IMAGE (40%) ================= */}
        <div className="lg:col-span-5 bg-slate-900/70 backdrop-blur-md rounded-2xl border border-white/10 p-2 sm:p-3 lg:p-4 flex flex-col items-center justify-between relative overflow-hidden shadow-2xl h-full min-h-0">
          {/* Centered Fig Heading like "Machine Operator | मशीन ऑपरेटर" for all slides */}
          {slide.figHeading && (
            <div className="w-full flex items-center justify-center text-center px-4 py-2 sm:py-2.5 mb-2 sm:mb-2.5 rounded-xl bg-slate-950/90 border border-teal-500/40 shadow-lg flex-shrink-0">
              <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-center">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black text-teal-300 tracking-wide font-sans">
                  {slide.figHeading.en}
                </span>
                <span className="text-teal-400/60 font-light text-base sm:text-lg lg:text-xl xl:text-2xl select-none">|</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-amber-300 font-['Noto_Sans_Devanagari',sans-serif]">
                  {slide.figHeading.mr}
                </span>
              </div>
            </div>
          )}

          {/* Big Safety Illustration Component */}
          <div className="w-full flex-1 flex items-center justify-center min-h-0 overflow-hidden">
            <SafetyIllustration
              slideId={slide.id}
              roleType={slide.roleType}
              roleTitle={slide.safetyRoleTitle}
              callouts={slide.callouts}
              secondaryOperator={slide.secondaryOperator}
              has3RGraphic={slide.has3RGraphic}
            />
          </div>
        </div>
      </main>

      {/* FOOTER BAR: Warning Chevron Stripes & Status */}
      <footer className="relative z-20 flex items-center justify-between text-xs sm:text-sm text-slate-400 pt-2 border-t border-white/10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wider flex items-center gap-1.5 flex-wrap">
            <span className="uppercase tracking-widest font-semibold">EHS Division &bull; Safety Policy Compliance</span>
            <span className="font-['Noto_Sans_Devanagari',sans-serif] text-slate-400 text-xs sm:text-sm">(ईएचएस विभाग &bull; सुरक्षा नियम पालन)</span>
          </span>
        </div>
      </footer>
    </div>
  );
};
