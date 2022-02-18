import * as React from 'react';
import { FC, useEffect } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';

import style from 'components/PaginationCardPerPage/PaginationCardPerPage.module.css';
import { PacksActionCreators } from 'store/reducers/Packs/action-creators';

const initialCountPageValue = 10;

export const PaginationCardPerPage: FC = () => {
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(initialCountPageValue);

  const handleChange = (e: any): void => {
    setCount(e.target.value);
  };

  useEffect(() => {
    dispatch(PacksActionCreators.setCardsPerPage(count));
  }, [count]);

  return (
    <div className={style.wrapper}>
      <p>Show</p>
      <Box sx={{ maxWidth: 65 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={count}
            onChange={handleChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <p>Cards per Page</p>
    </div>
  );
};
