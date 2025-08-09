import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// POST /generate
app.post("/generate", (req, res) => {
  const { prompt } = req.body;
  // Your LLM call here
  res.json({ result: `You sent: ${prompt}` });
});

// POST /run_sql
app.post("/run_sql", (req, res) => {
  const { sql } = req.body;
  // Your SQL execution logic here
  res.json({ data: [{ message: `Ran SQL: ${sql}` }] });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app; // in case you import it elsewhere




