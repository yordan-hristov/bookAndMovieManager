import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter, Outlet, useNavigate } from "react-router-dom";
import { useUser } from '../../contexts/UserContext';

import './Profile.scss';

import SideNav from './SideNav/SideNav';

const Profile = () => {
    const navigate = useNavigate();
    const { currentUser } = useUser();
    useEffect(() => {
        navigate('/profile/movies')
    }, [])

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
