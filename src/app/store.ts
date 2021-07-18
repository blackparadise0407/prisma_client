import {
    Action,
    configureStore,
    getDefaultMiddleware,
    ThunkAction,
} from '@reduxjs/toolkit';
import persistedReducer, { AppState } from 'app/rootReducer';
import { isDev } from 'constant/config';
import persistStore from 'redux-persist/es/persistStore';

const middleware = getDefaultMiddleware({
    serializableCheck: false,
    thunk: true,
});

const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: isDev,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;

export const persistor = persistStore(store);

export default store;
