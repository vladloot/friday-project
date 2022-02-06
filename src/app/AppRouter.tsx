import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { publicRoutes } from '../routes/routes';

const AppRouter: FC = () => (
  <Routes>
    {publicRoutes.map(route => (
      <Route key={route.path} path={route.path} element={<route.element />} />
    ))}
  </Routes>
);

export default AppRouter;
