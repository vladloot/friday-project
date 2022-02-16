import { FC } from 'react';

import { Pagination } from '@mui/material';
import { useDispatch } from 'react-redux';

import styles from './Pagination.module.css';

import { PaginationCardPerPage } from 'components/PaginationCardPerPage/PaginationCardPerPage';
import { changePage } from 'store/reducers/Pagination/action-creators';

export const PaginationComponent: FC = () => {
  const dispatch = useDispatch();

  const handlePageChange = (e: any): void => {
    const { textContent } = e.target;
    dispatch(changePage(textContent));
  };

  return (
    <div className={styles.container}>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />

      <div>
        <PaginationCardPerPage />
      </div>
    </div>
  );
};