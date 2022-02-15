import { ActionsType, InitialStateType } from 'store/reducers/Pagination/types';

const initialState: InitialStateType = {
  page: '1',
};

export const paginationReducer = (
  state = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return { ...state, page: action.page };
    default:
      return state;
  }
};
