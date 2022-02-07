import React, { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { LoginActionCreators } from 'store/reducers/Login/action-creators';

const Profile: FC = () => {
  const { isLoggedIn } = useTypedSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoginActionCreators.checkAuth());
  }, []);

  if (!isLoggedIn) return <Navigate to="/login" />;

  return <div>Profile</div>;
};

export default Profile;
