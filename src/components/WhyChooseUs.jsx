import React from 'react';
import { Compass, Gauge, KeyRound, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const cardIcons = [Compass, Gauge, KeyRound];

  return (
    <section id="why-choose-us" className="relative z-10 py-20 md:py-28 max-w-6xl mx-auto px-4 w-full">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14121A] border border-[#FFB347]/20 text-xs font-semibold text-gradient-amber uppercase tracking-wider mb-4">
          <Sparkles className="w-3 h-3 text-[#FFB347]" />
          <span>{t.why.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
          {t.why.headingPart1}{' '}
          <span className="text-gradient-amber">{t.why.headingPart2}</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
          {t.why.description}
        </p>
      </div>

      {/* 3 Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {t.why.cards.map((item, idx) => {
          const Icon = cardIcons[idx] || Compass;
          return (
            <div 
              key={idx}
              className="group relative rounded-3xl p-8 bg-[#14121A]/60 backdrop-blur-2xl border border-white/10 hover:border-[#FFB347]/40 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_50px_rgba(255,179,71,0.15)] flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Subtle Ambient Radial Lighting within Card */}
              <div 
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 179, 71, 0.25) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              <div>
                {/* Icon Box & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFB347]/10 border border-[#FFB347]/25 flex items-center justify-center text-[#FFB347] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,179,71,0.2)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-[#C29166] uppercase px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-[#FFB347] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Points */}
                <ul className="space-y-2 mb-6 border-t border-white/[0.08] pt-4">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB347]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Highlight Tag */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-[#FFB347]">
                <ShieldCheck className="w-4 h-4 text-[#C29166]" />
                <span>{item.tag}</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
