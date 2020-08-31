import React from 'react';
import * as sockets from '../../constants/sockets';

const PackToCheckoutButton = ({ getConsultant }) => (
  <button onClick={() => getConsultant(sockets.TO_CHECKOUT)}>
    Упаковать на кассу
  </button>
);

export default PackToCheckoutButton;
