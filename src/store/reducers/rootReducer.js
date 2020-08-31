import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import currentThingReducer from './currentThingReducer';
import socketsReducer from './socketsReducer';
import basketThingsReducer from './basketThingReducer';
import catalogReducer from './catalogReducer';
import filterReducer from './filter';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    currentThing: currentThingReducer,
    sockets: socketsReducer,
    basketThings: basketThingsReducer,
    catalog: catalogReducer,
    filter: filterReducer,
  });

export default createRootReducer;

