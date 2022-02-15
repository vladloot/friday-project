export type InitialStateType = {
  page: string;
  cardsPerPage: number;
};

export type ChangePageType = {
  type: 'CHANGE_PAGE';
  page: string;
};

export type changeCardsPerPageType = {
  type: 'CHANGE_CARDS_PER_PAGE';
  count: number;
};

export type ActionsType = ChangePageType | changeCardsPerPageType;
