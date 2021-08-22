import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ authed, ...rest }) => {
    return authed ? (<Route {...rest} />) : (<Redirect to={{ pathname: '/login' }} />);
};


