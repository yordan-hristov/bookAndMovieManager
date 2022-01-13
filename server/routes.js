import express from 'express';
const router = express.Router();

import userController from './controllers/userController.js';
import bookController from './controllers/bookController.js';
import comicsController from './controllers/comicsController.js';

router.use('/users', userController);
router.use('/books', bookController);
router.use('/comics', comicsController);

export default router;

