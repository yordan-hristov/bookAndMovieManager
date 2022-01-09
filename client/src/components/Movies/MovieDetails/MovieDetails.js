import React, { useEffect, useState } from 'react';
import { getMovieById } from '../../../services/api/movies';

import './MovieDetails.scss';

const MovieDetails = ({ movieId,toggleDisplayDetails }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState();

    useEffect(() => {
        getMovieById(movieId)
            .then(res => {
                setMovie(res);
                console.log(res.genres.map(g => g.name).join(', '))
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);


    return (
        <div className="wrapper">
            {!isLoading ?
                <div className='movie-details'>
                    <img src={'http://image.tmdb.org/t/p/w500' + movie.poster_path}></img>
                    <div className="movie-details-info">
                        <div className="movie-details-info-close" onClick={() => toggleDisplayDetails()} >x</div>
                        <h3 className="movie-details-info-title">{movie.original_title}</h3>
                        <h4 className="movie-details-info-date">{movie.release_date}</h4>
                        <p className='movie-details-info-overview'>{movie.overview}</p>
                        <p className="movie-details-info-genres">{`Genres: ${movie.genres.map(g => g.name).join(', ')}`}</p>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default MovieDetails;
