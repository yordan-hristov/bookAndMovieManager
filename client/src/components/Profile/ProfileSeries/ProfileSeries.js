import React, { useEffect, useState } from 'react';
import { useUser } from '../../../contexts/UserContext';
import { getSeriesById } from '../../../services/api/series';
import ItemCard from '../../ItemCard/ItemCard';
import ProfileContentNav from '../ProfileContentNav/ProfileContentNav';

import './ProfileSeries.scss';

const ProfileSeries = () => {
    const { userSeries } = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [collection, setCollection] = useState('watchlist');
    const [series, setSeries] = useState();
    const [sortBy, setSortBy] = useState('firstAdded');

    useEffect(() => {
        Promise.all(
            userSeries[collection].map(s => {
                const id = s.id ? s.id : s;
                return getSeriesById(id);
            })
        )
            .then(res => {
                sortBy == 'firstAdded' && setSeries(res);
                sortBy == 'lastAdded' && setSeries(res.reverse());
            })
            .finally(() => setIsLoading(false))

    }, [collection, userSeries, sortBy]);

    const watchlistClickHandler = () => {
        setCollection('watchlist');
    }

    const watchedClickHandler = () => {
        setCollection('watching');
    }

    return !isLoading && (
        <div className='profile-series-page'>
            <h1 className='profile-series-page-title'>MY SERIES</h1>
            <ProfileContentNav
                firstLink={{ text: 'Watchlist', active: collection == 'watchlist', clickHandler: watchlistClickHandler }}
                secondLink={{ text: 'Watching', active: collection == 'watching', clickHandler: watchedClickHandler }}
                setSortBy={setSortBy}
            />
            <div className="profile-series-page-series">
                {series.length > 0 ?
                    series.map(s => {
                        return <ItemCard
                            item={s}
                            type="series"
                            key={s.id}
                        />
                    }) : <p>No series found</p>}
            </div>
        </div>
    );
}

export default ProfileSeries;
