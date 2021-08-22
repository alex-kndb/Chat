import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { GistsList } from '../GistsList/GistsList';
import { Home } from '../Home/Home';
import { Chats } from '../Chats/Chats';
import { NoChat } from '../NoChat/NoChat';
import { Profile } from '../Profile/Profile';
import { Login } from '../Login/Login';
import { SingUp } from '../SingUp/SingUp';
import './Router.css';

export const Router = () => {

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
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/singup'>
                    <SingUp />
                </Route>
                <Route path='/' exact render={() => <h2 className="page main-wrapper">Welcome to this app!</h2>}></Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/nochat'>
                    <NoChat />
                </Route>
                <Route path='/gistslist'>
                    <GistsList />
                </Route>
                <Route exact path='/home'>
                    <Home />
                </Route>
                <Route path='/chats/:chatId?'>
                    <Chats />
                </Route>
                <Route path='*' render={() => <h2 className="page error main-wrapper">Error 404: Page Not Found</h2>}></Route>
            </Switch>
        </BrowserRouter>
    )
}