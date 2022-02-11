import { Dispatch } from 'redux';

import { resetPasswordAPI, ResetPasswordValuesType } from 'api/PasswordRecoveryService';

type ActionType = SetSuccessInfoType | setErrorACType | setEmailACType | setIsSentACType;

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

export const resetPasswordTC =
  (resetPasswordData: ResetPasswordValuesType) => (dispatch: Dispatch) => {
    console.log('resetPasswordTC');
    dispatch(setIsLoadingAC(true));
    resetPasswordAPI
      .resetPassword(resetPasswordData)
      .then(res => {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        if (res.status === 200) {
          console.log(res);
          dispatch(setSuccessInfoAC(res.data.info));
          dispatch(setIsSentAC(true));
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-alert
        alert(`Catch:${err.response.data.error}`);
        dispatch(setSuccessInfoAC(err.data.error));
      })
      .finally(() => {
        dispatch(setIsLoadingAC(false));
        setTimeout(() => {
          dispatch(setSuccessInfoAC(''));
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        }, 5000);
      });
  };
