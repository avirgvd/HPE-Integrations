
/** Wrapper for REST API calls to server */

import fetch from 'isomorphic-fetch';

let _hostname = window.location.host.replace('3000', '3010')

export function getRESTApi(url, request) {

  console.log('URL: ', 'http://' + _hostname + url);

  return fetch('http://' + _hostname + url, request);
}

export function postRESTApi(url, reqBody) {

  console.log("postRESTApi: url:", url);
  console.log("postRESTApi: reqBody:", reqBody);

  let restRequest = {
    method: "POST",
    body: JSON.stringify(reqBody),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };

  console.log('URL: ', 'http://' + _hostname + url);
  console.log('RESTrEQUEST: ', JSON.stringify(restRequest));

  // return fetch('http://' + _hostname + url, restRequest);
  return fetch('http://' + _hostname + url, restRequest);

}

export function getFileBaseURL(bucket) {
  // The file server is HSStorageManager which is listening on 3040
  // return 'http://' + _hostname.replace('3000', '3040') + '/rest/';
  if(bucket != undefined)
    return 'http://' + _storagehost + '/rest/file/' + bucket + '/';
  else
    return 'http://' + _storagehost + '/rest/file/';
}

export function fileServerBaseURL() {
  return 'http://' + _storagehost + '/rest/';
}
