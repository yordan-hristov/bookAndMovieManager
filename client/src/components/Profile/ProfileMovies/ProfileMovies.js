import React, { useEffect, useState } from 'react';
import ProfileContentNav from '../ProfileContentNav/ProfileContentNav';
import ItemCard from '../../ItemCard/ItemCard.js';
import { useUser } from '../../../contexts/UserContext';

import './ProfileMovies.scss';
import { getMovieById } from '../../../services/api/movies';

const ProfileMovies = () => {
    const { userMovies } = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [collection, setCollection] = useState('watchlist');
    const [movies, setMovies] = useState();
    const [sortBy, setSortBy] = useState('firstAdded');

    useEffect(() => {
        Promise.all(
            userMovies[collection].map(id => {
                return getMovieById(id);
            })
        )
            .then(res => {
                sortBy == 'firstAdded' && setMovies(res);
                sortBy == 'lastAdded' && setMovies(res.reverse());
            })
            .finally(() => setIsLoading(false))

    }, [collection, userMovies, sortBy]);

    const watchlistClickHandler = () => {
        setCollection('watchlist');
    }

    const watchedClickHandler = () => {
        setCollection('watched');
    }

    return !isLoading && (
        <div className='profile-movies-page'>
            <h1 className='profile-movies-page-title'>PROFILE MOVIES</h1>
            <ProfileContentNav
                firstLink={{ text: 'Watchlist', active: collection == 'watchlist', clickHandler: watchlistClickHandler }}
                secondLink={{ text: 'Watched', active: collection == 'watched', clickHandler: watchedClickHandler }}
                setSortBy={setSortBy}
            />
            <div className="profile-movies-page-movies">
                {movies.length > 0 ?
                    movies.map(m => {
                        return <ItemCard
                            item={m}
                            type="movies"
                            key={m.id}
                        />
                    }) : <p>No movies found</p>}
            </div>
        </div>
    );
}

export default ProfileMovies;
