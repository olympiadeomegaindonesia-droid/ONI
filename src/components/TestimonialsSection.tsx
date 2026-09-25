import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Ibu Ratna Dewi Astuti',
      role: 'Orang Tua Siswa (Kelas 3 SD, Jakarta)',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
      content:
        'Sistem pendaftarannya luar biasa mudah dan transparan. Anak saya senang sekali bisa latihan simulasi mandiri sebelum babak penyisihan. Nilai langsung muncul dan sertifikatnya ber-QR Code resmi!',
      rating: 5,
    },
    {
      name: 'Drs. Agus Setyawan, M.Pd.',
      role: 'Guru Pembina Sains SMP, Surabaya',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      content:
        'Kualitas bank soal Kategori C sangat berbobot dan menantang logika analitis siswa. Perlindungan anti-conteknya benar-benar menjamin kejujuran kompetisi tingkat nasional.',
      rating: 5,
    },
    {
      name: 'Bunda Maya Kartika',
      role: 'Wali Peserta Kategori B, Bandung',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      content:
        'Pelayanan admin WhatsApp sangat ramah dan responsif saat konfirmasi tiket final promo BCA. Medali dan piagam resmi Yayasan Besar Rasa Bagi Bangsa sampai dengan selamat dalam kondisi sangat mewah!',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100/70 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Apresiasi & Testimoni Nyata
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
            Dipercaya Oleh Ribuan Orang Tua & Guru Pembina
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Testimoni otentik dari orang tua dan pendidik yang telah merasakan manfaat nyata kompetisi Olimpiade Nasional Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-md flex flex-col justify-between relative group hover:shadow-xl transition-all"
            >
              <Quote className="w-10 h-10 text-stone-200 absolute top-6 right-6" />

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-rose-500 shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop';
                  }}
                />
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-stone-900 flex items-center gap-1">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 inline" />
                  </h4>
                  <p className="text-[11px] text-stone-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
