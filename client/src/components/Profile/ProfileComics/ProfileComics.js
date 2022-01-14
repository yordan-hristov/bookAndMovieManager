import React, { useEffect, useState } from 'react';
import { useUser } from '../../../contexts/UserContext';
import { getUserComics } from '../../../services/api/user';
import ItemCard from '../../ItemCard/ItemCard';
import ProfileContentNav from '../ProfileContentNav/ProfileContentNav';

import './ProfileComics.scss';

const ProfileComics = () => {
    const { userComics, currentUser } = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [collection, setCollection] = useState('readlist');
    const [comics, setComics] = useState([]);
    const [sortBy, setSortBy] = useState('firstAdded');

    useEffect(() => {
        getUserComics(currentUser.email, { populated: true }, collection)
            .then(res => {
                sortBy == 'firstAdded' && setComics(res);
                sortBy == 'lastAdded' && setComics(res.reverse());
            })
            .finally(() => setIsLoading(false));

    }, [collection, userComics, sortBy]);

    const readlistClickHandler = () => {
        setCollection('readlist');
    }

    const readingClickHandler = () => {
        setCollection('reading');
    }

    return !isLoading && (
        <div className='profile-comics-page'>
            <h1 className='profile-comics-page-title'>MY COMICS</h1>
            <ProfileContentNav
                firstLink={{ text: 'Readlist', active: collection == 'readlist', clickHandler: readlistClickHandler }}
                secondLink={{ text: 'Reading', active: collection == 'reading', clickHandler: readingClickHandler }}
                setSortBy={setSortBy}
            />
            <div className="profile-comics-page-comics">
                {comics.length > 0 ?
                    comics.map(c => {
                        return <ItemCard
                            item={c.comics}
                            type="comics"
                            key={c.id}
                        />
                    }) : <p>No comics found</p>}
            </div>
        </div>
    );
}

export default ProfileComics;
