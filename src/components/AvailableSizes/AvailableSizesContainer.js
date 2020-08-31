import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AvailableSizes from './AvailableSizes';
import { changeSize } from '../../store/actions/сurrentThingActions';

const AvailableSizesContainer = ({ sizes, changeSize }) => (
  <AvailableSizes sizes={sizes} changeSize={changeSize} />
);

AvailableSizesContainer.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  sizes: state.currentThing.availablesizes
});

export default connect(mapStateToProps, { changeSize })(
  AvailableSizesContainer
);
