import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { APP_CONFIG } from '../appConfig.js';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message, studentContext } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Pesan (message) wajib diisi.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.json({
        reply: `Halo Sahabat Juara! Selamat datang di **${APP_CONFIG.brandName}** (didukung oleh ${APP_CONFIG.supportedBy.name}).\n\nPendaftaran Babak Penyisihan 100% GRATIS untuk Kategori A (SD 1-3), B (SD 4-6), dan C (SMP-SMA).\n\nSilakan konfirmasi ke WhatsApp Admin di ${APP_CONFIG.contact.whatsappDisplay} untuk bantuan lebih lanjut.`,
        modelUsed: 'smart-rules',
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const promptText = studentContext
      ? `[Konteks Siswa: Nama: ${studentContext.nama || '-'}, Kategori: ${studentContext.kategori || '-'}, Mapel: ${studentContext.mapel || '-'}]\n\nPertanyaan: ${message}`
      : message;

    const systemInstruction = `Anda adalah Asisten Pakar Resmi dari "${APP_CONFIG.brandName}" didukung oleh "${APP_CONFIG.supportedBy.name}". Bersikap ramah, sopan, persuasif, dan solutif. WhatsApp Admin: ${APP_CONFIG.contact.whatsappDisplay}.`;

    try {
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
    } catch {
      try {
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
      } catch {
        return res.json({
          reply: `Halo Sahabat Juara! Pendaftaran Babak Penyisihan ONI adalah 100% GRATIS. Untuk pertanyaan lebih lanjut, silakan hubungi WhatsApp resmi kami di ${APP_CONFIG.contact.whatsappDisplay}.`,
          modelUsed: 'smart-rules',
        });
      }
    }
  } catch (error: any) {
    return res.status(500).json({ error: 'AI processing error' });
  }
}
