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

export const patchUserSeries = async (email,{collection,seriesId,progress}) => {
    const user = await User.findOne({email: email})

    const seriesArr = user.series[collection];
    if(collection == 'watching'){
        let series = seriesArr.find(s => s.id == seriesId.toString());
        
        if(progress) {
            Object.assign(series.progress, progress)

        }else{
            const index = seriesArr.indexOf(series);

            index == '-1' ?
            seriesArr.push({id: seriesId}) :
            seriesArr.splice(index, 1);
        }

    }else{
        const index = seriesArr.indexOf(seriesId);
    
        index == '-1' ? 
        seriesArr.push(seriesId) :
        seriesArr.splice(index,1)
    }

    await user.save();
}