import React, { FC } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setNewPasswordTC } from 'store/reducers/ResetPassword';

const NewPassword: FC = () => {
  const { token } = useParams<'token'>();
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const submitToken = () => {
    if (token) {
      console.log(token);
      dispatch(setNewPasswordTC({ password: '00000000', resetPasswordToken: token }));
    }
  };

  return (
    <div>
      <h2>Create New Password</h2>
      <form onSubmit={submitToken}>
        <input type="password" placeholder="password" />
        <button type="submit">Set password</button>
      </form>
    </div>
  );
};

export default NewPassword;
