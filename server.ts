import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { APP_CONFIG } from './appConfig.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// In-memory sync store for multi-client demo / backup persistence
let memoryParticipants: any[] = [];
let memorySettings: any = null;

// Build dynamic system instruction using APP_CONFIG
function buildSystemInstruction(): string {
  const productsList = APP_CONFIG.products
    .map(
      (p) =>
        `- ${p.title} (${p.badge}): ${p.price}. ${p.description}. Fitur: ${p.features.join(', ')}`
    )
    .join('\n');

  const faqList = APP_CONFIG.faq
    .map((f, i) => `Q${i + 1}: ${f.question}\nA: ${f.answer}`)
    .join('\n\n');

  return `
Anda adalah Asisten Pakar & Konsultan Senior Resmi dari "${APP_CONFIG.brandName}".
Bidang Usaha: ${APP_CONFIG.businessType}
Deskripsi: ${APP_CONFIG.description}
Didukung Penuh Oleh: ${APP_CONFIG.supportedBy.name} (${APP_CONFIG.supportedBy.legalStatus})

TUGAS & KARAKTER ANDA:
1. Bertindak sebagai pakar pendidikan dan konsultan olimpiade yang ramah, sopan, persuasif, solutif, inspiratif, dan berwawasan tinggi.
2. Membantu calon peserta, siswa, guru pembimbing, dan orang tua/wali memahami sistem olimpiade, cara pendaftaran mandiri (100% GRATIS babak penyisihan), syarat follow sosmed untuk simulasi, tata tertib, materi per kategori (A, B, C), dan strategi belajar.
3. Menjelaskan secara meyakinkan keunggulan legalitas sertifikat terakreditasi Kemenkumham RI, medali logam kejuaraan, piagam resmi, dan promo Tiket Babak Final BCA (Rp 180.000 dicoret menjadi Rp 99.000 untuk 10 pendaftar pertama).
4. Gunakan bahasa Indonesia yang baik, santun, lugas, elegan, dan membakar semangat juang anak bangsa.

INFORMASI PRODUK & TAHAPAN:
${productsList}

DETAIL PEMBAYARAN TIKET FINAL:
Bank: ${APP_CONFIG.payment.bank}
No Rekening: ${APP_CONFIG.payment.accountNumber}
Atas Nama: ${APP_CONFIG.payment.accountHolder}
Harga Normal: Rp ${APP_CONFIG.payment.normalPrice.toLocaleString('id-ID')}
Harga Promo: Rp ${APP_CONFIG.payment.promoPrice.toLocaleString('id-ID')} (${APP_CONFIG.payment.promoNote})
WhatsApp Admin Resmi: ${APP_CONFIG.contact.whatsappDisplay}

FAQ UTAMA:
${faqList}

Selalu berikan jawaban terstruktur, akurat, dan akhiri dengan ajakan bertindak (CTA) positif untuk berprestasi di Olimpiade Nasional Indonesia!
`.trim();
}

