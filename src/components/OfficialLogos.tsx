import React from 'react';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

/**
 * Official Logo: OLIMPIADE NASIONAL INDONESIA
 * Accurately matching the uploaded emblem:
 * Pink circle with mortarboard and open book + Typography
 */
export const LogoONI: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const sizeMap = {
    sm: { icon: 34, textTitle: 'text-xs', textSub: 'text-[9px]' },
    md: { icon: 46, textTitle: 'text-base', textSub: 'text-[10px]' },
    lg: { icon: 60, textTitle: 'text-xl', textSub: 'text-xs' },
    xl: { icon: 84, textTitle: 'text-2xl', textSub: 'text-sm' },
  };

  const { icon: px, textTitle, textSub } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 font-sans select-none ${className}`}>
      <svg
        width={px}
        height={px}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm transition-transform hover:scale-105"
      >
        {/* Pink Circle */}
        <circle cx="100" cy="100" r="96" fill="#E11D48" />
        
        {/* Mortarboard / Toga Cap */}
        <polygon points="100,42 152,64 100,86 48,64" fill="white" />
        <path
          d="M66 74 V96 C66 108 100 118 100 118 C100 118 134 108 134 96 V74"
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Tassel */}
        <path d="M142 63 V84 C142 88 144 92 144 96" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <circle cx="144" cy="98" r="4" fill="white" />

        {/* Open Book */}
        <g transform="translate(42, 102)">
          {/* Left Book Page */}
          <path
            d="M58 54 C38 48 18 49 6 52 C3 53 1 50 1 47 V12 C1 9 3 7 6 7 C18 4 38 4 58 10 Z"
            fill="none"
            stroke="white"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          {/* Right Book Page */}
          <path
            d="M58 54 C78 48 98 49 110 52 C113 53 115 50 115 47 V12 C115 9 113 7 110 7 C98 4 78 4 58 10 Z"
            fill="none"
            stroke="white"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          {/* Book Spine Center Line */}
          <line x1="58" y1="10" x2="58" y2="54" stroke="white" strokeWidth="6" strokeLinecap="round" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-extrabold uppercase tracking-tight text-[#E11D48] ${textTitle}`}>
            OLIMPIADE
          </span>
          <span className={`font-semibold uppercase tracking-wider text-[#E11D48] opacity-90 ${textSub}`}>
            NASIONAL INDONESIA
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * Official Logo: YAYASAN BESARRASA BAGI BANGSA
 * Blue seal circular badge with shaking hands and open book
 */
export const LogoYayasan: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const sizeMap = {
    sm: { icon: 34, textClass: 'text-[9px]' },
    md: { icon: 44, textClass: 'text-[11px]' },
    lg: { icon: 58, textClass: 'text-xs' },
    xl: { icon: 84, textClass: 'text-sm' },
  };

  const { icon: px, textClass } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        width={px}
        height={px}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform hover:scale-105"
      >
        {/* Outer Ring */}
        <circle cx="120" cy="120" r="114" stroke="#1D4ED8" strokeWidth="7" fill="white" />
        <circle cx="120" cy="120" r="102" stroke="#1D4ED8" strokeWidth="2.5" fill="none" />
        
        {/* Circular Text Path */}
        <path id="curveTop" d="M 38 120 A 82 82 0 0 1 202 120" fill="none" />
        <path id="curveBottom" d="M 202 120 A 82 82 0 0 1 38 120" fill="none" />
        
        <text fill="#1D4ED8" fontSize="17" fontWeight="800" letterSpacing="2.5" fontFamily="Plus Jakarta Sans, sans-serif">
          <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
            YAYASAN BESARASA
          </textPath>
        </text>

        <text fill="#1D4ED8" fontSize="16" fontWeight="800" letterSpacing="3" fontFamily="Plus Jakarta Sans, sans-serif">
          <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
            BAGI BANGSA
          </textPath>
        </text>

        {/* Central Graphic Container: House & Handshake & Book */}
        <g transform="translate(60, 68)">
          {/* House outline */}
          <path
            d="M 60 4 L 108 36 L 108 80 L 12 80 L 12 36 Z"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Shaking Hands (stylized geometric hands) */}
          {/* Left sleeve & hand */}
          <path
            d="M 28 48 L 44 42 L 56 46 L 68 38 L 76 45 L 62 56 L 46 54 L 32 60 Z"
            fill="#1D4ED8"
          />
          {/* Right sleeve & hand grip */}
          <path
            d="M 92 48 L 76 42 L 64 46 L 56 42 L 50 48 L 62 58 L 76 56 L 88 62 Z"
            fill="#1D4ED8"
            opacity="0.85"
          />
          {/* Details lines on hand grip */}
          <line x1="56" y1="44" x2="64" y2="52" stroke="white" strokeWidth="2.5" />
          <line x1="62" y1="42" x2="70" y2="50" stroke="white" strokeWidth="2.5" />

          {/* Spreading Open Book below */}
          <path
            d="M 60 78 C 42 66 24 68 14 70 L 14 86 C 26 84 44 82 60 90 C 76 82 94 84 106 86 L 106 70 C 96 68 78 66 60 78 Z"
            fill="#1D4ED8"
          />
          <line x1="60" y1="78" x2="60" y2="92" stroke="white" strokeWidth="3" />
          {/* Pages lines */}
          <path d="M 20 74 Q 40 71 56 81" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M 20 78 Q 40 75 56 85" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M 100 74 Q 80 71 64 81" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M 100 78 Q 80 75 64 85" stroke="white" strokeWidth="1.5" fill="none" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
            Didukung Resmi Oleh
          </span>
          <span className={`font-bold text-blue-700 tracking-tight ${textClass}`}>
            Yayasan Besar Rasa Bagi Bangsa
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * Endorsement banner combining both logos for trust & prestige
 */
export const EndorsementBadge: React.FC<{ light?: boolean }> = ({ light = false }) => {
  return (
    <div
      className={`inline-flex flex-wrap items-center gap-3.5 px-4 py-2 rounded-2xl border backdrop-blur-md transition-all ${
        light
          ? 'bg-white/90 border-slate-200/80 shadow-xs'
          : 'bg-slate-900/80 border-slate-700/80 text-white shadow-md'
      }`}
    >
      <LogoONI size="sm" showText={false} />
      <div className={`h-6 w-px ${light ? 'bg-slate-300' : 'bg-slate-700'}`} />
      <LogoYayasan size="sm" showText={true} />
    </div>
  );
};
