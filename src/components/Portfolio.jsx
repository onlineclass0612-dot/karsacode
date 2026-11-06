import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();

  const caseImages = [
    '/assets/demo_corporate.jpg',
    '/assets/demo_cafe.jpg',
    '/assets/demo_ecommerce.jpg',
  ];

  const caseTags = [
    ['Spatial UI', 'React / Next.js', 'Real-time WebSocket', 'Tailwind'],
    ['SaaS Architecture', 'TypeScript', 'Edge Serverless', 'PostgreSQL'],
    ['E-Commerce', 'Spatial Bento', 'Payment Gateway', 'Instant Checkout'],
  ];

  return (
    <section id="portfolio" className="relative z-10 py-20 md:py-28 max-w-6xl mx-auto px-4 w-full">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14121A] border border-[#FFB347]/20 text-xs font-semibold text-gradient-amber uppercase tracking-wider mb-4">
          <span>{t.portfolio.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
          {t.portfolio.headingPart1}{' '}
          <span className="text-gradient-amber">{t.portfolio.headingPart2}</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
          {t.portfolio.description}
        </p>
      </div>

      {/* 3 Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {t.portfolio.cases.map((project, idx) => (
          <div 
            key={idx}
            className="group rounded-3xl overflow-hidden bg-[#14121A]/60 backdrop-blur-2xl border border-white/10 hover:border-[#FFB347]/40 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_50px_rgba(255,179,71,0.15)] flex flex-col justify-between hover:-translate-y-1.5"
          >
            {/* Visual Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/80">
              <img 
                src={caseImages[idx]} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C10] via-transparent to-transparent opacity-80" />
              
              {/* Metric Tag Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold text-[#FFB347] bg-[#0D0C10]/90 backdrop-blur-md border border-[#FFB347]/30 shadow-lg">
                  {project.metrics[0].label}: {project.metrics[0].val}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-7 flex flex-col justify-between flex-grow">
              <div>
                <div className="text-xs font-mono font-medium text-[#C29166] uppercase tracking-wider mb-2">
                  {project.category}
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-2.5 group-hover:text-[#FFB347] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Link */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {(caseTags[idx] || []).map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono text-gray-400 bg-white/[0.03] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#kontak"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFB347] hover:text-white transition-colors group/link"
                >
                  <span>Lihat Studi Kasus</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
