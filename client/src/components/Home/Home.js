import React from 'react';
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";

import { useAuth } from '../../contexts/AuthContext';
import NavBar from '../NavBar/NavBar';

import './Home.scss';

const Home = () => {
    const { currentUser } = useAuth();

    console.log(currentUser)

    return (
       <div></div>
    );
};

export default Home;
