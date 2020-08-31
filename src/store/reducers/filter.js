import {
    TOGGLE_BRAND,
    TOGGLE_SEASON,
    TOGGLE_SPORT,
    APPLY_FILTER,
    RESET_FILTER
  } from '../actions/filter';

const initialState = {
    minPrice: 0,
    maxPrice: 0,
    brands: [],
    colors: [],
    seasons: [],
    sports: [],
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BRAND:
            if (!state.brands.includes(action.brand)) {
                return {
                    ...state, brands: [...state.brands, action.brand]
                }
            } else {
                return {
                    ...state,
                    brands: state.brands.filter(val => val !== action.brand),
                };
            }
            case TOGGLE_SEASON:
                if (!state.seasons.includes(action.season)) {
                    return {
                        ...state,
                        seasons: [...state.seasons, action.season],
                    };
                } else {
                    return {
                        ...state,
                        seasons: state.seasons.filter(val => val !== action.season),
                    };
                }
            case TOGGLE_SPORT:
                if (!state.sports.includes(action.sport)) {
                    return {
                        ...state,
                        sports: [...state.sports, action.sport],
                    };
                } else {
                    return {
                        ...state,
                        sports: state.sports.filter(val => val !== action.sport),
                        
                    }
                }
            case APPLY_FILTER:
                const { brands, seasons, sports } = state;
                console.log("brands", brands);
                console.log("seasons", seasons);
                console.log("sports", sports);
                return state;
            case RESET_FILTER: 
                return initialState;
            default:
                return state;
    }   
}

export default filterReducer;