import React, { FC } from 'react';

import Header from '../components/Header/Header';

import AppRouter from './AppRouter';

import './App.css';
import { PaginationComponent } from 'components/Pagination/pagination';
import { Search } from 'components/Search/Search';
import { SortButton } from 'components/SortButton/SortButton';

const App: FC = () => (
  <>
    <Header />
    <AppRouter />
    <Search />
    <PaginationComponent />
    <SortButton sortPacksValue="updated" />
  </>
);
export default App;
