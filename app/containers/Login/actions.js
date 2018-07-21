/*
 *
 * Login actions
 *
 */

import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_TOKEN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  TOKEN_SUCCESS,
  REQUEST_LOGOUT,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  CLEAR_TOKEN,
} from './constants';

export function requestLogin(email, password) {
  return {
    type: REQUEST_LOGIN,
    email,
    password,
  };
}

export function requestLoginToken(token) {
  return {
    type: REQUEST_LOGIN_TOKEN,
    token,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function requestLogout() {
  return {
    type: REQUEST_LOGOUT,
  };
}

export function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    error,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function tokenSuccess(token) {
  return {
    type: TOKEN_SUCCESS,
    token,
  };
}

export function clearToken() {
  return {
    type: CLEAR_TOKEN,
  };
}
