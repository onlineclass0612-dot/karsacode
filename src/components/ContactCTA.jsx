import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, MessageSquare, Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactCTA() {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    packageTier: 'Paket Business (Rp 2.450.000)',
    budget: 'Rp 2.500.000 - Rp 4.500.000',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const prefix = language === 'id' 
      ? 'Halo KarsaCode Digital Evolution Studio,%0A%0ASaya ingin mendiskusikan niat proyek:' 
      : 'Hello KarsaCode Digital Evolution Studio,%0A%0AI would like to discuss a project inquiry:';

    const text = `${prefix}%0A- *Nama:* ${formData.name}%0A- *Email:* ${formData.email}%0A- *Paket:* ${formData.packageTier}%0A- *Estimasi Anggaran:* ${formData.budget}%0A- *Kebutuhan:* ${formData.description}`;
    
    window.open(`https://wa.me/6285181738437?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="relative z-10 py-20 md:py-28 max-w-6xl mx-auto px-4 w-full">
      
      <div className="rounded-[32px] p-8 sm:p-12 lg:p-14 bg-gradient-to-b from-[#161322] to-[#0E0C14] border border-[#FFB347]/30 shadow-[0_20px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(255,179,71,0.15)] relative overflow-hidden">
        
        {/* Ambient Top Light */}
        <div 
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(255, 179, 71, 0.25) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Left Column: Project Guarantees & Studio Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#FFB347]/20 text-[11px] font-semibold text-gradient-amber uppercase tracking-wider mb-4">
                <span>{t.contact.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight leading-tight mb-4">
                {t.contact.headingPart1}{' '}
                <span className="text-gradient-amber">{t.contact.headingPart2}</span>
              </h2>

              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-8">
                {t.contact.description}
              </p>

              {/* Guarantees List */}
              <div className="space-y-4 mb-8">
                <div className="text-xs font-mono text-[#C29166] uppercase tracking-wider mb-2 font-semibold">
                  {t.contact.benefitsTitle}
                </div>
                {t.contact.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-[#FFB347]/10 border border-[#FFB347]/20 flex items-center justify-center text-[#FFB347] shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs text-gray-300 leading-snug">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Studio Channels */}
            <div className="pt-6 border-t border-white/10 space-y-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#FFB347]" />
                <span>WhatsApp: <strong>+62 851-8173-8437</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C29166]" />
                <span>Email Studio: <a href="mailto:rushcode12@gmail.com" className="hover:text-[#FFB347] transition-colors"><strong>rushcode12@gmail.com</strong></a></span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#0D0C12] md:bg-[#0D0C12]/80 md:backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 mb-4 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-2">
                  {language === 'id' ? 'Niat Proyek Berhasil Dikirimkan' : 'Inquiry Successfully Sent'}
                </h3>
                <p className="text-xs text-gray-400 max-w-md mb-6 leading-relaxed">
                  {language === 'id' 
                    ? 'Terima kasih! Pesan Anda telah diteruskan ke WhatsApp Studio KarsaCode. Tim rekayasa kami akan segera menghubungi Anda dalam waktu kurang dari 30 menit.' 
                    : 'Thank you! Your message has been forwarded to our WhatsApp studio. Our engineering lead will respond within 30 minutes.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15"
                >
                  {language === 'id' ? 'Kirim Pesan Lainnya' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      {t.contact.form.nameLabel} *
                    </label>
                    <input 
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#14121A] border border-white/10 text-white text-xs placeholder:text-gray-500 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FFB347] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      {t.contact.form.emailLabel} *
                    </label>
                    <input 
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#14121A] border border-white/10 text-white text-xs placeholder:text-gray-500 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FFB347] transition-all"
                    />
                  </div>
                </div>

                {/* Package Tier & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-package" className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      {t.contact.form.packageLabel}
                    </label>
                    <select
                      id="contact-package"
                      name="packageTier"
                      value={formData.packageTier}
                      onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#14121A] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FFB347] transition-all cursor-pointer"
                    >
                      <option value="Paket Starter (Rp 950.000)">Paket Starter (Rp 950.000)</option>
                      <option value="Paket Business (Rp 2.450.000)">Paket Business (Rp 2.450.000)</option>
                      <option value="Paket Toko Online (Rp 4.250.000)">Paket Toko Online (Rp 4.250.000)</option>
                      <option value="Paket Custom Studio (Rp 6.800.000)">Paket Custom Studio (Rp 6.800.000) [Paling Diminati]</option>
                      <option value="Paket Web App / Sistem (Mulai Rp 12.500.000)">Paket Web App / Sistem (Mulai Rp 12.500.000)</option>
                      <option value="Paket Sesuai Budget (Fleksibel)">
                        {language === 'id' ? 'Paket Sesuai Budget (Fleksibel / Tentukan Sendiri)' : 'Custom Budget Plan (Flexible)'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      {language === 'id' ? 'Estimasi Anggaran' : 'Estimated Budget'}
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#14121A] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FFB347] transition-all cursor-pointer"
                    >
                      <option value="< Rp 1.000.000">&lt; Rp 1.000.000 ({language === 'id' ? 'Budget Fleksibel / UMKM' : 'Flexible / Micro Budget'})</option>
                      <option value="Rp 1.000.000 - Rp 2.500.000">Rp 1.000.000 - Rp 2.500.000 (Starter / Landing Page)</option>
                      <option value="Rp 2.500.000 - Rp 4.500.000">Rp 2.500.000 - Rp 4.500.000 (Business Profile & Company)</option>
                      <option value="Rp 4.500.000 - Rp 7.000.000">Rp 4.500.000 - Rp 7.000.000 (Toko Online & E-Commerce)</option>
                      <option value="Rp 7.000.000 - Rp 15.000.000">Rp 7.000.000 - Rp 15.000.000 (Custom Studio & Web App)</option>
                      <option value="> Rp 15.000.000">&gt; Rp 15.000.000 (Sistem Perusahaan / Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="contact-description" className="block text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    {t.contact.form.descLabel} *
                  </label>
                  <textarea 
                    id="contact-description"
                    name="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder={t.contact.form.descPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#14121A] border border-white/10 text-white text-xs placeholder:text-gray-500 focus:outline-none focus:border-[#FFB347] focus:ring-1 focus:ring-[#FFB347] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold text-[#0D0C10] bg-gradient-to-r from-[#FFB347] to-[#C29166] hover:from-[#FFA930] hover:to-[#B68155] shadow-[0_0_25px_rgba(255,179,71,0.35)] hover:shadow-[0_0_35px_rgba(255,179,71,0.55)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <span>{t.contact.form.submit}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-gray-400 text-center pt-2">
                  🔒 {language === 'id' ? 'Data Anda bersifat rahasia dan terlindungi NDA.' : 'Your data is strictly confidential and protected by NDA.'}
                </p>

              </form>
            )}
          </div>

        </div>

      </div>

    </section>
  );
}