// POST /api/recommendation
app.post('/api/recommendation', async (req: Request, res: Response) => {
  try {
    const { message, history = [], studentContext } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Pesan (message) wajib diisi.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Fallback response if GEMINI_API_KEY is not configured yet
      return res.json({
        reply: `Halo Sahabat Berprestasi! Selamat datang di **${APP_CONFIG.brandName}** (didukung oleh ${APP_CONFIG.supportedBy.name}). 
        
Pendaftaran Babak Penyisihan terbuka secara **GRATIS** untuk Kategori A (SD 1-3), Kategori B (SD 4-6), dan Kategori C (SMP-SMA).
        
Setelah mendaftar mandiri:
1. Konfirmasi ke WhatsApp Admin (+${APP_CONFIG.contact.whatsapp})
2. Follow akun sosmed resmi ONI untuk membuka Simulasi Ujian Mandiri
3. Ikuti Babak Penyisihan dan raih kesempatan melaju ke Grand Final!

Ada yang bisa kami bantu mengenai jadwal, silabus mata pelajaran, atau tata cara pendaftaran?`,
        modelUsed: 'mock-advisor',
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const systemInstruction = buildSystemInstruction();

    // Prepare contents with context
    let promptText = message;
    if (studentContext) {
      promptText = `[Konteks Siswa: Nama: ${studentContext.nama || '-'}, Kategori: ${studentContext.kategori || '-'}, Mapel: ${studentContext.mapel || '-'}]\n\nPertanyaan: ${message}`;
    }

    try {
      // Primary: gemini-3.1-pro-preview with ThinkingLevel.HIGH (per instructions)
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: promptText,
        config: {
          systemInstruction,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.HIGH,
          },
        },
      });

      return res.json({
        reply: response.text || 'Mohon maaf, tidak ada respons yang dihasilkan.',
        modelUsed: 'gemini-3.1-pro-preview',
      });
    } catch (proError: any) {
      console.warn('Fallback from gemini-3.1-pro-preview to gemini-3.8-flash:', proError?.message || proError);
      
      try {
        // Fallback to gemini-3.8-flash
        const fallbackResponse = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: promptText,
          config: {
            systemInstruction,
          },
        });

        return res.json({
          reply: fallbackResponse.text || 'Mohon maaf, tanggapan sedang diproses.',
          modelUsed: 'gemini-3.8-flash',
        });
      } catch (fallbackError: any) {
        console.warn('Fallback failed, returning smart context response:', fallbackError?.message);
        return res.json({
          reply: `Halo Sahabat Juara! Terima kasih atas pertanyaan Anda mengenai **${APP_CONFIG.brandName}** (didukung oleh ${APP_CONFIG.supportedBy.name}).

Berikut rangkuman penting untuk Anda:
• **Pendaftaran Babak Penyisihan:** 100% Bebas Biaya (GRATIS) untuk Kategori A (SD 1-3), B (SD 4-6), dan C (SMP-SMA).
• **Simulasi Ujian Mandiri:** Buka akses dengan follow akun resmi Instagram (@olimpiadenasional) dan konfirmasi WhatsApp.
• **Tiket Babak Grand Final:** Promo BCA 3843-136-911 a.n. SRI PRIHATININGSIH SH seharga Rp 99.000 (diskon dari Rp 180.000 khusus 10 pendaftar pertama).
• **Legalitas Sertifikat:** Terdaftar Kemenkumham RI dengan barcode verifikasi resmi.

Untuk informasi langsung dan bantuan pendaftaran, silakan hubungi hotline WhatsApp resmi kami di **${APP_CONFIG.contact.whatsappDisplay}**.`,
          modelUsed: 'smart-rules',
        });
      }
    }
  } catch (error: any) {
    console.error('API /api/recommendation error:', error);
    return res.json({
      reply: `Halo! Selamat datang di ${APP_CONFIG.brandName}. Pendaftaran gratis dan simulasi mandiri siap diakses. Silakan hubungi WA panitia di ${APP_CONFIG.contact.whatsappDisplay}.`,
    });
  }
});

// API Routes for participant data sync (optional cloud backup)
app.get('/api/participants', (req: Request, res: Response) => {
  res.json({ success: true, data: memoryParticipants });
});

app.post('/api/participants', (req: Request, res: Response) => {
  const { participants } = req.body;
  if (Array.isArray(participants)) {
    memoryParticipants = participants;
  }
  res.json({ success: true, count: memoryParticipants.length });
});

app.get('/api/settings', (req: Request, res: Response) => {
  res.json({ success: true, data: memorySettings });
});

app.post('/api/settings', (req: Request, res: Response) => {
  memorySettings = req.body;
  res.json({ success: true, data: memorySettings });
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    brand: APP_CONFIG.brandName,
    time: new Date().toISOString(),
  });
});

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`[ONI Server] Berjalan pada port ${PORT} (mode: ${isProduction ? 'production' : 'development'})`);
  });
}

startServer();
