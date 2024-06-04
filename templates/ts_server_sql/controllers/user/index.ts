import express from 'express';
const router = express.Router();

import authRoutes from './auth';

router.use("/auth", authRoutes);

export default router;