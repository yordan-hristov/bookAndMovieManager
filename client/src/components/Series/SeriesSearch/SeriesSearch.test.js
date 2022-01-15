import { render, screen } from '@testing-library/react';
import * as SeriesService from '../../../services/api/series';
import SeriesSearch from './SeriesSearch';

describe('SeriesSearch Component', () => {
    it('Makes a call to server', () => {
        const mockGetSeries = jest.spyOn(SeriesService, 'getSeriesWithQuery');
        render(<SeriesSearch />);
        expect(mockGetSeries).toHaveBeenCalledTimes(1);
    });
});