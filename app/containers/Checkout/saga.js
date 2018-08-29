import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';

import {
  BUNDLE_CHECKOUT
} from './constants';

export function* bundleCheckoutSaga() {
  yield put(push('/checkout'))
}

export default function* defaultSaga() {
  yield takeLatest(BUNDLE_CHECKOUT, bundleCheckoutSaga);
}
