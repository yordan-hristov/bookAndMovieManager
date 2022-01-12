import express from 'express';
const router = express.Router();

import userController from './controllers/userController.js';
import bookController from './controllers/bookController.js';

router.use('/users', userController);
router.use('/books', bookController)

export default router;

