import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/user.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Example route: Get user profile
router.get('/profile', authMiddleware, getUserProfile);

// Example route: Update user profile
router.put('/profile', authMiddleware, updateUserProfile);

export default router;