/*
 *
 * Plans reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_BUNDLES,
  BUNDLES_SUCCESS,
  BUNDLES_FAILURE
} from './constants';

const initialState = fromJS({});

function plansReducer(state = initialState, action) {
  switch (action.type) {
    case BUNDLES_SUCCESS:
      return state.set('bundles', action.bundles)
        .delete('error')
        .delete('requestingBundles')
    case BUNDLES_FAILURE:
      return state.set('error', action.error)
        .delete('requestingBundles')
    case REQUEST_BUNDLES:
      return state.set('requestingBundles', true)
        .delete('error')
        .delete('bundles')
    default:
      return state;
  }
}

export default plansReducer;
