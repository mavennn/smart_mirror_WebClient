import React, { useEffect } from 'react';
import styles from './Carousel.css';
import fixSize from '../../helpers/fix-size';

const Carousel = ({ ware, pictures }) => {
  useEffect(() => {
    fixSize();
  });
  return (
    <div className={styles.image_container}>
      <img src={pictures[0]} alt="pic" className={styles.image} />
    </div>
  );
};

export default Carousel;
