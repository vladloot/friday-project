import { LoginParamsType, LoginService } from 'api/LoginService';
import { LoginActionEnum } from 'store/reducers/Login/types';
import { AppDispatch } from 'store/store';

export const LoginActionCreators = {
  setIsLoggedIn: (isLoggedIn: boolean) =>
    ({ type: LoginActionEnum.SET_IS_LOGGED_IN, isLoggedIn } as const),
  login: (loginData: LoginParamsType) => async (dispatch: AppDispatch) => {
    try {
      await LoginService.login(loginData);
      dispatch(LoginActionCreators.setIsLoggedIn(true));
    } catch (e) {
      console.log(e);
    }
  },
};
