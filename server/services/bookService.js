import Book from "../models/Book.js";

export const createBook = (data) => Book.create(data);

export const getAllBooks = () => Book.find();

export const getBooksByQuery = (query) => Book.find({title: RegExp(query,'i')});

export const getBookById = (id) => Book.findById(id);