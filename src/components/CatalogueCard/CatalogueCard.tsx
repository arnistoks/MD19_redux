import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { addItem } from '../../reducers/cartReducer';
import styles from '../../styles/catalogueCard.module.scss';
import { getLawnmowerById } from '../../data/data';

type CatalogueCardProps = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  quantity: number;
}

const CatalogueCard:FC<CatalogueCardProps> = ({
  id, name, price, imgSrc, quantity,
}) => {
  const [buyQuantity, setBuyQuantity] = useState(quantity);
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
            onClick={() => setBuyQuantity(buyQuantity - 1)}
            disabled={buyQuantity === 1}
          >
            -
          </button>
          <span>{buyQuantity}</span>
          <button
            className={styles.incrementOrDecrement}
            onClick={() => setBuyQuantity(buyQuantity + 1)}
            disabled={buyQuantity === 10}
          >
            +
          </button>
        </div>
        <button
          className={styles.add}
          onClick={() => {
            // @ts-ignore
            dispatch(addItem({ ...getLawnmowerById(id), quantity: buyQuantity }));
            setBuyQuantity(1);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CatalogueCard;
