import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Tv,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { SlideData } from '../types';

interface TVControlBarProps {
  slides: SlideData[];
  currentIndex: number;
  isPlaying: boolean;
  timeLeft: number;
  intervalDuration: number;
  onSelectSlide: (index: number) => void;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  onSelectDuration: (duration: number) => void;
}

export const TVControlBar: React.FC<TVControlBarProps> = ({
  slides,
  currentIndex,
  isPlaying,
  timeLeft,
  intervalDuration,
  onSelectSlide,
  onTogglePlay,
  onNext,
  onPrev,
  onToggleFullscreen,
  isFullscreen,
  onSelectDuration,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide control bar after 4 seconds of idle on TV
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleActivity = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('touchstart', handleActivity);

    timeout = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      clearTimeout(timeout);
    };
  }, []);

  // Progress percentage of current 10s countdown
  const progressPercent = ((intervalDuration - timeLeft) / intervalDuration) * 100;

  return (
    <>
      {/* Subtle top indicator bar showing 10s progress at all times */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50 overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-400 transition-all duration-200 ease-linear shadow-[0_0_8px_rgba(99,102,241,0.8)]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Floating Modern TV Controller Dock with Vibrant Palette styling */}
      <div
        id="tv-control-dock"
        className={`fixed bottom-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 pointer-events-auto ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hover:opacity-100 hover:translate-y-0'
        }`}
      >
        <div className="bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-[0_16px_50px_rgba(0,0,0,0.7)] rounded-2xl px-4 py-2 flex items-center gap-3 text-white">
          
          {/* 10s Progress Countdown Ring */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-white/10"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-teal-400 transition-all duration-200"
                strokeDasharray={`${progressPercent}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-[11px] font-bold font-mono text-teal-300">
              {Math.ceil(timeLeft)}s
            </span>
          </div>

          {/* Navigation Controls: Prev / Play-Pause / Next */}
          <div className="flex items-center gap-1 border-r border-white/10 pr-3">
            <button
              onClick={onPrev}
              title="Previous Slide (मागील स्लाइड) [←]"
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={onTogglePlay}
              title={isPlaying ? 'Pause Slider (थांबवा) [Space]' : 'Play Slider (सुरू करा) [Space]'}
              className={`p-2 rounded-xl transition ${
                isPlaying
                  ? 'bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold shadow-[0_0_12px_rgba(20,184,166,0.5)]'
                  : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-[0_0_12px_rgba(244,63,94,0.5)]'
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              onClick={onNext}
              title="Next Slide (पुढील स्लाइड) [→]"
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Indicator Number Pills (1 to 10) */}
          <div className="flex items-center gap-1.5 max-w-[320px] overflow-x-auto no-scrollbar py-0.5">
            {slides.map((slide, idx) => {
              const isCurrent = currentIndex === idx;
              const isBirthday = slide.type === 'birthday';
              return (
                <button
                  key={slide.id}
                  onClick={() => onSelectSlide(idx)}
                  className={`h-7 px-2.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                    isCurrent
                      ? isBirthday
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-[0_0_12px_rgba(244,63,94,0.6)] scale-105'
                        : 'bg-gradient-to-r from-indigo-500 to-teal-400 text-white shadow-[0_0_12px_rgba(20,184,166,0.6)] scale-105'
                      : 'bg-white/5 border border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                  title={`${slide.titleEn} (${slide.titleMr})`}
                >
                  {isBirthday && <Sparkles className="w-3 h-3 text-pink-200" />}
                  <span>{slide.id}</span>
                </button>
              );
            })}
          </div>

          {/* TV Features: Stay Duration Selector & Fullscreen */}
          <div className="flex items-center gap-2 pl-3 border-l border-white/10">
            {/* Speed duration selector */}
            <select
              value={intervalDuration}
              onChange={(e) => onSelectDuration(Number(e.target.value))}
              title="Slide Duration (कालावधी): Default 10s"
              className="bg-slate-900 border border-white/10 text-xs font-mono font-medium rounded-lg px-2 py-1 text-slate-300 hover:text-white focus:outline-none focus:border-teal-400"
            >
              <option value={5}>5s (५ से.)</option>
              <option value={10}>10s (१० से. TV)</option>
              <option value={15}>15s (१५ से.)</option>
              <option value={20}>20s (२० से.)</option>
            </select>

            {/* Fullscreen Button */}
            <button
              onClick={onToggleFullscreen}
              title={isFullscreen ? 'Exit Fullscreen (पूर्ण स्क्रीन बंद)' : 'TV Fullscreen (पूर्ण स्क्रीन) [F]'}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-teal-400 transition"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
