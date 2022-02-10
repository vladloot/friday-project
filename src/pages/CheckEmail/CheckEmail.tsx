import { FC } from 'react';

import style from './checkEmail.module.css';

import postIcon from 'icons/mail_23797.png';

export const CheckEmail: FC = () => (
  <div className={style.checkEmailPage}>
    <p className={style.title}>It-incubator</p>
    <img src={postIcon} alt="post-icon" />
    <p className={style.title}>Check Email</p>
    <p className={style.message}>
      We’ve sent an Email with instructions to example@mail.com
    </p>
  </div>
);
