import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { NoChat } from '../NoChat/NoChat';
import { Profile } from '../Profile/Profile';
import './Router.css';

export const Router = () => {

    return (
        <BrowserRouter>
            <div className="nav__wrapper">
                <ul className="nav container">
                    <li className="nav__item"><Link to='/home/'>Home</Link></li>
                    <li className="nav__item"><Link to='/profile'>Profile</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path='/' exact render={() => <h2 className="page">Welcome to this app!</h2>}></Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/nochat'>
                    <NoChat />
                </Route>
                <Route path='/home/:chatId?'>
                    <Home />
                </Route>
                <Route path='*' render={() => <h2 className="page error">Error 404: Page Not Found</h2>}></Route>
            </Switch>
        </BrowserRouter>
    )
}