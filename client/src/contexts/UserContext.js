import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { getUserBooks, getUserByEmail, getUserMovies, getUserSeries, getUserComics } from '../services/api/user';

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
};

export function UserProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    const [userMovies, setUserMovies] = useState();
    const [userSeries, setUserSeries] = useState();
    const [userBooks, setUserBooks] = useState();
    const [userComics, setUserComics] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                getUserByEmail(user.email)
                    .then(res => {
                        setCurrentUser({ email: res.email, fullName: res.fullName });
                        setUserMovies(res.movies);
                        setUserSeries(res.series);
                        setUserBooks(res.books);
                        setUserComics(res.comics);
                        setIsLoading(false);
                    });
            } else {
                setCurrentUser(null);
                setIsLoading(false);
            }
        });

        return unsubscribe;
    }, []);

    const updateMovies = () => {
        getUserMovies(currentUser.email)
            .then(res => {
                setUserMovies(res);
            })
    }

    const updateSeries = () => {
        getUserSeries(currentUser.email)
            .then(res => {
                setUserSeries(res);
            })
    }

    const updateBooks = () => {
        getUserBooks(currentUser.email, {populated: false})
            .then(res => {
                setUserBooks(res);
            })
    }

    const updateComics = () => {
        getUserComics(currentUser.email)
            .then(res => {
                setUserComics(res);
            })
    }

    const value = {
        currentUser,
        userMovies,
        userSeries,
        userBooks,
        userComics,
        updateMovies,
        updateSeries,
        updateBooks,
        updateComics
    };

    return (
        <UserContext.Provider value={value}>
            {!isLoading && children}
        </UserContext.Provider>
    );
};

