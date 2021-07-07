import { Loader } from 'components';
import MainLayout from 'layouts/MainLayout';
import Loadable from 'react-loadable';
import { IRoute } from 'schema';

const Login = Loadable({
    loader: () => import('features/auth/pages/Login'),
    loading: Loader,
});

export const routes: IRoute[] = [
    {
        component: Login,
        path: '/login',
        Layout: MainLayout,
    },
];
