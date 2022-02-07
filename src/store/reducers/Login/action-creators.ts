import { LoginParams, LoginService, UserInfoResponse } from 'api/LoginService';
import { AppActionCreators } from 'store/reducers/App/action-creators';
import { LoginActionEnum } from 'store/reducers/Login/types';
import { AppDispatch } from 'store/store';
import { handleError } from 'utils/error-utils';

export const LoginActionCreators = {
  setIsLoggedIn: (isLoggedIn: boolean) =>
    ({ type: LoginActionEnum.SET_IS_LOGGED_IN, isLoggedIn } as const),

  setUserInfo: (info: UserInfoResponse | null) =>
    ({ type: LoginActionEnum.SET_USER_INFO, info } as const),

  login: (loginData: LoginParams) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AppActionCreators.setAppIsLoading(true));
      const response = await LoginService.login(loginData);
      dispatch(LoginActionCreators.setUserInfo(response.data));
      dispatch(LoginActionCreators.setIsLoggedIn(true));
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(AppActionCreators.setAppIsLoading(false));
    }
  },

  logout: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(AppActionCreators.setAppIsLoading(true));
      await LoginService.logout();
      dispatch(LoginActionCreators.setUserInfo(null));
      dispatch(LoginActionCreators.setIsLoggedIn(false));
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(AppActionCreators.setAppIsLoading(false));
    }
  },

  checkAuth: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(AppActionCreators.setAppIsLoading(true));
      const response = await LoginService.checkAuth();
      dispatch(LoginActionCreators.setUserInfo(response.data));
      dispatch(LoginActionCreators.setIsLoggedIn(true));
    } catch (error) {
      handleError('', dispatch);
    } finally {
      dispatch(AppActionCreators.setAppIsLoading(false));
      dispatch(AppActionCreators.setAppIsInitialized(true));
    }
  },
};
