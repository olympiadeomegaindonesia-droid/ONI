/**
 * CONFIGURATION-DRIVEN WHITELABEL SYSTEM
 * Olimpiade Nasional Indonesia (ONI)
 * Supported by Yayasan Besar Rasa Bagi Bangsa
 */

export const APP_CONFIG = {
  brandName: "OLIMPIADE NASIONAL INDONESIA",
  brandAcronym: "ONI",
  businessType: "OLIMPIADE ONLINE",
  description: "OLIMPIADE ONLINE YANG DI ADAKAN DI SELURUH INDONESIA",
  tagline: "Wadah Prestasi & Kompetisi Pelajar Terakreditasi Nasional Terbesar di Indonesia",
  supportedBy: {
    name: "YAYASAN BESARRASA BAGI BANGSA",
    shortName: "Yayasan Besar Rasa Bagi Bangsa",
    legalStatus: "Terdaftar Resmi Kemenkumham RI",
    decreeNumber: "AHU-0019284.AH.01.04.Tahun 2023",
  },
  themeColor: {
    primary: "#1A1615", // Dark Executive Accent
    accent: "#D4AF37",  // Gold Luxury Accent
    brandPink: "#E11D48", // Vivid Magenta/Pink from official logo
    brandBlue: "#1D4ED8", // Royal Blue from Yayasan logo
    bgLight: "#FAF8F5",  // Warm Neutral Ivory
  },
  contact: {
    whatsapp: "6282228149923",
    whatsappDisplay: "+62 822-2814-9923",
    email: "olympiadeomegaindonesia@gmail.com",
    address: "Graha Prestasi Nasional, Jakarta & Surabaya, Indonesia",
    instagram: "@olimpiadenasional",
    tiktok: "@olimpiadenasional",
    youtube: "Olimpiade Nasional Indonesia",
  },
  payment: {
    bank: "BCA (Bank Central Asia)",
    accountNumber: "3843-136-911",
    accountHolder: "SRI PRIHATININGSIH SH.",
    normalPrice: 180000,
    promoPrice: 99000,
    promoNote: "Khusus 10 Peserta Pertama Lolos Babak Penyisihan",
  },
  heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",
  defaultSchedule: {
    registrationStart: "2026-09-01",
    registrationEnd: "2026-10-15",
    simulationDate: "2026-10-16",
    preliminaryDate: "2026-10-18",
    announcementDate: "2026-10-20", // H+2 dari penyisihan
    finalDate: "2026-10-25",
  },
  categories: [
    {
      id: "A",
      name: "KATEGORI A",
      target: "Jenjang SD/MI Kelas 1 - 3",
      level: "Tingkat Dasar (Pemula)",
      badge: "SD Kelas 1-3",
      color: "from-amber-500 to-rose-500",
      description: "Mengasah logika dasar, penalaran visual, sains sekitar, dan literasi awal dengan soal interaktif.",
    },
    {
      id: "B",
      name: "KATEGORI B",
      target: "Jenjang SD/MI Kelas 4 - 6",
      level: "Tingkat Lanjutan SD",
      badge: "SD Kelas 4-6",
      color: "from-blue-600 to-indigo-600",
      description: "Pengembangan pemecahan masalah kritis, konsep matematika terapan, sains eksperimental & pemahaman bahasa.",
    },
    {
      id: "C",
      name: "KATEGORI C",
      target: "Jenjang SMP/MTs & SMA/SMK",
      level: "Tingkat Menengah & Atas",
      badge: "SMP & SMA/SMK",
      color: "from-emerald-600 to-teal-700",
      description: "Standar soal olimpiade sains & numerasi analitis tinggi, penalaran komprehensif, persiapan seleksi PTN & beasiswa.",
    },
  ],
  subjects: [
    {
      id: "matematika",
      name: "Matematika",
      icon: "Calculator",
      description: "Aritmatika, Logika Numerik, Geometri, Aljabar & Pemecahan Masalah.",
      totalQuestions: 20,
      pointsPerQuestion: 5,
      durationMinutes: 45,
    },
    {
      id: "bahasa-inggris",
      name: "Bahasa Inggris",
      icon: "Globe",
      description: "Vocabulary, Grammar Structure, Reading Comprehension & Analytical Reasoning.",
      totalQuestions: 20,
      pointsPerQuestion: 5,
      durationMinutes: 45,
    },
    {
      id: "ipa-sains",
      name: "IPA / Sains",
      icon: "Atom",
      description: "Fisika Alamiah, Biologi Kehidupan, Ekosistem, Bumi & Eksplorasi Sains.",
      totalQuestions: 20,
      pointsPerQuestion: 5,
      durationMinutes: 45,
    },
    {
      id: "bahasa-indonesia",
      name: "Bahasa Indonesia",
      icon: "BookOpen",
      description: "Literasi Teks, Pemahaman Bacaan, EBI, Kosakata Baku & Penalaran Kritis.",
      totalQuestions: 20,
      pointsPerQuestion: 5,
      durationMinutes: 45,
    },
  ],
  products: [
    {
      id: "prod-simulasi",
      title: "Simulasi Ujian Mandiri & Try Out Terakreditasi",
      badge: "GRATIS",
      price: "Rp 0",
      description: "Akses simulasi sistem ujian Computer-Based Test (CBT) adaptif untuk membiasakan siswa dengan tampilan riil dan waktu pengerjaan.",
      features: [
        "Akses 20 Soal Acak Bank Soal Resmi",
        "Pembahasan & Kunci Jawaban Lengkap",
        "Dapat Diulang Kapan Saja Setelah Follow Sosmed",
        "Sistem Timer & Nilai Otomatis Muncul"
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "prod-penyisihan",
      title: "Babak Penyisihan Nasional Online",
      badge: "GRATIS PENDAFTARAN",
      price: "Rp 0",
      description: "Kompetisi babak penyisihan serentak seluruh Indonesia dengan sistem proteksi Anti-Contek mutakhir berstandar integritas tinggi.",
      features: [
        "20 Soal Terstandar 5 Poin / Soal (Total 100)",
        "Sistem Pengawasan Anti-Contek Cerdas",
        "Sertifikat Digital Kepesertaan Nasional",
        "Pemeringkatan Resmi se-Indonesia"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "prod-final",
      title: "Tiket Babak Grand Final & Medali Kejuaraan",
      badge: "PROMO TERBATAS",
      price: "Rp 99.000",
      originalPrice: "Rp 180.000",
      description: "Bagi peserta lolos babak penyisihan. Perebutan Medali Emas, Perak, Perunggu, Piagam Penghargaan Cetak & Trofi Kejuaraan.",
      features: [
        "Akses Eksklusif Soal Final Tingkat Tinggi",
        "Medali Logam Asli & Piagam Berhologram Resmi",
        "SK Pemenang Resmi Yayasan Besar Rasa Bagi Bangsa",
        "Bimbingan & Akses Bank Soal Eksklusif Juara"
      ],
      image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "prod-sertifikat",
      title: "E-Sertifikat Ber-Barcode Verifikasi Resmi",
      badge: "LEGAL & DIAKUI",
      price: "Termasuk",
      description: "Sertifikat resmi terbitan Yayasan Besar Rasa Bagi Bangsa yang dapat diverifikasi secara online untuk portofolio dan PPDB Jalur Prestasi.",
      features: [
        "Tanda Tangan Digital & Stempel Legal Yayasan",
        "Kode Unik QR Code Verifikasi Integritas",
        "Predikat Nilai & Peringkat Resmi",
        "Bisa Diunduh Langsung Mandiri Format PDF Siap Cetak"
      ],
      image: "https://images.unsplash.com/photo-1589330694653-dad6ef0103bb?q=80&w=800&auto=format&fit=crop"
    }
  ],
  faq: [
    {
      question: "Apakah pendaftaran Babak Penyisihan Olimpiade Nasional Indonesia ini benar-benar gratis?",
      answer: "Ya, 100% GRATIS! Calon peserta atau orang tua/wali dapat mendaftar mandiri melalui formulir online tanpa dipungut biaya sepeser pun untuk babak penyisihan."
    },
    {
      question: "Siapa saja yang dapat mengikuti Olimpiade Nasional Indonesia?",
      answer: "Seluruh pelajar di Indonesia mulai dari jenjang SD/MI Kelas 1-3 (Kategori A), SD/MI Kelas 4-6 (Kategori B), hingga SMP/MTs dan SMA/SMK (Kategori C) dari seluruh penjuru Nusantara."
    },
    {
      question: "Apa syarat untuk bisa mengerjakan Simulasi Ujian?",
      answer: "Setelah mendaftar mandiri, peserta cukup melakukan konfirmasi ke WhatsApp Admin dan mengikuti (follow) akun media sosial resmi Olimpiade Nasional Indonesia (Instagram, TikTok, YouTube). Setelah itu fitur simulasi akan terbuka otomatis."
    },
    {
      question: "Bagaimana mekanisme soal dan penilaian ujian?",
      answer: "Setiap peserta mendapatkan 20 soal pilihan ganda yang diacak secara otomatis dari bank soal resmi sesuai Kategori dan Mata Pelajaran yang dipilih. Setiap soal bernilai 5 poin sehingga total nilai maksimal adalah 100 poin."
    },
    {
      question: "Kapan hasil pengumuman kelulusan Babak Penyisihan diterbitkan?",
      answer: "Pengumuman peserta yang lolos babak penyisihan diterbitkan pada H+2 setelah pelaksanaan babak penyisihan selesai melalui Portal Dashboard Pengumuman yang dapat diakses mandiri oleh seluruh peserta."
    },
    {
      question: "Berapa biaya Tiket Babak Final bagi peserta yang lolos?",
      answer: "Biaya normal tiket babak final adalah Rp 180.000, namun tersedia diskon promo spesial menjadi Rp 99.000 khusus bagi 10 peserta pertama yang melakukan pembayaran melalui transfer Rekening BCA 3843-136-911 a.n. SRI PRIHATININGSIH SH."
    },
    {
      question: "Bagaimana cara konfirmasi pembayaran tiket babak final?",
      answer: "Peserta cukup mengklik tombol 'Konfirmasi Pembayaran WhatsApp' di halaman portal tiket, yang akan otomatis membuka WhatsApp Admin dengan format nama anak dan mapel yang diikuti."
    },
    {
      question: "Apakah sistem ujian dilengkapi proteksi kejujuran (Anti-Contek)?",
      answer: "Ya, sistem dilengkapi fitur Anti-Contek cerdas mencakup deteksi perpindahan tab/browser, pencegahan copy-paste, mode layar penuh (fullscreen), serta pencatatan aktivitas pengerjaan."
    },
    {
      question: "Bagaimana cara mendapatkan dan mengunduh E-Sertifikat?",
      answer: "Peserta dapat mengunduh E-Sertifikat resmi secara mandiri langsung dari portal akun peserta setelah menyelesaikan ujian atau setelah pengumuman hasil penilaian dirilis."
    },
    {
      question: "Apakah legalitas penyelenggaraan dan sertifikat terjamin?",
      answer: "Sangat terjamin. Kegiatan ini diselenggarakan dan didukung penuh secara resmi oleh Yayasan Besar Rasa Bagi Bangsa (Terdaftar di Kemenkumham RI), dengan sertifikat resmi ber-QR Code untuk verifikasi keabsahan."
    }
  ]
};
