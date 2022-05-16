import React, { useState } from 'react';
import styles from './homePage.module.scss';
import lawnmowers, { Lawnmower } from '../../data/data';
import Stiga01 from '../../data/images/stiga01_75-50.png';
import Stiga02 from '../../data/images/stiga02_130-20.png';

const HomePage = () => {
  const [counter, setCounter] = useState(1);

  return (
    <section className="section">
      <h1 className={styles.title}>Lawnmowers</h1>
      <div className={styles.container}>
        {lawnmowers && lawnmowers.map((lawnmower: Lawnmower) => (
          <div key={lawnmower.id} className={styles.card}>
            <img className={styles.image} src={Stiga01} alt={lawnmower.name} width="300" />
            <h2 className={styles.card__title}>{lawnmower.name}</h2>
            <h3>
              Price:
              {' '}
              {(lawnmower.price).toFixed(2)}
              $
            </h3>
            <div className={styles.card__row}>
              <div className={styles.counter}>
                <button
                  className={styles.incrementOrDecrement}
                  onClick={() => setCounter(counter - 1)}
                  disabled={counter === 1}
                >
                  -
                </button>
                <span>{counter}</span>
                <button
                  className={styles.incrementOrDecrement}
                  onClick={() => setCounter(counter + 1)}
                  disabled={counter === 10}
                >
                  +
                </button>
              </div>
              <button className={styles.add}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
