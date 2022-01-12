import express from 'express';
const router = express.Router({mergeParams: true});

import * as userService from '../services/userService.js';

const getUserBooks = async (req,res,next) => {
    try{
        const email = req.params.email;
        const user = await userService.getByEmail(email);
        
        res.json(user.books);
    }catch(err){
        console.log(err)
    }
}

const patchUserBooks = async (req,res,next) => {
    try{
        const email = req.params.email;
        const body = req.body;

        await userService.patchUserBooks(email,body);

        res.json({});
    }catch(err){
        console.log(err);
    }
}

router.get('/', getUserBooks);
router.patch('/', patchUserBooks);

export default router;