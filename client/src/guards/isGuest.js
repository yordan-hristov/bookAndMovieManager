import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

export const IsGuest = () => {
    const { currentUser } = useUser();

    if (!currentUser) {
        return <Outlet />;
    } else {
        return <Navigate to="/profile" />;
    }
};