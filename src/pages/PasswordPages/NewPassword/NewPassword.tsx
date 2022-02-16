import React, { FC, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from 'components/Button/Button';
import styles from 'pages/PasswordPages/PasswordRecovery/passwordRecovery.module.css';
import { setNewPasswordTC } from 'store/reducers/ResetPassword';

const NewPassword: FC = () => {
  const { token } = useParams<'token'>();
  const dispatch = useDispatch();
  const [valuePassword, setValuePassword] = useState();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const submitToken = () => {
    if (token) {
      console.log(token);
      // @ts-ignore
      setValuePassword('');
      dispatch(setNewPasswordTC({ password: '00000000', resetPasswordToken: token }));
    }
  };

  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <h2 className={styles.header}>Create New Password</h2>
        <form className={styles.form} onSubmit={submitToken}>
          <input
            type="password"
            placeholder="password"
            value={valuePassword}
            style={{ width: '250px', margin: '60px' }}
          />
          <Button className={styles.button} type="submit">
            Set password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
