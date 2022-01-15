import { render, screen } from '@testing-library/react';
import * as SeriesService from '../../services/api/series';
import Series from './Series';

describe('Series Component', () => {
    it('Makes calls to movies api', () => {
        const mockGetTopRated = jest.spyOn(SeriesService, 'getTopRatedSeries');
        const mockGetPopular = jest.spyOn(SeriesService, 'getPopularSeries');
        const mockGetOnAir = jest.spyOn(SeriesService, 'getOnAirSeries');
        render(<Series />);
        expect(mockGetTopRated).toHaveBeenCalledTimes(1);
        expect(mockGetPopular).toHaveBeenCalledTimes(1);
        expect(mockGetOnAir).toHaveBeenCalledTimes(1);
    });
});