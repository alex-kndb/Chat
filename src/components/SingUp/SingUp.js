import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInput } from '../../utils/useInput';
import { TextField } from '@material-ui/core';
import firebase from 'firebase';
import './SingUp.css';

export const SingUp = () => {

    const [error, setError] = useState('');
    const { value: email,
        handleChange: handleEmailChange,
        resetValue: resetEmail } = useInput('');
    const { value: password,
        handleChange: handlePasswordChange,
        resetValue: resetPassword } = useInput('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            resetPassword();
            resetEmail();
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        }
    };

    return (
        <form className="singUp-form" onSubmit={handleSubmit}>
            <p className="singUp-form__header">Register new account</p>
            <TextField label="Email" type="email" onChange={handleEmailChange} value={email} autoComplete="username" />
            <br />
            <TextField label="Password" type="password" onChange={handlePasswordChange} value={password} autoComplete="new-password" />
            <div className="singUp-form__error">
                {error && <p>{error}</p>}
                <button type="submit" className="singUp-btn btn">Sing Up</button>
            </div>
            <hr />
            <p>Already have an account? <Link to='/login'>Login</Link></p>

        </form>
    )


}