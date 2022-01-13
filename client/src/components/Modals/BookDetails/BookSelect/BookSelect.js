import React, { useEffect, useState } from 'react';
import { patchUserBooks } from '../../../../services/api/user';

import './BookSelect.scss';

const BookSelect = ({chapters, bookId, email, userChapter}) => {
    const [options, setOptions] = useState();
    const [currentChapter, setCurrentChapter] = useState(userChapter);

    useEffect(() => {
        const optionsArr = [];
        for(let i = 1; i <= chapters;i++){
            optionsArr.push(
                <option
                    key={i}
                    value={i}
                    >{`C${i}`}
                </option>
            )
        }

        setOptions(optionsArr);
    },[])

    const handleOnChange = (e) => {
        const value = e.target.value;
        setCurrentChapter(value);

        patchUserBooks(email, { collection: 'reading', bookId ,chapter: value });
    }

    return (
        <div className='custom-select-book'>
            <select name="chapter" value={currentChapter} onChange={handleOnChange}>
                {options}
            </select>
        </div>
    );
}

export default BookSelect;
