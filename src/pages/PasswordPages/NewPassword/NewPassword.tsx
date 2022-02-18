import React, { FC, FormEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from 'components/Button/Button';
import { useTypedSelector } from 'hooks/useTypedSelector';
import styles from 'pages/PasswordPages/PasswordRecovery/passwordRecovery.module.css';
import { setNewPasswordTC } from 'store/reducers/ResetPassword';
import { handleError } from 'utils/error-utils';

const NewPassword: FC = () => {
  const { token } = useParams<'token'>();
  const dispatch = useDispatch();

  const { error } = useTypedSelector(state => state.app);
  const [valuePassword, setValuePassword] = useState('');
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValuePassword(e.target.value);
    handleError('', dispatch);
  };

  const submitToken = (e: FormEvent): void => {
    if (token) {
      setValuePassword('');
      dispatch(setNewPasswordTC({ password: valuePassword, resetPasswordToken: token }));
    }
  };

  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <h2 className={styles.header}>Create New Password</h2>
        <form className={styles.form} onSubmit={submitToken}>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <input
            type="password"
            placeholder="password"
            value={valuePassword}
            style={{ width: '250px', margin: '60px' }}
            onChange={onChangePassword}
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
