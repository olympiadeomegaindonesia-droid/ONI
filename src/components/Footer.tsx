import React from 'react';
import { LogoONI, LogoYayasan } from './OfficialLogos';
import { APP_CONFIG } from '../../appConfig';
import { ShieldCheck, MessageCircle, Mail, MapPin, Award, Heart } from 'lucide-react';

interface FooterProps {
  onRegisterClick: () => void;
  onPortalClick: () => void;
  onAdminLoginClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onRegisterClick,
  onPortalClick,
  onAdminLoginClick,
}) => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Branding & Yayasan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <LogoONI size="md" showText={true} />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {APP_CONFIG.description}. Platform kompetisi akademik pelajar terbesar, inklusif, dan berstandar nasional untuk melahirkan generasi juara berdaya saing global.
            </p>

            {/* Endorsement Card */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <LogoYayasan size="sm" showText={true} />
              <p className="text-[11px] text-slate-400">
                Penyelenggaraan kegiatan dan penerbitan sertifikat ini didukung penuh secara legal oleh Yayasan Besar Rasa Bagi Bangsa.
              </p>
              <div className="text-[10px] font-mono text-amber-300">
                SK Kemenkumham RI: {APP_CONFIG.supportedBy.decreeNumber}
              </div>
            </div>
          </div>

          {/* Col 3: Kategori & Mapel */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
              Kategori & Mapel
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#kategori" className="hover:text-rose-400 transition-colors">
                  Kategori A (SD Kelas 1-3)
                </a>
              </li>
              <li>
                <a href="#kategori" className="hover:text-rose-400 transition-colors">
                  Kategori B (SD Kelas 4-6)
                </a>
              </li>
              <li>
                <a href="#kategori" className="hover:text-rose-400 transition-colors">
                  Kategori C (SMP/SMA)
                </a>
              </li>
              <li>
                <a href="#kategori" className="hover:text-rose-400 transition-colors">
                  Matematika Nasional
                </a>
              </li>
              <li>
                <a href="#kategori" className="hover:text-rose-400 transition-colors">
                  IPA / Sains Nasional
                </a>
              </li>
              <li>
                <a href="#kategori" className="hover:text-rose-400 transition-colors">
                  Bahasa Inggris & B. Indonesia
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigasi Peserta */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
              Navigasi Peserta
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={onRegisterClick}
                  className="hover:text-rose-400 transition-colors cursor-pointer text-left"
                >
                  Pendaftaran Mandiri (Gratis)
                </button>
              </li>
              <li>
                <button
                  onClick={onPortalClick}
                  className="hover:text-rose-400 transition-colors cursor-pointer text-left"
                >
                  Portal Ujian & Simulasi
                </button>
              </li>
              <li>
                <a href="#alur" className="hover:text-rose-400 transition-colors">
                  Alur & Petunjuk Pelaksanaan
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-rose-400 transition-colors">
                  Pusat Bantuan & FAQ
                </a>
              </li>
              <li>
                <button
                  onClick={onAdminLoginClick}
                  className="hover:text-slate-200 text-stone-500 transition-colors cursor-pointer text-left text-[11px]"
                >
                  Akses Administrator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontak & Pembayaran */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4">
              Layanan Hotline & Rekening
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">WhatsApp Resmi:</span>
                  <a
                    href={`https://wa.me/${APP_CONFIG.contact.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-emerald-300"
                  >
                    {APP_CONFIG.contact.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">Email Panitia:</span>
                  <span className="text-slate-300">{APP_CONFIG.contact.email}</span>
                </div>
              </li>
              <li className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px]">
                <strong className="text-amber-400 block mb-0.5">Rekening Resmi Tiket Final:</strong>
                <span>{APP_CONFIG.payment.bank}</span>
                <span className="block font-mono text-white font-bold">
                  {APP_CONFIG.payment.accountNumber}
                </span>
                <span className="text-slate-400">a.n. {APP_CONFIG.payment.accountHolder}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {APP_CONFIG.brandName}. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>Diselenggarakan secara aman & berintegritas tinggi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
