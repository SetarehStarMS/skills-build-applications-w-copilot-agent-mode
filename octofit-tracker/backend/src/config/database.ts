import mongoose from 'mongoose';

const defaultUri = 'mongodb://127.0.0.1:27017/octofit_db';

export const connectDatabase = async (): Promise<void> => {
  const mongoUri = process.env.MONGODB_URI ?? defaultUri;
  await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 2000 });
};
