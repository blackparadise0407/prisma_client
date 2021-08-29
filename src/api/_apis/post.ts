import request, { RequestQuery } from 'api/request';

import { GeneralApiResponse, Post, UserActions } from 'schema';

export interface PostCreateRequest {
    content?: string;
    photos?: number[];
}

export interface PostRequestQuery extends RequestQuery {}

const PostEndpoint = '/post';

const postApi = {
    create: (data: PostCreateRequest) =>
        request<GeneralApiResponse>('POST', PostEndpoint, data),
    getAll: (query: PostRequestQuery) =>
        request<GeneralApiResponse<{ posts: Post[]; total: number }>>(
            'GET',
            PostEndpoint,
            query,
        ),
    getCommentByPostId: (postId: number, query: PostRequestQuery) =>
        request<GeneralApiResponse<{ comments: UserActions[]; total: number }>>(
            'GET',
            PostEndpoint + `/${postId}/comments`,
            query,
        ),
};

export default postApi;
