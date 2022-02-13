import React, { FC } from 'react';

import { CardsPack } from 'api/types';
import Button from 'components/Button/Button';

type PropsType = {
  pack: CardsPack;
};

const CardPackItem: FC<PropsType> = ({ pack }) => {
  const onUpdateHandler = (): void => {};
  const onRemoveHandler = (): void => {};
  return (
    <tr>
      <td>{pack.name}</td>
      <td>{pack.cardsCount ? pack.cardsCount : `empty`}</td>
      <td>
        <Button onClick={onUpdateHandler}>Update</Button>
      </td>
      <td>
        <Button onClick={onRemoveHandler}>Delete</Button>
      </td>
    </tr>
  );
};

export default CardPackItem;
