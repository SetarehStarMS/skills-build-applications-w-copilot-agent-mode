import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectDatabase } from './config/database';

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 8000);
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: 'Mona' },
  { id: 2, name: 'Octocat' }
];
const teams = [{ id: 1, name: 'Agent Builders', members: 2 }];
const activities = [{ id: 1, userId: 1, type: 'Run', minutes: 30 }];
const workouts = [{ id: 1, name: 'Morning Cardio', difficulty: 'Medium' }];
const leaderboard = [{ id: 1, user: 'Mona', points: 120 }];

app.get('/api', (_req, res) => {
  res.json({ message: 'OctoFit API running', apiBaseUrl });
});

app.get('/api/users', (_req, res) => res.json(users));
app.get('/api/teams', (_req, res) => res.json(teams));
app.get('/api/activities', (_req, res) => res.json(activities));
app.get('/api/workouts', (_req, res) => res.json(workouts));
app.get('/api/leaderboard', (_req, res) => res.json(leaderboard));

const startServer = async (): Promise<void> => {
  try {
    await connectDatabase();
  } catch (error) {
    console.warn('MongoDB connection failed, continuing without DB:', error);
  }

  app.listen(port, () => {
    console.log(`Server listening on ${apiBaseUrl}`);
  });
};

void startServer();
