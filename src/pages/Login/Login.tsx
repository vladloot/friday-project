import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

const Login: FC = () => (
  <div>
    <h1>FlashCards</h1>
    <h2>Sign In</h2>
    <form>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Link to="/password-recovery">Forgot Password</Link>
      <Button>Login</Button>
      <span>Don&apos;t have an account?</span>
      <Link to="/registration">Sign Up</Link>
    </form>
  </div>
);

export default Login;
