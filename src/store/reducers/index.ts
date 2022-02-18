import app from './App';
import login from './Login';
import packs from './Packs';
import { sortButtonReducer } from './SortButton';

import { registrationReducer } from 'store/reducers/Registration/registration-reducer';
import resetPassword from 'store/reducers/ResetPassword/index';

export default {
  app,
  login,
  resetPassword,
  registrationReducer,
  sortButtonReducer,
  packs,
};
