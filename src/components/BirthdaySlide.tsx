import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { Sparkles, Heart, Gift, Cake, Award, PartyPopper } from 'lucide-react';
import { SaveraLogo } from './SaveraLogo';

interface BirthdaySlideProps {
  isActive: boolean;
}

// Generate an array of floating balloons with various sizes, colors, delays, and paths
const BALLOONS = [
  { id: 1, color: '#f43f5e', shine: '#fda4af', size: 70, left: '4%', delay: 0, duration: 9, sway: 18 },
  { id: 2, color: '#38bdf8', shine: '#bae6fd', size: 85, left: '10%', delay: 1.5, duration: 11, sway: -22 },
  { id: 3, color: '#eab308', shine: '#fef08a', size: 65, left: '18%', delay: 3.2, duration: 10, sway: 15 },
  { id: 4, color: '#a855f7', shine: '#e9d5ff', size: 90, left: '26%', delay: 0.8, duration: 12, sway: -25 },
  { id: 5, color: '#10b981', shine: '#a7f3d0', size: 75, left: '72%', delay: 2.1, duration: 9.5, sway: 20 },
  { id: 6, color: '#f97316', shine: '#fed7aa', size: 80, left: '80%', delay: 0.5, duration: 10.5, sway: -18 },
  { id: 7, color: '#ec4899', shine: '#fbcfe8', size: 85, left: '88%', delay: 2.7, duration: 11.2, sway: 24 },
  { id: 8, color: '#06b6d4', shine: '#a5f3fc', size: 60, left: '94%', delay: 1.2, duration: 8.8, sway: -16 },
  { id: 9, color: '#6366f1', shine: '#c7d2fe', size: 70, left: '48%', delay: 4.0, duration: 13, sway: 20 },
  { id: 10, color: '#f59e0b', shine: '#fde68a', size: 75, left: '60%', delay: 3.0, duration: 10, sway: -22 },
];

