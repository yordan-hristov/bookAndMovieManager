import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

const mockClickHandler = jest.fn();

describe.only('Button Component', () => {
    beforeEach(() => {
        render(
            <Button
                svg={'redHeart'}
                text={'testText'}
                tooltip={'testTooltip'}
                clickHandler={mockClickHandler}
            />
        );
    });

    it('Shows proper text', () => {
        const element = document.querySelector('.custom-button span');
        expect(element).toHaveTextContent('testText');
    });

    it('Shows proper tooltip', () => {
        const element = document.querySelector('.tooltip-text');
        expect(element).toHaveTextContent('testTooltip');
    });

});