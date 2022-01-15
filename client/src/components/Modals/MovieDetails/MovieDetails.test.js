import { render } from '@testing-library/react';
import * as UserContext from '../../../contexts/UserContext';
import * as MoviesService from '../../../services/api/movies';
import MovieDetails from './MovieDetails';

describe('Movies Details Component', () => {
    UserContext.useUser = () => ({
        userMovies: {
            watched: [],
            watchlist: []
        },
        currentUser: {},
        updateMovies: () => 'ok'
    });

    it('Calls getMovieById with proper data', () => {
        const mockGetMovieById = jest.spyOn(MoviesService, 'getMovieById');
        render(<MovieDetails movieId={'testId'} />);
        expect(mockGetMovieById).toHaveBeenCalledWith('testId');
    });
});