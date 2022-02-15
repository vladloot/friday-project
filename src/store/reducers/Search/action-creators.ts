import { UpdateSortParams } from 'store/reducers/Search/types';

export const updateSortParams = (param: string): UpdateSortParams => ({
  type: 'UPDATE_SORT_PARAMS',
  param,
});
