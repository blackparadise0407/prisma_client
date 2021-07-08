import { PrivateRoute, ScrollToTop } from 'components';
import { AppLayout } from 'layouts';
import { map } from 'lodash';
import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { routes } from 'routes';
import ThemeProvider from 'themes/ThemeProvider';
import history from 'utils/history';

const _renderRoutes = () => {
    return map(routes, ({ useLayout, ...rest }, idx) => {
        if (useLayout) {
            return (
                <AppLayout key={idx}>
                    <PrivateRoute {...rest} />
                </AppLayout>
            );
        } else {
            return <PrivateRoute {...rest} />;
        }
    });
};
function App() {
    return (
        <Router history={history}>
            <ThemeProvider>
                <ScrollToTop />
                <Switch>{_renderRoutes()}</Switch>
            </ThemeProvider>
        </Router>
    );
}

export default App;
