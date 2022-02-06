import { LoginActionEnum, LoginActions } from 'store/reducers/Login/types';

const initialState = {
  isLoggedIn: false,
};

export type LoginState = typeof initialState;

export const loginReducer = (state = initialState, action: LoginActions): LoginState => {
  switch (action.type) {
    case LoginActionEnum.SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.isLoggedIn };
    default:
      return state;
  }
};
