import { takeLatest, put, select, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';
import { makeSelectToken } from 'containers/Login/selectors';


import {
  GET_SUPPLIERS
} from './constants';

import {
  suppliersSuccess,
  suppliersFailure,
} from './actions';


export function* getSuppliersSaga() {
  // 1. enviar os dados para o servidor
  const accessToken = yield select(makeSelectToken());

  try {
    console.log(11111);
    const suppliers = yield request('/suppliers', {
      method: 'GET',
      accessToken,
      });
    // 2. receber dados do servidor
    // 3. despachar ações com os dados recebidos
    yield put(suppliersSuccess(suppliers));
  } catch (err) {
    // 4. se der erro, despachar ação de erro
    yield put(suppliersFailure(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_SUPPLIERS, getSuppliersSaga);
}
