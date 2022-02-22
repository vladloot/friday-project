export type setSelectedPackType = {
  type: 'SET_SELECTED_PACK';
  packId: string;
};

export type getCardsType = {
  type: 'GET_CARDS';
  cards: CardsListType[];
};

export type initialStateType = {
  selectedPack: null | string;
  cardsList: CardsListType[];
};

export type CardsListType = {
  answer: string;
  grade: number;
  question: string;
  rating: number;
  updated: string;
  _id: string;
  user_id: string;
  cardsPack_id: string;
};

export type actionTypes = setSelectedPackType | getCardsType;
