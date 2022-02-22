import axios, { AxiosResponse } from 'axios';

import { CardsPack, CardsPackResponse, NewCardsPack, UpdateCardsPack } from 'api/types';

const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
});

export const PacksService = {
  getPacks(page: number, pageCount: number, packName: string = '') {
    return instance.get<CardsPackResponse>(
      `/cards/pack?page=${page}&pageCount=${pageCount}&packName=${packName}`,
    );
  },
  addPack(cardsPack: NewCardsPack) {
    return instance.post<NewCardsPack, AxiosResponse<CardsPack>>('/cards/pack', {
      cardsPack,
    });
  },
  deletePack(id: string) {
    return instance.delete<CardsPack>(`/cards/pack?id=${id}`);
  },
  updatePack(cardsPack: UpdateCardsPack) {
    return instance.put<UpdateCardsPack, AxiosResponse<CardsPack>>('/cards/pack', {
      cardsPack,
    });
  },
  getCards(packId: any) {
    return instance.get(`/cards/card?cardsPack_id=${packId}&pageCount=10`);
  },
};
