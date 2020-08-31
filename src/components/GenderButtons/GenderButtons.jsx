import React, { useEffect } from 'react';
import styles from './GenderButtons.css';

const buttonsHighlighting = () => {
  const buttons = [...document.querySelectorAll('#gender_button__toggler')];
  buttons.map((button) => {
    button.addEventListener('click', () => {
      buttons.map((color) => {
        color.style.borderBottom = '0px';
      });
      button.style.borderBottom = '3px solid greenyellow';
    });
  });
};

const GenderButtons = ({ toggleGender }) => {
  useEffect(() => {
    buttonsHighlighting();
  });
  return (
    <div className={styles.gender_buttons}>
      {/* Кнопка мужчинам */}
      <div
        id="gender_button__toggler"
        className={styles.gender_buttons__toggler}
        onClick={() => {
          toggleGender('male');
        }}
      >
        Мужчинам
      </div>

      {/* Кнопка женщинам */}
      <div
        id="gender_button__toggler"
        className={styles.gender_buttons__toggler}
        onClick={() => toggleGender('female')}
      >
        Женщинам
      </div>

      {/* Кнопка детям */}
      <div
        id="gender_button__toggler"
        className={styles.gender_buttons__toggler}
        onClick={() => toggleGender('child')}
        style={{ borderBottom: '3px solid greenyellow' }}
      >
        Детям
      </div>
    </div>
  );
};

export default GenderButtons;
