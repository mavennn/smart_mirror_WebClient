import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import createRootReducer from "./store/reducers/rootReducer";
import { useHistory } from 'react-router';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import './app.global.css';

const App = () => {

   const history = useHistory();
   const rootReducer = createRootReducer(history);
   const store = createStore(rootReducer, applyMiddleware(thunk));

   return <Root store={store} history={history} />
};

ReactDOM.render(<App />, document.getElementById("root"));
