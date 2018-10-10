/*
 *
 * Benefits actions
 *
 */

import {
  GET_PURCHASES,
  PURCHASES_SUCCESS,
  PURCHASES_FAILURE
} from './constants';

export function getPurchases() {
  return {
    type: GET_PURCHASES,
  };
}

export function purchasesSuccess(purchases) {
  return {
    type: PURCHASES_SUCCESS,
    purchases
  };
}

export function purchasesFailure(error) {
  return {
    type: PURCHASES_FAILURE,
    error
  };
}
