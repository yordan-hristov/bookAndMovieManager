import { render, screen } from '@testing-library/react';
import * as BookService from '../../services/api/books';
import Books from './Books';

describe('Books Component', () => {
    it('Makes a call to server', () => {
        const mockGetBooks = jest.spyOn(BookService, 'getBooksByQuery');
        render(<Books />);
        expect(mockGetBooks).toHaveBeenCalledTimes(1);
    });
});