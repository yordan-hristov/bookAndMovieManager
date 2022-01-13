import React, { useEffect, useState } from 'react';
import { useUser } from '../../../contexts/UserContext';
import { getBookById } from '../../../services/api/books';
import { getUserBooks } from '../../../services/api/user';
import ItemCard from '../../ItemCard/ItemCard';
import ProfileContentNav from '../ProfileContentNav/ProfileContentNav';

import './ProfileBooks.scss';

const ProfileBooks = () => {
    const { userBooks, currentUser } = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [collection, setCollection] = useState('readlist');
    const [books, setBooks] = useState([]);
    const [sortBy, setSortBy] = useState('firstAdded');

    useEffect(() => {
        getUserBooks(currentUser.email, {populated: true}, collection)
            .then(res => {
                sortBy == 'firstAdded' && setBooks(res);
                sortBy == 'lastAdded' && setBooks(res.reverse());
            })
            .finally(() => setIsLoading(false));

    }, [collection, userBooks, sortBy]);

    const readlistClickHandler = () => {
        setCollection('readlist');
    }

    const readingClickHandler = () => {
        setCollection('reading');
    }

    return !isLoading && (
        <div className='profile-books-page'>
            <h1 className='profile-books-page-title'>MY BOOKS</h1>
            <ProfileContentNav
                firstLink={{ text: 'Readlist', active: collection == 'readlist', clickHandler: readlistClickHandler }}
                secondLink={{ text: 'Reading', active: collection == 'reading', clickHandler: readingClickHandler }}
                setSortBy={setSortBy}
            />
            <div className="profile-books-page-books">
                {books.length > 0 ?
                    books.map(b => {
                        return <ItemCard
                            item={b.book}
                            type="books"
                            key={b.id}
                        />
                    }) : <p>No books found</p>}
            </div>
        </div>
    );
}

export default ProfileBooks;
