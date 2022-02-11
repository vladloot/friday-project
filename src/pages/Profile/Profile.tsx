import React, { FC } from 'react';

import { Navigate } from 'react-router-dom';

import styles from './Profile.module.css';

import { useTypedSelector } from 'hooks/useTypedSelector';

const Profile: FC = () => {
  const { isLoggedIn } = useTypedSelector(state => state.login);
  const user = useTypedSelector(state => state.login.info);

  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    user && (
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.profile_info}>
            <img src={user.avatar} alt="avatar" className={styles.avatar} />
            <span className={styles.name}>{user.name}</span>
            <span className={styles.job}>Frontend Developer</span>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
