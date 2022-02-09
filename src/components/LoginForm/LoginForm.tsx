import React, { FC, FormEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './LoginForm.module.css';

import Button from 'components/Button/Button';
import Checkbox from 'components/Checkbox/Checkbox';
import Input from 'components/Input/Input';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { LoginActionCreators } from 'store/reducers/Login/action-creators';

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const { error } = useTypedSelector(state => state.app);
  const [values, setValues] = useState({
    email: process.env.REACT_APP_EMAIL as string,
    password: process.env.REACT_APP_DB_PASSWORD as string,
    rememberMe: true,
  });

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(LoginActionCreators.login({ ...values }));
  };

  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Input
          id="login-email"
          type="email"
          style={{ width: '250px' }}
          value={values.email}
          placeholder="Email"
          onChange={e => setValues({ ...values, email: e.currentTarget.value })}
        />
        <Input
          id="login-password"
          type="password"
          style={{ width: '250px' }}
          value={values.password}
          placeholder="Password"
          onChange={e => setValues({ ...values, password: e.currentTarget.value })}
        />
        <Link to="/password-recovery" className={styles.forgot_password}>
          Forgot Password
        </Link>
        <div className={styles.checkbox}>
          <Checkbox
            checked={values.rememberMe}
            onChange={e => setValues({ ...values, rememberMe: e.currentTarget.checked })}
          >
            Remember Me
          </Checkbox>
        </div>
        <Button type="submit" className={styles.button}>
          Login
        </Button>
        <span className={styles.text}>Don&apos;t have an account?</span>
        <Link to="/registration" className={styles.sign_up}>
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
