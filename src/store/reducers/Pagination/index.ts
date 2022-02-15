import { ActionsType, InitialStateType } from 'store/reducers/Pagination/types';

const initialState: InitialStateType = {
  page: '1',
  cardsPerPage: 10,
};

export const paginationReducer = (
  state = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return { ...state, page: action.page };
    case 'CHANGE_CARDS_PER_PAGE':
      return { ...state, cardsPerPage: action.count };
    default:
      return state;
  }
};
