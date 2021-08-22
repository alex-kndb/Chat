import React from 'react';
import { Link } from 'react-router-dom';
import { SingUp } from '../SingUp/SingUp';
import './Home.css';

export const Home = () => {
    return (
        <div className="main-wrapper">
            <div className="home">
                <h3 className="home__header">Home</h3>
                <ul className="home__list">
                    <li className="home__li btn">
                        <Link to='/login'>Login</Link>
                    </li>
                    <li className="home__li btn">
                        <Link to='/singup'>Sing Up</Link>
                    </li>
                </ul>
            </div>
            <SingUp />
        </div>
    )
}