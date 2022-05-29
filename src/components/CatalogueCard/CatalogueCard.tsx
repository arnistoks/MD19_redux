import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { Lawnmower } from '../../data/data';
import {
  increaseCount, decreaseCount, addToCart, resetCount,
} from '../../reducers/cartReducer';
import styles from '../../styles/catalogueCard.module.scss';

const CatalogueCard:FC<Lawnmower> = ({
  id, name, price, imgSrc, quantity, count,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div key={id} className={styles.card}>
      <img className={styles.image} src={imgSrc} alt={name} width="300" />
      <h2 className={styles.card__title}>{name}</h2>
      <h3>
        Price:
        {' '}
        {(price).toFixed(2)}
        $
      </h3>
      <div className={styles.card__row}>
        <div className={styles.counter}>
          <button
            className={styles.incrementOrDecrement}
            disabled={count === 1}
            onClick={() => {
              dispatch(decreaseCount(id));
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className={styles.incrementOrDecrement}
            disabled={count + quantity >= 10}
            onClick={() => {
              dispatch(increaseCount(id));
            }}
          >
            +
          </button>
        </div>
        <button
          className={styles.add}
          disabled={quantity >= 10}
          onClick={() => {
            dispatch(addToCart(id));
            dispatch(resetCount(id));
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CatalogueCard;
