import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/cartCard.module.scss';
import { AppDispatch } from '../../app/store';
import { Lawnmower } from '../../data/data';
import {
  increaseQuantity, decreaseQuantity, removeFromCart,
} from '../../reducers/cartReducer';

const CartCard:FC<Lawnmower> = (
  {
    id, name, price, imgSrc, quantity, inStorage,
  },
) => {
  const dispatch = useDispatch<AppDispatch>();

  const totalPrice = (price * quantity).toFixed(2);

  return (
    <div key={id} className={styles.card}>
      <div className={styles.card__left}>
        <img className={styles.image} src={imgSrc} alt={name} width="150" />
        <h2 className={styles.card__title}>{name}</h2>
      </div>
      <div className={styles.card__right}>
        <h3>
          Price:
          {' '}
          {(price).toFixed(2)}
          $
        </h3>

        <div className={styles.counter}>
          <button
            className={styles.incrementOrDecrement}
            disabled={quantity === 1}
            onClick={() => {
              dispatch(decreaseQuantity(id));
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className={styles.incrementOrDecrement}
            disabled={quantity === inStorage}
            onClick={() => {
              dispatch(increaseQuantity(id));
            }}
          >
            +
          </button>
        </div>
        <h3>
          Total:
          {' '}
          {totalPrice}
          $
        </h3>
        <button
          className={styles.delete}
          onClick={() => {
            dispatch(removeFromCart(id));
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}>
            <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" />
            <path d="M9 10h2v8H9zm4 0h2v8h-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartCard;
