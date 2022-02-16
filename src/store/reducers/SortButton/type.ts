export type InitialStateType = {
  sortDirection: string;
  sortPacksValue: string;
};

export type changeSortInfoType = {
  type: 'CHANGE_SORT_INFO';
  direction: string;
  value: string;
};

export type ActionsType = changeSortInfoType;
