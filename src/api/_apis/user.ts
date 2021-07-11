import request from 'api/request';
import { User } from 'schema';

const UserEndpoint = '/user';

const UserApi = {
    info: () => request<User>('GET', UserEndpoint),
};

export default UserApi;
