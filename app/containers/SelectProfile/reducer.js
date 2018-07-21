/*
 *
 * SelectProfile reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_THERAPY,
  THERAPY_SUCCESS,
  THERAPY_FAILURE
} from './constants';

const initialState = fromJS({});

function selectProfileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THERAPY:
      return state.set('requestingTherapy', fromJS(true))
        .delete('therapy')
        .delete('therapyFailure');
    case THERAPY_SUCCESS:
      return state.set('therapy', action.therapy)
        .delete('requestingTherapy')
        .delete('therapyFailure');
    case THERAPY_FAILURE:
      return state.set('therapyFailure', fromJS(true))
        .delete('requestingTherapy')
        .delete('therapy');
    default:
      return state;
  }
}

export default selectProfileReducer;
