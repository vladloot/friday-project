import { FC } from 'react';

import style from './cardItem.module.css';

type PropsType = {
  question: string;
  answer: string;
  updated: string;
  grade: number;
};

export const CardItem: FC<PropsType> = ({ question, answer, updated, grade }) => (
  <div className={style.cardWrapper}>
    <div>{question}</div>
    <div>{answer}</div>
    <div>{updated}</div>
    <div className={style.grade}>{grade}</div>
    <div>
      <button type="button">Delete</button>
      <button type="button">Edit</button>
    </div>
  </div>
);
