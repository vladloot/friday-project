import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './cardsList.module.css';

// import { PacksService } from 'api/PacksService';
import { PacksService } from 'api/PacksService';
import { CardItem } from 'components/CardItem/CardItem';
import { CardListHeader } from 'components/CardListHeader/CardListHeader';
import { Search } from 'components/Search/Search';
import { getCards } from 'store/reducers/Cards/action-creators';
import { CardsListType } from 'store/reducers/Cards/types';
import { RootState } from 'store/store';

const CardsList: FC = () => {
  const dispatch = useDispatch();

  const id = useSelector<RootState>(state => state.cardReducer.selectedPack);
  const list = useSelector<RootState, CardsListType[]>(
    state => state.cardReducer.cardsList,
  );

  const cardList = list.map(({ question, answer, updated, _id, grade }) => (
    <CardItem
      key={_id}
      question={question}
      answer={answer}
      updated={updated}
      grade={grade}
    />
  ));

  useEffect(() => {
    PacksService.getCards(id).then(res => {
      const { cards } = res.data;
      dispatch(getCards(cards));
    });
  }, []);

  return (
    <div className={style.pack}>
      <h1 className={style.packName}>Pack Name</h1>
      <Search />
      <CardListHeader />
      {cardList}
    </div>
  );
};

export default CardsList;
