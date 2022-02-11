import React, { FC } from 'react';

import Header from '../components/Header/Header';

import AppRouter from './AppRouter';

import './App.css';

const App: FC = () => (
  <>
    <Header />
    <AppRouter />
  </>
);
export default App;
