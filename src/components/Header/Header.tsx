import React, { FC } from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

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

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <NavLink to="/login" className={styles.nav}>
          Login
        </NavLink>
        <NavLink to="/registration" className={styles.nav}>
          Registration
        </NavLink>
        <NavLink to="/profile" className={styles.nav}>
          Profile
        </NavLink>
        <NavLink to="/404" className={styles.nav}>
          Error
        </NavLink>
        <NavLink to="/password-recovery" className={styles.nav}>
          Password Recovery
        </NavLink>
        <NavLink to="/new-password" className={styles.nav}>
          New Password
        </NavLink>
      </div>
      {isLoggedIn ? <Button onClick={handleLogout}>Log Out</Button> : ''}
    </div>
  );
};

export default Header;
