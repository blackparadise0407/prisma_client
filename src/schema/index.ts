import { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';
import { LoadableComponent } from 'react-loadable';
import { RouteProps } from 'react-router-dom';

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
    avatar?: Attachment;
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

export type AttachmentType = 'IMAGE' | 'VIDEO' | 'FILE';

export interface Attachment {
    id?: number;
    size?: number;
    type?: AttachmentType;
    url?: string;
    blob?: string;
    file?: File;
}

export enum ReactionType {
    LIKE = 'LIKE',
    LOVE = 'LOVE',
    HAHA = 'HAHA',
    WOW = 'WOW',
    ANGER = 'ANGER',
    SAD = 'SAD',
}

export enum UserActionType {
    REACTION = 'REACTION',
    COMMENT = 'COMMENT',
    SHARE = 'SHARE',
}
export interface UserActions {
    reactionType?: ReactionType;
    type?: UserActionType;
    id?: number;
}
export interface Post {
    content?: string;
    photos?: Attachment[];
    createdAt?: string;
    updatedAt?: string;
    userId?: number;
    user?: User;
    id?: number;
    reactionCount?: number;
    shareCount?: number;
    commentCount?: number;
    reactions?: UserActions[];
    userActions?: UserActions[];
}
