import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import { authMiddleware } from './src/middlewares/authMiddleware.js';
import { errorMiddleware } from './src/middlewares/errorMiddleware.js';

dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', authMiddleware, userRoutes);

// Root Test Route
app.get('/', (req, res) => {
  res.send('✅ Backend API is running...');
});

// Global Error Handler
app.use(errorMiddleware);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
