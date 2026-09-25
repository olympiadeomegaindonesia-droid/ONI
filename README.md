# OLIMPIADE NASIONAL INDONESIA (ONI)
**Didukung Resmi oleh Yayasan Besar Rasa Bagi Bangsa**  
*(Terdaftar Kemenkumham RI No. AHU-0019284.AH.01.04.Tahun 2023)*

Platform Web Aplikasi Olimpiade Online Terakreditasi Nasional dengan Standar Arsitektur Enterprise & Luxury UI/UX Mobile-First.

---

## 🌟 Ringkasan Fitur Unggulan

1. **Fokus Pendaftaran Iklan Meta (Instagram & Facebook)**
   - Formulir pendaftaran mandiri cepat untuk orang tua & siswa tanpa hambatan (100% Gratis Babak Penyisihan).
   - Generasi otomatis **Nomor Peserta Unik** (misal: `ONI-2026-A1001`).
   - Integrasi **ID Meta Pixel** & custom script HTML dari Dashboard Admin.

2. **Alur Mandiri End-to-End**
   - **Konfirmasi WhatsApp Admin & Follow Sosmed:** Integrasi wajib follow Instagram, TikTok & YouTube untuk membuka akses simulasi ujian.
   - **Simulasi Ujian CBT:** 20 soal acak sesuai Kategori & Mapel dengan timer 45 menit dan skor instan.
   - **Babak Penyisihan Nasional:** Sistem Computer-Based Test dengan proteksi Anti-Contek cerdas (deteksi pindah tab, blokir copy-paste, mode fokus).
   - **Pengumuman Kelulusan (H+2):** Pengumuman terintegrasi dengan filter pencarian instan.
   - **Pembayaran Tiket Final Mandiri:** Rekening BCA `3843-136-911` a.n. `SRI PRIHATININGSIH SH` (Normal Rp 180.000 dicoret Promo Rp 99.000). Tombol konfirmasi WhatsApp otomatis menyertakan nama anak dan mapel.
   - **Babak Grand Final:** Penentuan Medali Emas, Perak, Perunggu & Piagam Penghargaan.
   - **E-Sertifikat Ber-QR Code Resmi:** Desain mewah dengan stempel Yayasan Besar Rasa Bagi Bangsa dan tanda tangan legal siap cetak/unduh PDF.

3. **Dashboard Admin Super Lengkap**
   - **Akses Rahasia:** Username: `ADMIN`, Password: `RAHASIA123` (Kredensial rahasia aman tanpa teks tertulis di halaman login).
   - **Database Peserta & Riwayat Ujian Lengkap:** Menampilkan seluruh data formulir pendaftaran, filter tanggal, search, dan tombol WhatsApp follow up sesuai status peserta (belum simulasi, belum penyisihan, belum bayar final, belum final).
   - **Tabel Laporan Pengerjaan:** Tabel terpisah untuk Laporan Simulasi, Laporan Babak Penyisihan, dan Laporan Babak Final (skor tercatat secara otomatis dan real-time).
   - **Bank Soal Terpisah:** Kategori A (SD 1-3), Kategori B (SD 4-6), Kategori C (SMP/SMA) pada 4 Mapel (Matematika, IPA/Sains, B. Inggris, B. Indonesia). Fitur tambah/edit satuan, hapus satuan, hapus massal, ubah poin massal, serta export/import Excel & CSV.
   - **Pengaturan Tanggal & Sistem:** Pengaturan tanggal pendaftaran, simulasi, penyisihan, pengumuman, final, toggle Anti-Contek, dan WhatsApp admin.

4. **Konsultan AI Cerdas (@google/genai)**
   - Terintegrasi dengan endpoint Express `/api/recommendation`.
   - Menggunakan model `gemini-3.1-pro-preview` dengan mode penalaran tinggi (`ThinkingLevel.HIGH`) serta fallback cerdas ke `gemini-3.8-flash`.

---

## 📁 Struktur Monorepo Proyek

