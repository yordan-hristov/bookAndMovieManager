import React from 'react';
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import { useUser } from '../../contexts/UserContext';
import Home from '../Home/Home';

import './Profile.scss';
import ProfileMovies from './ProfileMovies/ProfileMovies';
import SideNav from './SideNav/SideNav';

const Profile = () => {
    const { currentUser } = useUser();

    console.log(currentUser)

    return (
        <div className='profile-wrapper'>
            <SideNav currentUser={currentUser} />
            <div className="profile-wrapper-side-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Profile;
