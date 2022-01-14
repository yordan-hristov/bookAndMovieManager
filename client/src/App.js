import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import './App.css';
import SignUp from './components/SignUp/SignUp';
import NavBar from './components/NavBar/NavBar';

import { UserProvider } from './contexts/UserContext';
import Movies from './components/Movies/Movies';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';
import ProfileMovies from './components/Profile/ProfileMovies/ProfileMovies';
import Series from './components/Series/Series';
import Books from './components/Books/Books';
import Comics from './components/Comics/Comics';
import ProfileSeries from './components/Profile/ProfileSeries/ProfileSeries';
import ProfileBooks from './components/Profile/ProfileBooks/ProfileBooks';
import ProfileComics from './components/Profile/ProfileComics/ProfileComics';
import { IsUser } from './guards/isUser';
import { IsGuest } from './guards/isGuest';
import MoviesSearch from './components/Movies/MoviesSearch/MoviesSearch';
import SeriesSearch from './components/Series/SeriesSearch/SeriesSearch';

function App() {
  return (
    <UserProvider>

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route element={<IsGuest />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Route>

          <Route element={<IsUser />}>
            <Route path="/" element={<Navigate to="/profile" />}/>
            <Route path="/profile" element={<Profile />}>
              <Route path="movies" element={<ProfileMovies />} />
              <Route path="series" element={<ProfileSeries />} />
              <Route path="books" element={<ProfileBooks />} />
              <Route path="comics" element={<ProfileComics />} />
            </Route>
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/search" element={<MoviesSearch />} />
            <Route path="/series" element={<Series />} />
            <Route path="/series/search" element={<SeriesSearch />} />
            <Route path="/books" element={<Books />} />
            <Route path="/comics" element={<Comics />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </UserProvider>
  );
}

export default App;
