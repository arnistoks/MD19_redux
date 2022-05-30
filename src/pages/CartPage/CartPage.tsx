import { useSelector } from 'react-redux';
import CartCard from '../../components/CartCard/CartCard';
import { RootState } from '../../app/store';
import styles from '../../styles/cartPage.module.scss';

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cartItems.items);
  const itemsToBuy = cart.filter((item) => item.inCart === true);

  const totalPrice = itemsToBuy.length !== 0
      && itemsToBuy.map((e) => e.price * e.quantity).reduce((a, b) => a + b).toFixed(2);

  return (
    <section className="section">
      <h1 className={styles.title}>
        Your cart
        {itemsToBuy && itemsToBuy.length === 0 && ' is empty'}
      </h1>
      <div className={styles.container}>
        {itemsToBuy && itemsToBuy.map(({
          id, name, price, imgSrc, quantity, inCart, count, inStorage,
        }) => (
          <CartCard
            key={id}
            id={id}
            name={name}
            price={price}
            imgSrc={imgSrc}
            count={count}
            quantity={quantity}
            inCart={inCart}
            inStorage={inStorage}
          />
        ))}
      </div>
      {itemsToBuy && itemsToBuy.length !== 0 && (
      <div className={styles.container__total}>
        <h3>
          Total price:
          {' '}
          {totalPrice}
          $
        </h3>
      </div>
      )}
    </section>
  );
};

export default CartPage;
