import { AppActionCreators } from 'store/reducers/App/action-creators';
import { LoginActionCreators } from 'store/reducers/Login/action-creators';

export const allActionCreators = {
  ...AppActionCreators,
  ...LoginActionCreators,
};
