import React, { FC, FormEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import styles from './passwordRecovery.module.css';

import Button from 'components/Button/Button';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { resetPasswordTC } from 'store/reducers/ResetPassword';
import { RootState } from 'store/store';

const PasswordRecovery: FC = () => {
  const { error } = useTypedSelector(state => state.app);
  const isSent = useSelector<RootState, boolean>(state => state.resetPassword.isSent);

  let email = useSelector<RootState, string>(state => state.resetPassword.email);
  // const errorMessage = useSelector<RootState, string | undefined>(
  //   (state) => state.resetPassword.error
  // );
  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const submitInstruction = (e: FormEvent) => {
    console.log(`E:${e}`);
    e.preventDefault();
    dispatch(
      resetPasswordTC({
        email,
        from: 'From test Friday',
        // message: `<div> password recovery link: <a href='https://vladloot.github.io/friday-project#/new-password/$token$'>link</a></div>`,
        message: `<div> password recovery link: <a href='http://localhost:3000/friday-project?#/new-password/$token$'>link</a></div>`,
      }),
    ).catch((err: {}) => {
      console.log(`Error:${err}`);
    });
  };
  let valueEmail;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function myFunction(e: FormEvent) {
    // @ts-ignore
    // eslint-disable-next-line no-alert
    email = document.getElementById('email').value;
    valueEmail = email;
    // console.log(`Email:${valueEmail}`);
    console.log(`Em:${error}`);
  }

  return (
    <div className={styles.block}>
      {!isSent ? (
        <div className={styles.container}>
          <h2>Forgot your password?</h2>
          <form className={styles.form} onSubmit={submitInstruction}>
            <div>
              <span />
              <input
                id="email"
                type="text"
                placeholder="Email"
                value={valueEmail}
                style={{ width: '250px' }}
                onChange={myFunction}
              />
              {error && <div style={{ color: 'red' }}>{error}</div>}
              {/* <div>{errorMessage}</div> */}
            </div>
            <p className={styles.text}>
              Enter your email address and we will send you further instructions
            </p>

            <Button disabled={false} type="submit" className={styles.button}>
              Send Instructions
            </Button>
          </form>
        </div>
      ) : (
        <div className={styles.container}>
          <h2 className={styles.header}>Check Email</h2>
          <div className={styles.text}>
            We’ve sent an Email with instructions to <br />
            {email}
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordRecovery;
