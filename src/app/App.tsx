import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Header from '../components/Header/Header';

import AppRouter from './AppRouter';

import { store } from 'store/store';
import './App.css';

const App: FC = () => (
  <HashRouter>
    <Provider store={store}>
      <Header />
      <AppRouter />
    </Provider>
  </HashRouter>
);
export default App;
