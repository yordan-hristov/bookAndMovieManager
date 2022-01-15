import { render } from '@testing-library/react';
import * as UserContext from '../../../contexts/UserContext';
import * as ComicsService from '../../../services/api/comics';
import ComicsDetails from './ComicsDetails';

describe('Comics Details Component', () => {
    UserContext.useUser = () => ({
        userComics: {
            reading: [],
            readlist: [],
            rated: []
        },
        currentUser: {},
        updateComics: () => 'ok'
    });

    it('Calls getComicsById with proper data', () => {
        const mockGetComicsById = jest.spyOn(ComicsService, 'getComicsById');
        render(<ComicsDetails comicsId={'testId'} />);
        expect(mockGetComicsById).toHaveBeenCalledWith('testId');
    });
});