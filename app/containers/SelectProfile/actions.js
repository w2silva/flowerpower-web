/*
 *
 * SelectProfile actions
 *
 */

import {
  GET_THERAPY,
  THERAPY_SUCCESS,
  THERAPY_FAILURE,
} from './constants';

export function getActiveTherapy(profileType) {
  return {
    type: GET_THERAPY,
    profileType,
  };
}

export function therapySuccess(therapy) {
  return {
    type: THERAPY_SUCCESS,
    therapy,
  };
}

export function therapyFailure(error) {
  return {
    type: THERAPY_FAILURE,
    error,
  };
}
