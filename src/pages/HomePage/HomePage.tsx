import React, { useEffect, useState } from 'react';
import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';
import styles from '../../styles/homePage.module.scss';
import { Lawnmower, getLawnmowers } from '../../data/data';

const HomePage = () => {
  const [catalogueItems, setCatalogueItems] = useState<Lawnmower[]>([]);

  useEffect(() => {
    setCatalogueItems(getLawnmowers());
  }, []);

  return (
    <section className="section">
      <h1 className={styles.title}>Lawnmowers</h1>
      <div className={styles.container}>
        {catalogueItems && catalogueItems.map(({
          id, name, price, imgSrc, quantity,
        }) => (
          <CatalogueCard id={id} name={name} price={price} imgSrc={imgSrc} quantity={quantity} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
