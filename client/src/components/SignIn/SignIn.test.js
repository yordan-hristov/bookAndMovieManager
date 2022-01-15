import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as AuthService from '../../services/AuthService';
import SignIn from './SignIn';

window.alert = jest.fn();

describe('SignIn Component', () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );

    it('Calls signIn on submit', () => {
        const mockSignIn = jest.spyOn(AuthService,'singIn')

        const emailInput = document.querySelector('input[name=email]');
        emailInput.value = 'testEmail';
        const passwordInput = document.querySelector('input[name=password]');
        passwordInput.value = 'testPassword';
        const element = document.querySelector('.sign-in-form');
        fireEvent.submit(element);

        expect(mockSignIn).toHaveBeenCalledWith('testEmail','testPassword');
    })
})