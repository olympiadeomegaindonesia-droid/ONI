/**
 * cPanel Node.js Selector & Production Entry Point
 * Olimpiade Nasional Indonesia (ONI)
 */

import express from 'express';
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

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Gemini AI Recommendation API
app.post('/api/recommendation', async (req, res) => {
  try {
    const { message, studentContext } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.json({
        reply: `Halo! Selamat datang di ${APP_CONFIG.brandName}. Pendaftaran Babak Penyisihan gratis. Hubungi WA ${APP_CONFIG.contact.whatsappDisplay} untuk informasi lebih lanjut.`,
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = studentContext
      ? `[Siswa: ${studentContext.nama || '-'}, Mapel: ${studentContext.mapel || '-'}] ${message}`
      : message;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: prompt,
        config: {
          systemInstruction: `Anda adalah konsultan resmi ${APP_CONFIG.brandName} didukung ${APP_CONFIG.supportedBy.name}. Berikan bantuan ramah, solutif, persuasif.`,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.HIGH,
          },
        },
      });
      return res.json({ reply: response.text });
    } catch {
      const fallback = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      });
      return res.json({ reply: fallback.text });
    }
  } catch (error) {
    res.status(500).json({ error: 'AI processing error' });
  }
});

// Serve built React assets (supporting dist/ or client/dist/)
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// Catch-all route to prevent 404 on SPA reload
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[ONI cPanel Engine] Active on port ${PORT}`);
});
