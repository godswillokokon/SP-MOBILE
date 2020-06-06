import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import allReducers from './reducers/allReducers';

const middlewares = [promiseMiddleware(), thunk];

if (__DEV__) {
  middlewares.push(createLogger());
}

export default createStore(
  allReducers,
  undefined,
  compose(applyMiddleware(...middlewares)),
);
