import React from 'react';
import { Terminal, Briefcase, ShoppingBag, Crown, Building2, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const packageIcons = {
    starter: Terminal,
    business: Briefcase,
    ecommerce: ShoppingBag,
    premium: Crown,
    enterprise: Building2,
    customBudget: Sliders,
  };

  const getPackageData = (key) => {
    const pkg = t.services.packages[key];
    let ctaText = `${t.services.ctaPrefix} ${pkg.name}`;
    if (key === 'enterprise') {
      ctaText = t.services.ctaConsult;
    } else if (key === 'customBudget') {
      ctaText = t.services.ctaCustomBudget || (t.services.ctaPrefix + ' Paket');
    }
    return {
      id: key,
      ...pkg,
      icon: packageIcons[key],
      featured: key === 'premium',
      isCustomBudget: key === 'customBudget',
      ctaText,
    };
  };

  const row1 = ['starter', 'business', 'ecommerce'].map(getPackageData);
  const row2 = ['premium', 'enterprise', 'customBudget'].map(getPackageData);

  return (
    <section id="layanan" className="relative z-10 py-20 md:py-28 max-w-6xl mx-auto px-4 w-full">
      
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14121A] border border-[#FFB347]/20 text-xs font-semibold text-gradient-amber uppercase tracking-wider mb-4">
          <span>{t.services.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
          {t.services.headingPart1}{' '}
          <span className="text-gradient-amber">{t.services.headingPart2}</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
          {t.services.description}
        </p>
      </div>

      {/* Row 1: 3 Cards (Starter, Business, E-Commerce) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8 items-stretch">
        {row1.map((pkg) => {
          const Icon = pkg.icon;
          return (
            <div 
              key={pkg.id}
              className="relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-[#14121A] md:bg-[#14121A]/70 md:backdrop-blur-xl border border-white/10 hover:border-[#FFB347]/40 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-[#FFB347]/10 border border-[#FFB347]/25 flex items-center justify-center text-[#FFB347] mb-5 shadow-[0_0_15px_rgba(255,179,71,0.15)]">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Package Name */}
                <h3 className="text-xl font-bold font-heading text-white mb-2 leading-snug">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-gradient-amber mb-3">
                  {pkg.price}
                </div>

                {/* Target Audience */}
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                  {pkg.target}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8 border-t border-white/[0.08] pt-5">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FFB347] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-semibold tracking-wide bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-[#FFB347]/30 transition-all duration-200"
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          );
        })}
      </div>

      {/* Row 2: 3 Cards (Premium Apex, Enterprise BlackCode, Paket Sesuai Budget) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full items-stretch">
        {row2.map((pkg) => {
          const Icon = pkg.icon;
          return (
            <div 
              key={pkg.id}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                pkg.featured
                  ? 'bg-gradient-to-b from-[#181524] to-[#12101A] border-2 border-[#FFB347]/60 shadow-[0_0_45px_rgba(255,179,71,0.22)] hover:shadow-[0_0_55px_rgba(255,179,71,0.35)]'
                  : pkg.isCustomBudget
                  ? 'bg-gradient-to-b from-[#101926] to-[#0D121D] border border-cyan-400/35 hover:border-cyan-400/80 shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]'
                  : 'bg-[#14121A] md:bg-[#14121A]/80 md:backdrop-blur-xl border border-white/15 hover:border-[#FFB347]/40 shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 right-6">
                  <span className={`px-3.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-lg ${
                    pkg.featured
                      ? 'text-[#0D0C10] bg-gradient-to-r from-[#FFB347] to-[#C29166] shadow-[0_0_15px_rgba(255,179,71,0.5)]'
                      : pkg.isCustomBudget
                      ? 'text-[#0D0C10] bg-gradient-to-r from-[#38bdf8] to-[#0284c7] shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                      : 'text-white bg-[#1E1B2A] border border-white/20'
                  }`}>
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                  pkg.isCustomBudget
                    ? 'bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                    : 'bg-[#FFB347]/10 border border-[#FFB347]/25 text-[#FFB347] shadow-[0_0_15px_rgba(255,179,71,0.15)]'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Package Name */}
                <h3 className="text-xl font-bold font-heading text-white mb-2 leading-snug">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className={`text-2xl sm:text-3xl font-extrabold font-heading mb-3 ${
                  pkg.isCustomBudget
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400'
                    : 'text-gradient-amber'
                }`}>
                  {pkg.price}
                </div>

                {/* Target Audience */}
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                  {pkg.target}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8 border-t border-white/[0.08] pt-5">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        pkg.isCustomBudget ? 'text-cyan-400' : 'text-[#FFB347]'
                      }`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="#kontak"
                className={`inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  pkg.featured
                    ? 'bg-gradient-to-r from-[#FFB347] to-[#C29166] text-[#0D0C10] hover:scale-[1.02] shadow-[0_0_20px_rgba(255,179,71,0.3)] font-bold'
                    : pkg.isCustomBudget
                    ? 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-400/40 hover:border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.2)] font-semibold'
                    : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-[#FFB347]/30'
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          );
        })}
      </div>

    </section>
  );
}
