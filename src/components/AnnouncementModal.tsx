import React, { useState } from 'react';
import { Participant } from '../types';
import { StorageService } from '../services/storage';
import { LogoONI, LogoYayasan } from './OfficialLogos';
import { APP_CONFIG } from '../../appConfig';
import { Trophy, Search, CheckCircle2, Award, X, Download, ShieldCheck } from 'lucide-react';

interface AnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectParticipant?: (p: Participant) => void;
  onOpenTicketPayment?: (p: Participant) => void;
}

export const AnnouncementModal: React.FC<AnnouncementModalProps> = ({
  isOpen,
  onClose,
  onSelectParticipant,
  onOpenTicketPayment,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const participants = StorageService.getParticipants();

  if (!isOpen) return null;

  const qualifiedList = participants.filter((p) => {
    const isQualified = p.isLolosPenyisihan || (p.penyisihanCompleted && p.penyisihanScore >= 60);
    const matchSearch =
      searchTerm === '' ||
      p.namaLengkap.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sekolah.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCat === 'all' || p.kategori === selectedCat;

    return isQualified && matchSearch && matchCat;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-rose-950 to-slate-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
            <Trophy className="w-3.5 h-3.5" />
            Surat Keputusan Resmi H+2
          </div>
          <h2 className="text-xl sm:text-2xl font-black">
            Pengumuman Peserta Lolos Babak Penyisihan
          </h2>
          <p className="text-xs text-stone-300 mt-0.5">
            Daftar Peserta Resmi yang Berhak Melaju ke Babak Grand Final Nasional
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex-1 min-w-[240px] relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Cari Nama Peserta, Nomor Peserta, atau Sekolah..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="px-3 py-2 rounded-xl border border-stone-300 text-xs font-semibold focus:ring-2 focus:ring-rose-500"
            >
              <option value="all">Semua Kategori</option>
              <option value="A">Kategori A (SD 1-3)</option>
              <option value="B">Kategori B (SD 4-6)</option>
              <option value="C">Kategori C (SMP/SMA)</option>
            </select>
          </div>
        </div>

        {/* Results List */}
        <div className="p-6 max-h-[420px] overflow-y-auto divide-y divide-stone-200">
          {qualifiedList.length === 0 ? (
            <div className="text-center py-10 text-stone-500 text-xs">
              Tidak ada data peserta lolos yang cocok dengan pencarian Anda.
            </div>
          ) : (
            qualifiedList.map((p, idx) => (
              <div
                key={p.id}
                className="py-3.5 flex flex-wrap items-center justify-between gap-3 hover:bg-stone-50/80 px-2 rounded-xl transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-stone-400">#{idx + 1}</span>
                    <h3 className="font-extrabold text-sm text-stone-900">{p.namaLengkap}</h3>
                    <span className="px-2 py-0.5 rounded font-black text-[10px] bg-rose-100 text-rose-800 uppercase">
                      Kat {p.kategori} • {p.mapel}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {p.sekolah} • No: <span className="font-mono font-bold text-stone-800">{p.id}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      LOLOS KE FINAL
                    </span>
                  </div>

                  {onOpenTicketPayment && !p.sudahBayarTiketFinal && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenTicketPayment(p);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold shadow-xs transition-colors cursor-pointer"
                    >
                      Beli Tiket Promo (Rp 99.000)
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <span>
            Terverifikasi oleh Tim Juri Independen & {APP_CONFIG.supportedBy.shortName}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-black transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
