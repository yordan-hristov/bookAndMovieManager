const serverUrls = {
    development: 'http://localhost:5000',
    production: 'https://book-and-movie-manager.herokuapp.com'
};

const serverUrl = serverUrls[process.env.NODE_ENV.trim()];

const urls = {
    createUser: `${serverUrl}/users`,
    getByEmail: (email) => `${serverUrl}/users/${email}`,
    getUserMovies: (email) => `${serverUrl}/users/${email}/movies`,
    getUserSeries: (email) => `${serverUrl}/users/${email}/series`,
    getUserBooks: (email, populated, collection) => `${serverUrl}/users/${email}/books?populated=${populated}&collection=${collection}`,
    getUserComics: (email, populated, collection) => `${serverUrl}/users/${email}/comics?populated=${populated}&collection=${collection}`,
    patchMovies: (email) => `${serverUrl}/users/${email}/movies`,
    patchSeries: (email) => `${serverUrl}/users/${email}/series`,
    patchBooks: (email) => `${serverUrl}/users/${email}/books`,
    patchComics: (email) => `${serverUrl}/users/${email}/comics`,
}

export const createUser = (fullName, email) => {
    return fetch(urls.createUser, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ fullName, email })
    }).then(res => res.json());
}

export const getUserByEmail = (email) => {
    return fetch(urls.getByEmail(email))
        .then(res => res.json());
}

export const getUserMovies = (email) => {
    return fetch(urls.getUserMovies(email))
        .then(res => res.json());
}

export const patchUserMovies = (email, body, progress) => {
    return fetch(urls.patchMovies(email), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(body)
    }).then(res => res.json());
}

export const getUserSeries = (email) => {
    return fetch(urls.getUserSeries(email))
        .then(res => res.json());
}

export const patchUserSeries = (email, body) => {
    return fetch(urls.patchSeries(email), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(body)
    }).then(res => res.json());
}

export const getUserBooks = (email, {populated}, collection) => {
    return fetch(urls.getUserBooks(email, populated, collection))
        .then(res => res.json());
}

export const patchUserBooks = (email, body) => {
    return fetch(urls.patchBooks(email), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(body)
    }).then(res => res.json());
}

export const getUserComics = (email, {populated}, collection) => {
    return fetch(urls.getUserComics(email,populated,collection))
        .then(res => res.json());
}

export const patchUserComics = (email, body) => {
    return fetch(urls.patchComics(email), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(body)
    }).then(res => res.json());
}

