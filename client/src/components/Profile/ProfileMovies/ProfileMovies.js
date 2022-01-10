import React, { useState } from 'react';

import './ProfileMovies.scss';

const ProfileMovies = () => {
    const [selectedLink, setSelectedLink] = useState('favourites');

    return (
        <div className='profile-movies'>
            <h1 className='profile-movies-title'>PROFILE MOVIES</h1>
            <nav className="profile-movies-small-nav">
                <div
                    className={`small-nav-link ${selectedLink == 'favourites' ? 'active-link' : ''}`}
                    onClick={() => setSelectedLink('favourites')}
                >Favourites
                </div>
                <div
                    className={`small-nav-link ${selectedLink == 'watchlist' ? 'active-link' : ''}`}
                    onClick={() => setSelectedLink('watchlist')}
                >Watchlist
                </div>
                <div
                    className={`small-nav-link ${selectedLink == 'watched' ? 'active-link' : ''}`}
                    onClick={() => setSelectedLink('watched')}
                >Watched
                </div>
            </nav>
        </div>
    );
}

export default ProfileMovies;
