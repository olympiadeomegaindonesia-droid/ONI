import React, { useState } from 'react';
import { LogoONI, LogoYayasan } from './OfficialLogos';
import { ShieldCheck, UserCheck, Lock, Menu, X, Sparkles, Trophy, BookOpen } from 'lucide-react';
import { APP_CONFIG } from '../../appConfig';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenPortal: () => void;
  onOpenAdminLogin: () => void;
  onOpenAIChat: () => void;
  onOpenAnnouncement: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegister,
  onOpenPortal,
  onOpenAdminLogin,
  onOpenAIChat,
  onOpenAnnouncement,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs transition-all">
      {/* Top Banner: Yayasan Endorsement & WhatsApp hotline */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-300">
              Diselenggarakan & Didukung Resmi oleh <strong className="text-white font-semibold">{APP_CONFIG.supportedBy.name}</strong>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-400">
            <span>Akreditasi Kemenkumham RI: {APP_CONFIG.supportedBy.decreeNumber}</span>
            <span>•</span>
            <a
              href={`https://wa.me/${APP_CONFIG.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-amber-300 hover:text-amber-200 font-medium inline-flex items-center gap-1 transition-colors"
            >
              WhatsApp Hotline: {APP_CONFIG.contact.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logos Branding */}
        <a href="#" className="flex items-center gap-3 sm:gap-4 shrink-0">
          <LogoONI size="md" showText={true} />
          <div className="hidden sm:block h-8 w-px bg-stone-300" />
          <div className="hidden lg:block">
            <LogoYayasan size="sm" showText={true} />
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-7 text-sm font-semibold text-stone-700">
          <a href="#tentang" className="hover:text-rose-600 transition-colors">
            Tentang ONI
          </a>
          <a href="#kategori" className="hover:text-rose-600 transition-colors">
            Kategori & Mapel
          </a>
          <a href="#alur" className="hover:text-rose-600 transition-colors">
            Alur Ujian
          </a>
          <button
            onClick={onOpenAnnouncement}
            className="hover:text-rose-600 transition-colors cursor-pointer text-left font-semibold"
          >
            Pengumuman Lolos
          </button>
          <a href="#faq" className="hover:text-rose-600 transition-colors">
            FAQ
          </a>
          <button
            onClick={onOpenAIChat}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 font-medium text-xs transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Tanya AI Konsultan
          </button>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={onOpenPortal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-xl transition-all cursor-pointer border border-stone-200"
          >
            <UserCheck className="w-4 h-4 text-stone-600" />
            Portal Peserta
          </button>

          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <ShieldCheck className="w-4 h-4" />
            Daftar Sekarang (Gratis)
          </button>

          <button
            onClick={onOpenAdminLogin}
            title="Akses Admin"
            className="p-2 text-stone-400 hover:text-stone-700 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <Lock className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger & Quick Register */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenRegister}
            className="px-3 py-1.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs cursor-pointer"
          >
            Daftar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 rounded-lg hover:bg-stone-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3 text-sm font-semibold text-stone-800">
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100"
            >
              Tentang ONI
            </a>
            <a
              href="#kategori"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100"
            >
              Kategori & Mata Pelajaran
            </a>
            <a
              href="#alur"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100"
            >
              Alur & Jadwal Pelaksanaan
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAnnouncement();
              }}
              className="py-2 px-3 rounded-lg text-left hover:bg-stone-100 flex items-center justify-between"
            >
              <span>Pengumuman Lolos Penyisihan</span>
              <Trophy className="w-4 h-4 text-amber-600" />
            </button>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100"
            >
              Tanya Jawab (FAQ)
            </a>

            <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAIChat();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                Konsultasi AI Olimpiade
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-stone-100 text-stone-900 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer border border-stone-200"
              >
                <UserCheck className="w-4 h-4 text-stone-600" />
                Masuk Portal Peserta / Ujian
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdminLogin();
                }}
                className="w-full py-2 px-3 text-stone-500 text-xs font-medium flex items-center justify-center gap-1.5 hover:text-stone-800"
              >
                <Lock className="w-3.5 h-3.5" />
                Panel Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
