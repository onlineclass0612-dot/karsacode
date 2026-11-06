import React from 'react';

export default function Logo({ size = 'md' }) {
  const isLarge = size === 'lg';

  return (
    <div className="flex items-center gap-3 sm:gap-3.5 select-none group">
      {/* 3D Glowing Hexagonal Prism Emblem */}
      <div 
        className={`relative ${isLarge ? 'w-12 h-12' : 'w-9 h-9 sm:w-10 sm:h-10'} flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0`}
      >
        <img 
          src="/assets/logo_emblem.webp" 
          alt="KarsaCode Emblem" 
          width={isLarge ? 48 : 40}
          height={isLarge ? 48 : 40}
          decoding="async"
          className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,179,71,0.45)] group-hover:drop-shadow-[0_0_18px_rgba(255,179,71,0.7)] transition-all duration-300"
        />
      </div>

      {/* Brand Typography (Beside the emblem) */}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-center tracking-tight leading-none">
          <span className={`font-bold font-heading text-white ${isLarge ? 'text-2xl' : 'text-lg sm:text-xl'}`}>
            Karsa
          </span>
          <span className={`font-bold font-heading text-gradient-amber ${isLarge ? 'text-2xl' : 'text-lg sm:text-xl'}`}>
            Code
          </span>
        </div>
        <span className="text-[8.5px] sm:text-[9px] font-semibold tracking-[0.19em] sm:tracking-[0.21em] text-[#C29166] uppercase mt-1 font-mono whitespace-nowrap">
          Digital Evolution Studio
        </span>
      </div>
    </div>
  );
}
