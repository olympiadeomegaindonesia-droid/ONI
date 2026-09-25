/**
 * OLIMPIADE NASIONAL INDONESIA (ONI)
 * Supported by Yayasan Besar Rasa Bagi Bangsa
 * Full Code End-to-End Enterprise Grade
 */

import React, { useState, useEffect } from 'react';
import { Participant, ExamType, CategoryId } from './types';
import { StorageService } from './services/storage';
import { APP_CONFIG } from '../appConfig';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RegistrationForm } from './components/RegistrationForm';
import { CategoriesSection } from './components/CategoriesSection';
import { ExamFlowSection } from './components/ExamFlowSection';
import { ProductsSection } from './components/ProductsSection';
import { VisualGallerySection } from './components/VisualGallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

// Modals
import { SocialFollowModal } from './components/SocialFollowModal';
import { ExamEngine } from './components/ExamEngine';
import { TicketPaymentModal } from './components/TicketPaymentModal';
import { CertificateModal } from './components/CertificateModal';
import { AdminDashboard } from './components/AdminDashboard';
import { SecretAdminLoginModal } from './components/SecretAdminLoginModal';
import { AnnouncementModal } from './components/AnnouncementModal';
import { AIChatModal } from './components/AIChatModal';

// Icons
import { CheckCircle2, MessageCircle, ArrowRight, X, Trophy } from 'lucide-react';

