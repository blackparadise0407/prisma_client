import request from 'api/request';

const AuthEndpoint = '/auth';

const AuthApi = {
    login: (data: any) => {
        return request<any>('POST', AuthEndpoint, data);
    },
};

export default AuthApi;
