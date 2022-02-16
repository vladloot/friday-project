import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import styles from './CardPackItem.module.css';

import { CardsPack } from 'api/types';
import Button from 'components/Button/Button';
import { EditableItem } from 'components/EditableItem/EditableItem';
import { allActionCreators } from 'store/reducers/action-creators';

type PropsType = {
  pack: CardsPack;
  callback: (cardPack: CardsPack) => void;
};

const CardPackItem: FC<PropsType> = ({ pack, callback }) => {
  const dispatch = useDispatch();

  const onUpdateHandle = (newName: string): void => {
    const newPackName = {
      _id: pack._id,
      name: newName,
    };
    callback(newPackName);
  };
  const onRemoveHandle = (): void => {
    dispatch(allActionCreators.deletePack(pack._id));
  };
  return (
    <tr className={styles.item}>
      <td>
        <EditableItem value={pack.name} onChange={onUpdateHandle} />
      </td>
      <td>{pack.cardsCount ? pack.cardsCount : `empty`}</td>
      <td>
        <Button>Update</Button>
      </td>
      <td>
        <Button onClick={onRemoveHandle}>Delete</Button>
      </td>
      <td>
        <Button>Learn</Button>
      </td>
    </tr>
  );
};

export default CardPackItem;
