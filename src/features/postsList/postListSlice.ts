import {
    createEntityAdapter,
    createSlice,
    EntityAdapter,
    EntityState,
    PayloadAction,
} from '@reduxjs/toolkit';
import { PostApi } from 'api';
import { AppState } from 'app/rootReducer';
import { AppThunk } from 'app/store';
import { map } from 'lodash';
import { ReducerStatus, Post, UserActions } from 'schema';

// export interface PostListState {
//     posts?: Post[];
//     status?: ReducerStatus;
//     error?: string;
//     total?: number;
// }

// const postListInitState: PostListState = {
//     status: 'idle',
//     error: null,
//     posts: [],
//     total: 0,
// };

export interface PostState extends Post {
    status: ReducerStatus;
}

export interface PostListState extends EntityState<PostState> {
    status: ReducerStatus;
    error: string;
    total: number;
    page: number;
    limit: number;
    canLoadMore: boolean;
}

export const postListAdapter: EntityAdapter<PostState> =
    createEntityAdapter<PostState>({
        selectId: (post: PostState) => post.id,
    });

const initialState: PostListState = postListAdapter.getInitialState({
    error: null,
    status: 'idle',
    total: 0,
    page: 1,
    limit: 5,
    canLoadMore: false,
});

export const postListSlice = createSlice({
    name: 'postList',
    initialState: initialState,
    reducers: {
        fetchPostListLoading: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        fetchPostListUpdate: (
            state,
            { payload }: PayloadAction<{ posts: PostState[]; total: number }>,
        ) => {
            postListAdapter.addMany(state, payload.posts);
            state.status = 'success';
            state.total = payload.total;
            state.canLoadMore = payload.posts.length < payload.total;
        },
        fetchPostListError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
            state.status = 'error';
        },
        loadMorePost: (
            state,
            {
                payload,
            }: PayloadAction<{
                posts: PostState[];
                page: number;
                canLoadMore: boolean;
            }>,
        ) => {
            postListAdapter.addMany(state, payload.posts);
            state.status = 'success';
            state.page = payload.page;
            state.canLoadMore = payload.canLoadMore;
        },
        fetchCommentLoading: (
            state,
            { payload }: PayloadAction<{ id: number }>,
        ) => {
            postListAdapter.updateOne(state, {
                id: payload.id,
                changes: { status: 'loading' },
            });
        },
        fetchCommentSuccess: (
            state,
            { payload }: PayloadAction<{ id: number; comments: UserActions[] }>,
        ) => {
            postListAdapter.updateOne(state, {
                id: payload.id,
                changes: { status: 'success', comments: payload.comments },
            });
        },
        fetchCommentError: (
            state,
            { payload }: PayloadAction<{ id: number }>,
        ) => {
            postListAdapter.updateOne(state, {
                id: payload.id,
                changes: { status: 'error' },
            });
        },
    },
});

export const {
    fetchPostListLoading,
    fetchPostListError,
    fetchPostListUpdate,
    loadMorePost,
    fetchCommentError,
    fetchCommentLoading,
    fetchCommentSuccess,
} = postListSlice.actions;

export const fetchPostList = (): AppThunk => {
    return async (dispatch, state) => {
        dispatch(fetchPostListLoading());
        try {
            const { limit } = { ...state().postList };
            const { data } = await PostApi.getAll({ page: 1, limit });
            const posts: PostState[] = map(data.posts, (p) => ({
                ...p,
                status: 'idle',
            }));
            dispatch(fetchPostListUpdate({ posts, total: data.total }));
        } catch (e) {
            dispatch(fetchPostListError(e.message));
        }
    };
};

export const loadMore = (): AppThunk => {
    return async (dispatch, state) => {
        dispatch(fetchPostListLoading());
        try {
            const { page, limit } = { ...state().postList };
            const { data } = await PostApi.getAll({
                page: page + 1,
                limit,
            });
            const posts: PostState[] = map(data.posts, (p) => ({
                ...p,
                status: 'idle',
            }));
            dispatch(
                loadMorePost({
                    page: page + 1,
                    posts,
                    canLoadMore: (page + 1) * limit < data.total,
                }),
            );
        } catch (e) {
            dispatch(fetchPostListError(e.message));
        }
    };
};

export const fetchCommentByPostId = (postId: number): AppThunk => {
    return async (dispatch, state) => {
        dispatch(fetchCommentLoading({ id: postId }));
        try {
            const { data } = await PostApi.getCommentByPostId(postId, {
                page: 1,
                limit: 10,
            });
            const { comments, total } = data;
            console.log(comments);
            dispatch(fetchCommentSuccess({ id: postId, comments }));
        } catch (e) {
            dispatch(fetchCommentError({ id: postId }));
        }
    };
};

export const postListSelector = (state: AppState) => state.postList;

export default postListSlice.reducer;
