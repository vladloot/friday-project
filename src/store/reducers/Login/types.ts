import { AuthActionCreators } from 'store/reducers/Auth/action-creators';
import { initialState } from 'store/reducers/Auth/auth-reducer';

export enum AuthActionEnum {
  SET_IS_LOGGED_IN = 'auth/SET_IS_LOGGED_IN',
}

export type AuthActions = ReturnType<typeof AuthActionCreators.setIsLoggedIn>;

export type AuthState = typeof initialState;
