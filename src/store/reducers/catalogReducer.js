import {
  TOGGLE_GENDER,
  TOGGLE_STATUS,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_THINGS_REQUEST,
  FETCH_THINGS_SUCCESS,
  FETCH_THINGS_FAILURE,
} from '../actions/catalogActions';

const initialState = {
  status: 1,
  // 1 - мужская обувь / женская обувь
  // 2 - подкатегории
  // 3 - сами товары
  gender: '',
  isChild: '',
  categories: [],
  allThings: [],
  isFetching: false,
  error: null,
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_GENDER:
      return {
        ...state,
        status: 1,
        gender: action.gender,
        categories: [],
      };
    case TOGGLE_STATUS:
      return { ...state, status: action.status };
    //  экшны для категорий
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        categories: action.categories,
        status: 2,
      };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    //  экшны для шмоток
    case FETCH_THINGS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_THINGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allThings: action.things,
        status: 3,
      };
    case FETCH_THINGS_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};

export default catalogReducer;
