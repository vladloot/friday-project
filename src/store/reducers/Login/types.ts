import { LoginActionCreators } from 'store/reducers/Login/action-creators';

export enum LoginActionEnum {
  SET_IS_LOGGED_IN = 'login/SET_IS_LOGGED_IN',
  SET_USER_INFO = 'login/SET_USER_INFO',
}

export type LoginActions =
  | ReturnType<typeof LoginActionCreators.setIsLoggedIn>
  | ReturnType<typeof LoginActionCreators.setUserInfo>;
