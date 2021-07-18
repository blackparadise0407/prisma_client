import request from 'api/request';

import { GeneralApiResponse, User } from 'schema';
import { Attachment } from './attachment';

export interface PostCreateRequest {
    content?: string;
    photos?: string[];
}

export interface Post {
    content?: string;
    photos?: Attachment[];
    createdAt?: string;
    updatedAt?: string;
    userId?: User;
    id?: string;
}

const PostEndpoint = '/post';

const postApi = {
    create: (data: PostCreateRequest) =>
        request<GeneralApiResponse>('POST', PostEndpoint, data),
    getAll: () => request<GeneralApiResponse<Post[]>>('GET', PostEndpoint),
};

export default postApi;
