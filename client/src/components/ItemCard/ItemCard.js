import React, { useState } from 'react';
import MovieDetails from '../Movies/MovieDetails/MovieDetails.js';

import './ItemCard.scss'

const ItemCard = ({ item }) => {
    const [displayDetails, setDisplayDetails] = useState(false);

    const toggleDisplayDetails = () => {
        setDisplayDetails(!displayDetails);
    }

    return (
        <>
            <div className="item-card" onClick={toggleDisplayDetails}>
                <img src={'http://image.tmdb.org/t/p/w500' + item.poster_path}></img>
                <h3>{item.release_date || item.first_air_date}</h3>
            </div>
            {
                displayDetails ?
                    <MovieDetails movieId={item.id} toggleDisplayDetails={toggleDisplayDetails} />
                    : null
            }
        </>
    );
}

export default ItemCard;
