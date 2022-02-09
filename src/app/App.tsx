import React, { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Header from '../components/Header/Header';

import AppRouter from './AppRouter';

import './App.css';
import Loader from 'components/Loader/Loader';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { LoginActionCreators } from 'store/reducers/Login/action-creators';

const App: FC = () => {
  const { isInitialized } = useTypedSelector(state => state.app);
  const { isLoading } = useTypedSelector(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoginActionCreators.checkAuth());
  }, []);

  if (!isInitialized) return <Loader />;
  return (
    <HashRouter>
      <Header />
      <AppRouter />
      {isLoading && <Loader />}
    </HashRouter>
  );
};
export default App;
