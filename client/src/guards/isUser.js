import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

export const IsUser = () => {
    const { currentUser } = useUser();

    if (currentUser) {
        return <Outlet />;
    } else {
        return <Navigate to="/sign-in" />;
    }
};
