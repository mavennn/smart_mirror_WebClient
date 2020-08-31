import {
  SET_SOCKET,
  GET_CONSULTANT,
  CANCEL_CONSULTANT,
} from '../actions/socketsActions';

const initialState = {
  socket: {},
  isConsultantCalled: false,
  query: {
    room: '',
    time: '',
  },
};

const socketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOCKET:
      return { ...state, socket: action.payload };
    case GET_CONSULTANT:
      return { ...state, isConsultantCalled: true };
    case CANCEL_CONSULTANT:
      return { ...state, isConsultantCalled: false };
    default:
      return state;
  }
};

export default socketsReducer;
