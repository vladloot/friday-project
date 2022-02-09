export type initialStateType = {
  isRegisterSuccess: boolean;
  error: string;
  isLoading: boolean;
};

export type ActionType = RegisterUserType | RegisterErrorType | RegisterLoadingType;

export type RegisterUserType = {
  type: 'REGISTER_USER';
};

export type RegisterErrorType = {
  type: 'REGISTRATION_ERROR';
  error: string;
};

export type RegisterLoadingType = {
  type: 'IS_LOADING';
  isLoading: boolean;
};

export type UserInfoType = {
  email: string;
  password: string;
};
