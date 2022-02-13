import axios, { AxiosResponse } from 'axios';

import {
  CardsPack,
  CardsPackResponse,
  DeletePack,
  GetPacksQueryParams,
  UpdatePack,
} from 'api/types';

const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
});

export const PacksService = {
  getPacks(data?: GetPacksQueryParams) {
    return instance.get<CardsPackResponse>('/cards/pack', { params: data });
  },
  addPack(cardsPack: CardsPack) {
    return instance.post('/cards/pack', { cardsPack });
  },
  deletePack(data: DeletePack) {
    return instance.delete<CardsPack>(`/cards/pack/`, { params: data });
  },
  updatePack(data: UpdatePack) {
    return instance.put<UpdatePack, AxiosResponse<CardsPack>>('/cards/pack', data);
  },
};
