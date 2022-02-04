import React from "react";

import {Login} from "components/Login/Login";
import {Registration} from "components/Registration/Registration";
import {Profile} from "components/Profile/Profile";
import {PasswordRecovery} from "components/PasswordRecovery/PasswordRecovery";
import {NewPassword} from "components/NewPassword/NewPassword";
import {NotFoundPage} from "components/NotFoundPage/NotFoundPage";


export enum RouteNames {
    LOGIN = '/login',
    REGISTRATION = '/registration',
    PROFILE = '/profile',
    ERROR = '/404',
    PASSWORD_RECOVERY = '/password-recovery',
    NEW_PASSWORD = '/new-password',
}

export const publicRoutes: RouteType[] = [
    {path: RouteNames.LOGIN, element: Login},
    {path: RouteNames.REGISTRATION, element: Registration},
    {path: RouteNames.PROFILE, element: Profile},
    {path: RouteNames.ERROR, element: NotFoundPage},
    {path: RouteNames.PASSWORD_RECOVERY, element: PasswordRecovery},
    {path: RouteNames.NEW_PASSWORD, element: NewPassword},
]

export type RouteType = {
    path: string,
    element: React.ComponentType,
}