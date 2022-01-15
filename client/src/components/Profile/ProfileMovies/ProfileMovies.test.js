import { render } from '@testing-library/react';
import * as UserContext from '../../../contexts/UserContext';
import * as MoviesService from '../../../services/api/movies';
import ProfileMovies from './ProfileMovies';

describe('Profile Movies Component', () => {
    UserContext.useUser = () => ({
        userMovies: {
            watchlist: ['1','2']
        }
    });

    it('Calls getMovieById with proper data', () => {
        const mockGetMovieById = jest.spyOn(MoviesService, 'getMovieById');
        render(<ProfileMovies />);
        expect(mockGetMovieById).toHaveBeenNthCalledWith(1,'1');
        expect(mockGetMovieById).toHaveBeenNthCalledWith(2,'2');
    });
});