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
import { every, findIndex, map, some } from 'lodash';
import { ReducerStatus, Post, UserActions, UserActionType } from 'schema';
import { wssPost } from 'utils/socket';
export interface PostState extends Post {
    status: ReducerStatus;
    page: number;
    limit: number;
    canLoadMoreComment?: boolean;
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
            {
                payload,
            }: PayloadAction<{
                id: number;
                comments: UserActions[];
                canLoadMoreComment: boolean;
            }>,
        ) => {
            postListAdapter.updateOne(state, {
                id: payload.id,
                changes: {
                    status: 'success',
                    comments: payload.comments,
                    canLoadMoreComment: payload.canLoadMoreComment,
                },
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
        fetchMoreCommentSuccess: (
            state,
            {
                payload,
            }: PayloadAction<{
                id: number;
                comments: UserActions[];
                canLoadMoreComment: boolean;
            }>,
        ) => {
            postListAdapter.updateOne(state, {
                id: payload.id,
                changes: {
                    status: 'success',
                    comments: [
                        ...(state.entities[payload.id]?.comments ?? []),
                        ...payload.comments,
                    ],
                    canLoadMoreComment: payload.canLoadMoreComment,
                },
            });
        },
        fetchRepliesSuccess: (
            state,
            {
                payload,
            }: PayloadAction<{
                postId: number;
                commentId: number;
                replies: UserActions[];
            }>,
        ) => {
            const { postId, commentId, replies } = payload;
            const cloneComment = [...state.entities[postId].comments];
            const _cmtIdx = findIndex(
                state.entities[postId].comments,
                (i) => i.id === commentId,
            );
            cloneComment[_cmtIdx].replies = replies;
            postListAdapter.updateOne(state, {
                id: payload.postId,
                changes: {
                    comments: cloneComment,
                    status: 'success',
                },
            });
        },
        updatePostSuccess: (state, { payload }: PayloadAction<PostState>) => {
            postListAdapter.updateOne(state, {
                id: payload.id,
                changes: { ...payload },
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
    fetchRepliesSuccess,
    updatePostSuccess,
    fetchMoreCommentSuccess,
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
                limit: 10,
                page: 1,
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
                limit: 10,
                page: 1,
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
        const commentClone = [
            ...(state().postList.entities[postId]?.comments ?? []),
        ];
        if (!commentClone.length || every(commentClone, (i) => i.status)) {
            dispatch(fetchCommentLoading({ id: postId }));
            try {
                const { page, limit } = {
                    ...state().postList.entities[postId],
                };
                const { data } = await PostApi.getCommentByPostId(postId, {
                    page: 1,
                    limit: 10,
                });
                const { comments, total } = data;
                const canLoadMore = page * limit < total;
                dispatch(
                    fetchCommentSuccess({
                        id: postId,
                        comments,
                        canLoadMoreComment: canLoadMore,
                    }),
                );
            } catch (e) {
                dispatch(fetchCommentError({ id: postId }));
            }
        }
    };
};

export const loadMoreCommentByPostId = (postId: number): AppThunk => {
    return async (dispatch, state) => {
        dispatch(fetchCommentLoading({ id: postId }));
        try {
            const { page, limit } = { ...state().postList.entities[postId] };
            const { data } = await PostApi.getCommentByPostId(postId, {
                page: page + 1,
                limit,
            });
            const { comments, total } = data;
            const canLoadMore = (page + 1) * limit < total;
            dispatch(
                fetchMoreCommentSuccess({
                    id: postId,
                    comments,
                    canLoadMoreComment: canLoadMore,
                }),
            );
        } catch (e) {
            dispatch(fetchCommentError({ id: postId }));
        }
    };
};

export const getRepliesByCommentId = (
    postId: number,
    commentId: number,
): AppThunk => {
    return async (dispatch, _) => {
        dispatch(fetchCommentLoading({ id: postId }));
        try {
            const { data } = await PostApi.getRepliesByCommentId(
                postId,
                commentId,
            );
            dispatch(fetchRepliesSuccess({ postId, commentId, replies: data }));
        } catch (e) {
            dispatch(fetchCommentError({ id: postId }));
        }
    };
};

export const commentByPostId = (postId: number, content: string): AppThunk => {
    return (_, state) => {
        const currentUser = { ...state().auth.user };

        wssPost.emit('comment', {
            entityId: postId,
            entityType: 'POST',
            type: UserActionType.COMMENT,
            content,
            user: currentUser,
        });
    };
};

export const updateCommentByPostId = (
    postId: number,
    comment: UserActions,
): AppThunk => {
    return (dispatch, state) => {
        const postClone = { ...state().postList.entities[postId] };
        const commentClone = [...(postClone?.comments ?? [])];
        commentClone.unshift(comment);
        dispatch(
            updatePostSuccess({
                ...postClone,
                comments: commentClone,
                commentCount: postClone.commentCount + 1,
            }),
        );
    };
};

export const updateCommentByPostIdSuccess = ({
    postId,
    commentId,
    tempId,
}: {
    postId: number;
    commentId: number;
    tempId: number;
}): AppThunk => {
    return (dispatch, state) => {
        const postClone = { ...state().postList.entities[postId] };
        const commentClone = [...(postClone?.comments ?? [])];
        const updateIndex = findIndex(commentClone, (c) => c.id === tempId);
        if (updateIndex > -1) {
            commentClone[updateIndex] = {
                ...commentClone[updateIndex],
                status: 'success',
                id: commentId,
            };
        }
        // const commentClone: UserActions[] = map(
        //     postClone?.comments ?? [],
        //     (i) => ({
        //         ...i,
        //         status: i.id === tempId ? 'success' : 'error',
        //         id: i.id === tempId,
        //     }),
        // );
        dispatch(
            updatePostSuccess({
                ...postClone,
                comments: commentClone,
            }),
        );
    };
};

export const postListSelector = (state: AppState) => state.postList;

export default postListSlice.reducer;
