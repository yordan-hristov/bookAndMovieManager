import React, { useEffect, useState } from 'react';
import { getAllBooks, getBooksByQuery } from '../../services/api/books';
import ItemCard from '../ItemCard/ItemCard';
import SearchBar from '../shared/SearchBar/SearchBar';

import './Books.scss';

const Books = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState();
    const [query, setQuery] = useState('');

    useEffect(() => {
        getBooksByQuery(query)
            .then(res => setBooks(res))
            .finally(() => setIsLoading(false))
    }, [query]);

    return !isLoading && (
        <div className='books-page'>
            <SearchBar setQuery={setQuery} />
            <div className="books-page-books">
                {books.map(b => {
                    return <ItemCard key={b._id} item={b} type={'books'} />
                })}
            </div>

        </div>
    );
}

export default Books;
