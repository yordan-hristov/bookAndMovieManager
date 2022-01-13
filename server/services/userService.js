import User from '../models/User.js';

export const createUser = (user) => User.create(user);

export const getByEmail = (email) => User.findOne({ email: email });

export const patchUserMovies = async (email, { collection, movieId }) => {
    const user = await User.findOne({ email: email })

    const moviesArr = user.movies[collection];
    const index = moviesArr.indexOf(movieId);

    index == '-1' ?
        moviesArr.push(movieId) :
        moviesArr.splice(index, 1);

    await user.save();
}

export const patchUserSeries = async (email, { collection, seriesId, progress }) => {
    const user = await User.findOne({ email: email })

    const seriesArr = user.series[collection];
    if (collection == 'watching') {
        let series = seriesArr.find(s => s.id == seriesId.toString());

        if (progress) {
            Object.assign(series.progress, progress)

        } else {
            const index = seriesArr.indexOf(series);

            index == '-1' ?
                seriesArr.push({ id: seriesId }) :
                seriesArr.splice(index, 1);
        }

    } else {
        const index = seriesArr.indexOf(seriesId);

        index == '-1' ?
            seriesArr.push(seriesId) :
            seriesArr.splice(index, 1)
    }

    await user.save();
}

export const patchUserBooks = async (email, { collection, bookId, chapter }) => {
    const user = await User.findOne({ email: email })

    const booksArr = user.books[collection];

    if (collection == 'reading') {
        const book = booksArr.find(b => b.id == bookId.toString());

        if (chapter) {
            book.chapter = chapter;
        } else {
            const index = booksArr.indexOf(book);

            index == '-1' ?
                booksArr.push({ id: bookId }) :
                booksArr.splice(index, 1);
        }
    } else {
        const index = booksArr.indexOf(bookId);

        index == '-1' ?
            booksArr.push(bookId) :
            booksArr.splice(index, 1)
    }


    await user.save();
}

export const patchUserComics = async (email, { collection, comicsId, progress }) => {
    const user = await User.findOne({ email: email })

    const comicsArr = user.comics[collection];
    if (collection == 'reading') {
        let comics = comicsArr.find(s => s.id == comicsId.toString());

        if (progress) {
            Object.assign(comics.progress, progress)
        } else {
            const index = comicsArr.indexOf(comics);

            index == '-1' ?
                comicsArr.push({ id: comicsId }) :
                comicsArr.splice(index, 1);
        }

    } else {
        const index = comicsArr.indexOf(comicsId);

        index == '-1' ?
            comicsArr.push(comicsId) :
            comicsArr.splice(index, 1)
    }

    await user.save();
}