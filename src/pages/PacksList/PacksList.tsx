import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import styles from './PacksList.module.css';

import { CardsPack } from 'api/types';
import Button from 'components/Button/Button';
import CardPackItem from 'components/CardPackItem/CardPackItem';
import Checkbox from 'components/Checkbox/Checkbox';
import Input from 'components/Input/Input';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { allActionCreators } from 'store/reducers/action-creators';

const PacksList: FC = () => {
  const cardPacks = useTypedSelector(state => state.packs.cardPacks);
  const dispatch = useDispatch();
  const mappedPacks = cardPacks.map((pack: CardsPack) => (
    <CardPackItem key={pack._id} pack={pack} />
  ));
  const [packName, setPackName] = useState<string>('');

  const cardsPack = {
    name: packName,
  };

  const changeHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setPackName(e.currentTarget.value);
  };

  const clickHandle = (): void => {
    dispatch(allActionCreators.addPack(cardsPack));
    setPackName('');
  };

  useEffect(() => {
    dispatch(allActionCreators.getPacks());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.packs_list}>
        <div className={styles.control_panel}>
          <span>Number of cards</span>
          <Input type="range" />
          <Input type="search" />
          <Checkbox>Show my packs</Checkbox>
          <Button>Search</Button>
          <Input placeholder="add pack name" onChange={changeHandle} value={packName} />
          <Button onClick={clickHandle}>Add new cardpack</Button>
        </div>
        <div className={styles.packs_items}>
          <table className={styles.table}>
            <tbody>{mappedPacks}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PacksList;
