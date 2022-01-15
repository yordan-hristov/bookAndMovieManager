import { fireEvent, render } from "@testing-library/react";
import Rating from "./Rating";

const mockHandleRating = jest.fn();

describe('Rating Component', () => {
    describe('If rated = true', () => {
        it('First 3 stars should have class filled and other 2 should not', () => {
            render(
                <Rating
                    rated={true}
                    rating={3}
                    handleRating={mockHandleRating}
                />);

            const stars = document.querySelectorAll('.custom-rating-star');
            expect(stars[0]).toHaveClass('filled');
            expect(stars[1]).toHaveClass('filled');
            expect(stars[2]).toHaveClass('filled');
            expect(stars[3]).not.toHaveClass('filled');
            expect(stars[4]).not.toHaveClass('filled');
        })
    });

    describe('If rated = false', () => {
        it('Click should call handleRating', () => {
            render(
                <Rating
                    rated={false}
                    rating={3}
                    handleRating={mockHandleRating}
                />);

            const stars = document.querySelectorAll('.custom-rating-star');
        
            fireEvent.click(stars[0]);
            expect(mockHandleRating).toHaveBeenCalledWith(1);
            fireEvent.click(stars[1]);
            expect(mockHandleRating).toHaveBeenCalledWith(2);
            fireEvent.click(stars[2]);
            expect(mockHandleRating).toHaveBeenCalledWith(3);
            fireEvent.click(stars[3]);
            expect(mockHandleRating).toHaveBeenCalledWith(4);
            fireEvent.click(stars[4]);
            expect(mockHandleRating).toHaveBeenCalledWith(5);
        })
    });
});