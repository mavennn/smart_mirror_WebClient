import React from 'react';
import { connect } from 'react-redux';

import Carousel from './Carousel';

const CarouselContainer = ({ ware, pictures }) => (
  <Carousel ware={ware} pictures={pictures} />
);

const mapStateToProps = (state) => ({
  ware: state.currentThing.ware,
  pictures: state.currentThing.pictures,
});

export default connect(mapStateToProps, null)(CarouselContainer);
