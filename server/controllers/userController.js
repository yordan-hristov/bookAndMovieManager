import express from 'express';
const router = express.Router();

import * as userService from '../services/userService.js';

const createUser = async (req,res,next) => {
    try {
        const {fullName, email} = req.body;
        const user = await userService.createUser({fullName,email});

        res.json(user);
    }catch(err) {
        console.log(err);
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

const getUserMovies = async (req,res,next) => {
    try{
        const email = req.params.email;
        const user = await userService.getByEmail(email);
        
        res.json(user.movies);
    }catch(err){
        console.log(err)
    }
}

const patchUserMovies = async (req,res,next) => {
    try{
        const email = req.params.email;
        const body = req.body;

        await userService.patchUserMovies(email,body)

        res.json({});
    }catch(err){
        console.log(err);
    }
}

router.post('/', createUser);
router.get('/:email', getByEmail);
router.get('/:email/movies', getUserMovies);
router.patch('/:email/movies', patchUserMovies);

export default router;