export default function App() {
  const [currentParticipant, setCurrentParticipant] = useState<Participant | null>(null);

  // Modals visibility
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [newlyRegisteredModal, setNewlyRegisteredModal] = useState<Participant | null>(null);

  // Active Exam state
  const [activeExam, setActiveExam] = useState<{
    isOpen: boolean;
    type: ExamType;
    participant: Participant | null;
  }>({
    isOpen: false,
    type: 'simulasi',
    participant: null,
  });

  // On mount: apply Meta Pixel & load current user if any
  useEffect(() => {
    const settings = StorageService.getSettings();
    StorageService.applyMetaPixel(settings);

    const currentId = StorageService.getCurrentUserId();
    if (currentId) {
      const p = StorageService.getParticipantById(currentId);
      if (p) setCurrentParticipant(p);
    }
  }, []);

  const handleSuccessRegister = (participant: Participant) => {
    setCurrentParticipant(participant);
    setNewlyRegisteredModal(participant);
  };

  const scrollToRegistration = () => {
    const el = document.getElementById('pendaftaran');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartExam = (type: ExamType, p: Participant) => {
    setActiveExam({
      isOpen: true,
      type,
      participant: p,
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-rose-500 selection:text-white flex flex-col">
      {/* If Exam is in progress, show full-screen ExamEngine */}
      {activeExam.isOpen && activeExam.participant && (
        <ExamEngine
          participant={activeExam.participant}
          examType={activeExam.type}
          onExit={() => {
            setActiveExam({ isOpen: false, type: 'simulasi', participant: null });
            // Refresh current participant
            if (activeExam.participant) {
              const updated = StorageService.getParticipantById(activeExam.participant.id);
              if (updated) setCurrentParticipant(updated);
            }
          }}
          onViewCertificate={() => {
            setActiveExam({ isOpen: false, type: 'simulasi', participant: null });
            setIsCertificateModalOpen(true);
          }}
          onOpenFinalTicket={() => {
            setActiveExam({ isOpen: false, type: 'simulasi', participant: null });
            setIsTicketModalOpen(true);
          }}
        />
      )}

      {/* If Admin Dashboard is open, show full-screen Admin Dashboard */}
      {isAdminDashboardOpen ? (
        <AdminDashboard onClose={() => setIsAdminDashboardOpen(false)} />
      ) : (
        <>
          {/* Main Website Navigation */}
          <Navbar
            onOpenRegister={scrollToRegistration}
            onOpenPortal={() => setIsPortalOpen(true)}
            onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
            onOpenAIChat={() => setIsAIChatOpen(true)}
            onOpenAnnouncement={() => setIsAnnouncementOpen(true)}
          />

          <main className="flex-1">
            {/* Hero Section */}
            <Hero
              onRegisterClick={scrollToRegistration}
              onPortalClick={() => setIsPortalOpen(true)}
              onAIChatClick={() => setIsAIChatOpen(true)}
            />

            {/* Registration Form (Focus Utama) */}
            <RegistrationForm onSuccessRegister={handleSuccessRegister} />

            {/* Categories & Subjects */}
            <CategoriesSection
              onSelectCategory={(catId: CategoryId) => {
                scrollToRegistration();
              }}
            />

            {/* Systematic Flow from Meta Ads to Final */}
            <ExamFlowSection onRegisterClick={scrollToRegistration} />

            {/* 4 Core Products / Services */}
            <ProductsSection
              onRegisterClick={scrollToRegistration}
              onPortalClick={() => setIsPortalOpen(true)}
            />

            {/* Visual Gallery */}
            <VisualGallerySection />

            {/* Customer Testimonials */}
            <TestimonialsSection />

            {/* FAQ Accordion */}
            <FAQSection onAIChatClick={() => setIsAIChatOpen(true)} />
          </main>

          {/* Footer */}
          <Footer
            onRegisterClick={scrollToRegistration}
            onPortalClick={() => setIsPortalOpen(true)}
            onAdminLoginClick={() => setIsAdminLoginOpen(true)}
          />

          {/* Floating Action Button for AI Consultant */}
          <div className="fixed bottom-5 right-5 z-40">
            <button
              onClick={() => setIsAIChatOpen(true)}
              className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-amber-500 to-rose-600 text-white rounded-full shadow-2xl hover:shadow-rose-500/30 transition-all transform hover:scale-105 cursor-pointer font-bold text-xs border border-white/30"
              title="Konsultasi AI Olimpiade"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span>Tanya AI Konsultan</span>
            </button>
          </div>
        </>
      )}

      {/* ================= MODALS ================= */}

      {/* 1. Post Registration Instant Success Modal */}
      {newlyRegisteredModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-stone-200 text-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block font-bold">
              PENDAFTARAN RESMI BERHASIL
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
              Selamat, {newlyRegisteredModal.namaLengkap}!
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Nomor Peserta Resmi Anda:
            </p>
            <div className="my-3 p-3 bg-stone-100 border border-stone-300 rounded-xl font-mono text-xl font-black text-rose-600 tracking-wider">
              {newlyRegisteredModal.id}
            </div>

            <p className="text-xs text-stone-600 leading-relaxed mb-6">
              Langkah selanjutnya: Konfirmasi ke WhatsApp Admin dan ikuti media sosial resmi ONI untuk membuka akses <strong>Simulasi Ujian Mandiri</strong>.
            </p>

            <div className="space-y-2.5">
              <a
                href={StorageService.getWhatsAppLinks().registrationConfirm(newlyRegisteredModal)}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  newlyRegisteredModal.whatsappConfirmed = true;
                  StorageService.saveParticipant(newlyRegisteredModal);
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>1. Konfirmasi WhatsApp Admin</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => {
                  const p = newlyRegisteredModal;
                  setNewlyRegisteredModal(null);
                  setIsSocialModalOpen(true);
                }}
                className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>2. Lanjut Follow Sosmed & Buka Simulasi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Social Follow Modal */}
      {currentParticipant && (
        <SocialFollowModal
          isOpen={isSocialModalOpen}
          participant={currentParticipant}
          onClose={() => setIsSocialModalOpen(false)}
          onStartSimulation={() => {
            setIsSocialModalOpen(false);
            handleStartExam('simulasi', currentParticipant);
          }}
        />
      )}

      {/* 3. Ticket Payment Modal (BCA Promo 99rb) */}
      {currentParticipant && (
        <TicketPaymentModal
          isOpen={isTicketModalOpen}
          participant={currentParticipant}
          onClose={() => setIsTicketModalOpen(false)}
          onSuccessPayment={() => {
            const updated = StorageService.getParticipantById(currentParticipant.id);
            if (updated) setCurrentParticipant(updated);
          }}
        />
      )}

      {/* 4. Luxury Official E-Certificate Modal */}
      {currentParticipant && (
        <CertificateModal
          isOpen={isCertificateModalOpen}
          participant={currentParticipant}
          onClose={() => setIsCertificateModalOpen(false)}
        />
      )}

      {/* 5. Secret Admin Login Modal */}
      <SecretAdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onSuccessLogin={() => {
          setIsAdminLoginOpen(false);
          setIsAdminDashboardOpen(true);
        }}
      />

      {/* 6. Announcement Modal (H+2) */}
      <AnnouncementModal
        isOpen={isAnnouncementOpen}
        onClose={() => setIsAnnouncementOpen(false)}
        onSelectParticipant={(p) => {
          setCurrentParticipant(p);
          setIsPortalOpen(true);
        }}
        onOpenTicketPayment={(p) => {
          setCurrentParticipant(p);
          setIsTicketModalOpen(true);
        }}
      />

      {/* 7. Interactive Gemini AI Consultant Modal */}
      <AIChatModal
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        participant={currentParticipant}
      />

      {/* 8. Participant Portal Modal */}
      {isPortalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6">
            <div className="bg-slate-900 text-white p-6 relative flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black">Portal Peserta Olimpiade</h3>
                <p className="text-xs text-stone-400">
                  Akses mandiri simulasi, pengumuman, dan sertifikat ananda.
                </p>
              </div>
              <button
                onClick={() => setIsPortalOpen(false)}
                className="p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {currentParticipant ? (
                <div className="space-y-5">
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono text-stone-500 uppercase">
                        Peserta Aktif
                      </span>
                      <h4 className="font-extrabold text-base text-stone-900">
                        {currentParticipant.namaLengkap}
                      </h4>
                      <p className="text-xs text-stone-600">
                        {currentParticipant.sekolah} • Kategori {currentParticipant.kategori} (
                        {currentParticipant.mapel})
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold bg-rose-100 text-rose-800 px-2 py-1 rounded-lg">
                        {currentParticipant.id}
                      </span>
                    </div>
                  </div>

                  {/* Actions Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Simulasi */}
                    <button
                      onClick={() => {
                        setIsPortalOpen(false);
                        handleStartExam('simulasi', currentParticipant);
                      }}
                      className="p-4 rounded-2xl border border-stone-200 hover:border-stone-400 text-left bg-white hover:bg-stone-50 transition-all cursor-pointer"
                    >
                      <span className="text-[10px] font-bold text-stone-500 uppercase block">
                        Latihan Mandiri
                      </span>
                      <h5 className="font-extrabold text-sm text-stone-900 mt-0.5">
                        Simulasi Ujian CBT
                      </h5>
                      <p className="text-xs text-stone-500 mt-1">
                        {currentParticipant.simulasiCompleted
                          ? `Skor Terakhir: ${currentParticipant.simulasiScore}/100`
                          : 'Bisa dikerjakan kapan saja (Gratis).'}
                      </p>
                    </button>

                    {/* Penyisihan */}
                    <button
                      onClick={() => {
                        setIsPortalOpen(false);
                        handleStartExam('penyisihan', currentParticipant);
                      }}
                      className="p-4 rounded-2xl border border-rose-200 hover:border-rose-400 text-left bg-rose-50/50 hover:bg-rose-50 transition-all cursor-pointer"
                    >
                      <span className="text-[10px] font-bold text-rose-700 uppercase block">
                        Babak Resmi
                      </span>
                      <h5 className="font-extrabold text-sm text-stone-900 mt-0.5">
                        Babak Penyisihan Nasional
                      </h5>
                      <p className="text-xs text-stone-600 mt-1">
                        {currentParticipant.penyisihanCompleted
                          ? `Nilai: ${currentParticipant.penyisihanScore}/100`
                          : '20 Soal Terstandar Anti-Contek.'}
                      </p>
                    </button>

                    {/* Tiket Final */}
                    <button
                      onClick={() => {
                        setIsPortalOpen(false);
                        setIsTicketModalOpen(true);
                      }}
                      className="p-4 rounded-2xl border border-amber-200 text-left bg-amber-50/60 hover:bg-amber-100/60 transition-all cursor-pointer"
                    >
                      <span className="text-[10px] font-bold text-amber-800 uppercase block">
                        BCA 3843-136-911
                      </span>
                      <h5 className="font-extrabold text-sm text-stone-900 mt-0.5">
                        Tiket Babak Grand Final
                      </h5>
                      <p className="text-xs text-amber-900 font-semibold mt-1">
                        {currentParticipant.sudahBayarTiketFinal
                          ? 'TIKET TERVERIFIKASI (LUNAS)'
                          : 'Promo Rp 99.000 (Normal Rp 180.000)'}
                      </p>
                    </button>

                    {/* Babak Final */}
                    <button
                      onClick={() => {
                        if (!currentParticipant.sudahBayarTiketFinal) {
                          alert('Silakan lakukan pembayaran Tiket Final promo terlebih dahulu untuk membuka akses Babak Final.');
                          setIsPortalOpen(false);
                          setIsTicketModalOpen(true);
                          return;
                        }
                        setIsPortalOpen(false);
                        handleStartExam('final', currentParticipant);
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        currentParticipant.sudahBayarTiketFinal
                          ? 'border-purple-300 bg-purple-50/60 hover:bg-purple-100/60'
                          : 'border-stone-200 bg-stone-50 opacity-60'
                      }`}
                    >
                      <span className="text-[10px] font-bold text-purple-700 uppercase block">
                        Perebutan Medali
                      </span>
                      <h5 className="font-extrabold text-sm text-stone-900 mt-0.5">
                        Babak Grand Final
                      </h5>
                      <p className="text-xs text-stone-600 mt-1">
                        {currentParticipant.finalCompleted
                          ? `Skor: ${currentParticipant.finalScore} • ${currentParticipant.predikatJuara || 'Selesai'}`
                          : currentParticipant.sudahBayarTiketFinal
                          ? 'Akses Terbuka. Klik untuk mulai.'
                          : 'Perlu Tiket Final terverifikasi.'}
                      </p>
                    </button>
                  </div>

                  {/* E-Sertifikat Button */}
                  <button
                    onClick={() => {
                      setIsPortalOpen(false);
                      setIsCertificateModalOpen(true);
                    }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    Lihat & Cetak E-Sertifikat Resmi
                  </button>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <p className="text-xs text-stone-600">
                    Anda belum mendaftarkan akun peserta pada sesi ini.
                  </p>
                  <button
                    onClick={() => {
                      setIsPortalOpen(false);
                      scrollToRegistration();
                    }}
                    className="px-6 py-3 rounded-xl bg-rose-600 text-white text-xs font-bold shadow-md cursor-pointer hover:bg-rose-700"
                  >
                    Daftar Sekarang (100% Gratis)
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
