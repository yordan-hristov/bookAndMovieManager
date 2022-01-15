import { render, screen } from '@testing-library/react';
import * as MoviesService from '../../services/api/movies';
import Movies from './Movies';

describe('Movies Component', () => {
    it('Makes calls to movies api', () => {
        const mockGetTopRated = jest.spyOn(MoviesService, 'getTopRatedMovies');
        const mockGetPopular = jest.spyOn(MoviesService, 'getPopularMovies');
        const mockGetUpcoming = jest.spyOn(MoviesService, 'getUpcomingMovies');
        render(<Movies />);
        expect(mockGetTopRated).toHaveBeenCalledTimes(1);
        expect(mockGetPopular).toHaveBeenCalledTimes(1);
        expect(mockGetUpcoming).toHaveBeenCalledTimes(1);
    });
});