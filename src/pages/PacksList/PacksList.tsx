import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import styles from './PacksList.module.css';

import { CardsPack } from 'api/types';
import Button from 'components/Button/Button';
import CardPackItem from 'components/CardPackItem/CardPackItem';
import Input from 'components/Input/Input';
import { PaginationComponent } from 'components/Pagination/Pagination';
import { Search } from 'components/Search/Search';
import { SortButton } from 'components/SortButton/SortButton';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { allActionCreators } from 'store/reducers/action-creators';

const PacksList: FC = () => {
  const { cardPacks, page, pageCount } = useTypedSelector(state => state.packs);
  const { isLoggedIn } = useTypedSelector(state => state.login);
  const [packName, setPackName] = useState('');

  const dispatch = useDispatch();

  const cardsPack = {
    name: packName,
  };

  const handlePageChange = useCallback(
    (currentPage: number): void => {
      dispatch(allActionCreators.getPacks(currentPage, pageCount));
    },
    [page],
  );

  const handleSearchByName = useCallback((searchedPack: string): void => {
    dispatch(allActionCreators.getPacks(page, pageCount, searchedPack));
  }, []);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPackName(e.currentTarget.value);
  };

  const handleOnClick = (): void => {
    dispatch(allActionCreators.addPack(cardsPack));
    setPackName('');
  };

  const changePackName = (cardPack: CardsPack): void => {
    dispatch(allActionCreators.updatePack(cardPack));
  };

  const mappedPacks = cardPacks.map((pack: CardsPack) => (
    <CardPackItem key={pack._id} pack={pack} callback={changePackName} />
  ));

  useEffect(() => {
    dispatch(allActionCreators.getPacks(page, pageCount));
  }, []);

  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <div className={styles.container}>
      <div className={styles.packs_list}>
        <div className={styles.control_panel}>
          <div className={styles.control_items}>
            <span>Number of cards</span>
            <Input type="range" className={styles.range} />
            <Input
              placeholder="add pack name"
              onChange={handleNameChange}
              value={packName}
              className={styles.new_pack_name}
            />
            <Button onClick={handleOnClick}>Add new cardpack</Button>
            <SortButton sortPacksValue="value" />
          </div>
        </div>
        <div className={styles.packs_items}>
          <h1>Packs List</h1>
          <div className={styles.packs_search}>
            <Search callback={handleSearchByName} />
          </div>
          <table className={styles.table}>
            <tbody>{mappedPacks}</tbody>
          </table>
          <PaginationComponent page={page} callback={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default PacksList;
