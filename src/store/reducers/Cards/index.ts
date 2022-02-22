import { actionTypes, initialStateType } from 'store/reducers/Cards/types';

const initialState: initialStateType = {
  selectedPack: null,
  cardsList: [],
};

export const cardReducer = (
  state = initialState,
  action: actionTypes,
): initialStateType => {
  switch (action.type) {
    case 'SET_SELECTED_PACK':
      return { ...state, selectedPack: action.packId };
    case 'GET_CARDS':
      return { ...state, cardsList: action.cards };
    default:
      return state;
  }
};
