const HOST: string = process.env.REACT_APP_HOST;

const CLIENT: string = process.env.REACT_APP_CLIENT;

const isDev: boolean = process.env.NODE_ENV === 'development';

const config = {
    apiTimeout: 20000,
    rootFontSize: 10,
    google: {
        url: 'https://accounts.google.com/o/oauth2/v2/auth',
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        redirect_uri: `${CLIENT}/google`,
        response_type: 'token',
        scope: 'email profile',
    },
};

export { HOST, isDev, config };
