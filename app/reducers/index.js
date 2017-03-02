import { combineReducers } from 'redux';

import accounts from './accounts'
import ipfs from './ipfs'

// Contracts
import SimpleStorage from './contracts/SimpleStorage'

const reducers = combineReducers({
  accounts,
  ipfs,
  SimpleStorage
});

export default reducers;
