import React, { useEffect, useState } from 'react';
import { getSeriesWithQuery } from '../../../services/api/series';
import ItemCard from '../../ItemCard/ItemCard';
import SearchBar from '../../shared/SearchBar/SearchBar';

import './SeriesSearch.scss';

const SeriesSearch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('a');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [resultSeries, setResultSeries] = useState([]);

    useEffect(() => {
        getSeriesWithQuery(query,currentPage)
            .then(res => {
                setResultSeries(res.results);
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
            <div className="search-result-series">
                {!isLoading ?
                    resultSeries.map(s => {
                        return <ItemCard key={s.id} item={s} type={"series"}/>
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

export default SeriesSearch;
