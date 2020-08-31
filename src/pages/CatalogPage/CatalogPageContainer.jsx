import React from 'react';
import { connect } from 'react-redux';

import CatalogPage from './CatalogPage';

const CatalogPageContainer = ({ status }) => <CatalogPage status={status} />;

const mapStateToProps = (state) => ({
  status: state.catalog.status,
});

export default connect(mapStateToProps)(CatalogPageContainer);
