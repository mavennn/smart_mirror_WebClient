import React from 'react';
import routes from '../../constants/routes';
import remove from '../../assets/icons/trash.svg';
import sockets from '../../constants/sockets';
import styles from './BasketPage.css';

import Emoji from '../../components/Emoji/Emoji';
import HeaderContainer from '../../components/Header/HeaderContainer';

const BasketPage = ({
  basketThings, // список шмоток из корзины
  getConsultantThunkCreator, // упаковать на кассу
  removeFromBasket, // удалить из корзины
  clearBasket, // очистить корзину
  goBack, // вернуться назад
  fetchThingInfo, // на страницу товара
}) => {
  if (basketThings.length !== 0) {
    return (
      <div className={styles.container}>
        <HeaderContainer />
        <ul className={styles.basket_things_list}>
          {basketThings.map((item) => (
            <li key={item.ware} className={styles.basket_things_list__item}>
              {/* Карточка товара */}
              <div className={styles.basket_item_cart}>
                {/* Фото товара */}
                <div
                  className={styles.basket_cart__image_container}
                  onClick={() => {
                    fetchThingInfo(item.barcode, 'barcode');
                    goBack(routes.HOME);
                  }}
                >
                  <img src={item.image} className={styles.basket_cart__image} />
                </div>

                {/* название товара */}
                <div className={styles.basket_cart__title}>
                  <p>{item.name}</p>
                </div>

                {/* Цвет */}
                <div className={styles.basket_cart__color}>
                  <p>{item.color}</p>
                </div>

                {/* Размер */}
                <div className={styles.basket_cart__color}>
                  <p>{item.size}</p>
                </div>

                {/* удалить из корзины */}
                <div
                  className={styles.basket_cart__delete_row}
                  onClick={() => removeFromBasket(item.ware, item.size)}
                >
                  <img
                    src={remove}
                    className={styles.basket_cart__delete_row_icon}
                  />
                  <div className={styles.basket_cart__delete_row_title}>
                    <p>Удалить из корзины</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* нижние кнопки */}
        <div className={styles.basket_footer}>
          {/* очистить корзину */}
          <button
            className={styles.basket_footer__button}
            onClick={() => clearBasket()}
          >
            Очистить корзину
          </button>

          {/* упаковать на кассу */}
          <button
            className={styles.basket_footer__button}
            onClick={() => {
              getConsultantThunkCreator(sockets.TO_CHECKOUT);
            }}
          >
            Упаковать на кассу
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <HeaderContainer />
      <div className={styles.waiting}>
        <span className={styles.waiting_text}>
          Здесь пока ничего нет
          <Emoji symbol="🙈" />
        </span>
        <p>Отсканируй товар или перейди в каталог</p>
      </div>
    </div>
  );
};

export default BasketPage;
