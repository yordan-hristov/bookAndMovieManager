import { render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import NavBar from './NavBar';

describe('Navbar Component', () => {
    it('Renders component', () => {
        const history = createMemoryHistory();
        history.push('/test-route')
        render(
            <BrowserRouter history={history}>
                <NavBar />
            </BrowserRouter>
        );
    });

    beforeEach(() => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );
    });

    describe('Navigation links', () => {
        it('Movies link should be in document', () => {
            const element = screen.getByText('Movies');
            expect(element).toBeInTheDocument();
        });
        it('Series link should be in document', () => {
            const element = screen.getByText('Series');
            expect(element).toBeInTheDocument();
        });
        it('Books link should be in document', () => {
            const element = screen.getByText('Books');
            expect(element).toBeInTheDocument();
        });
        it('Comics link should be in document', () => {
            const element = screen.getByText('Comics');
            expect(element).toBeInTheDocument();
        });
        it('Profile link should be in document', () => {
            const element = screen.getByText('Profile');
            expect(element).toBeInTheDocument();
        });
    });
})