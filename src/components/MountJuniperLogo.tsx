import React from 'react';

interface LogoProps {
  variant?: 'mark' | 'lockup' | 'brand-card';
  className?: string;
}

/**
 * Faithful vector recreation of the uploaded Mount Juniper Medical logo and motto card
 * (WhatsApp Image 2026-10-02 at 11.33.19.jpeg)
 * Features the emerald-teal M/J mountain pillars, sweeping champagne-gold ribbon,
 * stacked "Mount Juniper Medical" wordmark, and motto "Mons Jugis Magn / 俊岭医疗, 俊誉可靠, 腾愈安康".
 */
export const MountJuniperLogo: React.FC<LogoProps> = ({
  variant = 'lockup',
  className = '',
}) => {
  const EmblemSvg = ({ svgClass = 'w-14 h-12' }: { svgClass?: string }) => (
    <svg
      viewBox="0 0 260 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClass}
      aria-label="Mount Juniper Medical Emblem"
      role="img"
    >
      <defs>
        {/* Left Pillar Emerald Gradient */}
        <linearGradient id="mj-left-pillar" x1="45" y1="50" x2="65" y2="195" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#006654" />
          <stop offset="55%" stopColor="#00856E" />
          <stop offset="100%" stopColor="#00A388" />
        </linearGradient>

        {/* Right Pillar Emerald Gradient */}
        <linearGradient id="mj-right-pillar" x1="190" y1="15" x2="215" y2="195" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#006856" />
          <stop offset="60%" stopColor="#008870" />
          <stop offset="100%" stopColor="#00A186" />
        </linearGradient>

        {/* Sweeping Ribbon Champagne Gold to Juniper Teal Gradient */}
        <linearGradient id="mj-ribbon-sweep" x1="65" y1="145" x2="195" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAF6E8" />
          <stop offset="28%" stopColor="#E6DEC3" />
          <stop offset="52%" stopColor="#C7B98B" />
          <stop offset="72%" stopColor="#3B8D7A" />
          <stop offset="92%" stopColor="#008C75" />
          <stop offset="100%" stopColor="#007560" />
        </linearGradient>

        {/* Lower Rim Shadow on the Ribbon */}
        <linearGradient id="mj-ribbon-underside" x1="75" y1="152" x2="185" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6E674F" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#4F5E54" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#005B4B" />
        </linearGradient>
      </defs>

      {/* Left Angled Pillar (Base + Upper Shaft) */}
      <path
        d="M15 195 L42 52 L112 52 C110 88 99 118 72 142 L56 142 L98 142 L88 195 Z"
        fill="url(#mj-left-pillar)"
      />

      {/* Right Taller Mountain Pillar */}
      <path
        d="M188 18 L210 18 L245 195 L172 195 L155 110 L188 18 Z"
        fill="url(#mj-right-pillar)"
      />

      {/* Underside 3D Depth of the Sweeping Curve */}
      <path
        d="M55 143 C112 146 156 138 178 104 C162 135 122 148 55 143 Z"
        fill="url(#mj-ribbon-underside)"
      />

      {/* Iconic Sweeping Juniper Gold-to-Teal Ribbon ("J" / Mountain Crest) */}
      <path
        d="M52 143 C98 134 128 92 136 18 L208 18 C202 88 176 134 128 142 C104 146 76 144 52 143 Z"
        fill="url(#mj-ribbon-sweep)"
      />
    </svg>
  );

  if (variant === 'mark') {
    return <EmblemSvg svgClass={className || 'w-11 h-9'} />;
  }

  if (variant === 'brand-card') {
    return (
      <div
        className={`bg-white border border-[#DCE6E2] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden ${className}`}
      >
        <div className="my-auto py-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-9">
          <EmblemSvg svgClass="w-36 h-28 sm:w-44 sm:h-36 shrink-0" />
          <div className="flex flex-col text-[#1C2226] font-sans tracking-tight leading-[1.12] text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-medium">Mount</span>
            <span className="text-2xl sm:text-3xl font-medium">Juniper</span>
            <span className="text-2xl sm:text-3xl font-medium">Medical</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#EBF1EE] flex flex-col items-end text-right">
          <p className="text-sm sm:text-base font-medium text-[#1C2226] tracking-wide">
            Mons Jugis Magn
          </p>
          <p className="text-sm sm:text-base font-medium text-[#1C2226] mt-0.5 tracking-wider">
            俊岭医疗, 俊誉可靠, 腾愈安康
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <EmblemSvg svgClass="w-12 h-10 shrink-0" />
      <div className="flex flex-col text-[#1C2226] font-sans leading-[1.08] tracking-tight">
        <span className="text-sm font-semibold">Mount</span>
        <span className="text-sm font-semibold">Juniper</span>
        <span className="text-sm font-semibold">Medical</span>
      </div>
    </div>
  );
};
