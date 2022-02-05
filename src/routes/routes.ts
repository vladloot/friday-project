import React from 'react';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import Profile from '../pages/Profile/Profile';
import Error from '../pages/Error/Error';
import PasswordRecovery from '../pages/PasswordPages/PasswordRecovery/PasswordRecovery';
import NewPassword from '../pages/PasswordPages/NewPassword/NewPassword';
import Test from '../pages/Test/Test';

export enum RouteNames {
    LOGIN = '/login',
    REGISTRATION = '/registration',
    PROFILE = '/profile',
    ERROR = '/404',
    PASSWORD_RECOVERY = '/password-recovery',
    NEW_PASSWORD = '/new-password',
    TEST = '/test'
}

export type RouteType = {
    path: string,
    element: React.ComponentType;
}

export const publicRoutes: RouteType[] = [
    {path: RouteNames.LOGIN, element: Login},
    {path: RouteNames.REGISTRATION, element: Registration},
    {path: RouteNames.PROFILE, element: Profile},
    {path: RouteNames.ERROR, element: Error},
    {path: RouteNames.PASSWORD_RECOVERY, element: PasswordRecovery},
    {path: RouteNames.NEW_PASSWORD, element: NewPassword},
    {path: RouteNames.TEST, element: Test},
]