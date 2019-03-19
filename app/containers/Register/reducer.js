/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REGISTER_ME,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from 'containers/Register/constants';
import {
  TOKEN_SUCCESS,
} from 'containers/Login/constants';

const initialState = fromJS({});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ME:
      return state.set('registering', fromJS(true))
        .delete('registerSuccess')
        .delete('registerFailure')
        .delete('token');
    case REGISTER_SUCCESS:
      return state.set('registerSuccess', fromJS(true))
        .delete('registering')
        .delete('registerFailure');
    case REGISTER_FAILURE:
      return state.set('registerFailure', fromJS(action.error))
        .delete('registering')
        .delete('registerSuccess')
        .delete('token');
    case TOKEN_SUCCESS:
      return state.set('token', fromJS(action.token));
    default:
      return state;
  }
}

export default registerReducer;
