import { LoginParamsType, LoginService } from 'api/LoginService';
import { AppActionCreators } from 'store/reducers/App/action-creators';
import { LoginActionEnum } from 'store/reducers/Login/types';
import { AppDispatch } from 'store/store';
import { handleError } from 'utils/error-utils';

export const LoginActionCreators = {
  setIsLoggedIn: (isLoggedIn: boolean) =>
    ({ type: LoginActionEnum.SET_IS_LOGGED_IN, isLoggedIn } as const),
  login: (loginData: LoginParamsType) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AppActionCreators.setAppIsLoading(true));
      await LoginService.login(loginData);
      dispatch(LoginActionCreators.setIsLoggedIn(true));
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(AppActionCreators.setAppIsLoading(false));
    }
  },
};
