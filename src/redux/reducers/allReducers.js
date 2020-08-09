import {combineReducers} from 'redux';
import {counterReducer} from './counterReducer';
import {userReducer} from './userReducer';
import {propsReducer} from './propsReducer';
// import {paymentReducer} from './paymentsReducer';
import {walletReducer} from './walletReducer';

export const allReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  properties: propsReducer,
  wallet: walletReducer,
  // payment: paymentReducer,
});
