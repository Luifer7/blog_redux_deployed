import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

//const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE) || compose;

const store = createStore(
    reducer,
    compose( applyMiddleware(thunk),
        typeof window === 'object' 
        && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' 
        ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;