import express from 'express';
const router = express.Router({mergeParams: true});

import * as comicsService from '../services/comicsService.js';

const createComics = async (req,res,next) => {
    try {
        const data = req.body;
        const comics = await comicsService.createComics(data);

        res.json(comics);
    }catch(err) {
        console.log(err)
    }
}

const getComicsByQuery = async (req,res,next) => {
    try {
        const query = req.query.name;
        const comics = await comicsService.getComicsByQuery(query.toLowerCase());

        res.json(comics);
    }catch(err) {
        console.log(err)
    }
}

const getComicsById = async (req,res,next) => {
    try{
        const id = req.params.id;
        const book = await comicsService.getComicsById(id);

        res.json(book);
    }catch(err) {
        console.log(err)
    }
}

const patchComicsById = async (req,res,next) => {
    try{
        const email = req.body.email;
        const value = req.body.value;
        const id = req.params.id;

        await comicsService.patchComicsById(id, email, value);

        res.json({})
    }catch(err) {
        console.log(err)
    }
}

router.post('/', createComics);
router.get('/search', getComicsByQuery);
router.get('/:id', getComicsById);
router.patch('/:id', patchComicsById);

export default router;