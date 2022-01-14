import React, { useEffect, useState } from 'react';
import { ReactComponent as StarSvg } from './assetes/star.svg'

import './Rating.scss';

const Rating = ({ rated,rating, handleRateBook }) => {
    const [hoveredStars, setHoveredStars] = useState(rating);

    const clickHandler = (value) => {
        handleRateBook(value);
        setHoveredStars(value);
    }

    return (
        <div className='custom-rating'>
            <span>Your Rating:</span>
            {rated ?
                <>
                    <StarSvg className={`custom-rating-star ${hoveredStars >= 1 ? 'filled' : ''}`} />
                    <StarSvg className={`custom-rating-star ${hoveredStars >= 2 ? 'filled' : ''}`} />
                    <StarSvg className={`custom-rating-star ${hoveredStars >= 3 ? 'filled' : ''}`} />
                    <StarSvg className={`custom-rating-star ${hoveredStars >= 4 ? 'filled' : ''}`} />
                    <StarSvg className={`custom-rating-star ${hoveredStars >= 5 ? 'filled' : ''}`} />
                </> :
                <>
                    <StarSvg className="custom-rating-star active" onClick={() => clickHandler(1)} />
                    <StarSvg className="custom-rating-star active" onClick={() => clickHandler(2)} />
                    <StarSvg className="custom-rating-star active" onClick={() => clickHandler(3)} />
                    <StarSvg className="custom-rating-star active" onClick={() => clickHandler(4)} />
                    <StarSvg className="custom-rating-star active" onClick={() => clickHandler(5)} />
                </>
            }
        </div>
    );
}

export default Rating;
