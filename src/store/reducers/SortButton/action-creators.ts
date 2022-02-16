export const changeSortInfo = (direction: string, value: string) =>
  ({
    type: 'CHANGE_SORT_INFO',
    direction,
    value,
  } as const);
