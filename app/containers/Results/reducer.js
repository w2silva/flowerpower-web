/*
 *
 * Results reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_SUPPLIERS,
  SUPPLIERS_SUCCESS,
  SUPPLIERS_FAILURE,
} from './constants';

const initialState = fromJS({});

function resultsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUPPLIERS:
      return state.set('requestingSuppliers', fromJS(true))
        .delete('suppliers')
        .delete('suppliersFailure')
    case SUPPLIERS_SUCCESS:
      return state.set('suppliers', action.suppliers)
        .delete('requestingSuppliers')
        .delete('suppliersFailure');
    case SUPPLIERS_FAILURE:
      return state.set('suppliersFailure', fromJS(action.error))
        .delete('requestingSuppliers')
        .delete('suppliers')
    default:
      return state;
  }
}

export default resultsReducer;
