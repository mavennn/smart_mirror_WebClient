import React from "react";
import styles from "./CatalogPage.css";
import HeaderContainer from "../../components/Header/HeaderContainer";
import api from "../../api";

const CatalogPage = () => {
  const [products, setProducts] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);

  const GenderTypes = Object.freeze({
    MALE: 0,
    FEMALE: 1,
    CHILD: 2,
  });

  React.useEffect(() => {
      const userId = localStorage.getItem("userId");

      // получаем вещи из корзины для пользователя
      if (userId) {
          api.basket.getAll(userId).then((data) => {
              setBasketItems(data);
          });
      }

    // по умолчанию загружаем мужские
    api.catalog.getProductByGender(GenderTypes.MALE).then((products) => {
        console.log(products);
      setProducts(products);
    });
  }, [setBasketItems, setProducts]);

  const handleGenderButtonClick = (genderId) => {
    api.catalog.getProductByGender(genderId).then((products) => {
      setProducts(products);
    });
  };

  const handleProductCardClick = (barcode) => {
    if (barcode) {
      location.href = `/?barcode=${barcode}`;
    }
  };

  return (
    <div className={styles.container}>
      <HeaderContainer basketCount={basketItems.length}/>

      {/* табы "Мужчнам" "Женщинам" "Детям" */}
      <div className={styles.gender_buttons}>
        {/* Кнопка мужчинам */}
        <div
          id="gender_button__toggler"
          className={styles.gender_buttons__toggler}
          onClick={() => handleGenderButtonClick(GenderTypes.MALE)}
        >
          Мужчинам
        </div>

        {/* Кнопка женщинам */}
        <div
          id="gender_button__toggler"
          className={styles.gender_buttons__toggler}
          onClick={() => handleGenderButtonClick(GenderTypes.FEMALE)}
        >
          Женщинам
        </div>

        {/* Кнопка детям */}
        <div
          id="gender_button__toggler"
          className={styles.gender_buttons__toggler}
          onClick={() => handleGenderButtonClick(GenderTypes.CHILD)}
        >
          Детям
        </div>
      </div>
      <ul className={styles.things_list}>
        {products.map((product) => (
          <li
            key={product.id}
            className={styles.things_list__item}
            onClick={() => handleProductCardClick(product.barcode)}
          >
            <div className={styles.things_list__item_image_container}>
              <img
                src={product.images.length !== 0 ? product.images[0].url : "#"}
                className={styles.things_list__item_image}
              />
            </div>
            <div className={styles.things_list__item_title}>
              <p>{product.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogPage;
