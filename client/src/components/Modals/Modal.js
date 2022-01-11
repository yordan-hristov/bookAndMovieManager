import React, { useEffect} from 'react';

import './Modal.scss';
import MovieDetails from './MovieDetails/MovieDetails';

const Modal = ({itemId, closeModal, type}) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflowY = 'unset';
    })

    const handleCloseClick = (e) => {
        e.target.className == 'modal' && closeModal();
    }

    return (
        <div className='modal' onClick={handleCloseClick}>
            {type == 'movies' &&
                <MovieDetails movieId={itemId} />
            }
        </div>
    );
}

export default Modal;
