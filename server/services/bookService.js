import Book from "../models/Book.js";
import User from "../models/User.js";

export const createBook = (data) => Book.create(data);

export const getAllBooks = () => Book.find();

export const getBooksByQuery = (query) => Book.find({title: RegExp(query,'i')});

export const getBookById = (id) => Book.findById(id);

export const patchBookById = async (id,email, value) => {
    const user = await User.findOne({email: email});
    const book = await Book.findById(id);

    user.books.rated.push({id, rating: value});
    book.rating.ratings.push({userEmail: email, userRating: value});

    const allRatingsArr = book.rating.ratings.map(e => Number(e.userRating));

    const rating = allRatingsArr.reduce((sum,value) => {
        return sum + value;
    }, 0) / allRatingsArr.length;

    book.rating.rating = Math.round(rating * 100) / 100;

    await book.save();
    await user.save();
}