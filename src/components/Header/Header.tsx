import React, { FC } from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

import Button from 'components/Button/Button';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { RouteNames } from 'routes/routes';
import { allActionCreators } from 'store/reducers/action-creators';

const Header: FC = () => {
  const isLoggedIn = useTypedSelector(state => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (): void => {
    dispatch(allActionCreators.logout());
  };

  return isLoggedIn ? (
    <div className={styles.container}>
      <NavLink to={RouteNames.PROFILE}>Profile</NavLink>
      <NavLink to={RouteNames.PACKS_LIST}>Packs List</NavLink>
      <Button onClick={handleLogout}>Log Out</Button>
    </div>
  ) : null;
};

export default Header;
