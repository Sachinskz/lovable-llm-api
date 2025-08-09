// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is live!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Get API key from environment variable
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error("❌ ERROR: OPENAI_API_KEY not set in environment variables.");
  process.exit(1);
}

// /generate — Convert plain English to SQL
app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "No prompt provided" });

    const sqlPrompt = `You are an expert SQL generator. Convert this request into a SQL query: ${prompt}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: sqlPrompt }],
        temperature: 0
      })
    });

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content?.trim() || "";

    res.json({ result });
  } catch (error) {
    console.error("Error in /generate:", error);
    res.status(500).json({ error: "Failed to generate SQL" });
  }
});

// /run_sql — For now returns mock data
app.post("/run_sql", async (req, res) => {
  const { sql } = req.body;
  console.log("Running SQL:", sql);

  // TODO: Connect to real database
  res.json({
    data: [
      { id: 1, value: "Example" },
      { id: 2, value: "Data" }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



