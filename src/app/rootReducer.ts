import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import localeReducer from 'features/locale/localeSlice';
import themeReducer from 'features/theme/themeSlice';
import userReducer from 'features/users/userSlice';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import { AppState } from 'schema';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: sessionStorage,
    whitelist: ['auth'],
};

const rootReducer = combineReducers<AppState>({
    auth: authReducer,
    locale: localeReducer,
    theme: themeReducer,
    user: userReducer,
});

const persistedReducer = persistReducer<AppState>(persistConfig, rootReducer);

export default persistedReducer;
