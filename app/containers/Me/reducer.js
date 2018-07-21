/*
 *
 * Me reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_ME,
  ME_SUCCESS,
  ME_FAILURE,
  CLEAR_ME,
} from './constants';

const initialState = fromJS({});

function meReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ME:
      return state.set('requestingMe', fromJS(true))
        .delete('me')
        .delete('meFailure');
    case ME_SUCCESS:
      return state.set('me', fromJS(action.me))
        .delete('requestingMe')
        .delete('meFailure');
    case ME_FAILURE:
      return state.set('meFailure', fromJS(action.error))
        .delete('requestingMe')
        .delete('me');
    case CLEAR_ME:
      return state.delete('meFailure')
        .delete('requestingMe')
        .delete('me');
    default:
      return state;
  }
}

export default meReducer;
