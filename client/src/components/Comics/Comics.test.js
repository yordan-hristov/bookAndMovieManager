import { render, screen } from '@testing-library/react';
import * as ComicsService from '../../services/api/comics';
import Comics from './Comics';

describe('Comics Component', () => {
    it('Makes a call to server', () => {
        const mockGetComics = jest.spyOn(ComicsService, 'getComicsByQuery');
        render(<Comics />);
        expect(mockGetComics).toHaveBeenCalledTimes(1);
    });
});