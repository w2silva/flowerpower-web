import { takeLatest, put, select, call, take } from 'redux-saga/effects';
//
import request from 'utils/request';
// import providers from 'utils/payment';

import {
  GET_THERAPY
} from './constants'

import {
  therapySuccess,
  therapyFailure,
} from './actions'

export function* getTherapySaga(action) {
  // 1. enviar os dados para o servidor
  try {
    const therapies = yield request(`/therapies/active`, { method: 'GET' });
    const target = action.profileType
    const targetTherapy = therapies.filter((t) => t.target === target)[0]
    yield put(therapySuccess(targetTherapy));
  } catch (err) {
    yield put(therapyFailure(err.toString()));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(GET_THERAPY, getTherapySaga);
}
