import React, { useEffect, useState } from 'react';

import { getMoviesWithQuery } from '../../../services/api/movies';
import SearchBar from '../../shared/SearchBar/SearchBar';
import ItemCard from '../../ItemCard/ItemCard.js';

import './SearchResult.scss'

const SearchResult = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('a');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [resultMovies, setResultMovies] = useState([]);

    useEffect(() => {
        getMoviesWithQuery(query,currentPage)
            .then(res => {
                setResultMovies(res.results);
                setTotalPages(res.total_pages);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [query,currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    },[query]);

    const previousPageHandler = () => {
        if(currentPage === 1) return;
        
        setCurrentPage(currentPage - 1);
        window.scrollTo(0,0);
    }

    const nextPageHandler = () => {
        if(currentPage === totalPages) return;

        setCurrentPage(currentPage + 1);
        window.scrollTo(0,0);
    }

    return (
        <div className='search-result'>
            <SearchBar setQuery={setQuery} />
            <div className="search-result-movies">
                {!isLoading ?
                    resultMovies.map(m => {
                        return <ItemCard key={m.id} item={m} type={"movies"}/>
                    })
                    : null}
            </div>

            <div className="search-result-buttons">
                <div className="previous-page" onClick={previousPageHandler} >〈 Previous Page</div>
                <div className="total-pages">{`${currentPage}/${totalPages}`}</div>
                <div className="next-page" onClick={nextPageHandler}>Next Page 〉</div>
            </div>
        </div>
    );
}

export default SearchResult;
