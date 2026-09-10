import React, { useState } from 'react';

interface SaveraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SaveraLogo: React.FC<SaveraLogoProps> = ({ className = '', size = 'md' }) => {
  const [imgError, setImgError] = useState(false);

  const dimensions = {
    sm: { box: 'w-10 h-10' },
    md: { box: 'w-14 h-14' },
    lg: { box: 'w-20 h-20' },
  }[size];

  return (
    <div className={`flex items-center justify-center ${dimensions.box} ${className}`}>
      {/* Container displaying uploaded custom logo with fallback */}
      <div className="w-full h-full bg-white rounded-lg shadow-md flex items-center justify-center p-1 border border-slate-200 overflow-hidden">
        {!imgError ? (
          <img
            src="/logo.jpg"
            alt="Company Logo"
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="saveraBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
            </defs>
            <path
              d="M 22 28 C 30 14, 65 12, 78 24 C 88 34, 82 50, 68 54 C 54 58, 32 58, 28 68 C 24 78, 35 88, 52 88 C 72 88, 80 76, 82 72"
              stroke="url(#saveraBlueGrad)"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 38 34 C 44 26, 62 26, 68 32 C 74 38, 70 48, 58 50 C 46 52, 36 56, 36 64 C 36 72, 44 76, 56 76"
              stroke="#38bdf8"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="50" cy="50" r="4" fill="#0284c7" />
          </svg>
        )}
      </div>
    </div>
  );
};
