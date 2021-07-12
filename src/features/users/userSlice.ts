import { createSlice } from '@reduxjs/toolkit';
import { ReducerStatus, User } from 'schema';

export interface UserState {
    status?: ReducerStatus;
    user?: User;
    error?: string;
}

const userInitState: UserState = {
    status: 'idle',
    user: null,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitState,
    reducers: {},
    extraReducers: (builder) => {},
});

export default userSlice.reducer;
