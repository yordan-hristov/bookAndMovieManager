import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { singIn } from '../../services/AuthService';

import './SignIn.scss'

const SignIn = () => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        singIn(email.current.value,password.current.value)
            .then(res => {
                navigate('/profile');
            })
            .catch(err => {
                alert('Wrong email or password!');
            })
            
    };

    return (
        <div className="sign-in-wrapper">
            <div className="sign-in">
                <h1 className='sign-in-title'>Sign In</h1>
                <form className='sign-in-form' onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="text" name='email' ref={email} />
                    <label>Password:</label>
                    <input type="password" name='password' ref={password} />
                    
                    <input type="submit" value="SIGN IN" className="submit" />
                </form>
                <p className="sign-in-text">Don't have an account? <Link to={"/sign-up"}><span className="register-link">Sign up</span></Link></p>
            </div>
        </div>
    );
}

export default SignIn;
