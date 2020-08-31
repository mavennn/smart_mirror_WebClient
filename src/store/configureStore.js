import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(history) {
    //Store creation
    return createStore(
        rootReducer(history),
        applyMiddleware(thunk)
    );
}
