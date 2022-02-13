import { ThunkDispatch } from 'redux-thunk';

import { PacksService } from 'api/PacksService';
import { CardsPack, CardsPackResponse } from 'api/types';
import { allActionCreators } from 'store/reducers/action-creators';
import { PackActionEnum } from 'store/reducers/Packs/types';
import { AppDispatch, RootState } from 'store/store';
import { handleError } from 'utils/error-utils';

export const PacksActionCreators = {
  setPacks: (cardPacks: CardsPackResponse) =>
    ({ type: PackActionEnum.SET_PACKS, cardPacks } as const),
  getPacks: () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { packs } = getState();
    try {
      dispatch(allActionCreators.setAppIsLoading(true));
      const response = await PacksService.getPacks({
        page: packs.page,
        pageCount: packs.pageCount,
      });
      dispatch(allActionCreators.setPacks(response.data));
    } catch (error) {
      handleError(error, dispatch);
    } finally {
      dispatch(allActionCreators.setAppIsLoading(false));
    }
  },
  addPack:
    (data: CardsPack) => async (dispatch: ThunkDispatch<RootState, unknown, any>) => {
      try {
        dispatch(allActionCreators.setAppIsLoading(true));
        await PacksService.addPack(data);
        await dispatch(allActionCreators.getPacks());
      } catch (error) {
        handleError(error, dispatch);
      } finally {
        dispatch(allActionCreators.setAppIsLoading(false));
      }
    },
  deletePack:
    (id: string | undefined) =>
    async (dispatch: ThunkDispatch<RootState, unknown, any>) => {
      try {
        dispatch(allActionCreators.setAppIsLoading(true));
        await PacksService.deletePack(id);
        await dispatch(allActionCreators.getPacks());
      } catch (error) {
        handleError(error, dispatch);
      } finally {
        dispatch(allActionCreators.setAppIsLoading(false));
      }
    },
};
