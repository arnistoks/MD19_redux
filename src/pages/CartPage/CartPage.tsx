import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import CartCard from '../../components/CartCard/CartCard';
import styles from '../../styles/cartPage.module.scss';

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems.value);

  const totalPrice = cartItems
    .map(({ price, quantity }) => price * quantity)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  return (
    <section className="section">
      <h1 className={styles.title}>Your cart</h1>
      <div className={styles.container}>
        {cartItems && cartItems.map(({
          id, name, price, imgSrc, quantity,
        }) => (
          <CartCard
            key={id}
            id={id}
            name={name}
            price={price}
            imgSrc={imgSrc}
            quantity={quantity}
          />
        ))}
      </div>
      <div className={styles.container__total}>
        <h3>
          Total price:
          {' '}
          {totalPrice}
          $
        </h3>
      </div>
    </section>
  );
};

export default CartPage;
