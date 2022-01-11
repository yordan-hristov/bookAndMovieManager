const moviesApiKey = 'd32546bf2dfc328f72fdef2644f3bb78';
const moviesApiUrl = 'https://api.themoviedb.org/3/';

const urls = {
    popular: `${moviesApiUrl}tv/popular?api_key=${moviesApiKey}&language=en-US&page=1`,
    topRated: `${moviesApiUrl}tv/top_rated?api_key=${moviesApiKey}&language=en-US&page=1`,
    onAir: `${moviesApiUrl}tv/on_the_air?api_key=${moviesApiKey}&language=en-US&page=1`,
    byId: (id) => `${moviesApiUrl}tv/${id}?api_key=${moviesApiKey}&language=en-US`,
    withQuery: (query,page) => `${moviesApiUrl}search/movie?api_key=${moviesApiKey}&language=en-US&query=${query}&page=${page}`
};

export const getPopularSeries = () => {
    return fetch(urls.popular)
        .then(res => res.json());
}

export const getTopRatedSeries = () => {
    return fetch(urls.topRated)
        .then(res => res.json());
}

export const getOnAirSeries = () => {
    return fetch(urls.onAir)
        .then(res => res.json());
}

export const getSeriesById = (id) => {
    return fetch(urls.byId(id))
        .then(res => res.json());
}