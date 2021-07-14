import { AuthState } from 'features/auth/authSlice';
import { LocaleState } from 'features/locale/localeSlice';
import { ThemeState } from 'features/theme/themeSlice';
import { UserState } from 'features/users/userSlice';
import { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';
import { LoadableComponent } from 'react-loadable';
import { RouteProps } from 'react-router-dom';

export type Theme = 'default' | 'dark';

export interface AppState {
    auth: AuthState;
    locale: LocaleState;
    theme: ThemeState;
    user: UserState;
}

export type Roles = 'super_admin' | 'user';

export type IRoute = {
    component: LoadableComponent | ReactNode;
    roles?: Roles[];
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

export type UserStatus = 'VERIFIED' | 'PENDING' | 'DEACTIVATED';
export interface User {
    status?: UserStatus;
    username?: string;
    email?: string;
    id?: string;
    avatar?: string;
}

export interface GeneralApiResponse<T = {}> {
    message?: string;
    data?: T;
}

export interface Token {
    accessToken?: string;
    refreshToken?: string;
}

export interface INavigationItem {
    name: string;
    icon?: JSX.Element;
    path?: string;
}
