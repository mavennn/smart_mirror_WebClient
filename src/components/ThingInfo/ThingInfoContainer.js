import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ThingInfo from './ThingInfo';

const ThingInfoContainer = ({ title, brand, price }) => (
  <ThingInfo title={title} brand={brand} price={price} />
);

const mapStateToProps = (state) => ({
  title: state.currentThing.name,
  brand: state.currentThing.brand,
  price: state.currentThing.price,
});

ThingInfoContainer.propTypes = {
  title: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.any,
};

ThingInfoContainer.defaulProps = {
  title: 'Штанишки',
  brand: 'Louis Vuiton ',
  price: 123,
};

export default connect(mapStateToProps, null)(ThingInfoContainer);