export const BirthdaySlide: React.FC<BirthdaySlideProps> = ({ isActive }) => {
  // Launch celebration confetti when the slide becomes active
  useEffect(() => {
    if (!isActive) return;

    // Initial festive burst from both sides
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 40,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#f43f5e', '#38bdf8', '#fbbf24', '#a855f7'],
    });
    fire(0.2, {
      spread: 60,
      colors: ['#ec4899', '#10b981', '#f59e0b'],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    // Gentle recurring celebration burst
    const interval = setInterval(() => {
      confetti({
        particleCount: 25,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ['#fbbf24', '#f43f5e', '#38bdf8'],
        zIndex: 40,
      });
      confetti({
        particleCount: 25,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ['#a855f7', '#10b981', '#ec4899'],
        zIndex: 40,
      });
    }, 3200);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div
      id="birthday-slide-container"
      className="relative w-full h-full overflow-hidden bg-slate-950 text-white font-sans flex flex-col justify-between p-4 lg:p-6 select-none"
    >
      {/* VIBRANT PALETTE AMBIENT GLOWING SHAPES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-32 h-44 rounded-[50%] bg-gradient-to-t from-pink-600/60 to-pink-400/20 blur-sm transform -rotate-12 pointer-events-none" />
        <div className="absolute top-[5%] left-[17%] w-[1px] h-40 bg-white/20 transform -rotate-12 pointer-events-none" />
        <div className="absolute top-[15%] right-[20%] w-28 h-40 rounded-[50%] bg-gradient-to-t from-blue-500/60 to-blue-300/20 blur-sm transform rotate-6 pointer-events-none" />
        <div className="absolute top-[10%] right-[22%] w-[1px] h-40 bg-white/20 transform rotate-6 pointer-events-none" />
        <div className="absolute top-[40%] left-[5%] w-24 h-32 rounded-[50%] bg-gradient-to-t from-amber-400/60 to-amber-200/20 blur-sm transform rotate-12 pointer-events-none" />
        <div className="absolute top-[35%] left-[7%] w-[1px] h-40 bg-white/20 transform rotate-12 pointer-events-none" />
        <div className="absolute top-[45%] right-[10%] w-36 h-48 rounded-[50%] bg-gradient-to-t from-purple-600/60 to-purple-400/20 blur-sm transform -rotate-6 pointer-events-none" />
        <div className="absolute top-[40%] right-[12%] w-[1px] h-40 bg-white/20 transform -rotate-6 pointer-events-none" />
      </div>

      {/* Decorative High-Tech Corner Watermark */}
      <div className="absolute top-2 right-4 p-4 z-40 pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 100 100" className="opacity-20">
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M50 5 L50 95 M5 50 L95 50" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* FLYING BALLOONS ANIMATION (Vibrant helium floating balloons) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {BALLOONS.map((balloon) => (
          <motion.div
            key={balloon.id}
            initial={{ y: '110vh', x: 0, opacity: 0 }}
            animate={{
              y: '-30vh',
              x: [0, balloon.sway, -balloon.sway, 0],
              opacity: [0, 0.95, 0.95, 0],
            }}
            transition={{
              y: {
                duration: balloon.duration,
                repeat: Infinity,
                delay: balloon.delay,
                ease: 'linear',
              },
              x: {
                duration: balloon.duration / 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              },
              opacity: {
                duration: balloon.duration,
                repeat: Infinity,
                delay: balloon.delay,
                times: [0, 0.08, 0.92, 1],
              },
            }}
            style={{
              position: 'absolute',
              left: balloon.left,
              bottom: 0,
            }}
            className="flex flex-col items-center"
          >
            {/* Balloon 3D Sphere */}
            <div
              style={{
                width: `${balloon.size}px`,
                height: `${balloon.size * 1.22}px`,
                backgroundColor: balloon.color,
                borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                boxShadow: `inset -8px -8px 16px rgba(0,0,0,0.4), inset 8px 8px 16px ${balloon.shine}, 0 12px 25px rgba(0,0,0,0.5)`,
              }}
              className="relative"
            >
              {/* Gloss highlight reflection */}
              <div
                style={{
                  position: 'absolute',
                  top: '12%',
                  left: '18%',
                  width: '24%',
                  height: '35%',
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  borderRadius: '50%',
                  transform: 'rotate(-30deg)',
                  filter: 'blur(1px)',
                }}
              />
              {/* Balloon knot */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '10px',
                  height: '7px',
                  backgroundColor: balloon.color,
                  borderRadius: '2px',
                }}
              />
            </div>
            {/* Floating string */}
            <svg width="24" height="60" viewBox="0 0 24 60" fill="none" className="opacity-40">
              <path
                d="M 12 0 Q 6 15, 14 30 T 10 60"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* TOP HEADER: Vibrant Palette Glassmorphic Corporate Header */}
      <header className="relative z-30 h-16 sm:h-20 flex items-center justify-between px-4 sm:px-8 border-b border-white/10 bg-slate-950/60 backdrop-blur-md rounded-2xl">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-teal-400 rounded-lg shadow-lg flex items-center justify-center font-black text-xl text-white font-['Noto_Sans_Devanagari',sans-serif]">
            सा
          </div>
          <div>
            <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white block font-['Noto_Sans_Devanagari',sans-serif]">
              सावेरा ऑटो कॉम्प्स प्रा. लि.
            </span>
            <span className="text-xs text-teal-400 tracking-wider block font-['Noto_Sans_Devanagari',sans-serif]">
              युनिट - १ &bull; छत्रपती संभाजीनगर
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 font-['Noto_Sans_Devanagari',sans-serif]">
          <div className="px-4 py-1.5 rounded-full border border-pink-500/50 bg-pink-500/10 text-pink-400 text-xs sm:text-sm font-medium flex items-center gap-1.5">
            <span>🎉</span> वाढदिवस विशेष
          </div>
          <div className="text-slate-400 text-xs sm:text-sm tracking-wider hidden md:block">
            स्लाइड ०१ / १०
          </div>
        </div>
      </header>

      {/* CENTER STAGE: Birthday Message & Layout */}
      <main className="relative z-30 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center max-w-7xl mx-auto w-full my-2">
        
        {/* LEFT COLUMN: Employee Photo Frame & Celebration Badges */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          {/* Framed Photo with Vibrant Palette Styling */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
            animate={{ scale: 1, opacity: 1, rotate: -1.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="relative bg-slate-900/80 backdrop-blur-md p-3.5 pb-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 max-w-xs sm:max-w-sm w-full"
          >
            {/* Washi-Tape Accents */}
            <div className="absolute -top-3 left-6 w-16 h-6 bg-pink-500/40 backdrop-blur-md -rotate-6 shadow-sm border border-pink-400/50 rounded-sm" />
            <div className="absolute -top-3 right-6 w-16 h-6 bg-teal-500/40 backdrop-blur-md rotate-6 shadow-sm border border-teal-400/50 rounded-sm" />

            {/* Employee Portrait */}
            <div className="relative aspect-[4/4] rounded-xl overflow-hidden bg-slate-950 border border-white/10">
              {/* Authentic Photo Matching Page 1 */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="कु. प्रिया शर्मा"
                className="w-full h-full object-cover object-top"
                crossOrigin="anonymous"
              />
              {/* Corner celebration badge */}
              <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-2 rounded-full shadow-lg border border-white/20">
                <PartyPopper className="w-4 h-4" />
              </div>
            </div>

            {/* Employee Name Plate */}
            <div className="mt-3 text-center bg-slate-950/80 rounded-xl py-2.5 px-3 border border-white/10 font-['Noto_Sans_Devanagari',sans-serif]">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                कु. प्रिया शर्मा
              </h3>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-teal-400 mt-0.5">
                उत्पादन विभाग
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Happy Birthday Calligraphy & TV Message Screen */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          
          {/* Main "Happy Birthday" Text with Celebratory Sparkles */}
          <div className="relative w-full">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-1"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
                <h2 className="text-rose-500 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase font-['Noto_Sans_Devanagari',sans-serif]">
                  उत्कृष्टतेचा गौरव
                </h2>
                <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-300 font-['Noto_Sans_Devanagari',sans-serif]">
                वाढदिवसाच्या<br />हार्दिक शुभेच्छा!
              </h1>
            </motion.div>
          </div>

          {/* TV Display Frame with Exact Wish Message */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full bg-slate-900/70 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden font-['Noto_Sans_Devanagari',sans-serif]"
          >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-teal-400" />
            
            <p className="text-lg sm:text-2xl font-normal text-slate-100 leading-relaxed">
              &ldquo;हा विशेष दिवस आपल्या जीवनात{' '}
              <span className="font-bold text-pink-400">आनंद</span>,{' '}
              <span className="font-bold text-teal-300">उत्तम आरोग्य</span>,{' '}
              <span className="font-bold text-amber-300">दीर्घायुष्य व यश</span> आणि हसण्याची अनेक कारणे घेऊन येवो.&rdquo;
            </p>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-lg sm:text-xl font-bold text-pink-400 flex items-center gap-2">
                आपला दिवस आनंदी जावो! 😊
              </span>
              <div className="flex items-center gap-1 text-pink-400">
                <Heart className="w-5 h-5 fill-pink-500 animate-bounce" />
                <Heart className="w-4 h-4 fill-amber-400" />
                <Heart className="w-5 h-5 fill-teal-400" />
              </div>
            </div>
          </motion.div>

          {/* TABLE CELEBRATION ITEMS (Cake, Gift Box, Desk Note) */}
          <div className="w-full grid grid-cols-3 gap-3 pt-1">
            {/* 1. Birthday Cake with Lit Candles */}
            <div className="bg-slate-900/70 backdrop-blur-md rounded-xl p-3 border border-white/10 hover:border-amber-400/40 transition flex items-center gap-3">
              <div className="relative w-11 h-11 flex-shrink-0 bg-amber-500/20 border border-amber-400/30 rounded-lg flex items-center justify-center text-amber-300">
                <Cake className="w-6 h-6 text-amber-300" />
                {/* Lit candle flames simulation */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex gap-1">
                  <span className="w-1.5 h-3 bg-amber-300 rounded-full animate-ping opacity-75" />
                  <span className="w-1.5 h-3 bg-pink-400 rounded-full animate-bounce" />
                </div>
              </div>
              <div className="text-left font-['Noto_Sans_Devanagari',sans-serif]">
                <p className="text-[10px] text-slate-400 font-semibold tracking-wider">उत्सव</p>
                <p className="text-xs sm:text-sm font-bold text-white">चॉकलेट केक</p>
              </div>
            </div>

            {/* 2. Gift Box */}
            <div className="bg-slate-900/70 backdrop-blur-md rounded-xl p-3 border border-white/10 hover:border-pink-500/40 transition flex items-center gap-3">
              <div className="w-11 h-11 flex-shrink-0 bg-pink-500/20 border border-pink-400/30 rounded-lg flex items-center justify-center text-pink-300">
                <Gift className="w-6 h-6 text-pink-400 animate-pulse" />
              </div>
              <div className="text-left font-['Noto_Sans_Devanagari',sans-serif]">
                <p className="text-[10px] text-slate-400 font-semibold tracking-wider">खास भेट</p>
                <p className="text-xs sm:text-sm font-bold text-white">कंपनीकडून</p>
              </div>
            </div>

            {/* 3. Desk Note Card */}
            <div className="bg-slate-900/70 backdrop-blur-md rounded-xl p-3 border border-white/10 hover:border-teal-400/40 transition flex flex-col justify-center text-center font-['Noto_Sans_Devanagari',sans-serif]">
              <span className="text-xs font-bold text-amber-300 leading-tight">
                सदा आनंदी राहा
              </span>
              <span className="text-xs font-bold text-amber-300 leading-tight">
                सदा सुखी राहा
              </span>
              <span className="text-[10px] text-pink-400 font-bold mt-0.5 tracking-wider">— ♡ —</span>
            </div>
          </div>
        </div>
      </main>

      {/* BOTTOM FOOTER BAR */}
      <footer className="relative z-30 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/10 font-['Noto_Sans_Devanagari',sans-serif]">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <span className="text-xs font-medium text-slate-300 tracking-wider">
            प्रणाली सक्रिय &bull; कर्मचारी सन्मान फलक
          </span>
        </div>
        <div className="pr-48 hidden sm:block text-xs uppercase tracking-wider text-slate-400">
          पुढील: सुरक्षा मार्गदर्शक &bull; १० सेकंद
        </div>
      </footer>
    </div>
  );
};
