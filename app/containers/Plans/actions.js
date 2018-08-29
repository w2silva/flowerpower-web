/*
 *
 * Plans actions
 *
 */

import {
  REQUEST_BUNDLES,
  BUNDLES_SUCCESS,
  BUNDLES_FAILURE
} from './constants';

export function requestBundles() {
  return {
    type: REQUEST_BUNDLES,
  };
}

export function bundlesSuccess(bundles) {
  return {
    type: BUNDLES_SUCCESS,
    bundles
  }
}

export function bundlesFailure(error) {
  return {
    type: BUNDLES_FAILURE,
    error
  }
}
