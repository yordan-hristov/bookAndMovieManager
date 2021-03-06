import mongoose from 'mongoose';

const comicsSchema = new mongoose.Schema({
    publisher: {
        type: String
    },
    title: {
        type: String
    },
    year: {
        type: String
    },
    volumes: [
        {
            _id: false,
            firstIssue: {type: String},
            lastIssue: {type: String}
        }
    ],
    overview: {
        type: String
    },
    imgUrl: {
        type: String
    },
    rating: {
        rating: {
            type: String,
            default: 0
        },
        ratings: [{
            userEmail: {type: String},
            userRating: {type: String}
        }]
    }

});

const Comics = mongoose.model('Comics', comicsSchema);

export default Comics;