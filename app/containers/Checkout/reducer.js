/*
 *
 * Checkout reducer
 *
 */

import { fromJS } from 'immutable';
import {
  BUNDLE_CHECKOUT,
} from './constants';

const initialState = fromJS({});

function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case BUNDLE_CHECKOUT:
      return state.set('bundle', action.bundle);
    default:
      return state;
  }
}

export default checkoutReducer;
