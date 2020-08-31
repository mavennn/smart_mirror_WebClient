import React from 'react';
import { connect } from 'react-redux';

import Filter from './Filter';
import { 
    toggleBrand, 
    toggleSeason, 
    toggleSport,
    applyFilter
} from '../../../store/actions/filter';

const FilterContainer = ({
    things,
    toggleBrand, 
    toggleSeason, 
    toggleSport,
    applyFilter,
    filter
}) => {
    

    return  <Filter
                brands={brands}
                seasons={seasons}
                sports={sports}
                toggleBrand={toggleBrand}
                toggleSeason={toggleSeason}
                toggleSport={toggleSport}
                applyFilter={applyFilter}
            />
};

const mapStateToProps = (state) => ({
    things: state.catalog.allThings,
    filter: state.filter,
});

const mapDispatchToProps = {
    toggleBrand, 
    toggleSeason, 
    toggleSport,
    applyFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);