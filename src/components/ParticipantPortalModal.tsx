import React, { useState } from 'react';
import { Participant, ExamType } from '../types';
import { StorageService } from '../services/storage';
import { APP_CONFIG } from '../../appConfig';
import { LogoONI, LogoYayasan } from './OfficialLogos';
import {
  UserCheck,
  CheckCircle2,
  Clock,
  Award,
  Play,
  CreditCard,
  FileCheck,
  X,
  Search,
  ArrowRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

interface ParticipantPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentParticipant: Participant | null;
  onSelectParticipant: (p: Participant) => void;
  onStartExam: (type: ExamType, p: Participant) => void;
  onOpenSocialFollow: (p: Participant) => void;
  onOpenTicketPayment: (p: Participant) => void;
  onViewCertificate: (p: Participant) => void;
}

export const ParticipantPortalModal: React.FC<ParticipantPortalModalProps> = ({
  isOpen,
  onClose,
  currentParticipant,
  onSelectParticipant,
  onStartExam,
  onOpenSocialFollow,
  onOpenTicketPayment,
  onViewCertificate,
}) => {
  const [lookupId, setLookupId] = useState('');
  const [lookupError, setLookupError] = useState('');

  if (!isOpen) return null;

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupError('');
    const found = StorageService.getParticipantById(lookupId.trim().toUpperCase());
    if (found) {
      onSelectParticipant(found);
    } else {
      setLookupError('Nomor Peserta tidak ditemukan. Pastikan format benar (contoh: ONI-2026-A1001).');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <LogoONI size="sm" showText={false} />
            <div>
              <h2 className="text-xl sm:text-2xl font-black">Portal Peserta & Riwayat Ujian</h2>
              <p className="text-xs text-stone-300 mt-0.5">
                Akses mandiri simulasi, babak penyisihan, tiket final & E-sertifikat resmi.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Lookup Bar if no current participant or switch */}
          <div className="bg-stone-50 border border-stone-200 p-4 rounded-2xl">
            <form onSubmit={handleLookup} className="flex gap-2">
              <input
                type="text"
                value={lookupId}
                onChange={(e) => setLookupId(e.target.value)}
                placeholder="Cari atau ganti No Peserta (contoh: ONI-2026-A1001)..."
                className="flex-1 px-3.5 py-2 rounded-xl border border-stone-300 text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-rose-500 uppercase"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-stone-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Cari Akun
              </button>
            </form>
            {lookupError && (
              <p className="text-xs text-red-600 font-semibold mt-2">{lookupError}</p>
            )}
          </div>

          {currentParticipant ? (
            <div className="space-y-6">
              {/* Participant Profile Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-stone-50 border border-stone-200 shadow-xs relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-rose-700">
                      Kartu Peserta Resmi Terverifikasi
                    </span>
                    <h3 className="text-xl font-extrabold text-stone-900 mt-0.5">
                      {currentParticipant.namaLengkap}
                    </h3>
                    <p className="text-xs text-stone-600 mt-0.5">
                      {currentParticipant.sekolah} (Kelas {currentParticipant.kelas})
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono text-stone-400 block">NOMOR PESERTA</span>
                    <span className="text-base font-black font-mono text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200 block">
                      {currentParticipant.id}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-700">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200">
                    Jenjang: <strong>Kategori {currentParticipant.kategori}</strong>
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200 capitalize">
                    Mapel: <strong>{currentParticipant.mapel}</strong>
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200">
                    Wali: <strong>{currentParticipant.namaOrangTua}</strong>
                  </span>
                </div>
              </div>

              {/* Progress Pipeline & Stage Actions */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                  Alur & Tahapan Ujian Mandiri
                </h4>

                {/* 1. Konfirmasi WA & Sosmed */}
                <div className="p-4 rounded-2xl border border-stone-200 flex items-center justify-between gap-3 bg-white">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                        currentParticipant.socialFollowed
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      1
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-stone-900">
                        Konfirmasi WA & Follow Sosmed ONI
                      </h5>
                      <p className="text-[11px] text-stone-500">
                        Syarat wajib untuk mengaktifkan akses Simulasi Ujian Mandiri.
                      </p>
                    </div>
                  </div>
                  {currentParticipant.socialFollowed ? (
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Terverifikasi
                    </span>
                  ) : (
                    <button
                      onClick={() => onOpenSocialFollow(currentParticipant)}
                      className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer"
                    >
                      Buka & Follow
                    </button>
                  )}
                </div>

                {/* 2. Simulasi Ujian Mandiri */}
                <div className="p-4 rounded-2xl border border-stone-200 flex items-center justify-between gap-3 bg-white">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                        currentParticipant.simulasiCompleted
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      2
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-stone-900">
                        Simulasi Ujian CBT Mandiri (20 Soal)
                      </h5>
                      <p className="text-[11px] text-stone-500">
                        {currentParticipant.simulasiCompleted
                          ? `Tuntas dengan Skor: ${currentParticipant.simulasiScore}/100`
                          : 'Gratis dan dapat diulang untuk latihan.'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onStartExam('simulasi', currentParticipant)}
                    className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 text-amber-400" />
                    <span>
                      {currentParticipant.simulasiCompleted ? 'Ulangi Simulasi' : 'Mulai Simulasi'}
                    </span>
                  </button>
                </div>

                {/* 3. Babak Penyisihan Nasional */}
                <div className="p-4 rounded-2xl border border-stone-200 flex items-center justify-between gap-3 bg-white">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                        currentParticipant.penyisihanCompleted
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      3
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-stone-900">
                        Babak Penyisihan Nasional Online
                      </h5>
                      <p className="text-[11px] text-stone-500">
                        {currentParticipant.penyisihanCompleted
                          ? `Selesai • Skor: ${currentParticipant.penyisihanScore}/100`
                          : 'Ujian resmi serentak dengan sistem anti-contek.'}
                      </p>
                    </div>
                  </div>
                  {currentParticipant.penyisihanCompleted ? (
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      {currentParticipant.isLolosPenyisihan ? 'Lolos Final' : 'Selesai'}
                    </span>
                  ) : (
                    <button
                      onClick={() => onStartExam('penyisihan', currentParticipant)}
                      className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Kerjakan Penyisihan</span>
                    </button>
                  )}
                </div>

                {/* 4. Tiket Babak Grand Final */}
                <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/50 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                        currentParticipant.sudahBayarTiketFinal
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-400 text-amber-950'
                      }`}
                    >
                      4
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-stone-900">
                        Tiket Grand Final (BCA 3843-136-911 a.n SRI PRIHATININGSIH SH)
                      </h5>
                      <p className="text-[11px] text-stone-600">
                        {currentParticipant.sudahBayarTiketFinal
                          ? 'TIKET FINAL TERVERIFIKASI RESMI'
                          : 'Promo Rp 99.000 (Normal Rp 180.000) untuk 10 pendaftar pertama.'}
                      </p>
                    </div>
                  </div>
                  {currentParticipant.sudahBayarTiketFinal ? (
                    <span className="text-xs font-extrabold text-emerald-700 flex items-center gap-1 bg-emerald-100 px-2.5 py-1 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Lunas
                    </span>
                  ) : (
                    <button
                      onClick={() => onOpenTicketPayment(currentParticipant)}
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black cursor-pointer shadow-xs"
                    >
                      Beli Tiket Final
                    </button>
                  )}
                </div>

                {/* 5. Babak Grand Final */}
                <div className="p-4 rounded-2xl border border-stone-200 flex items-center justify-between gap-3 bg-white">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                        currentParticipant.finalCompleted
                          ? 'bg-purple-600 text-white'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      5
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-stone-900">
                        Babak Grand Final Perebutan Medali
                      </h5>
                      <p className="text-[11px] text-stone-500">
                        {currentParticipant.finalCompleted
                          ? `Skor: ${currentParticipant.finalScore} • ${currentParticipant.predikatJuara || 'Selesai'}`
                          : currentParticipant.sudahBayarTiketFinal
                          ? 'Akses Terbuka. Siap dikerjakan!'
                          : 'Terkunci (memerlukan Tiket Final).'}
                      </p>
                    </div>
                  </div>
                  {currentParticipant.finalCompleted ? (
                    <span className="text-xs font-black text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
                      Selesai
                    </span>
                  ) : currentParticipant.sudahBayarTiketFinal ? (
                    <button
                      onClick={() => onStartExam('final', currentParticipant)}
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-rose-600 text-white text-xs font-extrabold flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Mulai Final</span>
                    </button>
                  ) : (
                    <span className="text-xs font-semibold text-stone-400">Terkunci</span>
                  )}
                </div>

                {/* 6. E-Sertifikat */}
                <div className="pt-2">
                  <button
                    onClick={() => onViewCertificate(currentParticipant)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>Lihat & Cetak E-Sertifikat Resmi Ber-QR Code</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <UserCheck className="w-12 h-12 text-stone-400 mx-auto mb-3" />
              <h4 className="text-base font-bold text-stone-800">
                Masukkan Nomor Peserta untuk Membuka Portal
              </h4>
              <p className="text-xs text-stone-500 max-w-sm mx-auto mt-1">
                Jika Anda belum mendaftar, silakan isi formulir pendaftaran gratis di halaman utama.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
