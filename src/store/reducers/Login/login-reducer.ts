import { AuthActionEnum, AuthActions, AuthState } from 'store/reducers/Auth/types';

export const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionEnum.SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.isLoggedIn };
    default:
      return state;
  }
};
