import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from 'features/auth/authSlice';
import { AppState } from 'schema';

const rootReducer = combineReducers<AppState>({
    auth: authSlice.reducer,
});

export default rootReducer;
