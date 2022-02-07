import React, { FC, FormEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

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
    <div>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Input
          id="login-email"
          type="email"
          value={values.email}
          placeholder="Enter your email address..."
          onChange={e => setValues({ ...values, email: e.currentTarget.value })}
        />
        <Input
          id="login-password"
          type="password"
          value={values.password}
          placeholder="Enter your password..."
          onChange={e => setValues({ ...values, password: e.currentTarget.value })}
        />
        <Checkbox
          checked={values.rememberMe}
          onChange={e => setValues({ ...values, rememberMe: e.currentTarget.checked })}
        >
          Remember Me
        </Checkbox>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
