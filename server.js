import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// Your existing routes...
app.post('/generate', (req, res) => {
  // ...
});

app.post('/run_sql', (req, res) => {
  // ...
});

app.get('/', (req, res) => {
  res.send('API Server is running.');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});








