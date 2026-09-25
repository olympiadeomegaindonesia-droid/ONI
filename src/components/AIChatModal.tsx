import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, HelpCircle, Loader2 } from 'lucide-react';
import { APP_CONFIG } from '../../appConfig';
import { Participant } from '../types';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  participant?: Participant | null;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
  time: string;
}

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose, participant }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: `Halo Ayah/Bunda dan Sahabat Juara! Saya adalah **Konsultan AI Resmi Olimpiade Nasional Indonesia (ONI)** yang didukung penuh oleh **${APP_CONFIG.supportedBy.name}**.

Ada yang dapat kami bantu mengenai pendaftaran gratis babak penyisihan, syarat follow sosmed untuk simulasi, silabus soal Kategori A/B/C, atau tiket final promo?`,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const userText = textToSend || input.trim();
    if (!userText || loading) return;

    const userMsg: Message = {
      role: 'user',
      text: userText,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          studentContext: participant
            ? {
                nama: participant.namaLengkap,
                kategori: participant.kategori,
                mapel: participant.mapel,
                sekolah: participant.sekolah,
              }
            : null,
        }),
      });

      const data = await response.json();
      const reply = data.reply || 'Mohon maaf, terjadi kendala saat memproses jawaban.';

      const botMsg: Message = {
        role: 'assistant',
        text: reply,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const botMsg: Message = {
        role: 'assistant',
        text: `Halo, terima kasih telah menghubungi kami. Babak Penyisihan terbuka secara 100% GRATIS untuk seluruh siswa di Indonesia. Untuk informasi mendesak, silakan hubungi WhatsApp resmi kami di ${APP_CONFIG.contact.whatsappDisplay}.`,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    'Bagaimana cara membuka Simulasi Ujian?',
    'Apa saja materi ujian Kategori B (SD 4-6)?',
    'Berapa harga Tiket Babak Final dan promo apa yang tersedia?',
    'Apakah sertifikat resmi dan bisa dipakai untuk PPDB?',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs">
      <div className="relative w-full max-w-lg h-[600px] max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-slate-900 via-stone-900 to-amber-950 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-sm leading-tight">Konsultan AI Olimpiade</h3>
                <span className="text-[10px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-bold">
                  PRO
                </span>
              </div>
              <span className="text-[11px] text-stone-300">
                Didukung {APP_CONFIG.supportedBy.shortName}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#FAF8F5]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-7 h-7 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-rose-600 text-white font-medium rounded-tr-none shadow-xs'
                    : 'bg-white text-stone-800 border border-stone-200 rounded-tl-none shadow-xs'
                }`}
              >
                <div className="whitespace-pre-line">{m.text}</div>
                <span
                  className={`text-[9px] block text-right mt-1 ${
                    m.role === 'user' ? 'text-rose-200' : 'text-stone-400'
                  }`}
                >
                  {m.time}
                </span>
              </div>

              {m.role === 'user' && (
                <div className="w-7 h-7 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-stone-500 text-xs italic p-2">
              <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
              <span>AI Konsultan sedang berpikir mendalam...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="px-3 py-2 bg-stone-100 border-t border-stone-200 flex items-center gap-1.5 overflow-x-auto text-[11px]">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSend(qp)}
              className="px-2.5 py-1 rounded-full bg-white text-stone-700 border border-stone-300 hover:border-amber-500 hover:text-amber-900 whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-white border-t border-stone-200 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanyakan jadwal, materi, atau cara pendaftaran..."
            className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white disabled:opacity-40 transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
