import React, { FC } from 'react';

import { Navigate } from 'react-router-dom';

import styles from './Login.module.css';

import LoginForm from 'components/LoginForm/LoginForm';
import { useTypedSelector } from 'hooks/useTypedSelector';

const Login: FC = () => {
  const { isLoggedIn } = useTypedSelector(state => state.login);

  if (isLoggedIn) return <Navigate to="/profile" />;

  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
