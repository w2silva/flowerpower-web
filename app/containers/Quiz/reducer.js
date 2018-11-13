/*
 *
 * Quiz reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_ALL,
  ALL_SUCCESS,
  ALL_FAILURE,

  CLEAN_DIAGNOSIS,
  SET_THERAPY,

  REQUEST_DIAGNOSIS,
  RUN_DIAGNOSIS,
  DIAGNOSIS_SUCCESS,
  DIAGNOSIS_FAILURE,

  UPDATE_EMOTION,
  EMOTION_SUCCESS,
  EMOTION_FAILURE,

  REQUEST_SEND_PRESCRIPTION,
  SEND_PRESCRIPTION_SUCCESS,
  SEND_PRESCRIPTION_FAILURE
} from './constants';

const initialState = fromJS({});

function quizReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ALL:
      return state.set('requestingAll', fromJS(true))
        .delete('flowers')
        .delete('emotions')
        .delete('allFailure')
    case ALL_SUCCESS:
      return state.delete('allFailure')
        .delete('requestingAll')
        .set('flowers', action.flowers)
        .set('emotions', action.emotions)
    case ALL_FAILURE:
      return state.set('allFailure', fromJS(true))
        .delete('requestingAll')
        .delete('flowers')
        .delete('emotions')

    case CLEAN_DIAGNOSIS:
      return state.delete('diagnosis')
        .delete('runningDiagnosis')
        .delete('requestingDiagnosis')
        .delete('runFailure')

    case SET_THERAPY:
      return state.set('therapy', action.therapy)

    case RUN_DIAGNOSIS:
      return state.set('runningDiagnosis', fromJS(true))
        .delete('diagnosis')
        .delete('runFailure')

    case REQUEST_DIAGNOSIS:
      return state.set('requestingDiagnosis', fromJS(true))
        .delete('diagnosis')
        .delete('runFailure')
    case DIAGNOSIS_SUCCESS:
      return state.set('diagnosis', action.diagnosis)
        .delete('runningDiagnosis')
        .delete('requestingDiagnosis')
        .delete('runFailure')
    case DIAGNOSIS_FAILURE:
      return state.set('runFailure', fromJS(true))
        .delete('runningDiagnosis')
        .delete('requestingDiagnosis')
        .delete('diagnosis')

    case UPDATE_EMOTION:
      return state.set('updatingEmotion', fromJS(true))
        .delete('emotionFailure')
    case EMOTION_SUCCESS:
      return state.set('diagnosis', action.diagnosis)
        .delete('updatingEmotion')
        .delete('emotionFailure')
    case EMOTION_FAILURE:
      return state.set('emotionFailure', fromJS(action.error))
        .delete('updatingEmotion')
        .delete('diagnosis')

    case REQUEST_SEND_PRESCRIPTION:
      return state.set('sendingPrescriptions', fromJS(true))
        .delete('sendPrescriptionFailure')
    case SEND_PRESCRIPTION_SUCCESS:
      return state.delete('sendingPrescriptions')
        .delete('sendPrescriptionFailure')
    case SEND_PRESCRIPTION_FAILURE:
      return state.set('sendPrescriptionFailure', fromJS(action.error))
        .delete('sendingPrescriptions')

    default:
      return state;
  }
}

export default quizReducer;
