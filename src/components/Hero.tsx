import React from 'react';
import { LogoONI, LogoYayasan } from './OfficialLogos';
import { ShieldCheck, Trophy, Sparkles, Award, ArrowRight, CheckCircle2, Calendar, Users, Star } from 'lucide-react';
import { APP_CONFIG } from '../../appConfig';

interface HeroProps {
  onRegisterClick: () => void;
  onPortalClick: () => void;
  onAIChatClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onPortalClick, onAIChatClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Decorative luxury background grid & light glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-rose-200/40 via-amber-200/30 to-blue-200/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Endorsement Top Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-stone-200/90 shadow-xs hover:border-amber-300 transition-all text-xs font-semibold text-stone-700">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600" />
            </span>
            <span>Didukung Resmi Oleh</span>
            <span className="text-blue-700 font-bold">{APP_CONFIG.supportedBy.shortName}</span>
            <span className="text-stone-300">|</span>
            <span className="text-amber-700 font-bold flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              Tahun Ajaran 2026/2027
            </span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
            Ajang Kompetisi Prestasi Siswa Terbesar{' '}
            <span className="bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 bg-clip-text text-transparent">
              Olimpiade Nasional Indonesia
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Wadah kompetisi sains, numerasi, dan literasi online terpercaya bagi siswa{' '}
            <strong className="text-stone-900 font-semibold">SD/MI (Kategori A & B)</strong> serta{' '}
            <strong className="text-stone-900 font-semibold">SMP/SMA (Kategori C)</strong> dari seluruh penjuru Nusantara dengan sertifikat resmi ber-barcode verifikasi.
          </p>

          {/* Quick Highlight Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-stone-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Penyisihan 100% Gratis
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
              <Trophy className="w-4 h-4 text-amber-600" />
              Medali Emas & Piagam Resmi
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Proteksi Ujian Anti-Contek
            </span>
          </div>

          {/* Call to Actions (CTA) */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onRegisterClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-extrabold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Daftar Peserta Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onPortalClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-2xl shadow-xs transition-all cursor-pointer"
            >
              <span>Masuk Portal Ujian / Simulasi</span>
            </button>
          </div>

          <p className="mt-3 text-xs text-stone-500">
            *Proses pendaftaran mandiri & cepat hanya butuh 1 menit tanpa biaya registrasi awal.
          </p>
        </div>

        {/* Hero Visual Showcase: High-End Mockup Banner */}
        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
            <img
              src={APP_CONFIG.heroImage}
              alt="Peserta Olimpiade Nasional Indonesia Berprestasi"
              className="w-full h-64 sm:h-96 lg:h-[430px] object-cover object-center opacity-85 transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback reliable Unsplash image
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop';
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

            {/* Floating Trust Cards */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 text-white max-w-md">
                <div className="flex items-center gap-3">
                  <LogoONI size="sm" showText={false} />
                  <div>
                    <h2 className="font-extrabold text-sm sm:text-base leading-tight">
                      Komputer Berbasis CBT Online Mandiri
                    </h2>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Bisa diakses dari HP, Tablet, Laptop dari seluruh wilayah Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Promo Flash Ticket Counter Badge */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-2xl p-3 sm:p-4 font-bold shadow-lg border border-amber-300 shrink-0">
                <div className="text-[11px] uppercase tracking-wider font-extrabold text-amber-950">
                  Promo Grand Final Terbatas
                </div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-xl sm:text-2xl font-black">Rp 99.000</span>
                  <span className="text-xs line-through text-amber-900">Rp 180.000</span>
                </div>
                <div className="text-[10px] text-amber-950 font-semibold mt-0.5">
                  Khusus 10 Peserta Pertama Lolos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-600">20.000+</div>
            <div className="text-xs sm:text-sm font-medium text-stone-600 mt-1">Siswa Terdaftar</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900">514</div>
            <div className="text-xs sm:text-sm font-medium text-stone-600 mt-1">Kota & Kabupaten</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-700">4 Mapel</div>
            <div className="text-xs sm:text-sm font-medium text-stone-600 mt-1">Mat, IPA, B.Ing, B.Indo</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600">100% Legal</div>
            <div className="text-xs sm:text-sm font-medium text-stone-600 mt-1">Akreditasi Yayasan</div>
          </div>
        </div>
      </div>
    </section>
  );
};
