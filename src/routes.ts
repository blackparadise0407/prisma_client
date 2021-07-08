import { Loader } from 'components';
import { AppLayout } from 'layouts';
import Loadable from 'react-loadable';
import { IRoute } from 'schema';

const Login = Loadable({
    loader: () => import('features/auth/Login'),
    loading: Loader,
});

export const routes: IRoute[] = [
    {
        component: Login,
        path: '/login',
        useLayout: false,
    },
];
