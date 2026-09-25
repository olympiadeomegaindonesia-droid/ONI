import React from 'react';
import {
  UserPlus,
  Share2,
  PlayCircle,
  BellRing,
  Laptop,
  Trophy,
  CreditCard,
  Award,
  ArrowRight
} from 'lucide-react';

interface ExamFlowSectionProps {
  onRegisterClick: () => void;
}

export const ExamFlowSection: React.FC<ExamFlowSectionProps> = ({ onRegisterClick }) => {
  const steps = [
    {
      num: '01',
      icon: UserPlus,
      title: 'Pendaftaran Mandiri',
      desc: 'Isi formulir online resmi di website ini secara mandiri tanpa dipungut biaya registrasi (100% Gratis).',
    },
    {
      num: '02',
      icon: Share2,
      title: 'Konfirmasi WA & Follow Sosmed',
      desc: 'Konfirmasi pendaftaran ke admin WhatsApp dan follow Instagram, TikTok & YouTube resmi ONI untuk verifikasi.',
    },
    {
      num: '03',
      icon: PlayCircle,
      title: 'Simulasi Ujian CBT Mandiri',
      desc: 'Akses 20 soal acak simulasi resmi untuk melatih kecepatan, pemahaman format, dan sistem ujian online.',
    },
    {
      num: '04',
      icon: BellRing,
      title: 'Pengingat WhatsApp H-2 & H-1',
      desc: 'Sistem dan tim panitia mengirimkan notifikasi pengingat via WhatsApp sebelum babak penyisihan dimulai.',
    },
    {
      num: '05',
      icon: Laptop,
      title: 'Babak Penyisihan Online',
      desc: 'Kerjakan 20 soal babak penyisihan resmi dengan sistem proteksi Anti-Contek cerdas berstandar nasional.',
    },
    {
      num: '06',
      icon: Trophy,
      title: 'Pengumuman Kelulusan (H+2)',
      desc: 'Hasil kelulusan diumumkan resmi 2 hari setelah penyisihan. Nilai dan status lolos otomatis terdata di portal peserta.',
    },
    {
      num: '07',
      icon: CreditCard,
      title: 'Tiket Final Promo BCA',
      desc: 'Peserta lolos memesan tiket final promo Rp 99.000 (normal Rp 180.000) via BCA 3843-136-911 a.n SRI PRIHATININGSIH SH.',
    },
    {
      num: '08',
      icon: Award,
      title: 'Grand Final & E-Sertifikat',
      desc: 'Perebutan Medali Emas, Perak, Perunggu & Piagam Penghargaan. Unduh E-Sertifikat resmi ber-QR Code secara mandiri.',
    },
  ];

  return (
    <section id="alur" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Alur Sistematis & Terstruktur
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
            Tahapan Lengkap dari Pendaftaran hingga Babak Grand Final
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Seluruh rangkaian olimpiade dirancang agar dapat diikuti secara mandiri oleh peserta maupun didampingi orang tua dan guru dari seluruh Indonesia.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-stone-50 rounded-3xl p-6 border border-stone-200/80 hover:border-amber-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-3xl font-black font-mono text-stone-200 group-hover:text-amber-200/60 transition-colors">
                  {step.num}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-stone-200 flex items-center justify-center text-rose-600 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-base text-stone-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-200/60 flex items-center text-[11px] font-bold text-stone-500 group-hover:text-rose-600 transition-colors">
                  <span>Tahap {idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-black">
              Siap Menguji Potensi dan Meraih Medali Nasional?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
              Gabung bersama puluhan ribu pelajar terbaik Indonesia lainnya. Pendaftaran babak penyisihan tidak dipungut biaya sepeser pun.
            </p>
          </div>
          <button
            onClick={onRegisterClick}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-amber-600 text-white font-extrabold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer whitespace-nowrap transform hover:-translate-y-0.5"
          >
            Daftar Sekarang (Gratis)
          </button>
        </div>
      </div>
    </section>
  );
};
