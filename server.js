// Import required modules
import express from "express";
import cors from "cors";

// Create an Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "Server is running successfully!" });
});

// Example API endpoint
app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json({ received: data, status: "success" });
});

// Use the port from environment variables or default to 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});



