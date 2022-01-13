import Comics from "../models/Comics.js";

export const createComics = (data) => Comics.create(data);

export const getComicsByQuery = (query) => Comics.find({ title: RegExp(query, 'i') });

export const getComicsById = (id) => Comics.findById(id);
