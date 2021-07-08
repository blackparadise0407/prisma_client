import axios, { AxiosRequestConfig, Method } from 'axios';
import { config, HOST } from 'constant/config';
import qs from 'query-string';
import Cookies from 'js-cookie';
import store from 'app/store';
import { METHODS } from 'http';

interface OriginalRequest {
    url?: string;
    data?: any;
    headers?: any;
    method?: any;
}

const originalRequest: OriginalRequest = {};

const axiosClient = axios.create({
    baseURL: HOST + '/api',
    timeout: config.apiTimeout,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (p) =>
        qs.stringify(p, {
            skipNull: true,
        }),
});

axiosClient.interceptors.request.use(async (config) => {
    const token = Cookies.get('accessToken');
    if (token) config['headers']['Authorization'] = `Bearer ${token}`;
    const { url, data, headers, baseURL, method } = config;

    if (url !== '/auth/refresh-token') {
        originalRequest.url = baseURL + url;
        originalRequest.data = data;
        originalRequest.headers = headers;
        originalRequest.method = method;
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
    },
    async (error) => {
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
    };
    if (method === 'GET' || method === 'get') {
        config.params = data;
    } else config.data = data;

    const response = (await axiosClient.request(config)) as T;
    return response;
}

export default request;
