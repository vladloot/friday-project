import React, { FC } from 'react';

import styles from './Modal.module.css';

type PropsType = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: FC<PropsType> = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.myModal];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
      role="presentation"
    >
      <div
        className={styles.myModalContent}
        onClick={e => e.stopPropagation()}
        role="presentation"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
