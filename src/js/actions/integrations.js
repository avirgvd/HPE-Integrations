import { INTEGRATIONS_LOAD, INTEGRATIONS_SUCCESS_LOAD, INTEGRATIONS_UNLOAD, INTEGRATION_LOAD, INTEGRATION_UNLOAD } from '../actions';
import {
  watchTasks, unwatchTasks, watchTask, unwatchTask
} from '../api/tasks';

export function loadIntegrations() {
  console.log("actions/settings");

  let integrations = {integration1: "21"};
  // Temp code
  return {
    type: INTEGRATIONS_LOAD,
    integrations: integrations
  };


  // return dispatch => {
  //
  //   let uri = "/rest/integrations"
  //   let reqBody = {};
  //
  //   postRESTApi(uri, reqBody)
  //     .then(function(response) {
  //       console.log("response: ", response);
  //     }).then(function(result){
  //     console.log(result);
  //     dispatch(loadIntegrations_Success(result));
  //   }).catch(function(ex){
  //     console.log("Exception: ", ex);
  //   });
  //
  // };
}

export function unloadIntegrations() {
  unwatchTasks();
  return { type: INTEGRATIONS_UNLOAD };
}

export function loadIntegrations_Success(integrations) {
  return {
    type: INTEGRATIONS_SUCCESS_LOAD,
    integrations: integrations
  };
}

export function loadIntegration(id) {
  return dispatch => (
    watchTask(id)
      .on('success',
        payload => dispatch({ type: INTEGRATION_LOAD, payload })
      )
      .on('error',
        payload => dispatch({ type: INTEGRATION_LOAD, error: true, payload })
      )
      .start()
  );
}

export function unloadIntegration(id) {
  unwatchTask(id);
  return { type: INTEGRATION_UNLOAD };
}
