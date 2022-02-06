import React, { FC } from 'react';

import style from './registration.module.css';

import Button from 'components/Button/Button';

const Registration: FC = () => (
  <div className={style.registrationForm}>
    <span className={style.companyName}>It - incubator</span>
    <span className={style.title}>Sign Up</span>
    <input className={style.email} type="text" placeholder="Email" />
    <input className={style.password} type="password" placeholder="Password" />
    <input
      className={style.confirmPassword}
      type="password"
      placeholder="Confirm password"
    />
    <div className={style.buttonWrapper}>
      <Button className={style.cancelBtn}>Cancel</Button>
      <Button className={style.registerBtn}>Register</Button>
    </div>
  </div>
);

export default Registration;
