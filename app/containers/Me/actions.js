/*
 *
 * Me actions
 *
 */

import {
  REQUEST_ME,
  ME_SUCCESS,
  ME_FAILURE,
  // TOKEN_SUCCESS,
  CLEAR_ME,
} from './constants';

export function requestMe() {
  return {
    type: REQUEST_ME,
  };
}

export function meSuccess(me) {
  return {
    type: ME_SUCCESS,
    me,
  };
}

export function meFailure(error) {
  return {
    type: ME_FAILURE,
    error,
  };
}

export function clearMe() {
  return {
    type: CLEAR_ME,
  };
}
