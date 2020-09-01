import React from "react";
import { useHistory } from "react-router";
import styles from "./BasketPage.css";
import HeaderContainer from "../../components/Header/HeaderContainer";
import removeIcon from "../../assets/icons/trash.svg";
import EmptyBasket from "./EmptyBasket";
import api from "../../api";

const BasketPage = () => {
  const history = useHistory();

  const [basketItems, setBasketItems] = React.useState([]);

  const handleBasketItemClick = (barcode) => {
    location.href = `/?barcode=${barcode}`;
  };

  const handleRemoveFromBasketClick = (productId) => {
    const userId = localStorage.getItem("userId");

    if (userId && productId) {
      api.basket.removeItem(userId, productId).then((data) => {
        console.log(data);
        setBasketItems(data);
      });
    }
  };

  const handleClearBasketClick = () => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      api.basket.clear(userId).then((res) => {
        setBasketItems([]);
      });
    }
  };

  const handlePassToCheckoutClick = () => {
    console.log("handlePassToCheckoutClick");
  };

  React.useEffect(() => {
    const userId = localStorage.getItem("userId");
    // получаем вещи из корзины для пользователя
    if (userId) {
      api.basket.getAll(userId).then((data) => {
        setBasketItems(data);
      });
    }
  }, [setBasketItems]);

  if (basketItems.length !== 0) {
    return (
      <div className={styles.container}>
        <HeaderContainer />
        <ul className={styles.basket_things_list}>
          {basketItems.map((item) => (
            <li key={item.id} className={styles.basket_things_list__item}>
              {/* Карточка товара */}
              <div className={styles.basket_item_cart}>
                {/* Фото товара */}
                <div
                  className={styles.basket_cart__image_container}
                  onClick={() => handleBasketItemClick(item.barcode)}
                >
                  <img
                    src={item.images[0].url}
                    className={styles.basket_cart__image}
                  />
                </div>

                {/* название товара */}
                <div className={styles.basket_cart__title}>
                  <p>{item.name}</p>
                </div>

                {/* удалить из корзины */}
                <div
                  className={styles.basket_cart__delete_row}
                  onClick={() => handleRemoveFromBasketClick(item.id)}
                >
                  <img
                    src={removeIcon}
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
            onClick={() => handleClearBasketClick()}
          >
            Очистить корзину
          </button>

          {/* упаковать на кассу */}
          <button
            className={styles.basket_footer__button}
            onClick={() => handlePassToCheckoutClick()}
          >
            Упаковать на кассу
          </button>
        </div>
      </div>
    );
  }
  return <EmptyBasket />;
};

export default BasketPage;
