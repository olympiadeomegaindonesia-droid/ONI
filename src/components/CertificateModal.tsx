import React, { useRef } from 'react';
import { Participant } from '../types';
import { LogoONI, LogoYayasan } from './OfficialLogos';
import { APP_CONFIG } from '../../appConfig';
import { Printer, Download, X, Award, ShieldCheck, QrCode } from 'lucide-react';

interface CertificateModalProps {
  participant: Participant;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  participant,
  isOpen,
  onClose,
}) => {
  const certRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const predicate =
    participant.predikatJuara ||
    (participant.penyisihanScore >= 80
      ? 'Peserta Terbaik Nasional'
      : participant.penyisihanCompleted
      ? 'Peserta Berprestasi'
      : 'Peserta Terdaftar Resmi');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-stone-900 rounded-3xl shadow-2xl border border-stone-700 overflow-hidden my-6">
        {/* Modal Top Control Bar */}
        <div className="bg-stone-950 px-6 py-3.5 flex items-center justify-between text-white border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="font-extrabold text-sm tracking-wide">
              E-Sertifikat Resmi Olimpiade Nasional Indonesia
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Unduh PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Container: Landscape styling */}
        <div className="p-4 sm:p-8 bg-stone-200 overflow-x-auto">
          <div
            ref={certRef}
            id="print-certificate"
            className="w-[840px] sm:w-[880px] h-[610px] mx-auto bg-[#FFFDF9] text-stone-900 p-8 relative shadow-2xl border-[14px] border-[#1A1615] rounded-lg select-none flex flex-col justify-between"
            style={{
              boxShadow: 'inset 0 0 0 3px #D4AF37, inset 0 0 0 6px #FFFDF9, inset 0 0 0 9px #D4AF37',
            }}
          >
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600" />

            {/* Header: Logos & Organization Endorsement */}
            <div className="flex items-center justify-between border-b-2 border-amber-400/60 pb-3">
              <LogoONI size="md" showText={true} />
              
              <div className="text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500 block">
                  Diselenggarakan & Didukung Penuh Oleh
                </span>
                <span className="text-xs font-black uppercase text-blue-900 tracking-wider">
                  {APP_CONFIG.supportedBy.name}
                </span>
                <span className="text-[9px] text-stone-500 block">
                  Keputusan Kemenkumham RI No. {APP_CONFIG.supportedBy.decreeNumber}
                </span>
              </div>

              <LogoYayasan size="sm" showText={false} />
            </div>

            {/* Certificate Title */}
            <div className="text-center mt-2">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-700 block">
                SERTIFIKAT PENGHARGAAN RESMI
              </span>
              <h1 className="text-3xl font-black tracking-wider text-stone-900 font-serif uppercase mt-1">
                CERTIFICATE OF ACHIEVEMENT
              </h1>
              <span className="text-[11px] font-mono text-stone-500 block mt-0.5">
                Nomor Sertifikat: ONI/CERT/{new Date().getFullYear()}/{participant.id}
              </span>
            </div>

            {/* Recipient Details */}
            <div className="text-center my-auto py-2">
              <span className="text-xs italic text-stone-600 font-serif">
                Dengan bangga dan apresiasi setinggi-tingginya diberikan kepada:
              </span>

              <div className="my-2 border-b-2 border-stone-800/80 max-w-lg mx-auto pb-1">
                <h2 className="text-2xl sm:text-3xl font-black font-serif text-stone-950 uppercase tracking-wide">
                  {participant.namaLengkap}
                </h2>
              </div>

              <p className="text-xs font-semibold text-stone-700">
                Asal Sekolah: <strong className="text-stone-900 font-extrabold">{participant.sekolah}</strong> (Kelas {participant.kelas})
              </p>

              <div className="mt-2.5 max-w-xl mx-auto text-xs text-stone-600 leading-relaxed">
                Atas partisipasi aktif, dedikasi, serta integritas akademik tinggi dalam ajang kompetisi:
                <strong className="block text-rose-700 font-extrabold text-sm uppercase mt-0.5">
                  OLIMPIADE NASIONAL INDONESIA 2026/2027
                </strong>
                <span className="inline-block mt-1 font-bold text-stone-800">
                  Bidang Studi: {participant.mapel.toUpperCase()} • Kategori: {participant.kategori}
                </span>
              </div>

              <div className="mt-3 inline-block px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-rose-500/20 border border-amber-500 text-stone-900 font-black text-xs uppercase tracking-wider">
                Predikat: {predicate}
              </div>
            </div>

            {/* Footer Signatures & QR Code */}
            <div className="flex items-end justify-between pt-3 border-t border-amber-300/60 mt-2">
              {/* Signature 1: Ketua Pelaksana */}
              <div className="text-center w-56">
                <span className="text-[10px] text-stone-500 font-semibold block">
                  Ketua Panitia Pelaksana ONI
                </span>
                {/* Stylized digital signature graphic */}
                <div className="h-12 flex items-center justify-center">
                  <svg width="120" height="40" viewBox="0 0 140 40" fill="none">
                    <path
                      d="M10 28 C 30 10, 45 35, 60 15 C 75 3, 90 30, 110 18 C 120 12, 130 25, 135 20"
                      stroke="#1e293b"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <strong className="text-xs text-stone-900 block font-bold underline">
                  Drs. H. Hendra Wijaya, M.Pd.
                </strong>
                <span className="text-[9px] text-stone-500">NIP. 19780512 200312 1 004</span>
              </div>

              {/* Center Seal / QR Code */}
              <div className="text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-2 border-amber-500 bg-amber-50 flex items-center justify-center p-1 shadow-xs">
                  {/* Stylized QR Code */}
                  <QrCode className="w-10 h-10 text-stone-800" />
                </div>
                <span className="text-[9px] font-mono text-stone-600 mt-1 uppercase font-bold">
                  E-VERIFIED QR
                </span>
              </div>

              {/* Signature 2: Yayasan Pembina */}
              <div className="text-center w-56">
                <span className="text-[10px] text-blue-900 font-semibold block">
                  Pembina Yayasan Besar Rasa Bagi Bangsa
                </span>
                <div className="h-12 flex items-center justify-center">
                  <svg width="120" height="40" viewBox="0 0 140 40" fill="none">
                    <path
                      d="M8 30 C 25 5, 40 38, 70 12 C 90 2, 105 32, 125 15"
                      stroke="#1D4ED8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <strong className="text-xs text-stone-900 block font-bold underline">
                  Sri Prihatiningsih, S.H.
                </strong>
                <span className="text-[9px] text-stone-500">Ketua Dewan Pengurus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
