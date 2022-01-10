import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { logout } from '../../../services/AuthService';

import './SideNav.scss';

const SideNav = ({currentUser}) => {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        logout()
            .then(res => {
                console.log('LOGGED OUT');
                navigate('/sign-in');
            })
    }

    return currentUser && (
        <nav className="side-nav">
            <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="profile-pic"
                className="side-nav-profile-img"
            />

            <h2 className="side-nav-user-name">{currentUser.fullName}</h2>

            <div className='side-nav-links'>
                <Link to={'/profile/movies'} className='side-nav-links-link'>My Movies</Link>
                <Link to={'/profile/series'} className='side-nav-links-link'>My Series</Link>
                <Link to={'/profile/books'} className='side-nav-links-link'>My Books</Link>
                <div className="side-nav-links-link logout" onClick={handleLogoutClick}>Logout</div>
            </div>
        </nav>
    );
}

export default SideNav;
