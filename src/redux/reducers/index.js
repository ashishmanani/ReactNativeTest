
import { combineReducers } from 'redux';
import * as types from '../types';
import homeReducer from './homeReducer';

const appReducer = combineReducers({
  homeReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT) {
    state = initialState
  }
  return appReducer(state, action)
}

export default rootReducer;