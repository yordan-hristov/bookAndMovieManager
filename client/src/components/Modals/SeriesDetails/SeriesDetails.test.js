import { render } from '@testing-library/react';
import * as UserContext from '../../../contexts/UserContext';
import * as SeriesService from '../../../services/api/series';
import SeriesDetails from './SeriesDetails';

describe('Series Details Component', () => {
    UserContext.useUser = () => ({
        userSeries: {
            watching: [],
            watchlist: []
        },
        currentUser: {},
        updateSeries: () => 'ok'
    });

    it('Calls getSeriesById with proper data', () => {
        const mockGetSeriesById = jest.spyOn(SeriesService, 'getSeriesById');
        render(<SeriesDetails seriesId={'testId'} />);
        expect(mockGetSeriesById).toHaveBeenCalledWith('testId');
    });
});