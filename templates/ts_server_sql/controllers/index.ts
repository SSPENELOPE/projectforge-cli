import express from 'express';
const router = express.Router();

import userRoutes from './user';
import apiRoutes from './api';

router.use("/user", userRoutes);
router.use("/api", apiRoutes);

export default router;