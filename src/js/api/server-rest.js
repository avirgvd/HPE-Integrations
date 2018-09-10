
/** Wrapper for REST API calls to server */

import fetch from 'isomorphic-fetch';

let _hostname = window.location.host.replace('3000', '8102')

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
  console.log('REST request: ', JSON.stringify(restRequest));

  // return fetch('http://' + _hostname + url, restRequest);
  return fetch('http://' + _hostname + url, restRequest);

}

