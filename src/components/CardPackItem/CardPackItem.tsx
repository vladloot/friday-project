import React, { FC } from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './CardPackItem.module.css';

import { CardsPack } from 'api/types';
import Button from 'components/Button/Button';
import { EditableItem } from 'components/EditableItem/EditableItem';
import { RouteNames } from 'routes/routes';
import { allActionCreators } from 'store/reducers/action-creators';
import { setSelectedPack } from 'store/reducers/Cards/action-creators';

type PropsType = {
  pack: CardsPack;
  callback: (cardPack: CardsPack) => void;
  packId: string;
};

const CardPackItem: FC<PropsType> = ({ pack, callback, packId }) => {
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

  const onLearnHandle = (): void => {
    dispatch(setSelectedPack(packId));
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
        <NavLink to={RouteNames.CARDS_LIST} className={styles.link}>
          <button type="button" onClick={onLearnHandle}>
            Learn
          </button>
        </NavLink>
      </td>
    </tr>
  );
};

export default CardPackItem;
