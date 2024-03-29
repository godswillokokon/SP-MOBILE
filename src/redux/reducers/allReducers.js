import {combineReducers} from 'redux';
import {userReducer} from './userReducer';
import {propsReducer} from './propsReducer';
import {careersReducer} from './careersReducer';
import {walletReducer} from './walletReducer';
import { agentReducer } from './agentReducer';
import { searchReducer} from './searchReducer'

export const allReducers = combineReducers({
  user: userReducer,
  properties: propsReducer,
  wallet: walletReducer,
  careers: careersReducer,
  agent: agentReducer,
  search: searchReducer,
});
