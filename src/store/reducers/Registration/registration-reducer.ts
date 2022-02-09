import { ActionType, initialStateType } from 'store/reducers/Registration/types';

const initialState: initialStateType = {
  isRegisterSuccess: false,
  error: '',
  isLoading: false,
};

export const registrationReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    case 'REGISTER_USER':
      return { ...state, isRegisterSuccess: true };
    case 'REGISTRATION_ERROR':
      return { ...state, error: action.error };
    case 'IS_LOADING':
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};
