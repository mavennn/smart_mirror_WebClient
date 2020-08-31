import Swal from 'sweetalert2';

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';

export const addToBasket = (thing) => (dispatch, getState) => {
  const { basketThings } = getState().basketThings;
  const indexOfThingInBasket = basketThings.findIndex(
    (x) => x.ware === thing.ware && x.size === thing.size
  );
  if (indexOfThingInBasket === -1) {
    dispatch({
      type: ADD_TO_BASKET,
      payload: {
        name: thing.name,
        image: thing.pictures[0],
        barcode: thing.barcode,
        pid: thing.pid,
        ware: thing.ware,
        color: thing.color,
        size: thing.size,
        count: 1,
        price: thing.price,
      },
    });
    Swal.fire({
      title: 'Товар добавлен в корзину!',
      type: 'success',
      timer: '2000',
      customClass: {
        popup: 'alertContainer',
        title: 'alertTitle',
      },
    });
  } else {
    Swal.fire({
      title: 'Товар уже есть в корзине!',
      type: 'info',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'alertContainer',
        title: 'alertTitle',
      },
    });
  }
};

export const removeFromBasket = (ware, size) => (dispatch, getState) => {
  if (ware && size) {
    const { basketThings } = getState().basketThings;
    const indexOfThingInBasket = basketThings.findIndex(
      (x) => x.ware === ware && x.size === size,
    );
    dispatch({ type: REMOVE_FROM_BASKET, payload: indexOfThingInBasket });
  }
};

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});
