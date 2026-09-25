import React, { useState } from 'react';
import { Participant } from '../types';
import { StorageService } from '../services/storage';
import { APP_CONFIG } from '../../appConfig';
import {
  CreditCard,
  CheckCircle2,
  Copy,
  MessageCircle,
  X,
  Sparkles,
  ShieldCheck,
  Award,
  ArrowRight,
  Clock
} from 'lucide-react';

interface TicketPaymentModalProps {
  participant: Participant;
  isOpen: boolean;
  onClose: () => void;
  onSuccessPayment: () => void;
}

export const TicketPaymentModal: React.FC<TicketPaymentModalProps> = ({
  participant,
  isOpen,
  onClose,
  onSuccessPayment,
}) => {
  const [copied, setCopied] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(APP_CONFIG.payment.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const waLink = StorageService.getWhatsAppLinks().paymentConfirmBCA(participant);

  const handleConfirmPaid = () => {
    setIsProcessing(true);
    setTimeout(() => {
      participant.sudahBayarTiketFinal = true;
      participant.tanggalBayarTiketFinal = new Date().toISOString();
      participant.buktiBayarRef = refNumber || 'BCA-TRX-' + Math.floor(100000 + Math.random() * 900000);
      StorageService.saveParticipant(participant);

      setIsProcessing(false);
      setShowSuccess(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            Promo Spesial Lolos Penyisihan
          </div>
          <h3 className="text-xl sm:text-2xl font-black">Tiket Resmi Babak Grand Final</h3>
          <p className="text-xs text-stone-300 mt-1">
            Peserta: <strong className="text-white">{participant.namaLengkap}</strong> ({participant.id})
          </p>
        </div>

        {showSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-extrabold text-stone-900">
              Tiket Final Berhasil Terverifikasi!
            </h4>
            <p className="text-xs text-stone-600 max-w-sm mx-auto">
              Sistem telah mencatat konfirmasi pembayaran ananda. Tanda khusus <strong>TIKET FINAL TERVERIFIKASI</strong> telah disematkan pada akun ananda dan babak final kini terbuka.
            </p>
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold">
              Ref Transaksi: {participant.buktiBayarRef}
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onSuccessPayment();
                  onClose();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-xs shadow-md cursor-pointer hover:shadow-lg transition-all"
              >
                Lanjut ke Portal Ujian Babak Final
              </button>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-stone-500 hover:text-stone-800 block text-center"
              >
                Kirim Bukti Pembayaran ke WhatsApp Admin &rarr;
              </a>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-5">
            {/* Promo Price Box */}
            <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-rose-500/10 border-2 border-amber-400 rounded-2xl p-4 text-center">
              <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">
                {APP_CONFIG.payment.promoNote}
              </span>
              <div className="flex items-center justify-center gap-3 mt-1">
                <span className="text-base line-through text-stone-400 font-bold">
                  Rp {APP_CONFIG.payment.normalPrice.toLocaleString('id-ID')}
                </span>
                <span className="text-3xl font-black text-rose-600">
                  Rp {APP_CONFIG.payment.promoPrice.toLocaleString('id-ID')}
                </span>
              </div>
              <p className="text-[11px] text-stone-600 mt-1">
                *Termasuk medali fisik & piagam penghargaan resmi jika menjadi juara!
              </p>
            </div>

            {/* Bank BCA Card Details */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white p-5 rounded-2xl shadow-md space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-400" />
                  <span className="font-extrabold text-sm tracking-wide">
                    {APP_CONFIG.payment.bank}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-blue-500/30 px-2 py-0.5 rounded text-blue-200">
                  Rekening Resmi
                </span>
              </div>

              <div>
                <span className="text-[11px] text-blue-300 block">Nomor Rekening:</span>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-xl sm:text-2xl font-mono font-black tracking-wider text-amber-300">
                    {APP_CONFIG.payment.accountNumber}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Tersalin!' : 'Salin'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-1 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-blue-300">Atas Nama:</span>
                <strong className="text-white font-bold">{APP_CONFIG.payment.accountHolder}</strong>
              </div>
            </div>

            {/* Step Confirmation */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                  Nomor Referensi / Catatan Transfer (Opsional):
                </label>
                <input
                  type="text"
                  value={refNumber}
                  onChange={(e) => setRefNumber(e.target.value)}
                  placeholder="Contoh: No. Ref m-BCA 910283"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-medium focus:ring-2 focus:ring-rose-500 focus:outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                {/* WhatsApp Confirmation Button (Item #8) */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleConfirmPaid}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konfirmasi Pembayaran via WhatsApp Admin</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {/* Direct Instant Confirmation Button */}
                <button
                  type="button"
                  onClick={handleConfirmPaid}
                  disabled={isProcessing}
                  className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>
                    {isProcessing ? 'Memverifikasi...' : 'Saya Sudah Transfer (Aktivasi Tiket Final)'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
