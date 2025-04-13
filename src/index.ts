import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import projectRoutes from './routes/projectRoutes';
import settingsRoutes from './routes/settingsRoutes';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/construction-company'
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((error: Error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/settings', settingsRoutes);

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Construction Company API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
