import {
  RegisterUserType,
  RegisterErrorType,
  RegisterLoadingType,
} from 'store/reducers/Registration/types';

export const RegisterUser = (): RegisterUserType =>
  ({
    type: 'REGISTER_USER',
  } as const);

export const RegisterError = (error: string): RegisterErrorType =>
  ({
    type: 'REGISTRATION_ERROR',
    error,
  } as const);

export const RegisterLoading = (isLoading: boolean): RegisterLoadingType => ({
  type: 'IS_LOADING',
  isLoading,
});
