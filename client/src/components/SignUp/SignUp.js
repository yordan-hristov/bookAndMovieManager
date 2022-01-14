import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { signUp } from '../../services/AuthService';
import { formSchema } from './validations';

import './SignUp.scss';

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(formSchema)
    });

    const onSubmit = (data) => {
        signUp(data.fullName, data.email, data.password)
            .then(res => {
                navigate('/profile')
            })
            .catch(err => {
                alert('Email is already used')
            })
    }

    return (
        <div className="sign-up-wrapper">
            <div className="sign-up">
                <h1 className='sign-up-title'>Sign Up</h1>
                <form className='sign-up-form' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name='fullName'
                        {...register('fullName')}
                    />
                    {errors.fullName && <p className='error-message'>{errors.fullName.message}</p>}
                    <label>Email:</label>
                    <input
                        type="text"
                        name='email'
                        {...register('email')}
                    />
                    {errors.email && <p className='error-message'>{errors.email.message}</p>}
                    <label>Password:</label>
                    <input
                        type="password"
                        name='password'
                        {...register('password')}
                    />
                    {errors.password && <p className='error-message'>{errors.password.message}</p>}

                    <label>Repeat Password:</label>
                    <input
                        type="password"
                        name='repeatPassword'
                        {...register('repeatPassword')}
                    />
                    {errors.repeatPassword && <p className='error-message'>{errors.repeatPassword.message}</p>}

                    <input type="submit" value="SIGN UP" className="submit" />
                </form>
                <p className="sign-up-text">Already have an account? <Link to={"/sign-in"}><span className="login-link">Sign in</span></Link></p>
            </div>
        </div>
    );
};

export default SignUp;
