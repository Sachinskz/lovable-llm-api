// server.js (ESM version)
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Change to your actual backend URL
const LOVABLE_API_BASE = 'https://<your-backend-name>.up.railway.app';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/query', async (req, res) => {
  try {
    const response = await fetch(`${LOVABLE_API_BASE}/api/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `Backend error: ${response.statusText}` });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

