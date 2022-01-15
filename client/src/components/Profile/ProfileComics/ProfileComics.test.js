import { render } from '@testing-library/react';
import * as UserContext from '../../../contexts/UserContext';
import * as UserService from '../../../services/api/user';
import ProfileComics from './ProfileComics';

describe('Profile Comics Component', () => {
    UserContext.useUser = () => ({
        currentUser: {
            fullName: 'test test',
            email: 'testEmail'
        }
    });

    it('Calls getUserComics with proper data', () => {
        const mockGetUserComics = jest.spyOn(UserService, 'getUserComics');
        render(<ProfileComics />);
        expect(mockGetUserComics).toHaveBeenCalledWith("testEmail", {populated: true}, "readlist");
    });
});