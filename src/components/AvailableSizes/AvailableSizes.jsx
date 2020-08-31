import React, { useEffect } from 'react';
import styles from './AvailableSizes.css';
import underlineBlock from '../../helpers/underline-block';

const AvailableSizes = ({ sizes, changeSize }) => {
  useEffect(() => underlineBlock('#size_list_item', '2px solid greenyellow'));

  return (
    <div className={styles.available_sizes}>
      <div className={styles.available_sizes__title}>
        <p>
          <strong>Выберите размер: </strong>
        </p>
      </div>
      <ul className={styles.available_sizes__list}>
        {sizes.map((size) => (
          <li
            id="size_list_item"
            key={size}
            className={styles.available_sizes__list_item}
          >
            <button
              id="size_button"
              className={styles.available_sizes_button}
              onClick={() => changeSize(size)}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableSizes;
