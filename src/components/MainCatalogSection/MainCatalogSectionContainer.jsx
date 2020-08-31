import React from 'react';
import { connect } from 'react-redux';

import FirstLayerContainer from '../Catalog/FirstLayer/FirstLayerContainer';
import SecondLayerContainer from '../Catalog/SecondLayer/SecondLayerContainer';
import ThirdLayerContainer from '../Catalog/ThirdLayer/ThirdLayerContainer';

const mainCatalogRenderer = (status) => {
  switch (status) {
    case 1:
      return <FirstLayerContainer />;
    case 2:
      return <SecondLayerContainer />;
    case 3:
      return <ThirdLayerContainer />;
    default:
      return null;
  }
};

const MainCatalogSectionContainer = ({ status }) => mainCatalogRenderer(status);

const mapStateToProps = (state) => ({
  status: state.catalog.status,
});

export default connect(mapStateToProps)(MainCatalogSectionContainer);
