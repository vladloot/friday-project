import { allActionCreators } from 'store/reducers/action-creators';
import { AppDispatch } from 'store/store';

export const handleError = (error: any, dispatch: AppDispatch): void => {
  dispatch(
    allActionCreators.setAppError(error.response ? error.response.data.error : error),
  );
};
