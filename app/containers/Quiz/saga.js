import { takeLatest, put, select, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';

import { makeSelectToken } from 'containers/Login/selectors';

import {
  REQUEST_ALL,
  RUN_DIAGNOSIS,
  REQUEST_DIAGNOSIS,
  REQUEST_EMOTION_PRESELECTION_FINISH,
  UPDATE_EMOTION,
  REQUEST_QUIZ_FINISH,
  UPDATE_QUIZ_ANSWER,
  REQUEST_FLOWER_FINISH,
  UPDATE_FLOWER,
  REQUEST_BACK,
  REQUEST_SEND_PRESCRIPTION
} from './constants';

import {
  allSuccess,
  allFailure,
  diagnosisSuccess,
  diagnosisFailure,
  emotionSuccess,
  emotionFailure,
  sendPrescriptionFailure,
  sendPrescriptionSuccess
} from './actions';

export function* requestAllSaga() {
  // 1. enviar os dados para o servidor

  try {
    // const therapies = yield request(`/therapies/active`, { method: 'GET' });
    const emotions = yield request('/emotions');
    const flowers = yield request('/flowers');
    // 2. receber dados do servidor
    // 3. despachar ações com os dados recebidos
    yield put(allSuccess(flowers, emotions));
  } catch (err) {
    // 4. se der erro, despachar ação de erro
    yield put(allFailure(err));
  }
}

export function* requestDiagnosisSaga(action) {
  // 1. enviar os dados para o servidor
  try {
    const accessToken = yield select(makeSelectToken());
    const diagnosis = yield request(`/diagnoses/${action.id}`, { method: 'GET', accessToken }); // eslint-disable-line no-underscore-dangle
    yield put(diagnosisSuccess(diagnosis));
    // yield put(push(`/quiz/${diagnosis.id}`));
  } catch (err) {
    // 4. se der erro, despachar ação de erro
    yield put(diagnosisFailure(`${err.toString()} ${err.stack ? err.stack : ''}`));
  }

}

export function* updateEmotionSaga(action) {
  // 1. enviar os dados para o servidor
  try {
    const accessToken = yield select(makeSelectToken());
    const diagnosis = yield request(`/diagnoses/${action.diagnosisId}`, { method: 'GET', accessToken }); // eslint-disable-line no-underscore-dangle

    console.log('diagnosis', diagnosis);
    console.log('action', action);
    const emotionId = action.emotionId
    const phaseIdx = action.phaseIdx
    console.log('emotionId', emotionId);

    const body = {
      emotion: emotionId,
      phaseIdx,
    }
    const newDiagnosis = yield request(`/diagnoses/${action.diagnosisId}/emotion`, { body, method: 'POST', accessToken }); // eslint-disable-line no-underscore-dangle
    console.log('newDiagnosis', newDiagnosis);

    yield put(emotionSuccess(newDiagnosis));

    // yield put(push(`/quiz/${diagnosis.id}`));
  } catch (err) {
    // 4. se der erro, despachar ação de erro
    yield put(emotionFailure(err.toString()));
  }
}

export function* finishEmotionPreselectionSaga(action) {
  try {
    const accessToken = yield select(makeSelectToken());
    const diagnosis = yield request(`/diagnoses/${action.diagnosisId}/emotion-preselected/${action.emotionPreselectionId}/finish`, { method: 'POST', accessToken }); // eslint-disable-line no-underscore-dangle
    // console.log('diagnosis', diagnosis);
    // 2. receber dados do servidor
    // 3. despachar ações com os dados recebidos
    yield put(diagnosisSuccess(diagnosis));
  } catch (err) {
    // 4. se der erro, despachar ação de erro
    yield put(diagnosisFailure(`${err.toString()} ${err.stack ? err.stack : ''}`));
  }
}

export function* updateQuizAnswerSaga(action) {
  // 1. enviar os dados para o servidor
  try {
    const accessToken = yield select(makeSelectToken());
    const diagnosis = yield request(`/diagnoses/${action.diagnosisId}`, { method: 'GET', accessToken }); // eslint-disable-line no-underscore-dangle

    const diagnosisId = action.diagnosisId
    const quizId = action.quizId
    const questionId = action.questionId
    const rating = action.rating

    const body = {
      question: questionId,
      rating
    }

    const newDiagnosis = yield request(`/diagnoses/${action.diagnosisId}/quizzes/${quizId}/answers`, { body, method: 'POST', accessToken }); // eslint-disable-line no-underscore-dangle

    yield put(diagnosisSuccess(newDiagnosis));

    // yield put(push(`/quiz/${diagnosis.id}`));
  } catch (err) {
    // 4. se der erro, despachar ação de erro
    yield put(emotionFailure(err.toString()));
  }
}

export function* finishQuizSaga(action) {
  try {
    const accessToken = yield select(makeSelectToken());
    const diagnosis = yield request(`/diagnoses/${action.diagnosisId}/quizzes/${action.quizId}/finish`, { method: 'POST', accessToken }); // eslint-disable-line no-underscore-dangle
    yield put(diagnosisSuccess(diagnosis));
  } catch (err) {
    yield put(diagnosisFailure(`${err.toString()} ${err.stack ? err.stack : ''}`));
  }
}

export function* updateFlowerSaga(action) {
  // 1. enviar os dados para o servidor
  try {
    const accessToken = yield select(makeSelectToken());
    const diagnosis = yield request(`/diagnoses/${action.diagnosisId}`, { method: 'GET', accessToken }); // eslint-disable-line no-underscore-dangle

    const diagnosisId = action.diagnosisId
    const flowerPostselectionId = action.flowerPostselectionId
    const flowerId = action.flowerId

    const body = {
      flower: flowerId,
    }

    const method = action.selection ? 'PUT' : 'DELETE'

    const newDiagnosis = yield request(`/diagnoses/${action.diagnosisId}/flower-postselected/${flowerPostselectionId}/flowers`, { body, method, accessToken }); // eslint-disable-line no-underscore-dangle

    yield put(diagnosisSuccess(newDiagnosis));

    // yield put(push(`/quiz/${diagnosis.id}`));
  } catch (err) {
    // 4. se der erro, despachar ação de erro
    yield put(emotionFailure(err.toString()));
  }
}

export function* finishFlowerSaga(action) {
  try {
    const accessToken = yield select(makeSelectToken());
    const diagnosis = yield request(`/diagnoses/${action.diagnosisId}/flower-postselected/${action.flowerPostselectionId}/finish`, { method: 'POST', accessToken }); // eslint-disable-line no-underscore-dangle
    yield put(diagnosisSuccess(diagnosis));
  } catch (err) {
    yield put(diagnosisFailure(`${err.toString()} ${err.stack ? err.stack : ''}`));
  }
}

export function* runDiagnosisSaga(action) {
  // 1. enviar os dados para o servidor

  try {
    const accessToken = yield select(makeSelectToken());
    const profileId = action.profileId
    const target = action.target
    let therapyId = action.therapy;
    if (!therapyId) {
      const therapies = yield request(`/therapies/active`, { method: 'GET' });
      console.log('therapies', therapies)
      console.log('target', target)
      therapyId = therapies.filter((t) => t.target === target)[0].id
    }

    let diagnosisBody = { }

    if (!profileId) {
      const user = yield call(request, '/users/me', {
        accessToken,
      });
      const clientId = user.client.id
      // console.log('user', user);
      const body = {
        target
      }
      const client = yield request(`/clients/${clientId}/profiles`, { body, method: 'POST', accessToken }); // eslint-disable-line no-underscore-dangle
      const profile = client.profiles[client.profiles.length - 1]
      // console.log('profile', profile);

      diagnosisBody.profile = profile._id
    } else {
      diagnosisBody.profile = profileId
    }

    const diagnosis = yield request(`/therapies/${therapyId}/start`, { body: diagnosisBody, method: 'POST', accessToken }); // eslint-disable-line no-underscore-dangle
    // console.log('diagnosis', diagnosis);
    // 2. receber dados do servidor
    // 3. despachar ações com os dados recebidos
    yield put(diagnosisSuccess(diagnosis));
    yield put(push(`/quiz/${diagnosis.id}`))
  } catch (err) {
    // 4. se der erro, despachar ação de erro
    yield put(diagnosisFailure(`${err.toString()} ${err.stack ? err.stack : ''}`));
  }
}

export function* goBack(action) {
  try {
    const accessToken = yield select(makeSelectToken());
    const id = action.diagnosisId
    const diagnosis = yield request(`/diagnoses/${id}`, { method: 'GET', accessToken });

    // find out where we are at this diagnosis
    let url = ''
    let lastState = ''
    for (let i = 0; i < diagnosis.emotions_preselected.length; i++) {
      const stage = diagnosis.emotions_preselected[i]
      if (['started', 'answering', 'ready'].indexOf(stage.state) >= 0 && lastState === 'finished') {
        const updated = yield request(url, { method: 'POST', accessToken });
        yield put(diagnosisSuccess(updated));
        return
      } else {
        lastState = stage.state
        url = `/diagnoses/${id}/emotions-preselected/${stage._id}/reactivate`
      }
    }
    for (let i = 0; i < diagnosis.quizzes.length; i++) {
      const stage = diagnosis.quizzes[i]
      if (['started', 'answering', 'ready'].indexOf(stage.state) >= 0 && lastState === 'finished') {
        const updated = yield request(url, { method: 'POST', accessToken });
        yield put(diagnosisSuccess(updated));
        return
      } else {
        lastState = stage.state
        url = `/diagnoses/${id}/quizzes/${stage._id}/reactivate`
      }
    }
    for (let i = 0; i < diagnosis.flowers_postselected.length; i++) {
      const stage = diagnosis.flowers_postselected[i]
      if (['started', 'answering', 'ready'].indexOf(stage.state) >= 0 && lastState === 'finished') {
        const updated = yield request(url, { method: 'POST', accessToken });
        yield put(diagnosisSuccess(updated));
        return
      } else {
        lastState = stage.state
        url = `/diagnoses/${id}/flower-postselected/${stage._id}/reactivate`
      }
    }
  } catch(err) {
    yield put(diagnosisFailure(`${err.toString()} ${err.stack ? err.stack : ''}`));
  }
}

export function* sendPrescription(action) {
  console.log('action', action)
  try {
    const accessToken = yield select(makeSelectToken());
    const id = action.id;
    const emails = action.emails;
    const suppliers = action.suppliers;
    const diagnosis = yield request(`/diagnoses/${id}/prescription/send`, { method: 'POST', accessToken, body: { emails, suppliers } });
    yield put(sendPrescriptionSuccess());
    yield put(diagnosisSuccess(diagnosis));
  } catch(err) {
    yield put(sendPrescriptionFailure(err.toString()));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(REQUEST_ALL, requestAllSaga);
  yield takeLatest(RUN_DIAGNOSIS, runDiagnosisSaga);
  yield takeLatest(REQUEST_DIAGNOSIS, requestDiagnosisSaga);
  yield takeLatest(UPDATE_EMOTION, updateEmotionSaga);
  yield takeLatest(REQUEST_EMOTION_PRESELECTION_FINISH, finishEmotionPreselectionSaga);
  yield takeLatest(UPDATE_QUIZ_ANSWER, updateQuizAnswerSaga);
  yield takeLatest(REQUEST_QUIZ_FINISH, finishQuizSaga);
  yield takeLatest(UPDATE_FLOWER, updateFlowerSaga);
  yield takeLatest(REQUEST_FLOWER_FINISH, finishFlowerSaga);
  yield takeLatest(REQUEST_BACK, goBack);
  yield takeLatest(REQUEST_SEND_PRESCRIPTION, sendPrescription);
}
