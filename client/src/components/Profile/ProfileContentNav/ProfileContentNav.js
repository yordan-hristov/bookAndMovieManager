import React, { useState } from 'react';

import './ProfileContentNav.scss'

const ProfileContentNav = ({firstLink, secondLink, setSortBy}) => {
   
    return (
        <nav className="profile-content-nav">
                <div
                    className={`profile-content-nav-link ${firstLink.active ? 'active-link' : null}`}
                    onClick={firstLink.clickHandler}
                >{firstLink.text}
                </div>
                <div
                    className={`profile-content-nav-link ${secondLink.active ? 'active-link' : null}`}
                    onClick={secondLink.clickHandler}
                >{secondLink.text}
                </div>
                <select name="sort" className="profile-content-nav-sort" onChange={(e) => setSortBy(e.target.value)}>
                    <option value="firstAdded">First Added</option>
                    <option value="lastAdded">Last Added</option>
                </select>
            </nav>
    );
}

export default ProfileContentNav;
