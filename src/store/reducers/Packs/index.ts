import { CardsPack } from 'api/types';
import { PackActionEnum, PacksActions } from 'store/reducers/Packs/types';

const initialState = {
  cardPacks: [] as CardsPack[],
  cardPacksTotalCount: 0,
  maxCardsCount: 0,
  minCardsCount: 0,
  page: 1,
  pageCount: 10,
  searchedPack: '',
};

type PacksState = typeof initialState;

export default function packsReducer(
  state = initialState,
  action: PacksActions,
): PacksState {
  switch (action.type) {
    case PackActionEnum.SET_PACKS:
      return {
        ...state,
        ...action.cardPacks,
        cardPacksTotalCount: action.packsTotalCount,
      };
    case PackActionEnum.SET_PACKS_PAGE:
      return { ...state, page: action.page };
    case PackActionEnum.SET_CARDS_PER_PAGE:
      return { ...state, pageCount: action.count };
    case PackActionEnum.CHANGE_SEARCH_PACK_NAME:
      return { ...state, searchedPack: action.searchPackName };
    default:
      return state;
  }
}
