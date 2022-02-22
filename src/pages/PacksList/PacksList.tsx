import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import styles from './PacksList.module.css';

import { CardsPack, UpdateCardsPack } from 'api/types';
import Button from 'components/Button/Button';
import CardPackItem from 'components/CardPackItem/CardPackItem';
import Input from 'components/Input/Input';
import Modal from 'components/Modal/Modal';
import { PaginationComponent } from 'components/Pagination/Pagination';
import { Search } from 'components/Search/Search';
import { SortButton } from 'components/SortButton/SortButton';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { allActionCreators } from 'store/reducers/action-creators';

const PacksList: FC = () => {
  const { cardPacks, page, pageCount, cardPacksTotalCount, searchedPack } =
    useTypedSelector(state => state.packs);
  const { isLoggedIn } = useTypedSelector(state => state.login);
  const [packName, setPackName] = useState('');
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPackName(e.currentTarget.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      dispatch(allActionCreators.addPack({ name: packName }));
      setPackName('');
      setModal(false);
    }
  };

  const changePackName = (cardPack: UpdateCardsPack): void => {
    dispatch(allActionCreators.updatePack(cardPack));
  };

  const mappedPacks = cardPacks.map((pack: CardsPack) => (
    <CardPackItem
      key={pack._id}
      pack={pack}
      callback={changePackName}
      packId={pack._id as string}
    />
  ));

  useEffect(() => {
    dispatch(allActionCreators.getPacks(page, pageCount, searchedPack));
  }, [page, searchedPack, pageCount]);

  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <div className={styles.container}>
      <div className={styles.packs_list}>
        <div className={styles.control_panel}>
          <div className={styles.control_items}>
            <span>Number of cards</span>
            <Input type="range" className={styles.range} />
            <Modal visible={modal} setVisible={setModal}>
              <span>Create new pack:</span>
              <Input
                placeholder="add pack name"
                onChange={handleNameChange}
                value={packName}
                className={styles.new_pack_name}
                onKeyPress={handleKeyPress}
              />
            </Modal>
            <Button onClick={() => setModal(true)}>Add new cardpack</Button>
            <SortButton sortPacksValue="value" />
          </div>
        </div>
        <div className={styles.packs_items}>
          <h1>Packs List</h1>
          <div className={styles.packs_search}>
            <Search />
          </div>
          <table className={styles.table}>
            <tbody>{mappedPacks}</tbody>
          </table>
          <PaginationComponent page={page} cardPacksTotalCount={cardPacksTotalCount} />
        </div>
      </div>
    </div>
  );
};

export default PacksList;
