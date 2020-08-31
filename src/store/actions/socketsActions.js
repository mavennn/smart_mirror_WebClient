import Swal from 'sweetalert2';
import io from 'socket.io-client';
import sockets from '../../constants/sockets';
import config from '../../config';

export const SET_SOCKET = 'SET_SOCKET';
export const GET_CONSULTANT = 'GET_CONSULTANT';
export const CANCEL_CONSULTANT = 'CANCEL_CONSULTANT';

export const setSocket = () => (dispatch) => {
  const socket = io(`${config.API_URL}/rooms`);
  dispatch({ type: SET_SOCKET, payload: socket });
};

/* --------------------- ОБЩИЕ ПАРАМЕТРЫ --------------------- */

export const mutualQueryParams = () => ({
  roomNumber: process.env.ROOM,
  inProcessing: false,
  time: `${new Date().getHours()}:${new Date().getMinutes()}`,
  consultantName: '',
});

/* --------------------- ПРОСТО ВЫЗВАТЬ КОНСУЛЬТАНТА --------------------- */

export const createCallConsultantQuery = () => ({
  text: sockets.CALL_TEXT,
  ...mutualQueryParams(),
});

export const sendCallConsultantQueryToServer = (socket) => (dispatch) => {
  const query = createCallConsultantQuery();
  console.log('call consultant', query);
  socket.emit('getConsultant', query);
  Swal.fire({
    title: 'Консультант вызван',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle',
    },
  });

  dispatch({ type: GET_CONSULTANT });
};

/* --------------------- ПРИНЕСТИ ОДНУ ВЕЩЬ --------------------- */

export const createBringThingQuery = (title, vendorcode, size, price) => {
  const bringThingParams = {
    title,
    vendorcode,
    size,
    price,
    text: sockets.BRING_TEXT,
    type: sockets.BRING_THING,
  };
  return Object.assign(bringThingParams, mutualQueryParams());
};

export const sendBringThingQueryToServer = (socket, ...params) => (dispatch) => {
  const query = createBringThingQuery(...params);
  console.log('bring thing', query);
  socket.emit('getConsultant', query);
  Swal.fire({
    title: 'Вашу вещь сейчас принесут',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle',
    },
  });
  dispatch({ type: GET_CONSULTANT });
};

/* --------------------- ОТНЕСТИ НА КАССУ --------------------- */

// eslint-disable-next-line no-shadow,max-len
export const createToCheckoutQuery = (things) => ({
  text: sockets.TO_CHECKOUT_TEXT,
  type: sockets.TO_CHECKOUT,
  things,
  ...mutualQueryParams(),
});

export const sendToCheckOutQueryToServer = (socket, ...params) => (dispatch) => {
  const query = createToCheckoutQuery(...params);
  console.log('checkout', query);
  Swal.fire({
    title: 'Сейчас отнесем на кассу :)',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle',
    },
  });
  socket.emit('getConsultant', query);
  dispatch({ type: GET_CONSULTANT });
};

/* --------------------- ОТМЕНА ВЫЗОВА КОНСУЛЬТАНТА --------------------- */

export const createCancelConsultantQuery = () => ({
  text: sockets.CANCEL_CONSULTANT,
  ...mutualQueryParams(),
});

export const sendCancelConsultantQueryToServer = (socket) => (dispatch) => {
  const query = createCancelConsultantQuery();
  socket.emit('cancelConsultant', query);
  Swal.fire({
    title: 'Вызов отменен',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle',
    },
  });
  dispatch({ type: CANCEL_CONSULTANT });
};

/* --------------------- ОСНОВАНАЯ ФУНКЦИЯ ВЫЗОВА КОНСУЛЬТАНТА --------------------- */

export const getConsultantThunkCreator = (type, ...params) => (dispatch, getState) => {
  const state = getState();
  const { socket } = state.sockets;
  const {
    title, vendorcode, price, size,
  } = state.currentThing;
  const { basketThings } = state.basketThings;
  switch (type) {
    case sockets.CALL_CONSULTANT:
      dispatch(sendCallConsultantQueryToServer(socket));
      break;
    case sockets.BRING_THING:
      dispatch(
        sendBringThingQueryToServer(socket, title, vendorcode, price, size),
      );
      break;
    case sockets.TO_CHECKOUT:
      dispatch(sendToCheckOutQueryToServer(socket, basketThings));
      break;
    case sockets.CANCEL_CONSULTANT:
      dispatch(sendCancelConsultantQueryToServer(socket));
      break;
    default:
      console.log('undefined type');
  }
};
