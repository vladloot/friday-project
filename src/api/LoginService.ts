import axios, { AxiosResponse } from 'axios';

import { LoginParams, LogoutResponse, UserInfoResponse } from 'api/types';

const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/',
  withCredentials: true,
});

export const LoginService = {
  login(data: LoginParams) {
    return instance.post<LoginParams, AxiosResponse<UserInfoResponse>>(
      '/auth/login',
      data,
    );
  },
  checkAuth() {
    return instance.post<{}, AxiosResponse<UserInfoResponse>>('/auth/me', {});
  },
  logout() {
    return instance.delete<LogoutResponse>('/auth/me');
  },
};
