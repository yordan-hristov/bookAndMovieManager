import React, { useEffect, useState } from 'react';
import { useUser } from '../../../contexts/UserContext';
import { getBookById } from '../../../services/api/books';
import { patchUserBooks } from '../../../services/api/user';
import Button from '../../shared/Button/Button';

import './BookDetails.scss';
import BookSelect from './BookSelect/BookSelect';

const BookDetails = ({ bookId }) => {
    const { currentUser, userBooks, updateBooks } = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [book, setBook] = useState();
    const [readlist, setReadlist] = useState();
    const [reading, setReading] = useState();

    useEffect(() => {
        getBookById(bookId)
            .then(res => setBook(res))
            .finally(() => setIsLoading(false));

        setReadlist(userBooks.readlist.some(e => e.id == bookId));
        setReading(userBooks.reading.some(e => e.id == bookId));

        return () => {
            updateBooks();
        }
    }, [])

    const handleReadlistClick = () => {
        patchUserBooks(currentUser.email, { collection: 'readlist', bookId })
            .then(res => setReadlist(!readlist));
    }

    const handleReadingClick = () => {
        patchUserBooks(currentUser.email, { collection: 'reading', bookId })
            .then(res => setReading(!reading));
    }

    return !isLoading && (
        <div className='book-details'>
            <img src={book.imgUrl}></img>
            <div className="book-details-info">
                <h3 className="book-details-info-title">{book.title}</h3>
                <h4 className="book-details-info-year">{book.year}</h4>
                <p className='book-details-info-overview'>{book.overview}</p>
                <p className="book-details-info-author">{`Author: ${book.author}`}</p>
                <p className="book-details-info-total-pages">{`Pages: ${book.totalPages}`}</p>
                <p className="book-details-info-total-chapters">{`Chapters: ${book.totalChapters}`}</p>

                <div className="book-details-info-buttons">
                    {readlist ?
                        <Button svg={'minus'} text={'Readlist'} tooltip={'Remove'} clickHandler={handleReadlistClick} />
                        :
                        <Button svg={'plus'} text={'Readlist'} tooltip={'Add'} clickHandler={handleReadlistClick} />
                    }
                    {reading ?
                        <>
                            <Button svg={'cross'} text={'Reading'} tooltip={'Remove'} clickHandler={handleReadingClick} />
                            <BookSelect 
                            chapters={book.totalChapters} 
                            bookId={bookId} 
                            email={currentUser.email}
                            userChapter={userBooks.reading.find(b => b.id == bookId)?.chapter || '1'}
                            />
                        </>
                        :
                        <Button svg={'tick'} text={'Reading'} tooltip={'Add'} clickHandler={handleReadingClick} />
                    }
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
