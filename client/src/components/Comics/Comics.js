import React, { useEffect, useState } from 'react';
import { getComicsByQuery } from '../../services/api/comics';
import ItemCard from '../ItemCard/ItemCard';
import SearchBar from '../shared/SearchBar/SearchBar';

import './Comics.scss';

const Comics = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [comics, setComics] = useState();
    const [query, setQuery] = useState('');

    useEffect(() => {
        getComicsByQuery(query)
            .then(res => setComics(res))
            .finally(() => setIsLoading(false))
    }, [query]);

    return !isLoading && (
        <div className='comics-page'>
            <SearchBar setQuery={setQuery} />
            <div className="comics-page-comics">
                {comics.map(c => {
                    return <ItemCard key={c._id} item={c} type={'comics'} />
                })}
            </div>

        </div>
    );
}

export default Comics;
