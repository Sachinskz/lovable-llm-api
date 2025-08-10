const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST /generate endpoint: expects { prompt: string } and returns { result: string }
app.post('/generate', (req, res) => {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing prompt in request body' });
  }

  // Dummy example: Just echo back the prompt with a message
  const result = `You sent the prompt: "${prompt}"`;

  res.json({ result });
});

// POST /run_sql endpoint: expects { sql: string } and returns { data: any[] }
app.post('/run_sql', (req, res) => {
  const { sql } = req.body;

  if (!sql || typeof sql !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing sql in request body' });
  }

  // Dummy example: Return a fixed data array simulating query results
  const data = [
    { id: 1, name: 'Example Row 1' },
    { id: 2, name: 'Example Row 2' },
  ];

  res.json({ data });
});

// Default route for health check or to catch undefined routes
app.get('/', (req, res) => {
  res.send('API Server is running.');
});

// Catch-all for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});




