import app from './App';
import login from './Login';
import { paginationReducer } from './Pagination';
import { SearchReducer } from './Search';

import { registrationReducer } from 'store/reducers/Registration/registration-reducer';
import resetPassword from 'store/reducers/ResetPassword/index';

export default {
  app,
  login,
  resetPassword,
  registrationReducer,
  SearchReducer,
  paginationReducer,
};
