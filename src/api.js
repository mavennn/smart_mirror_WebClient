import axios from "axios";
import config from "./config";

export default Object.freeze({
  products: {
    getAll: function () {
      return axios
        .get(`${config.API_URL}/api/products/GetAll`)
        .then((res) => res.data);
    },
    getByBarcode: function (barcode) {
      return axios
        .get(`${config.API_URL}/api/products/GetByBarcode/${barcode}`)
        .then((res) => res.data);
    },
  },
  catalog: {
    // 0 - male, 1 - female, 2 - child
    getProductByGender: function (gender) {
      return axios
        .get(
          `${
            config.API_URL
          }/api/catalog/GetProductsByGender/${gender.toString()}`
        )
        .then((res) => res.data);
    },
  },
  user: {
    login: function (userAgent) {
      return axios
        .post(`${config.API_URL}/api/user/Login`, { userAgent })
        .then((res) => res.data);
    },
    reset: function (userId) {
      return axios
        .post(`${config.API_URL}/api/user/reset/${userId}`)
        .then((res) => res.data);
    },
  },
  basket: {
    add: function (userId, productId) {
      return axios
        .post(`${config.API_URL}/api/basket/Add/${userId}/${productId}`)
        .then((res) => res.data);
    },
    removeItem: function (userId, productId) {
      return axios
        .post(`${config.API_URL}/api/basket/RemoveItem/${userId}/${productId}`)
        .then((res) => res.data);
    },
    clear: function (userId) {
      return axios
        .post(`${config.API_URL}/api/basket/Clear/${userId}`)
        .then((res) => res.data);
    },
    getAll: function (userId) {
      return axios
        .get(`${config.API_URL}/api/basket/GetAll/${userId}`)
        .then((res) => res.data);
    },
  },
  history: {
    write: function (userId, productId) {
      return axios
        .post(`${config.API_URL}/api/history/Write/${userId}/${productId}`)
        .then((res) => res.data);
    },
    getAll: function (userId) {
      return axios
        .get(`${config.API_URL}/api/history/GetAll/${userId}`)
        .then((res) => res.data);
    },
  },
});
