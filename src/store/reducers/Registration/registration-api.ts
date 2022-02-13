import axios from 'axios';

import { UserInfoType } from 'store/reducers/Registration/types';

const instance = axios.create({
  // baseURL: 'http://localhost:7542/2.0/auth/',
  baseURL: 'https://neko-back.herokuapp.com/2.0/auth/',
});

export const registrationApi = {
  fetchRegistrationInfo(userInfo: UserInfoType) {
    return instance.post<UserInfoType>('register', userInfo);
  },
};
