export const TOGGLE_BRAND = 'TOGGLE_BRAND';
export const TOGGLE_SEASON = 'TOGGLE_SEASON';
export const TOGGLE_SPORT = 'TOGGLE_SPORT';

export const APPLY_FILTER = 'APPLY_FILTER';
export const RESET_FILTER = 'RESET_FILTER';

export const toggleBrand = (brand) => ({
    type: TOGGLE_BRAND,
    brand,
  });
  
export const toggleSeason = (season) => ({
    type: TOGGLE_SEASON,
    season,
});

export const toggleSport = (sport) => ({
    type: TOGGLE_SPORT,
    sport,
});

export const applyFilter = () => (dispatch, getState)=> {
    const allThings = getState().catalog.allThings;
    const filter = getState().filter;
    console.log(allThings);
    console.log(filter);
    
};

export const reset = () => ({
    type: RESET_FILTER,
})