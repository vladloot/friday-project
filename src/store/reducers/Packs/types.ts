import { PacksActionCreators } from 'store/reducers/Packs/action-creators';

export enum PackActionEnum {
  SET_PACKS = 'packs/GET_PACKS',
  ADD_PACK = 'packs/ADD_PACK',
  DELETE_PACK = 'packs/DELETE_PACK',
  UPDATE_PACK = 'packs/UPDATE_PACK',
}

export type PacksActions = ReturnType<typeof PacksActionCreators.setPacks>;
