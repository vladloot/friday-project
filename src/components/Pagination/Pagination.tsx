import { ChangeEvent, FC } from 'react';

import { Pagination } from '@mui/material';

import styles from './Pagination.module.css';

import { PaginationCardPerPage } from 'components/PaginationCardPerPage/PaginationCardPerPage';

type PropsType = {
  page: number;
  callback: (value: number) => void;
};

export const PaginationComponent: FC<PropsType> = ({ page, callback }) => {
  const handleChange = (e: ChangeEvent<unknown>, value: number): void => {
    callback(value);
  };
  return (
    <div className={styles.container}>
      <Pagination
        count={10}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />

      <div>
        <PaginationCardPerPage />
      </div>
    </div>
  );
};
