import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './CardPackItem.module.css';

import { CardsPack } from 'api/types';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Modal from 'components/Modal/Modal';
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
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [newPackName, setNewPackName] = useState('');

  const handlePackName = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewPackName(e.currentTarget.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      const packName = {
        _id: pack._id,
        name: newPackName,
      };
      callback(packName);
      setNewPackName('');
      setUpdateModal(false);
    }
  };

  const onRemoveHandle = (): void => {
    dispatch(allActionCreators.deletePack(pack._id));
    setDeleteModal(false);
  };

  const onLearnHandle = (): void => {
    dispatch(setSelectedPack(packId));
  };

  return (
    <tr className={styles.item}>
      <td>{pack.name}</td>
      <td>{pack.cardsCount ? pack.cardsCount : `empty`}</td>
      <td>
        <Modal visible={updateModal} setVisible={setUpdateModal}>
          <span>New pack name:</span>
          <Input
            value={newPackName}
            onChange={handlePackName}
            onKeyPress={handleKeyPress}
          />
        </Modal>
        <Button onClick={() => setUpdateModal(true)}>Update</Button>
      </td>
      <td>
        <Modal visible={deleteModal} setVisible={setDeleteModal}>
          <span>Are you sure?</span>
          <Button onClick={onRemoveHandle} style={{ display: 'inline-block' }}>
            Delete
          </Button>
          <Button
            onClick={() => setDeleteModal(false)}
            style={{ display: 'inline-block' }}
          >
            Cancel
          </Button>
        </Modal>
        <Button onClick={() => setDeleteModal(true)}>Delete</Button>
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
