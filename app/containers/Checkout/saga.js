import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';

import {
  BUNDLE_CHECKOUT,
  REQUEST_PAYMENT
} from './constants';

export function* bundleCheckoutSaga() {
  yield put(push('/checkout'))
}

export function* makePaymentSaga(action) {
  console.log(`request payment for bundle ${action.bundleId}`)
  console.log('payment', action.payment)
}


export default function* defaultSaga() {
  yield takeLatest(BUNDLE_CHECKOUT, bundleCheckoutSaga);
  yield takeLatest(REQUEST_PAYMENT, makePaymentSaga);
}
