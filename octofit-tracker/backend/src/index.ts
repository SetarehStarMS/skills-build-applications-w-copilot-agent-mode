import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 8000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit_db';

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API is running', baseUrl });
});

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB (octofit_db)');
    app.listen(PORT, () => {
      console.log(`Backend listening on port ${PORT}`);
      console.log(`Base URL: ${baseUrl}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

export default app;
