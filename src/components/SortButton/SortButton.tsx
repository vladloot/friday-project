import { FC, useState, memo, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import style from './sortButton.module.css';

import { changeSortInfo } from 'store/reducers/SortButton/action-creators';

type propsType = {
  sortPacksValue: string;
};

export const SortButton: FC<propsType> = memo(({ sortPacksValue }) => {
  const dispatch = useDispatch();

  const [direction, setDirection] = useState(true);

  const handleClick = (): void => {
    setDirection(!direction);
  };

  useEffect(() => {
    const directionValue = direction ? '0' : '1';
    dispatch(changeSortInfo(directionValue, sortPacksValue));
  }, [direction]);

  return (
    <p>
      <button
        type="button"
        className={`${style.sortButton} ${direction ? style.down : style.up}`}
        onClick={handleClick}
      >
        button
      </button>
    </p>
  );
});
