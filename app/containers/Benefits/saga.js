import { takeLatest, put, select, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';
import { makeSelectToken } from 'containers/Login/selectors';

import {
  GET_PURCHASES,
} from './constants';

import {
  purchasesSuccess,
  purchasesFailure,
} from './actions';


export function* getPurchasesSaga() {
  // 1. enviar os dados para o servidor
  const accessToken = yield select(makeSelectToken());
  console.log(111);
  try {
    if (accessToken) {
      const purchases = yield request('/purchases/me', {
        accessToken,
      });
      yield put(purchasesSuccess(purchases));
    }
  } catch (err) {
    yield put(purchasesFailure(err.toString()));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(GET_PURCHASES, getPurchasesSaga);
}
