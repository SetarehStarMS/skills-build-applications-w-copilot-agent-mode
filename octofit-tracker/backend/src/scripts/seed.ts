import { connectDatabase } from '../config/database';

const runSeed = async (): Promise<void> => {
  await connectDatabase();
  console.log('Seed the octofit_db database with test data');
  process.exit(0);
};

void runSeed();
