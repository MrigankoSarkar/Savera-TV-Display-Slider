import React, { useState, useEffect, useRef } from 'react';
import { CalloutItem } from '../types';
import { isImagePreloaded, preloadSingleImage } from '../utils/imagePreloader';
import { ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';

export interface SafetyIllustrationProps {
  slideId?: number;
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

// Direct mappings for custom safety images uploaded to /public
export const ROLE_IMAGES: Record<string, string> = {
  welder: '/Welding_Safety.jpg',
  machine: '/Machine_Safety.jpg',
  forklift: '/Forklift_Operator.jpg',
  powder_coating: '/Coater.jpg',
  crane: '/Crane_Operator.jpg',
  electric: '/Electrical_Safety.jpg',
  chemical: '/Chemical_Handling.jpg',
  hazardous_waste: '/Hazardous_Waste.jpg',
  hazardous_waste_3r: '/3RS.jpg',
};

export const SafetyIllustration: React.FC<SafetyIllustrationProps> = ({
  slideId = 2,
  roleType = 'welder',
  roleTitle,
}) => {
  const imageUrl = ROLE_IMAGES[roleType] || '/Welding_Safety.jpg';
  const [isLoaded, setIsLoaded] = useState<boolean>(() => isImagePreloaded(imageUrl));
  const [hasError, setHasError] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>(imageUrl);
  const imgRef = useRef<HTMLImageElement>(null);

  // Sync image URL when roleType changes & check if already cached
  useEffect(() => {
    setHasError(false);
    setImgSrc(imageUrl);
    const preloaded = isImagePreloaded(imageUrl);
    setIsLoaded(preloaded);

    // Warm up image decode in background
    preloadSingleImage(imageUrl)
      .then(() => setIsLoaded(true))
      .catch(() => {
        // will be handled by img onError
      });
  }, [imageUrl]);

  // Check on mount if the img ref is already complete (browser cache hit)
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [imgSrc]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleImageError = () => {
    if (!hasError) {
      // Retry once with cache-buster
      setHasError(true);
      setTimeout(() => {
        setImgSrc(`${imageUrl}?retry=${Date.now()}`);
        setHasError(false);
      }, 800);
    }
  };

  return (
    <div
      id={`safety-image-container-${slideId}`}
      className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl bg-slate-950/40"
    >
      {/* 1. SKELETON PLACEHOLDER: Shown while image is fetching/decoding */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 rounded-xl p-6 border border-teal-500/20 animate-pulse z-10">
          <ShieldCheck className="w-12 h-12 text-teal-400/60 mb-2 animate-bounce" />
          <p className="text-xs sm:text-sm font-mono text-teal-300/80 uppercase tracking-widest">
            Loading Safety Standard...
          </p>
          <span className="text-[11px] text-slate-400 font-['Noto_Sans_Devanagari'] mt-1">
            सुरक्षा मार्गदर्शक लोड होत आहे...
          </span>
        </div>
      )}

      {/* 2. ERROR FALLBACK: Shown if image persistently fails */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 rounded-xl p-6 border border-rose-500/40 z-20 text-center">
          <AlertCircle className="w-10 h-10 text-amber-400 mb-2" />
          <h4 className="text-sm sm:text-base font-bold text-white">
            {roleTitle?.en || 'Safety Operational Standard'}
          </h4>
          <p className="text-xs font-['Noto_Sans_Devanagari'] text-slate-300 mt-0.5">
            {roleTitle?.mr || 'सुरक्षा कार्यप्रणाली नियम'}
          </p>
          <button
            onClick={() => {
              setHasError(false);
              setImgSrc(`${imageUrl}?t=${Date.now()}`);
            }}
            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 text-xs font-mono border border-teal-500/30 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reload Image</span>
          </button>
        </div>
      )}

      {/* 3. THE HIGH-PERFORMANCE SAFETY IMAGE */}
      <img
        ref={imgRef}
        key={imgSrc}
        src={imgSrc}
        alt={roleTitle?.en ? `${roleTitle.en} Safety Standards` : 'Safety Guideline'}
        referrerPolicy="no-referrer"
        loading="eager"
        decoding="async"
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`w-full h-full max-h-[82vh] object-contain object-center rounded-xl select-none drop-shadow-2xl transition-opacity duration-300 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
