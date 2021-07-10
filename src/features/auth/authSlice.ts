import {
    AnyAction,
    AsyncThunk,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { AuthApi } from 'api';
import Cookies from 'js-cookie';
import { AppState, ReducerStatus } from 'schema';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

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
            const { data: resp } = await AuthApi.login(data);
            localStorage.setItem('refreshToken', resp.refreshToken);
            Cookies.set('accessToken', resp.accessToken);
            return thunkAPI.fulfillWithValue(resp.user);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);

export const googleLogin = createAsyncThunk<any, any, any>(
    'auth/LoginGoogle',
    async (data, thunkAPI) => {
        try {
            const { data: resp } = await AuthApi.googleSignIn({
                access_token: data,
            });
            localStorage.setItem('refreshToken', resp.refreshToken);
            Cookies.set('accessToken', resp.accessToken);
            return thunkAPI.fulfillWithValue(resp.user);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);

function isPendingAction(action: AnyAction): action is PendingAction {
    return action.type.endsWith('/pending');
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.status = 'loading';
            state.error = null;
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
        builder.addCase(googleLogin.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(googleLogin.fulfilled, (state, { payload }) => {
            state.status = 'success';
            state.isAuth = true;
            state.user = payload;
        });
        builder.addCase(googleLogin.rejected, (state, { payload }) => {
            state.status = 'error';
            state.error = payload as string;
        });
    },
});

export const authSelector = (state: AppState) => state.auth;

export default authSlice.reducer;
