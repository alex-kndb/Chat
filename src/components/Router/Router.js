import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Chats } from '../Chats/Chats';
import { NoChat } from '../NoChat/NoChat';
import { Profile } from '../Profile/Profile';
import { Login } from '../Login/Login';
import { GistsList } from '../GistsList/GistsList';
import { PublicRoute } from '../../hocs/PublicRoute';
import { PrivateRoute } from '../../hocs/PrivateRoute';
import firebase from 'firebase';
import './Router.css';

export const Router = () => {

    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('authed--------', authed);
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        })
    }, []);

    return (
        <BrowserRouter>
            <div className="header">
                <ul className="nav nav__container">
                    <li className="nav__item"><Link to='/home/'>Home</Link></li>
                    <li className="nav__item"><Link to='/profile'>Profile</Link></li>
                    <li className="nav__item"><Link to='/gistslist'>GistsList</Link></li>
                </ul>
            </div>
            <Switch>
                <PublicRoute authed={authed} exact path='/login'>
                    <Login />
                </PublicRoute>
                <PublicRoute authed={authed} exact path='/singup'>
                    <Login isSignUp />
                </PublicRoute>
                <PublicRoute authed={authed} exact path='/home'>
                    <Home />
                </PublicRoute>
                <PublicRoute authed={authed} path='/gistslist'>
                    <GistsList />
                </PublicRoute>
                <PrivateRoute authed={authed} path='/profile'>
                    <Profile />
                </PrivateRoute>
                <PrivateRoute authed={authed} path='/nochat'>
                    <NoChat />
                </PrivateRoute>
                <PrivateRoute authed={authed} path='/chats/:chatId?'>
                    <Chats />
                </PrivateRoute>
                <Route path='/' exact render={() => <h2 className="page main-wrapper">Welcome to this app!</h2>} />
                <Route path='*' render={() => <h2 className="page error main-wrapper">Error 404: Page Not Found</h2>} />
            </Switch>
        </BrowserRouter>
    )
}