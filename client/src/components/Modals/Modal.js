import React, { useEffect} from 'react';
import BookDetails from './BookDetails/BookDetails';

import './Modal.scss';
import MovieDetails from './MovieDetails/MovieDetails';
import SeriesDetails from './SeriesDetails/SeriesDetails';

const Modal = ({itemId, closeModal, type}) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflowY = 'unset';
    })

    const handleCloseClick = (e) => {
        e.target.className === 'modal' && closeModal();
    }

    return (
        <div className='modal' onClick={handleCloseClick}>
            {type === 'movies' &&
                <MovieDetails movieId={itemId} />
            }
            {type === 'series' &&
                <SeriesDetails seriesId={itemId} />
            }
            {type === 'books' &&
                <BookDetails bookId={itemId}/>
            }
        </div>
    );
}

export default Modal;
