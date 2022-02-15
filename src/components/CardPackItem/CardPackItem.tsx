import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import styles from './CardPackItem.module.css';

import { CardsPack } from 'api/types';
import Button from 'components/Button/Button';
import { allActionCreators } from 'store/reducers/action-creators';

type PropsType = {
  pack: CardsPack;
};

const CardPackItem: FC<PropsType> = ({ pack }) => {
  const dispatch = useDispatch();

  const onUpdateHandler = (): void => {};
  const onRemoveHandler = (): void => {
    dispatch(allActionCreators.deletePack(pack._id));
  };
  return (
    <tr className={styles.item}>
      <td>{pack.name}</td>
      <td>{pack.cardsCount ? pack.cardsCount : `empty`}</td>
      <td>
        <Button onClick={onUpdateHandler}>Update</Button>
      </td>
      <td>
        <Button onClick={onRemoveHandler}>Delete</Button>
      </td>
      <td>
        <Button>Learn</Button>
      </td>
    </tr>
  );
};

export default CardPackItem;
