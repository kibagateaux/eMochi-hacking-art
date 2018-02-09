import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';
// import {branchRoutingMiddleware} from './middleware';
const middlewares = [reduxThunk];

if (__DEV__) {
  const {logger} = require('redux-logger');
  middlewares.push(logger);
}
const storeMiddleware = applyMiddleware(...middlewares)(createStore);
const store = storeMiddleware(reducers);

export default store;