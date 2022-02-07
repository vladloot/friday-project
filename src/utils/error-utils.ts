import { AppActionCreators } from 'store/reducers/App/action-creators';
import { AppDispatch } from 'store/store';

export const handleError = (error: any, dispatch: AppDispatch): void => {
  dispatch(
    AppActionCreators.setAppError(error.response ? error.response.data.error : error),
  );
};
