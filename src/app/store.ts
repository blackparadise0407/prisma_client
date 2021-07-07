import {
    Action,
    configureStore,
    getDefaultMiddleware,
    ThunkAction,
} from '@reduxjs/toolkit';
import rootReducer from 'app/rootReducer';
import { isDev } from 'constant/config';
import { AppState } from 'schema';

const middleware = getDefaultMiddleware({
    serializableCheck: false,
    thunk: true,
});

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: isDev,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;

export default store;
