/*
 *
 * Benefits reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_ALL,
  ALL_SUCCESS,
  ALL_FAILURE,

} from './constants';

const initialState = fromJS({});

function benefitsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return state.set('requestingAll', fromJS(true))
        .delete('bundles')
        .delete('assets')
        .delete('purchases')
        .delete('allFailure')
    case ALL_SUCCESS:
      return state.set('purchases', action.purchases)
        .set('assets', action.assets)
        .set('bundles', action.bundles)
        .set('therapies', action.therapies)
        .delete('requestingAll')
        .delete('allFailure');
    case ALL_FAILURE:
      return state.set('allFailure', fromJS(action.error))
        .delete('requestingAll')
        .delete('purchases')
        .delete('therapies')
        .delete('bundles')
        .delete('assets')
    default:
      return state;
  }
}

export default benefitsReducer;
