import {
  CardsListType,
  getCardsType,
  setSelectedPackType,
} from 'store/reducers/Cards/types';

export const setSelectedPack = (packId: string): setSelectedPackType =>
  ({
    type: 'SET_SELECTED_PACK',
    packId,
  } as const);

export const getCards = (cards: CardsListType[]): getCardsType =>
  ({
    type: 'GET_CARDS',
    cards,
  } as const);
