import React, { useState } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';

import './MovieCard.scss'

const MovieCard = ({ movie }) => {
    const [displayDetails, setDisplayDetails] = useState(false);

    const toggleDisplayDetails = () => {
        setDisplayDetails(!displayDetails);
    }

    return (
        <>
            <div className="movie-card" onClick={toggleDisplayDetails}>
                <img src={'http://image.tmdb.org/t/p/w500' + movie.poster_path}></img>
                <h3>{movie.release_date}</h3>
            </div>
            {
                displayDetails ?
                    <MovieDetails movieId={movie.id} toggleDisplayDetails={toggleDisplayDetails} />
                    : null
            }
        </>
    );
}

export default MovieCard;
