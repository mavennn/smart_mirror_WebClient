import React from 'react';
import { connect } from 'react-redux';

import ThirdLayer from './ThirdLayer';
import { fetchThingInfo } from '../../../store/actions/сurrentThingActions';
import { 
  toggleBrand, 
  toggleSeason, 
  toggleSport,
} from '../../../store/actions/filter';

const ThirdLayerContainer = ({ 
  things, 
  fetchThingInfo, 
  selectedBrands,
  selectedSeasons,
  selectedSports,
  toggleBrand, 
  toggleSeason, 
  toggleSport,
}) => {

  let allBrands = [];
  let allSeasons = [];
  let allSports = [];

  things.map((thing) => {
      if (thing.brand) {
          if (!allBrands.includes(thing.brand)) {
            allBrands.push(thing.brand);
          }
      }

      if (thing.season) {
          if (!allSeasons.includes(thing.season)) {
            allSeasons.push(thing.season);
          }
      }

      if (thing.sport) {
          if (!allSports.includes(thing.sport)) {
            allSports.push(thing.sport);
          }
      }
  });

  return (
    <ThirdLayer
      things={things}
      fetchThingInfo={fetchThingInfo}
      selectedBrands={selectedBrands}
      selectedSeasons={selectedSeasons}
      selectedSports={selectedSports}
      allBrands={allBrands}
      allSeasons={allSeasons}
      allSports={allSports}
      toggleBrand={toggleBrand}
      toggleSeason={toggleSeason}
      toggleSport={toggleSport}
    />
  )
};

const mapStateToProps = (state) => ({
  things: state.catalog.allThings,
  selectedBrands: state.filter.brands,
  selectedSeasons: state.filter.seasons,
  selectedSports: state.filter.sports
});

const mapDispatchToProps = {
  fetchThingInfo,
  toggleBrand, 
  toggleSeason, 
  toggleSport,
}

export default connect(mapStateToProps, mapDispatchToProps)(ThirdLayerContainer);
