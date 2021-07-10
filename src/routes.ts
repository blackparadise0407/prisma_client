import { Loader } from 'components';
import Loadable from 'react-loadable';
import { IRoute } from 'schema';

const Home = Loadable({
    loader: () => import('features/posts/Home'),
    loading: Loader,
});

export const routes: IRoute[] = [
    {
        component: Home,
        path: '/',
        exact: true,
    },
];
