import axios from "axios";

const instance = axios.create({
  baseURL: "https://neko-back.herokuapp.com/2.0/",
  // baseURL: 'http://localhost:7542/2.0/',
  withCredentials: true,
});

export type ResetPasswordValuesType = {
  email: string;
  from: string;
  message: string;
};

export const resetPasswordAPI = {
  resetPassword: (resetPasswordValues: ResetPasswordValuesType) =>
    instance.post(`auth/forgot`, resetPasswordValues),
};
