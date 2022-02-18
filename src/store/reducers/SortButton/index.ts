import { ActionsType, InitialStateType } from 'store/reducers/SortButton/type';

const InitialState: InitialStateType = {
  sortDirection: '0',
  sortPacksValue: 'updated',
};

export const sortButtonReducer = (
  state = InitialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'CHANGE_SORT_INFO':
      return { ...state, sortDirection: action.direction, sortPacksValue: action.value };
    default:
      return state;
  }
};
