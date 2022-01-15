import { render } from '@testing-library/react';
import * as UserContext from '../../../contexts/UserContext';
import * as SeriesService from '../../../services/api/series';
import ProfileSeries from './ProfileSeries';

describe('Profile Series Component', () => {
    UserContext.useUser = () => ({
        userSeries: {
            watchlist: ['1','2']
        }
    });

    it('Calls getSeriesById with proper data', () => {
        const mockGetSeriesById = jest.spyOn(SeriesService, 'getSeriesById');
        render(<ProfileSeries />);
        expect(mockGetSeriesById).toHaveBeenNthCalledWith(1,'1');
        expect(mockGetSeriesById).toHaveBeenNthCalledWith(2,'2');
    });
});