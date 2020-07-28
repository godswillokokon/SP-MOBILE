import {combineReducers} from 'redux';
import {counterReducer} from './counterReducer';
import {userReducer} from './userReducer';
import {propsReducer} from './propsReducer';
import {paymentReducer} from './paymentsReducer';

export const allReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  properties: propsReducer,
  // payment: paymentReducer,
});
