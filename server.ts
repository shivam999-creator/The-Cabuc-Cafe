import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// System instructions for the Cabuc Coffee Barista
const BARISTA_SYSTEM_INSTRUCTION = `
You are the master barista and hospitality concierge at Cabuc Coffee, located at 1211 Lexington Ave (corner of 82nd St, Upper East Side, New York City).
Your personality is warm, sophisticated, knowledgeable, and inviting.

About Cabuc Coffee:
- Known for: Signature Baklava Latte (pistachio, cardamom, wildflower honey), Traditional Turkish Coffee in copper cezve with lokum (Turkish delight), Kyoto 12-hour Slow Drip Cold Brew Tower, Freshly baked Spinach & Feta Börek, Salted Honey Croissants, Uji Matcha Latte, Spiced Iced Cardamom Latte, and Labneh Za'atar Toast.
- Atmosphere: Sunlit corner on Lexington & 82nd, authentic Turkish music, high-speed Wi-Fi, cozy seating, friendly baristas.
- Location: 1211 Lexington Ave, NY 10028. Near 86th St (4/5/6 trains) and 77th St (6 train). 7-minute walk to The Met & Central Park.
- Hours: 7am - 6pm daily. Phone: (646) 891-0011.

Your goals:
1. Help guests choose the perfect drink or pastry based on their mood, taste preferences (sweet, nutty, strong, bold, creamy, iced, vegan, etc.), or time of day.
2. Provide tasting notes, brewing background (e.g. how Turkish cezve coffee or 12-hour Kyoto towers work), and pairing recommendations (e.g., Baklava Latte with Salted Honey Croissant, or Turkish Coffee with warm Börek).
3. Answer questions about location, hours, ordering, dietary accommodations (oat milk, almond milk, vegan options).
4. Keep answers concise, elegant, appetizing, and friendly (2-4 short sentences per response unless asked for a deep recipe/story). Include specific menu item names.
`;

// API Endpoint for AI Barista Concierge
app.post('/api/gemini/barista', async (req, res) => {
  try {
    const { prompt, conversationHistory = [] } = req.body;
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const ai = getGenAI();

    if (ai) {
      // Use Gemini 3.7 Flash for conversational Barista intelligence
      const formattedHistory = conversationHistory.map((msg: { role: string; content: string }) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const contents = [
        ...formattedHistory,
        { role: 'user', parts: [{ text: prompt }] }
      ];

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents,
        config: {
          systemInstruction: BARISTA_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "I would love to recommend our Signature Baklava Latte or a traditional Turkish Coffee!";
      return res.json({ reply: replyText });
    } else {
      // Intelligent fallback if API key is not yet set
      const lower = prompt.toLowerCase();
      let fallbackReply = "Welcome to Cabuc Coffee! ";

      if (lower.includes('baklava') || lower.includes('sweet') || lower.includes('nutty') || lower.includes('signature')) {
        fallbackReply += "You must try our Signature Baklava Latte ($6.75)! It is infused with house pistachio-cardamom honey syrup, velvety steamed milk, and a crushed pistachio rim. Pairs wonderfully with our Salted Honey Croissant!";
      } else if (lower.includes('turkish') || lower.includes('traditional') || lower.includes('heritage') || lower.includes('strong')) {
        fallbackReply += "Our Traditional Turkish Coffee ($5.50) is brewed in authentic copper cezve pots with ultra-fine grind and silky crema foam, served with traditional rosewater Turkish delight.";
      } else if (lower.includes('cold') || lower.includes('iced') || lower.includes('refresh') || lower.includes('summer')) {
        fallbackReply += "On a warm NYC day, nothing beats our Kyoto-Style Slow Drip Cold Brew ($6.50)—dripped drop-by-drop over 12 hours for deep chocolate notes—or our Iced Spiced Cardamom Latte!";
      } else if (lower.includes('food') || lower.includes('pastry') || lower.includes('eat') || lower.includes('borek') || lower.includes('croissant') || lower.includes('hungry')) {
        fallbackReply += "Our fresh baked Artisanal Spinach & Feta Börek ($7.25) is flaky, savory, and warm. If you prefer sweet, our Salted Honey Croissant ($5.50) or Pistachio Tahini Cookie ($4.50) are neighborhood legends!";
      } else if (lower.includes('hours') || lower.includes('open') || lower.includes('time')) {
        fallbackReply += "We are open daily from 7:00 AM to 6:00 PM at 1211 Lexington Ave (corner of 82nd St).";
      } else if (lower.includes('subway') || lower.includes('location') || lower.includes('where') || lower.includes('address')) {
        fallbackReply += "We are at 1211 Lexington Avenue & 82nd St in the Upper East Side. Just 4 blocks from the 86th St Subway (4, 5, 6 lines) and a short walk from Central Park!";
      } else {
        fallbackReply += "Our baristas are ready to craft your drink. Whether you're craving our Signature Baklava Latte, authentic Cezve Turkish Coffee, or fresh warm Börek, we can't wait to welcome you on Lexington Ave!";
      }

      return res.json({ reply: fallbackReply, fallback: true });
    }
  } catch (error: any) {
    console.error('Barista API error:', error);
    return res.status(500).json({
      error: 'Failed to generate Barista recommendation',
      message: error?.message || 'Unknown error'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', cafe: 'Cabuc Coffee NYC', location: '1211 Lexington Ave' });
});

// Start Server with Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Cabuc Coffee server running at http://localhost:${PORT}`);
  });
}

startServer();
