import React from "react";
import styles from "./BasketPage.css";
import HeaderContainer from "../../components/Header/HeaderContainer";
import Emoji from "../../components/Emoji/Emoji";


const EmptyBasket = () => {
  return (
    <div className={styles.container}>
      <HeaderContainer basketCount={0}/>
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

export default EmptyBasket;
