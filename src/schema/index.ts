import { ChangeEventHandler, FocusEventHandler } from 'react';
import { LoadableComponent } from 'react-loadable';
import { RouteProps } from 'react-router-dom';

export type Theme = 'default' | 'dark';

export interface AppState {}

export type Roles = 'super_admin' | 'user';

export type IRoute = {
    component: LoadableComponent;
    roles?: Roles[];
    useLayout?: boolean;
} & RouteProps;

export type ReducerStatus = 'loading' | 'idle' | 'success' | 'error';

export type InputType = 'text' | 'password' | 'email' | 'textarea';

export interface FormInputItem {
    name: string;
    onChange?: (e: ChangeEventHandler) => void;
    error?: string;
    onBlur?: (e: FocusEventHandler) => void;
    onFocus?: (e: FocusEventHandler) => void;
    label?: string;
    type?: InputType;
}
