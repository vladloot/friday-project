import axios, { AxiosResponse } from 'axios';

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

export type LoginParams = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type LogoutResponse = {
  info: string;
  error: string;
};

export type UserInfoResponse = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;
  error?: string;
};
