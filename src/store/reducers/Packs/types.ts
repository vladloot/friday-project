import { PacksActionCreators } from 'store/reducers/Packs/action-creators';

export enum PackActionEnum {
  SET_PACKS = 'packs/GET_PACKS',
  SET_PACKS_PAGE = 'packs/SET_PACKS_PAGE',
  SET_CARDS_PER_PAGE = 'packs/SET_CARDS_PER_PAGE',
}

export type PacksActions =
  | ReturnType<typeof PacksActionCreators.setPacks>
  | ReturnType<typeof PacksActionCreators.setPacksPage>
  | ReturnType<typeof PacksActionCreators.setCardsPerPage>;
