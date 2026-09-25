import React from 'react';
import { APP_CONFIG } from '../../appConfig';
import { Calculator, Globe, Atom, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (catId: 'A' | 'B' | 'C') => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const iconMap: Record<string, any> = {
    Calculator,
    Globe,
    Atom,
    BookOpen,
  };

  return (
    <section id="kategori" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
            Jenjang & Standar Kompetisi
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
            Kategori Jenjang Usia & 4 Bidang Studi Olimpiade
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-stone-600">
            Materi dan tingkat kesulitan soal dirancang adaptif per kelompok usia oleh Dewan Pakar Akademik sesuai kurikulum nasional dan standar olimpiade internasional.
          </p>
        </div>

        {/* 3 Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {APP_CONFIG.categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black px-3 py-1 rounded-xl bg-stone-900 text-white">
                    {cat.badge}
                  </span>
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                    {cat.level}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-xs font-semibold text-stone-500 mt-1">{cat.target}</p>

                <p className="text-xs sm:text-sm text-stone-600 mt-4 leading-relaxed">
                  {cat.description}
                </p>

                <div className="mt-6 pt-4 border-t border-stone-100 space-y-2 text-xs font-semibold text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>20 Soal Acak per Akses (5 Poin/soal)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Waktu Pengerjaan 45 Menit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sertifikat Resmi Ber-QR Code</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => onSelectCategory(cat.id as 'A' | 'B' | 'C')}
                  className="w-full py-3 px-4 rounded-xl bg-stone-100 group-hover:bg-rose-600 group-hover:text-white text-stone-800 text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Daftar {cat.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Subjects Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              4 Pilihan Mata Pelajaran Unggulan
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Peserta bebas memilih satu atau lebih mata pelajaran yang diminati.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {APP_CONFIG.subjects.map((sub) => {
              const IconComp = iconMap[sub.icon] || Calculator;
              return (
                <div
                  key={sub.id}
                  className="p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-rose-300 hover:bg-rose-50/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center mb-3 shadow-xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-base text-stone-900">{sub.name}</h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                    {sub.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] font-semibold text-stone-500">
                    <span>{sub.totalQuestions} Soal CBT</span>
                    <span className="text-rose-600 font-bold">{sub.durationMinutes} Menit</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
