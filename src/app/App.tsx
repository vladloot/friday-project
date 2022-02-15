import React, { FC } from 'react';

import Header from '../components/Header/Header';

import AppRouter from './AppRouter';

import './App.css';
import { PaginationComponent } from 'components/Pagination/pagination';
import { Search } from 'components/Search/Search';

const App: FC = () => (
  <>
    <Header />
    <AppRouter />
    <Search />
    <PaginationComponent />
  </>
);
export default App;
