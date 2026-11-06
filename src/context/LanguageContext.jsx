import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  id: {
    // Navbar
    nav: {
      beranda: 'Beranda',
      layanan: 'Layanan',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    // Hero
    hero: {
      badge: 'NEXT-GEN WEB ARCHITECTURE',
      headlinePart1: 'Akselerasi Skala Bisnis',
      headlineConnector: 'lewat',
      headlinePart2: 'Solusi Digital Presisi.',
      subheadline: 'Mengubah visi bisnis Anda menjadi platform digital cepat, terukur, dan siap menghasilkan dampak nyata sejak hari pertama.',
      cta: 'Evolusikan Brand Anda',
      metrics: ['Akses Cepat & Ringan', '100% Ramah Smartphone', 'Website Sepenuhnya Milik Anda'],
    },
    // Services
    services: {
      badge: 'Pilihan Paket & Investasi',
      headingPart1: 'Paket Website Siap Pakai',
      headingPart2: 'Sesuai Kebutuhan Bisnis Anda.',
      description: 'Harga transparan dan terjangkau untuk pasar Indonesia. Tanpa biaya tersembunyi, semua paket sudah termasuk domain, server cepat, dan bantuan teknis.',
      ctaPrefix: 'Pilih',
      ctaConsult: 'Konsultasi Gratis',
      ctaCustomBudget: 'Diskusikan Budget',
      packages: {
        starter: {
          name: 'Paket Starter',
          price: 'Rp 950.000',
          target: 'Website 1 halaman praktis untuk promosi kilat dan langsung terima chat pelanggan.',
          features: [
            'Halaman promosi ringkas (1 halaman siap jualan)',
            'Tampilan rapi & nyaman dibuka di HP dan laptop',
            'Tombol chat langsung terhubung ke WhatsApp Anda',
            'Gratis nama domain resmi (.com) & server 1 tahun',
            'Bisa dicari dan terdaftar di Google',
          ],
        },
        business: {
          name: 'Paket Business',
          price: 'Rp 2.450.000',
          target: 'Website profil perusahaan lengkap untuk membangun kepercayaan calon klien dan mitra.',
          features: [
            '5–7 Halaman lengkap (Profil, Layanan, Galeri, Kontak)',
            'Alamat email resmi kantor (contoh: info@namabisnis.com)',
            'Peta lokasi Google Maps interaktif langsung di website',
            'Bisa ganti foto dan tulisan sendiri dengan mudah',
            'Gratis nama domain (.com/.id) & server cepat 1 tahun',
          ],
        },
        ecommerce: {
          name: 'Paket Toko Online',
          price: 'Rp 4.250.000',
          target: 'Toko online otomatis yang hitung ongkir dan terima pembayaran tanpa repot rekap manual.',
          features: [
            'Katalog produk lengkap dengan variasi ukuran & warna',
            'Bayar otomatis via QRIS, Transfer Bank, & E-Wallet',
            'Ongkos kirim otomatis (JNE, J&T, SiCepat, dll.)',
            'Pemberitahuan pesanan baru langsung masuk ke WhatsApp',
            'Halaman admin mudah untuk pantau stok & pesanan',
          ],
        },
        premium: {
          name: 'Paket Custom Studio',
          price: 'Rp 6.800.000',
          badge: 'Paling Diminati',
          target: 'Website dengan desain dibuat khusus dari nol, tampil mewah, cepat, dan berkelas.',
          features: [
            'Desain eksklusif 100% dibuat khusus (bukan template)',
            'Animasi halus & interaktif yang membuat pengunjung kagum',
            'Kecepatan akses super ngebut dan nyaman dibuka',
            'Fitur khusus sesuai kebutuhan bisnis Anda',
            'Garansi perawatan & bantuan teknis selama 3 bulan',
          ],
        },
        enterprise: {
          name: 'Paket Web App / Sistem',
          price: 'Mulai Rp 12.500.000',
          badge: 'Sistem Perusahaan',
          target: 'Aplikasi berbasis web atau sistem kustom untuk operasional kantor yang aman dan terpadu.',
          features: [
            'Sistem login multi-pengguna (admin, staf, pelanggan)',
            'Pengolahan data & laporan otomatis sesuai alur kantor',
            'Server berkecepatan tinggi dengan cadangan data berkala',
            'Jaminan keamanan & surat perjanjian kerahasiaan (NDA)',
            'Dukungan teknisi prioritas & pendampingan teknis',
          ],
        },
        customBudget: {
          name: 'Paket Sesuai Budget',
          price: 'Sesuai Dana Anda',
          badge: 'Paling Fleksibel',
          target: 'Diskusikan anggaran yang Anda siapkan, kami susunkan fitur terbaik yang paling pas dengan dana Anda.',
          features: [
            'Pilihan fitur disesuaikan dengan dana yang Anda siapkan',
            'Konsultasi gratis & ramah untuk menentukan fitur terpenting',
            'Transparan tanpa biaya tersembunyi sejak awal',
            'Pembayaran bisa bertahap (sistem DP/termin fleksibel)',
            'Tetap mendapatkan kualitas pengerjaan standar KarsaCode',
          ],
        },
      },
    },
    // Workflow
    workflow: {
      badge: 'Alur Rekayasa Presisi',
      headingPart1: 'Dari Niat Strategis Menjadi',
      headingPart2: 'Kekuatan Digital Nyata.',
      description: 'Transparansi mutlak di setiap tahapan. Kami menggabungkan ketelitian studio teknologi modern dengan standar rekayasa software kelas dunia untuk melipatgandakan dampak bisnis Anda.',
      steps: [
        {
          num: '01',
          title: 'Karsa & Growth Discovery',
          description: 'Eksplorasi mendalam terhadap niat luhur brand, model bisnis, dan perumusan tolok ukur kesuksesan pertumbuhan.',
          tag: 'Strategic Intent & Scope',
        },
        {
          num: '02',
          title: 'Dimensional Experience Modeling',
          description: 'Merancang pengalaman visual kelas atas dengan kedalaman dimensi interaktif modern dan hierarki informasi berkonversi tinggi.',
          tag: 'High-Fidelity Dimensional UI/UX',
        },
        {
          num: '03',
          title: 'Zero-Bloat Code Engineering',
          description: 'Perakitan kode modular berstandar tinggi (React/Next.js, TypeScript). Ramping, tangguh, tanpa bloatware, dan teroptimasi SEO global.',
          tag: 'Bespoke Clean Engineering',
        },
        {
          num: '04',
          title: 'Enterprise Launch & Scalability',
          description: 'Audit performa ekstrem (Lighthouse 100/100), deployment ke infrastruktur edge global, garansi purna jual, serta penyerahan 100% hak cipta kode.',
          tag: 'Global Launch & 100% IP Handover',
        },
      ],
    },
    // Portfolio
    portfolio: {
      badge: 'Bukti Pertumbuhan Global',
      headingPart1: 'Rekayasa Nyata,',
      headingPart2: 'Akselerasi Skala Global.',
      description: 'Setiap platform yang kami rekayasa dirancang untuk melahirkan dampak bisnis terukur—menggabungkan kecepatan kilat, konversi superior, dan ketahanan infrastruktur di pasar internasional.',
      cases: [
        {
          title: 'Aether Digital Vault',
          client: 'FinTech Swiss & Web3 Ecosystem',
          category: 'DeFi & Wealth Management',
          description: 'Platform manajemen aset kekayaan digital terdesentralisasi dengan antarmuka dimensional modern, enkripsi end-to-end multi-sig tingkat enterprise, dan latensi interaksi global sub-detik.',
          metrics: [
            { label: 'Core Web Vitals', val: '100/100' },
            { label: 'Vol. Transaksi Q1', val: '$4.2M' },
            { label: 'Latency Interaksi', val: '0.14s' },
          ],
        },
        {
          title: 'QuantumCLI Cloud Engine',
          client: 'DevTools Startup (San Francisco)',
          category: 'Developer Platform & SaaS',
          description: 'Aplikasi web SaaS & terminal real-time interaktif untuk developer cloud. Dilengkapi monitoring latensi edge serverless dan dokumentasi API interaktif berkonversi tinggi.',
          metrics: [
            { label: 'Conversion Rate', val: '+68%' },
            { label: 'First Contentful Paint', val: '0.3s' },
            { label: 'Active Developers', val: '14.5K' },
          ],
        },
        {
          title: 'Monolith High-Jewelry',
          client: 'Luxury Brand Group (Milan & Tokyo)',
          category: 'Dimensional Luxury E-Commerce',
          description: 'Pengalaman belanja kemewahan digital dengan rendering dimensional 3D interaktif perhiasan permata, kustomisasi bento grid dinamis, dan integrasi pembayaran multi-mata uang internasional.',
          metrics: [
            { label: 'Average Order Value', val: '+42%' },
            { label: 'Mobile Bounce Rate', val: '-54%' },
            { label: 'Uptime Reliability', val: '99.99%' },
          ],
        },
      ],
    },
    // Why Choose Us
    why: {
      badge: 'Prinsip Evolusi Digital',
      headingPart1: 'Kualitas Tanpa Kompromi,',
      headingPart2: 'Dampak Bisnis Eksponensial.',
      description: 'Kami menolak kompromi teknis. Menggabungkan arsitektur software berdaya saing global dengan estetika dimensional yang mengukuhkan dominasi pasar Anda.',
      cards: [
        {
          tag: 'Konversi Superior',
          title: 'Desain Dimensional Berdaya Konversi',
          description: 'Memikat audiens internasional dengan estetika visual berkelas yang tidak hanya memukau mata, tetapi dirancang presisi untuk memandu pengunjung menuju keputusan transaksi.',
          points: [
            'Estetika Dimensional Masa Depan',
            'Riset Perilaku Pengguna Berbasis Data',
            'Arsitektur Informasi Berdaya Pikat Tinggi',
          ],
        },
        {
          tag: 'Performa Global',
          title: 'Arsitektur Tangguh Tanpa Hambatan',
          description: 'Kapasitas komputasi edge serverless yang siap menangani lonjakan jutaan trafik tanpa lag atau downtime. Kode bespoke super-ringan untuk skor Core Web Vitals 100/100.',
          points: [
            'Skor Lighthouse 100/100 Sempurna',
            'Infrastruktur Edge CDN Terdistribusi Global',
            'Waktu Muat Sub-Detik Tanpa Bloatware',
          ],
        },
        {
          tag: 'Kedaulatan Penuh',
          title: 'Transparansi Repositori Seumur Hidup',
          description: 'Bebas mengembangkan fitur lanjutan secara mandiri tanpa terikat pada satu vendor. 100% hak cipta kode sumber (IP), aset desain, dan akses repositori GitHub diserahkan seutuhnya.',
          points: [
            '100% Hak Milik Kode di Tangan Anda',
            'Akses Repositori GitHub & Dokumentasi Lengkap',
            'Garansi Purna Jual & Support Terdedikasi',
          ],
        },
      ],
    },
    // Contact
    contact: {
      badge: 'Konsultasi Pertumbuhan Global',
      headingPart1: 'Luncurkan Produk Digital Berdaya Saing',
      headingPart2: 'di Panggung Global.',
      description: 'Dari startup tahap awal hingga korporasi matang, kami siap menjadi motor rekayasa perangkat lunak yang merealisasikan visi digital Anda tanpa celah kegagalan.',
      benefitsTitle: 'Jaminan Kualitas KarsaCode:',
      benefits: [
        'Sesi discovery intensif untuk memetakan arsitektur konversi.',
        'Proposal teknikal komprehensif & jadwal delivery terukur.',
        'Tanpa vendor lock-in, 100% hak cipta menjadi milik Anda seutuhnya.',
        'Dukungan pemeliharaan berdedikasi & garansi performa sub-detik.',
      ],
      form: {
        nameLabel: 'Nama Lengkap',
        namePlaceholder: 'Nama Anda atau Perusahaan',
        emailLabel: 'Alamat Email',
        emailPlaceholder: 'email@perusahaan.com',
        phoneLabel: 'Nomor WhatsApp',
        phonePlaceholder: '+62 851 8173 8437',
        packageLabel: 'Paket yang Diminati',
        packagePlaceholder: 'Pilih Paket...',
        descLabel: 'Ringkasan Kebutuhan Proyek',
        descPlaceholder: 'Ceritakan visi website, target waktu peluncuran, atau fitur spesifik yang Anda butuhkan...',
        submit: 'Kirim Rencana Proyek Global',
        directChat: 'Atau langsung chat WhatsApp dengan Lead Engineer:',
      },
    },
    // Footer
    footer: {
      tagline: 'Solusi pembuatan website terjangkau, cepat, dan terpercaya untuk UMKM, profesional, dan perusahaan di seluruh Indonesia.',
      statusBadge: 'Konsultasi Gratis Sedang Dibuka',
      rights: 'Seluruh hak cipta dilindungi undang-undang.',
      crafted: 'Dibuat dengan standar performa dan kualitas terbaik.',
    },
    // Common
    common: {
      chatWA: 'Diskusi Instan (WA)',
    },
  },

  en: {
    // Navbar
    nav: {
      beranda: 'Home',
      layanan: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    // Hero
    hero: {
      badge: 'NEXT-GEN WEB ARCHITECTURE',
      headlinePart1: 'Accelerating Business Scale',
      headlineConnector: 'through',
      headlinePart2: 'Precision Engineering.',
      subheadline: 'Turning your business vision into fast, scalable digital platforms that drive real business impact from day one.',
      cta: 'Evolve Your Brand',
      metrics: ['Fast & Lightweight', '100% Mobile Friendly', '100% Full Ownership'],
    },
    // Services
    services: {
      badge: 'Package Plans & Investment',
      headingPart1: 'Ready-to-Deploy Web Solutions',
      headingPart2: 'Tailored to Your Business Goals.',
      description: 'Transparent, accessible pricing tailored for the Indonesian market. No hidden fees—every package includes domain, fast hosting, and technical assistance.',
      ctaPrefix: 'Choose',
      ctaConsult: 'Free Consultation',
      ctaCustomBudget: 'Discuss Budget',
      packages: {
        starter: {
          name: 'Starter Plan',
          price: 'Rp 950,000',
          target: 'A practical 1-page landing site for quick promotions and direct customer inquiries.',
          features: [
            'Clean 1-page layout ready for sales & promotion',
            'Responsive design optimized for both mobile & desktop',
            'Direct WhatsApp chat button for instant customer leads',
            '1-year official domain (.com) & fast hosting included',
            'Indexed and searchable on Google',
          ],
        },
        business: {
          name: 'Business Plan',
          price: 'Rp 2,450,000',
          target: 'A complete company profile website to build instant credibility with clients & partners.',
          features: [
            '5–7 complete pages (About, Services, Gallery, Contact)',
            'Official business email (e.g. info@yourbusiness.com)',
            'Interactive Google Maps location embedded on page',
            'Easy-to-use CMS to update photos and text anytime',
            '1-year domain (.com/.id) & high-speed server included',
          ],
        },
        ecommerce: {
          name: 'Online Store Plan',
          price: 'Rp 4,250,000',
          target: 'An automated online store that calculates shipping and receives payments 24/7.',
          features: [
            'Full product catalog with size/color variations',
            'Automated checkout: QRIS, Bank Transfer, & E-Wallets',
            'Live shipping calculation (JNE, J&T, SiCepat, etc.)',
            'Instant new-order notifications sent to your WhatsApp',
            'Admin dashboard to manage inventory and customer orders',
          ],
        },
        premium: {
          name: 'Custom Studio Plan',
          price: 'Rp 6,800,000',
          badge: 'Most Popular',
          target: 'A bespoke website crafted from scratch with premium aesthetics and lightning-fast speed.',
          features: [
            '100% bespoke design (zero generic templates)',
            'Smooth interactive animations and premium visual depth',
            'Ultra-fast loading speeds for peak user retention',
            'Custom features tailored to your specific workflow',
            '3-month warranty & dedicated technical support',
          ],
        },
        enterprise: {
          name: 'Web App / System Plan',
          price: 'From Rp 12,500,000',
          badge: 'Enterprise Tier',
          target: 'Custom web-based applications and internal systems built for high-security operations.',
          features: [
            'Multi-tier user login (admin, staff, customer portals)',
            'Automated data workflows & reporting dashboards',
            'High-availability server infrastructure with regular backups',
            'Enterprise security standards & signed NDA protection',
            'Priority technical engineering support & maintenance',
          ],
        },
        customBudget: {
          name: 'Custom Budget Plan',
          price: 'Tailored to Budget',
          badge: 'Most Flexible',
          target: 'Share your available budget, and we will tailor the best possible features to match it.',
          features: [
            'Feature scope customized strictly to your budget allocation',
            'Free consultation to define your essential MVP priorities',
            'Full cost transparency with zero unexpected charges',
            'Flexible milestone-based payment installments',
            'Guaranteed KarsaCode quality craftsmanship across all tiers',
          ],
        },
      },
    },
    // Workflow
    workflow: {
      badge: 'Precision Engineering Lifecycle',
      headingPart1: 'From Strategic Intent to',
      headingPart2: 'Tangible Digital Power.',
      description: 'Absolute transparency at every milestone. We combine modern technology studio craftsmanship with world-class software engineering standards to multiply your business impact.',
      steps: [
        {
          num: '01',
          title: 'Karsa & Growth Discovery',
          description: 'In-depth exploration of your brand\'s noble vision, business model, and formulation of measurable growth metrics.',
          tag: 'Strategic Intent & Scope',
        },
        {
          num: '02',
          title: 'Dimensional Experience Modeling',
          description: 'Crafting premium visual experiences with modern interactive depth, responsive bento structure, and high-conversion hierarchy.',
          tag: 'High-Fidelity Dimensional UI/UX',
        },
        {
          num: '03',
          title: 'Zero-Bloat Code Engineering',
          description: 'High-standard modular code construction (React/Next.js, TypeScript). Lean, resilient, zero-bloat, and globally SEO-optimized.',
          tag: 'Bespoke Clean Engineering',
        },
        {
          num: '04',
          title: 'Enterprise Launch & Scalability',
          description: 'Rigorous performance audit (Lighthouse 100/100), global edge deployment, dedicated warranty support, and 100% full IP code handover.',
          tag: 'Global Launch & 100% IP Handover',
        },
      ],
    },
    // Portfolio
    portfolio: {
      badge: 'Proven Global Growth',
      headingPart1: 'Real Engineering,',
      headingPart2: 'Global Scale Acceleration.',
      description: 'Every platform we engineer is crafted to generate measurable business impact—combining lightning speed, superior conversion, and infrastructure resilience in international markets.',
      cases: [
        {
          title: 'Aether Digital Vault',
          client: 'Swiss FinTech & Web3 Ecosystem',
          category: 'DeFi & Wealth Management',
          description: 'Decentralized wealth management platform featuring modern dimensional interface, enterprise multi-sig encryption, and sub-second global latency.',
          metrics: [
            { label: 'Core Web Vitals', val: '100/100' },
            { label: 'Q1 Trans. Volume', val: '$4.2M' },
            { label: 'Interaction Latency', val: '0.14s' },
          ],
        },
        {
          title: 'QuantumCLI Cloud Engine',
          client: 'DevTools Startup (San Francisco)',
          category: 'Developer Platform & SaaS',
          description: 'Interactive real-time SaaS platform & cloud terminal for developers. Featuring edge serverless monitoring and high-converting interactive API documentation.',
          metrics: [
            { label: 'Conversion Rate', val: '+68%' },
            { label: 'First Contentful Paint', val: '0.3s' },
            { label: 'Active Developers', val: '14.5K' },
          ],
        },
        {
          title: 'Monolith High-Jewelry',
          client: 'Luxury Brand Group (Milan & Tokyo)',
          category: 'Dimensional Luxury E-Commerce',
          description: 'A digital high-luxury shopping experience featuring 3D interactive gemstone rendering, dynamic bento grids, and multi-currency global checkout.',
          metrics: [
            { label: 'Average Order Value', val: '+42%' },
            { label: 'Mobile Bounce Rate', val: '-54%' },
            { label: 'Uptime Reliability', val: '99.99%' },
          ],
        },
      ],
    },
    // Why Choose Us
    why: {
      badge: 'Principles of Digital Evolution',
      headingPart1: 'Uncompromising Quality,',
      headingPart2: 'Exponential Business Impact.',
      description: 'We reject technical compromise. Fusing globally competitive software architecture with dimensional aesthetics to solidify your market dominance.',
      cards: [
        {
          tag: 'Peak Conversion',
          title: 'High-Converting Dimensional Design',
          description: 'Captivating international audiences with refined visual aesthetics engineered with precision to guide visitors effortlessly toward transactional decisions.',
          points: [
            'Future-Ready Dimensional Aesthetics',
            'Data-Driven User Behavior Research',
            'High-Impact Information Architecture',
          ],
        },
        {
          tag: 'Global Performance',
          title: 'Resilient Zero-Bottleneck Architecture',
          description: 'Edge serverless computing capacity ready to handle surges of millions of requests with zero lag or downtime. Ultra-lean bespoke code delivering flawless 100/100 Core Web Vitals.',
          points: [
            'Flawless 100/100 Lighthouse Performance',
            'Globally Distributed Edge CDN Infrastructure',
            'Sub-Second Load Time with Zero Bloatware',
          ],
        },
        {
          tag: 'Full Sovereignty',
          title: 'Lifetime Repository Transparency',
          description: 'Freedom to scale and evolve features independently without vendor lock-in. 100% intellectual property (IP), design assets, and full GitHub repository access belong to you.',
          points: [
            '100% Client-Owned Code & IP Rights',
            'Direct GitHub Repository & Documentation Access',
            'Post-Launch Warranty & Dedicated Engineering Support',
          ],
        },
      ],
    },
    // Contact
    contact: {
      badge: 'Global Growth Consultation',
      headingPart1: 'Launch Globally Competitive Products',
      headingPart2: 'on the Global Stage.',
      description: 'From early-stage startups to established enterprises, we engineer high-performance software systems that transform your digital vision into market reality with zero failure margin.',
      benefitsTitle: 'KarsaCode Quality Guarantees:',
      benefits: [
        'Intensive discovery session to architect conversion pathways.',
        'Comprehensive technical proposal & measurable delivery timeline.',
        'Zero vendor lock-in, 100% full IP ownership belongs to you.',
        'Dedicated maintenance support & sub-second performance guarantee.',
      ],
      form: {
        nameLabel: 'Full Name',
        namePlaceholder: 'Your Name or Company',
        emailLabel: 'Email Address',
        emailPlaceholder: 'email@company.com',
        phoneLabel: 'WhatsApp / Phone',
        phonePlaceholder: '+62 851 8173 8437',
        packageLabel: 'Selected Package',
        packagePlaceholder: 'Select a Package...',
        descLabel: 'Project Requirements Summary',
        descPlaceholder: 'Tell us about your website vision, desired timeline, or specific technical features...',
        submit: 'Submit Global Project Plan',
        directChat: 'Or chat directly via WhatsApp with our Lead Engineer:',
      },
    },
    // Footer
    footer: {
      tagline: 'Affordable, fast, and trusted website solutions for businesses and companies across Indonesia.',
      statusBadge: 'Free Consultations Open',
      rights: 'All rights reserved.',
      crafted: 'Built to the highest standards of performance and quality.',
    },
    // Common
    common: {
      chatWA: 'Instant Chat (WA)',
    },
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('karsacode_lang') || 'id';
  });

  useEffect(() => {
    localStorage.setItem('karsacode_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
