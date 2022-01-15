import { fireEvent, render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import * as AuthService from '../../services/AuthService';
import SignUp from './SignUp';

window.alert = jest.fn();

describe('SignUp Component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        );
    })

    it('Calls signUp with valid input', async () => {
        const mockSignUp = jest.spyOn(AuthService, 'signUp')

        const fullNameInput = document.querySelector('input[name=fullName]')
        const emailInput = document.querySelector('input[name=email]')
        const passwordInput = document.querySelector('input[name=password]')
        const repeatPasswordInput = document.querySelector('input[name=repeatPassword]')
        const element = document.querySelector('.sign-up-form')

        fireEvent.input(fullNameInput, {
            target: { value: 'test test' }
        })
        fireEvent.input(emailInput, {
            target: { value: 'test@test.com' }
        })
        fireEvent.input(passwordInput, {
            target: { value: '123456' }
        })
        fireEvent.input(repeatPasswordInput, {
            target: { value: '123456' }
        })

        fireEvent.submit(element)

        await waitFor(() =>
            expect(mockSignUp).toHaveBeenCalledWith('test test', 'test@test.com', '123456')
        );
    });

    it('Does not call signUp with invalid input', async () => {
        const mockSignUp = jest.spyOn(AuthService, 'signUp')

        const fullNameInput = document.querySelector('input[name=fullName]')
        const emailInput = document.querySelector('input[name=email]')
        const passwordInput = document.querySelector('input[name=password]')
        const repeatPasswordInput = document.querySelector('input[name=repeatPassword]')
        const element = document.querySelector('.sign-up-form')

        fireEvent.input(fullNameInput, {
            target: { value: 't' }
        })
        fireEvent.input(emailInput, {
            target: { value: 'test' }
        })
        fireEvent.input(passwordInput, {
            target: { value: '123456' }
        })
        fireEvent.input(repeatPasswordInput, {
            target: { value: '12345' }
        })

        fireEvent.submit(element)

        await waitFor(() =>
            expect(mockSignUp).toHaveBeenCalledTimes(0)
        );
    });

})