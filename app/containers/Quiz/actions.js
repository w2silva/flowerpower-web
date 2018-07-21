/*
 *
 * Quiz actions
 *
 */

import {
  REQUEST_ALL,
  ALL_SUCCESS,
  ALL_FAILURE,
  RUN_DIAGNOSIS,
  DIAGNOSIS_SUCCESS,
  DIAGNOSIS_FAILURE,
  REQUEST_DIAGNOSIS,
  REQUEST_EMOTION_PRESELECTION_FINISH,
  UPDATE_EMOTION,
  EMOTION_SUCCESS,
  EMOTION_FAILURE
} from './constants';

export function requestAll() {
  return {
    type: REQUEST_ALL,
  };
}

export function allSuccess(flowers, emotions) {
  return {
    type: ALL_SUCCESS,
    flowers,
    emotions,
  };
}

export function allFailure(error) {
  return {
    type: ALL_FAILURE,
    error,
  };
}

export function runDiagnosis(profileId, target) {
  return {
    type: RUN_DIAGNOSIS,
    profileId,
    target,
  };
}

export function diagnosisSuccess(diagnosis) {
  return {
    type: DIAGNOSIS_SUCCESS,
    diagnosis,
  };
}

export function diagnosisFailure(error) {
  return {
    type: DIAGNOSIS_FAILURE,
    error,
  };
}

export function updateEmotion(diagnosisId, emotionId, phaseIdx) {
  return {
    type: UPDATE_EMOTION,
    diagnosisId,
    emotionId,
    phaseIdx
  };
}

export function finishEmotionPreselection(diagnosisId, emotionPreselectionId) {
  return {
    type: REQUEST_EMOTION_PRESELECTION_FINISH,
    diagnosisId,
    emotionPreselectionId
  };
}

export function emotionSuccess(diagnosis) {
  return {
    type: EMOTION_SUCCESS,
    diagnosis
  };
}

export function emotionFailure(error) {
  return {
    type: EMOTION_FAILURE,
    error,
  };
}

export function requestDiagnosis(id) {
  return {
    type: REQUEST_DIAGNOSIS,
    id
  };
}
