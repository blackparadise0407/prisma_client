import axios, { AxiosRequestConfig, Method } from 'axios';
import { config, HOST } from 'constant/config';
import Cookies from 'js-cookie';
import qs from 'query-string';
import AuthApi from './_apis/auth';

const axiosClient = axios.create({
    baseURL: HOST + '/api',
    timeout: config.apiTimeout,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (p) => {
        return qs.stringify(p, {
            skipNull: true,
        });
    },
});

axiosClient.interceptors.request.use(async (config) => {
    const token = Cookies.get('accessToken');
    if (token) config['headers']['Authorization'] = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
    },
    async (error: any) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const { headers } = originalRequest;
            if (!headers['Authorization']) {
                return Promise.reject('');
            }
            try {
                const token = localStorage.getItem('refreshToken');
                if (!token) {
                    throw new Error(``);
                }
                const {
                    data: { accessToken },
                } = await AuthApi.refreshToken(token);
                Cookies.set('accessToken', accessToken);
                headers['Authorization'] = `Bearer ${accessToken}`;
                return await axiosClient(originalRequest);
            } catch (e) {
                throw e;
            }
        }
        if (error.response) {
            throw error.response.data;
        } else {
            throw new Error('Unknow error');
        }
    },
);

async function request<T>(method: Method, url: string, data?: any) {
    const config: AxiosRequestConfig = {
        method,
        url,
    };

    if (method === 'GET' || method === 'get') {
        config.params = data;
    } else config.data = data;

    const response = (await axiosClient.request(config)) as T;
    return response;
}

export default request;
