import React from "react";
import styles from "./Header.css";

import alarm from "../../assets/icons/alarm.svg";
import error from "../../assets/icons/error.svg";
import sockets from "../../constants/sockets";

const AlarmButton = ({ isConsultantCalled, getConsultant }) => {
  const params = isConsultantCalled
    ? sockets.CANCEL_CONSULTANT
    : sockets.CALL_CONSULTANT;

  const image = isConsultantCalled ? error : alarm;

  const iconText = isConsultantCalled
    ? "Отменить вызов"
    : "Вызвать консультанта";

  return (
    <a className={styles.item} onClick={() => getConsultant(params)}>
      <img src={image} alt="header_icon" className={styles.item__icon} />
      <div className={styles.item__text}>
        <h3>{iconText}</h3>
      </div>
    </a>
  );
};

export default AlarmButton;
