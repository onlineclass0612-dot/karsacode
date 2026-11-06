import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Raditya Pratama',
      role: 'CEO & Co-Founder',
      company: 'FinTech Nexus Asia',
      content: 'KarsaCode berhasil merekayasa platform kami dengan estetika spatial glass yang sangat memukau. Dalam putaran pendanaan terakhir, antarmuka web dan kecepatan respon sub-detik menjadi faktor kunci yang memikat para investor institusional.',
      rating: 5,
    },
    {
      name: 'Elena Rostova',
      role: 'Creative Director & Founder',
      company: 'Veloce Luxury Studio',
      content: 'Beralih ke KarsaCode adalah keputusan terbaik untuk toko online kami. Waktu muat turun drastis ke 0.2 detik dan konversi checkout meningkat 3.8 kali lipat dalam 60 hari pertama. Standar koding mereka benar-benar berada di kelas tersendiri.',
      rating: 5,
    },
    {
      name: 'Dimas Satria',
      role: 'Chief Technology Officer',
      company: 'DataScale Global Systems',
      content: 'Sebagai sesama engineer, saya sangat menghargai kebersihan repositori yang diserahkan. Bebas bloatware, arsitektur TypeScript rapi, dan serah terima hak cipta 100% transparan tanpa penguncian vendor. Sangat kami rekomendasikan.',
      rating: 5,
    },
  ];

  return (
    <section className="relative z-10 py-20 md:py-28 max-w-6xl mx-auto px-4 w-full">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14121A] border border-[#FFB347]/20 text-xs font-semibold text-gradient-amber uppercase tracking-wider mb-4">
          <span>Validasi Industri</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
          Dipercaya oleh Para{' '}
          <span className="text-gradient-amber">Inovator & Pengusaha.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
          Kemitraan strategis yang menghasilkan dampak bisnis nyata dan pertumbuhan terukur.
        </p>
      </div>

      {/* 3 Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {reviews.map((rev, idx) => (
          <div 
            key={idx}
            className="rounded-3xl p-8 bg-[#14121A]/60 backdrop-blur-2xl border border-white/10 hover:border-[#FFB347]/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:-translate-y-1.5"
          >
            <div>
              {/* Stars & Quote Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-[#FFB347] text-[#FFB347]" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-[#C29166]/40" />
              </div>

              {/* Content */}
              <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed italic mb-6">
                "{rev.content}"
              </p>
            </div>

            {/* Author Meta */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB347]/20 to-[#C29166]/10 border border-[#FFB347]/30 flex items-center justify-center font-bold text-sm text-[#FFB347]">
                {rev.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-white font-heading">
                  {rev.name}
                </div>
                <div className="text-[11px] text-[#A1A1AA]">
                  {rev.role}, <span className="text-[#C29166]">{rev.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
