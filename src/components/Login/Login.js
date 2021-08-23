import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInput } from '../../utils/useInput';
import { TextField } from '@material-ui/core';
import firebase from 'firebase';
import './Login';

export const Login = ({ isSignUp }) => {

    const [error, setError] = useState('');

    const { value: email,
        handleChange: handleEmailChange,
        resetValue: resetEmail } = useInput('');

    const { value: password,
        handleChange: handlePasswordChange,
        resetValue: resetPassword } = useInput('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }

        try {
            if (!isSignUp) {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            } else {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
            }
            resetPassword();
            resetEmail();
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        }
    };

    return (
        <div className="main-wrapper">
            <form className="singUp-form" onSubmit={handleSubmit}>
                <p className="singUp-form__header">{!isSignUp ? 'Login your account' : 'Register new account'}</p>
                <TextField label="Email" type="email" onChange={handleEmailChange} value={email} autoComplete="username" />
                <br />
                <TextField label="Password" type="password" onChange={handlePasswordChange} value={password} autoComplete="new-password" />
                <div className="singUp-form__error">
                    {error && <p>{error}</p>}
                    <button type="submit" className="singUp-btn btn">Sing In</button>
                </div>
                <hr />
                <p>{isSignUp ? 'Already have an account?' : "Don't have an account?"} <Link to={`${isSignUp ? '/login' : '/singup'}`}>{isSignUp ? 'Login' : 'Sign Up'}</Link></p>
            </form>
        </div>
    )
}