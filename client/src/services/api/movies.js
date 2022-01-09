const moviesApiKey = 'd32546bf2dfc328f72fdef2644f3bb78';
const moviesApiUrl = 'https://api.themoviedb.org/3/';

const urls = {
    popular: `${moviesApiUrl}movie/popular?api_key=${moviesApiKey}&language=en-US&page=1`,
    topRated: `${moviesApiUrl}movie/top_rated?api_key=${moviesApiKey}&language=en-US&page=1`,
    upcoming: `${moviesApiUrl}movie/upcoming?api_key=${moviesApiKey}&language=en-US&page=1`,
    byId: (id) => `${moviesApiUrl}movie/${id}?api_key=${moviesApiKey}&language=en-US&append_to_response=videos`,
    withQuery: (query,page) => `${moviesApiUrl}search/movie?api_key=${moviesApiKey}&language=en-US&query=${query}&page=${page}`
};

export const getPopularMovies = () => {
    return fetch(urls.popular)
        .then(res => res.json());
}

export const getTopRatedMovies = () => {
    return fetch(urls.topRated)
        .then(res => res.json());
}

export const getUpcomingMovies = () => {
    return fetch(urls.upcoming)
        .then(res => res.json());
}

export const getMovieById= (id) => {
    return fetch(urls.byId(id))
        .then(res => res.json());
}

export const getMoviesWithQuery = (query,page) => {
    return fetch(urls.withQuery(query,page))
        .then(res => res.json());
}