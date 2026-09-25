export type CategoryId = 'A' | 'B' | 'C';

export type SubjectId = 'matematika' | 'bahasa-inggris' | 'ipa-sains' | 'bahasa-indonesia';

export type ExamType = 'simulasi' | 'penyisihan' | 'final';

export interface Question {
  id: string;
  category: CategoryId;
  subject: SubjectId;
  question: string;
  options: [string, string, string, string]; // [A, B, C, D]
  correctAnswer: 0 | 1 | 2 | 3;
  points: number; // default 5
  explanation?: string;
}

export interface Participant {
  id: string; // unique ID e.g. ONI-2026-A1024
  namaLengkap: string;
  kategori: CategoryId;
  mapel: SubjectId;
  sekolah: string;
  kelas: string;
  namaOrangTua: string;
  whatsappOrtu: string;
  email: string;
  provinsi: string;
  kotaKabupaten: string;
  sumberInfo: string;
  tanggalDaftar: string; // ISO date
  
  // Stages & Progress
  whatsappConfirmed: boolean;
  socialFollowed: boolean;
  
  // Simulasi
  simulasiCompleted: boolean;
  simulasiScore: number;
  simulasiDate?: string;
  
  // Babak Penyisihan
  penyisihanCompleted: boolean;
  penyisihanScore: number;
  penyisihanDate?: string;
  isLolosPenyisihan: boolean;
  
  // Tiket Final
  sudahBayarTiketFinal: boolean;
  tanggalBayarTiketFinal?: string;
  buktiBayarRef?: string;
  
  // Babak Final
  finalCompleted: boolean;
  finalScore: number;
  finalDate?: string;
  predikatJuara?: string; // Emas, Perak, Perunggu, Peserta Terpuji
}

export interface ExamSession {
  examType: ExamType;
  participantId: string;
  startTime: number;
  durationSeconds: number;
  questions: Question[];
  currentQuestionIndex: number;
  selectedAnswers: Record<number, number>; // question index -> chosen option (0-3)
  cheatWarnings: number;
  isSubmitted: boolean;
}

export interface AdminSettings {
  metaPixelId: string;
  metaPixelHtml: string;
  antiContekEnabled: boolean;
  tanggalPendaftaran: string;
  tanggalSimulasi: string;
  tanggalPenyisihan: string;
  tanggalPengumuman: string;
  tanggalFinal: string;
  adminWhatsapp: string;
}
