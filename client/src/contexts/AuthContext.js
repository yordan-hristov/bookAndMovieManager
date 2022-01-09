import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { getUserByEmail } from '../services/api/user';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                getUserByEmail(user.email)
                    .then(res => {
                        setCurrentUser(res);
                        setIsLoading(false);
                    });
            }else {
                setCurrentUser(null);
                setIsLoading(false);
            }
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser
    };

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};

