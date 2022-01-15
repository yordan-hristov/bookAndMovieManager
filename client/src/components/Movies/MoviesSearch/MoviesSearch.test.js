import { render, screen } from '@testing-library/react';
import * as MoviesService from '../../../services/api/movies';
import MoviesSearch from './MoviesSearch';

describe('MoviesSearch Component', () => {
    it('Makes a call to server', () => {
        const mockGetMovies = jest.spyOn(MoviesService, 'getMoviesWithQuery');
        render(<MoviesSearch />);
        expect(mockGetMovies).toHaveBeenCalledTimes(1);
    });
});