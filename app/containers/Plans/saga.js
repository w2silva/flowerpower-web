import { takeLatest, put, select, call } from 'redux-saga/effects';
// import { push } from 'react-router-redux';
import request from 'utils/request';

import {
  REQUEST_BUNDLES
} from './constants';

import {
  bundlesSuccess,
  bundlesFailure
} from './actions';


export function* requestBundlesSaga() {
  try {
    const bundles = yield call(request, '/bundles');
    yield put(bundlesSuccess(bundles));
  } catch (err) {
    yield put(bundlesFailure(err.toString()));
  }
}

export default function* defaultSaga() {
  yield takeLatest(REQUEST_BUNDLES, requestBundlesSaga);
}
