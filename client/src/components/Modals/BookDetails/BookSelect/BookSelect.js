import React, { useEffect, useState } from 'react';
import { patchUserBooks } from '../../../../services/api/user';

import './BookSelect.scss';

const BookSelect = ({chapters, bookId, email, userChapter}) => {
    const [options, setOptions] = useState();

    useEffect(() => {
        const optionsArr = [];
        for(let i = 1; i <= chapters;i++){
            optionsArr.push(
                <option
                    key={i}
                    value={i}
                    selected={i == userChapter}
                    >{`C${i}`}
                </option>
            )
        }

        setOptions(optionsArr);
    },[])

    const handleOnChange = (e) => {
        const value = e.target.value;

        patchUserBooks(email, { collection: 'reading', bookId ,chapter: value });
    }

    return (
        <div className='custom-select-book' onChange={handleOnChange}>
            <select name="chapter">
                {options}
            </select>
        </div>
    );
}

export default BookSelect;
