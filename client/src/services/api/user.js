const serverUrl = 'http://localhost:5000';

const urls = {
    createUser: `${serverUrl}/users`,
    getByEmail: (email) => `${serverUrl}/users/${email}`
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

