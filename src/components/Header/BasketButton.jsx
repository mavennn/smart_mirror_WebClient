import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Header.css';

import shoppingCart from '../../assets/icons/shopping-cart.svg';
import upArrow from '../../assets/icons/up_arrow.svg';

const BasketButton = ({ location, goBackFunc, basketCount }) => {
  const icon = location === '/basket' ? upArrow : shoppingCart;

  const basketCounts = basketCount === 0 ? '' : `(${basketCount})`;

  const iconText = location === '/basket' ? 'Вернуться' : `Мои товары ${basketCounts}`;

  const onClickFunc = location === '/basket' ? goBackFunc : {};

  const route = location === '/basket' ? '' : routes.BASKET;

  return (
    <Link to={route} className={styles.item}>
      <img
        src={icon}
        alt="Назад"
        onClick={() => onClickFunc}
        className={styles.item__icon}
      />
      <div className={styles.item__text}>
        <h3>
          {iconText}
        </h3>
      </div>
    </Link>
  );
};

export default BasketButton;
