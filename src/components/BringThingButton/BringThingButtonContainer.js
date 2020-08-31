import React from 'react';
import { connect } from 'react-redux';
import { getConsultantThunkCreator } from '../../store/actions/socketsActions';

import BringThingButton from './BringThingButton';

const BringThingButtonContainer = ({ getConsultantThunkCreator }) => (
  <BringThingButton getConsultant={getConsultantThunkCreator} />
);

const mapDispatchToProps = {
  getConsultantThunkCreator
};

export default connect(null, mapDispatchToProps)(BringThingButtonContainer);
