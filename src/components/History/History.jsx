import React from 'react';
import styles from './History.css';

const History = ({ historyThings, fetchThing }) => (
  <div className={styles.history}>
    <div className={styles.history__title}>
      <p>ПРОСМОТРЕННОЕ</p>
    </div>
    <ul className={styles.history__list}>
      {historyThings.map((item) => (
        <li
          key={item.barcode + item.name}
          className={styles.history__list_item}
          onClick={() => {
            fetchThing(item.barcode, 'barcode');
          }}
        >
          <div className={styles.history__list_item_image_container}>
            <img src={item.image} className={styles.history__list_item_image} />
          </div>
          <div className={styles.history__list_item_title}>
            <p>{item.name}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default History;
