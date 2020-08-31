import React from 'react';
import { connect } from 'react-redux';

import SecondLayer from './SecondLayer';
import { fetchThings } from '../../../store/actions/catalogActions';

const SecondLayerContainer = ({ categories, fetchThings }) => {
  return <SecondLayer categories={categories} fetchThings={fetchThings} />;
};

const mapStateToProps = (state) => ({
  categories: state.catalog.categories,
});

export default connect(mapStateToProps, { fetchThings })(SecondLayerContainer);
