import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import { AppState } from 'schema';

const rootReducer = combineReducers<AppState>({
    auth: authReducer,
});

export default rootReducer;
