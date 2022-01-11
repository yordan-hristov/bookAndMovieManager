import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { getUserByEmail, getUserMovies, getUserSeries } from '../services/api/user';

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
};

export function UserProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    const [userMovies, setUserMovies] = useState();
    const [userSeries, setUserSeries] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                getUserByEmail(user.email)
                    .then(res => {
                        setCurrentUser({ email: res.email, fullName: res.fullName });
                        setUserMovies(res.movies);
                        setUserSeries(res.series);
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

    const value = {
        currentUser,
        userMovies,
        userSeries,
        updateMovies,
        updateSeries
    };

    return (
        <UserContext.Provider value={value}>
            {!isLoading && children}
        </UserContext.Provider>
    );
};

