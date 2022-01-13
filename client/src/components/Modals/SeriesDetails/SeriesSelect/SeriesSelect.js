import React, { useEffect, useState } from 'react';
import { patchUserSeries } from '../../../../services/api/user';

import './SeriesSelect.scss';

const SeriesSelect = ({ seriesId, email, seasons, progress }) => {
    const [currentSeason, setCurrentSeason] = useState(progress.season);
    const [currentEpisode, setCurrentEpisode] = useState(progress.episode);
    const [secondOptions, setSecondOptions] = useState();

    useEffect(() => {
        const secondOptionsArr = [];
        for (let i = 1; i <= seasons[currentSeason - 1].episode_count; i++) {
            secondOptionsArr.push(
                <option
                    key={i}
                    value={i}
                    >{`E${i}`}
                </option>
            );
        }

        setSecondOptions(secondOptionsArr);

    }, [currentSeason])

    const handleSeasonsChange = (e) => {
        const value = e.target.value;
        setCurrentSeason(value);

        patchUserSeries(email, {
            collection: 'watching',
            seriesId,
            progress: {
                season: value,
                episode: currentEpisode
            }
        });
    }

    const handleEpisodeChange = (e) => {
        const value = e.target.value;
        setCurrentEpisode(value);

        patchUserSeries(email, {
            collection: 'watching',
            seriesId,
            progress: {
                season: currentSeason,
                episode: value
            }
        });
    }

    return (
        <div className='custom-select-series'>
            <select name="season" value={currentSeason} onChange={handleSeasonsChange}>
                {seasons.map((item, index) => {
                    return <option 
                    key={index} 
                    value={index + 1}
                    >{`S${index + 1}`}
                    </option>
                })}
            </select>
            <select name="episode" value={currentEpisode} onChange={handleEpisodeChange}>
                {secondOptions}
            </select>
        </div>
    );
}

export default SeriesSelect;
