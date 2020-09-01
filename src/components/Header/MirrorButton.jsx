import React from "react";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
import styles from "./Header.css";

import eye from "../../assets/icons/eye.svg";

const MirrorButton = () => (
  <Link to={routes.MIRROR} className={styles.item}>
    <img src={eye} alt="Показать зеркало" className={styles.item__icon} />
    <div className={styles.item__text}>
      <h3>Показать зеркало</h3>
    </div>
  </Link>
);

export default MirrorButton;
