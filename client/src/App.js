import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import NavBar from './components/NavBar/NavBar';

import { AuthProvider } from './contexts/AuthContext';
import Movies from './components/Movies/Movies';
import SearchResult from './components/Movies/SearchResult/SearchResult';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <AuthProvider>

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/search" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;