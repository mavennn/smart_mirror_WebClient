import React from 'react';
import styles from './AddToBasketButton.css';

const AddToBasketButton = ({ addToBasket, currentThing }) => (
  <div>
    <button
      className={styles.user_button}
      onClick={() => {
        addToBasket(currentThing);
      }}
    >
      Добавить в корзину
    </button>
  </div>
);

export default AddToBasketButton;
