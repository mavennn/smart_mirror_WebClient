import React from 'react';
import { connect } from 'react-redux';

import PackToCheckoutButton from './PackToCheckoutButton';
import { getConsultantThunkCreator } from '../../store/actions/socketsActions';

const PackToCheckoutButtonContainer = ({ getConsultantThunkCreator }) => (
  <PackToCheckoutButton getConsultant={getConsultantThunkCreator} />
);

const mapDispatchToProps = {
  getConsultantThunkCreator,
};

export default connect(null, mapDispatchToProps)(PackToCheckoutButtonContainer);
