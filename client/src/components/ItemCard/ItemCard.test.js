import { fireEvent, render } from "@testing-library/react";
import ItemCard from "./ItemCard";

const mockModal = jest.fn();
jest.mock('../Modals/Modal', () => (props) => {
    mockModal(props);
    return <mock-modal />
});

describe('ItemCard Component', () => {
    describe('For movies and series', () => {
        const mockItem = {
            poster_path: 'testPath',
            release_date: 'testDate',
            id: '1'
        }

        beforeEach(() => {
            render(
                <ItemCard 
                item={mockItem}
                type={'testType'}
                />
            )
        });

        it('Shows proper img', () => {
            const element = document.querySelector('.item-card img');
            expect(element.src).toBe('http://image.tmdb.org/t/p/w500testPath');
        });

        it('Shows proper date', () => {
            const element = document.querySelector('.item-card h3');
            expect(element).toHaveTextContent('testDate');
        });

        it('Opens modal on click', () => {
            const element = document.querySelector('.item-card');
            fireEvent.click(element);
            expect(mockModal).toHaveBeenCalledWith(
                expect.objectContaining({
                    type: 'testType',
                    itemId: '1'
                })
            );
        });
    });

    describe('For books and comics', () => {
        const mockItem = {
            imgUrl: 'testUrl',
            year: 'testYear',
            _id: '1'
        }

        beforeEach(() => {
            render(
                <ItemCard 
                item={mockItem}
                type={'testType'}
                />
            )
        });

        it('Shows proper img', () => {
            const element = document.querySelector('.item-card img');
            expect(element).toHaveAttribute('src', 'testUrl');
        });

        it('Shows proper date', () => {
            const element = document.querySelector('.item-card h3');
            expect(element).toHaveTextContent('testYear');
        });

        it('Opens modal on click', () => {
            const element = document.querySelector('.item-card');
            fireEvent.click(element);
            expect(mockModal).toHaveBeenCalledWith(
                expect.objectContaining({
                    type: 'testType',
                    itemId: '1'
                })
            );
        });
    });
});