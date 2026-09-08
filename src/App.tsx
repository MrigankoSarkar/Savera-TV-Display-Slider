import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES_DATA } from './data/slidesData';
import { BirthdaySlide } from './components/BirthdaySlide';
import { SafetySlide } from './components/SafetySlide';
import { TVClock } from './components/TVClock';
import { TVControlBar } from './components/TVControlBar';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1); // 1 for right-to-left, -1 for left-to-right
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [intervalDuration, setIntervalDuration] = useState<number>(10); // 10 seconds default as requested
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Navigate to next slide
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES_DATA.length);
    setTimeLeft(intervalDuration);
  }, [intervalDuration]);

  // Navigate to previous slide
  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
    setTimeLeft(intervalDuration);
  }, [intervalDuration]);

  // Direct select slide
  const handleSelectSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setTimeLeft(intervalDuration);
    },
    [currentIndex, intervalDuration]
  );

  // Toggle play/pause
  const handleTogglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Update duration (default 10 seconds)
  const handleSelectDuration = useCallback((duration: number) => {
    setIntervalDuration(duration);
    setTimeLeft(duration);
  }, []);

  // Toggle Fullscreen
  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }, []);

  // Listen to fullscreen changes (e.g. Esc key pressed)
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Countdown timer for 10-second automatic stay
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.2) {
          handleNext();
          return intervalDuration;
        }
        return Math.max(0, prev - 0.2);
      });
    }, 200);

    return () => clearInterval(timer);
  }, [isPlaying, intervalDuration, handleNext]);

  // Keyboard navigation for TV operators / remote controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      } else if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        handleTogglePlay();
      } else if (e.key === 'f' || e.key === 'F') {
        handleToggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleTogglePlay, handleToggleFullscreen]);

  const currentSlide = SLIDES_DATA[currentIndex];

  // Variants for smooth horizontal scrolling side-by-side transition
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0.85,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 30, mass: 0.8 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0.85,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 30, mass: 0.8 },
        opacity: { duration: 0.35 },
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      id="tv-display-root"
      className="relative w-screen h-screen overflow-hidden bg-black font-sans select-none"
    >
      {/* Horizontal Carousel Stage with AnimatePresence */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {currentSlide.type === 'birthday' ? (
              <BirthdaySlide isActive={currentIndex === 0} />
            ) : (
              <SafetySlide slide={currentSlide} isActive={true} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FIXED BOTTOM RIGHT CLOCK HUD: Requested Feature 3 */}
      <TVClock />

      {/* TV DOCK CONTROLS (Auto-hides during display playback, visible on mouse move) */}
      <TVControlBar
        slides={SLIDES_DATA}
        currentIndex={currentIndex}
        isPlaying={isPlaying}
        timeLeft={timeLeft}
        intervalDuration={intervalDuration}
        onSelectSlide={handleSelectSlide}
        onTogglePlay={handleTogglePlay}
        onNext={handleNext}
        onPrev={handlePrev}
        onToggleFullscreen={handleToggleFullscreen}
        isFullscreen={isFullscreen}
        onSelectDuration={handleSelectDuration}
      />
    </div>
  );
}
