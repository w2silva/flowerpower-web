/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  TOKEN_SUCCESS,
} from './constants';

const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state.set('requestingLogin', fromJS(true))
        .delete('loginSuccess')
        .delete('loginFailure')
        .delete('token');
    case LOGIN_SUCCESS:
      return state.set('loginSuccess', fromJS(true))
        .delete('requestingLogin')
        .delete('loginFailure');
    case LOGIN_FAILURE:
      return state.set('loginFailure', fromJS(action.error))
        .delete('requestingLogin')
        .delete('loginSuccess')
        .delete('token');
    case TOKEN_SUCCESS:
      return state.set('token', fromJS(action.token));
    default:
      return state;
  }
}

export default loginReducer;
