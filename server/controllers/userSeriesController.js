import express from 'express';
const router = express.Router({mergeParams: true});

import * as userService from '../services/userService.js';

const getUserSeries = async (req,res,next) => {
    try{
        const email = req.params.email;
        const user = await userService.getByEmail(email);
        
        res.json(user.series);
    }catch(err){
        console.log(err)
    }
}

const patchUserSeries = async (req,res,next) => {
    try{
        const email = req.params.email;
        const body = req.body;

        await userService.patchUserSeries(email,body)

        res.json({});
    }catch(err){
        console.log(err);
    }
}

router.get('/', getUserSeries);
router.patch('/', patchUserSeries);

export default router;