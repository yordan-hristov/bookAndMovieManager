const serverUrl = 'http://localhost:5000';

const urls = {
    getAll: `${serverUrl}/books`,
    getByQuery: (query) => `${serverUrl}/books/search?name=${query}`,
    getById: (id) => `${serverUrl}/books/${id}`
}

export const getAllBooks = () => {
    return fetch(urls.getAll)
        .then(res => res.json());
}

export const getBooksByQuery = (query) => {
    return fetch(urls.getByQuery(query))
        .then(res => res.json());
}

export const getBookById = (id) => {
    return fetch(urls.getById(id))
        .then(res => res.json());
}