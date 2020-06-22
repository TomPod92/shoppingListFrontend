import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => state.user.isAuth);
    const loading = useSelector(state => state.user.loading);
    return (
        <Route 
            {...rest} 
            render={props => (!isAuthenticated && !loading) ? <Redirect to="/login" /> : <Component {...props} /> }
        />
    )
}