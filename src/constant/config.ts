const HOST: string = process.env.REACT_APP_HOST;

const isDev: boolean = process.env.NODE_ENV === 'development';

const config = {
    apiTimeout: 20000,
};

export { HOST, isDev, config };
