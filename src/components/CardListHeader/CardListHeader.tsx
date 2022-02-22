import { FC } from 'react';

import style from './cardListHeader.module.css';

export const CardListHeader: FC = () => (
  <div className={style.wrapper}>
    <div>Question</div>
    <div>Answer</div>
    <div>Last Updated</div>
    <div className={style.grade}>Grade</div>
    <div>Actions</div>
  </div>
);
