import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AvailableColors from './AvailableColors';
import { changeColor } from '../../store/actions/сurrentThingActions';
import getColorCode from '../../helpers/color-square';

const AvailableColorsContainer = ({ colors, changeColor}) => (
  <AvailableColors colors={colors} changeColor={changeColor} getColorCode={getColorCode} />
);

AvailableColorsContainer.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state) => ({
  colors: state.currentThing.availablecolors,
});

export default connect(mapStateToProps, { changeColor })(
  AvailableColorsContainer
);
