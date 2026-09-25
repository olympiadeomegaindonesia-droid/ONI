import React, { useState } from 'react';
import { Participant } from '../types';
import { StorageService } from '../services/storage';
import { APP_CONFIG } from '../../appConfig';
import { CheckCircle2, MessageCircle, Instagram, Youtube, Play, ShieldAlert, ArrowRight, X } from 'lucide-react';

interface SocialFollowModalProps {
  participant: Participant;
  isOpen: boolean;
  onClose: () => void;
  onStartSimulation: () => void;
}

export const SocialFollowModal: React.FC<SocialFollowModalProps> = ({
  participant,
  isOpen,
  onClose,
  onStartSimulation,
}) => {
  const [waConfirmed, setWaConfirmed] = useState(participant.whatsappConfirmed);
  const [igFollowed, setIgFollowed] = useState(participant.socialFollowed);
  const [tiktokFollowed, setTiktokFollowed] = useState(participant.socialFollowed);
  const [youtubeSubscribed, setYoutubeSubscribed] = useState(participant.socialFollowed);

  if (!isOpen) return null;

  const waLink = StorageService.getWhatsAppLinks().registrationConfirm(participant);

  const isAllFollowed = waConfirmed && igFollowed && tiktokFollowed && youtubeSubscribed;

  const handleUnlockSimulation = () => {
    participant.whatsappConfirmed = true;
    participant.socialFollowed = true;
    StorageService.saveParticipant(participant);
    onStartSimulation();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
            Langkah Wajib Pembuka Simulasi
          </div>
          <h3 className="text-xl font-extrabold">Verifikasi Akun & Media Sosial</h3>
          <p className="text-xs text-white/90 mt-1 max-w-xs mx-auto">
            Selesaikan konfirmasi WhatsApp dan follow akun resmi untuk membuka akses Simulasi Ujian Mandiri.
          </p>
        </div>

        {/* Participant ID Badge */}
        <div className="p-4 bg-amber-50/80 border-b border-amber-200/80 flex items-center justify-between gap-2 text-xs">
          <div>
            <span className="text-stone-500">Nomor Peserta Resmi:</span>
            <strong className="block text-sm font-extrabold text-stone-900 font-mono">
              {participant.id}
            </strong>
          </div>
          <div className="text-right">
            <span className="text-stone-500">Kategori & Mapel:</span>
            <strong className="block text-xs font-bold text-rose-700 uppercase">
              Kat {participant.kategori} • {participant.mapel}
            </strong>
          </div>
        </div>

        {/* Steps List */}
        <div className="p-6 space-y-4">
          {/* Step 1: WA Admin */}
          <div
            className={`p-4 rounded-2xl border transition-all ${
              waConfirmed ? 'bg-emerald-50/70 border-emerald-300' : 'bg-stone-50 border-stone-200'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-600 text-white shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Langkah 1: Konfirmasi ke WhatsApp Admin
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Kirim chat otomatis konfirmasi data ananda ke nomor hotline resmi.
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={waConfirmed}
                onChange={(e) => setWaConfirmed(e.target.checked)}
                className="w-5 h-5 accent-emerald-600 rounded cursor-pointer mt-1"
              />
            </div>
            <div className="mt-3 pl-11">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setWaConfirmed(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
              >
                <span>Buka WhatsApp Admin ({APP_CONFIG.contact.whatsappDisplay})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Step 2: Follow Social Media */}
          <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <h4 className="text-sm font-bold text-stone-900">
                Langkah 2: Ikuti Media Sosial Resmi ONI
              </h4>
            </div>

            {/* Instagram */}
            <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-stone-200">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-800 block">Instagram Resmi</span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIgFollowed(true)}
                    className="text-[11px] text-rose-600 hover:underline"
                  >
                    {APP_CONFIG.contact.instagram}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIgFollowed(!igFollowed)}
                className={`text-xs px-2.5 py-1 rounded-lg font-bold border transition-colors ${
                  igFollowed
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                }`}
              >
                {igFollowed ? 'Sudah Follow' : 'Follow'}
              </button>
            </div>

            {/* TikTok */}
            <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-stone-200">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-black text-white">
                  <Play className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-800 block">TikTok Resmi</span>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setTiktokFollowed(true)}
                    className="text-[11px] text-rose-600 hover:underline"
                  >
                    {APP_CONFIG.contact.tiktok}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setTiktokFollowed(!tiktokFollowed)}
                className={`text-xs px-2.5 py-1 rounded-lg font-bold border transition-colors ${
                  tiktokFollowed
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                }`}
              >
                {tiktokFollowed ? 'Sudah Follow' : 'Follow'}
              </button>
            </div>

            {/* YouTube */}
            <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-stone-200">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-red-600 text-white">
                  <Youtube className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-800 block">YouTube Channel</span>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setYoutubeSubscribed(true)}
                    className="text-[11px] text-red-600 hover:underline"
                  >
                    {APP_CONFIG.contact.youtube}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setYoutubeSubscribed(!youtubeSubscribed)}
                className={`text-xs px-2.5 py-1 rounded-lg font-bold border transition-colors ${
                  youtubeSubscribed
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                }`}
              >
                {youtubeSubscribed ? 'Sudah Subscribe' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-stone-100/80 border-t border-stone-200 flex flex-col gap-2.5">
          <button
            onClick={handleUnlockSimulation}
            disabled={!isAllFollowed}
            className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              isAllFollowed
                ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-stone-300 text-stone-500 cursor-not-allowed'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Mulai Simulasi Ujian Mandiri Sekarang</span>
          </button>

          {!isAllFollowed && (
            <p className="text-[11px] text-center text-stone-500">
              *Harap centang konfirmasi WhatsApp & tombol follow untuk mengaktifkan tombol simulasi.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
