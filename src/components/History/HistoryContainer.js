import React from 'react';
import { connect } from 'react-redux';

import History from './History';
import { fetchThingInfo } from '../../store/actions/сurrentThingActions';

const HistoryContainer = ({ historyThings, fetchThingInfo }) => (
  <History historyThings={historyThings} fetchThing={fetchThingInfo} />
);

const mapStateToProps = (state) => ({
  historyThings: state.currentThing.history,
});

const mapDispatchToProps = { fetchThingInfo };

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
