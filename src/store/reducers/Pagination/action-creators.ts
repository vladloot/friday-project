import { ChangePageType } from 'store/reducers/Pagination/types';

export const changePage = (page: string): ChangePageType =>
  ({
    type: 'CHANGE_PAGE',
    page,
  } as const);
