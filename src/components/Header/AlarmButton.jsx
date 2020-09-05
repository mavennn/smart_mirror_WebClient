import React from "react";
import styles from "./Header.css";
import getConsultantIcon from "../../assets/icons/alarm.svg";
import cancelConcultantIcon from "../../assets/icons/error.svg";
import socketConnection from "../../socketConnection";

const AlarmButton = () => {

  const buttonIcon = isConsultantCalled ? cancelConcultantIcon : getConsultantIcon;

  const [isConsultantCalled, setIsConsultantCalled] = React.useState(false);

  const iconText = isConsultantCalled
    ? "Отменить вызов"
    : "Вызвать консультанта";

  const handleGetConsultantClick = () => {

      // эммитим событие "подойти"
      socketConnection.comeUp("comeUp")
          .then(() => {});
  };

  return (
    <a className={styles.item} onClick={() => handleGetConsultantClick()}>
      <img src={buttonIcon} alt="header_icon" className={styles.item__icon} />
      <div className={styles.item__text}>
        <h3>{iconText}</h3>
      </div>
    </a>
  );
};

export default AlarmButton;
