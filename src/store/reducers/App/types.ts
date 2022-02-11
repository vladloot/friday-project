import { AppActionCreators } from 'store/reducers/App/action-creators';

export enum AppActionEnum {
  SET_IS_INITIALIZED = 'app/SET_IS_INITIALIZED',
  SET_IS_LOADING = 'app/SET_IS_LOADING',
  SET_ERROR = 'app/SET_ERROR',
}

export type AppActions =
  | ReturnType<typeof AppActionCreators.setAppIsInitialized>
  | ReturnType<typeof AppActionCreators.setAppIsLoading>
  | ReturnType<typeof AppActionCreators.setAppError>;
