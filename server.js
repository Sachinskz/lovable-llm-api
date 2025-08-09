import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Lovable LLM API is running 🚀" });
});

// Example POST route (for API calls)
app.post("/api/query", (req, res) => {
  const { prompt } = req.body;
  // In future: integrate with your AI model here
  res.json({ response: `You said: ${prompt}` });
});

// Port from Railway or default to 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});


