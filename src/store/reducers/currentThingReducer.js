import * as actions from '../actions/сurrentThingActions';

const initialState = {
  ware: '',
  name: '',
  price: 0,
  brand: '',
  size: '',
  color: '',
  pictures: [],
  availablesizes: [],
  availablecolors: [],
  history: [],
  isFetching: false,
  isFetchingRecs: false,
  error: '',
  errorRecs: '',
  recs: [],
};

const CurrentThingReducer = (state = initialState, action) => {
  switch (action.type) {
    // получение инфы о шмотке
    case actions.FETCH_THING_INFO_REQUEST:
      return { ...state, isFetching: true };
    case actions.FETCH_THING_INFO_SUCCESS:
      return { ...state, ...action.payload, isFetching: false };
    case actions.FETCH_THING_INFO_FAILURE:
      return { ...state, isFetching: false, error: action.payload };

    //  получение списка рекоммендаций
    case actions.FETCH_RECS_REQUEST:
      return { ...state, isFetchingRecs: true };
    case actions.FETCH_RECS_SUCCESS:
      return { ...state, isFetchingRecs: false, recs: action.recs };
    case actions.FETCH_RECS_FAILURE:
      return { ...state, isFetchingRecs: false, error: action.error };

    //  изменить цвет
    case actions.CHANGE_COLOR:
      return { ...state, color: action.payload };
    //  изменить размер
    case actions.CHANGE_SIZE:
      return { ...state, size: action.payload };
    //  добавить в историю
    case actions.ADD_TO_HISTORY:
      return { ...state, history: state.history.concat(action.payload) };
    case actions.SET_TO_DEFAULT:
      return initialState;
    default:
      return state;
  }
};

export default CurrentThingReducer;
