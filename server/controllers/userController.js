import express from 'express';
const router = express.Router({mergeParams: true});

import * as userService from '../services/userService.js';
import userMovieController from './userMovieController.js';
import userSeriesController from './userSeriesController.js';
import userBookController from './userBookController.js';
import userComicsController from './userComicsController.js';

const createUser = async (req,res,next) => {
    try {
        const {fullName, email} = req.body;
        const user = await userService.createUser({fullName,email});

        res.json(user);
    }catch(err) {
        res.json({message: 'Email is already used!'})
    }
};

const getByEmail = async (req,res,next) => {
    try {
        const email = req.params.email;
        const user = await userService.getByEmail(email).lean();
        
        res.json(user);
    }catch(err) {
        console.log(err);
    }
}

router.post('/', createUser);
router.get('/:email', getByEmail);

router.use('/:email/movies', userMovieController);
router.use('/:email/series', userSeriesController);
router.use('/:email/books', userBookController);
router.use('/:email/comics', userComicsController);

export default router;