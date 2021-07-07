import { indexOf, isEmpty } from 'lodash';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Roles } from 'schema';

type Props = {
    auth?: boolean;
    roles?: Roles[];
} & RouteProps;

const PrivateRoute = ({ children, roles, auth, ...rest }: Props) => {
    const user: { role: Roles } = { role: 'user' };

    if (roles && roles.indexOf(user.role) === -1)
        return <Redirect to={{ pathname: '/' }} />;

    return <Route {...rest} />;
    // return (
    //     <Route
    //         {...rest}
    //         render={({ location }) =>
    //             !isEmpty(auth) ? (
    //                 children
    //             ) : (
    //                 <Redirect
    //                     to={{ pathname: '/login', state: { from: location } }}
    //                 />
    //             )
    //         }
    //     />
    // );
};

export default PrivateRoute;
