import { render } from '@testing-library/react';
import * as UserContext from '../../contexts/UserContext';
import Profile from './Profile';

const mockSideNav = jest.fn();
jest.mock('./SideNav/SideNav', () => (props) => {
    mockSideNav(props);
    return <mock-sideNav />
});

describe('Profile Component', () => {
    UserContext.useUser = () => ({
        currentUser: {
            fullName: 'test test',
            email: 'testEmail'
        }
    });

    it('Renders SideNav with current user', () => {
        render(<Profile />);
        expect(mockSideNav).toHaveBeenCalledWith({currentUser: {"email": "testEmail", "fullName": "test test"}});
    });
});