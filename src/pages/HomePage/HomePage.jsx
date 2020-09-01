import React from "react";
import styles from "./HomePage.css";

import Emoji from "../../components/Emoji/Emoji";
import HeaderContainer from "../../components/Header/HeaderContainer";
import ThingInfoContainer from "../../components/ThingInfo/ThingInfo";
import Loader from "../../components/Loader/Loader";
import ThingInfo from "../../components/ThingInfo/ThingInfo";

const HomePage = ({ product }) => {
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
      <HeaderContainer />
      {product.isFetching ? loader : getPage(product.name)}
    </div>
  );
};

export default HomePage;
