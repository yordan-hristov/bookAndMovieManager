import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../services/api/movies.js';
import SearchBar from '../shared/SearchBar/SearchBar.js';

import './Movies.scss';
import ItemsRow from '../ItemsRow/ItemsRow.js';


const Movies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        Promise.all([
            getTopRatedMovies(),
            getPopularMovies(),
            getUpcomingMovies(),
        ]).then((res) => {
            setTopRatedMovies(res[0].results);
            setPopularMovies(res[1].results);
            setUpcomingMovies(res[2].results);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [])

    return (
        <div className='movies-page'>
            {!isLoading ?
            <>
            
            <Link className='search-link' to={'/movies/search'}>Search Movies</Link>

            <ItemsRow title={"Popular"} items={popularMovies} />
            <ItemsRow title={"Top Rated"} items={topRatedMovies} />
            <ItemsRow title={"Upcoming"} items={upcomingMovies} />
            </>
            : null}
        </div>
    );
}

export default Movies;
