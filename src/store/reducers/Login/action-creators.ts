import { AuthActionEnum } from 'store/reducers/Auth/types';
import { LoginParamsType, LoginService } from "api/LoginService";
import { AppDispatch } from "store/store";

export const AuthActionCreators = {
  setIsLoggedIn: (isLoggedIn: boolean) =>
    ({ type: AuthActionEnum.SET_IS_LOGGED_IN, isLoggedIn } as const),
  login: (loginData: LoginParamsType) => async (dispatch: AppDispatch) => {
      try {
        const response = await LoginService.login(loginData);
        response.status
        dispatch(AuthActionCreators.setIsLoggedIn(true))
      }
  }
};
