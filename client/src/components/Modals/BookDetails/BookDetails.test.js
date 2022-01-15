import { render } from '@testing-library/react';
import * as UserContext from '../../../contexts/UserContext';
import * as BooksService from '../../../services/api/books';
import BookDetails from './BookDetails';

describe('Book Details Component', () => {
    UserContext.useUser = () => ({
        userBooks: {
            reading: [],
            readlist: [],
            rated: []
        },
        currentUser: {},
        updateBooks: () => 'ok'
    });

    it('Calls getBookById with proper data', () => {
        const mockGetBookById = jest.spyOn(BooksService, 'getBookById');
        render(<BookDetails bookId={'testId'} />);
        expect(mockGetBookById).toHaveBeenCalledWith('testId');
    });
});