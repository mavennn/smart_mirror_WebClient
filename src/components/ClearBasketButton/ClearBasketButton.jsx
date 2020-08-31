import React from 'react';

const ClearBasketButton = ({ clearBasket }) => (
  <button onClick={() => clearBasket()}>Очистить корзину</button>
);

export default ClearBasketButton;
