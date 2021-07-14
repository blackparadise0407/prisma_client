import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthApi, UserApi } from 'api';
import { LoginRequest, SignUpRequest } from 'api/_apis/auth';
import Cookies from 'js-cookie';
import { AppState, ReducerStatus, User } from 'schema';
import history from 'utils/history';

// type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

// type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
// type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
// type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export interface AuthState {
    isAuth?: boolean;
    user?: User;
    status?: ReducerStatus;
    error?: string;
}

const authInitState: AuthState = {
    status: 'idle',
    user: null,
    isAuth: false,
    error: null,
};

export const signup = createAsyncThunk<
    any,
    SignUpRequest,
    { rejectValue: string }
>('auth/Signup', async (data, thunkAPI) => {
    try {
        await AuthApi.signup(data);
        return thunkAPI.fulfillWithValue(null);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message as string);
    }
});

export const login = createAsyncThunk<
    User,
    LoginRequest,
    { rejectValue: string }
>('auth/Login', async (data, thunkAPI) => {
    try {
        const { data: resp } = await AuthApi.login(data);
        localStorage.setItem('refreshToken', resp.refreshToken);
        Cookies.set('accessToken', resp.accessToken);
        return thunkAPI.fulfillWithValue(resp.user) as User;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message as string);
    }
});

export const googleLogin = createAsyncThunk<
    User,
    string,
    { rejectValue: string }
>('auth/LoginGoogle', async (data, thunkAPI) => {
    try {
        const { data: resp } = await AuthApi.googleSignIn({
            access_token: data,
        });
        localStorage.setItem('refreshToken', resp.refreshToken);
        Cookies.set('accessToken', resp.accessToken);
        return thunkAPI.fulfillWithValue(resp.user) as User;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message as string);
    }
});

export const userInfo = createAsyncThunk<User, null, { rejectValue: string }>(
    'auth/Info',
    async (_, thunkAPI) => {
        try {
            const user = await UserApi.info();
            return thunkAPI.fulfillWithValue(user) as User;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message as string);
        }
    },
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    reducers: {
        logout: (state) => {
            state.isAuth = false;
            state.user = null;
            history.push('/login');
        },
        resetStatus: (state) => {
            state.status = 'idle';
        },
    },
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
        builder.addCase(signup.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(signup.fulfilled, (state) => {
            state.status = 'success';
        });
        builder.addCase(signup.rejected, (state, { payload }) => {
            state.status = 'error';
            state.error = payload as string;
        });
        builder.addCase(userInfo.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(userInfo.fulfilled, (state, { payload }) => {
            state.status = 'success';
            state.isAuth = true;
            state.user = payload;
        });
        builder.addCase(userInfo.rejected, (state, { payload }) => {
            state.status = 'error';
            state.error = payload as string;
        });
    },
});

export const { logout, resetStatus } = authSlice.actions;

export const authSelector = (state: AppState) => state.auth;

export default authSlice.reducer;
