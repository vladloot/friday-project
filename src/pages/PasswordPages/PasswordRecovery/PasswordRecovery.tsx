import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './passwordRecovery.module.css';

import Button from 'components/Button/Button';
import { resetPasswordTC } from 'store/reducers/ResetPassword';
import { RootState } from 'store/store';

const PasswordRecovery: FC = () => {
  const isSent = useSelector<RootState, boolean>(state => state.resetPassword.isSent);

  let email = useSelector<RootState, string>(state => state.resetPassword.email);
  // const errorMessage = useSelector<RootState, string | undefined>(
  //   (state) => state.resetPassword.error
  // );
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const submitInstruction = () => {
    dispatch(resetPasswordTC({ email, from: ' ', message: '' }));
  };
  let valueEmail;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function myFunction() {
    // @ts-ignore
    // eslint-disable-next-line no-alert
    email = document.getElementById('email').value;
    valueEmail = email;
    console.log(`Email:${valueEmail}`);
  }

  return (
    <div className={styles.block}>
      {!isSent ? (
        <div className={styles.container}>
          <h2 className={styles.header}>Forgot your password?</h2>
          <form className={styles.form}>
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

              {/* <div>{errorMessage}</div> */}
            </div>
            <p className={styles.text}>
              Enter your email address and we will send you further instructions
            </p>

            <Button
              disabled={false}
              type="submit"
              onClick={submitInstruction}
              className={styles.button}
            >
              Send Instructions
            </Button>
          </form>
        </div>
      ) : (
        <>
          <h2>Check Email</h2>
          <p>
            We’ve sent an Email with instructions to <br />
            {email}
          </p>
        </>
      )}
    </div>
  );
};

export default PasswordRecovery;
