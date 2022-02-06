import { LoginActionCreators } from 'store/reducers/Login/action-creators';

export enum LoginActionEnum {
  SET_IS_LOGGED_IN = 'auth/SET_IS_LOGGED_IN',
}

export type LoginActions = ReturnType<typeof LoginActionCreators.setIsLoggedIn>;
