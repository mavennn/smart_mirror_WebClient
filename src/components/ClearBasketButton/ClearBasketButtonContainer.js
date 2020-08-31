import React from 'react';
import { connect } from 'react-redux';

import ClearBasketButton from './ClearBasketButton';
import { clearBasket } from '../../store/actions/basketThingsActions';

const ClearBasketButtonContainer = ({ clearBasket }) => (
  <ClearBasketButton clearBasket={clearBasket} />
);

export default connect(null, { clearBasket })(ClearBasketButtonContainer);
