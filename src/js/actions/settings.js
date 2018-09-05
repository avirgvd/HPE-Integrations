/**
 * Created by govind on 9/5/18.
 */


import {postRESTApi} from '../api/server-rest';
import { SETTINGS_LOAD, SETTINGS_LOAD_SUCCESS, SETTINGS_UNLOAD } from '../actions';

export function loadSettings() {
  console.log("actions/settings");

  let settings = {setting1: "21"};
  // Temp code
  return {
    type: SETTINGS_LOAD,
    settings: settings
  };


  // return dispatch => {
  //
  //   let uri = "/rest/settings"
  //   let reqBody = {};
  //
  //   postRESTApi(uri, reqBody)
  //     .then(function(response) {
  //       console.log("response: ", response);
  //     }).then(function(result){
  //     console.log(result);
  //     dispatch(loadSettings_Success(result));
  //   }).catch(function(ex){
  //     console.log("Exception: ", ex);
  //   });
  //
  // };
}

export function unloadSettings() {
  return { type: SETTINGS_UNLOAD };
}

export function loadSettings_Success(settings){
  return {
    type: SETTINGS_LOAD_SUCCESS,
    settings: settings
  };

}