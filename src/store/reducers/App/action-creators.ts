import { AppActionEnum } from 'store/reducers/App/types';

export const AppActionCreators = {
  setAppIsInitialized: (isInitialized: boolean) =>
    ({
      type: AppActionEnum.SET_IS_INITIALIZED,
      isInitialized,
    } as const),
  setAppIsLoading: (isLoading: boolean) =>
    ({
      type: AppActionEnum.SET_IS_LOADING,
      isLoading,
    } as const),
  setAppError: (error: string) => ({ type: AppActionEnum.SET_ERROR, error } as const),
};
