import React, { useEffect, useState } from 'react';
import { useUser } from '../../../contexts/UserContext';
import { getSeriesById } from '../../../services/api/series';
import { patchUserSeries } from '../../../services/api/user';
import Button from '../../shared/Button/Button';
import Select from './SeriesSelect/SeriesSelect';

import './SeriesDetails.scss';

const SeriesDetails = ({ seriesId }) => {
    const { currentUser, userSeries, updateSeries } = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [series, setSeries] = useState();
    const [watchlist, setWatchlist] = useState();
    const [watching, setWatching] = useState();

    useEffect(() => {
        getSeriesById(seriesId)
            .then(res => {
                console.log(res);
                setSeries(res);
            })
            .finally(() => setIsLoading(false));

        setWatchlist(userSeries.watchlist.includes(seriesId.toString()));
        setWatching(userSeries.watching.some(e => e.id == seriesId));

        return () => {
            updateSeries();
        }
    }, []);

    const handleWatchlistClick = () => {
        patchUserSeries(currentUser.email, { collection: 'watchlist', seriesId })
            .then(res => setWatchlist(!watchlist));
    }

    const handleWatchingClick = (progress) => {
        patchUserSeries(currentUser.email, { collection: 'watching', seriesId },progress)
            .then(res => setWatching(!watching));
    }

    return !isLoading && (
        <div className='series-details'>
            <img src={'http://image.tmdb.org/t/p/w500' + series.poster_path}></img>
            <div className="series-details-info">
                <h3 className="series-details-info-title">{series.original_name}</h3>
                <h4 className="series-details-info-date">{series.first_air_date}</h4>
                <p className='series-details-info-overview'>{series.overview}</p>
                <p className="series-details-info-genres">{`Genres: ${series.genres.map(g => g.name).join(', ')}`}</p>
                <p className="series-details-info-seasons">{`Seasons: ${series.number_of_seasons}`}</p>
                <p className="series-details-info-episodes">{`Episodes: ${series.number_of_episodes}`}</p>
                <p className="series-details-info-episode-duration">{`Duration: ${series.episode_run_time} minutes`}</p>

                <div className="series-details-info-buttons">
                    {watchlist ?
                        <Button svg={'minus'} text={'Watchlist'} tooltip={'Remove'} clickHandler={handleWatchlistClick} />
                        :
                        <Button svg={'plus'} text={'Watchlist'} tooltip={'Add'} clickHandler={handleWatchlistClick} />
                    }
                    {watching ?
                    <>
                        <Button svg={'cross'} text={'Watching'} tooltip={'Remove'} clickHandler={handleWatchingClick} />
                        <Select  
                        seriesId={seriesId} 
                        email={currentUser.email}
                        seasons={series.seasons}
                        progress={userSeries.watching.find(s => s.id == seriesId)?.progress || {season: '1', episode: '1'}}
                        />
                    </>
                        :
                        <Button svg={'tick'} text={'Watching'} tooltip={'Add'} clickHandler={handleWatchingClick} />
                    }
                </div>
            </div>
        </div>
    );
}

export default SeriesDetails;
