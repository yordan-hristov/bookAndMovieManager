import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    movies: {
        watched: [String],
        favorites: [String],
        watchlist: [String]
    },
    series : {
        watchlist: [String],
        watching: [
            {
                id: {type: String},
                progress: {
                    season: {
                        type: String,
                        default: '1'
                    },
                    episode: {
                        type: String,
                        default: '1'
                    }
                }
            }
        ]
    }
});

const User = mongoose.model('User', userSchema);

export default User;