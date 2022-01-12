import express from 'express';
const router = express.Router({mergeParams: true});

import * as bookService from '../services/bookService.js';


const createBook = async (req,res,next) => {
    try {
        const data = req.body;
        const book = await bookService.createBook(data);

        res.json(book);
    }catch(err) {
        console.log(err)
    }
}

const getAllBooks = async (req,res,next) => {
    try {
        const books = await bookService.getAllBooks();

        res.json(books)
    }catch(err) {
        console.log(err);
    }
}

const getBooksByQuery = async (req,res,next) => {
    try {
        const query = req.query.name;
        const books = await bookService.getBooksByQuery(query.toLowerCase());

        res.json(books);
    }catch(err) {
        console.log(err)
    }
}

const getBookById = async (req,res,next) => {
    try{
        const id = req.params.id;
        const book = await bookService.getBookById(id);

        res.json(book);
    }catch(err) {
        console.log(err)
    }
}

router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/search', getBooksByQuery);
router.get('/:id', getBookById);

export default router;