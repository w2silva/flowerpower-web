import { take, takeLatest, call, put, select } from 'redux-saga/effects';

import request from 'utils/request';

import {
  tokenSuccess,
  loginSuccess,
  loginFailure
} from 'containers/Login/actions'

import {
  REGISTER_ME,
} from './constants';

import {
  meSuccess,
} from 'containers/Me/actions';

import {
  registerSuccess,
  registerFailure,
} from './actions';

export function* registerMeSaga(action) {
  // 1. enviar os dados para o servidor
  try {
    const me = {
      name: action.name,
      email: action.email,
      password: action.password,
    };

    const client = {
      profiles: [{
        name: action.name,
        gender: action.gender,
        birthday: action.birthday,
        target: 'human',
        main: true
      }]
    }


    yield call(request, '/users', { body: { user: me, client }, method: 'POST' });


    const authHeader = btoa(`${action.email}:${action.password}`);


    const { token, user } = yield request('/auth', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authHeader}`,
      },
    });


    window.localStorage.setItem('token', token);


    yield put(meSuccess(user));

    yield put(tokenSuccess(token));

    yield put(loginSuccess());

    yield put(registerSuccess());

    // if (action.origin === 'homepage') {
    //   yield put(push('/'));
    // } else if (action.origin === 'checkout') {
    //   yield put(push('/checkout'));
    // }
  } catch (err) {
    yield put(registerFailure(err.toString()));
  }
  // 4. se der erro, despachar ação de erro
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(REGISTER_ME, registerMeSaga);
}
