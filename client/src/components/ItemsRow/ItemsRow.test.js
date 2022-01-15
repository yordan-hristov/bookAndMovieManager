import { render } from "@testing-library/react";
import ItemsRow from "./ItemsRow";

const mockItemCard = jest.fn();
jest.mock('../ItemCard/ItemCard', () => (props) => {
    mockItemCard(props);
    return <mock-itemCard />
});

describe('ItemsRow Component', () => {
    it('Renders component', () => {
        render(
            <ItemsRow
            title={'Test Title'}
            items={[{id: '1'},{id: '2'}]}
            type={'Test Type'}
            />
        );
    });

    beforeEach(() => {
        render(
            <ItemsRow
            title={'Test Title'}
            items={[{id: '1'},{id: '2'}]}
            type={'Test Type'}
            />
        );
    })

    it('Shows proper title', () => {
        const element = document.querySelector('.items-row-title');
        expect(element).toHaveTextContent('Test Title')
    });

    it('Renders ItemCard', () => {
        expect(mockItemCard).toHaveBeenCalledTimes(2);
    })

});