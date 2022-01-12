const serverUrl = 'http://localhost:5000';

const urls = {
    createUser: `${serverUrl}/users`,
    getByEmail: (email) => `${serverUrl}/users/${email}`,
    getUserMovies: (email) => `${serverUrl}/users/${email}/movies`,
    getUserSeries: (email) => `${serverUrl}/users/${email}/series`,
    getUserBooks: (email) => `${serverUrl}/users/${email}/books`,
    patchMovies: (email) => `${serverUrl}/users/${email}/movies`,
    patchSeries: (email) => `${serverUrl}/users/${email}/series`,
    patchBooks: (email) => `${serverUrl}/users/${email}/books`,
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

export const getUserBooks = (email) => {
    return fetch(urls.getUserBooks(email))
        .then(res => res.json())
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

