import { Participant, Question, AdminSettings, CategoryId, SubjectId, ExamType } from '../types';
import { DEFAULT_QUESTIONS } from '../data/defaultBankSoal';
import { APP_CONFIG } from '../../appConfig';

const STORAGE_KEYS = {
  PARTICIPANTS: 'oni_participants_v1',
  QUESTIONS: 'oni_questions_v1',
  ADMIN_SETTINGS: 'oni_admin_settings_v1',
  CURRENT_USER_ID: 'oni_current_user_id_v1',
};

const DEFAULT_SETTINGS: AdminSettings = {
  metaPixelId: '',
  metaPixelHtml: '',
  antiContekEnabled: true,
  tanggalPendaftaran: APP_CONFIG.defaultSchedule.registrationEnd,
  tanggalSimulasi: APP_CONFIG.defaultSchedule.simulationDate,
  tanggalPenyisihan: APP_CONFIG.defaultSchedule.preliminaryDate,
  tanggalPengumuman: APP_CONFIG.defaultSchedule.announcementDate,
  tanggalFinal: APP_CONFIG.defaultSchedule.finalDate,
  adminWhatsapp: APP_CONFIG.contact.whatsapp,
};

// Seed 3 realistic participants so admin dashboard has data immediately
const INITIAL_PARTICIPANTS: Participant[] = [
  {
    id: 'ONI-2026-A1001',
    namaLengkap: 'Muhammad Al-Fatih Pratama',
    kategori: 'A',
    mapel: 'matematika',
    sekolah: 'SD Islam Al-Azhar 1 Jakarta',
    kelas: '3',
    namaOrangTua: 'Bambang Pratama, S.T.',
    whatsappOrtu: '6281234567890',
    email: 'bambang.pratama@gmail.com',
    provinsi: 'DKI Jakarta',
    kotaKabupaten: 'Jakarta Selatan',
    sumberInfo: 'Iklan Meta (Instagram)',
    tanggalDaftar: '2026-09-18T10:15:00.000Z',
    whatsappConfirmed: true,
    socialFollowed: true,
    simulasiCompleted: true,
    simulasiScore: 90,
    simulasiDate: '2026-09-19T14:30:00.000Z',
    penyisihanCompleted: true,
    penyisihanScore: 85,
    penyisihanDate: '2026-09-20T09:45:00.000Z',
    isLolosPenyisihan: true,
    sudahBayarTiketFinal: true,
    tanggalBayarTiketFinal: '2026-09-21T11:20:00.000Z',
    buktiBayarRef: 'TRX-BCA-88910',
    finalCompleted: false,
    finalScore: 0,
    predikatJuara: 'Kandidat Medali Emas',
  },
  {
    id: 'ONI-2026-B2045',
    namaLengkap: 'Clarissa Aurelia Putri',
    kategori: 'B',
    mapel: 'ipa-sains',
    sekolah: 'SD Kristen Petra 9 Surabaya',
    kelas: '5',
    namaOrangTua: 'Irene Kusuma Wijaya',
    whatsappOrtu: '6281398765432',
    email: 'irene.wijaya@gmail.com',
    provinsi: 'Jawa Timur',
    kotaKabupaten: 'Surabaya',
    sumberInfo: 'Iklan Meta (Facebook)',
    tanggalDaftar: '2026-09-20T08:30:00.000Z',
    whatsappConfirmed: true,
    socialFollowed: true,
    simulasiCompleted: true,
    simulasiScore: 95,
    simulasiDate: '2026-09-21T16:10:00.000Z',
    penyisihanCompleted: true,
    penyisihanScore: 90,
    penyisihanDate: '2026-09-22T10:00:00.000Z',
    isLolosPenyisihan: true,
    sudahBayarTiketFinal: false,
    finalCompleted: false,
    finalScore: 0,
  },
  {
    id: 'ONI-2026-C3088',
    namaLengkap: 'Rafi Raditya Nugroho',
    kategori: 'C',
    mapel: 'matematika',
    sekolah: 'SMP Negeri 1 Yogyakarta',
    kelas: '8',
    namaOrangTua: 'Drs. Hendro Nugroho',
    whatsappOrtu: '6281901234567',
    email: 'hendro.nugroho@gmail.com',
    provinsi: 'DI Yogyakarta',
    kotaKabupaten: 'Yogyakarta',
    sumberInfo: 'Rekomendasi Guru',
    tanggalDaftar: '2026-09-22T14:00:00.000Z',
    whatsappConfirmed: false,
    socialFollowed: false,
    simulasiCompleted: false,
    simulasiScore: 0,
    penyisihanCompleted: false,
    penyisihanScore: 0,
    isLolosPenyisihan: false,
    sudahBayarTiketFinal: false,
    finalCompleted: false,
    finalScore: 0,
  },
];

