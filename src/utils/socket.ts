import { config } from 'constant/config';
import { io } from 'socket.io-client';

const HOST = config.ws.host;

const wssPost = io(HOST + '/post');
const wssApp = io(HOST + '/app');
const wssChat = io(HOST + '/chat');

export { wssPost, wssApp, wssChat };
