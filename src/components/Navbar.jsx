import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { language, toggleLanguage, t } = useLanguage();

  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  const navItems = [
    { id: 'hero', label: t.nav.beranda, href: '#hero' },
    { id: 'layanan', label: t.nav.layanan, href: '#layanan' },
    { id: 'kontak', label: t.nav.contact, href: '#kontak' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    // Lock scrollspy during smooth scroll animation to prevent stuttering
    isClickingRef.current = true;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 900);
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          // If user recently clicked a nav item, don't overwrite during smooth scroll
          if (isClickingRef.current) {
            ticking = false;
            return;
          }

          const sectionIds = ['hero', 'layanan', 'kontak'];
          const viewportTarget = window.scrollY + window.innerHeight * 0.35;

          // Check if scrolled near the bottom of page
          if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 80) {
            setActiveSection('kontak');
            ticking = false;
            return;
          }

          let current = 'hero';
          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              const absoluteTop = rect.top + window.scrollY;
              if (viewportTarget >= absoluteTop) {
                current = id;
              }
            }
          }

          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-[#0D0C10]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.7)] py-3.5 sm:py-4' 
          : 'bg-transparent border-b border-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative flex items-center justify-between">
        {/* Left: Logo Mark & Text (Left Aligned) */}
        <div className="flex items-center justify-start z-10">
          <a href="#hero" className="flex items-center">
            <Logo />
          </a>
        </div>

        {/* Center: Desktop Navigation Links (True Absolute Dead-Center) */}
        <nav className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          <ul className="flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative text-sm font-medium transition-colors duration-300 py-1.5 px-0.5 block ${
                      isActive ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    {item.label}

                    {/* Silky Smooth Animated Underline for Active Nav Button */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFB347] via-[#FFE0B2] to-[#FFB347] rounded-full shadow-[0_0_12px_rgba(255,179,71,0.65)]"
                        style={{ willChange: 'transform' }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                          mass: 0.8,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Language Switcher & Mobile Menu (Right Aligned) */}
        <div className="flex items-center justify-end gap-3 z-10">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold font-mono tracking-wider bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#FFB347]/40 text-white backdrop-blur-xl transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(255,179,71,0.25)] hover:scale-[1.03]"
            title={language === 'id' ? 'Ganti ke Bahasa Inggris' : 'Switch to Bahasa Indonesia'}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-[#FFB347]" />
            <span className={language === 'id' ? 'text-[#FFB347] font-bold' : 'text-gray-400'}>ID</span>
            <span className="text-white/20 text-[10px]">|</span>
            <span className={language === 'en' ? 'text-[#FFB347] font-bold' : 'text-gray-400'}>EN</span>
          </button>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0D0C10]/95 backdrop-blur-2xl border-b border-[#FFB347]/20 px-6 py-6 shadow-2xl md:hidden flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  handleNavClick(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-base font-medium py-2.5 border-b border-white/5 flex items-center justify-between transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB347] shadow-[0_0_8px_#FFB347]" />
                )}
              </a>
            );
          })}
          
          <button
            onClick={() => {
              toggleLanguage();
              setMobileMenuOpen(false);
            }}
            className="mt-2 py-2.5 px-4 rounded-full text-xs font-semibold font-mono tracking-wider bg-white/[0.08] border border-[#FFB347]/30 text-white flex items-center justify-center gap-2"
          >
            <Globe className="w-3.5 h-3.5 text-[#FFB347]" />
            <span>{language === 'id' ? 'Switch to English (EN)' : 'Ganti ke Bahasa Indonesia (ID)'}</span>
          </button>
        </div>
      )}
    </header>
  );
}
