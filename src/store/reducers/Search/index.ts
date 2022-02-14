import { ActionsType, InitialStateType } from 'store/reducers/Search/types';

const initialState: InitialStateType = {
  sortParams: '',
};

export const SearchReducer = (
  state = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'UPDATE_SORT_PARAMS':
      return { ...state, sortParams: action.param };
    default:
      return state;
  }
};
