/*
 *
 * Results actions
 *
 */

import {
  GET_SUPPLIERS,
  SUPPLIERS_SUCCESS,
  SUPPLIERS_FAILURE,
} from './constants';

export function getSuppliers() {
  return {
    type: GET_SUPPLIERS,
  };
}

export function suppliersSuccess(suppliers) {
  return {
    type: SUPPLIERS_SUCCESS,
    suppliers
  };
}

export function suppliersFailure(error) {
  return {
    type: SUPPLIERS_FAILURE,
    error
  };
}
