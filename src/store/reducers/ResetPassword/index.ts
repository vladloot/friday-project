import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  resetPasswordAPI,
  ResetPasswordValuesType,
  SetNewPasswordValuesType,
} from 'api/PasswordRecoveryService';
import { allActionCreators } from 'store/reducers/action-creators';
import { handleError } from 'utils/error-utils';

type ActionType =
  | SetSuccessInfoType
  | setErrorACType
  | setEmailACType
  | setIsSentACType
  | IsPasswordChangedACType;

type InitialStateType = {
  info: string;
  error?: string;
  loading: boolean;
  isSent: boolean;
  email: string;
  isPasswordChanged: boolean;
};

const initialState = {
  info: '',
  error: 'Something wrong',
  loading: false,
  isSent: false,
  email: 'example@mail.ru',
  isPasswordChanged: false,
};

export default function resetPasswordReducer(
  state: InitialStateType = initialState,
  action: ActionType,
): InitialStateType {
  switch (action.type) {
    case 'SET-SUCCESS-INFO':
      return {
        ...state,
        info: action.info,
      };
    case 'SET-IS-LOADING-PASSWORD':
      return {
        ...state,
        loading: action.loading,
      };
    case 'SET-EMAIL':
      return {
        ...state,
        email: action.email,
      };
    case 'SET-IS-SENT':
      return {
        ...state,
        isSent: action.isSent,
      };
    case 'IS-PASSWORD-CHANGED':
      return {
        ...state,
        isPasswordChanged: action.isPasswordChanged,
      };
    default:
      return state;
  }
}

export type SetSuccessInfoType = ReturnType<typeof setSuccessInfoAC>;

export const setSuccessInfoAC = (info: string) =>
  ({
    type: 'SET-SUCCESS-INFO',
    info,
  } as const);

export type setErrorACType = ReturnType<typeof setIsLoadingAC>;

export const setIsLoadingAC = (loading: boolean) =>
  ({
    type: 'SET-IS-LOADING-PASSWORD',
    loading,
  } as const);

export type setEmailACType = ReturnType<typeof setEmailAC>;

export const setEmailAC = (email: string) =>
  ({
    type: 'SET-EMAIL',
    email,
  } as const);

export type setIsSentACType = ReturnType<typeof setIsSentAC>;

export const setIsSentAC = (isSent: boolean) =>
  ({
    type: 'SET-IS-SENT',
    isSent,
  } as const);
export type IsPasswordChangedACType = ReturnType<typeof isPasswordChangedAC>;

export const isPasswordChangedAC = (isPasswordChanged: boolean) =>
  ({
    type: 'IS-PASSWORD-CHANGED',
    isPasswordChanged,
  } as const);

type ThunkType = ThunkAction<Promise<any>, any, any, any>;

export const resetPasswordTC =
  (resetPasswordData: ResetPasswordValuesType): ThunkType =>
  (dispatch: Dispatch) => {
    dispatch(allActionCreators.setAppIsLoading(true));
    return resetPasswordAPI
      .resetPassword(resetPasswordData)
      .then(res => {
        console.log(res);
        dispatch(setSuccessInfoAC(res.data.info));
        dispatch(setIsSentAC(true));
      })
      .catch(err => {
        handleError(err, dispatch);
        dispatch(setSuccessInfoAC(err.data.error));
      })
      .finally(() => {
        dispatch(allActionCreators.setAppIsLoading(false));
        setTimeout(() => {
          dispatch(setSuccessInfoAC(''));
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        }, 5000);
      });
  };
export const setNewPasswordTC =
  (values: SetNewPasswordValuesType) => (dispatch: Dispatch) => {
    dispatch(allActionCreators.setAppIsLoading(true));
    resetPasswordAPI
      .setNewPassword(values)
      .then(res => {
        console.log(res);
        dispatch(isPasswordChangedAC(true));
      })
      .catch(err => {
        handleError(err, dispatch);
        console.log(`HI${err}`);
      })
      .finally(() => {
        dispatch(allActionCreators.setAppIsLoading(false));
      });
  };
