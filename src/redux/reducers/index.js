import { combineReducers } from 'redux';

import authReducer from './auth.reducer';

const reducers = {
  authReducer
};

export default combineReducers(reducers)