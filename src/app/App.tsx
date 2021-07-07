import { PrivateRoute, ScrollToTop } from 'components';
import { map } from 'lodash';
import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { routes } from 'routes';
import ThemeProvider from 'themes/ThemeProvider';
import history from 'utils/history';

const _renderRoutes = () => {
    return map(routes, ({ Layout, component, path, ...rest }) => (
        <Layout key={path}>
            <PrivateRoute path={path} component={component} {...rest} />
        </Layout>
    ));
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
