import { ThunkDispatch } from 'redux-thunk';

import { PacksService } from 'api/PacksService';
import { CardsPackResponse, NewCardsPack, UpdateCardsPack } from 'api/types';
import { allActionCreators } from 'store/reducers/action-creators';
import { PackActionEnum } from 'store/reducers/Packs/types';
import { AppDispatch, RootState } from 'store/store';
import { handleError } from 'utils/error-utils';

export const PacksActionCreators = {
  setPacks: (cardPacks: CardsPackResponse, packsTotalCount: number) =>
    ({ type: PackActionEnum.SET_PACKS, cardPacks, packsTotalCount } as const),

  setPacksPage: (page: number) =>
    ({ type: PackActionEnum.SET_PACKS_PAGE, page } as const),

  setCardsPerPage: (count: number) =>
    ({ type: PackActionEnum.SET_CARDS_PER_PAGE, count } as const),

  changeSearchPackName: (searchPackName: string) =>
    ({
      type: PackActionEnum.CHANGE_SEARCH_PACK_NAME,
      searchPackName,
    } as const),

  getPacks:
    (requestPage: number, pageSize: number, packName: string = '') =>
    async (dispatch: AppDispatch) => {
      dispatch(allActionCreators.setPacksPage(requestPage));
      dispatch(allActionCreators.setAppIsLoading(true));

      try {
        const response = await PacksService.getPacks(requestPage, pageSize, packName);
        dispatch(
          allActionCreators.setPacks(response.data, response.data.cardPacksTotalCount),
        );
      } catch (error) {
        handleError(error, dispatch);
      } finally {
        dispatch(allActionCreators.setAppIsLoading(false));
      }
    },

  addPack:
    (data: NewCardsPack) =>
    async (
      dispatch: ThunkDispatch<RootState, unknown, any>,
      getState: () => RootState,
    ) => {
      const requestPage = getState().packs.page;
      const pageSize = getState().packs.pageCount;
      dispatch(allActionCreators.setAppIsLoading(true));
      try {
        await PacksService.addPack(data);
        await dispatch(allActionCreators.getPacks(requestPage, pageSize));
      } catch (error) {
        handleError(error, dispatch);
      } finally {
        dispatch(allActionCreators.setAppIsLoading(false));
      }
    },

  deletePack:
    (id: string) =>
    async (
      dispatch: ThunkDispatch<RootState, unknown, any>,
      getState: () => RootState,
    ) => {
      const requestPage = getState().packs.page;
      const pageSize = getState().packs.pageCount;
      dispatch(allActionCreators.setAppIsLoading(true));
      try {
        await PacksService.deletePack(id);
        await dispatch(allActionCreators.getPacks(requestPage, pageSize));
      } catch (error) {
        handleError(error, dispatch);
      } finally {
        dispatch(allActionCreators.setAppIsLoading(false));
      }
    },

  updatePack:
    (data: UpdateCardsPack) =>
    async (
      dispatch: ThunkDispatch<RootState, unknown, any>,
      getState: () => RootState,
    ) => {
      const requestPage = getState().packs.page;
      const pageSize = getState().packs.pageCount;
      dispatch(allActionCreators.setAppIsLoading(true));

      try {
        await PacksService.updatePack(data);
        await dispatch(allActionCreators.getPacks(requestPage, pageSize));
      } catch (error) {
        handleError(error, dispatch);
      } finally {
        dispatch(allActionCreators.setAppIsLoading(false));
      }
    },
};
