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
        const user = await userService.getByEmail(email);
        
        res.json(user);
    }catch(err) {
        console.log(err);
    }
}

router.post('/', createUser);
router.get('/:email', getByEmail);

export default router;