import {counterReducer} from './counterReducer';
import {user} from './user';
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
  counter: counterReducer,
  user: user,
});
