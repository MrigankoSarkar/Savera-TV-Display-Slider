import React from 'react';
import { motion } from 'motion/react';
import {
  AlertTriangle,
  ShieldCheck,
  CheckCircle,
  XCircle,
  ShieldAlert,
  Flame,
  Zap,
  Info,
} from 'lucide-react';
import { SlideData } from '../types';
import { SaveraLogo } from './SaveraLogo';
import { SafetyIllustration } from './SafetyIllustrations';

interface SafetySlideProps {
  slide: SlideData;
  isActive: boolean;
}

export const SafetySlide: React.FC<SafetySlideProps> = ({ slide, isActive }) => {
  return (
    <div
      id={`safety-slide-${slide.id}`}
      className="relative w-full h-full bg-slate-950 text-white font-sans flex flex-col justify-between p-3 sm:p-4 lg:p-6 overflow-hidden select-none"
    >
      {/* VIBRANT PALETTE AMBIENT GLOWING SHAPES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[8%] w-32 h-44 rounded-[50%] bg-gradient-to-t from-pink-600/30 to-pink-400/10 blur-lg transform -rotate-12 pointer-events-none" />
        <div className="absolute top-[15%] right-[15%] w-28 h-40 rounded-[50%] bg-gradient-to-t from-blue-500/30 to-blue-300/10 blur-lg transform rotate-6 pointer-events-none" />
        <div className="absolute bottom-[20%] left-[5%] w-24 h-32 rounded-[50%] bg-gradient-to-t from-teal-500/30 to-teal-200/10 blur-lg pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-36 h-48 rounded-[50%] bg-gradient-to-t from-purple-600/30 to-purple-400/10 blur-lg pointer-events-none" />
      </div>

      {/* Decorative High-Tech Corner Watermark */}
      <div className="absolute top-2 right-4 p-4 z-40 pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 100 100" className="opacity-20">
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M50 5 L50 95 M5 50 L95 50" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* TOP HEADER: Exact Company Header with Central Logo & Bilingual Titles */}
      <header className="relative z-20 border-b border-white/10 pb-3 bg-slate-950/40 backdrop-blur-md rounded-2xl px-4 pt-1 mb-1">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 max-w-7xl mx-auto w-full">
          
          {/* Left Title: English */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-teal-400 uppercase font-['Montserrat',sans-serif]">
              {slide.titleEn}
            </h2>
          </div>

          {/* Center: Corporate Branding & Savera Spiral Logo */}
          <div className="flex items-center justify-center gap-3 px-4 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 shadow-lg">
            <SaveraLogo size="sm" />
            <div className="text-center">
              <span className="block text-xs sm:text-sm font-bold text-white tracking-wider font-['Montserrat',sans-serif]">
                SAVERA AUTO COMPS PVT LTD <span className="font-['Noto_Sans_Devanagari',sans-serif] text-slate-300 font-normal">| सावेरा ऑटो कॉम्प्स प्रा. लि.</span>
              </span>
              <span className="text-[11px] font-mono font-semibold text-teal-400 tracking-widest uppercase">
                {slide.unit} &bull; <span className="font-['Noto_Sans_Devanagari',sans-serif] font-normal">युनिट - १</span>
              </span>
            </div>
          </div>

          {/* Right Title: Marathi */}
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-amber-300 font-['Noto_Sans_Devanagari',sans-serif]">
              {slide.titleMr}
            </h2>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA: Left Side Content (60%) | Right Side Big Safety Image (40%) */}
      <main className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch max-w-7xl mx-auto w-full my-2 overflow-y-auto lg:overflow-visible">
        
        {/* ================= LEFT SIDE: EXACT CONTENT (HAZARDS, PPE, DO'S, DON'TS) ================= */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          
          {/* TOP ROW: Hazards & PPE Lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* 1. HAZARDS BOX (धोके) */}
            {slide.hazards && slide.hazards.length > 0 && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/70 backdrop-blur-md rounded-xl border border-rose-500/40 p-3 sm:p-4 shadow-[0_8px_25px_rgba(244,63,94,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 pb-2 mb-2 border-b border-rose-500/20 text-rose-400">
                    <AlertTriangle className="w-5 h-5 text-rose-500 animate-pulse" />
                    <h3 className="text-sm sm:text-base font-black tracking-wide uppercase text-rose-400">
                      Hazards <span className="text-amber-400 font-mono">(धोके)</span>
                    </h3>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm">
                    {slide.hazards.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0 shadow-[0_0_6px_#f43f5e]" />
                        <span className="text-slate-200">
                          <strong className="font-semibold text-white">{item.en}</strong>{' '}
                          <span className="text-slate-400 font-['Noto_Sans_Devanagari']">
                            ({item.mr})
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* 2. PPE LIST BOX (पीपीई) */}
            {slide.ppeList && slide.ppeList.length > 0 && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-slate-900/70 backdrop-blur-md rounded-xl border border-teal-500/40 p-3 sm:p-4 shadow-[0_8px_25px_rgba(20,184,166,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 pb-2 mb-2 border-b border-teal-500/20 text-teal-400">
                    <ShieldCheck className="w-5 h-5 text-teal-400" />
                    <h3 className="text-sm sm:text-base font-black tracking-wide uppercase text-teal-400">
                      PPE <span className="text-cyan-300 font-mono">(पीपीई)</span>
                    </h3>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm">
                    {slide.ppeList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0 shadow-[0_0_6px_#14b8a6]" />
                        <span className="text-slate-200">
                          <strong className="font-semibold text-white">{item.en}</strong>{' '}
                          <span className="text-slate-400 font-['Noto_Sans_Devanagari']">
                            ({item.mr})
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>

          {/* BOTTOM ROW: DO'S (करावे) & DON'TS (करू नये) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* DO'S (करावे) */}
            {slide.dos && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-slate-900/70 backdrop-blur-md rounded-xl border border-emerald-500/40 p-3 sm:p-4 shadow-[0_8px_25px_rgba(16,185,129,0.12)]"
              >
                <div className="flex items-center gap-2 pb-2 mb-2 border-b border-emerald-500/20 text-emerald-400">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-sm sm:text-base font-black tracking-wide uppercase text-emerald-400">
                    Do&apos;s <span className="text-emerald-300 font-mono">✅ (करावे)</span>
                  </h3>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm">
                  {slide.dos.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-200">
                        <span className="font-semibold text-emerald-100">{item.en}</span>{' '}
                        <span className="text-slate-300 block text-[11px] sm:text-xs font-['Noto_Sans_Devanagari']">
                          {item.mr}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* DON'TS (करू नये) */}
            {slide.donts && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="bg-slate-900/70 backdrop-blur-md rounded-xl border border-pink-500/40 p-3 sm:p-4 shadow-[0_8px_25px_rgba(236,72,153,0.12)]"
              >
                <div className="flex items-center gap-2 pb-2 mb-2 border-b border-pink-500/20 text-pink-400">
                  <XCircle className="w-5 h-5 text-pink-400" />
                  <h3 className="text-sm sm:text-base font-black tracking-wide uppercase text-pink-400">
                    Don&apos;ts <span className="text-pink-300 font-mono">❌ (करू नये)</span>
                  </h3>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm">
                  {slide.donts.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <XCircle className="w-3.5 h-3.5 text-pink-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-200">
                        <span className="font-semibold text-pink-100">{item.en}</span>{' '}
                        <span className="text-slate-300 block text-[11px] sm:text-xs font-['Noto_Sans_Devanagari']">
                          {item.mr}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* FOOTER SAFETY FIRST BANNER */}
          {slide.safetyFirstText && (
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-gradient-to-r from-indigo-950/60 via-slate-900/90 to-teal-950/60 rounded-xl border border-teal-400/50 py-2.5 px-4 shadow-[0_0_30px_rgba(20,184,166,0.25)] text-center flex items-center justify-center gap-3"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf] animate-ping" />
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-300 font-['Montserrat',sans-serif]">
                  {slide.safetyFirstText.en} &bull; <span className="font-['Noto_Sans_Devanagari',sans-serif]">सुरक्षा प्रथम</span>
                </h4>
                <p className="text-xs sm:text-sm font-bold text-slate-200 font-['Noto_Sans_Devanagari',sans-serif]">
                  {slide.safetyFirstText.mr} <span className="font-sans text-teal-300 font-semibold text-xs ml-1">(Stay Alert, Stay Safe)</span>
                </p>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf] animate-ping" />
            </motion.div>
          )}
        </div>

        {/* ================= RIGHT SIDE: BIG SAFETY IMAGE (40%) ================= */}
        <div className="lg:col-span-5 bg-slate-900/70 backdrop-blur-md rounded-2xl border border-white/10 p-2 sm:p-3 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          {/* Savera Personal Protective Equipment Badge Header */}
          <div className="absolute top-3 right-3 z-30 flex items-center gap-2 bg-slate-950/80 px-3 py-1 rounded-full border border-teal-500/30">
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
              <span>PPE MANDATE</span>
              <span className="text-slate-500 font-sans">&bull;</span>
              <span className="font-['Noto_Sans_Devanagari',sans-serif]">पीपीई नियम</span>
            </span>
          </div>

          {/* Big Safety Illustration Component */}
          <SafetyIllustration
            roleType={slide.roleType}
            roleTitle={slide.safetyRoleTitle}
            callouts={slide.callouts}
            secondaryOperator={slide.secondaryOperator}
            has3RGraphic={slide.has3RGraphic}
          />
        </div>
      </main>

      {/* FOOTER BAR: Warning Chevron Stripes & Status */}
      <footer className="relative z-20 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <span className="text-xs font-medium text-slate-300 tracking-wider flex items-center gap-1 flex-wrap">
            <span className="uppercase tracking-widest">EHS Division &bull; Safety Policy Compliance</span>
            <span className="font-['Noto_Sans_Devanagari',sans-serif] text-slate-400 text-[11px]">(ईएचएस विभाग &bull; सुरक्षा नियम पालन)</span>
          </span>
        </div>

        {/* Note space for bottom right clock */}
        <div className="pr-48 text-xs font-mono uppercase tracking-widest text-slate-400 hidden sm:block">
          Duration: 10s &bull; Slide 0{slide.id} of 10 <span className="font-['Noto_Sans_Devanagari',sans-serif] text-[11px]">(स्लाइड ०{slide.id}/१०)</span>
        </div>
      </footer>
    </div>
  );
};
