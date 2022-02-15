export type InitialStateType = {
  page: string;
};

export type ChangePageType = {
  type: 'CHANGE_PAGE';
  page: string;
};

export type ActionsType = ChangePageType;
