const HOST: string = process.env.REACT_APP_HOST;

const isDev: boolean = process.env.NODE_ENV === 'development';

const config = {
    apiTimeout: 20000,
    rootFontSize: 10,
    googleURL: 'https://accounts.google.com/o/oauth2/v2/auth',
    googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    googleRedirectURL: 'http://localhost:3000/google',
    response_type: 'token',
    scope: 'email profile',
};

export { HOST, isDev, config };
