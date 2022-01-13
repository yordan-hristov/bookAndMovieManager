import React, { useEffect, useState } from 'react';
import { patchUserComics } from '../../../../services/api/user';

import './ComicsSelect.scss';

const ComicsSelect = ({volumes, progress, email, comicsId}) => {
    const [currentVolume, setCurrentVolume] = useState(progress.volume);
    const [currentIssue, setCurrentIssue] = useState(progress.issue);
    const [secondOptions, setSecondOptions] = useState();

    useEffect(() => {
        const secondOptionsArr = [];
        const volume = volumes[currentVolume - 1];
        for (let i = volume.firstIssue; i <= volume.lastIssue; i++) {
            secondOptionsArr.push(
                <option
                    key={i}
                    value={i}
                    >{`#${i}`}
                </option>
            );
        }

        setSecondOptions(secondOptionsArr);
    },[currentVolume]);

    const handleVolumeChange = (e) => {
        const value = e.target.value;
        setCurrentVolume(e.target.value);

        patchUserComics(email, {
            collection: 'reading',
            comicsId,
            progress: {
                volume: value,
                issue: currentIssue
            }
        });
    }

    const handleIssueChange = (e) => {
        const value = e.target.value;
        setCurrentIssue(value);

        patchUserComics(email, {
            collection: 'reading',
            comicsId,
            progress: {
                volume: currentVolume,
                issue: value
            }
        });
    }

    return (
        <div className='custom-select-comics'>
            <select name="volume" value={currentVolume} onChange={handleVolumeChange}>
                {volumes.map((item, index) => {
                    return <option 
                    key={index} 
                    value={index + 1}
                    >{`V${index + 1}`}
                    </option>
                })}
            </select>

            <select name="issue" value={currentIssue} onChange={handleIssueChange}>
                {secondOptions}
            </select>
        </div>
    );
}

export default ComicsSelect;
