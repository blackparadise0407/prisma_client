import { Loader } from 'components';
import Loadable from 'react-loadable';
import { IRoute } from 'schema';

const Newsfeed = Loadable({
    loader: () => import('features/newsfeed/Newsfeed'),
    loading: Loader,
});

export const routes: IRoute[] = [
    {
        component: Newsfeed,
        path: '/',
        exact: true,
    },
];
