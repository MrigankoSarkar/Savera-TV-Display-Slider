import React, { useState, useEffect } from 'react';
import { Clock as ClockIcon, Calendar, Radio } from 'lucide-react';

export const TVClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = (hours % 12 || 12).toString().padStart(2, '0');

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div
      id="tv-live-clock"
      className="fixed bottom-2.5 right-3 z-50 pointer-events-auto select-none"
    >
      <div className="bg-slate-950/80 backdrop-blur-md text-white border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] rounded-xl px-3 sm:px-3.5 py-1.5 flex items-center gap-2.5 sm:gap-3 transition-all hover:border-teal-500/40">
        {/* Live indicator light matching Vibrant Palette status */}
        <div className="flex flex-col items-center justify-center pr-2.5 border-r border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981] animate-pulse" />
            <span className="text-[9px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
              LIVE
            </span>
          </div>
          <span className="text-[8px] text-slate-400 font-mono tracking-wider uppercase mt-0.5">
            UNIT-I
          </span>
        </div>

        {/* Digital Clock Display - compact footprint with bold, high-contrast clarity */}
        <div className="flex flex-col items-end">
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight tabular-nums flex items-baseline gap-0.5 text-white leading-none">
            <span>{displayHours}:{minutes}</span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium">:{seconds}</span>
            <span className="text-[9px] sm:text-[10px] text-teal-300 font-mono tracking-wider font-bold ml-1 px-1 py-0.5 rounded bg-teal-500/15 border border-teal-500/30 uppercase leading-none">
              {ampm}
            </span>
          </div>

          {/* Date Stamp */}
          <div className="text-slate-400 font-medium tracking-wider text-[9px] sm:text-[10px] uppercase mr-0.5 flex items-center gap-1 mt-1">
            <Calendar className="w-2.5 h-2.5 text-teal-400" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
