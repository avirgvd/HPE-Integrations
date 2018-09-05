/**
 * Created by govind on 9/5/18.
 */

import { SETTINGS_LOAD, SETTINGS_LOAD_SUCCESS, SETTINGS_UNLOAD} from '../actions';
import { createReducer } from './utils';
import Immutable from 'immutable';

const initialState = {
  settings: []
};

const handlers = {
  [SETTINGS_LOAD]: (state, action) => {
    console.log("reducers/settings: SETTINGS_LOAD action: ", action);
    // var newState = {};
    //
    // newState = state
    //   .setIn(['settings'], action.settings);
    //
    // return newState;
    return {settings: action.settings};

  },
  [SETTINGS_LOAD_SUCCESS]: (state, action) => {
    console.log("reducers/settings: SETTINGS_LOAD_SUCCESS action: ", action);
    if (!action.error) {
      action.payload.error = undefined;
      return action.payload;
    }
    return { error: action.payload };
  },
  [SETTINGS_UNLOAD]: () => initialState
};

export default createReducer(initialState, handlers);
