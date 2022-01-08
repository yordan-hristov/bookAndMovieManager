import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import NavBar from './components/NavBar/NavBar';

import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
