import { fireEvent, render } from "@testing-library/react";
import SearchBar from "./SearchBar";

const mockSetQuery = jest.fn();

describe('SearchBar Component', () => {
    it('Calls setQuery on submit', () => {
        render(<SearchBar setQuery={mockSetQuery} />);

        const input = document.querySelector('.search-bar-field');
        input.value = 'test';
        const form = document.querySelector('.search-bar');
        fireEvent.submit(form);
        expect(mockSetQuery).toHaveBeenCalledWith('test');
    });
});