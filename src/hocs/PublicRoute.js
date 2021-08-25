import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ authed, ...rest }) => {
    return !authed ? (<Route {...rest} />) : (<Redirect to={{ pathname: '/chats' }} />);
};
