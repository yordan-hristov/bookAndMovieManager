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
        watchlist: [String]
    },
    series: {
        watchlist: [String],
        watching: [
            {
                id: { type: String },
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
    },
    books: {
        readlist: [{
            _id: false,
            id: {type: String},
            book: {
                type: mongoose.Types.ObjectId,
                ref: 'Book'
            }
        }],
        reading: [
            {
                _id: false,
                id: {type: String},
                book: { 
                    type: mongoose.Types.ObjectId,
                    ref: 'Book'
                },
                chapter: {
                    type: String,
                    default: '1'
                }

            }
        ]
    },
    comics: {
        readlist: [{
            _id: false,
            id: {type: String},
            comics: {
                type: mongoose.Types.ObjectId,
                ref: 'Comics'
            }
        }],
        reading: [
            {
                _id: false,
                id: {type: String},
                comics: {
                    type: mongoose.Types.ObjectId,
                    ref: 'Comics'
                },
                progress: {
                    volume: {
                        type: String,
                        default: '1'
                    },
                    issue: {
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