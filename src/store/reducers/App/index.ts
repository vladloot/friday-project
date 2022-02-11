import { AppActionEnum, AppActions } from 'store/reducers/App/types';

const initialState = {
  isInitialized: false,
  isLoading: false,
  error: '',
};

type AppState = typeof initialState;

export default function appReducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionEnum.SET_IS_INITIALIZED:
      return { ...state, isInitialized: action.isInitialized };
    case AppActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case AppActionEnum.SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
