import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { signUp } from '../../services/AuthService';

import './SignUp.scss';

const SignUp = () => {
    const email = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(email.current.value, password.current.value)
    }

    return (
        <div className="sign-up-wrapper">
            <div className="sign-up">
                <h1 className='sign-up-title'>Sign Up</h1>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <label>Full Name:</label>
                    <input type="text" name='fullName' />
                    <label>Email:</label>
                    <input type="text" name='email' ref={email} />
                    <label>Password:</label>
                    <input type="password" name='password' ref={password} />
                    <label>Repeat Password:</label>
                    <input type="password" name='repeatPassword' />

                    <input type="submit" value="SIGN UP" className="submit" />
                </form>
                <p className="sign-up-text">Already have an account? <Link to={"/sign-in"}><span className="login-link">Sign in</span></Link></p>
            </div>
        </div>
    );
};

export default SignUp;
