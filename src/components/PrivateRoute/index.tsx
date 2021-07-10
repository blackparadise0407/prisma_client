import { authSelector } from 'features/auth/authSlice';
import { AppLayout } from 'layouts';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { IRoute } from 'schema';

const PrivateRoute = ({ ...rest }: IRoute) => {
    const auth = useSelector(authSelector);

    if (!auth.isAuth)
        return (
            <Redirect
                to={{
                    pathname: '/login',
                }}
            />
        );

    return (
        <AppLayout>
            <Route {...rest} />
        </AppLayout>
    );
};

export default PrivateRoute;
