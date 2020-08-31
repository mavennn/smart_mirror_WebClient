import React from 'react';
import styles from './ThingInfo.css';

const ThingInfo = ({ title, brand, price }) => (
  <div className={styles.info}>
    <div className={styles.info__name}>
      <h2>{title}</h2>
    </div>
    <div className={styles.info__brand}>
      <h3>{brand}</h3>
    </div>
    {/*{price !== {} ? <h4>{ price } руб.</h4> : null}*/}
  </div>
);

export default ThingInfo;
