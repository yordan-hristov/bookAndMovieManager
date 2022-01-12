import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import NavBar from './components/NavBar/NavBar';

import { UserProvider } from './contexts/UserContext';
import Movies from './components/Movies/Movies';
import SearchResult from './components/Movies/SearchResult/SearchResult';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';
import ProfileMovies from './components/Profile/ProfileMovies/ProfileMovies';
import Series from './components/Series/Series';
import Books from './components/Books/Books';

function App() {
  return (
    <UserProvider>

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="movies" element={<ProfileMovies />} />
          </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/search" element={<SearchResult />} />
          <Route path="/series" element={<Series />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>

    </UserProvider>
  );
}

export default App;
