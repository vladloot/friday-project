// Auth
export type LoginParams = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type LogoutResponse = {
  info: string;
  error: string;
};

export type UserInfoResponse = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;
  error?: string;
};

// Packs
export type GetPacksQueryParams = {
  min?: number;
  max?: number;
  sortPacks?: string;
  page?: number;
  pageCount?: number;
  user_id?: string;
  packName?: string;
};

export type CardsPack = {
  cardsCount?: number;
  created?: string;
  grade?: number;
  more_id?: string;
  name: string;
  path?: string;
  private?: boolean;
  rating?: number;
  shots?: number;
  type?: string;
  updated?: string;
  user_id?: string;
  user_name?: string;
  __v?: number;
  _id?: string;
};

export type CardsPackResponse = {
  cardPacks: CardsPack[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
};

export type DeletePack = {
  id: string;
};

export type UpdatePack = {
  cardsPack: {
    id: string;
    name?: string;
  };
};
