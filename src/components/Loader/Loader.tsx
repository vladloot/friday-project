import React, { FC } from 'react';

import styles from './Loader.module.css';

const Loader: FC = () => (
  <div className={styles.container}>
    <div className={styles.loader} />
  </div>
);

export default Loader;
