import { takeLatest, put, select } from 'redux-saga/effects';

import request from 'utils/request';

import {
  clearMe,
  meSuccess,
} from 'containers/Me/actions';

import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_TOKEN,
  REQUEST_LOGOUT,
  CLEAR_TOKEN,
} from './constants';

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  clearToken,
  tokenSuccess,
} from './actions';

export function* requestLoginSaga(action) {
  // 1. enviar os dados para o servidor
  const authHeader = btoa(`${action.email}:${action.password}`);
  try {
    const { token, user } = yield request('/auth', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authHeader}`,
      },
    });

    window.localStorage.setItem('token', token);

    // 2. receber dados do servidor
    // 3. despachar ações com os dados recebidos
    yield put(meSuccess(user));
    yield put(tokenSuccess(token));
    yield put(loginSuccess());
  } catch (err) {
    yield put(loginFailure(err.toString()));
  }
  // 4. se der erro, despachar ação de erro
}

export function* requestLoginWithTokenSaga(action) {
  // 1. enviar os dados para o servidor
  try {
    const user = yield request('/users/me', {
      accessToken: action.token,
    });

    // 2. receber dados do servidor
    // 3. despachar ações com os dados recebidos
    yield put(meSuccess(user));
    yield put(tokenSuccess(action.token));
    yield put(loginSuccess());
  } catch (err) {
    yield put(loginFailure(err.toString()));
  }
  // 4. se der erro, despachar ação de erro
}

export function* requestLogoutSaga() {
  // 1. enviar os dados para o servidor
  try {
    yield put(clearToken());
    yield put(clearMe());
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailure(err.toString()));
  }
  // 4. se der erro, despachar ação de erro
}

export function* clearTokenSaga() {
  window.localStorage.removeItem('token');
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(REQUEST_LOGIN, requestLoginSaga);
  yield takeLatest(REQUEST_LOGIN_TOKEN, requestLoginWithTokenSaga);
  yield takeLatest(REQUEST_LOGOUT, requestLogoutSaga);
  yield takeLatest(CLEAR_TOKEN, clearTokenSaga);
}
