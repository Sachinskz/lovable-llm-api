// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

// Only listen if this file is run directly (prevents double start)
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
}

export default app; // in case you import it elsewhere



