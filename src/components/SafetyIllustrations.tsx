import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, AlertTriangle, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { CalloutItem } from '../types';

interface SafetyIllustrationProps {
  roleType?: string;
  roleTitle?: {
    en: string;
    mr: string;
    dept?: string;
  };
  callouts?: CalloutItem[];
  secondaryOperator?: {
    roleTitle: {
      en: string;
      mr: string;
    };
    callouts: CalloutItem[];
  };
  has3RGraphic?: boolean;
}

export const SafetyIllustration: React.FC<SafetyIllustrationProps> = ({
  roleType,
  roleTitle,
  callouts = [],
  secondaryOperator,
  has3RGraphic,
}) => {
  const [activeCalloutIndex, setActiveCalloutIndex] = useState(0);

  // Cycle through callouts sequentially every 2.2 seconds to draw employee attention
  useEffect(() => {
    if (callouts.length === 0) return;
    const interval = setInterval(() => {
      setActiveCalloutIndex((prev) => (prev + 1) % callouts.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [callouts]);

  // Render operator SVG character based on roleType
  const renderOperatorVector = () => {
    switch (roleType) {
      case 'welder':
        return (
          <svg viewBox="0 0 300 420" className="w-full h-full max-h-[520px] drop-shadow-2xl">
            <defs>
              <linearGradient id="welderSuit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient id="leatherApron" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient id="welderShield" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <radialGradient id="welderGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Aura circle */}
            <circle cx="150" cy="210" r="140" fill="url(#welderGlow)" />

            {/* Legs with Leather Leg Guards */}
            <rect x="110" y="240" width="32" height="110" rx="6" fill="#1e3a8a" />
            <rect x="158" y="240" width="32" height="110" rx="6" fill="#1e3a8a" />
            
            {/* Leather Leg Guards (brown protective overlay) */}
            <rect x="108" y="270" width="36" height="70" rx="4" fill="url(#leatherApron)" stroke="#451a03" strokeWidth="2" />
            <rect x="156" y="270" width="36" height="70" rx="4" fill="url(#leatherApron)" stroke="#451a03" strokeWidth="2" />

            {/* Safety Shoes (heavy steel toe black/dark gray) */}
            <path d="M 102 350 L 146 350 C 146 362, 140 368, 120 368 L 98 368 C 96 362, 98 354, 102 350 Z" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <path d="M 154 350 L 198 350 C 202 354, 204 362, 202 368 L 180 368 C 160 368, 154 362, 154 350 Z" fill="#0f172a" stroke="#475569" strokeWidth="2" />

            {/* Body Torso */}
            <rect x="100" y="115" width="100" height="135" rx="14" fill="url(#welderSuit)" />

            {/* Leather Apron (Chest to knees) */}
            <path
              d="M 116 125 L 184 125 L 192 265 L 108 265 Z"
              fill="url(#leatherApron)"
              stroke="#78350f"
              strokeWidth="3"
            />
            {/* Apron Straps */}
            <line x1="126" y1="125" x2="110" y2="105" stroke="#92400e" strokeWidth="4" />
            <line x1="174" y1="125" x2="190" y2="105" stroke="#92400e" strokeWidth="4" />

            {/* Arms */}
            <rect x="70" y="125" width="28" height="95" rx="8" fill="#1e3a8a" transform="rotate(8 70 125)" />
            <rect x="202" y="125" width="28" height="95" rx="8" fill="#1e3a8a" transform="rotate(-8 202 125)" />

            {/* Heavy Leather Welding Gloves */}
            <rect x="62" y="195" width="34" height="42" rx="6" fill="url(#leatherApron)" stroke="#451a03" strokeWidth="2" />
            <circle cx="78" cy="238" r="8" fill="#b45309" />
            <rect x="204" y="195" width="34" height="42" rx="6" fill="url(#leatherApron)" stroke="#451a03" strokeWidth="2" />
            <circle cx="222" cy="238" r="8" fill="#b45309" />

            {/* Head & Neck */}
            <rect x="135" y="90" width="30" height="25" fill="#fbcfe8" rx="4" />
            <circle cx="150" cy="75" r="32" fill="#fbcfe8" />

            {/* Welding Helmet / Face Shield */}
            <path
              d="M 124 45 C 124 30, 176 30, 176 45 L 180 82 C 180 102, 168 112, 150 112 C 132 112, 120 102, 120 82 Z"
              fill="url(#welderShield)"
              stroke="#0284c7"
              strokeWidth="2.5"
            />
            {/* Shield Viewport Glass */}
            <rect x="134" y="62" width="32" height="18" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            {/* Spark reflection on glass */}
            <line x1="138" y1="66" x2="162" y2="76" stroke="#e0f2fe" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'machine':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <svg viewBox="0 0 300 400" className="w-full h-full max-h-[480px] drop-shadow-2xl">
              <defs>
                <linearGradient id="machinistSuit" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>
                <linearGradient id="safetyCap" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#ca8a04" />
                </linearGradient>
              </defs>

              {/* Legs */}
              <rect x="110" y="235" width="32" height="115" rx="6" fill="#1e293b" />
              <rect x="158" y="235" width="32" height="115" rx="6" fill="#1e293b" />
              {/* Shoes */}
              <rect x="100" y="350" width="46" height="20" rx="5" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
              <rect x="154" y="350" width="46" height="20" rx="5" fill="#0f172a" stroke="#64748b" strokeWidth="2" />

              {/* Torso */}
              <rect x="100" y="115" width="100" height="125" rx="12" fill="url(#machinistSuit)" />

              {/* Work Uniform details: buttons */}
              <circle cx="150" cy="140" r="4" fill="#fbbf24" />
              <circle cx="150" cy="165" r="4" fill="#fbbf24" />
              <circle cx="150" cy="190" r="4" fill="#fbbf24" />
              <circle cx="150" cy="215" r="4" fill="#fbbf24" />

              {/* Arms & Safety Gloves */}
              <rect x="72" y="125" width="26" height="90" rx="6" fill="#0284c7" />
              <rect x="202" y="125" width="26" height="90" rx="6" fill="#0284c7" />
              {/* White/grey protective work gloves */}
              <rect x="68" y="205" width="32" height="32" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
              <rect x="200" y="205" width="32" height="32" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />

              {/* Head */}
              <circle cx="150" cy="75" r="30" fill="#fde047" />

              {/* Safety Hard Hat Helmet */}
              <path d="M 120 62 C 120 40, 180 40, 180 62 Z" fill="url(#safetyCap)" stroke="#a16207" strokeWidth="2" />
              <rect x="114" y="60" width="72" height="8" rx="3" fill="#ca8a04" />

              {/* Ear Protectors / Earmuffs */}
              <rect x="116" y="65" width="8" height="18" rx="3" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />
              <rect x="176" y="65" width="8" height="18" rx="3" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />
              <path d="M 120 65 C 120 48, 180 48, 180 65" stroke="#ef4444" strokeWidth="3" fill="none" />

              {/* Safety Glasses */}
              <rect x="134" y="72" width="14" height="10" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
              <rect x="152" y="72" width="14" height="10" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
              <line x1="148" y1="77" x2="152" y2="77" stroke="#0284c7" strokeWidth="2" />
            </svg>
          </div>
        );

      case 'forklift':
        return (
          <svg viewBox="0 0 300 420" className="w-full h-full max-h-[500px] drop-shadow-2xl">
            <defs>
              <linearGradient id="hivisVest" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#84cc16" />
                <stop offset="100%" stopColor="#65a30d" />
              </linearGradient>
            </defs>
            {/* Pants */}
            <rect x="110" y="235" width="32" height="115" rx="6" fill="#1e3a8a" />
            <rect x="158" y="235" width="32" height="115" rx="6" fill="#1e3a8a" />
            {/* Boots */}
            <rect x="100" y="350" width="46" height="20" rx="5" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
            <rect x="154" y="350" width="46" height="20" rx="5" fill="#0f172a" stroke="#64748b" strokeWidth="2" />

            {/* Torso & High-Vis Vest */}
            <rect x="100" y="115" width="100" height="125" rx="12" fill="url(#hivisVest)" />
            {/* Reflective silver stripes */}
            <line x1="100" y1="145" x2="200" y2="145" stroke="#f8fafc" strokeWidth="8" />
            <line x1="100" y1="195" x2="200" y2="195" stroke="#f8fafc" strokeWidth="8" />
            <line x1="125" y1="115" x2="125" y2="240" stroke="#f8fafc" strokeWidth="6" />
            <line x1="175" y1="115" x2="175" y2="240" stroke="#f8fafc" strokeWidth="6" />

            {/* Diagonal Seatbelt indicator across body */}
            <line x1="110" y1="120" x2="190" y2="235" stroke="#0f172a" strokeWidth="7" strokeDasharray="6 3" />

            {/* Arms */}
            <rect x="72" y="125" width="26" height="90" rx="6" fill="#1e3a8a" />
            <rect x="202" y="125" width="26" height="90" rx="6" fill="#1e3a8a" />
            {/* Work Gloves */}
            <circle cx="85" cy="225" r="14" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
            <circle cx="215" cy="225" r="14" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />

            {/* Head & Face */}
            <circle cx="150" cy="75" r="30" fill="#fed7aa" />
            
            {/* Yellow Safety Helmet */}
            <path d="M 120 62 C 120 38, 180 38, 180 62 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="2.5" />
            <rect x="114" y="60" width="72" height="8" rx="3" fill="#ca8a04" />
          </svg>
        );

      case 'powder_coating':
      case 'chemical':
      case 'hazardous_waste':
        return (
          <svg viewBox="0 0 300 420" className="w-full h-full max-h-[500px] drop-shadow-2xl">
            <defs>
              <linearGradient id="chemicalSuit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <linearGradient id="pvcApron" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>

            {/* Legs */}
            <rect x="110" y="240" width="32" height="110" rx="6" fill="#0284c7" />
            <rect x="158" y="240" width="32" height="110" rx="6" fill="#0284c7" />

            {/* Heavy-duty Gum Boots / Chemical safety boots */}
            <rect x="96" y="340" width="48" height="32" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <rect x="156" y="340" width="48" height="32" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />

            {/* Body Suit */}
            <rect x="100" y="115" width="100" height="135" rx="14" fill="url(#chemicalSuit)" />

            {/* Full PVC Apron / Chemical Splash Suit */}
            <path
              d="M 115 125 L 185 125 L 194 285 L 106 285 Z"
              fill="url(#pvcApron)"
              stroke="#ca8a04"
              strokeWidth="2.5"
            />
            <line x1="126" y1="125" x2="110" y2="105" stroke="#a16207" strokeWidth="3" />
            <line x1="174" y1="125" x2="190" y2="105" stroke="#a16207" strokeWidth="3" />

            {/* Arms */}
            <rect x="70" y="125" width="28" height="95" rx="8" fill="#0284c7" />
            <rect x="202" y="125" width="28" height="95" rx="8" fill="#0284c7" />

            {/* Long PVC Elbow Gloves (Yellow / Orange chemical resistant) */}
            <rect x="64" y="185" width="36" height="52" rx="6" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
            <rect x="200" y="185" width="36" height="52" rx="6" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />

            {/* Head */}
            <circle cx="150" cy="75" r="30" fill="#fed7aa" />

            {/* Full-face respiratory mask or dual cartridge respirator */}
            <path d="M 132 75 C 132 65, 168 65, 168 75 L 166 100 C 166 106, 134 106, 134 100 Z" fill="#334155" stroke="#0ea5e9" strokeWidth="2" />
            <circle cx="140" cy="92" r="7" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
            <circle cx="160" cy="92" r="7" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />

            {/* Safety Goggles (Sealed eye protection) */}
            <rect x="130" y="68" width="40" height="14" rx="4" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" fillOpacity="0.85" />
          </svg>
        );

      case 'electric':
        return (
          <svg viewBox="0 0 300 420" className="w-full h-full max-h-[500px] drop-shadow-2xl">
            <defs>
              <linearGradient id="electricSuit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            {/* Pants */}
            <rect x="110" y="235" width="32" height="115" rx="6" fill="#1e3a8a" />
            <rect x="158" y="235" width="32" height="115" rx="6" fill="#1e3a8a" />
            {/* Insulated Dielectric Safety Boots */}
            <rect x="96" y="345" width="48" height="24" rx="6" fill="#0f172a" stroke="#eab308" strokeWidth="2.5" />
            <rect x="156" y="345" width="48" height="24" rx="6" fill="#0f172a" stroke="#eab308" strokeWidth="2.5" />

            {/* Arc-Flash rated Torso & Hi-Vis accents */}
            <rect x="100" y="115" width="100" height="125" rx="12" fill="url(#electricSuit)" />
            <line x1="100" y1="160" x2="200" y2="160" stroke="#facc15" strokeWidth="7" />
            <line x1="100" y1="190" x2="200" y2="190" stroke="#facc15" strokeWidth="7" />

            {/* Arms */}
            <rect x="72" y="125" width="26" height="85" rx="6" fill="#1e3a8a" />
            <rect x="202" y="125" width="26" height="85" rx="6" fill="#1e3a8a" />
            
            {/* 1000V Insulated Electrical Gloves (Thick rubber cuff) */}
            <rect x="66" y="195" width="34" height="42" rx="6" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
            <rect x="200" y="195" width="34" height="42" rx="6" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />

            {/* Head */}
            <circle cx="150" cy="75" r="30" fill="#fed7aa" />

            {/* Dielectric Hard Hat (White/Yellow electrical grade) */}
            <path d="M 120 62 C 120 38, 180 38, 180 62 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2.5" />
            <rect x="114" y="60" width="72" height="8" rx="3" fill="#cbd5e1" />

            {/* Face/Eye Protection */}
            <rect x="134" y="70" width="32" height="12" rx="3" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
          </svg>
        );

      case 'hazardous_waste_3r':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            {/* 3R Official Circular Flow Graphic */}
            <div className="w-full max-w-sm aspect-square relative flex items-center justify-center bg-slate-900/60 rounded-3xl border-2 border-emerald-500/40 p-4 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
              {/* Circular animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-emerald-400/40"
              />

              {/* 3R Core Badges */}
              <div className="grid grid-cols-1 gap-4 w-full text-center z-10">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 rounded-2xl shadow-lg border border-emerald-400/50 flex items-center justify-between">
                  <span className="text-xl font-black tracking-wider uppercase">1. REDUCE</span>
                  <span className="text-sm font-semibold bg-black/30 px-3 py-1 rounded-full">कमी करा</span>
                </div>
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 rounded-2xl shadow-lg border border-cyan-400/50 flex items-center justify-between">
                  <span className="text-xl font-black tracking-wider uppercase">2. REUSE</span>
                  <span className="text-sm font-semibold bg-black/30 px-3 py-1 rounded-full">पुन्हा वापरा</span>
                </div>
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-4 rounded-2xl shadow-lg border border-blue-400/50 flex items-center justify-between">
                  <span className="text-xl font-black tracking-wider uppercase">3. RECYCLE</span>
                  <span className="text-sm font-semibold bg-black/30 px-3 py-1 rounded-full">पुनर्चक्रीकरण</span>
                </div>
              </div>
            </div>

            {/* Waste segregation color drums indicator */}
            <div className="flex gap-4 mt-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-16 bg-blue-600 rounded-t-lg border-2 border-white shadow-md flex items-center justify-center font-bold text-white text-xs">
                  DRY
                </div>
                <span className="text-[11px] text-slate-300 font-semibold mt-1">सुका कचरा</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-16 bg-emerald-600 rounded-t-lg border-2 border-white shadow-md flex items-center justify-center font-bold text-white text-xs">
                  WET
                </div>
                <span className="text-[11px] text-slate-300 font-semibold mt-1">ओला कचरा</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-16 bg-rose-600 rounded-t-lg border-2 border-white shadow-md flex items-center justify-center font-bold text-white text-xs">
                  HAZ
                </div>
                <span className="text-[11px] text-slate-300 font-semibold mt-1">धोकादायक</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <svg viewBox="0 0 300 400" className="w-full h-full max-h-[480px]">
            <rect x="110" y="235" width="32" height="115" rx="6" fill="#1e293b" />
            <rect x="158" y="235" width="32" height="115" rx="6" fill="#1e293b" />
            <rect x="100" y="115" width="100" height="125" rx="12" fill="#0284c7" />
            <circle cx="150" cy="75" r="30" fill="#fed7aa" />
            <path d="M 120 62 C 120 40, 180 40, 180 62 Z" fill="#eab308" />
          </svg>
        );
    }
  };

  return (
    <div
      id="safety-illustration-container"
      className="relative w-full h-full flex flex-col items-center justify-center p-2"
    >
      {/* Role Header Banner on top of illustration */}
      {roleTitle && (
        <div className="mb-2 text-center z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 shadow-lg backdrop-blur-sm">
            <Shield className="w-4 h-4 text-cyan-400 animate-pulse" />
            <div className="text-left">
              <span className="text-sm lg:text-base font-extrabold text-white tracking-wide">
                {roleTitle.en}
              </span>
              <span className="text-xs text-cyan-300 font-semibold ml-2">
                ({roleTitle.mr})
              </span>
              {roleTitle.dept && (
                <span className="text-[11px] text-amber-300 block font-medium">
                  {roleTitle.dept}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Illustration Viewport with Animated Radar Scan Line */}
      <div className="relative w-full max-w-lg aspect-[3/4] max-h-[72vh] flex items-center justify-center">
        
        {/* Industry standard precaution TV scan line animation */}
        <motion.div
          animate={{ y: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#38bdf8] pointer-events-none z-30 opacity-70"
        />

        {/* Ambient backdrop glow */}
        <div className="absolute inset-6 rounded-full bg-cyan-950/40 blur-3xl -z-10" />

        {/* Render Vector Character */}
        {renderOperatorVector()}

        {/* CALLOUT ANNOTATIONS WITH CONNECTING POINTERS & PULSING NODES */}
        {callouts.map((callout, index) => {
          const isHighlighted = activeCalloutIndex === index;
          return (
            <div
              key={callout.id}
              style={{
                top: `${callout.topPercent}%`,
                left: `${callout.leftPercent}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute z-30 pointer-events-none"
            >
              {/* Radar pulse ring around the target node */}
              <div className="relative flex items-center justify-center">
                <span
                  className={`absolute rounded-full transition-all duration-500 ${
                    isHighlighted
                      ? 'w-10 h-10 bg-cyan-400/30 animate-ping'
                      : 'w-6 h-6 bg-cyan-500/10'
                  }`}
                />
                <span
                  className={`relative w-4 h-4 rounded-full border-2 flex items-center justify-center shadow-lg transition-all ${
                    isHighlighted
                      ? 'bg-cyan-400 border-white scale-125 shadow-[0_0_12px_#38bdf8]'
                      : 'bg-slate-900 border-cyan-400/80 scale-100'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isHighlighted ? 'bg-slate-950' : 'bg-cyan-300'
                    }`}
                  />
                </span>

                {/* Floating Callout Tag */}
                <div
                  className={`absolute whitespace-nowrap px-3 py-1.5 rounded-lg border backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col ${
                    callout.side === 'right'
                      ? 'left-6 items-start text-left'
                      : 'right-6 items-end text-right'
                  } ${
                    isHighlighted
                      ? 'bg-cyan-900/95 border-cyan-300 text-white scale-110 shadow-[0_0_20px_rgba(56,189,248,0.4)] z-40'
                      : 'bg-slate-900/85 border-slate-700/80 text-slate-300 opacity-90'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-bold tracking-tight">
                    {callout.labelEn}
                  </span>
                  <span
                    className={`text-[11px] font-semibold font-['Noto_Sans_Devanagari',sans-serif] ${
                      isHighlighted ? 'text-amber-300' : 'text-slate-400'
                    }`}
                  >
                    {callout.labelMr}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Safety Compliance Alert Badge at bottom of Right Graphic */}
      <div className="mt-2 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono tracking-wider uppercase">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          Mandatory PPE Inspection Standard
        </span>
      </div>
    </div>
  );
};
