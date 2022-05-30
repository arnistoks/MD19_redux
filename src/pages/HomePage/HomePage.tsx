import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';
import styles from '../../styles/homePage.module.scss';
import { RootState } from '../../app/store';

const HomePage = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const catalogue = useSelector((state: RootState) => state.cartItems.items);

  const showMoreItems = () => {
    setVisibleItems((prevValue) => prevValue + 3);
  };

  return (
    <section className="section">
      <h1 className={styles.title}>Lawnmowers</h1>
      <div className={styles.container}>
        {catalogue && catalogue.slice(0, visibleItems).map(({
          id, name, price, imgSrc, count, quantity, inStorage,
        }) => (
          <CatalogueCard key={id} id={id} name={name} price={price} imgSrc={imgSrc} count={count} quantity={quantity} inStorage={inStorage} />
        ))}
      </div>
      {visibleItems !== 12 && (
      <button
        className={styles.loadMore}
        onClick={showMoreItems}
      >
        Load More
      </button>
      )}
    </section>
  );
};

export default HomePage;
