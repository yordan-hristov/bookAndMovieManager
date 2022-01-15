import { fireEvent, render } from "@testing-library/react";
import Modal from "./Modal";

const mockCloseModal = jest.fn();
const mockMovieDetails = jest.fn();
const mockSeriesDetails = jest.fn();
const mockBookDetails = jest.fn();
const mockComicsDetails = jest.fn();

jest.mock('./MovieDetails/MovieDetails', () => (props) => {
    mockMovieDetails(props);
    return <mock-movieDetails />
});
jest.mock('./SeriesDetails/SeriesDetails', () => (props) => {
    mockSeriesDetails(props);
    return <mock-seriesDetails />
});
jest.mock('./BookDetails/BookDetails', () => (props) => {
    mockBookDetails(props);
    return <mock-bookDetails />
});
jest.mock('./ComicsDetails/ComicsDetails', () => (props) => {
    mockComicsDetails(props);
    return <mock-comicsDetails />
});

describe('Modal Component', () => {
    it('Closes on click', () => {
        render(
            <Modal
                itemId={'testId'}
                closeModal={mockCloseModal}
                type={'testType'}
            />
        );

        const element = document.querySelector('.modal');
        fireEvent.click(element);
        expect(mockCloseModal).toHaveBeenCalledTimes(1);
    });

    it('Opens MovieDetails if type = movies', () => {
        render(
            <Modal
                itemId={'testId'}
                closeModal={mockCloseModal}
                type={'movies'}
            />
        );

        expect(mockMovieDetails).toHaveBeenCalledWith(
            expect.objectContaining({
                movieId: 'testId'
            })
        );
    });

    it('Opens SeriesDetails if type = series', () => {
        render(
            <Modal
                itemId={'testId'}
                closeModal={mockCloseModal}
                type={'series'}
            />
        );

        expect(mockSeriesDetails).toHaveBeenCalledWith(
            expect.objectContaining({
                seriesId: 'testId'
            })
        );
    });

    it('Opens BookDetails if type = books', () => {
        render(
            <Modal
                itemId={'testId'}
                closeModal={mockCloseModal}
                type={'books'}
            />
        );

        expect(mockBookDetails).toHaveBeenCalledWith(
            expect.objectContaining({
                bookId: 'testId'
            })
        );
    });

    it('Opens ComicsDetails if type = comics', () => {
        render(
            <Modal
                itemId={'testId'}
                closeModal={mockCloseModal}
                type={'comics'}
            />
        );

        expect(mockComicsDetails).toHaveBeenCalledWith(
            expect.objectContaining({
                comicsId: 'testId'
            })
        );
    });
});