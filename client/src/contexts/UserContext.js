import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { getUserBooks, getUserByEmail, getUserMovies, getUserSeries } from '../services/api/user';

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

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                getUserByEmail(user.email)
                    .then(res => {
                        setCurrentUser({ email: res.email, fullName: res.fullName });
                        setUserMovies(res.movies);
                        setUserSeries(res.series);
                        setUserBooks(res.books);
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
        getUserBooks(currentUser.email)
            .then(res => {
                setUserBooks(res);
            })
    }

    const value = {
        currentUser,
        userMovies,
        userSeries,
        userBooks,
        updateMovies,
        updateSeries,
        updateBooks
    };

    return (
        <UserContext.Provider value={value}>
            {!isLoading && children}
        </UserContext.Provider>
    );
};

