import React, { useState } from 'react';
import { Participant, CategoryId, SubjectId } from '../types';
import { StorageService } from '../services/storage';
import { APP_CONFIG } from '../../appConfig';
import { CheckCircle2, ShieldCheck, Sparkles, Send, User, School, Phone, Mail, MapPin, Award } from 'lucide-react';

interface RegistrationFormProps {
  onSuccessRegister: (participant: Participant) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccessRegister }) => {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    kategori: 'A' as CategoryId,
    mapel: 'matematika' as SubjectId,
    sekolah: '',
    kelas: '3',
    namaOrangTua: '',
    whatsappOrtu: '',
    email: '',
    provinsi: '',
    kotaKabupaten: '',
    sumberInfo: 'Iklan Meta (Instagram/Facebook)',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!formData.namaLengkap.trim()) {
      setErrorMsg('Nama lengkap siswa wajib diisi.');
      return;
    }
    if (!formData.sekolah.trim()) {
      setErrorMsg('Asal sekolah wajib diisi.');
      return;
    }
    if (!formData.namaOrangTua.trim()) {
      setErrorMsg('Nama orang tua atau wali murid wajib diisi.');
      return;
    }
    if (!formData.whatsappOrtu.trim() || formData.whatsappOrtu.length < 9) {
      setErrorMsg('Nomor WhatsApp aktif wajib diisi dengan benar.');
      return;
    }

    setLoading(true);

    // Format phone to 62...
    let cleanPhone = formData.whatsappOrtu.trim().replace(/[^0-9]/g, '');
    if (cleanPhone.startsWith('0')) {
      cleanPhone = '62' + cleanPhone.slice(1);
    } else if (!cleanPhone.startsWith('62')) {
      cleanPhone = '62' + cleanPhone;
    }

    const newId = StorageService.generateParticipantId(formData.kategori);

    const newParticipant: Participant = {
      id: newId,
      namaLengkap: formData.namaLengkap.trim(),
      kategori: formData.kategori,
      mapel: formData.mapel,
      sekolah: formData.sekolah.trim(),
      kelas: formData.kelas,
      namaOrangTua: formData.namaOrangTua.trim(),
      whatsappOrtu: cleanPhone,
      email: formData.email.trim() || `${cleanPhone}@peserta.oni.id`,
      provinsi: formData.provinsi.trim() || 'Indonesia',
      kotaKabupaten: formData.kotaKabupaten.trim() || 'Nusantara',
      sumberInfo: formData.sumberInfo,
      tanggalDaftar: new Date().toISOString(),
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
    };

    // Save to storage
    StorageService.saveParticipant(newParticipant);
    StorageService.setCurrentUserId(newParticipant.id);

    setTimeout(() => {
      setLoading(false);
      onSuccessRegister(newParticipant);
    }, 400);
  };

  return (
    <section id="pendaftaran" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading with Focus Badge */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            FOKUS UTAMA PENDAFTARAN RESMI PESERTA
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Formulir Pendaftaran Mandiri Siswa
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            Pendaftaran Babak Penyisihan <strong>100% Bebas Biaya (GRATIS)</strong>. Lengkapi data di bawah ini untuk mendapatkan Nomor Peserta resmi dan membuka akses ujian.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-[#FAF8F5] border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 via-amber-500 to-blue-600" />

          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Bagian 1: Data Siswa & Kategori */}
            <div>
              <h3 className="text-sm font-extrabold text-stone-800 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
                <User className="w-4 h-4 text-rose-600" />
                1. Data Calon Peserta & Kategori Lomba
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                    Nama Lengkap Siswa <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaLengkap"
                    required
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    placeholder="Contoh: Muhammad Rayhan Akbar"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm font-medium transition-all"
                  />
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    *Nama ini akan dicetak secara permanen pada E-Sertifikat dan Piagam Kejuaraan.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                    Pilih Kategori Jenjang <span className="text-rose-600">*</span>
                  </label>
                  <select
                    name="kategori"
                    value={formData.kategori}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm font-semibold"
                  >
                    <option value="A">Kategori A (SD/MI Kelas 1 - 3)</option>
                    <option value="B">Kategori B (SD/MI Kelas 4 - 6)</option>
                    <option value="C">Kategori C (SMP/MTs & SMA/SMK)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                    Mata Pelajaran (Mapel) <span className="text-rose-600">*</span>
                  </label>
                  <select
                    name="mapel"
                    value={formData.mapel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm font-semibold"
                  >
                    <option value="matematika">Matematika</option>
                    <option value="ipa-sains">IPA / Sains</option>
                    <option value="bahasa-inggris">Bahasa Inggris</option>
                    <option value="bahasa-indonesia">Bahasa Indonesia</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Bagian 2: Sekolah & Kelas */}
            <div>
              <h3 className="text-sm font-extrabold text-stone-800 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
                <School className="w-4 h-4 text-blue-600" />
                2. Data Asal Sekolah & Tingkat Kelas
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                    Asal Sekolah / Madrasah <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="sekolah"
                    required
                    value={formData.sekolah}
                    onChange={handleChange}
                    placeholder="Contoh: SD Negeri Menteng 01"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                    Kelas Saat Ini <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="kelas"
                    required
                    value={formData.kelas}
                    onChange={handleChange}
                    placeholder="Contoh: Kelas 3 / Kelas 8"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Bagian 3: Data Orang Tua / Wali (Lengkap untuk DB Admin) */}
            <div>
              <h3 className="text-sm font-extrabold text-stone-800 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                3. Kontak Orang Tua / Wali Murid
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                    Nama Orang Tua / Wali <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaOrangTua"
                    required
                    value={formData.namaOrangTua}
                    onChange={handleChange}
                    placeholder="Contoh: Bapak Hendra Kusuma"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                    No. WhatsApp Aktif (Ortu/Siswa) <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappOrtu"
                    required
                    value={formData.whatsappOrtu}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm font-medium"
                  />
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    *Penting untuk menerima link konfirmasi, reminder ujian & pengumuman lolos.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                    Email Aktif
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Contoh: orangtua@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                    Provinsi & Kota / Kabupaten
                  </label>
                  <input
                    type="text"
                    name="kotaKabupaten"
                    value={formData.kotaKabupaten}
                    onChange={handleChange}
                    placeholder="Contoh: Surabaya, Jawa Timur"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Bagian 4: Sumber Informasi */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                Mengetahui Info Olimpiade Ini Dari Mana?
              </label>
              <select
                name="sumberInfo"
                value={formData.sumberInfo}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm font-medium"
              >
                <option value="Iklan Meta (Instagram/Facebook)">Iklan Meta (Instagram / Facebook)</option>
                <option value="Guru / Sekolah">Guru / Sekolah</option>
                <option value="WhatsApp Grup / Teman">WhatsApp Grup / Rekomendasi Teman</option>
                <option value="Media Sosial Lain (TikTok/YouTube)">Media Sosial Lain (TikTok / YouTube)</option>
              </select>
            </div>

            {/* Syarat & Ketentuan */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong className="font-bold">Ketentuan Kepesertaan:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1 text-amber-800">
                <li>Setelah klik submit, peserta akan diarahkan untuk konfirmasi ke WhatsApp Admin resmi.</li>
                <li>Peserta wajib mengikuti (follow) media sosial resmi ONI untuk mengaktifkan fitur <strong>Simulasi Ujian</strong>.</li>
                <li>Babak Penyisihan dilaksanakan serentak secara mandiri online dengan 20 soal acak.</li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-700 to-rose-800 hover:from-rose-700 hover:to-rose-900 text-white font-extrabold text-base shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
              >
                {loading ? (
                  <span>Memproses Pendaftaran...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Daftar Sekarang & Ambil Nomor Peserta Resmi</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
