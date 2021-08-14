import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { AuthState } from 'features/auth/authSlice';
import postCreateReducer, {
    PostCreateState,
} from 'features/postCreate/postCreateSlice';
import postListReducer, {
    PostListState,
} from 'features/postsList/postListSlice';
import preferencesReducer, {
    PreferencesState,
} from 'features/preferences/preferencesSlice';
import toastReducer, { ToastState } from 'features/toast/toastSlice';
import userReducer, { UserState } from 'features/users/userSlice';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

export interface AppState {
    auth: AuthState;
    preferences: PreferencesState;
    user: UserState;
    postCreate: PostCreateState;
    postList: PostListState;
    toast: ToastState;
}

export type AsyncThunkConfig = {
    state: AppState;
    rejectValue: string;
};

const persistConfig = {
    key: 'root',
    version: 1,
    storage: sessionStorage,
    whitelist: ['auth'],
};

const rootReducer = combineReducers<AppState>({
    auth: authReducer,
    preferences: preferencesReducer,
    postCreate: postCreateReducer,
    user: userReducer,
    postList: postListReducer,
    toast: toastReducer,
});

const persistedReducer = persistReducer<AppState>(persistConfig, rootReducer);

export default persistedReducer;
