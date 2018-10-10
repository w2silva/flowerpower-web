import { takeLatest, put, select, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';
import { makeSelectToken } from 'containers/Login/selectors';

import {
  GET_ALL,
  GET_BUNDLES,
} from './constants';

import {
  allSuccess,
  allFailure,
  bundlesSuccess,
  bundlesFailure,
} from './actions';


export function* getAllSaga() {
  // 1. enviar os dados para o servidor
  const accessToken = yield select(makeSelectToken());
  try {
    if (accessToken) {
      const bundles = yield request('/bundles', {
        accessToken,
      });
      const assets = yield request('/assets', {
        accessToken,
      });
      const therapies = yield request('/therapies', {
        accessToken,
      });
      const purchases = yield request('/purchases/me', {
        accessToken,
      });
      yield put(allSuccess(purchases, bundles, assets, therapies));
    }
  } catch (err) {
    yield put(allFailure(err.toString()));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(GET_ALL, getAllSaga);
}
