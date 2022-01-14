import React, { useEffect, useState } from 'react';
import { useUser } from '../../../contexts/UserContext';
import { getComicsById, patchComicsById } from '../../../services/api/comics';
import { patchUserComics } from '../../../services/api/user';
import Button from '../../shared/Button/Button';
import Rating from '../../shared/Rating/Rating';

import './ComicsDetails.scss';
import ComicsSelect from './ComicsSelect/ComicsSelect';

const ComicsDetails = ({ comicsId }) => {
    const { currentUser, userComics, updateComics } = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [comics, setComics] = useState();
    const [readlist, setReadlist] = useState();
    const [reading, setReading] = useState();
    const [rated, setRated] = useState();


    useEffect(() => {
        getComicsById(comicsId)
            .then(res => setComics(res))
            .finally(() => setIsLoading(false));

        setReadlist(userComics.readlist.some(e => e.id == comicsId));
        setReading(userComics.reading.some(e => e.id == comicsId));
        setRated(userComics.rated.some(e => e.id == comicsId));

        return () => {
            updateComics();
        }
    }, []);

    const handleReadlistClick = () => {
        patchUserComics(currentUser.email, { collection: 'readlist', comicsId })
            .then(res => setReadlist(!readlist));
    }

    const handleReadingClick = () => {
        patchUserComics(currentUser.email, { collection: 'reading', comicsId })
            .then(res => setReading(!reading));
    }

    const handleRateComics = (value) => {
        patchComicsById(comicsId,currentUser.email,value)
            .then(res => setRated(!rated));
    }

    return !isLoading && (
        <div className='comics-details'>
            <img src={comics.imgUrl}></img>
            <div className="book-details-info">
                <h3 className="book-details-info-title">{comics.title}</h3>
                <h4 className="book-details-info-year">{comics.year}</h4>
                <p className='book-details-info-overview'>{comics.overview}</p>
                <p className="book-details-info-publisher">{`Publisher: ${comics.publisher}`}</p>
                <p className="book-details-info-total-volumes">{`Volumes: ${comics.volumes.length}`}</p>
                <p className="book-details-info-rating">{`Rating: ${comics.rating.rating}/5`}</p>

                <Rating 
                rated={rated} 
                rating={userComics.rated.find(e => e.id === comicsId)?.rating || 0} 
                handleRating={handleRateComics} 
                />

                <div className="book-details-info-buttons">
                    {readlist ?
                        <Button svg={'minus'} text={'Readlist'} tooltip={'Remove'} clickHandler={handleReadlistClick} />
                        :
                        <Button svg={'plus'} text={'Readlist'} tooltip={'Add'} clickHandler={handleReadlistClick} />
                    }
                    {reading ?
                        <>
                        <Button svg={'cross'} text={'Reading'} tooltip={'Remove'} clickHandler={handleReadingClick} />
                        <ComicsSelect
                            volumes={comics.volumes}
                            progress={userComics.reading.find(e => e.id == comicsId)?.progress || {volume: '1', issue: '1'}}
                            email={currentUser.email}
                            comicsId={comicsId}
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

export default ComicsDetails;
