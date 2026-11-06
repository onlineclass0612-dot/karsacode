import React from 'react';
import { Rocket, Star, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      id: 'starter',
      name: 'Starter Launchpad',
      badge: 'Solusi Mandiri',
      price: 'Rp 1.500.000',
      period: 'all-in tahun pertama',
      description: 'Cocok untuk profesional, brand independen, dan kampanye peluncuran produk dengan daya konversi tinggi.',
      features: [
        '1 Halaman Spatial Bento (One-Page High Converting)',
        'Gratis Domain (.com / .id) & Cloud Server 1 Tahun',
        'Desain Spatial Glass Responsif 100% Mobile-First',
        'Integrasi WhatsApp CTA & Formulir Lead Otomatis',
        'On-Page SEO Google Index Terstruktur',
        'Garansi Bebas Bug & Serah Terima Kode 100%',
        'Estimasi Pengerjaan: 3–5 Hari Kerja',
      ],
      ctaText: 'Pilih Starter Launchpad',
      featured: false,
    },
    {
      id: 'scale',
      name: 'Business & SaaS Ready',
      badge: 'Paling Populer',
      price: 'Rp 3.500.000',
      period: 'all-in tahun pertama',
      description: 'Solusi lengkap bagi perusahaan berkembang, agensi, dan startup yang membutuhkan sistem multi-halaman dinamis.',
      features: [
        'Multi-Halaman Kustom (Hingga 5–7 Halaman)',
        'Gratis Domain Bisnis & High-Performance Cloud VPS',
        'Dashboard Admin / CMS Mandiri (Mudah Ubah Konten)',
        'Integrasi Database Relasional & API Gateway',
        'Integrasi Pembayaran Otomatis (QRIS / Midtrans)',
        'Alamat Email Bisnis Resmi (nama@perusahaan.com)',
        'Dukungan Teknis Prioritas Selama 3 Bulan',
        'Estimasi Pengerjaan: 7–14 Hari Kerja',
      ],
      ctaText: 'Pilih Business & SaaS Ready',
      featured: true,
    },
    {
      id: 'customBudget',
      name: 'Paket Sesuai Budget',
      badge: 'Paling Fleksibel',
      price: 'Sesuai Budget Anda',
      period: 'fleksibel sesuai alokasi',
      description: 'Solusi adaptif di mana fitur dan lingkup rekayasa diselaraskan tepat dengan alokasi anggaran yang Anda miliki.',
      features: [
        'Fitur & ruang lingkup disesuaikan alokasi dana',
        'Konsultasi gratis penentuan prioritas MVP',
        'Pilihan teknologi paling efisien & ramah biaya',
        'Sistem pembayaran bertahap (termin fleksibel)',
        'Transparansi penuh tanpa biaya tersembunyi',
        'Garansi integritas kode & serah terima penuh',
      ],
      ctaText: 'Konsultasi Budget Fleksibel',
      featured: false,
    },
    {
      id: 'enterprise',
      name: 'Dedicated Enterprise Kustom',
      badge: 'Bespoke Engineering',
      price: 'Mulai Rp 18.000.000+',
      period: 'sesuai kesepakatan SLA',
      description: 'Arsitektur perangkat lunak kustom berskala tinggi dengan tingkat keamanan enterprise dan jaminan ketersediaan sistem.',
      features: [
        'Arsitektur Fullstack Kustom (Next.js / Node / PostgreSQL)',
        'Sistem Autentikasi Kompleks & Multi-Tenant Role Access',
        'Perjanjian Kerahasiaan (NDA) & SLA Uptime 99.99%',
        'Audit Keamanan Menyeluruh & Uji Beban (Stress Testing)',
        'Infrastruktur Cloud Dedicated (Docker / Kubernetes Ready)',
        'Dedicated Senior Engineer & Konsultasi Arsitektur',
        'Dukungan SLA Khusus & Pemeliharaan Berkala',
      ],
      ctaText: 'Konsultasikan Kebutuhan Enterprise',
      featured: false,
    },
  ];

  return (
    <section id="paket" className="relative z-10 py-20 md:py-28 max-w-6xl mx-auto px-4 w-full">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14121A] border border-[#FFB347]/20 text-xs font-semibold text-gradient-amber uppercase tracking-wider mb-4">
          <span>Paket Harga Bergaransi</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
          Investasi Transparan,{' '}
          <span className="text-gradient-amber">Nol Biaya Tersembunyi.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
          Semua paket telah mencakup infrastruktur cloud, nama domain resmi tahun pertama, serta garansi integritas kode seutuhnya.
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
              tier.featured
                ? 'bg-gradient-to-b from-[#181524] via-[#12101A] to-[#0E0C14] border-2 border-[#FFB347]/60 shadow-[0_0_50px_rgba(255,179,71,0.25)] md:-translate-y-2'
                : 'bg-[#14121A]/60 backdrop-blur-2xl border border-white/10 hover:border-[#FFB347]/30 shadow-[0_12px_40px_rgba(0,0,0,0.5)]'
            }`}
          >
            {/* Featured Badge */}
            {tier.featured && (
              <div className="absolute -top-3.5 right-8">
                <span className="px-4 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-[#0D0C10] bg-gradient-to-r from-[#FFB347] to-[#C29166] shadow-[0_0_20px_rgba(255,179,71,0.5)]">
                  {tier.badge}
                </span>
              </div>
            )}

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  tier.featured 
                    ? 'bg-[#FFB347]/20 border border-[#FFB347]/40 text-[#FFB347]' 
                    : 'bg-white/[0.04] border border-white/10 text-gray-300'
                }`}>
                  {tier.id === 'starter' && <Rocket className="w-6 h-6" />}
                  {tier.id === 'scale' && <Star className="w-6 h-6 fill-[#FFB347]/20" />}
                  {tier.id === 'enterprise' && <ShieldCheck className="w-6 h-6" />}
                </div>
                {!tier.featured && (
                  <span className="text-[11px] font-mono tracking-wider text-gray-400 uppercase">
                    {tier.badge}
                  </span>
                )}
              </div>

              {/* Title & Price */}
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                {tier.name}
              </h3>

              <div className="mb-3">
                <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                  {tier.price}
                </span>
                <span className="text-xs text-gray-400 block mt-1">
                  /{tier.period}
                </span>
              </div>

              <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 pb-6 border-b border-white/[0.08]">
                {tier.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      tier.featured 
                        ? 'bg-[#FFB347] text-[#0D0C10] shadow-[0_0_8px_#FFB347]' 
                        : 'bg-white/10 text-white'
                    }`}>
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA Button */}
            <a
              href="#kontak"
              className={`w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                tier.featured
                  ? 'bg-gradient-to-r from-[#FFB347] to-[#C29166] text-[#0D0C10] hover:scale-[1.02] shadow-[0_0_25px_rgba(255,179,71,0.4)]'
                  : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-[#FFB347]/30'
              }`}
            >
              <span>{tier.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}
