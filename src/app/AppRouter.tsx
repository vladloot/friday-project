import React, { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteNames } from 'routes/routes';
import { LoginActionCreators } from 'store/reducers/Login/action-creators';

const AppRouter: FC = () => {
  const { isLoggedIn } = useTypedSelector(state => state.login);
  const { isInitialized } = useTypedSelector(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoginActionCreators.checkAuth());
  }, []);

  if (!isInitialized) return <Loader />;

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
