import { combineReducers } from 'redux';

import dashboard from './dashboard';
import nav from './nav';
import session from './session';
import tasks from './tasks';
import integrations from './integrations';
import settings from './settings'
export default combineReducers({
  dashboard,
  nav,
  session,
  settings
});
// export default combineReducers({
//   dashboard,
//   nav,
//   session,
//   tasks,
//   settings,
//   integrations
// });
