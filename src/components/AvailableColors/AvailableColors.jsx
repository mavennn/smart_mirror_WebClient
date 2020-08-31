import React, { useEffect } from 'react';
import getColorCode from '../../helpers/color-square';
import styles from './AvailableColors.css';
import underlineBlock from '../../helpers/underline-block';

const AvailableColors = ({ colors, changeColor, getColorCode }) => {
  useEffect(() => {
    underlineBlock('#colors_list_item', '2px solid greenyellow');
  });

  return (
    <div className={styles.available_colors}>
      <div className={styles.available_colors__title}>
        <p>
          <strong>Выберите цвет: </strong>
        </p>
      </div>
      <ul className={styles.available_colors__list}>
        {colors.map((color) => (
          <li
            id="colors_list_item"
            key={color}
            className={styles.available_colors__list_item}
          >
            <button
              className={styles.available_colors__button}
              style={{ 
                backgroundColor: getColorCode(color), 
                border: getColorCode(color) === 'black' ? '0.5px solid greenyellow' : '0' 
              }}
              onClick={() => changeColor(color)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableColors;
