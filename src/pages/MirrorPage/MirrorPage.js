import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./MirrorPage.css";
import backIcon from "../../assets/icons/back.svg";

const MirrorPage = () => {
  const history = useHistory();

  return (
    <div id="mirror" className={styles.container}>
      <Link to="" className={styles.item}>
        <img
          src={backIcon}
          onClick={() => history.goBack()}
          className={styles.item__icon}
        />
      </Link>
    </div>
  );
};

export default MirrorPage;
