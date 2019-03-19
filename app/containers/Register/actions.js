/*
 *
 * Register actions
 *
 */

import {
  REGISTER_ME,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './constants';

export function registerMe(name, email, password, birthday, gender) {
  return {
    type: REGISTER_ME,
    name,
    email,
    password,
    birthday,
    gender
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerFailure(error) {
  return {
    type: REGISTER_FAILURE,
    error,
  };
}
