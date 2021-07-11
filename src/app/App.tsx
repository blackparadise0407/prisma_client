import { PrivateRoute, ScrollToTop } from 'components';
import Google from 'features/auth/Google';
import Login from 'features/auth/SignUp';
import { themeSelector } from 'features/theme/themeSlice';
import { userInfo } from 'features/auth/authSlice';
import { map } from 'lodash';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { routes } from 'routes';
import ThemeProvider from 'themes/ThemeProvider';
import history from 'utils/history';

const _renderRoutes = () => {
    return map(routes, ({ ...rest }, idx) => {
        return <PrivateRoute key={idx} {...rest} />;
    });
};
function App() {
    const dispatch = useDispatch();
    const { theme } = useSelector(themeSelector);

    useEffect(() => {
        dispatch(userInfo());
    }, []);

    return (
        <Router history={history}>
            <ThemeProvider themeMode={theme}>
                <ScrollToTop />
                <Switch>{_renderRoutes()}</Switch>
                <Route component={Google} path="/google" />
                <Route component={Login} path="/login" />
                <Route component={Login} path="/signup" />
            </ThemeProvider>
        </Router>
    );
}

export default App;
