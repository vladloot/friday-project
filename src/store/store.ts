import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";

import { appReducer } from "./reducers/App/app-reducer";
import { authReducer } from "./reducers/Auth/auth-reducer";

import { resetPasswordReducer } from "pages/PasswordPages/PasswordRecovery/passwordRecovery-reducer";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  resetPassword: resetPasswordReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  any
>;

// @ts-ignore
window.store = store;
