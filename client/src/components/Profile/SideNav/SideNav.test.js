import { act, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import * as AuthService from '../../../services/AuthService';

import SideNav from './SideNav';

describe('SideNav Component', () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <SideNav
                    currentUser={{
                        email: 'testEmail',
                        fullName: 'Test Test'
                    }}
                />
            </BrowserRouter>
        );
    });

    describe('User info', () => {
        it('Shows proper img', () => {
            const element = document.querySelector('.side-nav-profile-img');
            expect(element).toHaveAttribute('src', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
        });
        it('Shows proper user name', () => {
            const element = document.querySelector('.side-nav-user-name');
            expect(element).toHaveTextContent('Test Test');
        });
    });

    describe('Navigation links', () => {
        it('My Movies link should be in document', () => {
            const element = screen.getByText('My Movies');
            expect(element).toBeInTheDocument();
        });
        it('My Series link should be in document', () => {
            const element = screen.getByText('My Series');
            expect(element).toBeInTheDocument();
        });
        it('My Books link should be in document', () => {
            const element = screen.getByText('My Books');
            expect(element).toBeInTheDocument();
        });
        it('My Comics link should be in document', () => {
            const element = screen.getByText('My Comics');
            expect(element).toBeInTheDocument();
        });
        it('Logout link should be in document', () => {
            const element = screen.getByText('Logout');
            expect(element).toBeInTheDocument();
        });
        it('Logout should call logout function', async () => {
            const mockLogout = jest.spyOn(AuthService, 'logout')
            const element = screen.getByText('Logout');

            await act(async () => {
                fireEvent.click(element);
            })

            expect(mockLogout).toHaveBeenCalledTimes(1);
        })
    });
})