const serverUrl = 'http://localhost:5000';

const urls = {
    getByQuery: (query) => `${serverUrl}/comics/search?name=${query}`,
    getById: (id) => `${serverUrl}/comics/${id}`
}

export const getComicsByQuery = (query) => {
    return fetch(urls.getByQuery(query))
        .then(res => res.json());
}

export const getComicsById = (id) => {
    return fetch(urls.getById(id))
        .then(res => res.json());
}

export const patchComicsById = (id,email,value) => {
    return fetch(urls.getById(id), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({ email, value })
    }).then(res => res.json());
}