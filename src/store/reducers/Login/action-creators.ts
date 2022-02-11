import { LoginService } from 'api/LoginService';
import { LoginParams, UserInfoResponse } from 'api/types';
import { allActionCreators } from 'store/reducers/action-creators';
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
      dispatch(allActionCreators.setAppIsLoading(true));
      const response = await LoginService.login(loginData);
      dispatch(allActionCreators.setUserInfo(response.data));
      dispatch(allActionCreators.setIsLoggedIn(true));
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(allActionCreators.setAppIsLoading(false));
    }
  },

  logout: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(allActionCreators.setAppIsLoading(true));
      await LoginService.logout();
      dispatch(allActionCreators.setUserInfo(null));
      dispatch(allActionCreators.setIsLoggedIn(false));
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(allActionCreators.setAppIsLoading(false));
    }
  },

  checkAuth: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(allActionCreators.setAppIsLoading(true));
      const response = await LoginService.checkAuth();
      dispatch(allActionCreators.setUserInfo(response.data));
      dispatch(allActionCreators.setIsLoggedIn(true));
    } catch (error) {
      handleError('', dispatch);
    } finally {
      dispatch(allActionCreators.setAppIsLoading(false));
      dispatch(allActionCreators.setAppIsInitialized(true));
    }
  },
};
