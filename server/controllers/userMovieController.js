import express from 'express';
const router = express.Router({mergeParams: true});

import * as userService from '../services/userService.js';

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

router.get('/', getUserMovies);
router.patch('/', patchUserMovies);

export default router;