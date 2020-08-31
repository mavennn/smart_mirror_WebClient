import React from 'react';
import { connect } from 'react-redux';

import GenderButtons from './GenderButtons';
import { toggleGender } from '../../store/actions/catalogActions';

function GenderButtonsContainer({ toggleGender }) {
  return <GenderButtons toggleGender={toggleGender} />;
}

const mapDispatchToProps = {
  toggleGender,
};

export default connect(null, mapDispatchToProps)(GenderButtonsContainer);
