import { INTEGRATIONS_LOAD, INTEGRATIONS_UNLOAD, INTEGRATION_LOAD, INTEGRATION_UNLOAD } from '../actions';
import {
  watchTasks, unwatchTasks, watchTask, unwatchTask
} from '../api/tasks';

export function loadIntegrations() {
  return dispatch => (
    watchTasks()
      .on('success',
        payload => dispatch({ type: INTEGRATIONS_LOAD, payload })
      )
      .on('error',
        payload => dispatch({ type: INTEGRATIONS_LOAD, error: true, payload })
      )
      .start()
  );
}

export function unloadIntegrations() {
  unwatchTasks();
  return { type: INTEGRATIONS_UNLOAD };
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
