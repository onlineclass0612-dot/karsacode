import React from 'react';
import { Target, Layers, Terminal, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Workflow() {
  const { t } = useLanguage();

  const stepIcons = [Target, Layers, Terminal, Rocket];

  return (
    <section id="langkah" className="relative z-10 py-20 md:py-28 max-w-6xl mx-auto px-4 w-full">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14121A] border border-[#FFB347]/20 text-xs font-semibold text-gradient-amber uppercase tracking-wider mb-4">
          <span>{t.workflow.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
          {t.workflow.headingPart1}{' '}
          <span className="text-gradient-amber">{t.workflow.headingPart2}</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
          {t.workflow.description}
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {t.workflow.steps.map((step, idx) => {
          const Icon = stepIcons[idx] || Target;
          return (
            <div 
              key={idx}
              className="relative rounded-3xl p-7 bg-[#14121A]/60 backdrop-blur-xl border border-white/10 hover:border-[#FFB347]/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-heading text-3xl font-extrabold text-gradient-amber">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FFB347]/10 border border-[#FFB347]/20 flex items-center justify-center text-[#FFB347] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-heading text-white mb-2.5 group-hover:text-[#FFB347] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Step Tag */}
              <div className="pt-3.5 border-t border-white/[0.08] text-[11px] font-mono font-medium text-[#C29166]">
                {step.tag}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
