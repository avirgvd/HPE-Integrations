import { INTEGRATIONS_LOAD, INTEGRATIONS_SUCCESS_LOAD, INTEGRATIONS_UNLOAD, INTEGRATION_LOAD, INTEGRATION_UNLOAD } from '../actions';
import { createReducer } from './utils';

const initialState = {
  integrations: []
};

const handlers = {
  [INTEGRATIONS_LOAD]: (state, action) => {
    return {integrations: action.integrations};
  },
  [INTEGRATIONS_SUCCESS_LOAD]: (state, action) => {
    return {integrations: action.integrations};
  },
  [INTEGRATIONS_UNLOAD]: () => initialState,
  [INTEGRATION_LOAD]: (state, action) => {
    if (!action.error) {
      action.payload.error = undefined;
      return action.payload;
    }
    return { error: action.payload };
  },
  [INTEGRATION_UNLOAD]: () => initialState
};

export default createReducer(initialState, handlers);
