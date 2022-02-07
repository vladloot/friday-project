import React from 'react';

import Error from '../pages/Error/Error';
import Login from '../pages/Login/Login';
import NewPassword from '../pages/PasswordPages/NewPassword/NewPassword';
import PasswordRecovery from '../pages/PasswordPages/PasswordRecovery/PasswordRecovery';
import Profile from '../pages/Profile/Profile';
import Registration from '../pages/Registration/Registration';

export enum RouteNames {
  LOGIN = '/login',
  REGISTRATION = '/registration',
  PROFILE = '/profile',
  ERROR = '/404',
  PASSWORD_RECOVERY = '/password-recovery',
  NEW_PASSWORD = '/new-password',
}

export type RouteType = {
  path: string;
  element: React.ComponentType;
};

export const publicRoutes: RouteType[] = [
  { path: RouteNames.LOGIN, element: Login },
  { path: RouteNames.REGISTRATION, element: Registration },
  { path: RouteNames.ERROR, element: Error },
  { path: RouteNames.PASSWORD_RECOVERY, element: PasswordRecovery },
  { path: RouteNames.NEW_PASSWORD, element: NewPassword },
];

export const privateRoutes: RouteType[] = [
  { path: RouteNames.PROFILE, element: Profile },
];
