import { takeLatest, put } from 'redux-saga/effects';
import { ADD_AFFILIATE } from './constants'
import { push } from 'react-router-redux';

// Individual exports for testing
export function* addAffiliate(action) {
  console.log('affiliate code: ' + action.code)
  yield put(push('/'))
}


export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(ADD_AFFILIATE, addAffiliate);
}
