import { combineReducers } from 'redux';
import toeats from './toeats';

const reducers = {
  toeats: toeats
};

module.exports = combineReducers(reducers);
