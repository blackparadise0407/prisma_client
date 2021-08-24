import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostApi } from 'api';
import attachmentApi from 'api/_apis/attachment';

import { PostCreateRequest } from 'api/_apis/post';
import { AppState, AsyncThunkConfig } from 'app/rootReducer';
import { map as blueBirdMap } from 'bluebird';
import { toast } from 'features/toast/toastSlice';
import { map } from 'lodash';

import { Attachment, Post, ReducerStatus } from 'schema';

export interface PostCreateState {
    status?: ReducerStatus;
    post?: Post;
    error?: string;
}

const postCreateInitState: PostCreateState = {
    post: {
        photos: [],
        content: '',
    },
    status: 'idle',
    error: null,
};

export const createPost = createAsyncThunk<any, null, AsyncThunkConfig>(
    'postCreate/Create',
    async (_, thunkAPI) => {
        const {
            postCreate: {
                post: { content, photos },
            },
        } = thunkAPI.getState();
        const post: PostCreateRequest = {
            content,
        };

        if (!post.content || !post.photos.length) {
            toast.error('Post must have content or have at least 1 photo');
            return thunkAPI.rejectWithValue(
                'Post must have content or have at least 1 photo',
            );
        }
        const resp = await blueBirdMap(photos, (p) =>
            attachmentApi.uploadImage(p.file),
        );

        post.photos = map(resp, (p) => p.data.id);

        try {
            await PostApi.create(post);
            return thunkAPI.fulfillWithValue(null);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);

export const postCreateSlice = createSlice({
    name: 'postCreate',
    initialState: postCreateInitState,
    reducers: {
        updateContent: (state, action: PayloadAction<string>) => {
            state.post.content = action.payload;
        },
        updatePhotos: (
            state,
            { payload }: PayloadAction<{ data: Attachment }>,
        ) => {
            state.post.photos.push(payload.data);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createPost.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(createPost.fulfilled, (state) => {
            state.status = 'success';
            state.post = { photos: [], content: '' };
        });
        builder.addCase(createPost.rejected, (state, { payload }) => {
            state.status = 'error';
            state.error = payload;
        });
    },
});

export const { updateContent, updatePhotos } = postCreateSlice.actions;

export const postCreateSelector = (state: AppState) => state.postCreate;

export default postCreateSlice.reducer;
