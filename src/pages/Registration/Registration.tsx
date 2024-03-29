import React, { FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import style from './registration.module.css';

import Button from 'components/Button/Button';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';
import { RegisterError } from 'store/reducers/Registration/action-creators';
import { fetchRegisterUser } from 'store/reducers/Registration/registration-thunk';
import { RootState } from 'store/store';

const Registration: FC = () => {
  const dispatch = useDispatch();

  const isRegister = useSelector<RootState, boolean>(
    state => state.registrationReducer.isRegisterSuccess,
  );
  const errorMessage = useSelector<RootState, string>(
    state => state.registrationReducer.error,
  );
  const isLoading = useSelector<RootState, boolean>(
    state => state.registrationReducer.isLoading,
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.target.value);
  const onChangeValidPassword = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setValidPassword(e.target.value);

  const registerUser = (): void => {
    const userInfo = {
      email,
      password,
    };

    if (password === validPassword) {
      dispatch(RegisterError(''));
      dispatch(fetchRegisterUser(userInfo));
    } else {
      dispatch(RegisterError('Пароли не совпадают'));
    }
  };

  if (isRegister) return <Navigate to="/login" />;

  return (
    <div className={style.registrationForm}>
      <span className={style.companyName}>It - incubator</span>
      <span className={style.title}>Sign Up</span>

      <input
        className={style.email}
        type="text"
        value={email}
        placeholder="Email"
        onChange={onChangeEmail}
      />

      <input
        className={style.password}
        type="password"
        value={password}
        placeholder="Password"
        onChange={onChangePassword}
      />

      <input
        className={style.confirmPassword}
        type="password"
        value={validPassword}
        placeholder="Confirm password"
        onChange={onChangeValidPassword}
      />

      {errorMessage || null}
      {isLoading && <LoaderSpinner />}

      <div className={style.buttonWrapper}>
        <Link to="/login" className={style.cancelBtn}>
          <Button>Cancel</Button>
        </Link>

        <Button className={style.registerBtn} onClick={registerUser} disabled={isLoading}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default Registration;
