import React, { useState, useEffect } from 'react';
import { Participant, Question, AdminSettings, CategoryId, SubjectId } from '../types';
import { StorageService } from '../services/storage';
import { APP_CONFIG } from '../../appConfig';
import { LogoONI } from './OfficialLogos';
import {
  Users,
  Settings,
  BookOpen,
  FileSpreadsheet,
  Award,
  Search,
  Filter,
  Trash2,
  Edit2,
  Plus,
  MessageCircle,
  Download,
  Upload,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  LogOut,
  Sparkles,
  Calendar,
  Layers,
  Code
} from 'lucide-react';

interface AdminDashboardProps {
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<
    'peserta' | 'laporan-simulasi' | 'laporan-penyisihan' | 'laporan-final' | 'bank-soal' | 'pengaturan'
  >('peserta');

  // State
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [settings, setSettings] = useState<AdminSettings>(StorageService.getSettings());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterSubject, setFilterSubject] = useState<string>('all');
  const [filterStartDate, setFilterStartDate] = useState<string>('');
  const [filterEndDate, setFilterEndDate] = useState<string>('');

  // Bulk Questions Selection
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<string[]>([]);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [newQuestion, setNewQuestion] = useState<Partial<Question>>({
    category: 'A',
    subject: 'matematika',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    points: 5,
    explanation: '',
  });

  // Load data
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    setParticipants(StorageService.getParticipants());
    setQuestions(StorageService.getQuestions());
    setSettings(StorageService.getSettings());
  };

  // ================= PARTICIPANT ACTIONS =================
  const handleDeleteParticipant = (id: string, name: string) => {
    if (confirm(`Yakin ingin menghapus data peserta "${name}" (${id})?`)) {
      StorageService.deleteParticipant(id);
      refreshData();
    }
  };

  const handleToggleLolosPenyisihan = (p: Participant) => {
    p.isLolosPenyisihan = !p.isLolosPenyisihan;
    StorageService.saveParticipant(p);
    refreshData();
  };

  const handleToggleBayarFinal = (p: Participant) => {
    p.sudahBayarTiketFinal = !p.sudahBayarTiketFinal;
    if (p.sudahBayarTiketFinal) {
      p.tanggalBayarTiketFinal = new Date().toISOString();
      p.buktiBayarRef = 'ADMIN-VERIFIED-' + Math.floor(1000 + Math.random() * 9000);
    }
    StorageService.saveParticipant(p);
    refreshData();
  };

  // ================= SETTINGS ACTIONS =================
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    StorageService.saveSettings(settings);
    alert('Pengaturan sistem, Meta Pixel, tanggal pelaksanaan, dan anti-contek berhasil disimpan!');
    refreshData();
  };

  // ================= QUESTIONS ACTIONS =================
  const handleDeleteSingleQuestion = (id: string) => {
    if (confirm('Hapus soal ini?')) {
      StorageService.deleteQuestion(id);
      refreshData();
    }
  };

  const handleBulkDeleteQuestions = () => {
    if (selectedQuestionIds.length === 0) return;
    if (confirm(`Hapus ${selectedQuestionIds.length} soal terpilih secara massal?`)) {
      StorageService.deleteBulkQuestions(selectedQuestionIds);
      setSelectedQuestionIds([]);
      refreshData();
    }
  };

  const handleBulkUpdatePoints = (points: number) => {
    if (selectedQuestionIds.length === 0) return;
    const set = new Set(selectedQuestionIds);
    const updated = questions.map((q) => (set.has(q.id) ? { ...q, points } : q));
    StorageService.saveQuestions(updated);
    alert(`Bobot ${selectedQuestionIds.length} soal terpilih diubah menjadi ${points} poin.`);
    refreshData();
  };

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingQuestion) {
      const updated = questions.map((q) => (q.id === editingQuestion.id ? editingQuestion : q));
      StorageService.saveQuestions(updated);
      setEditingQuestion(null);
    } else if (isAddingQuestion && newQuestion.question) {
      const created: Question = {
        id: `${newQuestion.category}-${newQuestion.subject?.substring(0, 3).toUpperCase()}-${Date.now().toString().slice(-4)}`,
        category: (newQuestion.category as CategoryId) || 'A',
        subject: (newQuestion.subject as SubjectId) || 'matematika',
        question: newQuestion.question,
        options: (newQuestion.options as [string, string, string, string]) || ['', '', '', ''],
        correctAnswer: (newQuestion.correctAnswer as 0 | 1 | 2 | 3) || 0,
        points: newQuestion.points || 5,
        explanation: newQuestion.explanation || '',
      };
      StorageService.saveQuestions([created, ...questions]);
      setIsAddingQuestion(false);
      setNewQuestion({
        category: 'A',
        subject: 'matematika',
        question: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
        points: 5,
        explanation: '',
      });
    }
    refreshData();
  };

  // Export questions to CSV
  const handleExportQuestionsCSV = () => {
    const headers = ['ID', 'Kategori', 'Mapel', 'Soal', 'Opsi A', 'Opsi B', 'Opsi C', 'Opsi D', 'Kunci (0-3)', 'Poin'];
    const rows = questions.map((q) => [
      q.id,
      q.category,
      q.subject,
      `"${q.question.replace(/"/g, '""')}"`,
      `"${q.options[0].replace(/"/g, '""')}"`,
      `"${q.options[1].replace(/"/g, '""')}"`,
      `"${q.options[2].replace(/"/g, '""')}"`,
      `"${q.options[3].replace(/"/g, '""')}"`,
      q.correctAnswer,
      q.points,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Bank_Soal_ONI_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Import questions from JSON / CSV simulation
  const handleImportQuestions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const text = evt.target?.result as string;
        // Check if JSON
        if (file.name.endsWith('.json')) {
          const parsed = JSON.parse(text);
          if (Array.isArray(parsed)) {
            StorageService.saveQuestions(parsed);
            alert(`Berhasil import ${parsed.length} soal dari file JSON!`);
            refreshData();
            return;
          }
        }
        alert('File berhasil dibaca. Pastikan format JSON/CSV valid.');
      } catch (err) {
        alert('Gagal memproses file. Pastikan format data benar.');
      }
    };
    reader.readAsText(file);
  };

  // Filter participants
  const filteredParticipants = participants.filter((p) => {
    const matchSearch =
      searchTerm === '' ||
      p.namaLengkap.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sekolah.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.namaOrangTua.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCategory = filterCategory === 'all' || p.kategori === filterCategory;
    const matchSubject = filterSubject === 'all' || p.mapel === filterSubject;

    let matchDate = true;
    if (filterStartDate) {
      matchDate = matchDate && new Date(p.tanggalDaftar) >= new Date(filterStartDate);
    }
    if (filterEndDate) {
      const end = new Date(filterEndDate);
      end.setHours(23, 59, 59, 999);
      matchDate = matchDate && new Date(p.tanggalDaftar) <= end;
    }

    return matchSearch && matchCategory && matchSubject && matchDate;
  });

  const waHelper = StorageService.getWhatsAppLinks(settings.adminWhatsapp);

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col font-sans">
      {/* Admin Top Navigation */}
      <header className="bg-slate-900 text-white border-b border-slate-800 px-4 sm:px-6 py-3.5 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LogoONI size="sm" showText={false} />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono font-bold px-2 py-0.5 rounded bg-rose-600 text-white">
                  ADMINISTRATOR
                </span>
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
                  Dashboard Pusat Olimpiade Nasional Indonesia
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                Penyelenggara Resmi: {APP_CONFIG.supportedBy.shortName}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Keluar Dashboard</span>
          </button>
        </div>
      </header>

      {/* Admin Tabs */}
      <div className="bg-white border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 overflow-x-auto py-2.5">
          <button
            onClick={() => setActiveTab('peserta')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'peserta'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Database Peserta Lengkap ({participants.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('laporan-simulasi')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'laporan-simulasi'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Laporan Simulasi ({participants.filter((p) => p.simulasiCompleted).length})</span>
          </button>

          <button
            onClick={() => setActiveTab('laporan-penyisihan')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'laporan-penyisihan'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Laporan Babak Penyisihan ({participants.filter((p) => p.penyisihanCompleted).length})</span>
          </button>

          <button
            onClick={() => setActiveTab('laporan-final')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'laporan-final'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Award className="w-4 h-4 text-amber-500" />
            <span>Laporan Babak Final ({participants.filter((p) => p.finalCompleted).length})</span>
          </button>

          <button
            onClick={() => setActiveTab('bank-soal')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'bank-soal'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Bank Soal ({questions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('pengaturan')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'pengaturan'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Pengaturan & Meta Pixel</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto p-4 sm:p-6 flex-1">
        {/* ================= TAB 1: DATABASE PESERTA LENGKAP ================= */}
        {activeTab === 'peserta' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {/* Search Keyword */}
                <div className="lg:col-span-2 relative">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Cari Nama, No Peserta, Sekolah, Ortu..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                </div>

                {/* Filter Kategori */}
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-stone-300 text-xs font-semibold focus:ring-2 focus:ring-rose-500"
                >
                  <option value="all">Semua Kategori</option>
                  <option value="A">Kategori A (SD 1-3)</option>
                  <option value="B">Kategori B (SD 4-6)</option>
                  <option value="C">Kategori C (SMP/SMA)</option>
                </select>

                {/* Filter Mapel */}
                <select
                  value={filterSubject}
                  onChange={(e) => setFilterSubject(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-stone-300 text-xs font-semibold focus:ring-2 focus:ring-rose-500"
                >
                  <option value="all">Semua Mata Pelajaran</option>
                  <option value="matematika">Matematika</option>
                  <option value="ipa-sains">IPA / Sains</option>
                  <option value="bahasa-inggris">Bahasa Inggris</option>
                  <option value="bahasa-indonesia">Bahasa Indonesia</option>
                </select>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilterCategory('all');
                    setFilterSubject('all');
                    setFilterStartDate('');
                    setFilterEndDate('');
                  }}
                  className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Reset Filter
                </button>
              </div>

              {/* Filter Tanggal Pendaftaran (Item #18) */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-stone-100 text-xs text-stone-600">
                <span className="font-bold flex items-center gap-1 text-stone-800">
                  <Calendar className="w-3.5 h-3.5 text-rose-600" />
                  Filter Tanggal Pendaftaran:
                </span>
                <div className="flex items-center gap-2">
                  <span>Dari:</span>
                  <input
                    type="date"
                    value={filterStartDate}
                    onChange={(e) => setFilterStartDate(e.target.value)}
                    className="px-2.5 py-1 rounded-lg border border-stone-300 text-xs"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span>Sampai:</span>
                  <input
                    type="date"
                    value={filterEndDate}
                    onChange={(e) => setFilterEndDate(e.target.value)}
                    className="px-2.5 py-1 rounded-lg border border-stone-300 text-xs"
                  />
                </div>
                <span className="ml-auto font-semibold text-rose-600">
                  Menampilkan: {filteredParticipants.length} siswa
                </span>
              </div>
            </div>

            {/* Table Database Peserta Lengkap (Item #13) */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-stone-900 text-white uppercase text-[11px] font-bold tracking-wider">
                    <tr>
                      <th className="p-3.5">No</th>
                      <th className="p-3.5">No Peserta</th>
                      <th className="p-3.5">Nama Siswa</th>
                      <th className="p-3.5">Jenjang / Mapel</th>
                      <th className="p-3.5">Sekolah / Kelas</th>
                      <th className="p-3.5">Orang Tua & WA</th>
                      <th className="p-3.5 text-center">Status Simulasi</th>
                      <th className="p-3.5 text-center">Penyisihan & Lolos</th>
                      <th className="p-3.5 text-center">Tiket Final (Closing)</th>
                      <th className="p-3.5 text-center">Babak Final</th>
                      <th className="p-3.5 text-center">Aksi / Follow Up WA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    {filteredParticipants.length === 0 ? (
                      <tr>
                        <td colSpan={11} className="p-8 text-center text-stone-500">
                          Tidak ada data peserta yang cocok dengan filter.
                        </td>
                      </tr>
                    ) : (
                      filteredParticipants.map((p, idx) => (
                        <tr key={p.id} className="hover:bg-stone-50 transition-colors">
                          <td className="p-3.5 font-bold text-stone-500">{idx + 1}</td>
                          <td className="p-3.5 font-mono font-black text-stone-900 whitespace-nowrap">
                            {p.id}
                            <span className="block text-[10px] text-stone-400 font-sans font-normal">
                              {new Date(p.tanggalDaftar).toLocaleDateString('id-ID')}
                            </span>
                          </td>
                          <td className="p-3.5 font-bold text-stone-900 whitespace-nowrap">
                            {p.namaLengkap}
                            <span className="block text-[10px] text-stone-500 font-normal">
                              {p.email} • {p.kotaKabupaten}
                            </span>
                          </td>
                          <td className="p-3.5 whitespace-nowrap">
                            <span className="inline-block px-2 py-0.5 rounded font-extrabold text-[10px] bg-rose-100 text-rose-800 uppercase mr-1">
                              Kat {p.kategori}
                            </span>
                            <span className="font-semibold text-stone-800 capitalize">
                              {p.mapel}
                            </span>
                          </td>
                          <td className="p-3.5 whitespace-nowrap">
                            <span className="font-medium text-stone-800">{p.sekolah}</span>
                            <span className="block text-[10px] text-stone-500">Kelas {p.kelas}</span>
                          </td>
                          <td className="p-3.5 whitespace-nowrap">
                            <span className="font-bold text-stone-900">{p.namaOrangTua}</span>
                            <a
                              href={`https://wa.me/${p.whatsappOrtu}`}
                              target="_blank"
                              rel="noreferrer"
                              className="block text-[11px] text-emerald-600 hover:underline font-mono"
                            >
                              +{p.whatsappOrtu}
                            </a>
                          </td>

                          {/* Status Simulasi */}
                          <td className="p-3.5 text-center whitespace-nowrap">
                            {p.simulasiCompleted ? (
                              <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                                Skor: {p.simulasiScore}
                              </span>
                            ) : (
                              <span className="px-2 py-1 rounded-full bg-stone-100 text-stone-500 text-[10px]">
                                Belum
                              </span>
                            )}
                          </td>

                          {/* Status Penyisihan & Lolos */}
                          <td className="p-3.5 text-center whitespace-nowrap">
                            {p.penyisihanCompleted ? (
                              <div>
                                <span className="font-bold text-stone-900 block text-xs">
                                  Skor: {p.penyisihanScore}
                                </span>
                                <button
                                  onClick={() => handleToggleLolosPenyisihan(p)}
                                  className={`mt-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-colors cursor-pointer ${
                                    p.isLolosPenyisihan
                                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                                  }`}
                                >
                                  {p.isLolosPenyisihan ? 'LOLOS FINAL' : 'TIDAK LOLOS'}
                                </button>
                              </div>
                            ) : (
                              <span className="text-[10px] text-stone-400">Belum Ujian</span>
                            )}
                          </td>

                          {/* Status Bayar Tiket Final (Closing) */}
                          <td className="p-3.5 text-center whitespace-nowrap">
                            <button
                              onClick={() => handleToggleBayarFinal(p)}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-black cursor-pointer transition-all ${
                                p.sudahBayarTiketFinal
                                  ? 'bg-amber-400 text-amber-950 border border-amber-500 shadow-xs'
                                  : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                              }`}
                            >
                              {p.sudahBayarTiketFinal ? 'TIKET FINAL LUNAS' : 'Belum Bayar'}
                            </button>
                            {p.buktiBayarRef && (
                              <span className="block text-[9px] text-stone-400 font-mono mt-0.5">
                                {p.buktiBayarRef}
                              </span>
                            )}
                          </td>

                          {/* Status Babak Final */}
                          <td className="p-3.5 text-center whitespace-nowrap">
                            {p.finalCompleted ? (
                              <div>
                                <span className="font-black text-rose-700 text-xs block">
                                  Skor: {p.finalScore}
                                </span>
                                <span className="text-[9px] font-bold text-amber-700 block">
                                  {p.predikatJuara || 'Selesai'}
                                </span>
                              </div>
                            ) : (
                              <span className="text-[10px] text-stone-400">Belum Ujian</span>
                            )}
                          </td>

                          {/* Aksi & WA Follow Up */}
                          <td className="p-3.5 text-center whitespace-nowrap">
                            <div className="flex items-center justify-center gap-1.5">
                              {/* Dynamic Follow-up button */}
                              {!p.simulasiCompleted && (
                                <a
                                  href={waHelper.reminderSimulasi(p)}
                                  target="_blank"
                                  rel="noreferrer"
                                  title="Kirim WA: Follow Up Belum Simulasi"
                                  className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                </a>
                              )}

                              {p.simulasiCompleted && !p.penyisihanCompleted && (
                                <a
                                  href={waHelper.reminderPenyisihan(p)}
                                  target="_blank"
                                  rel="noreferrer"
                                  title="Kirim WA: Follow Up Belum Babak Penyisihan"
                                  className="p-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-300"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                </a>
                              )}

                              {p.isLolosPenyisihan && !p.sudahBayarTiketFinal && (
                                <a
                                  href={waHelper.paymentConfirmBCA(p)}
                                  target="_blank"
                                  rel="noreferrer"
                                  title="Kirim WA: Follow Up Pembayaran Tiket Final Promo"
                                  className="p-1.5 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-300"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                </a>
                              )}

                              {p.sudahBayarTiketFinal && !p.finalCompleted && (
                                <a
                                  href={waHelper.reminderFinal(p)}
                                  target="_blank"
                                  rel="noreferrer"
                                  title="Kirim WA: Reminder Kerjakan Babak Final"
                                  className="p-1.5 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-300"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                </a>
                              )}

                              {/* Delete Student Button */}
                              <button
                                onClick={() => handleDeleteParticipant(p.id, p.namaLengkap)}
                                title="Hapus Data Peserta"
                                className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: LAPORAN PENGERJAAN SIMULASI (Item #23) ================= */}
        {activeTab === 'laporan-simulasi' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-extrabold text-stone-900">
                  Tabel Laporan Pengerjaan Simulasi Ujian Mandiri
                </h3>
                <p className="text-xs text-stone-500">
                  Daftar seluruh siswa yang telah menyelesaikan simulasi CBT. Skor langsung tercatat di sini.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-stone-900 text-white uppercase text-[11px] font-bold">
                  <tr>
                    <th className="p-3">No</th>
                    <th className="p-3">No Peserta</th>
                    <th className="p-3">Nama Siswa</th>
                    <th className="p-3">Kategori</th>
                    <th className="p-3">Mapel</th>
                    <th className="p-3">Asal Sekolah</th>
                    <th className="p-3">Waktu Selesai</th>
                    <th className="p-3 text-center">Nilai Simulasi (0-100)</th>
                    <th className="p-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {participants
                    .filter((p) => p.simulasiCompleted)
                    .map((p, idx) => (
                      <tr key={p.id} className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-400">{idx + 1}</td>
                        <td className="p-3 font-mono font-bold">{p.id}</td>
                        <td className="p-3 font-bold text-stone-900">{p.namaLengkap}</td>
                        <td className="p-3 font-semibold">Kategori {p.kategori}</td>
                        <td className="p-3 capitalize">{p.mapel}</td>
                        <td className="p-3">{p.sekolah}</td>
                        <td className="p-3 font-mono text-stone-500">
                          {p.simulasiDate ? new Date(p.simulasiDate).toLocaleString('id-ID') : '-'}
                        </td>
                        <td className="p-3 text-center font-black text-rose-600 text-sm">
                          {p.simulasiScore}
                        </td>
                        <td className="p-3 text-center">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                            LENGKAP
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 3: LAPORAN PENGERJAAN BABAK PENYISIHAN (Item #24) ================= */}
        {activeTab === 'laporan-penyisihan' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-6 space-y-4">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">
                Tabel Laporan Pengerjaan Babak Penyisihan Nasional
              </h3>
              <p className="text-xs text-stone-500">
                Data nilai peserta babak penyisihan resmi yang terverifikasi integritasnya.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-stone-900 text-white uppercase text-[11px] font-bold">
                  <tr>
                    <th className="p-3">No</th>
                    <th className="p-3">No Peserta</th>
                    <th className="p-3">Nama Siswa</th>
                    <th className="p-3">Kategori & Mapel</th>
                    <th className="p-3">Sekolah</th>
                    <th className="p-3">Waktu Submit</th>
                    <th className="p-3 text-center">Nilai Penyisihan</th>
                    <th className="p-3 text-center">Status Kelulusan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {participants
                    .filter((p) => p.penyisihanCompleted)
                    .map((p, idx) => (
                      <tr key={p.id} className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-400">{idx + 1}</td>
                        <td className="p-3 font-mono font-bold">{p.id}</td>
                        <td className="p-3 font-bold text-stone-900">{p.namaLengkap}</td>
                        <td className="p-3">
                          Kat {p.kategori} • <span className="capitalize">{p.mapel}</span>
                        </td>
                        <td className="p-3">{p.sekolah}</td>
                        <td className="p-3 font-mono text-stone-500">
                          {p.penyisihanDate ? new Date(p.penyisihanDate).toLocaleString('id-ID') : '-'}
                        </td>
                        <td className="p-3 text-center font-black text-rose-600 text-sm">
                          {p.penyisihanScore}
                        </td>
                        <td className="p-3 text-center">
                          <span
                            className={`px-2 py-0.5 rounded-full font-extrabold text-[10px] ${
                              p.isLolosPenyisihan
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {p.isLolosPenyisihan ? 'LOLOS KE FINAL' : 'TIDAK LOLOS'}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 4: LAPORAN PENGERJAAN BABAK FINAL (Item #25) ================= */}
        {activeTab === 'laporan-final' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-6 space-y-4">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">
                Tabel Laporan Pengerjaan Babak Grand Final & Pemenang
              </h3>
              <p className="text-xs text-stone-500">
                Data resmi peringkat, nilai akhir babak final, serta predikat medali juara.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-stone-900 text-white uppercase text-[11px] font-bold">
                  <tr>
                    <th className="p-3">No</th>
                    <th className="p-3">No Peserta</th>
                    <th className="p-3">Nama Siswa</th>
                    <th className="p-3">Kategori</th>
                    <th className="p-3">Mapel</th>
                    <th className="p-3">Sekolah</th>
                    <th className="p-3 text-center">Nilai Final</th>
                    <th className="p-3 text-center">Predikat Juara / Medali</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {participants
                    .filter((p) => p.finalCompleted)
                    .map((p, idx) => (
                      <tr key={p.id} className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-400">{idx + 1}</td>
                        <td className="p-3 font-mono font-bold">{p.id}</td>
                        <td className="p-3 font-bold text-stone-900">{p.namaLengkap}</td>
                        <td className="p-3 font-semibold">Kategori {p.kategori}</td>
                        <td className="p-3 capitalize">{p.mapel}</td>
                        <td className="p-3">{p.sekolah}</td>
                        <td className="p-3 text-center font-black text-rose-600 text-sm">
                          {p.finalScore}
                        </td>
                        <td className="p-3 text-center">
                          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-extrabold text-[10px] border border-amber-300">
                            {p.predikatJuara || 'Pemenang Nasional'}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TAB 5: BANK SOAL & MANAJEMEN SOAL (Items #10, 11, 12, 17, 19, 20, 21) ================= */}
        {activeTab === 'bank-soal' && (
          <div className="space-y-6">
            {/* Top Toolbar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setIsAddingQuestion(true)}
                  className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Soal Satuan</span>
                </button>

                <button
                  onClick={handleExportQuestionsCSV}
                  className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-stone-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Excel / CSV</span>
                </button>

                <label className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-stone-300">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Import File Soal</span>
                  <input
                    type="file"
                    accept=".json,.csv"
                    onChange={handleImportQuestions}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Bulk Actions */}
              {selectedQuestionIds.length > 0 && (
                <div className="flex items-center gap-2 bg-amber-50 p-1.5 rounded-xl border border-amber-200">
                  <span className="text-xs font-bold text-amber-900 px-2">
                    {selectedQuestionIds.length} Terpilih:
                  </span>
                  <button
                    onClick={handleBulkDeleteQuestions}
                    className="px-2.5 py-1 rounded-lg bg-red-600 text-white text-xs font-bold hover:bg-red-700 cursor-pointer"
                  >
                    Hapus Massal
                  </button>
                  <button
                    onClick={() => handleBulkUpdatePoints(5)}
                    className="px-2.5 py-1 rounded-lg bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 cursor-pointer"
                  >
                    Set 5 Poin
                  </button>
                </div>
              )}
            </div>

            {/* Questions List */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
              <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={
                      selectedQuestionIds.length === questions.length && questions.length > 0
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedQuestionIds(questions.map((q) => q.id));
                      } else {
                        setSelectedQuestionIds([]);
                      }
                    }}
                    className="w-4 h-4 accent-rose-600 rounded cursor-pointer"
                  />
                  <span className="font-bold">Pilih Semua ({questions.length} Soal)</span>
                </div>
                <span>*Setiap peserta menerima 20 soal acak dari bank soal ini.</span>
              </div>

              <div className="divide-y divide-stone-200">
                {questions.map((q, qIndex) => {
                  const isChecked = selectedQuestionIds.includes(q.id);
                  return (
                    <div key={q.id} className="p-4 sm:p-5 hover:bg-stone-50/70 transition-colors">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedQuestionIds([...selectedQuestionIds, q.id]);
                              } else {
                                setSelectedQuestionIds(
                                  selectedQuestionIds.filter((id) => id !== q.id)
                                );
                              }
                            }}
                            className="w-4 h-4 accent-rose-600 rounded cursor-pointer mt-1"
                          />
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                              <span className="font-mono text-xs font-bold text-stone-400">
                                #{qIndex + 1}
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">
                                Kat {q.category}
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 capitalize">
                                {q.subject}
                              </span>
                              <span className="text-xs font-bold text-stone-600">
                                {q.points} Poin
                              </span>
                            </div>
                            <p className="text-sm font-bold text-stone-900 leading-snug">
                              {q.question}
                            </p>

                            {/* Options Display */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                              {q.options.map((opt, optI) => (
                                <div
                                  key={optI}
                                  className={`p-2 rounded-lg border text-stone-800 ${
                                    optI === q.correctAnswer
                                      ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-900'
                                      : 'bg-stone-50 border-stone-200'
                                  }`}
                                >
                                  <span className="font-bold mr-1.5">
                                    {String.fromCharCode(65 + optI)}.
                                  </span>
                                  {opt}
                                  {optI === q.correctAnswer && (
                                    <span className="ml-2 text-[10px] text-emerald-700 font-extrabold uppercase">
                                      (Kunci Jawaban)
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Single Actions */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => setEditingQuestion(q)}
                            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 cursor-pointer"
                            title="Edit Soal"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteSingleQuestion(q.id)}
                            className="p-1.5 text-rose-600 hover:text-rose-800 rounded-lg hover:bg-rose-50 cursor-pointer"
                            title="Hapus Soal Satuan"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 6: PENGATURAN & META PIXEL (Items #1, 15, 16) ================= */}
        {activeTab === 'pengaturan' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-6 max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-lg font-extrabold text-stone-900">
                Pengaturan Sistem, Meta Pixel & Jadwal Pelaksanaan
              </h3>
              <p className="text-xs text-stone-500">
                Konfigurasikan pelacakan iklan Meta, toggle kejujuran anti-contek, dan tanggal jadwal olimpiade.
              </p>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-6">
              {/* Meta Pixel Settings (Item #1) */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-600" />
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-800">
                    Konfigurasi Meta Pixel (Facebook / Instagram Ads)
                  </h4>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Meta Pixel ID (Contoh: 123456789012345):
                  </label>
                  <input
                    type="text"
                    value={settings.metaPixelId}
                    onChange={(e) =>
                      setSettings({ ...settings, metaPixelId: e.target.value.trim() })
                    }
                    placeholder="Masukkan Pixel ID Meta..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Kode HTML Tambahan Meta Pixel Script (Opsional):
                  </label>
                  <textarea
                    rows={3}
                    value={settings.metaPixelHtml}
                    onChange={(e) =>
                      setSettings({ ...settings, metaPixelHtml: e.target.value })
                    }
                    placeholder="<script>...</script>"
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs font-mono focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              {/* Anti Contek Switch (Item #16) */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-amber-950 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    Fitur Anti-Contek & Proteksi Layar Ujian
                  </h4>
                  <p className="text-xs text-amber-800 mt-0.5">
                    Mendeteksi perpindahan tab, blokir copy-paste, dan kunci layar selama ujian.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.antiContekEnabled}
                    onChange={(e) =>
                      setSettings({ ...settings, antiContekEnabled: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600" />
                </label>
              </div>

              {/* Jadwal Pelaksanaan (Item #15) */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-rose-600" />
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-800">
                    Jadwal Pelaksanaan Olimpiade Nasional
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Batas Akhir Pendaftaran:
                    </label>
                    <input
                      type="date"
                      value={settings.tanggalPendaftaran}
                      onChange={(e) =>
                        setSettings({ ...settings, tanggalPendaftaran: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Tanggal Pelaksanaan Simulasi:
                    </label>
                    <input
                      type="date"
                      value={settings.tanggalSimulasi}
                      onChange={(e) =>
                        setSettings({ ...settings, tanggalSimulasi: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Tanggal Babak Penyisihan:
                    </label>
                    <input
                      type="date"
                      value={settings.tanggalPenyisihan}
                      onChange={(e) =>
                        setSettings({ ...settings, tanggalPenyisihan: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Tanggal Pengumuman Kelulusan (H+2):
                    </label>
                    <input
                      type="date"
                      value={settings.tanggalPengumuman}
                      onChange={(e) =>
                        setSettings({ ...settings, tanggalPengumuman: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Tanggal Babak Grand Final:
                    </label>
                    <input
                      type="date"
                      value={settings.tanggalFinal}
                      onChange={(e) =>
                        setSettings({ ...settings, tanggalFinal: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Admin WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Nomor WhatsApp Hotline Admin:
                </label>
                <input
                  type="text"
                  value={settings.adminWhatsapp}
                  onChange={(e) =>
                    setSettings({ ...settings, adminWhatsapp: e.target.value.trim() })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-md transition-colors cursor-pointer"
              >
                Simpan Seluruh Pengaturan Sistem
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Add / Edit Question Modal */}
      {(isAddingQuestion || editingQuestion) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-extrabold text-stone-900 mb-4">
              {editingQuestion ? 'Edit Soal' : 'Tambah Soal Baru'}
            </h3>

            <form onSubmit={handleSaveQuestion} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 uppercase mb-1">Kategori:</label>
                  <select
                    value={editingQuestion ? editingQuestion.category : newQuestion.category}
                    onChange={(e) => {
                      const val = e.target.value as CategoryId;
                      if (editingQuestion) setEditingQuestion({ ...editingQuestion, category: val });
                      else setNewQuestion({ ...newQuestion, category: val });
                    }}
                    className="w-full p-2 rounded-xl border border-stone-300 font-semibold"
                  >
                    <option value="A">Kategori A</option>
                    <option value="B">Kategori B</option>
                    <option value="C">Kategori C</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 uppercase mb-1">Mata Pelajaran:</label>
                  <select
                    value={editingQuestion ? editingQuestion.subject : newQuestion.subject}
                    onChange={(e) => {
                      const val = e.target.value as SubjectId;
                      if (editingQuestion) setEditingQuestion({ ...editingQuestion, subject: val });
                      else setNewQuestion({ ...newQuestion, subject: val });
                    }}
                    className="w-full p-2 rounded-xl border border-stone-300 font-semibold"
                  >
                    <option value="matematika">Matematika</option>
                    <option value="ipa-sains">IPA / Sains</option>
                    <option value="bahasa-inggris">Bahasa Inggris</option>
                    <option value="bahasa-indonesia">Bahasa Indonesia</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 uppercase mb-1">Teks Pertanyaan / Soal:</label>
                <textarea
                  rows={3}
                  required
                  value={editingQuestion ? editingQuestion.question : newQuestion.question}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (editingQuestion) setEditingQuestion({ ...editingQuestion, question: val });
                    else setNewQuestion({ ...newQuestion, question: val });
                  }}
                  className="w-full p-2.5 rounded-xl border border-stone-300 text-xs"
                />
              </div>

              {/* 4 Options */}
              <div className="space-y-2">
                <label className="block font-bold text-stone-700 uppercase">Pilihan Jawaban (A, B, C, D):</label>
                {[0, 1, 2, 3].map((optIdx) => {
                  const currentOpts = editingQuestion ? editingQuestion.options : (newQuestion.options as string[]) || ['', '', '', ''];
                  return (
                    <div key={optIdx} className="flex items-center gap-2">
                      <span className="w-6 font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                      <input
                        type="text"
                        required
                        value={currentOpts[optIdx] || ''}
                        onChange={(e) => {
                          const updated = [...currentOpts];
                          updated[optIdx] = e.target.value;
                          if (editingQuestion) setEditingQuestion({ ...editingQuestion, options: updated as any });
                          else setNewQuestion({ ...newQuestion, options: updated as any });
                        }}
                        className="flex-1 p-2 rounded-xl border border-stone-300"
                        placeholder={`Pilihan ${String.fromCharCode(65 + optIdx)}`}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block font-bold text-stone-700 uppercase mb-1">Kunci Jawaban Benar:</label>
                  <select
                    value={editingQuestion ? editingQuestion.correctAnswer : newQuestion.correctAnswer}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) as 0 | 1 | 2 | 3;
                      if (editingQuestion) setEditingQuestion({ ...editingQuestion, correctAnswer: val });
                      else setNewQuestion({ ...newQuestion, correctAnswer: val });
                    }}
                    className="w-full p-2 rounded-xl border border-stone-300 font-bold"
                  >
                    <option value={0}>A</option>
                    <option value={1}>B</option>
                    <option value={2}>C</option>
                    <option value={3}>D</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 uppercase mb-1">Bobot Poin:</label>
                  <input
                    type="number"
                    value={editingQuestion ? editingQuestion.points : newQuestion.points}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 5;
                      if (editingQuestion) setEditingQuestion({ ...editingQuestion, points: val });
                      else setNewQuestion({ ...newQuestion, points: val });
                    }}
                    className="w-full p-2 rounded-xl border border-stone-300 font-bold"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingQuestion(false);
                    setEditingQuestion(null);
                  }}
                  className="px-4 py-2 rounded-xl border border-stone-300 text-stone-700 font-bold hover:bg-stone-100 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold cursor-pointer"
                >
                  Simpan Soal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
