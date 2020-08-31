import React from 'react';
import { connect } from 'react-redux';

import Recommendations from './Recommendations';
import { fetchThingInfo } from '../../store/actions/сurrentThingActions';

const RecommendationsContainer = ({ recs, fetchThingInfo }) => {
  let result = [];
  recs.map((item) => {
    if (result.findIndex((x) => x.name === item.name) === -1) {
      result.push(item);
    }
  });

  return <Recommendations recs={result} fetchThingInfo={fetchThingInfo} />;
};

const mapStateToProps = (state) => ({
  recs: state.currentThing.recs,
});

export default connect(mapStateToProps, { fetchThingInfo })(
  RecommendationsContainer
);
