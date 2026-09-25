import React, { useState, useEffect, useRef } from 'react';
import { Participant, Question, ExamType } from '../types';
import { StorageService } from '../services/storage';
import { LogoONI } from './OfficialLogos';
import {
  Clock,
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Award,
  HelpCircle,
  RotateCcw,
  X,
  FileCheck
} from 'lucide-react';

interface ExamEngineProps {
  participant: Participant;
  examType: ExamType;
  onExit: () => void;
  onViewCertificate?: () => void;
  onOpenFinalTicket?: () => void;
}

export const ExamEngine: React.FC<ExamEngineProps> = ({
  participant,
  examType,
  onExit,
  onViewCertificate,
  onOpenFinalTicket,
}) => {
  const settings = StorageService.getSettings();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes
  const [cheatWarnings, setCheatWarnings] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoreResult, setScoreResult] = useState<number | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Initialize randomized 20 questions
  useEffect(() => {
    const randomized = StorageService.getRandomizedQuestions(
      participant.kategori,
      participant.mapel
    );
    setQuestions(randomized);
  }, [participant.kategori, participant.mapel]);

  // Anti-Cheat: Visibility change / Tab switch detection
  useEffect(() => {
    if (!settings.antiContekEnabled || isSubmitted) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setCheatWarnings((prev) => {
          const next = prev + 1;
          alert(
            `PERINGATAN ANTI-CONTEK (${next}/3): Terdeteksi perpindahan tab atau aplikasi! Aktivitas Anda dicatat oleh sistem pengawas online.`
          );
          if (next >= 3) {
            // Auto submit on 3rd violation
            handleSubmitExam();
          }
          return next;
        });
      }
    };

    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleCopy = (e: ClipboardEvent) => e.preventDefault();

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
    };
  }, [settings.antiContekEnabled, isSubmitted]);

  // Timer Countdown
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]);

  const handleSelectAnswer = (optionIndex: number) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  const handleSubmitExam = () => {
    setShowConfirmModal(false);

    // Calculate score: 5 points each correct answer
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const calculatedScore = correctCount * 5; // 20 * 5 = 100
    setScoreResult(calculatedScore);
    setIsSubmitted(true);

    // Record result directly to storage service (Addresses item #26 & admin reports!)
    StorageService.recordExamResult(participant.id, examType, calculatedScore);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const examTitles: Record<ExamType, string> = {
    simulasi: 'Simulasi Ujian Mandiri CBT',
    penyisihan: 'Babak Penyisihan Nasional Online',
    final: 'Babak Grand Final Perebutan Medali',
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
        <div className="text-center p-8 bg-white rounded-3xl shadow-xl border border-stone-200">
          <div className="w-12 h-12 border-4 border-rose-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h3 className="font-extrabold text-stone-900 text-lg">Menyiapkan Bank Soal Ujian...</h3>
          <p className="text-xs text-stone-500 mt-1">Mengacak 20 soal resmi sesuai kategori dan mata pelajaran Anda.</p>
        </div>
      </div>
    );
  }

  // ================= RESULT SUMMARY SCREEN =================
  if (isSubmitted && scoreResult !== null) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] py-10 px-4 sm:px-6 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white p-6 sm:p-8 text-center relative">
            <Award className="w-16 h-16 text-amber-400 mx-auto mb-3 drop-shadow-md" />
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
              Ujian Berhasil Diselesaikan
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">{examTitles[examType]}</h2>
            <p className="text-xs text-slate-300 mt-1">
              Peserta: <strong className="text-white">{participant.namaLengkap}</strong> ({participant.id})
            </p>
          </div>

          {/* Score Card */}
          <div className="p-6 sm:p-8 text-center">
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 max-w-sm mx-auto shadow-inner">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Nilai Ujian Anda
              </span>
              <div className="text-5xl sm:text-6xl font-black text-rose-600 my-2">
                {scoreResult}
                <span className="text-2xl text-stone-400 font-semibold">/100</span>
              </div>
              <p className="text-xs text-stone-600 font-medium">
                {Math.round(scoreResult / 5)} dari 20 soal terjawab dengan benar (5 poin/soal).
              </p>
            </div>

            {/* Stage-specific Notices */}
            {examType === 'simulasi' && (
              <div className="mt-6 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-left text-xs text-blue-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  Simulasi Selesai & Nilai Terdata
                </div>
                <p>
                  Hasil simulasi ini membuktikan kesiapan ananda dalam sistem CBT. Nilai simulasi telah tercatat otomatis di Dashboard Panitia ONI.
                </p>
                <p className="text-blue-800 font-semibold">
                  *Silakan ulangi simulasi jika ingin memperdalam pemahaman soal sebelum Babak Penyisihan dimulai.
                </p>
              </div>
            )}

            {examType === 'penyisihan' && (
              <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-950 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-sm text-amber-900">
                  <Clock className="w-4 h-4 text-amber-700" />
                  Pengumuman Kelulusan Babak Final
                </div>
                <p>
                  Jawaban Babak Penyisihan ananda telah diamankan di server panitia. Pengumuman resmi peserta yang lolos ke Babak Final akan dirilis pada <strong>H+2 tanggal pelaksanaan penyisihan</strong>.
                </p>
                {scoreResult >= 60 ? (
                  <div className="p-3 bg-emerald-100 rounded-xl text-emerald-900 font-bold border border-emerald-300">
                    Selamat! Berdasarkan nilai Anda ({scoreResult}), Anda memenuhi kualifikasi lolos ke Babak Grand Final! Anda berhak mendapatkan promo Tiket Final Rp 99.000.
                  </div>
                ) : (
                  <p className="text-stone-600">
                    Tetap pantau portal pengumuman untuk melihat peringkat nasional ananda.
                  </p>
                )}
              </div>
            )}

            {examType === 'final' && (
              <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left text-xs text-emerald-950 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-sm text-emerald-900">
                  <Award className="w-4 h-4 text-emerald-700" />
                  Hasil Babak Grand Final & Sertifikat
                </div>
                <p>
                  Ananda telah menuntaskan seluruh rangkaian Olimpiade Nasional Indonesia dengan dedikasi luar biasa!
                </p>
                <div className="p-3 bg-emerald-100/80 rounded-xl text-emerald-950 font-bold">
                  Predikat: {scoreResult >= 90 ? 'Medali Emas' : scoreResult >= 75 ? 'Medali Perak' : scoreResult >= 60 ? 'Medali Perunggu' : 'Peserta Berprestasi Nasional'}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              {examType === 'simulasi' && (
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setScoreResult(null);
                    setAnswers({});
                    setTimeLeft(45 * 60);
                    // Reroll questions
                    setQuestions(
                      StorageService.getRandomizedQuestions(
                        participant.kategori,
                        participant.mapel
                      )
                    );
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer border border-stone-300"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi Simulasi Ujian</span>
                </button>
              )}

              {examType === 'penyisihan' && scoreResult >= 60 && onOpenFinalTicket && (
                <button
                  onClick={onOpenFinalTicket}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Beli Tiket Final Promo (Rp 99.000)</span>
                </button>
              )}

              {onViewCertificate && (
                <button
                  onClick={onViewCertificate}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Lihat & Cetak E-Sertifikat</span>
                </button>
              )}

              <button
                onClick={onExit}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-900 text-white text-xs font-bold transition-all cursor-pointer"
              >
                Kembali ke Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      {/* Top Exam Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-stone-200 shadow-xs px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LogoONI size="sm" showText={false} />
            <div>
              <h1 className="text-xs sm:text-sm font-extrabold text-stone-900 leading-tight">
                {examTitles[examType]}
              </h1>
              <span className="text-[11px] font-semibold text-rose-600 uppercase">
                Kat {participant.kategori} • {participant.mapel} ({participant.id})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Anti-cheat status pill */}
            {settings.antiContekEnabled && (
              <div
                className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                  cheatWarnings > 0
                    ? 'bg-rose-50 text-rose-700 border-rose-300'
                    : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Anti-Contek: {cheatWarnings > 0 ? `${cheatWarnings} Pelanggaran` : 'Aktif'}</span>
              </div>
            )}

            {/* Timer */}
            <div
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-mono font-black text-sm border shadow-xs ${
                timeLeft < 300
                  ? 'bg-red-50 text-red-600 border-red-300 animate-pulse'
                  : 'bg-stone-900 text-white border-stone-800'
              }`}
            >
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            <button
              onClick={() => setShowConfirmModal(true)}
              className="px-4 py-1.5 text-xs font-extrabold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Selesai Ujian
            </button>
          </div>
        </div>
      </header>

      {/* Main Exam Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left / Center: Question & Options (3 cols) */}
        <div className="lg:col-span-3 flex flex-col">
          <div className="bg-white rounded-3xl border border-stone-200 shadow-md p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <div>
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-stone-100 text-stone-800 font-extrabold text-xs">
                  Soal No. {currentIndex + 1} dari {questions.length}
                </span>
                <span className="text-xs font-semibold text-stone-500">
                  Bobot: <strong className="text-rose-600 font-bold">{currentQ.points} Poin</strong>
                </span>
              </div>

              {/* Question Text */}
              <div className="text-base sm:text-lg font-bold text-stone-900 leading-relaxed mb-8">
                {currentQ.question}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = answers[currentIndex] === optIdx;
                  const optionLetters = ['A', 'B', 'C', 'D'];
                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectAnswer(optIdx)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 cursor-pointer ${
                        isSelected
                          ? 'border-rose-600 bg-rose-50/70 shadow-sm'
                          : 'border-stone-200 hover:border-stone-300 bg-stone-50/40 hover:bg-white'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-rose-600 text-white'
                            : 'bg-stone-200 text-stone-700'
                        }`}
                      >
                        {optionLetters[optIdx]}
                      </div>
                      <span className="text-sm sm:text-base font-medium text-stone-800 pt-0.5 leading-snug">
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Prev / Next Navigation Controls */}
            <div className="flex items-center justify-between border-t border-stone-200 pt-6 mt-8">
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <span className="text-xs text-stone-500 font-medium hidden sm:inline">
                Terjawab: {answeredCount} dari {questions.length}
              </span>

              {currentIndex < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                  className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(true)}
                  className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Kirim Jawaban</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right: Question Number Grid Navigator (1 col) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl border border-stone-200 shadow-md p-5 sticky top-24">
            <h2 className="text-xs font-extrabold text-stone-800 uppercase tracking-wider mb-3">
              Nomor Soal
            </h2>

            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = answers[idx] !== undefined;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-xl font-bold text-xs transition-all flex items-center justify-center cursor-pointer ${
                      isCurrent
                        ? 'ring-2 ring-rose-600 ring-offset-2 bg-stone-900 text-white shadow-xs'
                        : isAnswered
                        ? 'bg-rose-600 text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-stone-200 space-y-2 text-[11px] text-stone-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-rose-600 shrink-0" />
                <span>Sudah Dijawab ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-stone-100 border border-stone-300 shrink-0" />
                <span>Belum Dijawab ({questions.length - answeredCount})</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowConfirmModal(true)}
                className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold shadow-sm transition-all cursor-pointer"
              >
                Selesaikan Ujian Sekarang
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Confirmation Submit Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-stone-200 text-center animate-in zoom-in-95 duration-150">
            <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-extrabold text-stone-900">
              Konfirmasi Selesai Ujian?
            </h3>
            <p className="text-xs text-stone-600 mt-2">
              Anda telah menjawab <strong>{answeredCount}</strong> dari <strong>{questions.length}</strong> soal.
              {answeredCount < questions.length && (
                <span className="block mt-1 text-rose-600 font-bold">
                  Masih terdapat {questions.length - answeredCount} soal yang belum dijawab!
                </span>
              )}
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-100 cursor-pointer"
              >
                Kembali Periksa
              </button>
              <button
                onClick={handleSubmitExam}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold shadow-md cursor-pointer"
              >
                Ya, Kumpulkan Jawaban
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
