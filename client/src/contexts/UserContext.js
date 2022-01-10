import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { getUserByEmail, getUserMovies } from '../services/api/user';

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
};

export function UserProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    const [userMovies, setUserMovies] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                getUserByEmail(user.email)
                    .then(res => {
                        setCurrentUser({ email: res.email, fullName: res.fullName });
                        setUserMovies(res.movies);
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

    const value = {
        currentUser,
        userMovies,
        updateMovies
    };

    return (
        <UserContext.Provider value={value}>
            {!isLoading && children}
        </UserContext.Provider>
    );
};

