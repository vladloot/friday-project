import { ChangeEvent, FC, memo, useCallback } from 'react';

import { Pagination } from '@mui/material';
import { useDispatch } from 'react-redux';

import styles from './Pagination.module.css';

import { PaginationCardPerPage } from 'components/PaginationCardPerPage/PaginationCardPerPage';
import { PacksActionCreators } from 'store/reducers/Packs/action-creators';

type PropsType = {
  page: number;
  cardPacksTotalCount: number;
};

export const PaginationComponent: FC<PropsType> = memo(
  ({ page, cardPacksTotalCount }) => {
    const dispatch = useDispatch();

    const handlePageChange = useCallback(
      (e: ChangeEvent<unknown>, value: number): void => {
        dispatch(PacksActionCreators.setPacksPage(value));
      },
      [page],
    );
    return (
      <div className={styles.container}>
        <Pagination
          count={cardPacksTotalCount}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />

        <div>
          <PaginationCardPerPage />
        </div>
      </div>
    );
  },
);
