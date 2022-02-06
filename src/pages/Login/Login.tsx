import React, { FC } from 'react';

import { Link, Navigate } from 'react-router-dom';

import LoginForm from 'components/LoginForm/LoginForm';
import { useTypedSelector } from 'hooks/useTypedSelector';

const Login: FC = () => {
  const { isLoggedIn } = useTypedSelector(state => state.login);

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <LoginForm />
      <Link to="/password-recovery">Forgot Password</Link>
      <span>Don&apos;t have an account?</span>
      <Link to="/registration">Sign Up</Link>
    </div>
  );
};

export default Login;
