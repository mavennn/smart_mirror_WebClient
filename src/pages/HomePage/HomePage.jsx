import React from "react";
import styles from "./HomePage.css";

import Emoji from "../../components/Emoji/Emoji";
import HeaderContainer from "../../components/Header/HeaderContainer";
import ThingInfoContainer from "../../components/ThingInfo/ThingInfo";
import Loader from "../../components/Loader/Loader";
import ThingInfo from "../../components/ThingInfo/ThingInfo";
import api from "../../api";

const HomePage = ({ product }) => {
    debugger;
    const [basketItems, setBasketItems] = React.useState([]);

    React.useEffect(() => {
        const userId = localStorage.getItem("userId");


        // получаем вещи из корзины для пользователя
        if (userId) {
            api.basket.getAll(userId).then((data) => {
                setBasketItems(data);
            });
        }
    }, [setBasketItems]);

  const noThing = (
    <div className={styles.waiting}>
      <div className={styles.waiting_text}>
        Чтобы начать работу, отсканируйте штрихкод
        <Emoji symbol="👗" />
        <Emoji symbol="👉" />
      </div>
    </div>
  );

  const getPage = (name) => {
    if (name !== "") {
      return <ThingInfoContainer />;
    }
    return noThing;
  };

  const loader = (
    <>
      <div className={styles.loader_container}>
        <Loader />
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      <HeaderContainer basketCount={basketItems.length}/>
      {product.isFetching ? loader : getPage(product.name)}
    </div>
  );
};

export default HomePage;
