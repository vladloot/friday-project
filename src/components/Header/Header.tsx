import React, { FC } from "react";

import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header: FC = () => (
  <div className={styles.container}>
    <div className={styles.menu}>
      <NavLink to="/login" className={styles.nav}>
        Login
      </NavLink>
      <NavLink to="/registration" className={styles.nav}>
        Registration
      </NavLink>
      <NavLink to="/profile" className={styles.nav}>
        Profile
      </NavLink>
      <NavLink to="/404" className={styles.nav}>
        Error
      </NavLink>
      <NavLink to="/password-recovery" className={styles.nav}>
        Password Recovery
      </NavLink>
      <NavLink to="/set-new-password" className={styles.nav}>
        New Password
      </NavLink>
      <NavLink to="/test" className={styles.nav}>
        Test
      </NavLink>
    </div>
  </div>
);

export default Header;
