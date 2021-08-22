import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostApi } from 'api';
import { AppState } from 'app/rootReducer';
import { AppThunk } from 'app/store';
import { ReducerStatus, Post } from 'schema';

export interface PostListState {
    posts?: Post[];
    status?: ReducerStatus;
    error?: string;
    total?: number;
}

const postListInitState: PostListState = {
    status: 'idle',
    error: null,
    posts: [],
    total: 0,
};

export const postListSlice = createSlice({
    name: 'postList',
    initialState: postListInitState,
    reducers: {
        fetchPostListLoading: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        fetchPostListUpdate: (
            state,
            { payload }: PayloadAction<{ posts: Post[]; total: number }>,
        ) => {
            console.log(payload);
            state.posts = payload.posts;
            state.status = 'success';
            state.total = payload.total;
        },
        fetchPostListError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
            state.status = 'error';
        },
    },
});

export const { fetchPostListLoading, fetchPostListError, fetchPostListUpdate } =
    postListSlice.actions;

export const fetchPostList = (): AppThunk => {
    return async (dispatch, state) => {
        dispatch(fetchPostListLoading());
        try {
            const { data } = await PostApi.getAll({ page: 1, limit: 10 });
            dispatch(fetchPostListUpdate(data));
        } catch (e) {
            dispatch(fetchPostListError(e.message));
        }
    };
};

export const postListSelector = (state: AppState) => state.postList;

export default postListSlice.reducer;
