import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  CLEAR_BASKET,
} from '../actions/basketThingsActions';

const initialState = {
  basketThings: [],
  count: 0,
  isEmpty: true,
};

const basketThingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basketThings: state.basketThings.concat(action.payload),
        count: state.count + 1,
        isEmpty: false,
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basketThings: state.basketThings
          .slice(0, action.payload)
          .concat(state.basketThings.slice(action.payload + 1)),
        count: state.count - 1,
      };
    case CLEAR_BASKET:
      return initialState;
    default:
      return state;
  }
};

export default basketThingsReducer;
