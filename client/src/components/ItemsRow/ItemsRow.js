import React from 'react';
import ItemCard from '../ItemCard/ItemCard.js';

import './ItemsRow.scss';

const ItemsRow = ({ title, items }) => {

    return (
        <div className="items-row">
            <h2 className="items-row-title">{title}</h2>
            <div className="items-row-items" >
                {items.map(i => {
                    return <ItemCard key={i.id} item={i} />
                })}
            </div>
        </div>
    )
};

export default ItemsRow;
