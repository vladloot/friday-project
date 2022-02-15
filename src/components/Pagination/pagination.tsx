import { FC } from 'react';

import { Pagination } from '@mui/material';
import { useDispatch } from 'react-redux';

import { changePage } from 'store/reducers/Pagination/action-creators';

export const PaginationComponent: FC = () => {
  const dispatch = useDispatch();

  const handlePageChange = (e: any): void => {
    const { textContent } = e.target;
    dispatch(changePage(textContent));
  };

  return (
    <div>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />
    </div>
  );
};
