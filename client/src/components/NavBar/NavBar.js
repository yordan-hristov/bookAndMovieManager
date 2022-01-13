import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
    let location = useLocation();

    return !location.pathname.includes('sign') ? (
       <nav className='nav'>
           <div className='nav-links'>
               <Link to={'/profile'} className='nav-links-link'>Profile</Link>
               <Link to={'/movies'} className='nav-links-link'>Movies</Link>
               <Link to={'/series'} className='nav-links-link'>Series</Link>
               <Link to={'/books'} className='nav-links-link'>Books</Link>
               <Link to={'/comics'} className='nav-links-link'>Comics</Link>
           </div>
       </nav>
    ) : null
}

export default NavBar;
