export type InitialStateType = {
  sortParams: string;
};

export type UpdateSortParams = {
  type: 'UPDATE_SORT_PARAMS';
  param: string;
};

export type ActionsType = UpdateSortParams;
