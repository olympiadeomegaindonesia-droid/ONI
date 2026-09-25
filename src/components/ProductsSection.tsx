import React from 'react';
import { APP_CONFIG } from '../../appConfig';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface ProductsSectionProps {
  onRegisterClick: () => void;
  onPortalClick: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onRegisterClick,
  onPortalClick,
}) => {
  return (
    <section id="layanan" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100/70 px-3.5 py-1.5 rounded-full border border-amber-300">
            Layanan & Fasilitas Juara
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
            Paket Fasilitas Unggulan Olimpiade Nasional Indonesia
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Fasilitas komprehensif mulai dari simulasi tanpa batas, sistem CBT modern, hingga medali fisik dan piagam berhologram resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {APP_CONFIG.products.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-stone-100">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider bg-slate-900/90 text-white backdrop-blur-xs border border-white/20">
                      {prod.badge}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-black text-stone-900">{prod.price}</span>
                    {prod.originalPrice && (
                      <span className="text-xs line-through text-stone-400 font-bold">
                        {prod.originalPrice}
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-base text-stone-900 leading-snug">
                    {prod.title}
                  </h3>

                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-stone-100 pt-4">
                    {prod.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={onRegisterClick}
                  className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-rose-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Daftar / Akses Fitur</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
