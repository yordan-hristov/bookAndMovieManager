import { render } from '@testing-library/react';
import * as UserContext from '../../../contexts/UserContext';
import * as UserService from '../../../services/api/user';
import ProfileBooks from './ProfileBooks';

describe('Profile Books Component', () => {
    UserContext.useUser = () => ({
        currentUser: {
            fullName: 'test test',
            email: 'testEmail'
        }
    });

    it('Calls getUserBooks with proper data', () => {
        const mockGetUserBooks = jest.spyOn(UserService, 'getUserBooks');
        render(<ProfileBooks />);
        expect(mockGetUserBooks).toHaveBeenCalledWith("testEmail", {populated: true}, "readlist");
    });
});