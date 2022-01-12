import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    author: {
        type: String
    },
    title: {
        type: String
    },
    year: {
        type: String
    },
    totalPages: {
        type: String
    },
    totalChapters: {
        type: String
    },
    overview: {
        type: String
    },
    imgUrl: {
        type: String
    }

});

const Book = mongoose.model('Book', bookSchema);

export default Book;