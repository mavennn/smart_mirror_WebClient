import React from 'react';
import { connect } from 'react-redux';
import './HomePage.css';

import HomePage from './HomePage';

const HomePageContainer = ({ currentThing }) => (
  <HomePage currentThing={currentThing} />
);

const mapStateToProps = (state) => ({
  currentThing: state.currentThing,
});

export default connect(mapStateToProps, null)(HomePageContainer);
