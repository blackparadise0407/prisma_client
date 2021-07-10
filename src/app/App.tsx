import { PrivateRoute, ScrollToTop } from 'components';
import Google from 'features/auth/Google';
import Login from 'features/auth/SignUp';
import { map } from 'lodash';
import React from 'react';
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
    return (
        <Router history={history}>
            <ThemeProvider>
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
