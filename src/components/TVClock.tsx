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
      className="fixed bottom-3 right-4 z-50 pointer-events-auto select-none"
    >
      <div className="bg-slate-950/75 backdrop-blur-md text-white border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] rounded-2xl px-5 py-2.5 flex items-center gap-4 transition-all hover:border-teal-500/40">
        {/* Live indicator light matching Vibrant Palette status */}
        <div className="flex flex-col items-center justify-center pr-3 border-r border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
              LIVE
            </span>
          </div>
          <span className="text-[9px] text-slate-400 font-mono tracking-wider mt-0.5 uppercase">
            UNIT-I
          </span>
        </div>

        {/* Digital Clock Display matching Vibrant Palette text typography */}
        <div className="flex flex-col items-end">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tighter tabular-nums flex items-baseline gap-1 text-white">
            <span>{displayHours}:{minutes}</span>
            <span className="text-lg sm:text-xl text-slate-500 font-normal">:{seconds}</span>
            <span className="text-xs text-teal-400 font-mono tracking-wider font-semibold ml-1 px-1.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/30 uppercase">
              {ampm}
            </span>
          </div>

          {/* Date Stamp */}
          <div className="text-slate-400 font-medium tracking-widest text-[10px] sm:text-[11px] uppercase mr-0.5 flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-teal-400" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
