import { AppActionCreators } from 'store/reducers/App/action-creators';
import { LoginActionCreators } from 'store/reducers/Login/action-creators';
import { PacksActionCreators } from 'store/reducers/Packs/action-creators';

export const allActionCreators = {
  ...AppActionCreators,
  ...LoginActionCreators,
  ...PacksActionCreators,
};
