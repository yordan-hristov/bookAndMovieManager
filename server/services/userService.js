import User from '../models/User.js';

export const createUser = (user) => User.create(user);

export const getByEmail = (email) => User.findOne({email: email});