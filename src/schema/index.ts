import { LoadableComponent } from 'react-loadable';
import { RouteProps } from 'react-router-dom';

export type Theme = 'default' | 'dark';

export interface AppState {}

export type Roles = 'super_admin' | 'user';

export type IRoute = {
    component: LoadableComponent;
    roles?: Roles[];
    Layout?: any;
} & RouteProps;
