import React from 'react';
import { connect } from 'react-redux';

import ExpectationPage from './ExpectationPage';
import { setToDefault } from '../../store/actions/сurrentThingActions';
import { clearBasket } from '../../store/actions/basketThingsActions';

const ExpectationPageContainer = ({ setToDefault, history }) => (
  <ExpectationPage
    setToDefault={setToDefault}
    history={history}
    clearBasket={clearBasket}
  />
);

const mapDispatchToProps = {
  setToDefault,
  clearBasket,
};

export default connect(null, mapDispatchToProps)(ExpectationPageContainer);
