import React from 'react';
import Logo from './Logo';
import { MessageSquare, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-[#0A090E] pt-16 pb-10 text-left">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">
          
          {/* Brand & Mission (Col 6) */}
          <div className="lg:col-span-6">
            <div className="mb-5">
              <Logo size="lg" />
            </div>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-sm mb-6 font-normal">
              {t.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-[#FFB347]">
              <span className="w-2 h-2 rounded-full bg-[#FFB347] animate-pulse" />
              <span>{t.footer.statusBadge}</span>
            </div>
          </div>

          {/* Quick Navigation (Col 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-5">
              {language === 'id' ? 'Navigasi Studio' : 'Studio Navigation'}
            </h4>
            <ul className="space-y-3 text-xs text-[#A1A1AA]">
              <li>
                <a href="#hero" className="hover:text-[#FFB347] transition-colors">{t.nav.beranda}</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#FFB347] transition-colors">{t.nav.layanan}</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#FFB347] transition-colors">{t.nav.contact}</a>
              </li>
            </ul>
          </div>

          {/* Studio Contact Channels (Col 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-5">
              {language === 'id' ? 'Kontak Studio' : 'Studio Contact'}
            </h4>
            <div className="space-y-3 text-xs text-[#A1A1AA]">
              <a 
                href="https://wa.me/6285181738437" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-[#FFB347] transition-colors group"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FFB347]" />
                <span className="group-hover:text-white transition-colors">+62 851-8173-8437</span>
              </a>
              <a 
                href="mailto:rushcode12@gmail.com" 
                className="flex items-center gap-2 hover:text-[#FFB347] transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-[#C29166]" />
                <span className="group-hover:text-white transition-colors">rushcode12@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-gray-300 font-semibold">KarsaCode</span> (Digital Evolution Studio). {t.footer.rights}
          </div>
          <div className="text-gray-400 font-mono text-[11px]">
            {t.footer.crafted}
          </div>
        </div>

      </div>
    </footer>
  );
}
