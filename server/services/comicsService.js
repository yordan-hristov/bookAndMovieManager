import Comics from "../models/Comics.js";
import User from "../models/User.js";

export const createComics = (data) => Comics.create(data);

export const getComicsByQuery = (query) => Comics.find({ title: RegExp(query, 'i') });

export const getComicsById = (id) => Comics.findById(id);

export const patchComicsById = async (id,email, value) => {
    const user = await User.findOne({email: email});
    const comics = await Comics.findById(id);

    user.comics.rated.push({id, rating: value});
    comics.rating.ratings.push({userEmail: email, userRating: value});

    const allRatingsArr = comics.rating.ratings.map(e => Number(e.userRating));

    const rating = allRatingsArr.reduce((sum,value) => {
        return sum + value;
    }, 0) / allRatingsArr.length;

    comics.rating.rating = Math.round(rating * 100) / 100;

    await comics.save();
    await user.save();
}