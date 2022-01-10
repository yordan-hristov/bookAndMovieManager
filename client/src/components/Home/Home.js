import React from 'react';
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";

import { useUser } from '../../contexts/UserContext';
import NavBar from '../NavBar/NavBar';

import './Home.scss';

const Home = () => {
    const { currentUser } = useUser();

    console.log(currentUser)

    return (
       <div></div>
    );
};

export default Home;