export const StorageService = {
  // ================= ADMIN SETTINGS =================
  getSettings(): AdminSettings {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ADMIN_SETTINGS);
      if (stored) return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
    } catch (e) {
      console.warn('Error reading settings', e);
    }
    return DEFAULT_SETTINGS;
  },

  saveSettings(settings: AdminSettings): void {
    try {
      localStorage.setItem(STORAGE_KEYS.ADMIN_SETTINGS, JSON.stringify(settings));
      this.applyMetaPixel(settings);
    } catch (e) {
      console.warn('Error saving settings', e);
    }
  },

  applyMetaPixel(settings: AdminSettings): void {
    if (typeof document === 'undefined') return;
    
    // Clean old injected pixel scripts if any
    const existing = document.getElementById('oni-meta-pixel');
    if (existing) existing.remove();

    if (settings.metaPixelId) {
      const script = document.createElement('script');
      script.id = 'oni-meta-pixel';
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${settings.metaPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }

    if (settings.metaPixelHtml) {
      const htmlContainer = document.getElementById('oni-custom-pixel-html');
      if (htmlContainer) htmlContainer.remove();
      const div = document.createElement('div');
      div.id = 'oni-custom-pixel-html';
      div.innerHTML = settings.metaPixelHtml;
      document.body.appendChild(div);
    }
  },

  // ================= PARTICIPANTS =================
  getParticipants(): Participant[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PARTICIPANTS);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Error reading participants', e);
    }
    localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(INITIAL_PARTICIPANTS));
    return INITIAL_PARTICIPANTS;
  },

  saveParticipants(participants: Participant[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(participants));
    } catch (e) {
      console.warn('Error saving participants', e);
    }
  },

  getParticipantById(id: string): Participant | null {
    const list = this.getParticipants();
    return list.find((p) => p.id === id) || null;
  },

  saveParticipant(participant: Participant): void {
    const list = this.getParticipants();
    const index = list.findIndex((p) => p.id === participant.id);
    if (index >= 0) {
      list[index] = participant;
    } else {
      list.unshift(participant);
    }
    this.saveParticipants(list);
  },

  deleteParticipant(id: string): void {
    const list = this.getParticipants().filter((p) => p.id !== id);
    this.saveParticipants(list);
  },

  getCurrentUserId(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEYS.CURRENT_USER_ID) || null;
    } catch {
      return null;
    }
  },

  setCurrentUserId(id: string | null): void {
    try {
      if (id) {
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER_ID, id);
      } else {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER_ID);
      }
    } catch (e) {
      console.warn(e);
    }
  },

  generateParticipantId(kategori: CategoryId): string {
    const year = new Date().getFullYear();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `ONI-${year}-${kategori}${randomNum}`;
  },

  // ================= EXAM RECORDING =================
  recordExamResult(
    participantId: string,
    examType: ExamType,
    score: number
  ): Participant | null {
    const participant = this.getParticipantById(participantId);
    if (!participant) return null;

    const nowIso = new Date().toISOString();

    if (examType === 'simulasi') {
      participant.simulasiCompleted = true;
      participant.simulasiScore = score;
      participant.simulasiDate = nowIso;
    } else if (examType === 'penyisihan') {
      participant.penyisihanCompleted = true;
      participant.penyisihanScore = score;
      participant.penyisihanDate = nowIso;
      // Auto-qualify if score >= 60 (admin can also manually toggle)
      participant.isLolosPenyisihan = score >= 60;
    } else if (examType === 'final') {
      participant.finalCompleted = true;
      participant.finalScore = score;
      participant.finalDate = nowIso;
      if (score >= 90) participant.predikatJuara = 'Medali Emas (Gold Medal)';
      else if (score >= 75) participant.predikatJuara = 'Medali Perak (Silver Medal)';
      else if (score >= 60) participant.predikatJuara = 'Medali Perunggu (Bronze Medal)';
      else participant.predikatJuara = 'Peserta Berprestasi Nasional';
    }

    this.saveParticipant(participant);
    return participant;
  },

  // ================= QUESTIONS BANK =================
  getQuestions(): Question[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Error reading questions', e);
    }
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(DEFAULT_QUESTIONS));
    return DEFAULT_QUESTIONS;
  },

  saveQuestions(questions: Question[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
    } catch (e) {
      console.warn('Error saving questions', e);
    }
  },

  deleteQuestion(id: string): void {
    const list = this.getQuestions().filter((q) => q.id !== id);
    this.saveQuestions(list);
  },

  deleteBulkQuestions(ids: string[]): void {
    const idSet = new Set(ids);
    const list = this.getQuestions().filter((q) => !idSet.has(q.id));
    this.saveQuestions(list);
  },

  /**
   * Get 20 randomized questions for given Category and Subject
   */
  getRandomizedQuestions(category: CategoryId, subject: SubjectId): Question[] {
    const all = this.getQuestions();
    const matching = all.filter((q) => q.category === category && q.subject === subject);
    
    // Fisher-Yates Shuffle
    const pool = [...(matching.length > 0 ? matching : all)];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Take up to 20
    const selected = pool.slice(0, 20);

    // If pool has fewer than 20, duplicate/pad to ensure exactly 20 questions
    while (selected.length < 20 && selected.length > 0) {
      const clone = { ...selected[selected.length % selected.length] };
      clone.id = `${clone.id}-copy-${selected.length}`;
      selected.push(clone);
    }

    return selected;
  },

  // ================= WHATSAPP LINK GENERATOR =================
  getWhatsAppLinks(adminPhone: string = APP_CONFIG.contact.whatsapp) {
    const cleanPhone = adminPhone.replace(/[^0-9]/g, '');

    return {
      registrationConfirm(p: Participant): string {
        const text = `Halo Admin Olimpiade Nasional Indonesia (ONI), saya ingin konfirmasi pendaftaran ujian:%0A%0A*Nama Peserta:* ${encodeURIComponent(p.namaLengkap)}%0A*No Peserta:* ${p.id}%0A*Kategori:* ${p.kategori}%0A*Mapel:* ${encodeURIComponent(p.mapel.toUpperCase())}%0A*Sekolah:* ${encodeURIComponent(p.sekolah)}%0A*Nama Orang Tua:* ${encodeURIComponent(p.namaOrangTua)}%0A%0ASaya siap mengikuti sosmed ONI dan memulai simulasi ujian. Mohon arahannya. Terima kasih!`;
        return `https://wa.me/${cleanPhone}?text=${text}`;
      },

      reminderSimulasi(p: Participant): string {
        const text = `Halo Kak ${encodeURIComponent(p.namaOrangTua)} (Wali dari ${encodeURIComponent(p.namaLengkap)} - No: ${p.id}),%0A%0AKami dari Panitia *Olimpiade Nasional Indonesia (ONI)* mengingatkan bahwa ananda tercatat *belum mengerjakan Simulasi Ujian*.%0A%0ASimulasi sangat penting agar ananda terbiasa dengan sistem soal CBT sebelum Babak Penyisihan dimulai. Simulasi bersifat GRATIS dan mandiri.%0A%0AAkses simulasi sekarang melalui website ONI. Semangat berprestasi!`;
        return `https://wa.me/${p.whatsappOrtu.replace(/[^0-9]/g, '')}?text=${text}`;
      },

      reminderPenyisihan(p: Participant): string {
        const text = `PENTING: Halo Ayah/Bunda ${encodeURIComponent(p.namaOrangTua)} (Wali dari ${encodeURIComponent(p.namaLengkap)}),%0A%0ABabak Penyisihan *Olimpiade Nasional Indonesia (ONI)* untuk Mata Pelajaran ${encodeURIComponent(p.mapel.toUpperCase())} sedang berlangsung!%0A%0ASistem mendeteksi ananda *belum menyelesaikan Babak Penyisihan*. Segera login dengan Nomor Peserta: *${p.id}* dan selesaikan 20 soal ujian hari ini sebelum portal ditutup. Terima kasih!`;
        return `https://wa.me/${p.whatsappOrtu.replace(/[^0-9]/g, '')}?text=${text}`;
      },

      paymentConfirmBCA(p: Participant): string {
        const text = `Halo Admin ONI, saya ingin konfirmasi pembayaran *Tiket Babak Final*:%0A%0A*Nama Anak:* ${encodeURIComponent(p.namaLengkap)}%0A*No Peserta:* ${p.id}%0A*Mapel:* ${encodeURIComponent(p.mapel.toUpperCase())}%0A*Kategori:* ${p.kategori}%0A*Sekolah:* ${encodeURIComponent(p.sekolah)}%0A*Jumlah Transfer:* Rp 99.000 (Promo BCA 3843-136-911 a.n SRI PRIHATININGSIH SH)%0A%0ABukti transfer telah saya lampirkan. Mohon verifikasi tiket final ananda. Terima kasih!`;
        return `https://wa.me/${cleanPhone}?text=${text}`;
      },

      reminderFinal(p: Participant): string {
        const text = `Halo Juara! Kak ${encodeURIComponent(p.namaLengkap)} & Wali ${encodeURIComponent(p.namaOrangTua)},%0A%0ATiket Final ananda di *Olimpiade Nasional Indonesia (ONI)* telah TERVERIFIKASI! Babak Grand Final telah dibuka.%0A%0ASilakan akses portal dan kerjakan soal Babak Final sekarang untuk penentuan Medali Emas, Perak, Perunggu, dan Piagam Penghargaan Nasional. Sukses selalu!`;
        return `https://wa.me/${p.whatsappOrtu.replace(/[^0-9]/g, '')}?text=${text}`;
      },
    };
  },
};
