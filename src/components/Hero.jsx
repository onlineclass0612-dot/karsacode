import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative z-10 w-full min-h-[90vh] md:min-h-screen overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24 flex flex-col items-center justify-center text-center">
      
      {/* =========================================================================
          Hero Background: Responsive (Video for Desktop & Tablet, Image for Mobile)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* 1. Mobile Only (< 768px): Optimized Static Image (High-Performance WebP) */}
        <div className="block md:hidden w-full h-full">
          <img 
            src="/assets/hero_bg.webp" 
            alt="Spatial Amber Neural Network" 
            width="1024"
            height="571"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-85"
          />
        </div>

        {/* 2. Desktop & Tablet (>= 768px): Seamless Video */}
        <div className="hidden md:block w-full h-full">
          <video
            key="hero-video-v2"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/assets/hero_bg.webp"
            className="w-full h-full object-cover object-center opacity-85 transition-opacity duration-1000"
          >
            <source src="/assets/screen_hero_bg.webm" type="video/webm" />
            {/* Fallback image if video cannot be played */}
            <img 
              src="/assets/hero_bg.webp" 
              alt="Spatial Amber Neural Network" 
              width="1024"
              height="571"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </video>
        </div>
        
        {/* Seamless Vignettes & Ambient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C10]/80 via-[#0D0C10]/25 to-[#0D0C10] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,#0D0C10_95%)] pointer-events-none" />
      </div>


      {/* Main Centered Content Container */}
      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center w-full">
        
        {/* Top Eyebrow Badge */}
        {t.hero.badge && (
          <div className="animate-hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14121A]/80 border border-[#FFB347]/25 text-[11px] sm:text-xs font-mono font-medium text-[#FFB347] tracking-[0.2em] uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(255,179,71,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB347] animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>
        )}

        {/* Main Headline */}
        <h1 className="animate-hero-h1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white leading-[1.14] max-w-5xl mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] text-center">
          <span className="block">{t.hero.headlinePart1}</span>
          <span className="block">
            {t.hero.headlineConnector && <span className="text-white">{t.hero.headlineConnector} </span>}
            <span className="text-gradient-amber">{t.hero.headlinePart2}</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-hero-p text-base sm:text-lg md:text-xl text-[#D4D4D8] max-w-2xl leading-relaxed mb-8 font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] text-center">
          {t.hero.subheadline}
        </p>

        {/* Single Compact CTA Button */}
        <div className="animate-hero-cta flex items-center justify-center mb-10">
          <a 
            href="#kontak"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-[#0D0C10] bg-gradient-to-r from-[#FFB347] to-[#C29166] hover:from-[#FFA930] hover:to-[#B68155] shadow-[0_0_25px_rgba(255,179,71,0.35)] hover:shadow-[0_0_35px_rgba(255,179,71,0.6)] hover:scale-[1.03] transition-all duration-300"
          >
            <span>{t.hero.cta}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Trust Indicators / Quick Metrics */}
        {t.hero.metrics && (
          <div className="animate-hero-metrics flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-gray-400 mb-12">
            {t.hero.metrics.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB347]/70" />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        )}

      </div>

    </section>
  );
}
