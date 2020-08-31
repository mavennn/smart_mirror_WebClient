import React from 'react';
import { connect } from 'react-redux';

import AddToBasketButton from './AddToBasketButton';
import { addToBasket } from '../../store/actions/basketThingsActions';

const AddToBasketButtonContainer = ({ addToBasket, currentThing }) => (
  <AddToBasketButton addToBasket={addToBasket} currentThing={currentThing} />
);

const mapStateToProps = (state) => ({
  currentThing: state.currentThing,
});

const mapDispatchToProps = {
  addToBasket,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddToBasketButtonContainer);
