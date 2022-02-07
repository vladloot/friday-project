import React, { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteNames } from 'routes/routes';

const AppRouter: FC = () => {
  const isLoggedIn = useTypedSelector(state => state.login.isLoggedIn);
  return isLoggedIn ? (
    <Routes>
      {privateRoutes.map(route => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.PROFILE} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(route => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  );
};

export default AppRouter;
