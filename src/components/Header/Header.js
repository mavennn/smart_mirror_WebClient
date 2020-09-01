import React from "react";
import styles from "./Header.css";
import { useHistory } from "react-router";

// icons
import AlarmButton from "./AlarmButton";
import CatalogButton from "./CatalogButton";
import BasketButton from "./BasketButton";
import MirrorButton from "./MirrorButton";

const Header = ({ location, basketCount }) => {
  const history = useHistory();

  return (
    <>
      <div className={styles.header}>
        <AlarmButton />
        <CatalogButton location={location} backFunc={history.goBack} />
        <BasketButton
          location={location}
          goBackFunc={history.goBack}
          basketCount={basketCount}
        />
        <MirrorButton />
      </div>
    </>
  );
};

export default Header;
