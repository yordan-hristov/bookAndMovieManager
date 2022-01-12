import React, { useState } from 'react';
import Modal from '../Modals/Modal.js';

import './ItemCard.scss'

const ItemCard = ({ item, type }) => {
    const [displayModal, setDisplayModal] = useState(false);

    const toggleDisplayModal = () => {
        setDisplayModal(!displayModal);
    }

    return (
        <>
            <div className="item-card" onClick={toggleDisplayModal}>
                <img 
                src={
                    item.imgUrl ||
                    'http://image.tmdb.org/t/p/w500' + item.poster_path 
                }
                ></img>
                <h3>{item.release_date || item.first_air_date || item.year}</h3>
            </div>
            {
                displayModal &&
                    <Modal 
                    itemId={item.id || item._id} 
                    closeModal={toggleDisplayModal}
                    type={type} 
                    />
            }
        </>
    );
}

export default ItemCard;
