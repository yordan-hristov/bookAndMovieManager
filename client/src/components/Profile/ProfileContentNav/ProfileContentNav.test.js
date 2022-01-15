import { fireEvent, render } from "@testing-library/react"
import ProfileContentNav from "./ProfileContentNav"

const mockSetSortBy = jest.fn();
const mockFirstLinkClickHandler = jest.fn();
const mockSecondLinkClickHandler = jest.fn();

describe('ProfileContentNav component', () => {
    beforeEach(() => {
        render(
            <ProfileContentNav
                firstLink={{ text: 'text1', active: true, clickHandler: mockFirstLinkClickHandler }}
                secondLink={{ text: 'text2', active: false, clickHandler: mockSecondLinkClickHandler }}
                setSortBy={mockSetSortBy}
            />
        );
    });

    describe('First Link', () => {
        it('Shows proper text', () => {
            const element = document.querySelectorAll('.profile-content-nav-link')[0];
            expect(element).toHaveTextContent('text1');
        });
        it('Has class active-link', () => {
            const element = document.querySelectorAll('.profile-content-nav-link')[0];
            expect(element).toHaveClass('active-link');
        });
        it('Calls proper clickHandler', () => {
            const element = document.querySelectorAll('.profile-content-nav-link')[0];
            fireEvent.click(element)
            expect(mockFirstLinkClickHandler).toHaveBeenCalledTimes(1);
        });
    });

    describe('Second Link', () => {
        it('Shows proper text', () => {
            const element = document.querySelectorAll('.profile-content-nav-link')[1];
            expect(element).toHaveTextContent('text2');
        });
        it('Has NOT class active-link', () => {
            const element = document.querySelectorAll('.profile-content-nav-link')[1];
            expect(element).not.toHaveClass('active-link');
        });
        it('Calls proper clickHandler', () => {
            const element = document.querySelectorAll('.profile-content-nav-link')[1];
            fireEvent.click(element)
            expect(mockSecondLinkClickHandler).toHaveBeenCalledTimes(1);
        });
    });

    describe('Select', () => {
        it('Calls setSortBy on change', () => {
            const element = document.querySelector('.profile-content-nav-sort');
            fireEvent.change(element);
            expect(mockSetSortBy).toHaveBeenCalledTimes(1);
        });
    });
})