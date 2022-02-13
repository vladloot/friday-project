import axios, { AxiosResponse } from 'axios';

import {
  CardsPack,
  CardsPackResponse,
  CreatePack,
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
  addPack(data: CreatePack) {
    return instance.post<CreatePack, AxiosResponse<CardsPack>>('/cards/pack', data);
  },
  deletePack(data: DeletePack) {
    return instance.delete<CardsPack>(`/cards/pack/`, { params: data });
  },
  updatePack(data: UpdatePack) {
    return instance.put<UpdatePack, AxiosResponse<CardsPack>>('/cards/pack', data);
  },
};
