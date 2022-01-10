const serverUrl = 'http://localhost:5000';

const urls = {
    createUser: `${serverUrl}/users`,
    getByEmail: (email) => `${serverUrl}/users/${email}`,
    getUserMovies: (email) => `${serverUrl}/users/${email}/movies`,
    patchMovies: (email) => `${serverUrl}/users/${email}/movies`
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

export const patchUser = (email, body) => {
    return fetch(urls.patchMovies(email), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(body)
    }).then(res => res.json());
}

