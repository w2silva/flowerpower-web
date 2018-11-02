/*
 *
 * Quiz actions
 *
 */

import {
  REQUEST_ALL,
  ALL_SUCCESS,
  ALL_FAILURE,
  CLEAN_DIAGNOSIS,
  SET_THERAPY,
  RUN_DIAGNOSIS,
  DIAGNOSIS_SUCCESS,
  DIAGNOSIS_FAILURE,
  REQUEST_DIAGNOSIS,
  UPDATE_EMOTION,
  REQUEST_EMOTION_PRESELECTION_FINISH,
  UPDATE_QUIZ_ANSWER,
  REQUEST_QUIZ_FINISH,
  UPDATE_FLOWER,
  REQUEST_FLOWER_FINISH,
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

export function cleanDiagnosis() {
  return {
    type: CLEAN_DIAGNOSIS
  }
}

export function setTherapy(therapy) {
  return {
    type: SET_THERAPY,
    therapy
  }
}

export function runDiagnosis(profileId, target, therapy) {
  return {
    type: RUN_DIAGNOSIS,
    profileId,
    target,
    therapy
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

export function updateQuizAnswer(diagnosisId, quizId, questionId, rating) {
  return {
    type: UPDATE_QUIZ_ANSWER,
    diagnosisId,
    quizId,
    questionId,
    rating
  };
}

export function finishQuiz(diagnosisId, quizId) {
  return {
    type: REQUEST_QUIZ_FINISH,
    diagnosisId,
    quizId
  };
}

export function updateFlower(diagnosisId, flowerPostselectionId, flowerId, selection) {
  return {
    type: UPDATE_FLOWER,
    diagnosisId,
    flowerPostselectionId,
    flowerId,
    selection
  };
}

export function finishFlowers(diagnosisId, flowerPostselectionId) {
  return {
    type: REQUEST_FLOWER_FINISH,
    diagnosisId,
    flowerPostselectionId
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
