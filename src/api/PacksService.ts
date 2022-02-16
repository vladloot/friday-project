import axios, { AxiosResponse } from 'axios';

import { CardsPack, CardsPackResponse, UpdatePack } from 'api/types';

const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
});

export const PacksService = {
  getPacks(page: number, pageCount: number) {
    return instance.get<CardsPackResponse>(
      `/cards/pack?page=${page}&pageCount=${pageCount}`,
    );
  },
  addPack(cardsPack: CardsPack) {
    return instance.post('/cards/pack', { cardsPack });
  },
  deletePack(id: string | undefined) {
    return instance.delete<CardsPack>(`/cards/pack?id=${id}`);
  },
  updatePack(cardsPack: CardsPack) {
    return instance.put<UpdatePack, AxiosResponse<CardsPack>>('/cards/pack', {
      cardsPack,
    });
  },
};
