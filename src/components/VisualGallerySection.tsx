import React from 'react';

export const VisualGallerySection: React.FC = () => {
  const galleries = [
    {
      url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
      title: 'Semangat Juang Pelajar Nusantara',
      category: 'Kompetisi Mandiri',
    },
    {
      url: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?q=80&w=800&auto=format&fit=crop',
      title: 'Medali Emas & Piagam Berhologram',
      category: 'Apresiasi Prestasi',
    },
    {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
      title: 'Kolaborasi & Pendampingan Orang Tua',
      category: 'Dukungan Keluarga',
    },
    {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
      title: 'Sistem CBT Adaptif Online',
      category: 'Inovasi Digital',
    },
    {
      url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
      title: 'Fokus Belajar & Analisis Soal',
      category: 'Simulasi Mandiri',
    },
    {
      url: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=800&auto=format&fit=crop',
      title: 'Panggung Juara Olimpiade Nasional',
      category: 'Grand Final',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
            Dokumentasi & Galeri Visual
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
            Potret Prestasi & Integritas Peserta se-Indonesia
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Mengabadikan ribuan momen inspiratif generasi emas Indonesia dari Sabang sampai Merauke.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((g, i) => (
            <div
              key={i}
              className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md group border border-stone-200"
            >
              <img
                src={g.url}
                alt={g.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/30">
                  {g.category}
                </span>
                <h4 className="text-base font-extrabold mt-1.5 leading-snug drop-shadow-sm">
                  {g.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
