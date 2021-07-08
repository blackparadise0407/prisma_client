import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthApi } from 'api';
import { ReducerStatus } from 'schema';

export interface AuthState {
    isAuth?: boolean;
    user?: any;
    status?: ReducerStatus;
    error?: string;
}

const authInitState: AuthState = {
    status: 'idle',
    user: null,
    isAuth: false,
    error: null,
};

export const login = createAsyncThunk<any, any, any>(
    'auth/Login',
    async (data, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await AuthApi.login(data));
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.status = 'success';
            state.isAuth = true;
            state.user = payload;
        });
        builder.addCase(login.rejected, (state, { payload }) => {
            state.status = 'error';
            state.error = payload as string;
        });
    },
});
