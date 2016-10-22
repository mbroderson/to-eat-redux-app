import { combineReducers } from 'redux';
// import your reducer here
import toeats from './toeats';

const reducers = {
  toeats: toeats
};

module.exports = combineReducers(reducers);
