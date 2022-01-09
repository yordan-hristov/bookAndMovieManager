import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

import './MoviesRow.scss';

const MoviesRow = ({ title, movies }) => {

    return (
        <div className="movies-row">
            <h2 className="movies-row-title">{title}</h2>
            <div className="movies-row-movies" >
                {movies.map(m => {
                    return <MovieCard key={m.id} movie={m} />
                })}
            </div>
        </div>
    )
};

export default MoviesRow;
