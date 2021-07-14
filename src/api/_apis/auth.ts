import request from 'api/request';
import { GeneralApiResponse, Token, User } from 'schema';

const AuthEndpoint = '/auth';
const UserEndpoint = '/user';

interface LoginResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
}

export interface LoginRequest {
    email?: string;
    password?: string;
}

export interface SignUpRequest {
    email?: string;
    password?: string;
    username?: string;
}

const AuthApi = {
    login: (data: LoginRequest) => {
        return request<GeneralApiResponse<LoginResponse>>(
            'POST',
            AuthEndpoint + '/login',
            data,
        );
    },
    googleSignIn: (data: { access_token?: string }) =>
        request<GeneralApiResponse<LoginResponse>>(
            'GET',
            AuthEndpoint + '/google',
            data,
        ),
    signup: (data: SignUpRequest) =>
        request<GeneralApiResponse>('POST', UserEndpoint + '/register', data),
    refreshToken: (refreshToken: string) =>
        request<GeneralApiResponse<{ accessToken: string }>>(
            'POST',
            AuthEndpoint + '/refresh-token',
            { refreshToken },
        ),

    logout: () => request<GeneralApiResponse>('GET', AuthEndpoint + '/logout'),
};

export default AuthApi;
