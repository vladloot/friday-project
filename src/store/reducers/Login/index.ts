import { UserInfoResponse } from 'api/types';
import { LoginActionEnum, LoginActions } from 'store/reducers/Login/types';

const initialState = {
  isLoggedIn: false,
  info: null as UserInfoResponse | null,
};

export type LoginState = typeof initialState;

export default function loginReducer(
  state = initialState,
  action: LoginActions,
): LoginState {
  switch (action.type) {
    case LoginActionEnum.SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.isLoggedIn };
    case LoginActionEnum.SET_USER_INFO:
      return { ...state, info: action.info };
    default:
      return state;
  }
}
