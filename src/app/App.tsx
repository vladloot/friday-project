import React, { FC } from 'react';

import Header from '../components/Header/Header';

import AppRouter from './AppRouter';

import './App.css';
import { Search } from 'components/Search/Search';

const App: FC = () => (
  <>
    <Header />
    <AppRouter />
    <Search />
  </>
);
export default App;
