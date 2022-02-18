import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';

import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';

import style from 'components/Search/Search.module.css';
import searchIcon from 'icons/search-svgrepo-com.svg';
import { PacksActionCreators } from 'store/reducers/Packs/action-creators';

const time: number = 400;

export const Search: FC = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');

  const debounceDispatch = useCallback(
    debounce(value => {
      dispatch(PacksActionCreators.changeSearchPackName(value));
    }, time),
    [],
  );

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    debounceDispatch(searchValue);
  }, [searchValue]);

  return (
    <div className={style.searchWrapper}>
      <input placeholder="Search" value={searchValue} onChange={handleChangeValue} />
      <img className={style.searchIcon} src={searchIcon} alt="search_icon" />
    </div>
  );
};
