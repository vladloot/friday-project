import { changeCardsPerPageType, ChangePageType } from 'store/reducers/Pagination/types';

export const changePage = (page: string): ChangePageType =>
  ({
    type: 'CHANGE_PAGE',
    page,
  } as const);

export const changeCardsPerPage = (count: number): changeCardsPerPageType =>
  ({
    type: 'CHANGE_CARDS_PER_PAGE',
    count,
  } as const);
