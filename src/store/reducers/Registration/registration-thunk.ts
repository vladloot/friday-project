import { Dispatch } from 'redux';

import {
  RegisterUser,
  RegisterError,
  RegisterLoading,
} from 'store/reducers/Registration/action-creators';
import { registrationApi } from 'store/reducers/Registration/registration-api';
import { UserInfoType } from 'store/reducers/Registration/types';

const goodStatus = 201;

export const fetchRegisterUser =
  (userInfo: UserInfoType) => async (dispatch: Dispatch) => {
    dispatch(RegisterLoading(true));
    dispatch(RegisterError(''));

    try {
      const response = await registrationApi.fetchRegistrationInfo(userInfo);

      if (response.status === goodStatus) {
        dispatch(RegisterUser());
      }
    } catch (error) {
      const errorMessage: string = error.response.data.error;

      dispatch(RegisterError(errorMessage));
    } finally {
      dispatch(RegisterLoading(false));
    }
  };
