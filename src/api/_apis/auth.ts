import request from 'api/request';
import { GeneralApiResponse, Token, User } from 'schema';

const AuthEndpoint = '/auth';

interface LoginResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
}

const AuthApi = {
    login: (data: { email: string; password: string }) => {
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
};

export default AuthApi;
