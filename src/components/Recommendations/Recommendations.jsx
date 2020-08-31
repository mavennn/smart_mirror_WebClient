import React from 'react';
import styles from './Recommendations.css';

const Recommendations = ({ recs, fetchThingInfo }) => {
  if (recs.length !== 0 || recs !== undefined) {
    return (
      <div className={styles.recs}>
        <div className={styles.recs__title}>
          <p> РЕКОМЕНДАЦИИ </p>
        </div>

        <ul className={styles.recs__list}>
          {recs.map((item) => (
            <li
              key={item.barcode + item.name}
              className={styles.recs__list_item}
              onClick={() => {
                fetchThingInfo(item.ware, 'ware');
              }}
            >
              <div className={styles.recs__list_item_image_container}>
                <img
                  src={item.image}
                  className={styles.recs__list_item_image}
                />
              </div>
              <div className={styles.recs__list_item_title}>
                <p>{item.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <div className="list"></div>;
};

export default Recommendations;
