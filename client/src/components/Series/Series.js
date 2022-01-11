import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getOnAirSeries, getPopularSeries, getTopRatedSeries } from '../../services/api/series';
import ItemsRow from '../ItemsRow/ItemsRow.js';

import './Series.scss';

const Series = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [popularSeries, setPopularSeries] = useState([]);
    const [topRatedSeries, setTopRatedSeries] = useState([]);
    const [onAirSeries, setOnAirSeries] = useState([]);

    useEffect(() => {
        Promise.all([
            getTopRatedSeries(),
            getPopularSeries(),
            getOnAirSeries(),
        ]).then((res) => {
            setTopRatedSeries(res[0].results);
            setPopularSeries(res[1].results);
            setOnAirSeries(res[2].results);
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <div className='series-page'>
            {!isLoading ?
            <>
            <Link className='search-link' to={'/series/search'}>Search Series</Link>
            <ItemsRow title={'Popular'} items={popularSeries} type={'series'}/>
            <ItemsRow title={'Top Rated'} items={topRatedSeries} type={'series'}/>
            <ItemsRow title={'On Air'} items={onAirSeries} type={'series'}/>
            </>
            : null}
        </div>
    );
}

export default Series;
