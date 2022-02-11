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
