import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Header.css'

import hanger from '../../assets/icons/hanger.svg';
import upArrow from '../../assets/icons/up_arrow.svg';

const CatalogButton = ({ location, backFunc }) => {
  const icon = location === '/catalog' ? upArrow : hanger;

  const iconText = location === '/catalog' ? 'Вернуться' : 'Каталог';

  const onClickFunc = location === '/catalog' ? backFunc : {};

  const route = location === '/catalog' ? '' : routes.CATALOG;

  return (
    <Link to={route} className={styles.item}>
      <img src={icon} alt="Назад" onClick={() => onClickFunc} className={styles.item__icon} />
      <div className={styles.item__text}>
        <h3>{iconText}</h3>
      </div>
    </Link>
  );
};

export default CatalogButton;
