import React, { useEffect, useState } from 'react';
import { useUser } from '../../../contexts/UserContext';
import { getMovieById } from '../../../services/api/movies';
import { patchUserMovies } from '../../../services/api/user';
import Button from '../../shared/Button/Button';

import './MovieDetails.scss';

const MovieDetails = ({ movieId }) => {
    const { currentUser, userMovies, updateMovies } = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState();
    const [watched, setWatched] = useState();
    const [watchlist, setWatchlist] = useState();

    useEffect(() => {
        getMovieById(movieId)
            .then(res => {
                setMovie(res);
            }).finally(() => {
                setIsLoading(false)
            });

        setWatched(userMovies.watched.includes(movieId.toString()));
        setWatchlist(userMovies.watchlist.includes(movieId.toString()));

        return () => {
            updateMovies();
        }
    }, []);

    const handleWatchedClick = () => {
        patchUserMovies(currentUser.email, { collection: 'watched', movieId })
            .then(res => setWatched(!watched));
    }

    const handleWatchlistClick = () => {
        patchUserMovies(currentUser.email, { collection: 'watchlist', movieId })
            .then(res => setWatchlist(!watchlist));
    }


    return !isLoading && (
        <div className='movie-details'>
            <img src={'http://image.tmdb.org/t/p/w500' + movie.poster_path}></img>
            <div className="movie-details-info">
                <h3 className="movie-details-info-title">{movie.original_title}</h3>
                <h4 className="movie-details-info-date">{movie.release_date}</h4>
                <p className='movie-details-info-overview'>{movie.overview}</p>
                <p className="movie-details-info-genres">{`Genres: ${movie.genres.map(g => g.name).join(', ')}`}</p>
                <p className="movie-details-info-duration">{`Duration: ${movie.runtime} minutes`}</p>

                <div className="movie-details-info-buttons">
                    {watchlist ?
                        <Button svg={'minus'} text={'Watchlist'} tooltip={'Remove'} clickHandler={handleWatchlistClick} />
                        :
                        <Button svg={'plus'} text={'Watchlist'} tooltip={'Add'} clickHandler={handleWatchlistClick} />
                    }
                    {watched ?
                        <Button svg={'cross'} text={'Watched'} tooltip={'Remove'} clickHandler={handleWatchedClick} />
                        :
                        <Button svg={'tick'} text={'Watched'} tooltip={'Add'} clickHandler={handleWatchedClick} />
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
