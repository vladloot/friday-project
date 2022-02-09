import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import styles from './Header.module.css';

import Button from 'components/Button/Button';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { LoginActionCreators } from 'store/reducers/Login/action-creators';

const Header: FC = () => {
  const isLoggedIn = useTypedSelector(state => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (): void => {
    dispatch(LoginActionCreators.logout());
  };

  return isLoggedIn ? (
    <div className={styles.container}>
      <Button onClick={handleLogout}>Log Out</Button>
    </div>
  ) : null;
};

export default Header;
