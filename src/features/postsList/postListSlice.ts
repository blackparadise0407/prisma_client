import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
    ThunkDispatch,
} from '@reduxjs/toolkit';
import { PostApi } from 'api';
import { Post } from 'api/_apis/post';
import { AppState, AsyncThunkConfig } from 'app/rootReducer';
import { AppThunk } from 'app/store';
import { ReducerStatus } from 'schema';

export interface PostListState {
    posts?: Post[];
    status?: ReducerStatus;
    error?: string;
}

const postListInitState: PostListState = {
    status: 'idle',
    error: null,
    posts: [],
};

export const postListSlice = createSlice({
    name: 'postList',
    initialState: postListInitState,
    reducers: {
        fetchPostListLoading: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        fetchPostListUpdate: (state, { payload }: PayloadAction<Post[]>) => {
            state.posts = payload;
            state.status = 'success';
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
            const { data } = await PostApi.getAll();
            dispatch(fetchPostListUpdate(data));
        } catch (e) {
            dispatch(fetchPostListError(e.message));
        }
    };
};

export const postListSelector = (state: AppState) => state.postList;

export default postListSlice.reducer;
