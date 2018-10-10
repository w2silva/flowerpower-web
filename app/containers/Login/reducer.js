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
  REQUEST_LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
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
    case REQUEST_LOGOUT:
      return state.set('requestingLogout', fromJS(true))
        .delete('logoutSuccess')
        .delete('logoutFailure');
    case LOGOUT_SUCCESS:
      return state.set('logoutSuccess', fromJS(true))
        .delete('loginSuccess')
        .delete('requestingLogout')
        .delete('logoutFailure')
        .delete('token');
    case LOGOUT_FAILURE:
      return state.set('logoutFailure', fromJS(action.error))
        .delete('requestingLogout')
        .delete('logoutSuccess');
    case TOKEN_SUCCESS:
      return state.set('token', fromJS(action.token));
    default:
      return state;
  }
}

export default loginReducer;