```
/
├── appConfig.js             # Configuration-Driven Whitelabel System
├── app.js                   # Entry point Node.js Selector cPanel
├── server.ts                # Express Backend + Vite Middleware (Dev/Prod)
├── package.json             # Root dependencies & scripts
├── index.html               # Entry point HTML (Google Font Plus Jakarta Sans)
├── metadata.json            # AI Studio Applet Metadata
├── src/
│   ├── main.tsx             # Entry point React 18+
│   ├── App.tsx              # Master Application Layout & Modals
│   ├── types.ts             # TypeScript Interfaces (Participant, Question, Settings)
│   ├── data/
│   │   └── defaultBankSoal.ts # Bank Soal Resmi (Kategori A, B, C x 4 Mapel)
│   ├── services/
│   │   └── storage.ts       # Service Penyimpanan & WhatsApp Generator
│   └── components/
│       ├── OfficialLogos.tsx       # Logo ONI & Logo Yayasan Vektor SVG
│       ├── Navbar.tsx              # Header & Navigasi Responsif
│       ├── Hero.tsx                # Hero Section Ultra Mewah
│       ├── RegistrationForm.tsx    # Fokus Utama Pendaftaran
│       ├── SocialFollowModal.tsx   # Verifikasi WA & Follow Sosmed
│       ├── ExamEngine.tsx          # Engine CBT 20 Soal & Anti-Contek
│       ├── TicketPaymentModal.tsx  # Pembayaran Promo BCA 99rb
│       ├── CertificateModal.tsx    # E-Sertifikat Mewah Ber-QR
│       ├── AdminDashboard.tsx      # Dashboard Pusat Administrator
│       ├── SecretAdminLoginModal.tsx # Login Rahasia Admin
│       ├── AnnouncementModal.tsx   # Pengumuman Kelulusan H+2
│       ├── AIChatModal.tsx         # Konsultan AI Gemini
│       ├── CategoriesSection.tsx   # Kategori A/B/C & Mapel
│       ├── ExamFlowSection.tsx     # Alur Ujian 8 Tahap
│       ├── ProductsSection.tsx     # Produk & Fasilitas
│       ├── VisualGallerySection.tsx# Galeri Visual HD
│       ├── TestimonialsSection.tsx # Testimoni Orang Tua & Guru
│       ├── FAQSection.tsx          # 10 FAQ Bernilai Bisnis
│       └── Footer.tsx              # Footer Legalitas & Kontak
```

---

## 💻 Panduan Pengujian Lokal (Local Development)

### 1. Prasyarat
- Node.js versi 18.x, 20.x, atau 22.x
- NPM atau Bun / Yarn

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser di `http://localhost:3000`. Aplikasi akan berjalan secara full-stack (React Vite + Express Backend API).

### 4. Build untuk Produksi
```bash
npm run build
```

---

## 🚀 Panduan Deployment cPanel Shared Hosting (Satelitweb / Cloud Hosting)

Proyek ini telah dikonfigurasi secara **future-proof** untuk langsung dijalankan di cPanel Node.js Selector versi berapa pun.

### Langkah-Langkah Upload & Aktivasi di cPanel:

1. **Jalankan Build Lokal:**
   ```bash
   npm run build
   ```
   Folder `dist/` akan ter-generate dengan aset statis teroptimasi.

2. **Kompresi File (Zip):**
   Kemas seluruh isi proyek ke dalam file `.zip` (sertakan: `app.js`, `appConfig.js`, `package.json`, folder `dist/`, `.env.example`).
   *(Catatan: folder `node_modules` tidak perlu diikutkan ke dalam zip).*

3. **Upload ke cPanel File Manager:**
   - Masuk ke cPanel hosting Anda (misal Satelitweb).
   - Buka **File Manager** & masuk ke direktori aplikasi Anda (misal `public_html` atau subdirektori `/olimpiade`).
   - Upload file zip, lalu klik **Extract**.

4. **Konfigurasi Node.js Selector di cPanel:**
   - Di menu utama cPanel, klik **Setup Node.js App**.
   - Klik **Create Application**:
     - **Node.js version:** Pilih `20.x` atau `22.x` (LTS direkomendasikan).
     - **Application mode:** `Production`.
     - **Application root:** path folder yang di-upload (misal `public_html`).
     - **Application startup file:** `app.js`
   - Klik tombol **Create / Save**.

5. **Install NPM Packages di cPanel:**
   - Pada halaman Node.js App cPanel, klik tombol **Run NPM Install**.
   - Sistem cPanel akan otomatis mengunduh dependensi sesuai `package.json`.

6. **Konfigurasi Environment Variables (Environment Panel):**
   - Tambahkan variabel:
     - `NODE_ENV` = `production`
     - `GEMINI_API_KEY` = `[API_KEY_GEMINI_ANDA]`
   - Klik **Save** lalu klik **Restart Application**.

7. **Aplikasi Siap Digunakan:**
   Website langsung dapat diakses di domain/subdomain Anda dengan performa kilat dan routing SPA bebas error 404 saat di-refresh!

---

## 🔒 Informasi Kredensial & Kontak Resmi

- **Akses Dashboard Admin:**
  - Username: `ADMIN`
  - Password: `RAHASIA123`
  *(Akses tombol gembok di kanan atas Navbar atau link di Footer)*
- **Rekening Resmi Pembayaran Tiket Final:**
  - Bank: **BCA (Bank Central Asia)**
  - Nomor Rekening: **3843-136-911**
  - Atas Nama: **SRI PRIHATININGSIH SH.**
- **WhatsApp Hotline Admin:**
  - `+62 822-2814-9923`
- **Penyelenggara:**
  - Yayasan Besar Rasa Bagi Bangsa
