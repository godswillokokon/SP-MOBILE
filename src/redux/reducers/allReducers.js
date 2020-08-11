import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {propsReducer} from './propsReducer';
import {careersReducer} from './careersReducer';
import {walletReducer} from './walletReducer';

export const allReducers = combineReducers({
  user: userReducer,
  properties: propsReducer,
  wallet: walletReducer,
  careers: careersReducer,
});
