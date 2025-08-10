import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// POST /generate endpoint
app.post('/generate', (req, res) => {
  const { prompt } = req.body;
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing prompt in request body' });
  }
  const result = `You sent the prompt: "${prompt}"`;
  res.json({ result });
});

// POST /run_sql endpoint
app.post('/run_sql', (req, res) => {
  const { sql } = req.body;
  if (!sql || typeof sql !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing sql in request body' });
  }
  // Dummy data simulating SQL result
  const data = [
    { id: 1, name: 'Example Row 1' },
    { id: 2, name: 'Example Row 2' },
  ];
  res.json({ data });
});

// Health check route
app.get('/', (req, res) => {
  res.send('API Server is running.');
});

// Catch-all 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});






