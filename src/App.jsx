import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { t, language } = useLanguage();

  const waMessage = language === 'id'
    ? 'Halo KarsaCode Digital Evolution Studio, saya ingin konsultasi pembuatan website.'
    : 'Hello KarsaCode Digital Evolution Studio, I would like to consult regarding website development.';

  return (
    <div className="relative min-h-screen bg-[#0D0C10] text-white font-sans antialiased selection:bg-[#FFB347]/30 selection:text-[#FFB347]">
      {/* 1. Main Tiled Background Pattern (Seamless repeating constellation mesh) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/assets/tiled_bg.jpg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '512px 512px',
          backgroundPosition: 'center top',
          opacity: 0.65,
        }}
      >
        {/* Ambient Dark Overlay to maintain optimal text contrast & bento glass clarity */}
        <div className="absolute inset-0 bg-[#0D0C10]/40" />
      </div>

      {/* 2. Floating Spatial Glass Navbar */}
      <Navbar />

      {/* 3. Main Content Sections */}
      <main className="relative z-10 flex flex-col items-center w-full">
        {/* 1. Beranda (Hero with its dedicated video background) */}
        <Hero />

        {/* 2. Layanan (6 Paket Rekayasa Digital Termasuk Paket Sesuai Budget) */}
        <Services />

        {/* 3. Contact (Konsultasi & Kontak Interaktif) */}
        <ContactCTA />
      </main>

      {/* 4. Studio Footer (Jakarta & Yogyakarta) */}
      <Footer />

      {/* 5. Floating WhatsApp Instant Trigger */}
      <a
        href={`https://wa.me/6285181738437?text=${encodeURIComponent(waMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-[#FFB347] to-[#C29166] hover:from-[#FFA930] hover:to-[#B68155] text-[#0D0C10] text-xs sm:text-sm font-bold shadow-[0_0_30px_rgba(255,179,71,0.5)] hover:shadow-[0_0_40px_rgba(255,179,71,0.8)] transition-all duration-300 hover:scale-105 group"
        aria-label="Chat WhatsApp Studio"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D0C10] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0D0C10]"></span>
        </span>
        <MessageCircle className="w-4 h-4 fill-[#0D0C10]" />
        <span className="hidden sm:inline">{t.common.chatWA}</span>
      </a>
    </div>
  );
}
