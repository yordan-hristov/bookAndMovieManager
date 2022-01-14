import express from 'express';
const router = express.Router({mergeParams: true});

import * as userService from '../services/userService.js';

const getUserComics = async (req,res,next) => {
    try{
        const email = req.params.email;
        const populated = req.query.populated;
        const collection = req.query.collection;
        
        const comics = await userService.getUserComics(email, populated, collection);

        res.json(comics);
    }catch(err){
        console.log(err)
    }
}

const patchUserComics = async (req,res,next) => {
    try{
        const email = req.params.email;
        const body = req.body;

        await userService.patchUserComics(email,body)

        res.json({});
    }catch(err){
        console.log(err);
    }
}

router.get('/', getUserComics);
router.patch('/', patchUserComics);

export default router;