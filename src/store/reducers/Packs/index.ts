import { CardsPack } from 'api/types';
import { PackActionEnum, PacksActions } from 'store/reducers/Packs/types';

const initialState = {
  cardPacks: [] as CardsPack[],
  cardPacksTotalCount: 0,
  maxCardsCount: 0,
  minCardsCount: 0,
  page: 1,
  pageCount: 10,
};

type PacksState = typeof initialState;

export default function packsReducer(
  state = initialState,
  action: PacksActions,
): PacksState {
  switch (action.type) {
    case PackActionEnum.SET_PACKS:
      return { ...state, ...action.cardPacks };
    default:
      return state;
  }
}
