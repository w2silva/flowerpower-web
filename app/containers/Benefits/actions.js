/*
 *
 * Benefits actions
 *
 */

import {
  GET_ALL,
  ALL_SUCCESS,
  ALL_FAILURE,
} from './constants';

export function getAll() {
  return {
    type: GET_ALL,
  };
}

export function allSuccess(purchases) {
  return {
    type: ALL_SUCCESS,
    purchases
  };
}

export function allFailure(error) {
  return {
    type: ALL_FAILURE,
    error
  };
}
