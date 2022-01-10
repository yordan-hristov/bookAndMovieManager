import User from '../models/User.js';

export const createUser = (user) => User.create(user);

export const getByEmail = (email) => User.findOne({email: email});

export const patchUserMovies = async (email,{collection, movieId}) => {
    const user = await User.findOne({email: email})
    
    const moviesArr = user.movies[collection];
    const index = moviesArr.indexOf(movieId);

    index == '-1' ? 
    moviesArr.push(movieId) :
    moviesArr.splice(index,1);

    await user.save();
}