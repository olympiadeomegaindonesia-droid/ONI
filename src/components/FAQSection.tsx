import React, { useState } from 'react';
import { APP_CONFIG } from '../../appConfig';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQSectionProps {
  onAIChatClick: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onAIChatClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
            Pusat Informasi & Tanya Jawab
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Temukan jawaban lengkap seputar legalitas, sistem ujian, cara simulasi, hingga pengambilan tiket final.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {APP_CONFIG.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-2xl overflow-hidden transition-all bg-[#FAF8F5]/50"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-extrabold text-stone-900 text-xs sm:text-sm hover:text-rose-600 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-rose-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 animate-in fade-in duration-200">
                    <p className="pl-8">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* AI Helper Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-amber-500 text-slate-950 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">
                Punya Pertanyaan Khusus Lainnya?
              </h4>
              <p className="text-xs text-stone-600">
                Konsultan AI pintar kami siap menjawab pertanyaan Anda 24/7 secara interaktif.
              </p>
            </div>
          </div>
          <button
            onClick={onAIChatClick}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs whitespace-nowrap transition-colors cursor-pointer shadow-xs"
          >
            Tanya AI Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};
