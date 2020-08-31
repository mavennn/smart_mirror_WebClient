import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { getConsultantThunkCreator } from '../../store/actions/socketsActions';

const HeaderContainer = ({
  location,
  isConsultantCalled,
  getConsultantThunkCreator,
  basketCount,
}) => (
  <Header
    location={location}
    isConsultantCalled={isConsultantCalled}
    getConsultant={getConsultantThunkCreator}
    basketCount={basketCount}
  />
);

const mapStateToProps = (state) => ({
  location: state.router.location.pathname,
  isConsultantCalled: state.sockets.isConsultantCalled,
  basketCount: state.basketThings.count,
});

const mapDispatchToProps = {
  getConsultantThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
